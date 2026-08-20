export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-300">
            Contact
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let’s connect and explore opportunities.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/dkanchn"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-red-500 bg-red-500 p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:bg-red-500/10"
              >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white-500">Social</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    LinkedIn
                  </h3>
                </div>

                <span className="text-white-500 transition group-hover:translate-x-1 group-hover:text-red-300">
                  ↗
                </span>
              </div>

              {/*
              <p className="mt-4 text-sm text-zinc-400">
                Connect with me professionally
              </p>
              */}
            </a>

            {/* Email */}
            <a
              href="mailto:dkanchana.4work@gmail.com"
              className="group rounded-2xl border border-red-500 bg-red-500 p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:bg-red-500/10"
              >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white-500">Email</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    dkanchana.4work@gmail.com
                  </h3>
                </div>

                <span className="text-white-500 transition group-hover:translate-x-1 group-hover:text-red-300">
                  ↗
                </span>
              </div>

              {/*
              <p className="mt-4 text-sm text-zinc-400">
                Send me an email
              </p>
              */}
            </a>

            {/* Telephone */}
            <a
              href="tel:+66991894839"
              className="group rounded-2xl border border-red-500 bg-red-500 p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:bg-red-500/10"
              >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white-500">Tel.</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    +66 99 189 4839
                  </h3>
                </div>

                <span className="text-white-500 transition group-hover:translate-x-1 group-hover:text-red-300">
                  ↗
                </span>
              </div>

              {/*
              <p className="mt-4 text-sm text-zinc-400">
                Give me a call
              </p>
              */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}