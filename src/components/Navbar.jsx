import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
    <nav className="sticky top-0 z-50 animate-[fadeDown_0.6s_ease-out] border-b border-white/10 bg-slate-950/90 backdrop-blur-lg">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="text-2xl font-bold transition duration-300 hover:scale-105"
        >
          Hassan<span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-300 hover:-translate-y-0.5 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 px-3 py-2 text-xl transition duration-300 hover:border-indigo-400/50 hover:bg-white/5 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-5">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? "translate-x-1 text-indigo-400"
                    : "text-slate-300 hover:translate-x-1 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;