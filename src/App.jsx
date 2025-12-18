import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Brain, TrendingUp, Mail, Menu, X, Sparkles, Target, Heart, Wheat, Database, Cpu, BarChart3, Microscope, Leaf } from 'lucide-react';

// Cawver Car Logo - The Discovery Vehicle
const CawverCar = ({ className = "", animate = false }) => (
  <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Car body */}
    <path
      d="M15 70 Q15 35 60 35 Q105 35 105 70 L105 75 L15 75 Z"
      fill="#f8fafc"
      stroke="#4a9a9a"
      strokeWidth="3"
    />
    {/* Window divider */}
    <line x1="60" y1="35" x2="60" y2="70" stroke="#e2e8f0" strokeWidth="2" />
    {/* Left window tint */}
    <path
      d="M18 70 Q18 40 58 40 L58 70 Z"
      fill="#d1d5db"
      opacity="0.3"
    />
    {/* Tail lights */}
    <rect x="100" y="52" width="8" height="4" rx="1" fill="#f59e0b" />
    <rect x="100" y="58" width="8" height="4" rx="1" fill="#ef4444" />
    {/* Left wheel */}
    <g className={animate ? "animate-spin-slow" : ""} style={{ transformOrigin: '30px 80px' }}>
      <circle cx="30" cy="80" r="15" fill="#334155" stroke="#4a9a9a" strokeWidth="3" />
      <circle cx="30" cy="80" r="8" fill="#f8fafc" />
      <circle cx="30" cy="80" r="3" fill="#334155" />
    </g>
    {/* Right wheel */}
    <g className={animate ? "animate-spin-slow" : ""} style={{ transformOrigin: '90px 80px' }}>
      <circle cx="90" cy="80" r="15" fill="#334155" stroke="#4a9a9a" strokeWidth="3" />
      <circle cx="90" cy="80" r="8" fill="#f8fafc" />
      <circle cx="90" cy="80" r="3" fill="#334155" />
    </g>
  </svg>
);

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <CawverCar className="w-10 h-8" />
            <span className="text-2xl font-semibold tracking-tight text-gray-900">cawver</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link
              to="/thesis"
              className={`text-sm font-medium transition-colors ${isActive('/thesis') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Thesis
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors ${isActive('/portfolio') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Portfolio
            </Link>
            <Link
              to="/pitch"
              className="text-sm font-medium text-white bg-teal-600 px-5 py-2.5 rounded-full hover:bg-teal-700 transition-colors"
            >
              Pitch Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/thesis" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Thesis</Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              <Link to="/pitch" className="text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Pitch Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Animated Car */}
          <div className="mb-8 relative">
            <div className="inline-block animate-bounce-gentle">
              <CawverCar className="w-24 h-20" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight tracking-tight">
            Discover the future.
            <br />
            <span className="text-gray-400">Cover the seed.</span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 max-w-2xl leading-relaxed">
            We back practitioner-founders using AI and data to transform healthcare and agriculture — people who've lived the problem and now have the tools to solve it at scale.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/pitch"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              Share Your Vision
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/thesis"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Our Thesis
            </Link>
          </div>
        </div>
      </section>

      {/* AI/ML/Data Applications in Our Focus Sectors */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Our Focus</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Practitioner insight, amplified by technology
          </h2>
          <p className="text-xl text-gray-500 mb-16 max-w-3xl">
            We back founders who've lived the problem and are using AI, data, and smart systems to scale solutions that were never possible before.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Healthcare */}
            <div className="bg-white rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-teal-600" size={32} />
                <h3 className="text-2xl font-semibold text-gray-900">Healthcare</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                Clinicians, community health workers, and caregivers using AI and data to close gaps in care delivery.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Community Health</h4>
                    <p className="text-sm text-gray-500">AI-powered screening and follow-up tools that help frontline workers reach more patients in underserved areas</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Clinical Decision Support</h4>
                    <p className="text-sm text-gray-500">ML models that help doctors, nurses, and pharmacists make faster, better decisions at the point of care</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Mental Health Access</h4>
                    <p className="text-sm text-gray-500">Digital tools that extend the reach of counsellors and therapists to those who need support most</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Care Coordination</h4>
                    <p className="text-sm text-gray-500">Data platforms connecting patients, providers, and pharmacies for seamless continuity of care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Food & Agriculture */}
            <div className="bg-white rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <Wheat className="text-teal-600" size={32} />
                <h3 className="text-2xl font-semibold text-gray-900">Food & Agriculture</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                Farmers, agronomists, and food system operators using data and automation to grow and deliver food sustainably.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Precision Agriculture</h4>
                    <p className="text-sm text-gray-500">Computer vision for crop monitoring, IoT sensor networks, and automated farming systems</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Livestock & Aquaculture Intelligence</h4>
                    <p className="text-sm text-gray-500">ML for animal health monitoring, feed optimization, and yield prediction</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sustainable Food Systems</h4>
                    <p className="text-sm text-gray-500">Data-driven organic certification, carbon footprint tracking, and farm-to-table traceability</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Supply Chain Analytics</h4>
                    <p className="text-sm text-gray-500">Demand forecasting, waste reduction models, and logistics optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-gray-900">$50K-$750K</p>
              <p className="text-gray-500 mt-2">Check size</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-gray-900">Pre-seed</p>
              <p className="text-gray-500 mt-2">Primary stage</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-gray-900">2 weeks</p>
              <p className="text-gray-500 mt-2">Decision timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-teal-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            You've lived the problem. Now build the solution.
          </h2>
          <p className="text-teal-100 text-lg mb-10">
            If you're a clinician, farmer, or community worker ready to turn your insight into impact — we want to hear from you.
          </p>
          <Link
            to="/pitch"
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full text-sm font-medium hover:bg-teal-50 transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Thesis Page
const Thesis = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Our Thesis</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-8">
          The best founders have lived the problem
        </h1>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="text-xl text-gray-500 leading-relaxed">
            We believe the most impactful companies are built by people who've worked on the frontlines —
            clinicians who know where care breaks down, farmers who understand what it takes to grow food sustainably,
            community workers who see the gaps others miss.
          </p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">What we look for</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Practitioner insight</h3>
                <p className="text-gray-500">
                  Founders who've done the work — treated patients, grown crops, served communities — and deeply understand the problems they're solving.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-world impact</h3>
                <p className="text-gray-500">
                  Solutions that improve patient outcomes, help farmers thrive, or strengthen food security — not technology for technology's sake.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable approach</h3>
                <p className="text-gray-500">
                  Ideas that can grow beyond one clinic, one farm, one community — reaching the millions who need these solutions.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">How we work</h2>

          <p className="text-gray-500">
            We write $50K-$750K checks at pre-seed and seed stages. We move fast, typically reaching a decision within
            two weeks of our first meeting. We're hands-on when you want us to be and hands-off when you don't.
          </p>

          <p className="text-gray-500">
            Our portfolio companies get access to production-grade data infrastructure, ML pipelines, and
            interoperability platforms — so practitioner-founders can focus on what they do best:
            serving patients and feeding communities.
          </p>
        </div>

        <div className="mt-16">
          <Link
            to="/pitch"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Share Your Vision
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Portfolio Page
const Portfolio = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-8">
          Companies we've backed
        </h1>

        <p className="text-xl text-gray-500 mb-16">
          Practitioner-founders building solutions for the communities they know and serve.
        </p>

        {/* Portfolio Companies */}
        <div className="space-y-8">
          {/* Healthcare */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                <Heart className="text-rose-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Healthcare</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Remote Patient Monitoring Platform</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Built by a former ICU nurse, this platform uses wearables and AI to monitor chronic disease patients at home — reducing hospital readmissions by alerting care teams before crises occur.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Wearable Integration</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Predictive Alerts</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">ME</span>
                </div>
              </div>
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">AI-Assisted Clinical Consultations</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Founded by a physician frustrated with 5-minute appointments, this tool helps doctors capture patient history, surface relevant insights, and generate accurate documentation — giving them time back for actual care.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">NLP</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Clinical Decision Support</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">India</span>
                </div>
              </div>
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Smart Pharmacy Network</h4>
                <p className="text-sm text-gray-500 mb-3">
                  A pharmacist-led platform connecting rural pharmacies with real-time inventory, demand forecasting, and patient medication adherence tracking — ensuring the right medicines reach the right communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Supply Chain ML</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Adherence Tracking</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Africa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Agriculture */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Wheat className="text-green-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Food & Agriculture</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">IoT-Enabled Dairy Operations</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Built by a third-generation dairy farmer, this platform deploys sensors across the farm to monitor animal health, automate feeding schedules, and predict milk yield — helping smallholder farms operate like modern operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">IoT Sensors</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Yield Prediction</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">India</span>
                </div>
              </div>
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Precision Horticulture Platform</h4>
                <p className="text-sm text-gray-500 mb-3">
                  An agronomist-founded company using computer vision and soil sensors to help fruit and vegetable farmers optimize irrigation, detect disease early, and reduce chemical inputs — all from a mobile app.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Computer Vision</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Soil Analytics</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Africa</span>
                </div>
              </div>
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Livestock Health Intelligence</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Founded by a veterinarian, this platform uses wearables and ML to monitor cattle and poultry health in real-time — catching illness early, optimizing feed, and improving animal welfare across commercial farms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Wearable Tech</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Animal Health ML</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-teal-50 rounded-2xl p-8 text-center">
          <p className="text-gray-600 mb-2">
            Company names anonymized at founder request. Details shared during diligence.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Want to be part of our portfolio?</p>
          <Link
            to="/pitch"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Pitch Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Pitch Page
const Pitch = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Pitch Us</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-8">
          Tell us what you've seen
        </h1>

        <p className="text-xl text-gray-500 mb-12">
          You've worked in the field. You know where the system breaks. Now you're ready to fix it. We want to hear your story.
        </p>

        <div className="space-y-8">
          {/* Email Option */}
          <div className="bg-teal-50 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Send us your deck</h3>
                <p className="text-gray-500 mb-4">
                  Email us your pitch deck and a brief introduction. We review every submission and respond within a week.
                </p>
                <a
                  href="mailto:pitch@cawver.com"
                  className="text-teal-700 font-medium hover:text-teal-600 transition-colors"
                >
                  pitch@cawver.com
                </a>
              </div>
            </div>
          </div>

          {/* What to Include */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">What we want to understand</h3>
            <ul className="space-y-5 text-gray-500">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Your experience</span>
                  <p className="text-sm mt-1">What have you seen working in healthcare, agriculture, or your community? What problem keeps you up at night?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Your solution</span>
                  <p className="text-sm mt-1">What are you building? How does it help the people you've worked alongside?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Who you serve</span>
                  <p className="text-sm mt-1">Which patients, farmers, or communities will benefit? How will you reach them?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Why you</span>
                  <p className="text-sm mt-1">What makes your perspective unique? What have you learned that others haven't?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">The ask</span>
                  <p className="text-sm mt-1">How much are you raising and what will you do with it?</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Response Time */}
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm">
              We respond to every pitch within 5 business days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <CawverCar className="w-10 h-8" />
            <span className="text-2xl font-semibold text-gray-900">cawver</span>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/thesis" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Thesis</Link>
            <Link to="/portfolio" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Portfolio</Link>
            <Link to="/pitch" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Pitch Us</Link>
          </div>
          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>&copy; 2025 Cawver. All rights reserved.</p>
            <p className="text-xs text-gray-300 mt-1">Logo designed by Pritam Pebam, 2014</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pitch" element={<Pitch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
