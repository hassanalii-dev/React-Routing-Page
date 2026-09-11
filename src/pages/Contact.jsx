import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <div className="max-w-3xl animate-[fadeUp_0.7s_ease-out]">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
          Get In Touch
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Contact Me
        </h1>

        <p className="mt-5 leading-8 text-slate-400">
          Have a question, project idea or simply want to connect? Send me a
          message.
        </p>

      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">

        <div className="animate-[fadeUp_0.8s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10">

          <h2 className="text-2xl font-bold">
            Let's connect
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            I am always interested in learning, collaborating and working on
            interesting web development projects.
          </p>

          <div className="mt-8 space-y-6">

            <div>
              <p className="text-sm text-slate-500">
                Name
              </p>

              <p className="mt-1 font-medium">
                Hassan Ali
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Email
              </p>

              <p className="mt-1 break-all font-medium">
                hassanmughal085870@gmail.com
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Location
              </p>

              <p className="mt-1 font-medium">
                Lahore, Pakistan
              </p>
            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="animate-[fadeUp_0.8s_ease-out] rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
        >

          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition-all duration-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/10"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition-all duration-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/10"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">
              Message
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="6"
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition-all duration-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/10"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 animate-[fadeUp_0.4s_ease-out] text-center text-sm text-emerald-400">
              Thank you for your message!
            </p>
          )}

        </form>

      </div>

    </main>
  );
}

export default Contact;