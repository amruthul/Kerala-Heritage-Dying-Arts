import { useCallback, useEffect, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { motifs } from "@/lib/heritage-data";
import { ChapterLabel, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

type Card = { id: number; key: string };
const shuffle = <T,>(a: T[]) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j]!, b[i]!]; } return b; };
const build = (pairs: number): Card[] => shuffle(motifs.slice(0, pairs).flatMap((m) => [m.key, m.key])).map((key, id) => ({ id, key }));

export function Game() {
  const [pairs, setPairs] = useState(6);
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [secs, setSecs] = useState(0);
  const [started, setStarted] = useState(false);
  const [fact, setFact] = useState<string | null>(null);

  const reset = useCallback((n = pairs) => {
    setCards(build(n)); setFlipped([]); setMatched([]); setMoves(0); setSecs(0); setStarted(false); setFact(null);
  }, [pairs]);
  useEffect(() => { reset(pairs); }, [pairs]); // eslint-disable-line react-hooks/exhaustive-deps

  const done = cards.length > 0 && matched.length === pairs;
  useEffect(() => {
    if (!started || done) return;
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [started, done]);

  const flip = (i: number) => {
    if (flipped.length === 2 || flipped.includes(i) || matched.includes(cards[i]!.key)) return;
    setStarted(true);
    const next = [...flipped, i];
    setFlipped(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      const a = next[0]!, b = next[1]!;
      if (cards[a]!.key === cards[b]!.key) {
        setMatched((m) => [...m, cards[a]!.key]);
        setFact(motifs.find((m) => m.key === cards[a]!.key)!.fact);
        setFlipped([]);
      } else setTimeout(() => setFlipped([]), 900);
    }
  };

  const fmt = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  return (
    <section id="legacy-game" className="relative px-5 py-32 md:px-10">
      <Reveal><ChapterLabel>06 / Interactive Archive</ChapterLabel></Reveal>
      <Reveal as="h2" className="mt-6 max-w-5xl text-5xl uppercase leading-[0.9] md:text-7xl">How well do you know your <em className="text-primary">heritage?</em></Reveal>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-4">
        <span className="label-caps text-muted-foreground">Moves <b className="ml-2 text-foreground">{moves}</b></span>
        <span className="label-caps text-muted-foreground">Time <b className="ml-2 text-foreground">{fmt}</b></span>
        <span className="label-caps text-muted-foreground">Pairs <b className="ml-2 text-foreground">{matched.length}/{pairs}</b></span>
        <div className="ml-auto flex items-center gap-2">
          {[4, 6].map((n) => (
            <button key={n} onClick={() => setPairs(n)} aria-pressed={pairs === n} className={cn("label-caps border px-3 py-2", pairs === n ? "border-accent text-accent" : "border-border text-muted-foreground")}>{n === 4 ? "Easy" : "Hard"}</button>
          ))}
          <button onClick={() => reset()} className="label-caps inline-flex items-center gap-2 border border-border px-3 py-2 text-muted-foreground hover:text-foreground"><RotateCcw className="h-3 w-3" /> Restart</button>
        </div>
      </div>
      <div className="mt-4 h-px bg-border"><div className="h-px bg-primary transition-all duration-500" style={{ width: `${(matched.length / pairs) * 100}%` }} /></div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className={cn("grid gap-3 lg:col-span-8", pairs === 4 ? "grid-cols-4" : "grid-cols-3 sm:grid-cols-4")}>
          {cards.map((c, i) => {
            const m = motifs.find((x) => x.key === c.key)!;
            const on = flipped.includes(i) || matched.includes(c.key);
            return (
              <button key={c.id} onClick={() => flip(i)} aria-label={on ? m.label : "Hidden card"} className="aspect-[3/4] [perspective:1000px]">
                <div className={cn("flip relative h-full w-full", on && "on")}>
                  <div className="face absolute inset-0 flex items-center justify-center border border-accent/30 bg-card">
                    <span className="font-malayalam text-3xl text-accent/70">ക</span>
                  </div>
                  <div className={cn("face face-back absolute inset-0 overflow-hidden border", matched.includes(c.key) ? "border-accent" : "border-border")}>
                    <img src={m.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                    <span className="label-caps absolute inset-x-0 bottom-0 bg-background/80 py-2 text-center text-[0.55rem]">{m.label}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <aside className="lg:col-span-4" aria-live="polite">
          {done ? (
            <div className="anim-fade border border-accent p-8">
              <p className="font-display text-4xl uppercase leading-tight">Every match reveals a <em className="text-accent">memory.</em></p>
              <p className="mt-3 text-muted-foreground">Completed in {moves} moves, {fmt}.</p>
              <a href="#archive" className="label-caps mt-6 inline-flex items-center gap-3 text-accent hover:text-foreground">Explore the full archive <ArrowRight className="h-4 w-4" /></a>
            </div>
          ) : (
            <div className="border border-border p-8">
              <p className="label-caps text-accent">Archive note</p>
              <p className="mt-4 font-display text-2xl italic leading-snug">{fact ?? "Flip two cards to find matching pairs. Each match unlocks a fact."}</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
