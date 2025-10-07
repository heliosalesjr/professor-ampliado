/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';
import { FaCheckCircle } from 'react-icons/fa';

const Convite = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-950 via-gray-950 to-orange-950">
      {/* Efeito de luz suave no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,140,0,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,200,255,0.15),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-orange-500/20 shadow-[0_0_40px_rgba(255,165,0,0.1)] hover:shadow-[0_0_80px_rgba(255,165,0,0.2)] transition-all duration-700">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-orange-400 via-orange-300  to-blue-400 text-transparent bg-clip-text tracking-tight"
          >
            Convite
          </motion.h2>
          
          <div className="text-center text-lg md:text-xl leading-relaxed text-gray-200/90 space-y-3 mb-12">
            <p className="text-gray-300">A Universidade Católica de Brasília,</p>
            <p className="text-gray-300">a Cátedra da Unesco de Educação, Juventude e Sociedade,</p>
            <p className="text-gray-300">o Instituto Salto</p>
            <p className="text-gray-300">e a Senadora Leila Barros</p>

            <p className="pt-6 text-gray-100/90">têm a honra de convidar V.Sa. para o lançamento do livro</p>

            <p className="text-2xl md:text-3xl font-bold text-orange-400 py-3 italic">
              “O Professor Ampliado”
            </p>

            <p className="text-gray-300">
              dos autores <span className="text-orange-300 font-semibold">Rafael Parente</span>, <span className="text-orange-300 font-semibold">Renato Brito</span> e <span className="text-orange-300 font-semibold">Maria Cristina Mesquita</span>.
            </p>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-blue-500 
              text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 
              inline-flex items-center gap-3 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaCheckCircle className="text-white" />
                Confirme sua presença
              </span>

              {/* brilho no hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Convite
