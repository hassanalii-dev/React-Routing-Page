// src/components/Footer.jsx

import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111f]">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          {/* About */}
          <div className="animate-[fadeUp_0.6s_ease-out]">

            <NavLink
              to="/home"
              className="group flex items-center gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/15 font-black text-indigo-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-indigo-400/60 group-hover:bg-indigo-500/25 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
                H-A
              </div>

              <div>
                <p className="font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  Hassan Ali
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Developer
                </p>
              </div>

            </NavLink>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
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

              <NavLink
                to="/about"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                About
              </NavLink>

              <NavLink
                to="/cv"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                CV
              </NavLink>

              <NavLink
                to="/skills"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                Skills
              </NavLink>

              <NavLink
                to="/projects"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                Contact
              </NavLink>

            </div>

          </div>

          {/* Contact */}
          <div className="animate-[fadeUp_1s_ease-out]">

            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">

              <p className="transition-colors duration-300 hover:text-slate-200">
                Hassan Ali
              </p>

              <p className="transition-colors duration-300 hover:text-slate-200">
                Lahore, Pakistan
              </p>

              <p className="transition-colors duration-300 hover:text-slate-200">
                Full Stack Web Developer
              </p>

              <p className="break-all transition-colors duration-300 hover:text-indigo-400">
                hassanmughal085870@gmail.com
              </p>

            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">

          <p className="animate-[fadeSoft_1.2s_ease-out]">
            © 2026 Hassan Ali. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;