import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // menu icons

const links = [
  { href: "#about", label: "ABOUT ME" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "#home";
      [...links, { href: "#home" }].forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop = section.offsetTop - 120;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            current = link.href;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 ${
        scrolled ? "bg-transparent backdrop-blur shadow-md" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4 text-white/50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#home"
            className="h-9 w-9 bg-blue-400 text-white flex items-center justify-center font-bold rounded-xl shadow-md"
          >
            S
          </a>
          <a
            href="#home"
            className="font-semibold tracking-wide cursor-pointer text-gray-600 hover:text-blue-400 transition-all duration-300"
          >
            PORTFOLIO
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                const homeSection = document.getElementById("home");
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => window.location.reload(), 600);
                }
              }}
              className={`transition ${
                active === "#home"
                  ? "text-blue-500 font-semibold border-b-3 border-sky-500"
                  : "hover:text-white hover:scale-105"
              }`}
            >
              HOME
            </a>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition ${
                  active === l.href
                    ? "text-blue-500 font-semibold border-b-3 border-sky-500"
                    : "hover:text-white hover:scale-105"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-900/70 backdrop-blur-lg flex flex-col gap-4 text-center py-6 text-white/80">
          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={`block ${
                active === "#home" ? "text-blue-500 font-semibold" : ""
              }`}
            >
              HOME
            </a>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  active === l.href ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
