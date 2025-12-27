import React from 'react';
import Masonry from './Masonry'; // This is where you will paste your code
import { galleryImages } from './galleryData';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Work Gallery</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A glimpse into the innovative solutions we build for our partners.
          </p>
        </div>

        {/* The Masonry Component */}
        <div className="min-h-[800px]">
          <Masonry 
            items={galleryImages}
            config={{
              columns: [1, 2, 3],
              gap: [24, 12, 6],
              media: [640, 768, 1024],
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Gallery;
