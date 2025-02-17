"use client";

import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa';

const contactInfo = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-12 h-12" />,
    link: 'https://linkedin.com/in/geancarlobastos',
    description: 'Conecte-se comigo profissionalmente',
    color: 'hover:bg-[#0A66C2]'
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="w-12 h-12" />,
    link: 'https://github.com/GeancarloBastos',
    description: 'Veja meus projetos e contribuições',
    color: 'hover:bg-[#333]'
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp className="w-12 h-12" />,
    link: 'https://wa.me/5553991507241',
    description: 'Vamos conversar?',
    color: 'hover:bg-[#25D366]'
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="w-12 h-12" />,
    link: 'mailto:geancarloads@gmail.com',
    description: 'Entre em contato por email',
    color: 'hover:bg-[#EA4335]'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="w-12 h-12" />,
    link: 'https://www.instagram.com/geanbastos01/?hl=pt-br',
    description: 'Siga-me no Instagram',
    color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]'
  },
  {
    name: 'Discord',
    icon: <FaDiscord className="w-12 h-12" />,
    link: 'https://discord.gg/G85r5Xm6wx',
    description: 'Vamos trocar uma ideia',
    color: 'hover:bg-[#5865F2]'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-400">
            Escolha a melhor forma de se conectar comigo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                block p-6 rounded-lg
                bg-zinc-900 
                transform hover:scale-105
                transition-all duration-300
                ${contact.color}
                hover:text-white
                group
              `}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">{contact.name}</h2>
                  <p className="text-gray-400 group-hover:text-gray-200">
                    {contact.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Disponível para oportunidades e colaborações!
            <br />
            Vamos criar algo incrível juntos? 🚀
          </p>
        </div>
      </div>
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
    </div>
  );
}