// src/components/Navbar.jsx

import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "CV", path: "/cv" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">

      <div className="flex items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/home"
          className="group flex animate-[fadeSoft_0.7s_ease-out] items-center gap-3"
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

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">

          {links.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/home"}
              style={{
                animationDelay: `${index * 70}ms`,
                animationFillMode: "both",
              }}
              className={({ isActive }) =>
                `animate-[fadeUp_0.5s_ease-out] rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400 shadow-sm shadow-indigo-500/10"
                    : "text-slate-400 hover:-translate-y-0.5 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

        {/* Let's Talk */}
        <NavLink
          to="/contact"
          className="hidden animate-[fadeSoft_1s_ease-out] rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 lg:block"
        >
          Let's Talk
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 px-3 py-2 text-lg leading-none text-slate-300 transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/5 hover:text-white active:scale-95 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="inline-block transition-transform duration-300">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#07111f] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >

        <nav className="px-5 py-3">

          {links.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/home"}
              onClick={() => setMenuOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              className={({ isActive }) =>
                `block border-b border-white/5 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "pl-2 text-indigo-400"
                    : "text-slate-400 hover:pl-2 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

      </div>

    </header>
  );
}

export default Navbar;