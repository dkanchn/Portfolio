export type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">{description}</p> : null}
    </div>
  );
}
