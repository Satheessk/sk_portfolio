import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition"
        >
          SK
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">

          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>

          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>

          <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>

          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>

          <li><a href="#achievements" className="hover:text-blue-400 transition">Achievements</a></li>

          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>

        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 text-xl">

          <a
            href="https://github.com/Satheessk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gsatheeskumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/satheeskumar_G/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-yellow-400 transition hover:scale-110"
          >
            <SiLeetcode />
          </a>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">

          <div className="flex flex-col items-center py-6 gap-6 text-lg text-slate-300">

            <a href="#home" onClick={closeMenu} className="hover:text-blue-400">
              Home
            </a>

            <a href="#about" onClick={closeMenu} className="hover:text-blue-400">
              About
            </a>

            <a href="#skills" onClick={closeMenu} className="hover:text-blue-400">
              Skills
            </a>

            <a href="#projects" onClick={closeMenu} className="hover:text-blue-400">
              Projects
            </a>

            <a href="#achievements" onClick={closeMenu} className="hover:text-blue-400">
              Achievements
            </a>

            <a href="#contact" onClick={closeMenu} className="hover:text-blue-400">
              Contact
            </a>

            <div className="flex gap-6 text-2xl pt-4">

              <a
                href="https://github.com/Satheessk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/gsatheeskumar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/satheeskumar_G/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>

            </div>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;