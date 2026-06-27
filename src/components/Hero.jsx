import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 px-6"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Greeting */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-400 text-lg md:text-xl mb-4"
        >
          👋 Hi, I'm
        </motion.p>

        {/* Name */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            leading-tight
            bg-gradient-to-r
            from-white
            via-slate-100
            to-blue-300
            bg-clip-text
            text-transparent
          "
        >
          Satheeskumar G
        </motion.h1>

        {/* Animated Title */}

        {/* Animated Title */}

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="
                mt-5
                text-2xl
                md:text-4xl
                font-bold
                bg-gradient-to-r
                from-blue-400
                via-cyan-300
                to-blue-500
                bg-clip-text
                text-transparent
                min-h-[56px]
              "
            >
              <Typewriter
                words={[
                  "Software Engineer",
                  "Fronted Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="
            mt-6
            max-w-2xl
            mx-auto
            text-slate-400
            text-lg
            md:text-xl
            leading-9
          "
        >
          Building scalable web applications, solving challenging Data
          Structures & Algorithms problems, and leveraging Machine Learning
          to create impactful software solutions.
        </motion.p>

        {/* Tech Stack */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {["React", "C++", "Machine Learning", "DSA", "SQL"].map(
            (skill) => (
              <span
                key={skill}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-900/80
                  border
                  border-slate-700
                  text-slate-300
                  hover:border-blue-500
                  hover:bg-blue-600
                  hover:text-white
                  hover:scale-105
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                {skill}
              </span>
            )
          )}
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-10"
        >
          <a
            href="/Satheeskumar_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-8
              py-4
              rounded-xl
              border
              border-blue-500
              text-white
              hover:bg-blue-600
              hover:border-blue-600
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <FaFileAlt />
            View Resume
          </a>

          <a
            href="#projects"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-xl
              border
              border-blue-500
              text-white
              hover:bg-blue-600
              hover:border-blue-600
              hover:scale-105
              transition-all
              duration-300
            "
          >
            🚀 Explore Projects
          </a>
        </motion.div>

        {/* Social Icons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/Satheessk"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12
              h-12
              rounded-full
              bg-slate-900
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-xl
              text-slate-300
              hover:border-blue-500
              hover:text-blue-400
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-blue-500/20
              transition-all
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gsatheeskumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12
              h-12
              rounded-full
              bg-slate-900
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-xl
              text-slate-300
              hover:border-blue-500
              hover:text-blue-400
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-blue-500/20
              transition-all
              duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/satheeskumar_G/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12
              h-12
              rounded-full
              bg-slate-900
              border
              border-slate-700
              flex
              items-center
              justify-center
              text-xl
              text-slate-300
              hover:border-yellow-400
              hover:text-yellow-400
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-yellow-400/20
              transition-all
              duration-300
            "
          >
            <SiLeetcode />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;