import { useEffect, useState } from "react";

/** Minimal translucent desktop cursor. Disabled on touch + reduced motion. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target ? (target.dataset["cursor"] ?? "") : null);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div
        className="glass flex items-center justify-center rounded-full text-[9px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 ease-out"
        style={{
          width: label ? 72 : 14,
          height: label ? 72 : 14,
          marginLeft: label ? -36 : -7,
          marginTop: label ? -36 : -7,
        }}
      >
        {label}
      </div>
    </div>
  );
}
