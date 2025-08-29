const projects = [
  { title: "Plumbing Company", desc: "Brochure website with booking system." },
  {
    title: "E-commerce Snacks",
    desc: "React + Tailwind + Stripe for payments.",
  },
  {
    title: "City Skyline Gallery",
    desc: "Masonry grid and lazy loading gallery.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">PROJECTS</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
