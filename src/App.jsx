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
            We back founders using AI and data to solve real problems — improving patient outcomes, feeding communities sustainably, and building the infrastructure that connects technology to human impact.
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
            AI, ML & Data transforming critical industries
          </h2>
          <p className="text-xl text-gray-500 mb-16 max-w-3xl">
            We invest in founders applying artificial intelligence, machine learning, deep learning, and data science to solve fundamental challenges in healthcare and food systems.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Healthcare */}
            <div className="bg-white rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-teal-600" size={32} />
                <h3 className="text-2xl font-semibold text-gray-900">Healthcare</h3>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                AI and data are revolutionizing how we diagnose, treat, and prevent disease. We back founders building intelligent systems that improve patient outcomes and reduce costs.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Clinical AI & Diagnostics</h4>
                    <p className="text-sm text-gray-500">Deep learning for medical imaging, pathology analysis, and early disease detection</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Drug Discovery & Genomics</h4>
                    <p className="text-sm text-gray-500">ML-powered drug candidate screening, genomic analysis, and personalized medicine</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Health Data Infrastructure</h4>
                    <p className="text-sm text-gray-500">Interoperability platforms, real-world data aggregation, and clinical data pipelines</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Predictive Analytics</h4>
                    <p className="text-sm text-gray-500">Population health management, risk stratification, and outcome prediction models</p>
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
                Feeding the world sustainably demands smarter systems. We invest in AI and data solutions that optimize every step from farm to fork.
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-gray-900">$50K-$750K</p>
              <p className="text-gray-500 mt-2">Check size</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-gray-900">Pre-seed</p>
              <p className="text-gray-500 mt-2">Primary stage</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-gray-900">2 weeks</p>
              <p className="text-gray-500 mt-2">Decision timeline</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-gray-900">Founder First</p>
              <p className="text-gray-500 mt-2">Our mentality</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-gray-900">India & Africa</p>
              <p className="text-gray-500 mt-2">Geographic focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-teal-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to build something extraordinary?
          </h2>
          <p className="text-teal-100 text-lg mb-10">
            We're looking for ambitious founders who see the world differently.
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
          We believe data and AI will reshape every industry
        </h1>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="text-xl text-gray-500 leading-relaxed">
            The companies that will define the next decade are being founded today. They're building the infrastructure
            that will make data accessible, AI practical, and intelligent applications ubiquitous.
          </p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">What we look for</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep technical insight</h3>
                <p className="text-gray-500">
                  Founders who understand their domain at a fundamental level and have a unique perspective on how to solve hard problems.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Large market opportunity</h3>
                <p className="text-gray-500">
                  Problems that matter at scale. We invest in companies that can become category-defining businesses.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timing advantage</h3>
                <p className="text-gray-500">
                  Why now? The best opportunities emerge at inflection points in technology or market dynamics.
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
            Our network includes operators and executives at leading data and AI companies who can help with
            technical challenges, go-to-market strategy, and recruiting.
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
          We're proud to partner with exceptional founders building the future of data and AI.
        </p>

        {/* Placeholder for portfolio companies */}
        <div className="bg-teal-50 rounded-2xl p-16 text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="text-teal-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Coming Soon</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We're actively deploying capital and will announce our portfolio companies soon.
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
          Let's build the future together
        </h1>

        <p className="text-xl text-gray-500 mb-12">
          We're always excited to meet ambitious founders. Here's how to get in touch.
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
                  <span className="text-gray-900 font-medium">The problem & your solution</span>
                  <p className="text-sm mt-1">What pain are you solving? How does your product work?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Why now?</span>
                  <p className="text-sm mt-1">What's changed that makes this the right time to build this?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Your data/AI moat</span>
                  <p className="text-sm mt-1">What's defensible? Proprietary data, unique model, or network effects?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Market size</span>
                  <p className="text-sm mt-1">How big is the opportunity? Who are the buyers?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium">Team & unfair advantage</span>
                  <p className="text-sm mt-1">Why are you the right people to build this?</p>
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
