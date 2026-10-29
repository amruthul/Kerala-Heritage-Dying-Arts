import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { img, resources } from "@/lib/heritage-data";
import { Reveal, useSectionProgress } from "./primitives";
import { cn } from "@/lib/utils";

export function Legacy() {
  const [ref, p] = useSectionProgress<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const r = 20 + Math.min(1, p * 1.8) * 60;
  return (
    <section id="legacy" className="relative">
      <div ref={ref} className="relative h-[150vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <img src={img.theyyamPortrait} alt="Theyyam portrait emerging from darkness (artistic visualization)" loading="lazy" className="h-full w-full object-cover"
            style={{ clipPath: `circle(${r}% at 50% 45%)`, transform: `scale(${1.15 - p * 0.15})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <h2 className="absolute inset-x-0 bottom-14 px-5 text-center text-[10vw] uppercase leading-[0.88] md:text-[7vw]">The future of our past<br /><em className="text-primary">is in our hands.</em></h2>
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-6 px-5 pb-24 text-center font-display text-2xl italic leading-snug md:text-3xl">
        <Reveal as="p">Traditions survive when they are practiced, taught, documented, and valued.</Reveal>
        <Reveal as="p" className="text-muted-foreground">Behind every performance is an artist. Behind every craft is a craftsperson. Behind every inherited story is someone who chose to remember.</Reveal>
        <Reveal as="p">Our responsibility is not simply to look back.</Reveal>
        <Reveal as="p" className="text-accent">It is to make sure these stories have a future.</Reveal>
        <Reveal>
          <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="label-caps mt-8 inline-flex items-center gap-3 border border-primary bg-primary px-8 py-5 not-italic text-primary-foreground transition-colors hover:bg-transparent hover:text-primary">
            Preserve the legacy <ArrowRight className={cn("h-4 w-4 transition-transform", open && "rotate-90")} />
          </button>
        </Reveal>
      </div>

      <div className={cn("grid transition-all duration-700", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <div className="grid gap-px border-y border-border bg-border md:grid-cols-4">
            {resources.map((x) => (
              <a key={x.name} href={x.url} target="_blank" rel="noreferrer" className="group bg-background p-8 transition-colors hover:bg-card">
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                <h3 className="mt-6 text-2xl">{x.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.text}</p>
              </a>
            ))}
          </div>
          <div className="grid gap-8 px-5 py-16 md:grid-cols-3 md:px-10">
            {[["Attend", "Watch a Theyyam season or a Kathakali performance respectfully, with local guidance."], ["Learn", "Support institutions and gurus who teach these arts to the next generation."], ["Buy authentic", "Choose GI-tagged crafts directly from artisan cooperatives."]].map(([t, d]) => (
              <div key={t}><p className="label-caps text-accent">{t}</p><p className="mt-3 text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative overflow-hidden px-5 pb-10 pt-24 md:px-10">
        <img src={img.lamps} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
        <div className="relative">
          <p className="font-display text-3xl italic md:text-5xl">Some traditions are seen. Some are remembered.<br /><span className="text-primary">All deserve a future.</span></p>
          <p className="font-malayalam mt-6 text-xl text-accent">കേരള പൈതൃകം</p>
          <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-border pt-6">
            <span className="label-caps text-muted-foreground">Kerala Heritage — A digital cultural archive</span>
            <span className="label-caps text-muted-foreground">Imagery: artistic visualizations, replaceable with verified photographs</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
