"use client";

import { useState } from "react";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const certifications = [
    {
      name: "IT Specialist – Data Analytics",
      issuer: "Certiport (Pearson)",
      year: "2025",
      score: "709/1000",
      certificate: "images/certificates/it-specialist-data-analytics.png",
    },
    {
      name: "Data Analyst Assessment",
      issuer: "SKILLKAMP",
      year: "2026",
      score: "98/150",
      certificate: "images/certificates/data-analyst-assessment.png",
    },
    {
      name: "Business Analyst Assessment",
      issuer: "SKILLKAMP",
      year: "2026",
      score: "121/150",
      certificate: "images/certificates/business-analyst-assessment.png",
    },
  ];

  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">
          Certifications
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Building skills through continuous learning.
        </h2>
      </div>

      <div className="space-y-6">
        {certifications.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {item.issuer} · {item.year}
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  Score:{" "}
                  <span className="font-semibold text-white">
                    {item.score}
                  </span>
                </p>
              </div>

              {item.certificate && (
                <button
                  onClick={() => setSelectedCertificate(item.certificate)}
                  className="w-fit text-sm font-medium text-red-300 transition hover:text-red-200"
                >
                  View Certificate →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
              aria-label="Close certificate"
            >
              ×
            </button>

            <img
              src={selectedCertificate}
              alt="Certificate"
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}