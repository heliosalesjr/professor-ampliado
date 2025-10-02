import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import HeroSection from './HeroSection';
import { FaLinkedin, FaNewspaper, FaDownload, FaCheckCircle } from 'react-icons/fa';

const LandingPage = () => {
  const authors = [
    {
      name: "Rafael Parente",
      image: "https://via.placeholder.com/200",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Renato Brito",
      image: "https://via.placeholder.com/200",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Maria Cristina Mesquita",
      image: "https://via.placeholder.com/200",
      linkedin: "https://linkedin.com"
    }
  ];

  const mediaLinks = [
    { title: "Matéria sobre o lançamento", url: "#", source: "Portal Educação" },
    { title: "Entrevista com os autores", url: "#", source: "Revista Digital" },
    { title: "O futuro da educação com IA", url: "#", source: "Tech News" }
  ];

  const logos = [
    { name: "UNESCO", url: "https://via.placeholder.com/150x80?text=UNESCO" },
    { name: "UCB", url: "https://via.placeholder.com/150x80?text=UCB" },
    { name: "Instituto Salto", url: "https://via.placeholder.com/150x80?text=Instituto+Salto" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <HeroSection />
      {/* Briefing Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
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

      {/* Quote Section */}
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

      {/* Authors Section */}
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

      {/* Invitation Section */}
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

      {/* Media Section */}
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

      {/* Logos Section */}
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

      {/* Download Section */}
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

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 O Professor Ampliado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;