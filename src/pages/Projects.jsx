import { Link } from "react-router";

function Projects() {
  const projects = [
    {
      title: "Chatbot",
      category: "AI Web Application",
      description:
        "A modern chatbot web application designed to provide an interactive and user-friendly chatting experience.",
      technologies: "React.js, JavaScript, Tailwind CSS",
      link: "https://chatbot-by-hassan-alii.vercel.app/",
    },
    {
      title: "Weather App",
      category: "React Web Application",
      description:
        "A responsive weather application where users can search for a city and view its current weather information.",
      technologies: "React.js, API, CSS",
      link: "https://weather-app-by-hassan-ali.vercel.app/",
    },
    {
      title: "TECHORA",
      category: "E-Commerce",
      description:
        "A premium technology e-commerce website featuring a modern interface and a global shopping experience.",
      technologies: "React.js, JavaScript, Tailwind CSS",
      link: "https://techora-web-by-hassan-ali.vercel.app/",
    },
    {
      title: "WhatsApp Clone",
      category: "UI Clone",
      description:
        "A WhatsApp-inspired frontend interface created as a web design and cloning project.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://wp-clone-by-hassan-ali.netlify.app/",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      {/* Page Heading */}
      <div className="max-w-3xl animate-[fadeUp_0.7s_ease-out]">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
          My Work
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Projects
        </h1>

        <p className="mt-5 leading-8 text-slate-400">
          Some of the projects I have built while learning and developing
          modern web applications.
        </p>

      </div>

      {/* Projects */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group flex animate-[fadeUp_0.6s_ease-out] flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >

            {/* Category */}
            <span className="w-fit rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 transition-colors duration-300 group-hover:bg-indigo-500/20">
              {project.category}
            </span>

            {/* Title */}
            <h2 className="mt-5 text-2xl font-bold transition-colors duration-300 group-hover:text-indigo-300">
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-4 flex-1 leading-7 text-slate-400">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 border-t border-white/10 pt-5">

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Technologies
              </p>

              <p className="mt-2 text-sm text-slate-300">
                {project.technologies}
              </p>

            </div>

            {/* View Project Button */}
            <a
              href={project.link}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              View Project
            </a>

          </div>
        ))}

      </div>

      {/* Contact Button */}
      <div className="mt-14 text-center animate-[fadeUp_1s_ease-out]">

        <Link
          to="/contact"
          className="inline-block rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
        >
          Let's Work Together
        </Link>

      </div>

    </main>
  );
}

export default Projects;