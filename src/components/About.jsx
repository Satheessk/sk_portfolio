import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-slate-950 py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            About Me

          </h2>

          <p className="text-slate-400 mt-4 text-lg">

            Passionate about building software that solves real-world problems.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* Who I Am */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-8"
          >

            <FaCode className="text-4xl text-blue-400 mb-5" />

            <h3 className="text-2xl font-semibold text-white mb-4">

              Who I Am

            </h3>

            <p className="text-slate-400 leading-8">

              I'm an aspiring Software Engineer currently pursuing a
              B.Tech in Information Technology. I enjoy building web
              applications, solving DSA problems, and continuously
              learning new technologies to become a better developer.

            </p>

          </motion.div>

          {/* Current Focus */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-8"
          >

            <FaBullseye className="text-4xl text-blue-400 mb-5" />

            <h3 className="text-2xl font-semibold text-white mb-4">

              Current Focus

            </h3>

            <p className="text-slate-400 leading-8">

              I'm currently preparing for Software Engineering roles by
              strengthening my skills in React, Data Structures &
              Algorithms, SQL, System Design fundamentals, and Machine
              Learning through hands-on projects.

            </p>

          </motion.div>

        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-8"
          >

            <FaLaptopCode className="text-4xl text-blue-400 mb-5" />

            <h3 className="text-2xl font-semibold text-white mb-4">

              Development

            </h3>

            <ul className="text-slate-400 space-y-3">

              <li>✔ Responsive Web Applications</li>

              <li>✔ React Development</li>

              <li>✔ REST API Integration</li>

              <li>✔ Clean UI Design</li>

            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-8"
          >

            <FaBrain className="text-4xl text-blue-400 mb-5" />

            <h3 className="text-2xl font-semibold text-white mb-4">

              Interests

            </h3>

            <ul className="text-slate-400 space-y-3">

              <li>✔ Data Structures & Algorithms</li>

              <li>✔ Machine Learning</li>

              <li>✔ Problem Solving</li>

              <li>✔ Continuous Learning</li>

            </ul>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;