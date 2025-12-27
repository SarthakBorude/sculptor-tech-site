import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  // Shared class for the hover glow effect
  const glowClass = "transition-all duration-300 border border-transparent hover:border-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:-translate-y-1";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            
            {/* Info Cards Container */}
            <div className="grid gap-6">
              
              {/* Location Card */}
              <div className={`flex items-start p-6 bg-slate-50 rounded-xl ${glowClass}`}>
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    C-1006, Green City, Satav Nagar,<br />
                    Handewadi Road, Hadapsar,<br />
                    Pune-411028
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className={`flex items-start p-6 bg-slate-50 rounded-xl ${glowClass}`}>
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Us</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">contact@sculptortechpvtltd.com</p>
                    <p className="text-gray-600">sculptortechpvtltd@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className={`flex items-start p-6 bg-slate-50 rounded-xl ${glowClass}`}>
                <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Call Us</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">+91 8623034275</p>
                    <p className="text-gray-600">+91 8668584275</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map (Fixed height, no hover needed really, but kept clean) */}
            <div className="h-64 w-full bg-slate-200 rounded-xl overflow-hidden shadow-inner border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.068994770335!2d73.93172637503714!3d18.471694982613143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea7c7a7a7a7b%3A0x7a7a7a7a7a7a7a7a!2sGreen%20City%2C%20Handewadi%20Rd%2C%20Satav%20Nagar%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e0!3m2!1sen!2sin!4v1703698765432!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          {/* I added the glow effect here too! */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 lg:p-10 ${glowClass}`}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="+91 99999 99999"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/30"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;