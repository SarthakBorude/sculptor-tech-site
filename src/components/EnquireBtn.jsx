import React from 'react';
import { MessageSquareText } from 'lucide-react';

const EnquireBtn = () => {
  return (
    <a
      href="#contact" // Scrolls down to your Contact section
      className="fixed top-1/2 right-0 z-50 -translate-y-1/2 group"
      aria-label="Enquire Now"
    >
      {/* The Button Container - styled to look like the purple glow reference */}
      <div className="
        flex flex-col items-center justify-center
        bg-gradient-to-br from-purple-600 to-purple-800
        text-white
        py-6 px-3
        rounded-l-[30px] /* Rounded only on the left side */
        shadow-[0_0_15px_rgba(147,51,234,0.5)] /* The purple glow */
        hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] /* Intense glow on hover */
        hover:pr-5 /* Subtle nudge out on hover */
        transition-all duration-300 ease-in-out
        cursor-pointer
      ">
        {/* Icon */}
        <MessageSquareText size={20} className="mb-3 text-purple-100 group-hover:text-white transition-colors" />

        {/* Vertical Text */}
        {/* writing-vertical-rl + rotate-180 makes text read bottom-to-top */}
        <span className="writing-vertical-rl rotate-180 font-bold tracking-widest text-sm uppercase whitespace-nowrap">
          Enquire Now
        </span>
      </div>
    </a>
  );
};

// We need a tiny bit of custom CSS for the vertical text support if it's not in your Tailwind config.
// You can add this to your index.css, or I can wrap it in a style tag here.
// Let's add it via an inline style tag for simplicity right now.
const GeneratedStyles = () => (
  <style>{`
    .writing-vertical-rl {
      writing-mode: vertical-rl;
    }
  `}</style>
);

// Exporting the button with the styles included
const EnquireBtnWithStyles = () => (
  <>
    <GeneratedStyles />
    <EnquireBtn />
  </>
);

export default EnquireBtnWithStyles;