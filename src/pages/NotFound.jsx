import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">

      <div className="text-center animate-[fadeUp_0.8s_ease-out]">

        <p className="text-8xl font-extrabold text-indigo-400 transition-transform duration-500 hover:scale-105">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-4 text-slate-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;