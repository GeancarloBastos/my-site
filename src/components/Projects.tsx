"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaGithub, FaLink } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MySite",
    description: "Portfolio pessoal desenvolvido com Next.js",
    image: "/mysite.png",
    images: ["/mysite.png", "/mysite2.png", "/mysite3.png"],
    technologies: ["JavaScript", "Tailwind CSS", "TypeScript", "Next.js"],
    github: "https://github.com/GeancarloBastos/my-site",
    liveDemo: "https://mysitegeancarlo.vercel.app/",
    longDescription: "Desenvolvi este site pessoal como uma vitrine para meus projetos e habilidades. Utilizei Next.js para garantir uma ótima performance e SEO, TypeScript para maior segurança no código e Tailwind CSS para estilização moderna e responsiva."
  },
  {
    id: 2,
    title: "Casa3Cliente",
    description: "Site para uma empresa de móveis planejados",
    image: "/casa3.png",
    images: ["/casa3.png", "/casa32.png", "/casa33.png", "/casa34.png", "/casa35.png", "/casa36.png"],
    technologies: ["JavaScript", "React", "TailwindCSS", "TypeScript", "PostgreeSQL", "Supabase"],
    github: "https://github.com/GeancarloBastos/ProjetoCasa3",
    liveDemo: "https://projeto-cliente-ashen.vercel.app/",
    longDescription: "Este foi o projeto integrador da faculdade, na qual conseguimos um parceria com uma loja de móveis planejados, que foi um grande diferencial dos demais. Fui o líder do projeto e do front, adquirindo experiência em reuniões com o cliente, para compreender melhor suas necessidades e desejos. Utilizamos React para a construção do site, TailwindCSS para estilização, TypeScript para segurança no código, PostgreeSQL e Supabase para o banco de dados. Foi usado também o método de desenvolvimento ágil, Scrum, para a entrega do projeto. Responsividade. Fora aprender toda a parte de segurança, como autenticação e autorização."
  },
  {
    id: 3,
    title: "Casa3Admin",
    description: "Site para a administração de uma empresa de móveis planejados",
    image: "/casa37admin.png",
    images: ["/casa37admin.png", "/casa38admin.png", "/casa32admin.png", "/casa33admin.png", "/casa34admin.png"],
    technologies: ["JavaScript", "React", "TailwindCSS", "TypeScript", "PostgreeSQL", "Supabase"],
    github: "https://github.com/GeancarloBastos/ProjetoCasa3/tree/adm",
    liveDemo: "https://projeto-adm-six.vercel.app/",
    longDescription: "Este foi o projeto integrador da faculdade, na qual conseguimos um parceria com uma loja de móveis planejados, que foi um grande diferencial dos demais. Fui o líder do projeto e do front, adquirindo experiência em reuniões com o cliente, para compreender melhor suas necessidades e desejos. Utilizamos React para a construção do site, TailwindCSS para estilização, TypeScript para segurança no código, PostgreeSQL e Supabase para o banco de dados. Foi usado também o método de desenvolvimento ágil, Scrum, para a entrega do projeto. Responsividade. Fora aprender toda a parte de segurança."
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setSelectedImage(project.images[0]);
  };


  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4">
      {/* cabeçalho */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Meus Projetos</h1>
        <p className="text-xl text-gray-400">
          Conheça alguns dos projetos que desenvolvi
        </p>
      </div>

      {/* grid de projetos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-zinc-900"
            onClick={() => handleProjectSelect(project)}
          >
            <div className="aspect-w-16 aspect-h-9 relative w-full h-[160px] sm:h-[180px] lg:h-[200px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white text-center px-2 sm:px-4 transform transition-transform duration-300 opacity-100 group-hover:opacity-0">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
        <div className="relative group cursor-default overflow-hidden rounded-lg bg-zinc-900/50 border-2 border-dashed border-zinc-700">
          <div className="aspect-w-16 aspect-h-9 relative w-full h-[160px] sm:h-[180px] lg:h-[200px] flex flex-col items-center justify-center p-4">
            <div className="animate-spin mb-4">
              <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="text-gray-400 text-center font-medium">
              Mais projetos sendo adicionados...
            </p>
            <p className="text-gray-500 text-sm text-center mt-2">
              Em breve novidades...
            </p>
          </div>
        </div>
      </div>

      {/* modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-start justify-center p-2 sm:p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-zinc-900 rounded-lg w-full max-w-4xl my-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* botão de fechar */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 -right-4 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110" // Alterado de -top-4 para top-2
              aria-label="Fechar"
            >
              <FaTimes size={20} />
            </button>

            {/* barra superior com título para mobile */}
            <div className="md:hidden bg-zinc-800 p-4 rounded-t-lg flex items-center justify-between">
              <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
            </div>

            {/* conteúdo do modal */}
            <div className="overflow-y-auto max-h-[90vh] md:max-h-none">
              <div className="relative">
                {/* imagem destaque */}
                <div className="w-full max-w-3xl mx-auto h-[300px] sm:h-[400px] lg:h-[500px] relative">
                  <Image
                    src={selectedImage || selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain" // contain=toda imagem visivel, cover=preenche todo espaço, mas pode cortar 
                    priority
                  />
                </div>

                {/* miniaturas */}
                <div className="p-2 sm:p-4 flex justify-center gap-2 sm:gap-4 overflow-x-auto">
                  {selectedProject.images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`
                        relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0
                        rounded-lg overflow-hidden cursor-pointer 
                        transition-all duration-200 
                        ${selectedImage === img
                          ? 'ring-2 ring-blue-500 scale-105'
                          : 'hover:scale-105'
                        }
                      `}
                    >
                      <Image
                        src={img}
                        alt={`${selectedProject.title} - imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* conteúdo */}
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">{selectedProject.title}</h2>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-zinc-800 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 text-sm sm:text-base">
                    {selectedProject.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors text-sm sm:text-base"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors text-sm sm:text-base"
                      >
                        <FaLink /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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