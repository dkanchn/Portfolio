export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div className="md:pt-3">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-400">
            About me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Who passionate about data, software engineering, and quality assurance.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-zinc-300 md:pt-11">
          I am a Computer Engineering graduate with experience in Data Science through 
          a Credit Risk Model competition project, focusing on Big Data analysis. 
          I also have experience in Data and Image Preprocessing for OCR, including image 
          preparation, data cleaning, and normalization of OCR outputs. Additionally, 
          I have experience developing web and mobile applications, covering both frontend 
          and backend development.
        </p>
      </div>
    </section>
  );
}
