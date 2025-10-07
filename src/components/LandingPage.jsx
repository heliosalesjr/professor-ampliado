import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import HeroSection from './HeroSection';
import Convite from './Convite';
import Autores from './Autores';
import Briefing from './Briefing';
import Quote from './Quote';
import Media from './Media';
import Logos from './Logos';
import Baixe from './Baixe';

const LandingPage = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-950 to-gray-900 text-white overflow-x-hidden">
      <HeroSection />

      <Briefing />

      <Quote />

      <Media />

      <Convite />

      <Autores />
    
      <Baixe />
      
      <Logos />

      

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 O Professor Ampliado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;