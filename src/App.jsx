import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Brain, TrendingUp, Mail, Menu, X, Sparkles, Target, Heart, Wheat, Database, Cpu, BarChart3, Microscope, Leaf, Layers, Bot, Users, Calendar, Rocket, CheckCircle, FileText, MessageSquare, ClipboardCheck, Zap, UserPlus } from 'lucide-react';

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
              to="/garage"
              className={`text-sm font-medium transition-colors ${isActive('/garage') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              The Garage
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
              <Link to="/garage" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>The Garage</Link>
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
      {/* The Garage Banner - Top Priority */}
      <section className="pt-28 pb-8 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">Now accepting applications</span>
                <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full">Cohort 1</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                The Garage — Find your co-founder. Build something real.
              </h2>
              <p className="text-gray-400 mt-2">
                A 12-week program for founders in Healthcare, Agriculture, Data & AI. Starts July 2026.
              </p>
            </div>
            <Link
              to="/garage"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-400 transition-colors whitespace-nowrap"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-20 pb-32 px-6 overflow-hidden">
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
            We back practitioner-founders building in data infrastructure, AI, healthcare, and agriculture — people who've lived the problem and now have the tools to solve it at scale.
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

      {/* Focus Areas */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Our Focus</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Deep expertise, amplified by technology
          </h2>
          <p className="text-xl text-gray-500 mb-16 max-w-3xl">
            We back founders who understand the problem deeply and are using data, AI, and smart systems to build solutions at scale.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Infrastructure */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Layers className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Data Infrastructure</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Engineers building the pipes, platforms, and orchestration layers that move and transform data at scale.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Data Pipelines</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Workflow Orchestration</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Integration Platforms</span>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Bot className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Teams applying AI to solve real problems — not demos, but production systems that work.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Applied ML</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">AI Agents</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Intelligent Automation</span>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
                  <Heart className="text-rose-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Healthcare</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Clinicians and health workers using AI and data to close gaps in care delivery.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Clinical Decision Support</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Community Health</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Care Coordination</span>
              </div>
            </div>

            {/* Food & Agriculture */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Wheat className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Food & Agriculture</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Farmers and agronomists using data and automation to grow food sustainably.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Precision Agriculture</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Livestock Intelligence</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">Supply Chain</span>
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
              <p className="text-xs text-gray-400 mt-1">Up to $3M for proven traction</p>
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
            Whether you're building data infrastructure, applying AI to real problems, improving patient care, or transforming how food is grown — we back founders who've been in the trenches.
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
            engineers who've wrestled with data at scale, community workers who see the gaps others miss.
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
                  Founders who've done the work — built data systems, deployed AI in production, treated patients, grown crops — and deeply understand the problems they're solving.
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
                  Solutions that move data at scale, automate complex workflows, improve patient outcomes, or help farmers thrive — not technology for technology's sake.
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
                  Ideas that can grow beyond one team, one clinic, one farm — reaching the enterprises and communities who need these solutions.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">How we work</h2>

          <p className="text-gray-500">
            We write $50K-$750K checks at pre-seed and seed stages — and go bigger for the right opportunity. We've invested up to $3M in exceptional companies with proven traction. We move fast, typically reaching a decision within
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
          {/* Data Infrastructure */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Layers className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Data Infrastructure</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Workflow Orchestration Platform</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Built by data engineers who lived the pain of managing complex pipelines, this platform helps enterprises build, schedule, and monitor data workflows with an intuitive visual interface and powerful automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Data Pipelines</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Workflow Automation</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Enterprise</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Bot className="text-purple-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">AI & Machine Learning</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-teal-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">AI Agent Platform</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Built by engineers who saw the gap between AI demos and production systems, this platform enables teams to build, deploy, and manage AI agents that automate complex workflows — turning weeks of custom development into hours.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">AI Agents</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Workflow Automation</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Enterprise AI</span>
                </div>
              </div>
            </div>
          </div>

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

// Animated Timeline SVG Component
const AnimatedTimeline = () => {
  const steps = [
    { date: "Apr '26", label: "Applications Open", icon: "📝" },
    { date: "May '26", label: "Interviews & Matching", icon: "🤝" },
    { date: "Jun '26", label: "Cohort Announced", icon: "🎉" },
    { date: "Jul '26", label: "Program Begins", icon: "🚀" }
  ];

  return (
    <div className="relative py-8">
      {/* SVG Path connecting the dots */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
        {/* Animated path */}
        <path
          d="M 50 60 Q 150 20 250 60 Q 350 100 450 60 Q 550 20 650 60 Q 700 80 750 60"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-draw-path"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: 0,
            animation: 'drawPath 2s ease-out forwards'
          }}
        />
        {/* Glow effect */}
        <path
          d="M 50 60 Q 150 20 250 60 Q 350 100 450 60 Q 550 20 650 60 Q 700 80 750 60"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>

      {/* Timeline Steps */}
      <div className="relative grid grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center"
            style={{
              animation: `fadeInUp 0.5s ease-out ${i * 0.2}s forwards`,
              opacity: 0
            }}
          >
            <div className={`w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl mb-3 transform hover:scale-110 transition-transform ${i % 2 === 0 ? 'mt-0' : 'mt-8'}`}>
              {step.icon}
            </div>
            <p className="font-semibold text-gray-900 text-sm md:text-base">{step.date}</p>
            <p className="text-xs md:text-sm text-gray-500">{step.label}</p>
          </div>
        ))}
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes drawPath {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// The Garage Page
const Garage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">The Garage</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Find your co-founder.<br />
          <span className="text-teal-600">Build in Healthcare, Agriculture, Data & AI.</span>
        </h1>

        <p className="text-xl text-gray-500 mb-12 max-w-3xl">
          The Garage is a cohort-based program where early-stage founders work alongside experienced operators to go from idea to launch. Not a classroom. Not an accelerator. A place where things get built.
        </p>

        {/* Animated Timeline Hero */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">Cohort 1 Journey</h2>
          <p className="text-gray-500 text-center mb-8">12 weeks to launch. Starting July 2026.</p>
          <AnimatedTimeline />
        </div>

        {/* Program Overview */}
        <div className="bg-teal-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Users className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Cohort-based</h3>
                <p className="text-sm text-gray-600">Join a small group of founders tackling big problems together</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Calendar className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">12-week program</h3>
                <p className="text-sm text-gray-600">Intensive sprints with clear milestones and deliverables</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <Rocket className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Launch-ready</h3>
                <p className="text-sm text-gray-600">Exit with a working product, early customers, and a clear path forward</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What you get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Operator guidance", desc: "Work directly with founders and executives who've built and scaled companies in your space" },
              { title: "Technical resources", desc: "Access to data infrastructure, ML pipelines, and engineering support when you need it" },
              { title: "Funding pathway", desc: "Successful graduates are fast-tracked for investment from Cawver and our network" },
              { title: "Operational support", desc: "Legal, finance, compliance, and hiring help so you can focus on building" },
              { title: "Peer community", desc: "A tight-knit group of founders who become collaborators and friends" },
              { title: "Post-program access", desc: "Continued access to The Garage network and resources after you graduate" }
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="text-teal-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Who it's for</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Early-stage founders</span> with a clear problem they want to solve — whether you have a prototype or just an idea backed by deep domain experience.
            </p>
            <p>
              <span className="font-medium text-gray-900">Domain experts</span> who've worked in healthcare, agriculture, data, or AI and are ready to build something of their own.
            </p>
            <p>
              <span className="font-medium text-gray-900">Technical builders</span> who want to pair their skills with experienced operators and a supportive community.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What we build</h2>
          <p className="text-gray-500 mb-6">The Garage focuses on ventures in Cawver's core areas:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Healthcare", desc: "Clinical tools, care coordination, community health" },
              { name: "Food & Agriculture", desc: "Precision farming, livestock tech, supply chain" },
              { name: "Data Infrastructure", desc: "Pipelines, orchestration, integration platforms" },
              { name: "AI & Machine Learning", desc: "Applied ML, AI agents, intelligent automation" }
            ].map((area, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">{area.name}</h3>
                <p className="text-sm text-gray-500">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Co-founder Matching - Integrated into header messaging, keeping as supporting element */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="text-teal-400" size={28} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-white mb-2">Solo founder? We'll help you find your match.</h2>
              <p className="text-gray-400">
                Apply as an individual — we match domain experts (clinicians, farmers, operators) with technical builders to form founding teams.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to build?</h2>
          <p className="text-gray-400 mb-6">
            Whether you're a clinician who sees gaps in care, a farmer rethinking how food is grown, or an engineer solving hard data problems — if you're ready to turn insight into impact, we want to meet you.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-teal-400 transition-colors"
          >
            Apply to The Garage
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
                  <p className="text-sm mt-1">What have you seen working in healthcare, agriculture, data, or AI? What problem keeps you up at night?</p>
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
                  <p className="text-sm mt-1">Who benefits from what you're building? How will you reach them?</p>
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

// Apply Page - The Garage Application
const Apply = () => {
  const stages = [
    {
      number: "01",
      title: "Online Application",
      icon: FileText,
      duration: "~20 minutes",
      description: "Tell us about yourself, your background, and what drives you.",
      details: [
        "Your background — education, work experience, and what shaped you",
        "Your motivation — why entrepreneurship, why now, why The Garage",
        "Your ideas — any problems you're obsessed with (a fully formed idea isn't required)",
        "Co-founder status — applying solo or with a partner"
      ]
    },
    {
      number: "02",
      title: "AI Interview",
      icon: MessageSquare,
      duration: "~30 minutes",
      description: "An AI-driven conversation to understand how you think.",
      details: [
        "Problem-solving approach and thinking patterns",
        "How you handle ambiguity and constraints",
        "Your founder traits and instincts"
      ]
    },
    {
      number: "03",
      title: "The Challenge",
      icon: Zap,
      duration: "48 hours",
      description: "A hands-on task to see how you execute under constraints.",
      details: [
        "Real-world problem to solve with limited resources",
        "Tests creativity, resourcefulness, and conviction",
        "Show us how you ship, not just how you plan"
      ]
    },
    {
      number: "04",
      title: "Founder Interview",
      icon: Users,
      duration: "45 minutes",
      description: "A conversation with our team to understand who you are.",
      details: [
        "What you've learned from your experiences",
        "Your resilience and how you handle setbacks",
        "Why you want to build, and what you're willing to give up to do it"
      ]
    },
    {
      number: "05",
      title: "5-Day Bootcamp",
      icon: Rocket,
      duration: "In-person",
      description: "The final stage — build alongside other finalists.",
      details: [
        "Intensive hands-on building with potential co-founders",
        "Work on real problems in our focus areas",
        "Demonstrate speed, adaptability, and collaboration",
        "Final cohort selection at the end"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Apply to The Garage</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          We're looking for builders, not resumes.
        </h1>

        <p className="text-xl text-gray-500 mb-8 max-w-3xl">
          The Garage application isn't about polished pitches or impressive credentials. We want to understand how you think, how you solve problems, and what you're willing to build.
        </p>

        {/* What We Look For */}
        <div className="bg-teal-50 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What we're looking for</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Brain className="text-teal-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Clarity of thinking</h3>
              <p className="text-sm text-gray-500">Can you break down complex problems and find the core issue?</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Zap className="text-teal-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Bias for action</h3>
              <p className="text-sm text-gray-500">Do you ship, or do you just plan? We want doers.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Target className="text-teal-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Resilience</h3>
              <p className="text-sm text-gray-500">Building is hard. Can you push through when things break?</p>
            </div>
          </div>
        </div>

        {/* Application Stages */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">The Selection Process</h2>
          <div className="space-y-6">
            {stages.map((stage, i) => {
              const IconComponent = stage.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{stage.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{stage.title}</h3>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{stage.duration}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{stage.description}</p>
                      <ul className="space-y-2">
                        {stage.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                            <CheckCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Cohort 1 Timeline</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { date: "Apr 2026", label: "Applications Open" },
              { date: "May 2026", label: "Interviews & Challenge" },
              { date: "Jun 2026", label: "Bootcamp & Selection" },
              { date: "Jul 2026", label: "Program Begins" }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-white rounded-xl">
                <p className="font-semibold text-gray-900">{item.date}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Common Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do I need a business idea to apply?</h3>
              <p className="text-gray-500 text-sm">No. We're selecting for people, not ideas. If you have a problem you're passionate about, that's enough. We'll help you shape it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I apply without a co-founder?</h3>
              <p className="text-gray-500 text-sm">Yes. Many applicants come solo. The bootcamp is designed to help you find the right co-founder from the cohort.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What's the time commitment?</h3>
              <p className="text-gray-500 text-sm">The 12-week program is full-time. If you're currently employed, you'll need to be ready to make the jump if selected.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Where is the bootcamp held?</h3>
              <p className="text-gray-500 text-sm">Location will be shared with finalists. Plan for travel and 5 full days of in-person collaboration.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to apply?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Applications for Cohort 1 open in April 2026. Join the waitlist to be notified when applications go live.
            </p>
            <a
              href="mailto:garage@cawver.com?subject=Garage Waitlist"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-teal-400 transition-colors"
            >
              Join the Waitlist
              <ArrowRight size={16} />
            </a>
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
            <Link to="/garage" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">The Garage</Link>
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
        <Route path="/garage" element={<Garage />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pitch" element={<Pitch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
