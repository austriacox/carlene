import { useState } from "react";
import { balloons } from "@/lib/content";
import { cn } from "@/lib/utils";

const toneClass = {
  rose: "balloon-rose",
  wine: "balloon-wine",
  blush: "balloon-blush",
  cream: "balloon-cream",
};

export function Balloons() {
  const [popped, setPopped] = useState<string[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const allPopped = popped.length === balloons.length;

  function pop(id: string, message: string) {
    if (popped.includes(id)) return;
    setPopped((p) => [...p, id]);
    setCurrent(message);
  }

  return (
    <section id="balloons" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-rose uppercase">
            Pop them
          </p>
          <h2 className="font-serif mt-2 text-4xl text-wine sm:text-5xl">
            Tiny birthday balloons
          </h2>
          <p className="mt-2 text-muted">
            Each one is something I meant when I wrote you that letter.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl bg-cream shadow-soft">
          <img
            src="/images/balloons.jpg"
            alt=""
            className="hidden h-48 w-full object-cover sm:block"
          />
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-center gap-x-5 gap-y-8">
              {balloons.map((b) => (
                <div key={b.id} className="flex w-20 flex-col items-center">
                  <button
                    type="button"
                    className={cn(
                      "balloon",
                      toneClass[b.tone],
                      popped.includes(b.id) && "popped",
                    )}
                    onClick={() => pop(b.id, b.message)}
                    aria-label={`Pop balloon: ${b.label}`}
                    disabled={popped.includes(b.id)}
                  />
                  <span className="balloon-string" aria-hidden="true" />
                  <span className="mt-1 text-center text-[11px] font-medium tracking-wide text-muted uppercase">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 min-h-24 rounded-lg bg-paper px-5 py-4 text-center">
              {current ? (
                <p className="text-base leading-relaxed text-ink">{current}</p>
              ) : (
                <p className="text-muted">Tap a balloon.</p>
              )}
              {allPopped && (
                <p className="font-serif mt-4 text-lg text-rose">
                  I love you so, so, so much. More than these words can explain.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
