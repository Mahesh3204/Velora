import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { LiquidCanvas } from "./LiquidCanvas";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 });

  const bottleY = useTransform(p, [0, 1], ["0%", "-14%"]);
  const bottleScale = useTransform(p, [0, 0.6, 1], [1, 1.16, 1.05]);
  const bottleRotate = useTransform(p, [0, 1], [0, 14]);
  const leftX = useTransform(p, [0, 1], ["0%", "-42%"]);
  const rightX = useTransform(p, [0, 1], ["0%", "42%"]);
  const wordsOpacity = useTransform(p, [0, 0.75], [1, 0]);
  const frameScale = useTransform(p, [0, 1], [0.85, 1.25]);
  const frameOpacity = useTransform(p, [0, 0.3, 1], [0, 0.9, 0]);
  const glow = useTransform(p, [0, 1], [1, 1.4]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[190vh] overflow-hidden bg-pearl-grad"
      aria-label="Velora Vodka hero"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <LiquidCanvas />

        <motion.div
          aria-hidden="true"
          style={{ scale: glow }}
          className="absolute h-[70vmin] w-[70vmin] rounded-full bg-ice/40 blur-[90px]"
        />

        <motion.div
          aria-hidden="true"
          style={{ scale: frameScale, opacity: frameOpacity }}
          className="absolute h-[68vh] w-[min(84vw,720px)] rounded-[2rem] border border-pearl/80 bg-pearl/20 backdrop-blur-[2px]"
        />

        <motion.h1
          style={{ opacity: wordsOpacity }}
          className="display pointer-events-none absolute inset-x-0 z-10 flex flex-col items-center fluid-hero"
        >
          <motion.span style={{ x: leftX }} className="block -translate-x-[10vw] sm:-translate-x-[14vw]">
            PURE
          </motion.span>
          <motion.span style={{ x: rightX }} className="block translate-x-[10vw] sm:translate-x-[16vw]">
            VELORA.
          </motion.span>
        </motion.h1>

        <motion.img
          src="/assets/velora-bottle-individual.png"
          alt="Velora Vodka Extra Lux 0.70 L bottle"
          width={700}
          height={1400}
          fetchPriority="high"
          style={{ y: bottleY, scale: bottleScale, rotate: bottleRotate }}
          className="bottle-shadow relative z-20 h-[56vh] w-auto object-contain sm:h-[65vh] md:h-[78vh]"
        />

        {/* floating droplets */}
        {[
          { l: "18%", t: "26%", s: 18, d: "0s" },
          { l: "76%", t: "34%", s: 12, d: "1.4s" },
          { l: "28%", t: "68%", s: 9, d: "2.6s" },
          { l: "68%", t: "72%", s: 15, d: "0.8s" },
        ].map((d) => (
          <span
            key={d.l + d.t}
            aria-hidden="true"
            className="float-slow absolute z-10 rounded-full border border-pearl bg-pearl/50 backdrop-blur-sm"
            style={{
              left: d.l,
              top: d.t,
              width: d.s,
              height: d.s,
              animationDelay: d.d,
            }}
          />
        ))}

        <div className="absolute inset-x-0 bottom-6 z-30 flex items-end justify-between px-5 sm:px-8 md:px-12">
          <p className="max-w-[14rem] text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground uppercase sm:max-w-[15rem] sm:text-[11px]">
            5× Filtration · 3× Distillation
            <br />
            Extra Lux premium wheat spirit
          </p>
          <p className="hidden text-[11px] tracking-[0.28em] text-muted-foreground uppercase sm:block">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}
