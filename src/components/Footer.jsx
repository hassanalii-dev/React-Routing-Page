import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="animate-[fadeUp_0.7s_ease-out]">
            <h2 className="text-2xl font-bold">
              Hassan<span className="text-indigo-400">.</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Full Stack Web Development learner passionate about building
              modern and useful web applications.
            </p>
          </div>

          <div className="animate-[fadeUp_0.8s_ease-out]">
            <h3 className="font-semibold">Quick Links</h3>

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

          <div className="animate-[fadeUp_0.9s_ease-out]">
            <h3 className="font-semibold">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Hassan Ali</p>
              <p>Lahore, Pakistan</p>
              <p>Full Stack Web Development</p>
              <p>hassanmughal085870@gmail.com</p>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 Hassan Ali. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;