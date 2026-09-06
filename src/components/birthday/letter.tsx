import { letterParagraphs } from "@/lib/content";

export function Letter() {
  return (
    <section id="letter" className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-rose uppercase">
            Read it slowly
          </p>
          <h2 className="font-serif mt-2 text-4xl text-wine sm:text-5xl">
            A letter for you
          </h2>
          <p className="mt-2 text-muted">This one is just for you, baby Carlene.</p>
        </div>
        <article className="rounded-xl bg-cream px-6 py-8 shadow-soft sm:px-10 sm:py-12">
          {letterParagraphs.map((p, i) => (
            <p
              key={i}
              className={`text-[1.05rem] leading-[1.9] text-ink ${i === 0 ? "" : "mt-5"}`}
            >
              {p}
            </p>
          ))}
          <p className="font-serif mt-10 text-right text-xl text-rose">- your best baby</p>
        </article>
      </div>
    </section>
  );
}
