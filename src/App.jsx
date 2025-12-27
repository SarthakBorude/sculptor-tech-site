import React from 'react';


import Nav from './components/Nav'; 
import Hero from './components/Hero';    
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
    
      <Hero />

      <Services />

      <About />

      <Clients />

      <Contact />

      <Gallery />

    
      <footer className="bg-slate-950 text-slate-400 py-8 text-center">
        <p>© SRTKOriginals. 2025 </p>
      </footer>

    
    </div>
  );
}

export default App;