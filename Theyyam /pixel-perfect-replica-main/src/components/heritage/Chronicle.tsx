import { tagline, chronicle } from "@/lib/heritage-data";
import { ChapterLabel, Img, Reveal } from "./primitives";

export function Chronicle() {
  return (
    <section id="chronicle" className="relative px-5 py-32 md:px-10">
      <Reveal><ChapterLabel>Chronicle / North Malabar</ChapterLabel></Reveal>
      <Reveal as="h2" className="mt-6 max-w-4xl text-5xl uppercase leading-[0.9] md:text-8xl">
        A chronicle of Kerala's <em className="text-primary">cultural richness.</em>
      </Reveal>
      <Reveal as="p" className="mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-muted-foreground">
        {tagline}
      </Reveal>
      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
        {chronicle.map((c, i) => (
          <Reveal key={c.name} delay={i * 60} className="bg-card p-6">
            <Img src={c.image} alt={`${c.name} (artistic visualization)`} className="aspect-[4/3] w-full" />
            <p className="label-caps mt-5 text-accent">{c.region}</p>
            <h3 className="mt-1 text-2xl">{c.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
          </Reveal>
        ))}
      </div>
      <p className="label-caps mt-10 text-muted-foreground">Images are artistic visualizations — swap in verified photographs.</p>
    </section>
  );
}
