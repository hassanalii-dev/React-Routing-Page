import { NavLink } from "react-router";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">

      <div className="text-center animate-[fadeUp_0.7s_ease-out]">

        <p className="text-8xl font-black text-indigo-400 transition-all duration-300 hover:scale-105">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist.
        </p>

        <NavLink
          to="/home"
          className="mt-8 inline-block rounded-xl bg-indigo-500 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
        >
          Back Home
        </NavLink>

      </div>

    </main>
  );
}

export default NotFound;