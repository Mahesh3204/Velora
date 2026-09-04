import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { AgeGate } from "@/components/vibe/AgeGate";
import { Cursor } from "@/components/vibe/Cursor";
import { Nav } from "@/components/vibe/Nav";
import { Hero } from "@/components/vibe/Hero";
import { FoldPanel } from "@/components/vibe/FoldPanel";
import { Process, Purity } from "@/components/vibe/Process";
import { Collection, CloseUp } from "@/components/vibe/Collection";
import {
  Awards,
  Lifestyle,
  Social,
  Taste,
  Testimonials,
  VideoSection,
} from "@/components/vibe/Story";
import { Footer, Newsletter, ShopCTA } from "@/components/vibe/ShopCTA";

const title = "Velora Vodka — Pure Luxury, Distilled";
const description =
  "Velora Vodka Extra Lux: 5× filtration, 3× distillation, five formats. A light-luxury, cinematic vodka experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);
  const onEnter = useCallback(() => setEntered(true), []);

  return (
    <>
      <AgeGate onEnter={onEnter} />
      <Cursor />
      <Nav />
      <main
        className={`transition-opacity duration-700 ${entered ? "opacity-100" : "opacity-0"}`}
        aria-hidden={!entered}
      >
        <Hero />
        <FoldPanel />
        <Process />
        <Purity />
        <Collection />
        <CloseUp />
        <Taste />
        <Lifestyle />
        <VideoSection />
        <Awards />
        <Testimonials />
        <Social />
        <ShopCTA />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
