import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { products } from "@/lib/vibe-data";
import { bottleLabels } from "@/lib/vibe-data";
import { Reveal } from "./Reveal";

export function Collection() {
  const [active, setActive] = useState(products[2]!.id);
  const current = products.find((p) => p.id === active) ?? products[2]!;

  return (
    <section id="collection" className="relative overflow-hidden bg-background px-5 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The collection</p>
            <h2 className="display mt-5 fluid-title">
              FIVE SIZES.
              <br />
              ONE VELORA.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            0.20 L · 0.50 L · 0.70 L · Special Edition 0.75 L · 1.00 L — the complete Velora Vodka
            Extra Lux line-up.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pt-5 pb-5 lg:mx-0 lg:px-0">
            {products.map((p) => {
              const isActive = p.id === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  data-cursor="View"
                  aria-pressed={isActive}
                  className={`group relative flex min-w-[228px] flex-1 snap-center flex-col items-center overflow-hidden rounded-[1.5rem] px-5 pt-8 pb-6 transition-all duration-700 ease-out ${isActive
                      ? "-translate-y-2 border-2 border-foreground/35 bg-card/95 backdrop-blur-md shadow-xl"
                      : "border border-border/90 bg-card hover:-translate-y-1.5 hover:border-foreground/30 hover:shadow-[var(--shadow-glass)]"
                    }`}
                >
                  <span className="eyebrow self-start">{p.tag}</span>
                  <img
                    src={p.image}
                    alt={`${p.name} ${p.size}`}
                    loading="lazy"
                    width={300}
                    height={640}
                    className={`bottle-shadow my-6 h-[220px] w-auto object-contain transition-transform duration-700 ease-out md:h-[260px] ${isActive ? "scale-110" : "group-hover:-translate-y-2 group-hover:scale-105"
                      }`}
                  />
                  <span className="display text-3xl">{p.size}</span>
                  <span className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    {p.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent_40%,var(--pearl)_50%,transparent_60%)] opacity-70 transition-transform duration-1000 ease-out group-hover:translate-x-full"
                  />
                </button>
              );
            })}
          </div>

          <motion.aside
            key={current.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass flex flex-col justify-between rounded-[1.5rem] p-7"
          >
            <div>
              <p className="eyebrow">{current.tag}</p>
              <p className="display mt-4 text-5xl">{current.size}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.note}</p>
              <ul className="mt-7 space-y-2.5 border-t border-border/70 pt-6">
                {bottleLabels.map((l) => (
                  <li key={l} className="flex items-center gap-3 text-[11px] tracking-[0.16em] uppercase">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#shop"
              data-cursor="Shop"
              className="sheen mt-8 block rounded-full bg-primary px-6 py-4 text-center text-[11px] font-semibold tracking-[0.22em] text-primary-foreground uppercase"
            >
              Shop this size
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export function CloseUp() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const labels = [
    { text: bottleLabels[0]!, pos: "left-[10%] sm:left-[16%] md:left-[20%] top-[22%]", align: "text-left" },
    { text: bottleLabels[1]!, pos: "right-[10%] sm:right-[16%] md:right-[20%] top-[30%]", align: "text-right" },
    { text: bottleLabels[2]!, pos: "left-[6%] sm:left-[12%] md:left-[16%] bottom-[26%]", align: "text-left" },
    { text: bottleLabels[3]!, pos: "right-[6%] sm:right-[12%] md:right-[16%] bottom-[20%]", align: "text-right" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-ice-grad px-5 py-24 md:py-32">
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center">
        <p className="eyebrow">The bottle</p>
        <h2 className="display mt-5 text-center text-[clamp(2rem,5vw,4.5rem)]">
          DESIGNED TO BE HELD.
        </h2>

        <div className="relative mt-10 flex h-[58vh] min-h-[420px] w-full max-w-[860px] items-center justify-center">
          <motion.img
            src="/assets/velora-bottle-individual.png"
            alt="Close-up of the Velora Vodka Extra Lux bottle"
            loading="lazy"
            width={520}
            height={1100}
            style={{ rotate, y }}
            className="bottle-shadow h-full w-auto object-contain"
          />
          {labels.map((l, i) => (
            <motion.div
              key={l.text}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className={`glass absolute ${l.pos} ${l.align} max-w-[44%] rounded-full px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase sm:px-4 sm:py-2 md:text-[11px]`}
            >
              {l.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
