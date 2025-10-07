/* eslint-disable no-unused-vars */
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
    size: 350 + Math.random() * 250,
    top: 10 + Math.random() * 70,
    left: Math.random() * 30,
    duration: 10 + Math.random() * 6,
    pulseDuration: 5 + Math.random() * 3,
    morphDuration: 7 + Math.random() * 4,
  };

  const blob2 = {
    size: 400 + Math.random() * 300,
    top: 20 + Math.random() * 70,
    left: 60 + Math.random() * 35,
    duration: 12 + Math.random() * 6,
    pulseDuration: 6 + Math.random() * 3,
    morphDuration: 8 + Math.random() * 5,
    delay: 0.5,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className='max-w-5xl mx-auto '>
      
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
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 text-transparent bg-clip-text leading-tight">
                O Professor Ampliado
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed"
            >
              Reimaginando o Papel Docente na Era da IA
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-blue-500"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-slate-300 max-w-xl"
            >
              Um livro dos autores <strong>Rafael Parente</strong>, <strong>Renato Brito</strong> e <strong>Maria Cristina Mesquita</strong>.
            </motion.p>
          </motion.div>

          {/* Right Side - Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Book cover */}
              <div className="relative">
                <img 
                  src="/capa_pa.png" 
                  alt="Capa do livro O Professor Ampliado"
                  className="w-full max-w-sm drop-shadow-2xl"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
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
      </div>
    </section>
  );
};

export default HeroSection;