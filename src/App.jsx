import React from 'react';

// FIX: Make sure this matches your actual file name 'nav.jsx'
import Nav from './components/nav'; 
import Hero from './components/Hero';     // Import the new Hero
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import EnquireBtn from './components/EnquireBtn';
import Chatbot from './components/Chatbot';


function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Nav />

      <EnquireBtn />
      
      <Chatbot />
      {/* The new Hero component handles the #home ID now */}
      <Hero />

      <Services />

      <About />

      <Clients />

      <Contact />

      <Gallery />

      {/* Footer Placeholder (Optional, completes the page structure) */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center">
        <p>© SRTKOriginals. 2025 </p>
      </footer>

      {/* ... Add other sections as you build them */}
    </div>
  );
}

export default App;