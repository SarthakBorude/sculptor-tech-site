import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock Data: Since you don't have real clients yet, I created 4 realistic scenarios
  const clients = [
    {
      id: 1,
      company: "TechFlow Solutions",
      industry: "FinTech",
      logo: "TS", // Placeholder for a logo
      name: "Rajesh Kumar",
      role: "CTO",
      quote: "SculptorTech revamped our entire backend infrastructure. Their attention to security testing and optimization helped us handle 3x more traffic without a glitch. Truly professional partners.",
      rating: 5
    },
    {
      id: 2,
      company: "GreenLeaf Retail",
      industry: "E-Commerce",
      logo: "GR",
      name: "Sarah Jenkins",
      role: "Product Manager",
      quote: "We needed a mobile app that worked offline for our field agents. The team delivered a Flutter-based solution that is fast, intuitive, and exactly what we needed to boost efficiency.",
      rating: 5
    },
    {
      id: 3,
      company: "EduSphere",
      industry: "EdTech",
      logo: "ES",
      name: "Amit Patel",
      role: "Founder",
      quote: "Their web development team is top-notch. They took our rough concept for a learning portal and turned it into a fully functional, beautiful platform in record time.",
      rating: 4
    },
    {
      id: 4,
      company: "Apex Logistics",
      industry: "Supply Chain",
      logo: "AL",
      name: "Michael Chen",
      role: "Operations Head",
      quote: "The business analytics dashboard they built has given us insights we never had before. We can now track shipments in real-time and predict delays before they happen.",
      rating: 5
    }
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? clients.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === clients.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="clients" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Clients</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            See how we help businesses transform their digital presence.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative group">
          
          {/* Main Card */}
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700 relative transition-all duration-500">
            
            {/* Big Quote Icon Background */}
            <div className="absolute top-6 right-8 text-slate-700 opacity-50">
              <Quote size={80} fill="currentColor" />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              
              {/* Left Side: Avatar/Logo Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {clients[currentIndex].logo}
                </div>
                <div className="text-center mt-4">
                   <div className="flex justify-center space-x-1 text-yellow-400">
                     {[...Array(clients[currentIndex].rating)].map((_, i) => (
                       <Star key={i} size={16} fill="currentColor" />
                     ))}
                   </div>
                </div>
              </div>

              {/* Right Side: Text */}
              <div className="text-center md:text-left flex-1">
                <blockquote className="text-xl md:text-2xl text-gray-200 font-medium italic mb-6 leading-relaxed">
                  "{clients[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <div className="text-white font-bold text-lg">
                    {clients[currentIndex].name}
                  </div>
                  <div className="text-purple-400 text-sm font-medium mb-1">
                    {clients[currentIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wide">
                    {clients[currentIndex].company} • {clients[currentIndex].industry}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Buttons (Absolute Positioned) */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-slate-700 text-white p-3 rounded-full hover:bg-purple-600 transition-colors shadow-lg z-20 group-hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-slate-700 text-white p-3 rounded-full hover:bg-purple-600 transition-colors shadow-lg z-20 group-hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Bottom Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {clients.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-purple-600 w-8' : 'bg-slate-600 hover:bg-slate-500'}`}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
