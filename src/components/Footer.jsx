import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/eleBlue7" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/eleuterio-ramirez-saravia-4411501a1/" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="mailto:eleuteriorasa@gmail.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-400">© 2025 eleBlue. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
