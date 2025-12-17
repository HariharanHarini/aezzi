import React, { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trail = trailRef.current;
    if (!trail) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      trail.style.opacity = '1';
    };

    const handleMouseOut = () => {
      trail.style.opacity = '0';
    };

    const updateTrail = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      trail.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.5)`;
      animationId = requestAnimationFrame(updateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    updateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={trailRef}
      className="fixed w-[5px] h-[5px] rounded-full pointer-events-none z-[9999] opacity-0"
      style={{
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px 5px var(--electric-blue), 0 0 20px 10px var(--accent-green)',
        filter: 'blur(2px)',
        transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
      }}
    />
  );
}
