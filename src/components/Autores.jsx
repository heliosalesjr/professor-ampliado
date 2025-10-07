import React from 'react'
import { motion } from 'motion/react';
import { FaLinkedin } from 'react-icons/fa';

const Autores = () => {

    const authors = [
    {
      name: "Rafael Parente",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFedE0OeXS24Q/profile-displayphoto-crop_800_800/B4DZgaD.aJH8AQ-/0/1752783907546?e=1762992000&v=beta&t=Nun_D_EfU0OJLNhivMCaurBfvQSkosB-hCe6LriQ9TY",
      linkedin: "https://www.linkedin.com/in/rafaelparente/"
    },
    {
      name: "Renato Brito",
      image: "https://via.placeholder.com/200",
      linkedin: "https://www.linkedin.com/in/renato-brito-45a40954/"
    },
    {
      name: "Maria Cristina Mesquita",
      image: "https://via.placeholder.com/200",
      linkedin: "https://ucb2.catolica.edu.br/portal/noticias/pesquisadores-da-ucb-marcam-presenca-em-conferencia-na-espanha/"
    }
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
            Autores
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {authors.map((author, index) => (
              <motion.a
                key={index}
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500/50 group-hover:border-orange-400 transition-colors duration-300">
                    <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-blue-600 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaLinkedin className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-orange-400 transition-colors duration-300">{author.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Autores