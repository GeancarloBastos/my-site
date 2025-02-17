"use client";

import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Adicione este objeto de mapeamento
  const sectionNames = {
    'about': 'Sobre',
    'projects': 'Projetos',
    'contact': 'Contato'
  };

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between p-3 md:p-4 lg:p-6 bg-zinc-950/80 backdrop-blur-sm">
      <div className="text-xl transform transition-all duration-300 hover:scale-110">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-center relative group px-4 py-2"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Geancarlo Bastos
          </span>
          <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg opacity-70"></span>
        </ScrollLink>
      </div>

      <div className="hidden md:flex space-x-4 lg:space-x-8">
        {Object.entries(sectionNames).map(([key, label]) => (
          <ScrollLink
            key={key}
            to={key}
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300 transition-colors duration-200 hover:-translate-y-0.5"
          >
            {label}
          </ScrollLink>
        ))}
      </div>

      <button
        className="md:hidden hover:scale-110 transition-transform"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-48 py-2 bg-zinc-900 rounded-lg shadow-xl md:hidden">
          {Object.entries(sectionNames).map(([key, label]) => (
            <ScrollLink
              key={key}
              to={key}
              spy={true}
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}