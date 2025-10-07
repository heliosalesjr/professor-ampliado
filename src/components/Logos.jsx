/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'motion/react';

const Logos = () => {
  const logos = [
    { 
      name: "UNESCO", 
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_UNESCO.svg/2560px-Flag_of_UNESCO.svg.png",
      link: "https://www.unesco.org" 
    },
    { 
      name: "UCB", 
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkEIwnC_Q5RHqZikfeVb9G3oH4Qf85tcjpw&s",
      link: "https://ucb.catolica.edu.br" 
    },
    { 
      name: "Instituto Salto", 
      url: "https://institutosalto.org.br/wp-content/uploads/2023/10/RGB-Versao-BG-Branco-Logo-Vertical-Fundo-Transparente-Formato-PNG-e1698691230765.png",
      link: "https://institutosalto.org.br" 
    }
  ];

  return (
    <div className='bg-gradient-to-r from-white to-slate-100'>
      <h1 className='text-5xl py-8 font-bold text-center bg-gradient-to-r from-orange-600 to-blue-600 text-transparent bg-clip-text'>
        Realização
      </h1>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, index) => (
              <a 
                key={index}
                href={logo.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-30 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Logos
