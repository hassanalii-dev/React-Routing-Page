import { Link } from "react-router";

function NotFound() {
  return (
    <main className="page-shell flex items-center justify-center px-5">

      <div className="max-w-xl text-center animate-reveal">

        <p className="text-8xl font-black tracking-tighter text-sky-300">
          404
        </p>

        <div className="mx-auto mt-5 h-px w-16 bg-sky-400" />

        <h1 className="mt-7 text-3xl font-bold">
          This page doesn't exist.
        </h1>

        <p className="mt-4 leading-7 text-slate-500">
          The page you are looking for may have been moved or doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-sky-400 px-6 py-3 font-bold text-[#07111f] transition hover:bg-sky-300"
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;