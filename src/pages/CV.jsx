function CV() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <div className="flex animate-[fadeUp_0.7s_ease-out] flex-col justify-between gap-6 sm:flex-row sm:items-end">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Curriculum Vitae
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            My CV
          </h1>

          <p className="mt-4 text-slate-400">
            Education, skills, learning experience and projects.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
        >
          Download / Print CV
        </button>

      </div>

      <div className="mt-12 space-y-8">

        {/* Profile */}
        <section className="animate-[fadeUp_0.8s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/5">

          <h2 className="text-2xl font-bold">
            Hassan Ali
          </h2>

          <p className="mt-2 text-indigo-400">
            Full Stack Web Development Learner
          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Motivated BSCS student interested in modern web development,
            frontend technologies and building practical applications.
          </p>

          <p className="mt-3 text-slate-400">
            Lahore, Pakistan
          </p>

          <p className="mt-2 text-slate-400">
            hassanmughal085870@gmail.com
          </p>

        </section>

        {/* Education */}
        <section className="animate-[fadeUp_0.9s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/5">

          <h2 className="text-2xl font-bold">
            Education
          </h2>

          <div className="mt-6 border-l-2 border-indigo-500 pl-5">

            <h3 className="font-semibold">
              BSCS
            </h3>

            <p className="mt-2 text-slate-400">
              Computer Science <strong>Student</strong>
            </p>

          </div>

        </section>

        {/* Learning */}
        <section className="animate-[fadeUp_1s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/5">

          <h2 className="text-2xl font-bold">
            Experience / Learning
          </h2>

          <div className="mt-6 border-l-2 border-indigo-500 pl-5">

            <h3 className="font-semibold">
              Full Stack Web Development
            </h3>

            <p className="mt-2 text-slate-400">
              Currently learning frontend and backend web development from NexSkill Arfa Tower Lahore,
              including React.js and modern web technologies.
            </p>

          </div>

        </section>

        {/* Skills */}
        <section className="animate-[fadeUp_1.1s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/5">

          <h2 className="text-2xl font-bold">
            Technical Skills
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "React.js",
              "Tailwind CSS",
              "GitHub",
            ].map((skill, index) => (
              <span
                key={skill}
                className="animate-[fadeUp_0.5s_ease-out] rounded-lg bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500/20 hover:text-indigo-200"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: "both",
                }}
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* Projects */}
        <section className="animate-[fadeUp_1.2s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/5">

          <h2 className="text-2xl font-bold">
            Projects
          </h2>

          <ul className="mt-6 space-y-3 text-slate-400">

            <li>• TECHORA — Tech E-commerce Website</li>
            <li>• Weather App — React Weather Application</li>
            <li>• WhatsApp Clone — HTML CSS & JavaScript Project</li>
            <li>• Chatbot — Real Starbucks Chatbot</li>

          </ul>

        </section>

      </div>

    </main>
  );
}

export default CV;