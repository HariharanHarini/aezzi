import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Facebook, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MouseTrail from '../components/MouseTrail';

export default function SocialMediaService() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Content Strategy',
      description: 'Comprehensive content planning aligned with your brand voice and business objectives.',
    },
    {
      icon: Instagram,
      title: 'Visual Storytelling',
      description: 'High-quality graphics, videos, and imagery that capture attention and drive engagement.',
    },
    {
      icon: Facebook,
      title: 'Community Management',
      description: 'Active engagement with your audience to build relationships and foster brand loyalty.',
    },
    {
      icon: Twitter,
      title: 'Real-Time Engagement',
      description: 'Timely responses and trending conversations to keep your brand relevant and responsive.',
    },
    {
      icon: Linkedin,
      title: 'Professional Networking',
      description: 'B2B focused strategies that establish thought leadership and generate quality leads.',
    },
    {
      icon: Youtube,
      title: 'Video Content',
      description: 'Compelling video content optimized for each platform to maximize reach and engagement.',
    },
  ];

  const services = [
    'Social media strategy development',
    'Content creation & curation',
    'Posting & scheduling',
    'Community management',
    'Influencer partnerships',
    'Social listening & monitoring',
    'Analytics & reporting',
    'Paid social advertising',
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram },
    { name: 'Facebook', icon: Facebook },
    { name: 'Twitter/X', icon: Twitter },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'YouTube', icon: Youtube },
    { name: 'TikTok', icon: MessageCircle },
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
            <span className="gradient-text">Social Media</span>
            <br />
            <span className="text-[var(--text-light)]">Marketing</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mb-8">
            Building engaged communities and driving conversions through strategic content, authentic storytelling, and data-driven social media management.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,255,255,0.2)] border border-[var(--electric-blue)]/20">
            <img
              src="https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBob25lfGVufDF8fHx8MTc2NTQxMTA0OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Social Media Marketing"
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
            Our Social Media <span className="gradient-text">Expertise</span>
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

      {/* Platforms */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Platforms We <span className="gradient-text">Dominate</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 text-center hover:border-[var(--accent-green)] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <platform.icon className="w-10 h-10 mx-auto mb-3 text-[var(--electric-blue)] group-hover:text-[var(--accent-green)] transition-colors" />
                <h3 className="text-sm text-[var(--text-light)]">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Complete Social Media <span className="gradient-text">Management</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[var(--primary-bg)] p-6 rounded-xl border border-[var(--electric-blue)]/10 hover:border-[var(--accent-green)] transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-[var(--accent-green)] flex-shrink-0" />
                <p className="text-lg text-[var(--text-light)]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Our <span className="gradient-text">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit & Strategy', desc: 'Analyze current presence and competitors' },
              { step: '02', title: 'Content Planning', desc: 'Create a comprehensive content calendar' },
              { step: '03', title: 'Creation & Publishing', desc: 'Design and post engaging content' },
              { step: '04', title: 'Optimize & Scale', desc: 'Refine based on performance data' },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 hover:border-[var(--accent-green)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl gradient-text mb-4" style={{ textShadow: '0 0 10px var(--accent-green)' }}>
                  {item.step}
                </div>
                <h3 className="text-2xl mb-3 text-[var(--text-light)]">{item.title}</h3>
                <p className="text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--primary-bg)] to-[var(--secondary-bg)] rounded-2xl p-8 sm:p-12 border border-[var(--electric-blue)]/20 shadow-[0_20px_80px_rgba(0,255,255,0.2)]">
            <h2 className="text-4xl sm:text-5xl mb-12 text-center">
              Average Client <span className="gradient-text">Growth</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl gradient-text mb-4">285%</div>
                <p className="text-xl text-[var(--text-muted)]">Follower Increase</p>
              </div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl gradient-text mb-4">4.2x</div>
                <p className="text-xl text-[var(--text-muted)]">Engagement Rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl gradient-text mb-4">180%</div>
                <p className="text-xl text-[var(--text-muted)]">Lead Generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl mb-6">
            Ready to Grow Your <span className="gradient-text">Social Presence</span>?
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Let's create a social media strategy that builds community and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[var(--electric-blue)] text-[var(--primary-bg)] px-10 py-4 rounded-full transition-all duration-400 hover:bg-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="bg-transparent border-2 border-[var(--electric-blue)] text-[var(--electric-blue)] px-10 py-4 rounded-full transition-all duration-400 hover:border-[var(--accent-green)] hover:text-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.3)]"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
