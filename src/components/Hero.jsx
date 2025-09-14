import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="home"
      className="relative max-w-6xl mx-auto px-4 pt-24 pb-5 md:pb-25  grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="absolute inset-0 -z-10 " />
      {/* Text Side */}
      <motion.div
        className="space-y-6 "
        initial={{ opacity: 0, x: -80 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-white text-sm tracking-wider">I'M</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-blue-500 via-sky-300 to-indigo-500   text-transparent bg-clip-text drop-shadow-lg">
            Sunny Bhull
          </span>
          <br />
          <span className="text-white/50 drop-shadow-lg">
            Full Stack Developer
          </span>
        </h1>
        <p className="text-white max-w-md leading-relaxed">
          Passionate about building fast and elegant web applications using
          modern technologies like{" "}
          <span className="text-blue-500 font-semibold ">React</span> and{" "}
          <span className="text-sky-500 font-semibold ">Spring Boot</span>.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg shadow-md 
                 bg-gradient-to-r from-blue-500 to-indigo-600 
                 hover:from-blue-600 hover:to-indigo-700 
                 text-white font-semibold transition-transform 
                 transform hover:scale-105"
          >
            MY PROJECTS
          </a>
        </div>
      </motion.div>
      {/* Image Side */}
      <motion.div
        className=" p-6  flex flex-col items-center"
        initial={{ opacity: 0, x: 80 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-center text-white text-lg font-medium mb-4">
          Connect with <span className="text-sky-500">Me.</span>
        </h2>

        <div className="flex space-x-8 text-4xl">
          {/* GitHub */}
          <motion.a
            href="https://github.com/sunnybhull95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/50 drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-800 drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaLinkedin />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/_sunnyyyyyyyy______"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 drop-shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaInstagram />
          </motion.a>
        </div>
      </motion.div>{" "}
    </section>
  );
}
