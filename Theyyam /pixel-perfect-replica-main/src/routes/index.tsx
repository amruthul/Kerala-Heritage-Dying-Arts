import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/heritage/Nav";
import { Hero, Beginning, Rituals, Faces, Movement, Hands, Timeline } from "@/components/heritage/Story";
import { Chronicle } from "@/components/heritage/Chronicle";
import { Game } from "@/components/heritage/Game";
import { Quiz } from "@/components/heritage/Quiz";
import { Legacy } from "@/components/heritage/Legacy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kerala Heritage — Before the Flames Fade" },
      { name: "description", content: "A cinematic, interactive journey through Kerala's Theyyam, Kathakali, Kalaripayattu, traditional crafts and the living culture of North Malabar." },
      { property: "og:title", content: "Kerala Heritage — Before the Flames Fade" },
      { property: "og:description", content: "When the flames fade, the stories must live on. Explore Kerala's living and endangered traditions, from North Malabar's Theyyam nights to its temples, crafts and kalaris." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Beginning />
      <Rituals />
      <Faces />
      <Movement />
      <Hands />
      <Timeline />
      <Chronicle />
      <Game />
      <Quiz />
      <Legacy />
    </main>
  );
}
