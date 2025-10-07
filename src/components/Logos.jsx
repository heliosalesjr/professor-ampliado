/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';

const Logos = () => {
    const logos = [
    { name: "UNESCO", url: "https://via.placeholder.com/150x80?text=UNESCO" },
    { name: "UCB", url: "https://via.placeholder.com/150x80?text=UCB" },
    { name: "Instituto Salto", url: "https://via.placeholder.com/150x80?text=Instituto+Salto" }
  ];
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={logo.url} alt={logo.name} className="h-20 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Logos