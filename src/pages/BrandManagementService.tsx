import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, FileText, Shield, Eye, Megaphone, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MouseTrail from '../components/MouseTrail';

export default function BrandManagementService() {
  const features = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Logos, color schemes, typography, and visual elements that define your unique brand personality.',
    },
    {
      icon: FileText,
      title: 'Brand Guidelines',
      description: 'Comprehensive style guides ensuring consistent brand application across all touchpoints.',
    },
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'Monitoring and maintaining brand integrity across all platforms and communications.',
    },
    {
      icon: Eye,
      title: 'Brand Positioning',
      description: 'Strategic positioning to differentiate you from competitors and resonate with your target audience.',
    },
    {
      icon: Megaphone,
      title: 'Brand Messaging',
      description: 'Crafting compelling brand stories and messaging that connects emotionally with your audience.',
    },
    {
      icon: Award,
      title: 'Brand Experience',
      description: 'Creating cohesive experiences across digital, physical, and social touchpoints.',
    },
  ];

  const deliverables = [
    'Logo design & variations',
    'Color palette & typography system',
    'Brand style guide',
    'Business card & stationery design',
    'Social media templates',
    'Brand voice & messaging framework',
    'Visual asset library',
    'Brand implementation strategy',
  ];

  const process = [
    {
      phase: 'Discovery',
      description: 'Deep dive into your business, values, target audience, and competitive landscape.',
    },
    {
      phase: 'Strategy',
      description: 'Define positioning, messaging, and visual direction aligned with business goals.',
    },
    {
      phase: 'Design',
      description: 'Create comprehensive brand identity system including logo, colors, and typography.',
    },
    {
      phase: 'Implementation',
      description: 'Roll out brand across all touchpoints with comprehensive guidelines and support.',
    },
  ];

  return (
    <div className="min-h-screen">
      <MouseTrail />
      <Navigation isServicePage={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
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
            <span className="gradient-text">Brand Management</span>
            <br />
            <span className="text-[var(--text-light)]">& Identity Design</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mb-8">
            Building powerful brand identities that resonate, endure, and create lasting impressions across every touchpoint.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,255,255,0.2)] border border-[var(--electric-blue)]/20">
            <img
              src="https://images.unsplash.com/photo-1612810806546-ebbf22b53496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGxvZ298ZW58MXx8fHwxNzY1Mzc1MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Brand Design"
              className="w-full h-[400px] sm:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-bg)] to-transparent" />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Comprehensive <span className="gradient-text">Brand Services</span>
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

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Our Branding <span className="gradient-text">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 hover:border-[var(--accent-green)] transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-6xl gradient-text mb-4" style={{ textShadow: '0 0 10px var(--accent-green)' }}>
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-2xl mb-3 text-[var(--text-light)]">{item.phase}</h3>
                <p className="text-[var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            What You'll <span className="gradient-text">Receive</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[var(--primary-bg)] p-6 rounded-xl border border-[var(--electric-blue)]/10 hover:border-[var(--accent-green)] transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-[var(--accent-green)] flex-shrink-0" />
                <p className="text-lg text-[var(--text-light)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Impact */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            The Power of Strong <span className="gradient-text">Branding</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl mb-3 text-[var(--text-light)]">Recognition</h3>
              <p className="text-[var(--text-muted)]">Stand out in a crowded marketplace with a memorable brand identity</p>
            </div>
            <div className="bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl mb-3 text-[var(--text-light)]">Trust</h3>
              <p className="text-[var(--text-muted)]">Build credibility and customer loyalty through consistent branding</p>
            </div>
            <div className="bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl mb-3 text-[var(--text-light)]">Value</h3>
              <p className="text-[var(--text-muted)]">Increase perceived value and justify premium pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Image */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(57,255,20,0.2)] border border-[var(--accent-green)]/20">
            <img
              src="https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUzNDY3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Creative Workspace"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-bg)] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <h3 className="text-3xl sm:text-4xl text-[var(--text-light)] mb-4">
                Crafted with <span className="gradient-text">Precision</span>
              </h3>
              <p className="text-xl text-[var(--text-muted)] max-w-2xl">
                Every brand element is meticulously designed to create a cohesive and impactful identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl mb-6">
            Ready to Build a <span className="gradient-text">Memorable Brand</span>?
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Let's create a brand identity that captures your essence and connects with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[var(--electric-blue)] text-[var(--primary-bg)] px-10 py-4 rounded-full transition-all duration-400 hover:bg-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105"
            >
              Start Your Brand Journey
            </Link>
            <Link
              to="/"
              className="bg-transparent border-2 border-[var(--electric-blue)] text-[var(--electric-blue)] px-10 py-4 rounded-full transition-all duration-400 hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.3)]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
