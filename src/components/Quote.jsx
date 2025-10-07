/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';

const Quote = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-900/20 to-blue-900/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative">
            <svg className="absolute top-0 left-0 w-16 h-16 text-orange-500/30 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>
            
            <p className="text-2xl md:text-4xl font-light text-gray-200 leading-relaxed px-8 md:px-16">
              Ampliar o professor não é robotizá-lo. É oferecer a ele o protagonismo necessário, humano, sensível, insubstituível, para que ele lidere as transformações educacional e social que são urgentes no Brasil e no mundo hoje.
            </p>
            
            <p className="mt-8 text-xl text-orange-400 font-semibold">— Rafael Parente</p>
          </div>
        </motion.div>
      </section>
  )
}

export default Quote