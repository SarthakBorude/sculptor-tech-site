import React from "react";
import { ArrowRight, Code, Layout, Cloud } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="pt-20"> {/* pt-20 adds padding for the fixed navbar */}
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                We build software that <span className="text-blue-600">grows businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Product design, engineering, and strategy for ambitious companies. 
                We turn complex problems into elegant solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#services" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center justify-center">
                  Our Services <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#contact" className="px-8 py-3 bg-white text-blue-600 border border-blue-200 font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Optional Image Placeholder */}
            <div className="hidden lg:block lg:w-1/2 pl-12">
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW / CARDS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What we do</h2>
            <p className="mt-4 text-gray-600">Comprehensive solutions for the modern web.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition duration-300 border border-gray-100">
              <Code className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Software</h3>
              <p className="text-gray-600 leading-relaxed">Scalable applications tailored specifically to your business needs and workflow.</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition duration-300 border border-gray-100">
              <Layout className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">UX & Design</h3>
              <p className="text-gray-600 leading-relaxed">Human-centered design principles that delight users and drive higher adoption rates.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition duration-300 border border-gray-100">
              <Cloud className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud & DevOps</h3>
              <p className="text-gray-600 leading-relaxed">Reliable infrastructure, automated pipelines, and fast delivery to the cloud.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
