// src/components/HeroCanvas.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      mainShape: THREE.Mesh,
      emittedParticles: THREE.Points,
      crystalParticles: THREE.Mesh[] = [];

    const NUM_EMIT_PARTICLES = 500;
    const NUM_CRYSTALS = 80;
    const PARTICLE_SPEED = 1.2;
    const PARTICLE_LIFETIME = 1.5;

    const clock = new THREE.Clock();

    // mouse controls ONLY the central shape
    const mouse = new THREE.Vector2(0, 0);       // raw -1..1
    const smoothedMouse = new THREE.Vector2(0, 0);

    let particleIndex = 0;

    // ===== SCENE / CAMERA / RENDERER =====
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.set(0, 0, 150);

    // ===== LIGHTS =====
    scene.add(new THREE.AmbientLight(0x050a12, 0.4));

    const greenLight = new THREE.PointLight(0x39ff14, 2.2, 600);
    greenLight.position.set(120, 120, 160);
    scene.add(greenLight);

    const blueLight = new THREE.PointLight(0x00ffff, 2.0, 600);
    blueLight.position.set(-120, -120, 160);
    scene.add(blueLight);

    const dirLight1 = new THREE.DirectionalLight(0x9bfff6, 1.2);
    dirLight1.position.set(3, 6, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3aff6a, 1.0);
    dirLight2.position.set(-4, -3, 6);
    scene.add(dirLight2);

    // ===== CENTRAL GEO (network / “hexagon”) =====
    const shapeGeometry = new THREE.IcosahedronGeometry(60, 0);
    const shapeMaterial = new THREE.MeshPhongMaterial({
      color: 0x02040a,
      emissive: 0x00ffff,
      emissiveIntensity: 0.9,
      specular: 0x39ff14,
      shininess: 120,
      transparent: true,
      opacity: 0.5,
      wireframe: true,
    });

    mainShape = new THREE.Mesh(shapeGeometry, shapeMaterial);
    mainShape.position.set(0, 0, 0);
    scene.add(mainShape);

    // ===== EMISSION PARTICLES FROM CENTER =====
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(NUM_EMIT_PARTICLES * 3);
    const velocities = new Float32Array(NUM_EMIT_PARTICLES * 3);
    const lifetimes = new Float32Array(NUM_EMIT_PARTICLES);

    for (let i = 0; i < NUM_EMIT_PARTICLES; i++) {
      positions[i * 3] = positions[i * 3 + 1] = positions[i * 3 + 2] = 0;
      velocities[i * 3] = velocities[i * 3 + 1] = velocities[i * 3 + 2] = 0;
      lifetimes[i] = 0;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "velocity",
      new THREE.BufferAttribute(velocities, 3)
    );
    particleGeometry.setAttribute(
      "lifetime",
      new THREE.BufferAttribute(lifetimes, 1)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 3.0,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
    });

    emittedParticles = new THREE.Points(particleGeometry, particleMaterial);
    emittedParticles.frustumCulled = false;
    scene.add(emittedParticles);

    // ===== DARKER 8-FACE CRYSTALS (FLOAT + SELF SPIN ONLY) =====
    const baseCrystalGeometry = new THREE.OctahedronGeometry(1, 0); // 8 faces

    for (let i = 0; i < NUM_CRYSTALS; i++) {
      // Dual-shade darker cyan/green
      const baseColor = new THREE.Color().setHSL(0.47, 0.75, 0.28);   // darker cyan
      const emissiveColor = new THREE.Color().setHSL(0.36, 0.85, 0.20); // dark green glow

      const crystalMaterial = new THREE.MeshPhysicalMaterial({
        color: baseColor,
        emissive: emissiveColor,
        emissiveIntensity: 0.25,   // subtle glow
        metalness: 0.45,
        roughness: 0.32,
        clearcoat: 1,
        clearcoatRoughness: 0.18,
        transparent: true,
        opacity: 0.85,             // slightly see-through
        transmission: 0.15,
        ior: 1.25,
      });

      const crystal = new THREE.Mesh(
        baseCrystalGeometry.clone(),
        crystalMaterial
      );

      // Elongate so it looks like a real crystal shard
      const scale = 2.0 + Math.random() * 2.0;
      crystal.scale.set(scale * 0.8, scale * 1.6, scale * 0.8);

      // Random starting position in space
      const spreadX = (Math.random() - 0.5) * 420;
      const spreadY = (Math.random() - 0.5) * 320;
      const spreadZ = (Math.random() - 0.5) * 220;
      crystal.position.set(spreadX, spreadY, spreadZ);

      // Store float data
      (crystal as any).initialPosition = crystal.position.clone();
      (crystal as any).floatSpeed = 0.25 + Math.random() * 0.35;
      (crystal as any).floatOffset = Math.random() * Math.PI * 2;

      // Self rotation speed
      (crystal as any).selfRotSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.018,
        (Math.random() - 0.5) * 0.012
      );

      // Random initial orientation
      crystal.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      crystalParticles.push(crystal);
      scene.add(crystal);
    }

    // ===== EVENTS =====
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;  // -1..1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // ===== PARTICLE RESET =====
    const resetParticle = (i: number) => {
      const posArr = (emittedParticles.geometry.attributes
        .position as THREE.BufferAttribute).array as Float32Array;
      const velArr = (emittedParticles.geometry.attributes
        .velocity as THREE.BufferAttribute).array as Float32Array;
      const lifeArr = (emittedParticles.geometry.attributes
        .lifetime as THREE.BufferAttribute).array as Float32Array;

      posArr[i * 3] = mainShape.position.x;
      posArr[i * 3 + 1] = mainShape.position.y;
      posArr[i * 3 + 2] = mainShape.position.z;

      velArr[i * 3] = (Math.random() - 0.5) * PARTICLE_SPEED * 0.5;
      velArr[i * 3 + 1] =
        Math.random() * PARTICLE_SPEED * 1.5 + 0.1;
      velArr[i * 3 + 2] = (Math.random() - 0.5) * PARTICLE_SPEED * 0.5;

      lifeArr[i] = PARTICLE_LIFETIME;
    };

    // ===== ANIMATION LOOP =====
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse -> central shape position
      smoothedMouse.lerp(mouse, 0.08);
      const moveRangeX = 18;
      const moveRangeY = 12;
      const targetX = smoothedMouse.x * moveRangeX;
      const targetY = smoothedMouse.y * moveRangeY;

      mainShape.position.x += (targetX - mainShape.position.x) * 0.08;
      mainShape.position.y += (targetY - mainShape.position.y) * 0.08;

      // Central geo still rotates and pulses
      mainShape.rotation.x += 0.005;
      mainShape.rotation.y += 0.008;
      const scalePulse = 1.0 + Math.sin(time * 2) * 0.05;
      mainShape.scale.set(scalePulse, scalePulse, scalePulse);

      // CRYSTALS: float randomly + self spin ONLY
      crystalParticles.forEach((crystal, i) => {
        const initialPos = (crystal as any)
          .initialPosition as THREE.Vector3;
        const floatSpeed = (crystal as any).floatSpeed as number;
        const floatOffset = (crystal as any).floatOffset as number;
        const selfRotSpeed = (crystal as any)
          .selfRotSpeed as THREE.Vector3;

        const t = time * floatSpeed + floatOffset;

        const floatX = Math.sin(t * 0.7) * 8;
        const floatY = Math.cos(t * 0.9) * 10;
        const floatZ = Math.sin(t * 0.6) * 8;

        crystal.position.set(
          initialPos.x + floatX,
          initialPos.y + floatY,
          initialPos.z + floatZ
        );

        // self spin
        crystal.rotation.x += selfRotSpeed.x;
        crystal.rotation.y += selfRotSpeed.y;
        crystal.rotation.z += selfRotSpeed.z;

        // subtle shimmer
        const material = crystal.material as THREE.MeshPhysicalMaterial;
        const baseOpacity = 0.85;
        material.opacity =
          baseOpacity + Math.sin(time * 1.3 + i) * 0.04;
      });

      // PARTICLES
      const posArr = (emittedParticles.geometry.attributes
        .position as THREE.BufferAttribute).array as Float32Array;
      const velArr = (emittedParticles.geometry.attributes
        .velocity as THREE.BufferAttribute).array as Float32Array;
      const lifeArr = (emittedParticles.geometry.attributes
        .lifetime as THREE.BufferAttribute).array as Float32Array;

      const particlesToEmit = 5;
      for (let i = 0; i < particlesToEmit; i++) {
        if (lifeArr[particleIndex] <= 0.0) {
          resetParticle(particleIndex);
        }
        particleIndex = (particleIndex + 1) % NUM_EMIT_PARTICLES;
      }

      for (let i = 0; i < NUM_EMIT_PARTICLES; i++) {
        const index = i * 3;
        if (lifeArr[i] > 0) {
          velArr[index + 1] -= 9.8 * delta * 0.1;
          posArr[index] += velArr[index] * delta;
          posArr[index + 1] += velArr[index + 1] * delta;
          posArr[index + 2] += velArr[index + 2] * delta;
          lifeArr[i] -= delta;
          (emittedParticles.material as THREE.PointsMaterial).opacity =
            lifeArr[i] / PARTICLE_LIFETIME;
        } else {
          posArr[index] = posArr[index + 1] = posArr[index + 2] = 0;
        }
      }

      emittedParticles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // ===== CLEANUP =====
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-10"
    />
  );
}
