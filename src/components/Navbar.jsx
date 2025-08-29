import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "ABOUT ME" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 ${
        scrolled ? "bg-gray-900/80 backdrop-blur border-b border-white/10" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 bg-lime-300 text-gray-900 flex items-center justify-center font-bold rounded-xl">
            R
          </div>
          <span className="font-semibold tracking-wide">REACTIVE</span>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-300 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-lime-300 text-gray-900 px-4 py-1 rounded-full hover:brightness-110 transition"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
