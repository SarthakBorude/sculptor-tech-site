import React from 'react';
import { Monitor, Globe, Smartphone, CheckCircle, BarChart, Plus } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Design",
      description: "Designing unique and visually appealing websites tailored to the client's brand identity, target audience, and business goals. We ensure seamless user experiences across all devices.",
      icon: <Monitor size={40} className="text-purple-600" />,
    },
    {
      id: 2,
      title: "Web Application Development",
      description: "Designing and developing websites using modern technologies and frameworks to create responsive, user-friendly, and visually appealing interfaces.",
      icon: <Globe size={40} className="text-purple-600" />,
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Building native or cross-platform mobile applications for iOS, Android, or both, catering to various industries and specific business use cases.",
      icon: <Smartphone size={40} className="text-purple-600" />,
    },
    {
      id: 4,
      title: "Software Testing",
      description: "Proficiency in testing methodologies, including unit testing, integration testing, and end-to-end testing, along with familiarity with frameworks like JUnit and Selenium.",
      icon: <CheckCircle size={40} className="text-purple-600" />,
    },
    {
      id: 5,
      title: "Business Analytics",
      description: "Developing data-driven solutions, dashboards, and analytics tools to help businesses gain valuable insights from their data and make data-driven decisions.",
      icon: <BarChart size={40} className="text-purple-600" />,
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              // --- UPDATED CLASS NAMES BELOW ---
              className="
                bg-white rounded-2xl p-8 
                border-2 border-transparent 
                hover:border-purple-500 
                shadow-xl hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] 
                hover:-translate-y-2 
                transition-all duration-300 
                flex flex-col justify-between h-full
              "
            >
              <div>
                <div className="mb-6 p-3 bg-purple-50 w-fit rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-purple-100 transition-colors mr-3">
                  <Plus size={20} className="text-purple-700" />
                </div>
                <span className="text-purple-700 font-semibold group-hover:underline">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;