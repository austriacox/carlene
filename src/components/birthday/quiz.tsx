import { useState } from "react";
import { Button } from "@/components/ui/button";
import { quiz } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Quiz() {
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const done = qi >= quiz.length;
  const item = quiz[qi];

  function answer(i: number) {
    if (picked !== null || !item) return;
    setPicked(i);
    if (i === item.c) setScore((s) => s + 1);
    window.setTimeout(() => {
      setQi((q) => q + 1);
      setPicked(null);
    }, 850);
  }

  function restart() {
    setQi(0);
    setScore(0);
    setPicked(null);
  }

  return (
    <section id="quiz" className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-rose uppercase">
            A tiny quiz
          </p>
          <h2 className="font-serif mt-2 text-4xl text-wine sm:text-5xl">
            How well do you know us?
          </h2>
          <p className="mt-2 text-muted">All of these came from the letter.</p>
        </div>
        <div className="rounded-xl bg-cream p-6 shadow-soft sm:p-8">
          {done || !item ? (
            <div className="text-center">
              <p className="font-serif text-3xl text-wine">You finished.</p>
              <p className="mt-3 text-lg text-ink">
                Score:{" "}
                <span className="font-semibold tabular-nums">
                  {score}/{quiz.length}
                </span>
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                {score === quiz.length
                  ? "Perfect. You already knew — I would choose you again."
                  : "The real prize is still getting to celebrate you."}
              </p>
            </div>
          ) : (
            <>
              <p className="text-xs font-medium tracking-wide text-muted uppercase">
                Question {qi + 1} of {quiz.length}
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug text-ink">{item.q}</p>
              <div className="mt-5 grid gap-2">
                {item.a.map((opt, i) => {
                  const show = picked !== null;
                  const isCorrect = i === item.c;
                  const isWrong = show && picked === i && !isCorrect;
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={picked !== null}
                      onClick={() => answer(i)}
                      className={cn(
                        "rounded-lg bg-paper px-4 py-3 text-left text-sm leading-snug text-ink shadow-soft transition-colors duration-150",
                        "hover:bg-blush disabled:cursor-default",
                        show && isCorrect && "bg-blush text-wine",
                        isWrong && "opacity-55",
                      )}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </>
          )}
          <div className="mt-6 text-center">
            <Button variant="secondary" onClick={restart}>
              Restart quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
