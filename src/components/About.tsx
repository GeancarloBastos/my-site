"use client";

import Image from 'next/image';

const technologies = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    level: 2
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
    level: 3
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    level: 3
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
    level: 2
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    level: 2
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
    level: 3
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
    level: 2
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
    level: 2
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    level: 2
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    level: 1
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
    level: 2
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
    level: 2
  },
  {
    name: 'Visual Studio Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg',
    level: 3
  },
  {
    name: 'Ubuntu',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg',
    level: 2
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg',
    level: 3
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    level: 2
  },
  {
    name: 'Photoshop',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
    level: 1
  },
  {
    name: 'Canva',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
    level: 3
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    level: 1
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
    level: 2
  }
];

export default function About() {
  return (
    <main className="bg-zinc-950 py-8">
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden shrink-0 group transition-transform duration-300 hover:scale-125 z-10">
            <Image
              src="/euw.jpeg"
              alt="Geancarlo Bastos"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mt-10 text-center">Sobre</h1>
          <div className="w-16 h-1 bg-blue-500 mb-2"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto bg-zinc-900 p-10 rounded-lg shadow-xl">
          <p className="text-gray-300 text-lg mb-6">
            Olá! Que ótimo você ter chegado até aqui! Fiquei tão feliz por seu interesse em me conhecer melhor que até desbloqueou minha foto sorrindo. 😄
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Minha paixão por tecnologia e design me levou a me especializar em front-end, área em que tenho aprimorado constantemente minhas habilidades e busco aprender novas tecnologias. 🚀
          </p>
          <p className='text-gray-300 text-lg mb-6'>
            Minhas características mais fortes incluem proatividade, liderança, facilidade de aprendizado, comunicação e humildade. Estou sempre disposto a ajudar e a aprender com os outros.  🤝
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14">Tecnologias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-zinc-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 group hover:bg-zinc-100"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center font-semibold text-gray-300 group-hover:text-zinc-900 transition-colors duration-300">
                {tech.name}
              </p>
              <div className="flex justify-center gap-1">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className={`w-4 h-1 rounded-full ${level <= tech.level
                      ? 'bg-blue-500 group-hover:bg-blue-600'
                      : 'bg-gray-600 group-hover:bg-gray-400'
                      } transition-colors duration-300`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mb-10 mt-16">
        <div className="max-w-4xl mx-auto bg-zinc-900 p-10 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Objetivos</h2>
          <p className="text-gray-300 text-lg mb-4">
            Tenho experiência em projetos acadêmicos e externos e estou em busca de uma oportunidade para aplicar meus conhecimentos no mercado.

            Tenho conhecimento de nível júnior no front-end e estou focado em consolidar minha experiência na área. 🎯
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
    </main>
  );
}
