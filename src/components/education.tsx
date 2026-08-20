export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">
          Education
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Academic foundation in engineering and data.
        </h2>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <h3 className="text-2xl font-semibold text-white">
            Faculty of Computer Engineering
          </h3>

          <p className="text-sm font-medium text-red-400">
            Aug 2022 – July 2026
          </p>
        </div>

        <p className="mt-2 text-zinc-300">
          Thammasat School of Engineering, Thammasat University
        </p>
      </div>
    </section>
  );
}