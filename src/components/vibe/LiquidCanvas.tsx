import { useEffect, useRef } from "react";

/**
 * Lightweight "liquid glass" background: a handful of soft, GPU-cheap
 * radial blobs on a 2D canvas that drift with scroll + pointer.
 * Falls back to a static gradient when reduced motion is requested.
 */
export function LiquidCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.75);

    const blobs = [
      { x: 0.22, y: 0.3, r: 0.5, c: "195,220,245", s: 0.00013 },
      { x: 0.78, y: 0.25, r: 0.42, c: "224,214,240", s: 0.00019 },
      { x: 0.6, y: 0.78, r: 0.55, c: "240,232,214", s: 0.00011 },
      { x: 0.35, y: 0.7, r: 0.38, c: "205,232,244", s: 0.00016 },
    ];

    let w = 0;
    let h = 0;
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let raf = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      pointer.x += (pointer.tx - pointer.x) * 0.045;
      pointer.y += (pointer.ty - pointer.y) * 0.045;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i]!;
        const wobble = reduced ? 0 : Math.sin(t * b.s + i) * 0.05;
        const px = (b.x + wobble + (pointer.x - 0.5) * 0.09 * (i % 2 ? -1 : 1)) * w;
        const py = (b.y + wobble * 0.6 + (pointer.y - 0.5) * 0.07) * h;
        const radius = b.r * Math.max(w, h) * 0.75;
        const g = ctx.createRadialGradient(px, py, 0, px, py, radius);
        g.addColorStop(0, `rgba(${b.c},0.55)`);
        g.addColorStop(0.55, `rgba(${b.c},0.18)`);
        g.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = (e.clientX - rect.left) / Math.max(rect.width, 1);
      pointer.ty = (e.clientY - rect.top) / Math.max(rect.height, 1);
    };

    resize();
    draw(0);

    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      if (visible && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    window.addEventListener("resize", resize);
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
