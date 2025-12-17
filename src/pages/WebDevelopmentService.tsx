import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Smartphone, Zap, Globe, Layers, Terminal } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MouseTrail from '../components/MouseTrail';

export default function WebDevelopmentService() {
  const features = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored solutions built from scratch to match your unique business requirements and brand identity.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Pixel-perfect interfaces that work flawlessly across all devices - desktop, tablet, and mobile.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast load times and optimized code for superior user experience and SEO rankings.',
    },
    {
      icon: Globe,
      title: 'WebGL & 3D Experiences',
      description: 'Immersive 3D graphics and interactive experiences that captivate and engage your audience.',
    },
    {
      icon: Layers,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from frontend interfaces to backend APIs and database architecture.',
    },
    {
      icon: Terminal,
      title: 'Modern Tech Stack',
      description: 'Built with cutting-edge technologies: React, TypeScript, Node.js, Three.js, and more.',
    },
  ];

  const technologies = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
    'Three.js', 'WebGL', 'Node.js', 'Express',
    'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'
  ];

  return (
    <div className="min-h-screen">
      <MouseTrail />
      <Navigation isServicePage={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[var(--electric-blue)] hover:text-[var(--accent-green)] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-5xl sm:text-7xl mb-6">
            <span className="gradient-text">Website Design</span>
            <br />
            <span className="text-[var(--text-light)]">& Development</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mb-8">
            High-craft front-end engineering, immersive 3D/WebGL experiences, and performant full-stack solutions built for scale and impact.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,255,255,0.2)] border border-[var(--electric-blue)]/20">
            <img
              src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjUzODA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Web Development"
              className="w-full h-[400px] sm:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-bg)] to-transparent" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            What We <span className="gradient-text">Engineer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--primary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/10 hover:border-[var(--electric-blue)] transition-all duration-400 hover:shadow-[0_10px_60px_rgba(0,255,255,0.2)] hover:-translate-y-1 group"
              >
                <feature.icon className="w-12 h-12 text-[var(--accent-green)] mb-4 group-hover:text-[var(--electric-blue)] transition-colors" />
                <h3 className="text-2xl mb-3 text-[var(--text-light)]">{feature.title}</h3>
                <p className="text-[var(--text-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[var(--secondary-bg)] border border-[var(--electric-blue)]/20 rounded-full text-[var(--text-light)] hover:border-[var(--accent-green)] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Work Showcase */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-6 text-center">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="text-center text-[var(--text-muted)] text-xl mb-12">
            One of our premium web development projects
          </p>

          <div className="bg-[var(--primary-bg)] rounded-2xl overflow-hidden border border-[var(--electric-blue)]/20 shadow-[0_20px_80px_rgba(0,255,255,0.2)]">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NTQxMDE0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ghaniyy Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl mb-4 text-[var(--text-light)]">
                  Ghaniyy
                </h3>
                <p className="text-[var(--text-muted)] text-lg mb-6">
                  A modern, high-performance web application featuring sleek design, smooth animations, and seamless user experience. Built with cutting-edge technologies and optimized for all devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-4 py-2 bg-[var(--secondary-bg)] border border-[var(--electric-blue)]/30 rounded-full text-sm text-[var(--accent-green)]">
                    React
                  </span>
                  <span className="px-4 py-2 bg-[var(--secondary-bg)] border border-[var(--electric-blue)]/30 rounded-full text-sm text-[var(--accent-green)]">
                    Responsive Design
                  </span>
                  <span className="px-4 py-2 bg-[var(--secondary-bg)] border border-[var(--electric-blue)]/30 rounded-full text-sm text-[var(--accent-green)]">
                    Modern UI
                  </span>
                </div>
                <a
                  href="https://ghaniyy.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--electric-blue)] text-[var(--primary-bg)] px-8 py-4 rounded-full transition-all duration-400 hover:bg-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105 text-center"
                >
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl mb-6">
            Ready to Build Something <span className="gradient-text">Extraordinary</span>?
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Let's discuss your project and create a web experience that stands out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[var(--electric-blue)] text-[var(--primary-bg)] px-10 py-4 rounded-full transition-all duration-400 hover:bg-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/#process"
              className="bg-transparent border-2 border-[var(--electric-blue)] text-[var(--electric-blue)] px-10 py-4 rounded-full transition-all duration-400 hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.3)]"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
