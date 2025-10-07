/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';
import { FaNewspaper } from 'react-icons/fa';


const Media = () => {
    const mediaLinks = [
    { title: "Matéria sobre o lançamento", url: "#", source: "Portal Educação" },
    { title: "Entrevista com os autores", url: "#", source: "Revista Digital" },
    { title: "O futuro da educação com IA", url: "#", source: "Tech News" }
  ];

  return (
    <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-blue-400 text-transparent bg-clip-text"
          >
            O Professor Ampliado na Mídia
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
              >
                <FaNewspaper className="text-orange-500 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-orange-400 transition-colors duration-300">{link.title}</h3>
                <p className="text-gray-400 text-sm">{link.source}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Media