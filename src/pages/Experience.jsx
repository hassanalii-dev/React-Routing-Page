function Experience() {
  const experiences = [
    {
      year: "2026 - Present",
      title: "Full Stack Web Development",
      company: "NexSkill",
      location: "Lahore, Pakistan",
      description:
        "Currently learning Full Stack Web Development and building modern, responsive web applications. Working with frontend technologies and gradually developing full stack development skills.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React.js",
        "Tailwind CSS",
        "GitHub",
      ],
    },

    {
      year: "2026 - Present",
      title: "React.js Development",
      company: "Personal Learning & Projects",
      location: "Lahore, Pakistan",
      description:
        "Developing modern web applications using React.js. Working with components, props, state, React Router, APIs and responsive user interfaces through practical projects.",
      skills: [
        "React.js",
        "JavaScript",
        "React Router",
        "API Integration",
        "Tailwind CSS",
      ],
    },

    {
      year: "2026",
      title: "Frontend Web Development",
      company: "Personal Projects",
      location: "Lahore, Pakistan",
      description:
        "Created multiple responsive frontend projects to gain practical development experience and improve UI design, responsiveness, animations and user experience.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Responsive Design",
      ],
    },

    {
      year: "2026",
      title: "Web Development Projects",
      company: "Independent Practice",
      location: "Lahore, Pakistan",
      description:
        "Built and deployed real-world inspired web applications including a chatbot, weather application, technology e-commerce website and WhatsApp-inspired interface.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "API",
        "GitHub",
        "Vercel",
        "Netlify",
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center animate-[fadeUp_0.7s_ease-out]">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
          My Professional Journey
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Experience
        </h1>

        <p className="mt-5 leading-8 text-slate-400">
          My development journey, learning experience and practical work
          in modern web development.
        </p>

      </div>

      {/* Experience Timeline */}
      <div className="relative mx-auto mt-16 max-w-5xl">

        {/* Timeline Line */}
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500 via-indigo-400/40 to-transparent md:left-1/2 md:block md:-translate-x-1/2"></div>

        <div className="space-y-10">

          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className={`relative animate-[fadeUp_0.7s_ease-out] ${
                index % 2 === 0
                  ? "md:pr-[52%]"
                  : "md:pl-[52%]"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-indigo-400 shadow-lg shadow-indigo-500/40 md:block"></div>

              {/* Card */}
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10">

                {/* Year */}
                <div className="flex flex-wrap items-center justify-between gap-3">

                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                    {experience.year}
                  </span>

                  <span className="text-sm text-slate-500">
                    {experience.location}
                  </span>

                </div>

                {/* Title */}
                <h2 className="mt-5 text-2xl font-bold transition-colors duration-300 group-hover:text-indigo-300">
                  {experience.title}
                </h2>

                {/* Company */}
                <p className="mt-2 text-base font-medium text-indigo-400">
                  {experience.company}
                </p>

                {/* Description */}
                <p className="mt-5 leading-7 text-slate-400">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="mt-6 border-t border-white/10 pt-5">

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technologies & Skills
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-indigo-400/20 bg-indigo-500/5 p-8 text-center animate-[fadeUp_1s_ease-out]">

        <h2 className="text-2xl font-bold">
          Always Learning, Always Building
        </h2>

        <p className="mt-3 leading-7 text-slate-400">
          I continue to improve my development skills by learning new
          technologies and building practical projects.
        </p>

      </div>

    </main>
  );
}

export default Experience;