import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// react-icons imports
import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiSpringboot, SiTailwindcss, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    link: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    link: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-yellow-400 text-4xl" />,
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    link: "https://react.dev/",
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-500 text-4xl" />,
    link: "https://dev.java/",
  },
  {
    name: "SpringBoot",
    icon: <SiSpringboot className="text-green-500 text-4xl" />,
    link: "https://spring.io/projects/spring-boot",
  },
  {
    name: "TailwindCss",
    icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "MySql",
    icon: <SiMysql className="text-indigo-500 text-4xl" />,
    link: "https://www.mysql.com/",
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 pb-35 pt-15 text-center"
      ref={ref}
    >
      <motion.h2
        className="text-3xl font-bold text-white text-center mb-10 inline-block after:block after:w-16 after:h-1 after:bg-gradient-to-l after:from-blue-400 after:to-indigo-500 after:mx-auto after:mt-2"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        MY SKILLS
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {skills.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 text-white/80 p-6 rounded-xl flex flex-col items-center justify-center hover:bg-white hover:text-black hover:scale-105 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {s.icon}
            <p className="font-semibold mt-2">{s.name}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
