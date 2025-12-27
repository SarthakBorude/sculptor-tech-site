import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
      {/* 1. NEW: Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
          alt="Modern Office" 
          className="w-full h-full object-cover opacity-50" 
        />
        {/* Gradient Overlay to fade it into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-[80vh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Sculpting Your <span className="text-purple-500">Digital Future</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We transform complex business challenges into elegant digital solutions. From web development to business analytics, we build the infrastructure for your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#services" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-bold text-lg transition-all text-center">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;