import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { img, theyyamElements, makeup, kalariTabs, crafts, timeline, type Craft } from "@/lib/heritage-data";

import { ChapterLabel, Img, Reveal, useSectionProgress } from "./primitives";
import { cn } from "@/lib/utils";

const embers = Array.from({ length: 14 }, (_, i) => ({ left: `${(i * 37) % 100}%`, dur: `${9 + (i % 5) * 2}s`, delay: `${(i * 1.3) % 9}s` }));

export function Hero() {
  const [ref, p] = useSectionProgress<HTMLElement>();
  const t = Math.max(0, p - 0.5) * 2;
  return (
    <section id="top" ref={ref} className="relative h-[100svh] overflow-hidden grain">
      <div className="absolute inset-0 bg-ember-glow anim-glow" />
      <div className="absolute inset-0 anim-fade" style={{ animationDelay: ".4s", transform: `scale(${1 + t * 0.25})` }}>
        <img src={img.theyyamField} width={1920} height={1200} alt="Theyyam performer with a torch in the dark on an open field beside a ritual fire (artistic visualization)" className="h-full w-full object-cover object-center opacity-90" fetchPriority="high" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      <div className="pointer-events-none absolute inset-0">{embers.map((e, i) => <span key={i} className="ember-dot" style={{ left: e.left, animationDuration: e.dur, animationDelay: e.delay }} />)}</div>

      <div className="relative flex h-full flex-col justify-end px-5 pb-16 md:px-10" style={{ opacity: 1 - t * 1.4, transform: `translateY(${-t * 120}px)` }}>
        <p className="label-caps anim-rise text-accent" style={{ animationDelay: "1s" }}>Kerala, India — A heritage still alive</p>
        <h1 className="mt-4 font-display uppercase leading-[0.82] text-foreground">
          <span className="anim-rise block text-[11vw] md:text-[6vw]" style={{ animationDelay: "1.3s" }}>Before the</span>
          <span className="anim-rise -ml-[1vw] block text-[24vw] font-medium italic text-primary md:text-[17vw]" style={{ animationDelay: "1.5s" }}>Flames</span>
          <span className="anim-rise block text-right text-[11vw] md:text-[6vw]" style={{ animationDelay: "1.7s" }}>Fade.</span>
        </h1>
        <div className="anim-rise mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" style={{ animationDelay: "2.1s" }}>
          <p className="max-w-md font-display text-xl italic text-foreground/85">Every ritual carries a memory. Every art form holds a story. Some stories are at risk of disappearing.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#beginning" className="label-caps inline-flex items-center gap-3 border border-primary bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-transparent hover:text-primary">Enter the heritage <ArrowRight className="h-4 w-4" /></a>
            <a href="#beginning" className="label-caps inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">Scroll to discover <ArrowDown className="h-4 w-4 animate-bounce" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Beginning() {
  const lines = [
    "Long before screens carried our stories, traditions lived in movement, memory, music, and ritual.",
    "They were taught by watching. Remembered through practice. Passed from one generation to the next.",
    "Across Kerala, artists and craftspeople continue to protect this extraordinary cultural inheritance. But some traditions receive less attention, fewer opportunities, and fewer apprentices than they need to survive.",
    "This is a journey into those worlds.",
  ];
  return (
    <section id="beginning" className="relative px-5 py-32 md:px-10 md:py-48">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal><ChapterLabel>Prologue — Before the stories disappear</ChapterLabel></Reveal>
          <Reveal as="h2" className="mt-6 text-5xl uppercase leading-[0.9] md:text-8xl">Every tradition begins with a <em className="text-primary">story.</em></Reveal>
          <div className="mt-14 max-w-xl space-y-6">
            {lines.map((l, i) => <Reveal as="p" key={i} delay={i * 120} className={cn("text-lg leading-relaxed text-muted-foreground", i === 3 && "font-display text-2xl italic text-foreground")}>{l}</Reveal>)}
          </div>
          <Reveal className="mt-16 flex flex-wrap gap-x-8 font-display text-4xl uppercase tracking-wide text-accent md:text-6xl">
            <span>Memory.</span><span className="italic text-foreground">Movement.</span><span>Tradition.</span>
          </Reveal>
        </div>
        <Reveal className="md:col-span-5" delay={200}>
          <Img src={img.prep} alt="A Theyyam artist's face being painted by lamplight before a performance (artistic visualization)" className="aspect-[4/5] w-full" />
          <p className="label-caps mt-3 text-muted-foreground">Artistic visualization</p>
        </Reveal>
      </div>
      <p className="label-caps mt-24 text-center text-muted-foreground">The journey begins — 01 / 07</p>
    </section>
  );
}

export function Rituals() {
  const [ref, p] = useSectionProgress<HTMLDivElement>();
  const [sel, setSel] = useState(0);
  const el = theyyamElements[sel]!;
  return (
    <section id="rituals" className="relative">
      <div ref={ref} className="relative h-[180vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <img src={img.theyyamPortrait} alt="Theyyam performer in full costume (artistic visualization)" loading="lazy" className="h-full w-full object-cover" style={{ transform: `scale(${1 + p * 0.5}) translateY(${p * -6}%)` }} />
          <div className="absolute inset-0 bg-maroon/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/70" />
          <div className="absolute inset-0 flex flex-col justify-between px-5 py-28 md:px-10">
            <ChapterLabel>01 / Ritual & Belief</ChapterLabel>
            <h2 className="text-[14vw] uppercase leading-[0.85] md:text-[9vw]" style={{ opacity: Math.min(1, p * 3), transform: `translateY(${(1 - Math.min(1, p * 3)) * 60}px)` }}>
              When the forest<br /><em className="text-primary">comes alive.</em>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative grid gap-12 px-5 pb-32 md:grid-cols-12 md:px-10">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-5">
          <Reveal as="p" className="font-display text-3xl italic text-foreground">In the sacred groves of northern Kerala, the boundary between performance, ritual, and belief takes on a different meaning.</Reveal>
          <Reveal as="p">Through elaborate costumes, painted faces, rhythmic movement, and inherited traditions, Theyyam brings local histories and sacred narratives into the present.</Reveal>
          <Reveal as="p" className="text-foreground">It is not simply something to watch.</Reveal>
          <Reveal as="p">For the communities who sustain it, it is a living tradition with deep cultural and spiritual significance.</Reveal>
          <Reveal><Img src={img.theyyamFace} alt="Close-up of Theyyam facial makeup and ornaments (artistic visualization)" className="mt-8 aspect-[3/1] w-full" /></Reveal>
        </div>
        <Reveal className="border border-border bg-card/60 p-6 md:col-span-6 md:col-start-7 md:p-8">
          <p className="label-caps text-accent">Explore the elements</p>
          <div role="tablist" className="mt-5 flex flex-wrap gap-2">
            {theyyamElements.map((e, i) => (
              <button key={e.name} role="tab" aria-selected={sel === i} onClick={() => setSel(i)}
                className={cn("label-caps border px-3 py-2 transition-colors", sel === i ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground")}>{e.name}</button>
            ))}
          </div>
          <div key={sel} className="mt-6 anim-fade" style={{ animationDuration: ".6s" }}>
            <Img src={el.image} alt={el.name} className="aspect-video w-full" />
            <h3 className="mt-5 text-3xl">{el.name}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{el.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faces() {
  const [sel, setSel] = useState(0);
  const [open, setOpen] = useState(false);
  const [ref, p] = useSectionProgress<HTMLDivElement>();
  const m = makeup[sel]!;
  return (
    <section id="faces" className="relative bg-background">
      <div ref={ref} className="relative h-[100svh] overflow-hidden">
        <img src={img.kathakali} alt="Extreme close-up of a Kathakali artist's eyes (artistic visualization)" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: "50% 48%", transform: `scale(${2.6 - p * 1.4})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-x-0 bottom-16 px-5 md:px-10">
          <ChapterLabel>02 / Performance & Expression</ChapterLabel>
          <h2 className="mt-4 text-[12vw] uppercase leading-[0.85] md:text-[8vw]">A face can tell<br /><em className="text-accent">a thousand stories.</em></h2>
        </div>
      </div>

      <div className="grid gap-12 px-5 py-28 md:grid-cols-12 md:px-10">
        <div className="space-y-6 md:col-span-5">
          <Reveal as="p" className="font-display text-4xl italic">In Kathakali, the face becomes a language.</Reveal>
          <Reveal as="p" className="text-lg leading-relaxed text-muted-foreground">Eyes communicate emotion. Gestures carry meaning. Costume and makeup help establish the character.</Reveal>
          <Reveal as="p" className="text-lg leading-relaxed text-muted-foreground">Through an elaborate combination of movement, music, expression, and theatrical design, stories unfold without depending on ordinary conversation alone.</Reveal>
          <Reveal><button onClick={() => setOpen(true)} className="label-caps mt-4 inline-flex items-center gap-3 border-b border-accent pb-2 text-accent hover:text-foreground">Discover the characters <ArrowRight className="h-4 w-4" /></button></Reveal>
        </div>
        <Reveal className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-card">
            <img src={img.kathakali} alt={`Kathakali portrait shown in ${m.name} colouring (artistic visualization)`} loading="lazy" className="h-full w-full object-cover transition-[filter] duration-700" style={{ filter: m.filter }} />
            <span className="label-caps absolute left-4 top-4 bg-background/70 px-2 py-1 text-muted-foreground">Visualization</span>
          </div>
          <div role="tablist" aria-label="Makeup categories" className="mt-5 grid grid-cols-5 border border-border">
            {makeup.map((c, i) => (
              <button key={c.name} role="tab" aria-selected={sel === i} onClick={() => setSel(i)}
                className={cn("label-caps py-3 text-[0.6rem] transition-colors", sel === i ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground")}>{c.name}</button>
            ))}
          </div>
          <p key={sel} className="anim-fade mt-5 leading-relaxed text-muted-foreground" style={{ animationDuration: ".5s" }}><span className="font-display text-2xl text-foreground">{m.name}. </span>{m.desc}</p>
        </Reveal>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-border bg-background">
          <DialogTitle className="font-display text-4xl uppercase">The characters of Kathakali</DialogTitle>
          <DialogDescription>The five broad vesham (make-up) categories and their conventional associations.</DialogDescription>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {makeup.map((c) => (
              <div key={c.name} className="flex gap-4">
                <img src={img.kathakali} alt="" className="h-28 w-24 shrink-0 object-cover" style={{ filter: c.filter }} />
                <div><h3 className="text-2xl">{c.name}</h3><p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p></div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function Movement() {
  const [tab, setTab] = useState(0);
  const [ref, p] = useSectionProgress<HTMLDivElement>();
  const strip = [img.kalari, img.lamps, img.kalari, img.theyyamForest];
  return (
    <section id="movement" className="relative overflow-hidden">
      <div className="relative h-[100svh]">
        <Img src={img.kalari} alt="Kalaripayattu practitioner mid-leap in a kalari (artistic visualization)" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
        <div className="absolute inset-x-0 bottom-16 px-5 md:px-10">
          <ChapterLabel>03 / Martial Tradition</ChapterLabel>
          <h2 className="mt-4 text-[13vw] uppercase leading-[0.85] md:text-[9vw]">Discipline<br /><em className="text-ember">becomes movement.</em></h2>
        </div>
      </div>
      <div ref={ref} className="py-16">
        <div className="flex gap-4 will-change-transform" style={{ transform: `translateX(${-p * 30}%)` }}>
          {strip.map((s, i) => (
            <Img key={i} src={s} alt="Movement study" className={cn("h-64 shrink-0 md:h-96", i % 2 ? "w-[45vw]" : "w-[70vw]")} style={{ objectPosition: `${20 + i * 25}% 40%`, transform: `scale(${1.2 + (i % 2) * 0.3})` }} />
          ))}
        </div>
      </div>
      <div className="grid gap-12 px-5 pb-32 md:grid-cols-12 md:px-10">
        <div className="space-y-6 md:col-span-5">
          <Reveal as="p" className="font-display text-3xl italic">Every movement is learned. Every technique requires practice. Every generation inherits knowledge from those who came before.</Reveal>
          <Reveal as="p" className="text-lg leading-relaxed text-muted-foreground">Kalaripayattu carries a long-standing martial tradition associated with Kerala, bringing together physical training, technique, discipline, and inherited practice.</Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {kalariTabs.map((t, i) => (
            <div key={t.key} className="border-t border-border">
              <button aria-expanded={tab === i} onClick={() => setTab(i)} className="flex w-full items-center justify-between py-6 text-left">
                <span className={cn("font-display text-4xl transition-colors md:text-5xl", tab === i ? "text-ember" : "text-foreground/60 hover:text-foreground")}>{t.key}</span>
                <span className="label-caps text-muted-foreground">0{i + 1}</span>
              </button>
              <div className={cn("grid transition-all duration-500", tab === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <p className="overflow-hidden leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hands() {
  const [craft, setCraft] = useState<Craft | null>(null);
  return (
    <section id="hands" className="relative px-5 py-32 md:px-10">
      <Reveal><ChapterLabel>04 / Traditional Crafts</ChapterLabel></Reveal>
      <Reveal as="h2" className="mt-6 text-5xl uppercase leading-[0.9] md:text-8xl">Made by hand.<br /><em className="text-accent">Carried through time.</em></Reveal>
      <div className="mt-20 grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[300px]">
        {crafts.map((c, i) => (
          <Reveal key={c.name} delay={i * 100} className={c.span}>
            <button onClick={() => setCraft(c)} className="group relative h-full w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-accent">
              <img src={c.image} alt={`${c.name} (artistic visualization)`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="label-caps text-accent">{c.region}</p>
                <h3 className="mt-1 text-3xl">{c.name}</h3>
                <p className="max-h-0 overflow-hidden text-sm text-muted-foreground transition-all duration-500 group-hover:mt-2 group-hover:max-h-12 group-focus-visible:max-h-12">{c.line}</p>
              </div>
              <ArrowUpRight className="absolute right-5 top-5 h-6 w-6 text-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </Reveal>
        ))}
      </div>
      <div className="mt-20 grid gap-8 md:grid-cols-12">
        <div className="space-y-4 font-display text-2xl italic leading-snug md:col-span-7 md:text-3xl">
          <Reveal as="p">An object made by hand carries more than its material.</Reveal>
          <Reveal as="p" className="text-muted-foreground">It carries a method. A memory. A knowledge shaped by generations of practice.</Reveal>
          <Reveal as="p">Behind every traditional craft are people who continue to work, teach, adapt, and preserve.</Reveal>
        </div>
        <Reveal className="flex items-end md:col-span-4 md:col-start-9">
          <button onClick={() => setCraft(crafts[0]!)} className="label-caps inline-flex items-center gap-3 border-b border-accent pb-2 text-accent hover:text-foreground">Meet the craftspeople <ArrowRight className="h-4 w-4" /></button>
        </Reveal>
      </div>

      <Dialog open={!!craft} onOpenChange={(o) => !o && setCraft(null)}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-border bg-background p-0">
          {craft && (
            <div className="grid md:grid-cols-2">
              <img src={craft.image} alt={craft.name} className="h-64 w-full object-cover md:h-full" />
              <div className="space-y-4 p-6 md:p-8">
                <p className="label-caps text-accent">{craft.region}</p>
                <DialogTitle className="font-display text-4xl">{craft.name}</DialogTitle>
                <DialogDescription className="font-display text-lg italic">{craft.line}</DialogDescription>
                {([["History", craft.history], ["Materials", craft.materials], ["Process", craft.process], ["Cultural importance", craft.importance], ["Preservation challenges", craft.challenges]] as const).map(([k, v]) => (
                  <div key={k}><h4 className="label-caps text-muted-foreground">{k}</h4><p className="mt-1 text-sm leading-relaxed">{v}</p></div>
                ))}
                <p className="border-t border-border pt-4 text-xs text-muted-foreground">Artisan profiles will be added only from verified, consented interviews. Images are artistic visualizations.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {crafts.filter((c) => c !== craft).map((c) => <button key={c.name} onClick={() => setCraft(c)} className="label-caps border border-border px-3 py-2 text-muted-foreground hover:text-foreground">{c.name}</button>)}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function Timeline() {
  const [active, setActive] = useState(0);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    setActive(Math.round((el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth)) * (timeline.length - 1)));
  };
  const go = (i: number) => {
    setActive(i);
    document.getElementById(`tl-${i}`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };
  return (
    <section id="archive" className="relative bg-card py-32 grain">
      <div className="px-5 md:px-10">
        <Reveal><ChapterLabel>05 / History & Memory</ChapterLabel></Reveal>
        <Reveal as="h2" className="mt-6 text-5xl uppercase leading-[0.9] md:text-8xl">Time moves.<br /><em className="text-accent">Tradition transforms.</em></Reveal>
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Timeline milestones">
          {timeline.map((t, i) => (
            <button key={i} role="tab" aria-selected={active === i} onClick={() => go(i)} className={cn("label-caps border px-3 py-2 text-[0.6rem]", active === i ? "border-accent text-accent" : "border-border text-muted-foreground hover:text-foreground")}>{t.period}</button>
          ))}
        </div>
      </div>
      <div onScroll={onScroll} className="mt-12 flex snap-x snap-mandatory flex-col gap-10 px-5 md:flex-row md:overflow-x-auto md:px-10 md:pb-8">
        {timeline.map((t, i) => (
          <article id={`tl-${i}`} key={i} className={cn("relative shrink-0 snap-start border-l border-accent/50 pl-6 transition-opacity md:w-[38vw] md:border-l-0 md:border-t md:pl-0 md:pt-8", active === i ? "opacity-100" : "md:opacity-50")}>
            <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-accent md:-top-[5px] md:left-0" />
            <p className="label-caps text-accent">{t.period}</p>
            <h3 className="mt-2 text-4xl">{t.title}</h3>
            <Img src={t.image} alt={t.title} className="mt-5 aspect-[16/10] w-full sepia-[.4]" />
            <p className="mt-4 max-w-md font-display text-lg italic leading-relaxed text-muted-foreground">{t.text}</p>
          </article>
        ))}
      </div>
      <p className="px-5 text-xs text-muted-foreground md:px-10">Where origins are uncertain, periods are shown instead of exact dates.</p>
    </section>
  );
}
