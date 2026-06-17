import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-28 px-6">

      {/* Background Glow */}

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Let's Connect

          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-8">

            I'm currently looking for Software Engineering opportunities.
            Whether you have an internship, full-time role, or just want to
            connect, I'd love to hear from you.

          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sksathees1245@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
>
  <FaEnvelope className="text-3xl text-blue-400 mb-4" />

  <h3 className="text-white text-xl font-semibold">
    Email
  </h3>

  <p className="text-slate-400 mt-2 break-all">
    sksathees1245@gmail.com
  </p>

  <p className="text-blue-400 mt-4 text-sm">
    Click to send an email →
  </p>
</a>

          <a
            href="https://github.com/Satheessk"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 hover:border-blue-500 transition"
          >

            <FaGithub className="text-3xl text-blue-400 mb-4" />

            <h3 className="text-white text-xl font-semibold">

              GitHub

            </h3>

            <p className="text-slate-400 mt-2">

              github.com/Satheeskumar_G

            </p>

          </a>

          <a
            href="https://www.linkedin.com/in/gsatheeskumar/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 hover:border-blue-500 transition"
          >

            <FaLinkedin className="text-3xl text-blue-400 mb-4" />

            <h3 className="text-white text-xl font-semibold">

              LinkedIn

            </h3>

            <p className="text-slate-400 mt-2">

              Connect with me

            </p>

          </a>

          <a
            href="https://leetcode.com/u/satheeskumar_G/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 hover:border-yellow-400 transition"
          >

            <SiLeetcode className="text-3xl text-yellow-400 mb-4" />

            <h3 className="text-white text-xl font-semibold">

              LeetCode

            </h3>

            <p className="text-slate-400 mt-2">

              View my coding profile

            </p>

          </a>

        </div>

        {/* Resume Button */}

        <div className="flex justify-center mt-14">

          <a
  href="/Satheeskumar_G_Resume.pdf"
  download="Satheeskumar_G_Resume.pdf"
  className="
    inline-flex
    items-center
    gap-3
    px-8
    py-4
    rounded-xl
    bg-blue-600
    hover:bg-blue-700
    text-white
    font-semibold
    hover:scale-105
    transition-all
    duration-300
  "
>
  <FaFileDownload />
  Download Resume
</a>

        </div>

      </div>

    </section>
  );
}

export default Contact;