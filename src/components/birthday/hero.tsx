import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header id="home" className="relative min-h-dvh overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-paper/55" />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl items-center px-4 py-16">
        <div className="w-full rounded-xl bg-cream/92 p-8 text-center shadow-soft sm:p-12">
          <p className="text-xs font-medium tracking-[0.28em] text-rose uppercase">
            For my coolest baby
          </p>
          <p className="mt-3 text-sm text-muted">August 26</p>
          <h1 className="font-serif mt-4 text-5xl leading-[0.95] text-wine sm:text-7xl">
            Happy 18th, baby.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
            Three years in, and I still love you the same way I did when I met
            you, only louder. Today is yours. This little site is too.
          </p>
          <Button
            size="lg"
            className="mt-8"
            onClick={() =>
              document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Open your letter
          </Button>
        </div>
      </div>
    </header>
  );
}
