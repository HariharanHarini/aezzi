import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, BarChart3, TrendingUp, DollarSign, Users, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MouseTrail from '../components/MouseTrail';

export default function MetaGoogleAdsService() {
  const features = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Advanced audience segmentation to reach your ideal customers at the right time with the right message.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Strategy',
      description: 'In-depth analytics and insights to inform every decision and maximize campaign performance.',
    },
    {
      icon: TrendingUp,
      title: 'ROI Optimization',
      description: 'Continuous testing and refinement to ensure you get the highest return on your advertising investment.',
    },
    {
      icon: DollarSign,
      title: 'Budget Management',
      description: 'Strategic allocation of your ad spend across platforms and campaigns for optimal results.',
    },
    {
      icon: Users,
      title: 'Audience Growth',
      description: 'Expand your reach and build a qualified audience that converts into loyal customers.',
    },
    {
      icon: Sparkles,
      title: 'Creative Optimization',
      description: 'A/B testing of ad creatives, copy, and formats to discover what resonates with your audience.',
    },
  ];

  const platforms = [
    { name: 'Facebook Ads', color: 'text-[var(--electric-blue)]' },
    { name: 'Instagram Ads', color: 'text-[var(--accent-green)]' },
    { name: 'Google Search Ads', color: 'text-[var(--electric-blue)]' },
    { name: 'Google Display Network', color: 'text-[var(--accent-green)]' },
    { name: 'YouTube Ads', color: 'text-[var(--electric-blue)]' },
    { name: 'Shopping Ads', color: 'text-[var(--accent-green)]' },
  ];

  const benefits = [
    'Increased website traffic and conversions',
    'Lower cost per acquisition (CPA)',
    'Higher click-through rates (CTR)',
    'Better quality score and ad placement',
    'Comprehensive performance reporting',
    'AI-powered campaign optimization',
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
            <span className="gradient-text">Meta & Google Ads</span>
            <br />
            <span className="text-[var(--text-light)]">Management</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mb-8">
            Data-driven advertising strategies that maximize ROI through precision targeting, creative optimization, and continuous AI-assisted testing.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,255,255,0.2)] border border-[var(--electric-blue)]/20">
            <img
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTMyMDU4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Marketing Analytics"
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
            Our <span className="gradient-text">Advertising</span> Services
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
            Platforms We <span className="gradient-text">Master</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 text-center hover:border-[var(--accent-green)] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className={`text-2xl ${platform.color}`}>{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            What You'll <span className="gradient-text">Achieve</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[var(--primary-bg)] p-6 rounded-xl border border-[var(--electric-blue)]/10 hover:border-[var(--accent-green)] transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent-green)] mt-2 flex-shrink-0" />
                <p className="text-lg text-[var(--text-light)]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Example */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--secondary-bg)] to-[var(--primary-bg)] rounded-2xl p-8 sm:p-12 border border-[var(--electric-blue)]/20 shadow-[0_20px_80px_rgba(0,255,255,0.2)]">
            <h2 className="text-4xl sm:text-5xl mb-6 text-center">
              Real <span className="gradient-text">Results</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl gradient-text mb-4">350%</div>
                <p className="text-xl text-[var(--text-muted)]">Average ROI Increase</p>
              </div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl gradient-text mb-4">-45%</div>
                <p className="text-xl text-[var(--text-muted)]">Cost Per Acquisition</p>
              </div>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl gradient-text mb-4">2.8x</div>
                <p className="text-xl text-[var(--text-muted)]">Conversion Rate Lift</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl mb-6">
            Ready to Scale Your <span className="gradient-text">Ad Performance</span>?
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Let's create data-driven campaigns that deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[var(--electric-blue)] text-[var(--primary-bg)] px-10 py-4 rounded-full transition-all duration-400 hover:bg-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105"
            >
              Get Started Today
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
