import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 mt-auto py-4 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          {/* Links de navegação */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-2 sm:mb-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              Sobre
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              Contato
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              Projetos
            </Link>
          </nav>

          {/* redes sociais */}
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/GeancarloBastos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/geancarlobastos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://instagram.com/geanbastos01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="text-gray-400 text-xs sm:text-sm text-center mt-4 sm:mt-6">
            <p>© {currentYear} Geancarlo Bastos. Todos os direitos reservados.</p>
          </div>

          <div className="text-gray-500 text-xs text-center mt-1 sm:mt-2">
            <p>Desenvolvido com ❤️ por Geancarlo Bastos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}