function Skills() {
  const skills = [
    {
      name: "HTML",
      description: "Building structured and semantic web pages.",
    },
    {
      name: "CSS",
      description: "Creating responsive and attractive user interfaces.",
    },
    {
      name: "JavaScript",
      description: "Adding functionality and interactivity to websites.",
    },
    {
      name: "Bootstrap",
      description: "Creating responsive layouts using Bootstrap components.",
    },
    {
      name: "React.js",
      description: "Building modern component-based web applications.",
    },
    {
      name: "Tailwind CSS",
      description: "Designing modern interfaces using utility-first CSS.",
    },
    {
      name: "GitHub",
      description: "Managing projects and collaborating using GitHub.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <div className="max-w-3xl animate-[fadeUp_0.7s_ease-out]">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
          My Expertise
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Skills
        </h1>

        <p className="mt-5 leading-8 text-slate-400">
          These are the technologies and tools I am currently learning and
          using in my web development projects.
        </p>

      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group animate-[fadeUp_0.6s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-lg font-bold text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
              {index + 1}
            </div>

            <h2 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-indigo-300">
              {skill.name}
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              {skill.description}
            </p>

          </div>
        ))}

      </div>

    </main>
  );
}

export default Skills;