import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// bg-gradient-to-b from-gray-900 to-black
// bg-gradient-to-b from-slate-300 via-gray-400 to-slate-600

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black  text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center text-sm text-gray-400 py-8">
        © {new Date().getFullYear()} Built with React + Tailwind
      </footer>
    </div>
  );
}
