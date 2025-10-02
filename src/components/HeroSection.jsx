import React from 'react';
import { motion } from 'motion/react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  // Gerar valores aleatórios no momento da renderização
  const blob1 = {
    size: 350 + Math.random() * 250, // 350-600px
    top: 10 + Math.random() * 70, // 10-80% - varia mais
    left: Math.random() * 30, // 0-30% (lado esquerdo)
    duration: 10 + Math.random() * 6, // 10-16s
    pulseDuration: 5 + Math.random() * 3, // 5-8s
    morphDuration: 7 + Math.random() * 4, // 7-11s
  };

  const blob2 = {
    size: 400 + Math.random() * 300, // 400-700px
    top: 20 + Math.random() * 70, // 20-90% - varia mais
    left: 60 + Math.random() * 35, // 60-95% (lado direito)
    duration: 12 + Math.random() * 6, // 12-18s
    pulseDuration: 6 + Math.random() * 3, // 6-9s
    morphDuration: 8 + Math.random() * 5, // 8-13s
    delay: 0.5,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute bg-blue-500 rounded-full filter blur-3xl blob-1"
          style={{
            width: `${blob1.size}px`,
            height: `${blob1.size}px`,
            top: `${blob1.top}%`,
            left: `${blob1.left}%`,
            '--duration': `${blob1.duration}s`,
            '--pulse-duration': `${blob1.pulseDuration}s`,
            '--morph-duration': `${blob1.morphDuration}s`,
            '--delay': '0s',
          }}
        />
        <div 
          className="absolute bg-orange-500 rounded-full filter blur-3xl blob-2"
          style={{
            width: `${blob2.size}px`,
            height: `${blob2.size}px`,
            top: `${blob2.top}%`,
            left: `${blob2.left}%`,
            '--duration': `${blob2.duration}s`,
            '--pulse-duration': `${blob2.pulseDuration}s`,
            '--morph-duration': `${blob2.morphDuration}s`,
            '--delay': `${blob2.delay}s`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text leading-tight">
            O Professor Ampliado
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-300 mb-12 font-light"
        >
          Reimaginando o Papel Docente na Era da IA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block"
        >
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto"></div>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer bg-transparent border-none hover:scale-110 transition-transform"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-8 h-8 text-orange-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;