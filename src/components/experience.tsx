import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">
          Experience
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Experience gained through a technical internship.
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <div key={item.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-zinc-400">{item.company}</p>
              </div>
              <span className="text-sm text-red-300">{item.period}</span>
            </div>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-base leading-7 text-zinc-300">
              {item.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
