import { useState } from "react";
import { Heart } from "lucide-react";
import { reasons } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Reasons() {
  const [open, setOpen] = useState<boolean[]>(() => reasons.map(() => false));

  return (
    <section id="reasons" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-rose uppercase">
            Eighteen
          </p>
          <h2 className="font-serif mt-2 text-4xl text-wine sm:text-5xl">
            18 little reasons
          </h2>
          <p className="mt-2 text-muted">Tap a card. There is something waiting inside.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <button
              key={reason}
              type="button"
              className={cn("flip-card w-full text-left", open[i] && "open")}
              onClick={() =>
                setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
              }
              aria-pressed={open[i]}
            >
              <div className="flip-inner">
                <div className="flip-face flip-front">
                  <Heart className="size-6 fill-rose text-rose" strokeWidth={1.5} />
                  <span className="mt-3 font-serif text-2xl">#{i + 1}</span>
                  <span className="mt-1 text-xs tracking-wide text-muted uppercase">
                    Tap me
                  </span>
                </div>
                <div className="flip-face flip-back">{reason}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
