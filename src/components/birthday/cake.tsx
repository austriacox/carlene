import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function burstHearts() {
  for (let i = 0; i < 22; i++) {
    const h = document.createElement("div");
    h.className = "heart-burst";
    h.textContent = "♡";
    h.style.left = `${46 + Math.random() * 8}%`;
    h.style.top = "48%";
    h.style.fontSize = `${14 + Math.random() * 16}px`;
    document.body.appendChild(h);
    const x = (Math.random() - 0.5) * 480;
    const y = -140 - Math.random() * 380;
    h.animate(
      [
        { transform: "translate(0,0) scale(0.5)", opacity: 1 },
        { transform: `translate(${x}px,${y}px) scale(1.2)`, opacity: 0 },
      ],
      { duration: 1100 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.2,1)" },
    ).onfinish = () => h.remove();
  }
}

export function Cake() {
  const [lit, setLit] = useState([true, true, true]);
  const allOut = lit.every((v) => !v);

  function toggle(i: number) {
    setLit((prev) => {
      const next = prev.map((v, idx) => (idx === i ? !v : v));
      if (next.every((v) => !v) && prev.some((v) => v)) {
        burstHearts();
      }
      return next;
    });
  }

  return (
    <section id="cake" className="px-4 py-20">
      <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-cream shadow-soft">
          <img src="/images/cake.jpg" alt="A small dusty-rose birthday cake" className="aspect-square w-full object-cover" />
        </div>
        <div className="rounded-xl bg-cream p-7 text-center shadow-soft sm:p-8">
          <p className="text-xs font-medium tracking-[0.22em] text-rose uppercase">
            Make a wish
          </p>
          <h2 className="font-serif mt-2 text-3xl text-wine sm:text-4xl">
            Blow out the candles
          </h2>
          <p className="mt-2 text-sm text-muted">Tap all three. Today is yours.</p>
          <div className="cake" id="birthday-cake">
            {lit.map((isLit, i) => (
              <button
                key={i}
                type="button"
                className={`candle c${i + 1}`}
                onClick={() => toggle(i)}
                aria-label={isLit ? `Blow out candle ${i + 1}` : `Relight candle ${i + 1}`}
              >
                <span className={cn("flame", !isLit && "out")} />
              </button>
            ))}
            <div className="cake-top" />
            <div className="cake-frost" />
            <div className="cake-base" />
          </div>
          <Button variant="secondary" className="mt-2" onClick={() => setLit([true, true, true])}>
            Relight candles
          </Button>
          <p
            className={cn(
              "mt-5 min-h-12 text-base font-medium text-wine transition-opacity duration-200",
              allOut ? "opacity-100" : "opacity-0",
            )}
            aria-live="polite"
          >
            Wish made. Three years in, and I would still choose you again.
          </p>
        </div>
      </div>
    </section>
  );
}
