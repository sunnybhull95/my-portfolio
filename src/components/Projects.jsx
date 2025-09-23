import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/Homepage.png";
import img2 from "../assets/carhomepage.png";
import img3 from "../assets/portfolio.png";
import img4 from "../assets/expensetracker.png";

const projects = [
  {
    title: "MaganlalChikiClone",
    desc: "E-commerce Website",
    img: img,
    link: "https://maganlalchikkiclone.netlify.app",
  },
  {
    title: "Car-Rental Website",
    desc: "React + TailwindCss + Springboot + Mysql",
    img: img2,
    link: "https://github.com/sunnybhull95/car-rental-fullstack-java",
  },
  {
    title: "Porfolio Website",
    desc: "React + TailwindCss + FramerMotion",
    img: img3,
    link: "https://sunnybhull-portfolio.netlify.app/ ",
  },
  {
    title: "Expense Tracker",
    desc: "React + TailwindCss + SpringBoot + Mysql",
    img: img4,
    link: "https://github.com/sunnybhull95/ExpenseTracker",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto text-center px-4 pt-30 pb-20"
      ref={ref}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold mb-12 text-white text-center inline-block relative"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        PROJECTS
        <span className="block w-20 h-1 bg-gradient-to-l from-blue-400 to-indigo-500 mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      {/* Project Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/5 border border-white/10 hover:-translate-y-1 p-5 rounded-2xl overflow-hidden hover:shadow-2xl  transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.4 }}
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden rounded-lg w-full">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover rounded-lg transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="mt-4 text-left">
              <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition">
                {p.title}
              </h3>
              <p className="text-white/60 group-hover:text-white mt-2 text-sm">
                {p.desc}
              </p>
            </div>

            {/* Glow border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent "
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Coming Soon Loader */}
      <motion.div
        className="mt-16 w-full max-w-md mx-auto flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div
          className="w-full backdrop-blur-sm rounded-2xl py-8 px-6 flex flex-col items-center shadow-xl border border-white/10"
          role="status"
          aria-live="polite"
        >
          {/* Loader */}
          <div className="flex items-center space-x-4">
            <div
              className="w-14 h-14 rounded-full border-4 border-gray-200 border-t-black border-b-black animate-spin"
              aria-hidden="true"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-100">
                New Project
              </h3>
              <p className="text-sm text-gray-400">Coming soon</p>
            </div>
          </div>

          <p className="mt-6 text-xs text-white/50 text-center">
            Follow me on{" "}
            <a
              href="https://github.com/sunnybhull95"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>{" "}
            for updates.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
