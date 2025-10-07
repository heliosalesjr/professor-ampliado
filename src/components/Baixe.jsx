/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';
import { FaDownload } from 'react-icons/fa';

const Baixe = () => {
  return (
    <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-orange-900/30 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-blue-500/20">
            <FaDownload className="text-6xl text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">Baixe o Livro</h2>
            <p className="text-xl text-gray-300 mb-8">Disponível após o lançamento oficial</p>
            <p className="text-5xl font-bold text-orange-400 mb-8">14 de Outubro</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled
              className="bg-gray-700 text-gray-400 font-bold py-4 px-10 rounded-full text-lg cursor-not-allowed inline-flex items-center gap-3"
            >
              <FaDownload />
              Em breve
            </motion.button>
          </div>
        </motion.div>
      </section>
  )
}

export default Baixe