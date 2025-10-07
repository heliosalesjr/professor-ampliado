import React from 'react'
import { motion } from 'motion/react';
import { FaCheckCircle } from 'react-icons/fa';

const Convite = () => {
  return (
   
    <section className="py-20 px-4 bg-gradient-to-br from-orange-900/10 via-transparent to-blue-900/10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg p-10 md:p-16 rounded-3xl border-2 border-orange-500/30 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-400">Convite</h2>
          
          <div className="text-center text-lg md:text-xl leading-relaxed text-gray-200 space-y-4 mb-10">
            <p>A Universidade Católica de Brasília,</p>
            <p>a Cátedra da Unesco de Educação, Juventude e Sociedade,</p>
            <p>o Instituto Salto</p>
            <p>e a Senadora Leila Barros</p>
            <p className="pt-4">têm a honra de convidar V.Sa. para o lançamento do livro</p>
            <p className="text-2xl font-bold text-orange-400 py-2">"O Professor Ampliado"</p>
            <p>dos autores Rafael Parente, Renato Brito e Maria Cristina Mesquita.</p>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <FaCheckCircle />
              Confirme sua presença
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Convite