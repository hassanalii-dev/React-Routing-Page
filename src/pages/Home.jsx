import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        <div className="absolute -left-40 -top-40 h-96 w-96 animate-pulse rounded-full bg-indigo-600/20 blur-3xl"></div>

        <div className="absolute -bottom-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-3xl [animation-delay:1s]"></div>

        <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-20">

          <div className="max-w-3xl">

            <p className="mb-5 animate-[fadeUp_0.6s_ease-out] text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Welcome to my portfolio
            </p>

            <h1 className="animate-[fadeUp_0.8s_ease-out] text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-indigo-400">
                Hassan Ali
              </span>
            </h1>

            <h2 className="mt-6 animate-[fadeUp_1s_ease-out] text-2xl font-semibold text-slate-200 sm:text-3xl">
              Full Stack Web Development Learner
            </h2>

            <p className="mt-6 max-w-2xl animate-[fadeUp_1.1s_ease-out] text-lg leading-8 text-slate-400">
              I am passionate about web development and creating modern,
              responsive and user-friendly websites and applications using
              modern technologies.
            </p>

            <div className="mt-10 flex animate-[fadeUp_1.2s_ease-out] flex-wrap gap-4">

              <Link
                to="/cv"
                className="rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95"
              >
                View My CV
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 active:scale-95"
              >
                Contact Me
              </Link>

            </div>

            <div className="mt-12 flex animate-[fadeUp_1.3s_ease-out] flex-wrap gap-8 border-t border-white/10 pt-8">

              <div className="transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm text-slate-500">Projects</p>
              </div>

              <div className="transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl font-bold">7+</p>
                <p className="text-sm text-slate-500">Technologies</p>
              </div>

              <div className="transition-all duration-300 hover:-translate-y-1">
                <p className="text-2xl font-bold">2026</p>
                <p className="text-sm text-slate-500">Learning Journey</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;