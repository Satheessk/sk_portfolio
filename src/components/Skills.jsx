import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
   {
    title: "Core Concepts",
    skills: ["DSA", "OOP", "DBMS", "Operating System"],
  },
  {
  title: "Machine Learning",
  skills: ["Scikit-Learn","Pandas","NumPy","Matplotlib"],
  },
  
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
 
  
];

function Skills() {
  return (
    <section  id="skills" className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Technologies and tools I use to build modern software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-300 cursor-default"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;