import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    number: "170+",
    title: "LeetCode Problems",
  },
  {
    icon: <FaLaptopCode />,
    number: "5+",
    title: "Projects Built",
  },
  {
    icon: <FaTools />,
    number: "10+",
    title: "Technologies",
  },
  {
    icon: <FaGraduationCap />,
    number: "2027",
    title: "Graduate",
  },
];

function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-12 pb-28 px-6">

      {/* Background Glow */}

      <div className="absolute -right-40 top-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[170px]" />

      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">

            Highlights

          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">

            A quick snapshot of my journey as a software engineer.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              backdrop-blur-xl
              p-8
              text-center
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-blue-500
              hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
              "
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-transparent"></div>

              <div className="relative z-10">

                <div className="text-5xl text-blue-400 flex justify-center mb-6 group-hover:scale-110 transition duration-300">

                  {item.icon}

                </div>

                <h1 className="text-5xl font-bold text-white">

                  {item.number}

                </h1>

                <p className="mt-4 text-slate-400">

                  {item.title}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;