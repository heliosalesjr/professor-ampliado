/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';

const Briefing = () => {
  return (
    <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-orange-500/20 shadow-2xl"
          >
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
              <p className="italic">O que acontece quando algoritmos encontram afetos? Quando a tecnologia cruza com a escuta, o cuidado e a criatividade docente?</p>
              
              <p>É dessas intersecções potentes que nasce <span className="text-orange-400 font-semibold">"O Professor Ampliado: Reimaginando o Papel Docente na Era da IA"</span>, novo livro de Rafael Parente, Renato Brito e Maria Cristina Mesquita, que mergulha com profundidade e lirismo no futuro, e no presente, da educação brasileira.</p>
              
              <p>A obra propõe uma ressignificação do papel docente em tempos de inteligência artificial generativa, defendendo que o professor não perde importância, mas amplia sua atuação. Em vez de mero transmissor de conteúdos, se torna <span className="text-blue-400">curador de experiências, guia emocional, estrategista pedagógico e defensor da humanidade em sala de aula.</span></p>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Briefing