"use client";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">
          Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Hands-on projects across data, software, and engineering.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const previewImages = project.images && project.images.length > 0 ? project.images.slice(0, 4) : ["/images/projects/placeholder.svg"];

          return (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-red-500/20 bg-[#120b0b]/80 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-red-400/40"
            >
              <div className="grid grid-cols-2 gap-2 border-b border-red-500/10 bg-[#1a1111] p-2">
                {previewImages.map((image, index) => (
                  <a
                    key={`${project.title}-${index}`}
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-xl border border-red-500/10"
                  >
                    <img
                      src={image}
                      alt={`${project.title} preview ${index + 1}`}
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(event) => {
                        const target = event.currentTarget as HTMLImageElement;
                        target.src = "/images/projects/placeholder.svg";
                      }}
                    />
                  </a>
                ))}
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-red-200/80">
                  {project.category}
                </p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
