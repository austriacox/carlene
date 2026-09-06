import { memories } from "@/lib/content";

export function Memories() {
  return (
    <section id="memories" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-rose uppercase">
            Three years
          </p>
          <h2 className="font-serif mt-2 text-4xl text-wine sm:text-5xl">
            Still us
          </h2>
          <p className="mt-2 text-muted">Three years in and we still love each other.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {memories.map((m) => (
            <figure
              key={m.title}
              className="overflow-hidden rounded-xl bg-cream shadow-soft"
            >
              <img
                src={m.src}
                alt={m.title}
                className="memory-photo w-full object-cover"
                style={{ objectPosition: m.position }}
              />
              <figcaption className="p-5">
                <h3 className="font-serif text-xl text-wine">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{m.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
