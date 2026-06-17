import { motion } from "framer-motion";
import {
  FaAward,
  FaCode,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaAward />,
    title: "FFE Scholarship",
    description:
      "Recipient of the Foundation For Excellence (FFE) Scholarship for academic excellence and consistent performance.",
  },
  {
    icon: <FaCode />,
    title: "170+ LeetCode Problems",
    description:
      "Solved 170+ coding problems across arrays, linked lists, trees, graphs, dynamic programming, and more.",
  },
  {
    icon: <FaCertificate />,
    title: "Coursera Certification",
    description:
      "Successfully completed 'Data Structures and Algorithms' authorized by Amazon through Coursera.",
  },
  {
    icon: <FaLaptopCode />,
    title: "4+ Software Projects",
    description:
      "Designed and developed projects in React, Machine Learning, Artificial Intelligence, and Data Structures.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-slate-950 py-28 px-6">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Achievements
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Milestones that reflect my learning journey and passion for technology.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                p-8
                hover:border-blue-500
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                transition-all
                duration-300
              "
            >
              <div className="text-4xl text-blue-400 mb-5 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Achievements;