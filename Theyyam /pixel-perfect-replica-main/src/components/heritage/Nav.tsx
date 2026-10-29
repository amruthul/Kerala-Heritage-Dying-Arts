import { useEffect, useState } from "react";
import { ArrowUp, Plus, X } from "lucide-react";
import { chapters } from "@/lib/heritage-data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setProgress(h > 0 ? scrollY / h : 0);
      setScrolled(scrollY > 40);
      let idx = 0;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.5) idx = i;
      });
      setActive(idx);
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    document.body.style.overflow = open ? "hidden" : "";
    return () => removeEventListener("keydown", k);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-50 flex items-start justify-between px-5 py-5 transition-colors duration-500 md:px-10", scrolled && !open && "bg-background/70 backdrop-blur-md")}>
        <button onClick={() => go("top")} className="text-left">
          <span className="block font-display text-lg tracking-[0.2em] text-foreground">KERALA HERITAGE</span>
          <span className="label-caps block text-[0.55rem] text-muted-foreground">A Digital Cultural Archive</span>
        </button>
        <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="menu" className="label-caps flex items-center gap-2 py-2 text-foreground hover:text-primary">
          {open ? "Close" : "Menu"} {open ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </header>

      <nav id="menu" aria-hidden={!open} className={cn("fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-background px-6 pt-24 transition-opacity duration-500 md:px-16", open ? "opacity-100" : "pointer-events-none opacity-0")}>
        <div className="absolute inset-0 bg-ember-glow opacity-40" />
        <ol className="relative space-y-1 md:space-y-2">
          {chapters.map((c, i) => (
            <li key={c.id} style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }} className={cn("transition-all duration-700", open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
              <button tabIndex={open ? 0 : -1} onClick={() => go(c.id)} className="group flex items-baseline gap-4 text-left md:gap-8">
                <span className="label-caps text-accent">{c.n} —</span>
                <span className="font-display text-4xl uppercase leading-tight text-foreground transition-colors group-hover:text-primary group-hover:italic md:text-7xl">{c.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <aside className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex" aria-label="Scroll progress">
        <span className="label-caps text-accent">{chapters[active]?.n}</span>
        <div className="relative h-40 w-px bg-border">
          <div className="absolute left-0 top-0 w-px bg-primary" style={{ height: `${progress * 100}%` }} />
        </div>
        <span className="label-caps text-muted-foreground">07</span>
      </aside>

      <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
        className={cn("fixed bottom-6 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-all hover:border-primary hover:text-primary", progress > 0.08 ? "opacity-100" : "pointer-events-none opacity-0")}>
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}
