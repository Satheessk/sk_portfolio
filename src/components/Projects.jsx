import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    icon: "✈️",
    title: "Airport Runway Management",
    description:
      "A Data Structures project that efficiently schedules aircraft landings using a custom Priority Queue implementation.",

    tech: ["C", "DSA", "Priority Queue"],

    features: [
      "Priority-based landing scheduling",
      "Emergency aircraft handling",
      "Custom heap implementation",
    ],

    github: "https://github.com/Satheessk/Airport_runway_Management",
  },

  {
    icon: "📈",
    title: "Stock Price Prediction",
    description:
      "Machine Learning project that predicts stock price trends using historical market data and regression models.",

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
    ],

    features: [
      "Historical data analysis",
      "Regression model training",
      "Stock trend visualization",
    ],

    github: "https://github.com/Satheessk/Stock-Price-Prediction",
  },

  {
    icon: "🛒",
    title: "Grocery E-Commerce",
    description:
      "Responsive React-based grocery shopping website featuring a clean interface and interactive product management.",

    tech: [
      "React",
      "HTML",
      "CSS",
    ],

    features: [
      "Responsive user interface",
      "Interactive product listing",
      "Modern React components",
    ],

    github: "https://github.com/Satheessk/E-commerce-in-Groceries",
  },

  {
    icon: "🤖",
    title: "CareerWriter",
    description:
      "AI-powered application that generates ATS-friendly resumes and professional emails using Google Gemini API.",

    tech: [
      "React",
      "Python",
      "Streamlit",
      "Gemini API",
    ],

    features: [
      "ATS resume generation",
      "AI email generation",
      "Gemini API integration",
    ],

    github: "https://github.com/Satheessk/Career-Writer",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-28 px-6">

      {/* Background Glow */}

      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[650px] h-[650px] bg-blue-500/10 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Featured Projects

          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">

            Projects that showcase my skills in software development,
            machine learning, and problem solving.

          </p>

        </motion.div>

        {/* Project Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: .4 }}
              viewport={{ once: true }}
              className="
              group
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              backdrop-blur-xl
              p-6
              hover:border-blue-500
              hover:shadow-[0_0_35px_rgba(59,130,246,0.20)]
              transition-all
              duration-300
              "
            >

              {/* Project Title */}

              <div className="flex items-center gap-4">

                <div className="text-4xl">

                  {project.icon}

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    {project.title}

                  </h3>

                </div>

              </div>

              {/* Description */}

              <p className="text-slate-400 leading-7 mt-5">

                {project.description}

              </p>

              {/* Tech */}

              <div className="flex flex-wrap gap-3 mt-5">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-sm
                    text-slate-300
                    hover:border-blue-500
                    hover:bg-blue-600
                    hover:text-white
                    transition
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Features */}

              <ul className="mt-6 space-y-2 text-slate-300">

                {project.features.map((feature) => (

                  <li key={feature}>

                    ✓ {feature}

                  </li>

                ))}

              </ul>

              {/* GitHub */}

              <div className="mt-7">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  font-medium
                  text-white
                  hover:bg-blue-700
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >

                  <FaGithub />

                  View Source

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;