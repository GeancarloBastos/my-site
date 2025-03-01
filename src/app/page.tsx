"use client";

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zinc-950">

      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl w-full bg-zinc-900 p-10 rounded-lg shadow-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-14">
            <div className="w-64 h-64 relative rounded-full overflow-hidden shrink-0 group transition-transform duration-300 hover:scale-125 z-10">
              <Image
                src="/eubw.jpeg"
                alt="Geancarlo Bastos"
                fill
                className="object-cover w-full h-full rounded-full"
                priority
              />
            </div>
            <div className="flex-1 text-center space-y-4">
              <h1 className="text-3xl font-bold">
                <Typewriter
                  options={{
                    strings: ['Olá, me chamo Geancarlo Bastos'],
                    autoStart: true,
                    loop: false,
                    cursor: '',
                    delay: 75,
                    deleteSpeed: 9999999,
                  }}
                />
              </h1>
              <div className="text-gray-300 text-lg opacity-0 animate-fadeIn" style={{ animationDelay: '3s' }}>
                <p>
                  Atualmente, estou no 5º semestre de ADS na UniSENAC Pelotas e em busca de oportunidades para aplicar meus conhecimentos e crescer profissionalmente.
                </p>
                <p className="mt-4">
                  Caso tenha interesse em saber mais sobre meus projetos e habilidades, entre em contato ou confira minha página{" "}
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full 
                      hover:bg-blue-700 transition-all duration-300 
                      hover:scale-125 hover:shadow-lg hover:shadow-blue-500/50 
                      hover:z-10 font-semibold text-base relative
                      transform-gpu cursor-pointer"
                  >
                    Sobre
                  </ScrollLink>
                  .
                </p>
              </div>
              <div className="flex justify-center gap-6 mt-6 opacity-0 animate-fadeIn" style={{ animationDelay: '3.4s' }}>
                <a
                  href="https://github.com/GeancarloBastos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/geancarlobastos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="/cv25att.pdf"
                  download="Curriculo_GeancarloBastos.pdf"
                  className="flex items-center gap-2 px-4 py-1 bg-blue-600 text-white rounded-full 
                    hover:bg-blue-700 transition-all duration-300 
                    hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <FaFileDownload size={20} />
                  <span className="text-sm font-medium">CV</span>
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4 opacity-0 animate-fadeIn" style={{ animationDelay: '3.6s' }}>
                🚀 Desenvolvedor Front-end | JavaScript | React.js | TailwindCSS | HTML5 | CSS3 | TypeScript | Next.js
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="min-h-screen md:h-auto"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{
          once: false,
          amount: 0.01,
          margin: "0px 0px -300px 0px"
        }}
      >
        <About />
      </motion.section>

      <motion.section
        id="projects"
        className="min-h-screen"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{
          once: false,
          amount: 0.15
        }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        className="min-h-screen"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{
          once: false,
          amount: 0.15
        }}
      >
        <Contact />
      </motion.section>

      <a
        href="https://wa.me/5553991507241?text=Olá!%20Espero%20que%20esteja%20bem.%20Vi%20seu%20site%20e%20estou%20interessado%20em%20discutir%20a%20possibilidade%20de%20uma%20vaga%20na%20área%20de%20programação.%20Poderíamos%20agendar%20uma%20conversa?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </main>
  );
}