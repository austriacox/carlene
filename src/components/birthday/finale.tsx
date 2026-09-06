import { Button } from "@/components/ui/button";
import { lastSurprise } from "@/lib/content";

type FinaleProps = {
  onSurprise: (text: string) => void;
};

export function Finale({ onSurprise }: FinaleProps) {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-2xl rounded-xl bg-cream px-6 py-12 text-center shadow-soft sm:px-10">
        <p className="text-xs font-medium tracking-[0.28em] text-rose uppercase">
          August 26 · 18
        </p>
        <h2 className="font-serif mt-4 text-4xl text-wine sm:text-5xl">
          Here's to you.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink">
          Three years of late nights, rants, perfect scores, hard days, and
          still expanding love. Today we celebrate you. My coolest baby, my
          strong girl, my favorite person every single day.
        </p>
        <p className="font-serif mt-6 text-xl text-rose">Happy 18th birthday. I love you.</p>
        <Button className="mt-8" onClick={() => onSurprise(lastSurprise)}>
          One last surprise
        </Button>
      </div>
    </section>
  );
}
