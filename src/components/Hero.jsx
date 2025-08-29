export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Text Side */}
      <div className="space-y-6">
        <p className="text-gray-400 text-sm">I'M</p>
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="text-lime-300">Sunny Bhull</span>
          <br /> Full Stack Developer
        </h1>
        <p className="text-gray-400 max-w-md">
          Passionate about building fast and elegant web applications using
          modern technologies like React and Springboot.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-lime-300 text-gray-900 px-5 py-2 rounded-full hover:scale-105 transition"
          >
            MY PROJECTS
          </a>
          <span className="text-xs text-gray-400 self-center"></span>
        </div>
      </div>

      {/* Image Side */}
      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
        <img
          src={"https://cdn-icons-png.flaticon.com/512/4086/4086679.png"}
          alt="profile"
          className="w-52 h-52 mx-auto rounded-xl object-cover"
        />
        <p className="text-center mt-4 text-gray-300">Hi, I’m Sunny</p>
        <p className="text-center font-semibold">JavaScript • React • Java</p>
      </div>
    </section>
  );
}
