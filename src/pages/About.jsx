import { NavLink } from "react-router";

function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <div className="max-w-3xl animate-[fadeUp_0.6s_ease-out]">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
          About Me
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Get to know me
        </h1>

        <p className="mt-6 leading-8 text-slate-400">
          My name is Hassan Ali. I am a BSCS student and currently learning
          Full Stack Web Development at NexSkill Arfa Tower Lahore. I enjoy
          learning new technologies and creating modern web experiences.
        </p>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        <div className="group animate-[fadeUp_0.8s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-indigo-500/10">

          <h2 className="text-xl font-bold transition-colors duration-300 group-hover:text-indigo-300">
            Personal Information
          </h2>

          <div className="mt-6 space-y-4 text-slate-400">

            <p>
              <b className="text-white">Name:</b> Hassan Ali
            </p>

            <p>
              <b className="text-white">Education:</b> BSCS
            </p>

            <p>
              <b className="text-white">Field:</b> Full Stack Web Development
            </p>

            <p>
              <b className="text-white">Location:</b> Lahore, Pakistan
            </p>

            <p>
              <b className="text-white">Email:</b>{" "}
              <span className="transition-colors duration-300 hover:text-indigo-400">
                hassanmughal085870@gmail.com
              </span>
            </p>

          </div>

        </div>

        <div className="group animate-[fadeUp_1s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-indigo-500/10">

          <h2 className="text-xl font-bold transition-colors duration-300 group-hover:text-indigo-300">
            My Goal
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            My goal is to become a skilled full stack developer and build
            professional applications that solve real-world problems.
          </p>

          <NavLink
            to="/skills"
            className="mt-7 inline-block rounded-xl bg-indigo-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
          >
            Explore My Skills
          </NavLink>

        </div>

      </div>

    </main>
  );
}

export default About;