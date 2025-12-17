import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, TrendingUp, MessageCircle, Zap, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroCanvas from '../components/HeroCanvas';
import MouseTrail from '../components/MouseTrail';

export default function HomePage() {
  // Refs for contact form inputs so we can build a WhatsApp message dynamically
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const projectRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    // Scroll observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-20');
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Website designs and development',
      description:
        "High-craft front-end engineering, immersive 3D/WebGL experiences, and performant full-stack solutions built for scale and impact. We don't just build sites; we engineer digital artifacts.",
      icon: Code,
      link: '/services/web-development',
    },
    {
      title: 'Meta ads & Google ads',
      description:
        'Data-driven strategy and execution for Meta (Facebook/Instagram) and Google Ads. Maximizing ROI through precise targeting, creative optimization, and continuous AI-assisted testing.',
      icon: TrendingUp,
      link: '/services/meta-google-ads',
    },
    {
      title: 'Social media marketing',
      description:
        'Creating cohesive, engaging social media strategies that translate into measurable community growth and conversions across platforms. Focused on high-quality visual content and narrative.',
      icon: MessageCircle,
      link: '/services/social-media',
    },
    {
      title: 'Brand management',
      description:
        "Defining and managing your brand's presence. From initial logo design and style guides to ensuring consistency across all digital and physical touchpoints for lasting impact.",
      icon: Zap,
      link: '/services/brand-management',
    },
    {
      title: 'SEO',
      description:
        'Technical SEO auditing, content strategy, and link-building to ensure your digital platform is discoverable and ranks highly. Focus on performance and clean architecture.',
      icon: Search,
      link: '/services/seo',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: "Let's Talk First on a Discovery Call",
      description:
        'We begin by understanding your business goals, target audience, and specific requirements. This helps us tailor our approach to best meet your needs.',
    },
    {
      number: '02',
      title: 'Research and Planning',
      description:
        'Our team conducts thorough research on your industry, competitors, and market trends. We then develop a detailed project plan and strategy to ensure we are aligned with your vision.',
    },
    {
      number: '03',
      title: 'Website Mock-Up',
      description:
        'We create wireframes and design mock-ups that visually represent the structure and layout of your new website. This gives you a clear idea of the user experience and design direction.',
    },
    {
      number: '04',
      title: 'Design and Development',
      description:
        'Our designers and developers work collaboratively to bring the mock-up to life. We focus on creating a responsive, aesthetically pleasing, and functional website that meets your specifications.',
    },
    {
      number: '05',
      title: 'Review and Feedback',
      description:
        'Once the initial design and development phase is complete, we present the website to you for review. We gather your feedback and make any necessary adjustments to ensure the final product aligns with your expectations.',
    },
    {
      number: '06',
      title: 'Analysis and Optimization',
      description:
        'After the website goes live, we continuously monitor its performance. We analyze user behavior and gather data to identify areas for improvement. Based on this analysis, we implement optimizations to enhance user experience and drive conversions.',
    },
  ];

  // Replace with your WhatsApp number in international format (no spaces), e.g. "919876543210"
  // NOTE: keep only digits and country code. Example for India: 91XXXXXXXXXX
  const BUSINESS_WHATSAPP_NUMBER = '917382387778';

  // Replace with a phone number you want the "Call us" CTA to dial (international format)
  const BUSINESS_CALL_NUMBER = '+917382387778';

  const openWhatsAppWithForm = () => {
    const name = nameRef.current?.value?.trim() ?? '';
    const email = emailRef.current?.value?.trim() ?? '';
    const phone = phoneRef.current?.value?.trim() ?? '';
    const project = projectRef.current?.value?.trim() ?? '';

    // Create a friendly pre-filled message
    let message = `Hi! I'd like to discuss a project.%0A%0A`;
    if (name) message += `Name: ${encodeURIComponent(name)}%0A`;
    if (email) message += `Email: ${encodeURIComponent(email)}%0A`;
    if (phone) message += `Phone: ${encodeURIComponent(phone)}%0A`;
    if (project) message += `%0AProject Overview:%0A${encodeURIComponent(project)}%0A`;

    // Mailto-style: use wa.me link
    const waUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${message}`;
    window.open(waUrl, '_blank');
  };

  const callUs = () => {
    // using window.location so mobile will open dialer
    window.location.href = `tel:${BUSINESS_CALL_NUMBER}`;
  };

  return (
    <div>
      <MouseTrail />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden">
          {/* Logo Wallpaper */}
          <div className="absolute top-0 left-0 w-full h-full z-[5] opacity-[0.02] pointer-events-none flex justify-center items-center overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-[150vw] h-[150vh] rotate-[10deg]"
              style={{ filter: 'blur(1px)' }}
              fill="none"
            >
              <defs>
                <linearGradient id="wallpaperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--electric-blue)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--accent-green)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M50 0 L 10 100 H 30 L 50 55 L 70 100 H 90 L 50 0 Z" fill="url(#wallpaperGradient)" />
            </svg>
          </div>

          {/* Three.js Canvas */}
          <HeroCanvas />

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col justify-center items-center text-center h-screen px-4">
            <p className="text-xl sm:text-2xl mb-4" style={{ color: '#8B9DC3' }}>
              Creative Development & AI Engineering
            </p>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl mb-8" style={{ color: '#E0E7FF' }}>
              <span className="block">ENGINEERING</span>
              <span className="gradient-text block">DIGITAL ARTIFACTS</span>
            </h1>
            <p className="max-w-3xl text-lg sm:text-xl mb-10" style={{ color: '#E0E7FF' }}>
              We translate visionary design into high-performance, award-winning digital experiences using WebGL,
              Generative AI, and a meticulous engineering approach.
            </p>
            <a
              href="#contact"
              className="bg-[#00FFFF] text-[#03040C] px-10 py-4 rounded-full transition-all duration-400 hover:bg-[#39FF14] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105"
              style={{ fontWeight: '700', boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}
            >
              Start a Project
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-28 lg:py-48 border-t border-gray-800 fade-in-section opacity-0 translate-y-20 transition-all duration-[1500ms]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl text-center mb-16">
              Our <span className="gradient-text">Core Engineering</span> Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-[var(--secondary-bg)] p-10 rounded-2xl border border-[var(--electric-blue)]/10 transition-all duration-400 hover:shadow-[0_15px_80px_rgba(0,255,255,0.3)] hover:border-[var(--electric-blue)] hover:-translate-y-2 hover:scale-[1.02] group"
                >
                  <service.icon className="w-10 h-10 mb-4 text-[var(--accent-green)] transition-all duration-400 group-hover:text-[var(--electric-blue)] group-hover:scale-110" />
                  <h3 className="text-3xl mb-3 text-[var(--text-light)]">{service.title}</h3>
                  <p className="text-[var(--text-muted)]">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-28 lg:py-48 border-t border-gray-800 bg-[var(--secondary-bg)] fade-in-section opacity-0 translate-y-20 transition-all duration-[1500ms]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl text-center mb-6">
              Our Process, <span className="gradient-text">Start to Launch</span>
            </h2>
            <div className="max-w-4xl mx-auto text-[var(--text-muted)] text-lg text-center mb-16">
              <p>
                We keep things simple, clear, and effective. Here's how we go from idea to a high-converting website
                without the usual back-and-forth chaos.
              </p>
            </div>

            <div className="mt-12 space-y-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-[var(--primary-bg)] border border-gray-800 fade-in-section opacity-0 translate-y-20 transition-all duration-[1500ms]"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-6xl gradient-text flex-shrink-0" style={{ textShadow: '0 0 10px var(--accent-green)' }}>
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl mb-3 text-[var(--text-light)]">{step.title}</h3>
                      <p className="text-[var(--text-muted)] text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="py-28 lg:py-48 border-t border-gray-800 bg-[var(--primary-bg)] fade-in-section opacity-0 translate-y-20 transition-all duration-[1500ms]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl text-center mb-12">
              Insights from the <span className="gradient-text">Cutting Edge</span>
            </h2>
            <div className="text-center text-[var(--text-muted)] text-lg">
              <p className="mb-6">
                This section will host deep dives into WebGL, Generative AI, and high-performance digital craft.
              </p>
              <p className="text-2xl text-[var(--electric-blue)]">
                Content Coming Soon: Articles on WebGPU and Real-time Shader Design.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 lg:py-48 border-t border-gray-800 bg-[var(--secondary-bg)] fade-in-section opacity-0 translate-y-20 transition-all duration-[1500ms]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl text-center mb-6">
              Let's <span className="gradient-text">Engineer</span> Your Project
            </h2>
            <p className="text-center text-[var(--text-muted)] mb-12 text-xl">
              I only take on projects that require high-craft and a technical edge. Describe your vision below.
            </p>

            <form
              className="space-y-6 bg-[var(--primary-bg)] p-8 rounded-xl shadow-2xl border border-[var(--secondary-bg)]"
              onSubmit={(e) => {
                e.preventDefault();
                // Basic behavior: submit form normally or wire up your API here
                // For now we'll just open WhatsApp to contact if user presses the special button.
                // You can integrate a server API or email service here.
                alert('Thanks — use the "Send via WhatsApp" or "Call us" buttons, or integrate a backend to handle this submit.');
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--text-muted)] mb-1">
                  Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg bg-[var(--primary-bg)] border border-[var(--secondary-bg)] text-[var(--text-light)] transition-all focus:border-[var(--electric-blue)] focus:shadow-[0_0_0_2px_rgba(0,255,255,0.5)] focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--text-muted)] mb-1">
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg bg-[var(--primary-bg)] border border-[var(--secondary-bg)] text-[var(--text-light)] transition-all focus:border-[var(--electric-blue)] focus:shadow-[0_0_0_2px_rgba(0,255,255,0.5)] focus:outline-none"
                  placeholder="Your Email"
                />
              </div>

              {/* Contact Number - added */}
              <div>
                <label htmlFor="phone" className="block text-sm text-[var(--text-muted)] mb-1">
                  Contact Number
                </label>
                <input
                  ref={phoneRef}
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  inputMode="tel"
                  maxLength={20}
                  pattern="[\d\s()+-]{7,20}"
                  className="mt-1 block w-full px-4 py-3 rounded-lg bg-[var(--primary-bg)] border border-[var(--secondary-bg)] text-[var(--text-light)] transition-all focus:border-[var(--electric-blue)] focus:shadow-[0_0_0_2px_rgba(0,255,255,0.5)] focus:outline-none"
                  placeholder="Your Contact Number"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm text-[var(--text-muted)] mb-1">
                  Project Overview
                </label>
                <textarea
                  ref={projectRef}
                  id="project"
                  name="project"
                  rows={4}
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg bg-[var(--primary-bg)] border border-[var(--secondary-bg)] text-[var(--text-light)] transition-all focus:border-[var(--electric-blue)] focus:shadow-[0_0_0_2px_rgba(0,255,255,0.5)] focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Primary submit (keeps existing behavior) */}
              <button
                type="submit"
                className="w-full bg-[var(--electric-blue)] text-[var(--primary-bg)] py-4 rounded-full transition-all duration-400 hover:bg-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105"
              >
                Send Engineering Brief
              </button>

              {/* Action buttons: WhatsApp and Call us */}
              <div className="mt-4 flex gap-4">
                <button
                  type="button"
                  onClick={openWhatsAppWithForm}
                  className="flex-1 flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-[var(--secondary-bg)] bg-[#075E54] hover:bg-[#0a6f66] transition-all text-white font-medium"
                  aria-label="Send via WhatsApp"
                >
                  {/* WhatsApp Icon (simple) */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.373 0 .001 5.373.001 12c0 2.119.556 4.182 1.61 5.994L0 24l6.335-1.655A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.252-6.214-3.48-8.52Z" fill="#25D366"/>
                    <path d="M17.1 14.2c-.3-.15-1.77-.87-2.05-.98-.28-.11-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.36.22-.66.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.05-.52-.06-.13-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51-.17-.01-.36-.01-.56-.01-.2 0-.52.07-.79.35-.27.28-1.03 1.01-1.03 2.46 0 1.44 1.06 2.83 1.2 3.03.14.2 2.08 3.36 5.06 4.72 2.98 1.36 2.98.91 3.52.85.54-.06 1.76-.71 2.01-1.39.25-.68.25-1.26.17-1.39-.08-.12-.28-.18-.58-.33Z" fill="white"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={callUs}
                  className="w-40 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[var(--secondary-bg)] bg-[var(--accent-green)] hover:bg-[var(--electric-blue)] transition-all text-[var(--primary-bg)] font-medium"
                  aria-label="Call us"
                >
                  {/* Phone icon (simple) */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a1 1 0 0 1 1 .79c.12.83.38 1.64.77 2.4a1 1 0 0 1-.24 1.02L8.09 9.91a16 16 0 0 0 6 6l1.7-1.7a1 1 0 0 1 1.02-.24c.76.39 1.57.65 2.4.77a1 1 0 0 1 .79 1z" fill="white"/>
                  </svg>
                  Call us
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp quick action (bottom-right) */}
      <button
        onClick={openWhatsAppWithForm}
        aria-label="WhatsApp quick contact"
        className="fixed right-5 bottom-5 z-50 p-3 rounded-full shadow-xl flex items-center justify-center"
        style={{ background: '#25D366', width: 56, height: 56 }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.373 0 .001 5.373.001 12c0 2.119.556 4.182 1.61 5.994L0 24l6.335-1.655A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.252-6.214-3.48-8.52Z" fill="#ffffff" opacity="0.06"/>
          <path d="M17.1 14.2c-.3-.15-1.77-.87-2.05-.98-.28-.11-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.36.22-.66.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.05-.52-.06-.13-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51-.17-.01-.36-.01-.56-.01-.2 0-.52.07-.79.35-.27.28-1.03 1.01-1.03 2.46 0 1.44 1.06 2.83 1.2 3.03.14.2 2.08 3.36 5.06 4.72 2.98 1.36 2.98.91 3.52.85.54-.06 1.76-.71 2.01-1.39.25-.68.25-1.26.17-1.39-.08-.12-.28-.18-.58-.33Z" fill="white"/>
        </svg>
      </button>

      <Footer />
    </div>
  );
}
