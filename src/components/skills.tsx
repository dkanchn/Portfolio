import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">
          Skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Tools and strengths I bring to projects.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-sm text-red-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
