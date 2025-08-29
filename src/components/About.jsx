export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">WHO AM I?</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-4">
        I’m a full-stack developer specialized in ReactJS and backend
        technologies. I enjoy creating interactive, user-friendly web
        applications and exploring UI/UX design trends.
      </p>
      <a
        href="#projects"
        className="bg-lime-300 text-gray-900 px-6 py-2 rounded-full hover:scale-105 transition"
      >
        SHOW MY PROJECTS
      </a>
    </section>
  );
}
