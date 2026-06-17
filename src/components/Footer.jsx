import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800">

      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          {/* Logo */}
          <h2 className="text-4xl font-bold text-blue-500">
            SK
          </h2>

          {/* Thank You */}
          <p className="mt-4 text-slate-400 text-lg">
            Thank you for visiting my portfolio.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-8">

            <a
              href="https://github.com/Satheessk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition duration-300 hover:-translate-y-1"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/gsatheeskumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition duration-300 hover:-translate-y-1"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://leetcode.com/u/satheeskumar_G/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-400 transition duration-300 hover:-translate-y-1"
            >
              <SiLeetcode size={28} />
            </a>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-800 my-10"></div>

          {/* Footer Text */}
          <p className="text-slate-400 font-medium">
            Designed & Developed by <span className="text-white">Satheeskumar G</span>
          </p>

          <p className="text-slate-500 text-sm mt-2">
            © 2026 All Rights Reserved.
          </p>

        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;