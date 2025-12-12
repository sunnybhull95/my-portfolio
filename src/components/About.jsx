export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 pb-40 pt-30 text-center"
    >
      <h2 className="text-3xl  font-bold mb-6 text-white relative inline-block after:block after:w-16 after:h-1 after:bg-gradient-to-l after:from-blue-400 after:to-indigo-500 after:mx-auto after:mt-2">
        WHO AM I?
      </h2>
      <p className="text-white/50 max-w-2xl mx-auto mb-6 leading-relaxed">
        I’m a full-stack developer specialized in ReactJS and backend
        technologies. I enjoy building interactive, user-friendly web
        applications and exploring UI/UX design trends.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/sunnybhull_Resume.pdf" //public/resume.pdf
          download="SunnyBhull_resume.pdf" // custom name for downloaded file
          className="px-6 py-3 rounded-lg shadow-md 
                 bg-gradient-to-r from-blue-500 to-indigo-600 
                 hover:from-blue-600 hover:to-indigo-700 
                 text-white font-semibold transition-transform 
                 transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
