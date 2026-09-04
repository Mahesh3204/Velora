import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Reveal } from "./Reveal";

const steps = [
  { n: "04", t: "Velora", d: "Bottled as Extra Lux. Soft, clean, complete." },
  { n: "03", t: "Filtration ×5", d: "Five filtrations refine the spirit to glass clarity." },
  { n: "02", t: "Distillation ×3", d: "Three distillations remove everything harsh." },
  { n: "01", t: "Wheat", d: "Selected premium wheat becomes the base spirit." },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 25%"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  const clarity = useTransform(p, [0, 1], [0.55, 0]);
  const fillHeight = useTransform(p, [0.05, 0.9], ["8%", "88%"]);
  const bottleOpacity = useTransform(p, [0.62, 0.9], [0, 1]);
  const bottleY = useTransform(p, [0.62, 1], [50, 0]);
  const lineWidth = useTransform(p, [0, 1], ["0%", "100%"]);

  const step0 = useTransform(p, [0, 0.12], [0.35, 1]);
  const step1 = useTransform(p, [0.25, 0.37], [0.35, 1]);
  const step2 = useTransform(p, [0.5, 0.62], [0.35, 1]);
  const step3 = useTransform(p, [0.75, 0.87], [0.35, 1]);
  const stepOpacity = [step3, step2, step1, step0];

  return (
    <section ref={ref} id="process" className="relative bg-background lg:h-[300vh]">
      <div className="flex flex-col justify-center px-4 py-16 sm:px-8 md:px-12 lg:sticky lg:top-0 lg:h-screen lg:pt-20 lg:pb-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="eyebrow">The process</p>
          <h2 className="display mt-1 text-[clamp(1.4rem,2.8vw,2.6rem)] leading-[0.95] sm:mt-1.5">
            5× FILTRATION.
            <br />
            3× DISTILLATION.
            <br />
            <span className="text-metal">ZERO COMPROMISE.</span>
          </h2>

          <div className="mt-5 grid items-stretch gap-6 sm:mt-8 md:gap-10 lg:grid-cols-2">
            {/* Left Column: Laboratory Photo Frame */}
            <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-border/70 sm:min-h-[260px] lg:min-h-0">
              <img
                src="/assets/process-lab.jpg"
                alt="Glass distillation apparatus in a bright laboratory"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
              <motion.div
                aria-hidden="true"
                style={{ opacity: clarity }}
                className="absolute inset-0 bg-champagne mix-blend-multiply"
              />
              <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
              <motion.div
                aria-hidden="true"
                style={{ width: lineWidth }}
                className="absolute bottom-0 left-0 h-[2px] bg-primary"
              />
            </div>

            {/* Right Column: Liquid Cylinder + Step List */}
            <div className="flex items-stretch gap-4 sm:gap-6">
              {/* glass tube filling with clear spirit */}
              <div className="relative min-h-[200px] w-10 shrink-0 overflow-hidden rounded-full border border-border bg-pearl/70 sm:w-12 lg:min-h-0">
                <motion.div
                  style={{ height: fillHeight }}
                  className="absolute inset-x-0 bottom-0 bg-ice-grad"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-pearl/80 ring-inset" />
              </div>

              <ul className="flex flex-1 flex-col justify-between space-y-2 py-0.5 sm:space-y-3">
                {steps.map((s, i) => (
                  <motion.li key={s.n} style={{ opacity: stepOpacity[i] }} className="flex gap-3 sm:gap-4">
                    <span className="eyebrow pt-0.5 text-xs">{s.n}</span>
                    <div>
                      <p className="display text-lg sm:text-xl md:text-2xl">{s.t}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{s.d}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Purity() {
  return (
    <section className="relative overflow-hidden bg-ivory-grad px-5 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Purity</p>
          <h2 className="display mt-5 text-[clamp(2.2rem,5.5vw,5rem)]">
            PURE SPIRIT.
            <br />
            PURE VELORA.
          </h2>
          <p className="mt-7 max-w-md fluid-sub text-muted-foreground">
            Premium wheat. Clean water. Nothing that doesn't belong. Velora is refined until the
            spirit reads like glass — soft on the nose, full on the tongue, quiet in the finish.
          </p>
          <div className="mt-9 flex gap-8">
            {[
              ["5×", "Filtration"],
              ["3×", "Distillation"],
              ["1", "Velora"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="display text-4xl md:text-5xl">{n}</p>
                <p className="eyebrow mt-1">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="grid grid-cols-2 gap-4">
          <img
            src="/assets/purity-wheat.jpg"
            alt="Macro photograph of wheat ears in soft light"
            loading="lazy"
            width={1280}
            height={1600}
            className="h-full w-full rounded-[1.25rem] object-cover shadow-[var(--shadow-glass)]"
          />
          <img
            src="/assets/env-liquid.jpg"
            alt="Macro photograph of crystal clear liquid and glass refraction"
            loading="lazy"
            width={1920}
            height={1088}
            className="mt-10 h-full w-full rounded-[1.25rem] object-cover shadow-[var(--shadow-glass)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
