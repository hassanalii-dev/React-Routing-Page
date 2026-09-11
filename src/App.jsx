// src/App.jsx

import { NavLink } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white">

      <main>
        <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

          <div className="relative mx-auto w-full max-w-7xl px-6 py-20">

            <div className="max-w-3xl">

              <p className="animate-[fadeUp_0.6s_ease-out] text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                Welcome to my portfolio
              </p>

              <h1 className="mt-5 animate-[fadeUp_0.8s_ease-out] text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="text-indigo-400">
                  Hassan Ali
                </span>
              </h1>

              <h2 className="mt-6 animate-[fadeUp_1s_ease-out] text-xl font-semibold text-slate-200 sm:text-2xl">
                Full Stack Web Development Learner & BSCS Student
              </h2>

              <p className="mt-6 max-w-2xl animate-[fadeUp_1.1s_ease-out] text-lg leading-8 text-slate-400">
                I am passionate about web development and creating modern,
                responsive and user-friendly websites and applications using
                modern technologies.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <NavLink
                  to="/cv"
                  className="rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400"
                >
                  View My CV
                </NavLink>

                <NavLink
                  to="/contact"
                  className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10"
                >
                  Contact Me
                </NavLink>

              </div>

              <div className="mt-12 flex flex-wrap gap-10 border-t border-white/10 pt-8">

                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-slate-500">Projects</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-slate-500">Technologies</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">2026</p>
                  <p className="text-sm text-slate-500">Learning Journey</p>
                </div>

              </div>

            </div>

          </div>

        </section>
      </main>

    </div>
  );
}

export default App;