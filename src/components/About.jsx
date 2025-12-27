import React from 'react';
import { Mail, MapPin, Users, Briefcase, Building2, Globe, CheckCircle2 } from 'lucide-react';

const About = () => {
  const specialities = [
    "Web Design & Development",
    "Mobile App Development",
    "Social Media Marketing",
    "SEO Optimization",
    "Web Analytics"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 z-0 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & Data */}
          <div>
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-bold rounded-full text-sm mb-6">
              Who We Are
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Empowering SMEs with <span className="text-purple-600">Smart Tech</span> Solutions.
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SculptorTech Pvt Ltd helps Small and Medium Enterprises achieve their revenue goals by providing cutting-edge technology and business solutions. We don't just build software; we build the engine for your growth.
            </p>

            {/* Specialities Tags */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Our Specialities</h3>
              <div className="flex flex-wrap gap-3">
                {specialities.map((item, index) => (
                  <span key={index} className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm font-medium shadow-sm hover:border-purple-300 transition-colors">
                    <CheckCircle2 size={16} className="text-purple-500 mr-2" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Grid - NOW CONTAINS ALL 6 ITEMS PERFECTLY ALIGNED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg mr-4 text-blue-600 flex-shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Industry</h4>
                  <p className="text-sm text-gray-500">IT Services & Consulting</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="p-3 bg-green-50 rounded-lg mr-4 text-green-600 flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Company Size</h4>
                  <p className="text-sm text-gray-500">05-20 Employees</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="p-3 bg-orange-50 rounded-lg mr-4 text-orange-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Headquarters</h4>
                  <p className="text-sm text-gray-500">Pune, Maharashtra</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="p-3 bg-purple-50 rounded-lg mr-4 text-purple-600 flex-shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Type</h4>
                  <p className="text-sm text-gray-500">Private Limited</p>
                </div>
              </div>

              {/* Item 5 - Moved here */}
              <div className="flex items-start">
                <div className="p-3 bg-red-50 rounded-lg mr-4 text-red-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-sm text-gray-500 break-all">sculptortechpvtltd@gmail.com</p>
                </div>
              </div>

              {/* Item 6 - Moved here */}
              <div className="flex items-start">
                <div className="p-3 bg-teal-50 rounded-lg mr-4 text-teal-600 flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Freelance</h4>
                  <p className="text-sm text-gray-500">Available for Hire</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Clean Image Only */}
          <div className="relative h-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white h-full">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover min-h-[500px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
