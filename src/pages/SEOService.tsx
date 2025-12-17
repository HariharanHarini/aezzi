import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, TrendingUp, FileSearch, Link2, BarChart, Globe2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MouseTrail from '../components/MouseTrail';

export default function SEOService() {
  const features = [
    {
      icon: FileSearch,
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of site architecture, speed, mobile-friendliness, and technical issues.',
    },
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Strategic keyword targeting based on search volume, competition, and business relevance.',
    },
    {
      icon: Globe2,
      title: 'On-Page Optimization',
      description: 'Optimization of content, meta tags, headers, and internal linking for maximum visibility.',
    },
    {
      icon: Link2,
      title: 'Link Building',
      description: 'High-quality backlink acquisition from authoritative sites to boost domain authority.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Detailed tracking and reporting on rankings, traffic, and conversion metrics.',
    },
    {
      icon: TrendingUp,
      title: 'Local SEO',
      description: 'Optimize for local searches with Google Business Profile and location-based strategies.',
    },
  ];

  const services = [
    'Complete SEO audit & analysis',
    'Keyword research & strategy',
    'On-page SEO optimization',
    'Technical SEO improvements',
    'Content optimization',
    'Link building campaigns',
    'Local SEO optimization',
    'Competitor analysis',
    'Performance monitoring',
    'Monthly reporting & insights',
  ];

  const benefits = [
    { metric: '350%', label: 'Average Organic Traffic Increase' },
    { metric: 'Top 3', label: 'Average Ranking Position' },
    { metric: '85%', label: 'Client Retention Rate' },
  ];

  const process = [
    {
      step: '01',
      title: 'Audit & Analysis',
      description: 'Comprehensive review of current SEO performance and opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create customized SEO roadmap aligned with business goals.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute technical fixes, content optimization, and link building.',
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous tracking and refinement for sustained growth.',
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
            <span className="gradient-text">SEO Services</span>
            <br />
            <span className="text-[var(--text-light)]">Search Engine Optimization</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mb-8">
            Technical SEO expertise, strategic content optimization, and authoritative link building to dominate search rankings and drive qualified organic traffic.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,255,255,0.2)] border border-[var(--electric-blue)]/20">
            <img
              src="https://images.unsplash.com/photo-1674027326254-88c960d8e561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzY1Mzg4NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="SEO Analytics"
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
            Our <span className="gradient-text">SEO</span> Capabilities
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
            Our SEO <span className="gradient-text">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--secondary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20 hover:border-[var(--accent-green)] transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-6xl gradient-text mb-4" style={{ textShadow: '0 0 10px var(--accent-green)' }}>
                  {item.step}
                </div>
                <h3 className="text-2xl mb-3 text-[var(--text-light)]">{item.title}</h3>
                <p className="text-[var(--text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Complete SEO <span className="gradient-text">Solutions</span>
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

      {/* Results */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--secondary-bg)] to-[var(--primary-bg)] rounded-2xl p-8 sm:p-12 border border-[var(--electric-blue)]/20 shadow-[0_20px_80px_rgba(0,255,255,0.2)]">
            <h2 className="text-4xl sm:text-5xl mb-12 text-center">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl sm:text-6xl gradient-text mb-4">{benefit.metric}</div>
                  <p className="text-xl text-[var(--text-muted)]">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center">
            Why SEO <span className="gradient-text">Matters</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-[var(--primary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl mb-3 text-[var(--text-light)]">Targeted Traffic</h3>
              <p className="text-[var(--text-muted)]">Attract qualified visitors actively searching for your products or services</p>
            </div>
            <div className="text-center bg-[var(--primary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl mb-3 text-[var(--text-light)]">Cost-Effective</h3>
              <p className="text-[var(--text-muted)]">Long-term sustainable traffic without ongoing ad spend</p>
            </div>
            <div className="text-center bg-[var(--primary-bg)] p-8 rounded-xl border border-[var(--electric-blue)]/20">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl mb-3 text-[var(--text-light)]">Credibility</h3>
              <p className="text-[var(--text-muted)]">Higher rankings build trust and establish industry authority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--secondary-bg)] rounded-2xl p-8 sm:p-12 border border-[var(--accent-green)]/20">
            <h2 className="text-4xl sm:text-5xl mb-6 text-center">
              Technical <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] text-center mb-8">
              We focus on clean architecture, fast performance, and mobile optimization - the foundation of great SEO.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl gradient-text mb-2">&lt;1s</div>
                <p className="text-sm text-[var(--text-muted)]">Page Load</p>
              </div>
              <div className="text-center">
                <div className="text-4xl gradient-text mb-2">100</div>
                <p className="text-sm text-[var(--text-muted)]">Performance</p>
              </div>
              <div className="text-center">
                <div className="text-4xl gradient-text mb-2">A+</div>
                <p className="text-sm text-[var(--text-muted)]">Core Vitals</p>
              </div>
              <div className="text-center">
                <div className="text-4xl gradient-text mb-2">100%</div>
                <p className="text-sm text-[var(--text-muted)]">Mobile Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[var(--secondary-bg)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl mb-6">
            Ready to Rank <span className="gradient-text">Higher</span>?
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Let's optimize your site for search engines and drive qualified organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-[var(--electric-blue)] text-[var(--primary-bg)] px-10 py-4 rounded-full transition-all duration-400 hover:bg-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] hover:scale-105"
            >
              Get SEO Audit
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
