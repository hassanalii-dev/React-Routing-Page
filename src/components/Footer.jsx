import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111f]">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          {/* Logo + Name */}
          <div className="animate-[fadeUp_0.7s_ease-out]">

            <Link to="/" className="group flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/15 text-lg font-black text-indigo-300 shadow-lg shadow-indigo-500/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-indigo-300/50 group-hover:bg-indigo-500/25 group-hover:text-indigo-200 group-hover:shadow-indigo-500/20">
                H
              </div>

              <div>
                <p className="text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-300">
                  Hassan Ali
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Developer
                </p>
              </div>

            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Full Stack Web Development learner passionate about building
              modern and useful web applications.
            </p>

          </div>


          {/* Quick Links */}
          <div className="animate-[fadeUp_0.8s_ease-out]">

            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">

              <Link
                to="/about"
                className="transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                About
              </Link>

              <Link
                to="/skills"
                className="transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                Skills
              </Link>

              <Link
                to="/projects"
                className="transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* Contact */}
          <div className="animate-[fadeUp_0.9s_ease-out]">

            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Hassan Ali</p>
              <p>Lahore, Pakistan</p>
              <p>Full Stack Web Developer</p>
              <p className="break-all">
                hassanmughal085870@gmail.com
              </p>
            </div>

          </div>

        </div>


        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 Hassan Ali. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;