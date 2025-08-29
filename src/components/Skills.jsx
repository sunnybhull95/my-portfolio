const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "java",
  "SpringBoot",
  "TailwindCss",
  "MySql",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">MY SKILLS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div
            key={s}
            className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:scale-105 transition"
          >
            <p className="font-semibold">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
