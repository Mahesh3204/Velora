import { useState } from "react";
import { motion } from "motion/react";
import { tasteWords, testimonials } from "@/lib/vibe-data";
import { Reveal } from "./Reveal";

export function Taste() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-5 sm:py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow">Taste experience</p>
        <div className="mt-6 space-y-1 sm:mt-8">
          {tasteWords.map((w, i) => (
            <motion.p
              key={w}
              initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-18%" }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`display text-[clamp(2rem,7.2vw,7.2rem)] ${i % 2 ? "text-right text-muted-foreground/60" : ""
                }`}
            >
              {w}
            </motion.p>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-lg fluid-sub text-muted-foreground sm:mt-10">
            Mild on the nose. Soft fullness from the wheat. A delicate sweetness, then warmth with
            touches of black pepper and anise in the finish.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Lifestyle() {
  const lifestyleItems: Array<{ img: string; t: string; d: string; fit?: string }> = [
    { img: "/assets/velora-bar.png", t: "In the bar", d: "Built for cocktail culture." },
    { img: "/assets/velora-casing.png", t: "The packaging", d: "Extra Lux, inside and out." },
    { img: "/assets/velora-petite.png", t: "Compact Luxury", d: "Every moment, perfected." },
  ];

  return (
    <section id="vibe" className="relative overflow-hidden bg-ivory-grad">
      <div className="relative h-[54vh] w-full sm:h-[70vh] md:h-[86vh]">
        <img
          src="/assets/life-rooftop.jpg"
          alt="Friends celebrating on a bright rooftop in summer light"
          loading="lazy"
          width={1280}
          height={1600}
          className="h-full w-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--pearl)_0%,transparent_15%,transparent_65%,var(--pearl)_100%)]" />
        <h2 className="display absolute bottom-[7%] left-[5%] max-w-[90%] text-[clamp(1.8rem,7.5vw,7rem)] text-foreground drop-shadow-[0_2px_30px_var(--pearl)]">
          THE SPIRIT
          <br />
          OF VELORA.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-20 md:grid-cols-3 md:px-12">
        {lifestyleItems.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.08}>
            <figure className="group overflow-hidden rounded-[1.25rem] border border-border/70 bg-card">
              <div className="aspect-4/5 overflow-hidden bg-pearl">
                <img
                  src={c.img}
                  alt={c.t}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className={`h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-105 ${c.fit || "object-cover"}`}
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4">
                <span className="display text-2xl">{c.t}</span>
                <span className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                  {c.d}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="relative bg-background px-5 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">Film</p>
          <h2 className="display mt-4 fluid-title">FEEL VELORA.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass mx-auto mt-8 max-w-5xl rounded-[1.8rem] p-2.5 sm:p-4 md:mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] bg-frost">
              {playing ? (
                <video
                  src="/assets/can_you_extend_more.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  data-cursor="Play"
                  className="group relative h-full w-full"
                  aria-label="Play the Velora Vodka film"
                >
                  <img
                    src="/assets/film-thumbnail.png"
                    alt="Velora Vodka film preview"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <span className="glass-strong absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-semibold tracking-[0.22em] uppercase transition-transform duration-700 group-hover:scale-110 sm:h-24 sm:w-24">
                    Play
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section className="relative overflow-hidden bg-ice-grad px-5 py-24 md:px-12 md:py-36">
      {/* Background Ambient Blur */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-champagne/30 blur-[120px]" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary/60" />
            <p className="eyebrow text-xs tracking-[0.24em] text-primary">Global Distinction</p>
          </div>

          <h2 className="display mt-5 text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
            RECOGNIZED.
            <br />
            <span className="italic font-normal text-muted-foreground/80">REFINED.</span>
            <br />
            REMEMBERED.
          </h2>

          <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
            Velora Vodka earned top honors with a Silver Medal at the prestigious International Wine &amp; Spirits Competition — celebrating a commitment to pure wheat spirit without compromise.
          </p>

          {/* Luxury Metric Pill Row */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border/60 py-6 max-w-md">
            <div>
              <p className="display text-3xl font-semibold text-foreground">93</p>
              <p className="eyebrow mt-1 text-[10px] text-muted-foreground">IWSC Points</p>
            </div>
            <div className="border-l border-border/50 pl-4">
              <p className="display text-3xl font-semibold text-foreground">5×</p>
              <p className="eyebrow mt-1 text-[10px] text-muted-foreground">Filtered</p>
            </div>
            <div className="border-l border-border/50 pl-4">
              <p className="display text-3xl font-semibold text-foreground">3×</p>
              <p className="eyebrow mt-1 text-[10px] text-muted-foreground">Distilled</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <img
            src="/assets/velora-silver-award.png"
            alt="Velora Vodka Silver Medal at the International Wine and Spirits Competition"
            loading="lazy"
            width={1024}
            height={576}
            className="w-full rounded-[1.25rem] object-cover shadow-[var(--shadow-glass)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;

  const next = () => setI((prev) => (prev + 1) % testimonials.length);
  const prev = () => setI((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-background px-5 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between">
          <p className="eyebrow">In their words</p>
          <span className="eyebrow text-xs text-muted-foreground">
            0{i + 1} / 0{testimonials.length}
          </span>
        </div>

        <motion.blockquote
          key={i}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl min-h-[160px]"
        >
          <p className="display text-[clamp(1.6rem,3.6vw,3.2rem)] leading-[1.08]">“{t.quote}”</p>
          <footer className="mt-8 text-[11px] tracking-[0.2em] uppercase">
            {t.name} <span className="text-muted-foreground">— {t.role}</span>
          </footer>
        </motion.blockquote>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border/60 pt-8">
          {/* Clickable Progress Bars */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === i
                  ? "w-16 bg-primary"
                  : "w-8 bg-border hover:bg-muted-foreground/50"
                  }`}
              />
            ))}
          </div>

          {/* Prev / Next Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous quote"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-xs font-bold transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              &lt;
            </button>
            <button
              onClick={next}
              aria-label="Next quote"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-xs font-bold transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Social() {
  const tiles = [
    {
      src: "/assets/life-rooftop.jpg",
      span: "row-span-2",
      cap: "Rooftop season",
      fit: "object-cover object-[center_18%]",
      cardBg: "bg-pearl",
    },
    {
      src: "/assets/velora-lineup.png",
      span: "md:col-span-2",
      cap: "The line-up",
      fit: "object-contain p-3 sm:p-4",
      cardBg: "bg-gradient-to-br from-pearl via-card/90 to-champagne/40 border border-border/60 shadow-[var(--shadow-glass)]",
    },
    {
      src: "/assets/velora-bar.png",
      span: "row-span-2",
      cap: "Behind the bar",
      fit: "object-cover object-center",
      cardBg: "bg-pearl",
    },
    {
      src: "/assets/env-liquid.jpg",
      span: "",
      cap: "Pure liquid",
      fit: "object-cover",
      cardBg: "bg-pearl",
    },
    {
      src: "/assets/purity-wheat.jpg",
      span: "",
      cap: "Wheat origin",
      fit: "object-cover",
      cardBg: "bg-pearl",
    },
  ];

  return (
    <section className="relative bg-ivory-grad px-5 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="display fluid-title">FOLLOW VELORA.</h2>
          <a
            href="https://www.instagram.com/velora_vodka/"
            target="_blank"
            rel="noreferrer"
            data-cursor="Follow"
            className="text-[11px] font-semibold tracking-[0.22em] uppercase underline underline-offset-8"
          >
            @velora_vodka
          </a>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {tiles.map((t, i) => (
            <Reveal key={t.src + i} delay={i * 0.06} className={t.span}>
              <a
                href="https://www.instagram.com/velora_vodka/"
                target="_blank"
                rel="noreferrer"
                data-cursor="View"
                className={`group relative block h-full overflow-hidden rounded-[1rem] ${t.cardBg || "bg-pearl"}`}
              >
                <img
                  src={t.src}
                  alt={t.cap}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-[1.3s] ease-out group-hover:scale-105 ${t.fit}`}
                />
                <span className="glass absolute bottom-3 left-3 rounded-full px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {t.cap}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
