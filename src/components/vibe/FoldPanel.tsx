import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Signature interaction: a translucent "VIBE EXPERIENCE PANEL" that folds
 * shut around the bottle as you scroll, then opens again into the next scene.
 */
export function FoldPanel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });

  const leftFold = useTransform(p, [0.05, 0.45, 0.75, 1], [0, -62, -62, -4]);
  const rightFold = useTransform(p, [0.05, 0.45, 0.75, 1], [0, 62, 62, 4]);
  const perspectiveScale = useTransform(p, [0, 0.45, 1], [1, 0.88, 1.02]);
  const bottleScale = useTransform(p, [0.15, 0.5, 1], [0.7, 1, 0.9]);
  const bottleRotate = useTransform(p, [0, 1], [-8, 10]);
  const bottleOpacity = useTransform(p, [0.08, 0.24], [0, 1]);
  const cardsY = useTransform(p, [0.45, 0.78], [60, 0]);
  const cardsOpacity = useTransform(p, [0.45, 0.68, 1], [0, 1, 1]);
  const titleOpacity = useTransform(p, [0, 0.22], [1, 0]);

  const cards = [
    { k: "01", t: "Extra Lux", d: "A wheat spirit built for softness before strength." },
    { k: "02", t: "5× Filtration", d: "Five passes until nothing is left but clarity." },
    { k: "03", t: "3× Distillation", d: "Three distillations for a clean, rounded body." },
  ];

  return (
    <section ref={ref} id="story" className="relative bg-ivory-grad py-16 sm:h-[320vh] sm:py-0">
      <div className="flex flex-col items-center justify-center overflow-hidden px-5 sm:sticky sm:top-0 sm:h-screen">
        <motion.p
          style={{ opacity: titleOpacity }}
          className="eyebrow mb-6 sm:absolute sm:top-[18vh] sm:mb-0"
        >
          The Velora Experience
        </motion.p>

        {/* Mobile View: 2 Spacious Full-Width Luxury Cards (Replaces narrow 3D wings) */}
        <div className="flex w-full max-w-[480px] flex-col gap-5 sm:hidden">
          <div className="glass-strong relative overflow-hidden rounded-[1.5rem] p-6 text-left shadow-[var(--shadow-glass)]">
            <span aria-hidden="true" className="display pointer-events-none absolute right-4 bottom-2 text-7xl text-foreground/[0.04]">
              01
            </span>
            <span className="eyebrow text-xs text-primary">5× Filtered · 3× Distilled</span>
            <h3 className="display mt-2 text-3xl">PURE.</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90">
              100% European wheat spirit, 5× micro-filtered and 3× distilled for glass-like clarity. Mild on the nose with subtle natural sweetness.
            </p>
            <div className="mt-5 border-t border-border/50 pt-3 flex items-center justify-between text-xs">
              <span className="eyebrow">Wheat spirit</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          </div>

          <div className="glass-strong relative overflow-hidden rounded-[1.5rem] p-6 text-left shadow-[var(--shadow-glass)]">
            <span aria-hidden="true" className="display pointer-events-none absolute right-4 bottom-2 text-7xl text-foreground/[0.04]">
              02
            </span>
            <span className="eyebrow text-xs text-primary">IWSC Silver Medal</span>
            <h3 className="display mt-2 text-3xl">SMOOTH.</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90">
              Velvety mouthfeel with delicate touches of anise and black pepper in the finish. Crafted for cocktails and neat luxury serves.
            </p>
            <div className="mt-5 border-t border-border/50 pt-3 flex items-center justify-between text-xs">
              <span className="eyebrow">Extra Lux</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        {/* Desktop View: Signature 3D Folding Wings Experience */}
        <motion.div
          style={{ scale: perspectiveScale, perspective: 1400 }}
          className="relative hidden h-[62vh] w-full max-w-[1100px] items-stretch justify-center sm:flex"
        >
          <motion.div
            style={{ rotateY: leftFold, transformOrigin: "right center" }}
            className="glass-strong relative flex h-full flex-1 flex-col justify-between overflow-hidden rounded-l-[1.75rem] p-7 text-left md:p-9"
          >
            {/* Watermark numeral for depth */}
            <span aria-hidden="true" className="display pointer-events-none absolute right-4 bottom-4 text-8xl text-foreground/[0.04]">
              01
            </span>

            <div className="relative z-10">
              <span className="eyebrow text-[10px] text-primary">5× Filtered · 3× Distilled</span>
              <span className="display mt-3 block text-[clamp(1.4rem,3vw,3rem)] leading-none">
                PURE.
              </span>
              <p className="mt-5 max-w-[260px] text-xs leading-relaxed text-muted-foreground/90">
                100% European wheat spirit, 5× micro-filtered and 3× distilled for glass-like clarity. Mild on the nose with subtle natural sweetness.
              </p>
            </div>

            <div className="relative z-10 border-t border-border/50 pt-4 flex items-center justify-between text-[11px]">
              <span className="eyebrow">Wheat spirit</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
            </div>
          </motion.div>

          <div className="relative z-20 flex w-[38%] shrink-0 items-center justify-center">
            <motion.img
              src="/assets/velora-bottle-special.png"
              alt="Velora Vodka Special Edition bottle"
              loading="lazy"
              width={420}
              height={900}
              style={{ scale: bottleScale, rotate: bottleRotate, opacity: bottleOpacity }}
              className="bottle-shadow h-[52vh] w-auto max-w-none shrink-0 object-contain"
            />
          </div>

          <motion.div
            style={{ rotateY: rightFold, transformOrigin: "left center" }}
            className="glass-strong relative flex h-full flex-1 flex-col justify-between overflow-hidden rounded-r-[1.75rem] p-7 text-right md:p-9"
          >
            {/* Watermark numeral for depth */}
            <span aria-hidden="true" className="display pointer-events-none absolute left-4 bottom-4 text-8xl text-foreground/[0.04]">
              02
            </span>

            <div className="relative z-10">
              <span className="eyebrow text-[10px] text-primary">IWSC Silver Medal</span>
              <span className="display mt-3 block text-[clamp(1.4rem,3vw,3rem)] leading-none">
                SMOOTH.
              </span>
              <p className="mt-5 ml-auto max-w-[260px] text-xs leading-relaxed text-muted-foreground/90">
                Velvety mouthfeel with delicate touches of anise and black pepper in the finish. Crafted for cocktails and neat luxury serves.
              </p>
            </div>

            <div className="relative z-10 border-t border-border/50 pt-4 flex items-center justify-between text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
              <span className="eyebrow">Extra Lux</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: cardsY, opacity: cardsOpacity }}
          className="mt-8 grid w-full max-w-[1100px] grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {cards.map((c) => (
            <div key={c.k} className="glass rounded-2xl px-5 py-4 text-left">
              <span className="eyebrow">{c.k}</span>
              <p className="display mt-2 text-2xl">{c.t}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
