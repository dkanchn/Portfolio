"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const openGallery = (projectIndex: number, imageIndex: number) => {
    setSelectedProject(projectIndex);
    setSelectedImage(imageIndex);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setSelectedImage(0);
  };

  const nextImage = () => {
    if (selectedProject === null) return;

    const images = projects[selectedProject].images;

    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    if (selectedProject === null) return;

    const images = projects[selectedProject].images;

    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const currentProject =
    selectedProject !== null ? projects[selectedProject] : null;

  return (
    <>
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
          {projects.map((project, projectIndex) => {
            const previewImages =
              project.images && project.images.length > 0
                ? project.images.slice(0, 4)
                : ["/images/projects/placeholder.svg"];

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[28px] border border-red-500/20 bg-[#120b0b]/80 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-red-400/40"
              >
                {/* Image Preview */}
                <div className="grid grid-cols-2 gap-2 border-b border-red-500/10 bg-[#1a1111] p-2">
                  {previewImages.map((image, imageIndex) => (
                    <button
                      key={`${project.title}-${imageIndex}`}
                      type="button"
                      onClick={() =>
                        openGallery(projectIndex, imageIndex)
                      }
                      className="block overflow-hidden rounded-xl border border-red-500/10 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      <img
                        src={image}
                        alt={`${project.title} preview ${imageIndex + 1}`}
                        className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(event) => {
                          const target =
                            event.currentTarget as HTMLImageElement;

                          target.src =
                            "/images/projects/placeholder.svg";
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Project Information */}
                <div className="p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-red-200/80">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-zinc-300">
                    {project.description}
                  </p>

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

      {/* Image Gallery Modal */}
      {currentProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeGallery}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-50 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-4 z-50 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:border-red-400 hover:bg-red-500/20 md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Image Area */}
          <div
            className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={currentProject.images[selectedImage]}
              alt={`${currentProject.title} image ${selectedImage + 1}`}
              className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-white">
                {currentProject.title}
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                {selectedImage + 1} / {currentProject.images.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-50 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:border-red-400 hover:bg-red-500/20 md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </>
  );
}