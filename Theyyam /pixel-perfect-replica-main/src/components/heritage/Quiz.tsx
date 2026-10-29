import { useState } from "react";
import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import { ChapterLabel, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

type Question = {
  q: string;
  options: string[];
  answer: number;
  fact: string;
};

const QUESTIONS: Question[] = [
  {
    q: "Which traditional art form of Kerala is particularly known for its elaborate facial makeup, expressive gestures, and colorful costumes?",
    options: ["Kathakali", "Oppana", "Thiruvathira", "Margamkali"],
    answer: 0,
    fact: "Kathakali's chutti makeup can take four hours to apply — each colour carries meaning: green for virtue, red for violence, black for evil.",
  },
  {
    q: "Which traditional martial art originated in Kerala?",
    options: ["Silambam", "Kalaripayattu", "Gatka", "Thang-ta"],
    answer: 1,
    fact: "Kalaripayattu is among the oldest fighting systems in existence — over 3,000 years old — and is called the mother of all martial arts.",
  },
];

const LETTERS = ["A", "B", "C", "D"];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = step >= QUESTIONS.length;
  const current = QUESTIONS[Math.min(step, QUESTIONS.length - 1)]!;

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === current.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setPicked(null);
    setStep((s) => s + 1);
  };

  const restart = () => {
    setStep(0);
    setPicked(null);
    setScore(0);
  };

  return (
    <section id="heritage-quiz" className="relative px-5 py-32 md:px-10">
      <Reveal><ChapterLabel>07 / Mini Quiz</ChapterLabel></Reveal>
      <Reveal as="h2" className="mt-6 max-w-5xl text-5xl uppercase leading-[0.9] md:text-7xl">
        Test your <em className="text-primary">heritage</em> knowledge
      </Reveal>
      <Reveal className="mt-4 max-w-xl text-muted-foreground">
        Two questions. Centuries of culture. How much do you know?
      </Reveal>

      <div className="mx-auto mt-14 max-w-3xl">
        {!done ? (
          <div key={step} className="anim-fade border border-border bg-card/40 p-6 md:p-10">
            <div className="flex items-center justify-between">
              <p className="label-caps text-accent">
                Question {String(step + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")}
              </p>
              <p className="label-caps text-muted-foreground">Score {score}</p>
            </div>
            <div className="mt-4 h-px bg-border">
              <div
                className="h-px bg-primary transition-all duration-500"
                style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <p className="mt-8 font-display text-2xl leading-snug md:text-3xl">{current.q}</p>

            <div className="mt-8 grid gap-3">
              {current.options.map((opt, i) => {
                const isPicked = picked === i;
                const isRight = picked !== null && i === current.answer;
                const isWrong = isPicked && i !== current.answer;
                return (
                  <button
                    key={opt}
                    onClick={() => pick(i)}
                    disabled={picked !== null}
                    aria-pressed={isPicked}
                    className={cn(
                      "group flex items-center gap-4 border px-5 py-4 text-left transition-colors",
                      picked === null && "border-border hover:border-accent/60",
                      isRight && "border-accent bg-accent/10",
                      isWrong && "border-primary bg-primary/10",
                      picked !== null && !isPicked && !isRight && "border-border opacity-50",
                    )}
                  >
                    <span
                      className={cn(
                        "label-caps flex h-8 w-8 shrink-0 items-center justify-center border",
                        isRight ? "border-accent text-accent" : isWrong ? "border-primary text-primary" : "border-border text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {isRight ? <Check className="h-4 w-4" /> : isWrong ? <X className="h-4 w-4" /> : LETTERS[i]}
                    </span>
                    <span className={cn("text-lg", isRight && "text-accent", isWrong && "text-primary")}>{opt}</span>
                  </button>
                );
              })}
            </div>

            {picked !== null && (
              <div className="anim-fade mt-8 border-l-2 border-accent pl-5" aria-live="polite">
                <p className={cn("label-caps", picked === current.answer ? "text-accent" : "text-primary")}>
                  {picked === current.answer ? "Correct" : `Not quite — it's ${current.options[current.answer]}`}
                </p>
                <p className="mt-2 text-muted-foreground">{current.fact}</p>
                <button
                  onClick={next}
                  className="label-caps mt-5 inline-flex items-center gap-3 border border-accent px-5 py-3 text-accent transition-colors hover:bg-accent hover:text-background"
                >
                  {step + 1 === QUESTIONS.length ? "See your result" : "Next question"} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="anim-fade border border-accent p-8 text-center md:p-14" aria-live="polite">
            <p className="label-caps text-accent">Your result</p>
            <p className="mt-6 font-display text-4xl uppercase leading-tight md:text-5xl">
              Every answer brings you closer to your <em className="text-accent">heritage.</em>
            </p>
            <p className="mt-8 font-display text-7xl text-primary md:text-8xl">
              {score}<span className="text-3xl text-muted-foreground md:text-4xl"> / {QUESTIONS.length}</span>
            </p>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              {score === QUESTIONS.length
                ? "Flawless. The flames of tradition burn bright in you — keep them alive."
                : score === 1
                  ? "A fine beginning. One more story, one more tradition — the journey continues."
                  : "Every master was once a beginner. Scroll on and let the stories teach you."}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={restart}
                className="label-caps inline-flex items-center gap-3 border border-border px-6 py-3 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <RotateCcw className="h-4 w-4" /> Try again
              </button>
              <a
                href="#archive"
                className="label-caps inline-flex items-center gap-3 border border-accent px-6 py-3 text-accent transition-colors hover:bg-accent hover:text-background"
              >
                Explore more traditions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
