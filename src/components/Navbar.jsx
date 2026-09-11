import { useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "CV", path: "/cv" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
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


        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>


        {/* Let's Talk */}
        <div className="hidden lg:block">

          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Let's Talk
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 px-3 py-2 text-lg leading-none text-slate-300 transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#07111f] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >

        <nav className="flex flex-col px-5 py-3">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-white/5 px-2 py-3.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-400"
          >
            Let's Talk
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;