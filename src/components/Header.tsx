import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-purple-600 animate-pulse" />
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-20 animate-ping"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              FlowAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
              How it Works
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
              Use Cases
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
              Pricing
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/20 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                How it Works
              </a>
              <a href="#use-cases" className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                Use Cases
              </a>
              <a href="#pricing" className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-200 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;