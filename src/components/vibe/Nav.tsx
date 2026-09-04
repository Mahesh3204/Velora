import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { label: "Story", href: "#story" },
  { label: "Process", href: "#process" },
  { label: "Collection", href: "#collection" },
  { label: "Vibe", href: "#vibe" },
  { label: "Brand", href: "#brand-info" },
];

const navItems = [
  { n: "01", label: "Story", sub: "The Origin & Philosophy", href: "#story" },
  { n: "02", label: "Process", sub: "5× Filtered · 3× Distilled", href: "#process" },
  { n: "03", label: "Collection", sub: "Explore All 5 Sizes", href: "#collection" },
  { n: "04", label: "Vibe", sub: "Pure Spirit & Taste", href: "#vibe" },
  { n: "05", label: "Brand", sub: "Information & Specs", href: "#brand-info" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      setOpen(false);
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          className={`flex w-full max-w-[1400px] items-center justify-between rounded-full transition-all duration-700 ease-out ${
            scrolled
              ? "glass-strong px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3"
              : "border border-transparent px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5"
          }`}
        >
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, "#top")}
            data-cursor="Top"
            className={`display leading-none transition-all duration-700 ${
              scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            }`}
          >
            VELORA
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => scrollToSection(e, l.href)}
                  className="group relative text-[11px] font-semibold tracking-[0.22em] uppercase"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-foreground transition-all duration-500 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="https://www.instagram.com/velora_vodka/"
              target="_blank"
              rel="noreferrer"
              className="hidden text-[11px] font-semibold tracking-[0.22em] uppercase sm:block"
            >
              IG
            </a>
            <a
              href="#shop"
              onClick={(e) => scrollToSection(e, "#shop")}
              data-cursor="Shop"
              className="sheen rounded-full bg-primary px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-500 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-[11px] md:px-6"
            >
              Shop
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="ml-1 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-border md:hidden"
            >
              <span className="block h-px w-3.5 bg-foreground" />
              <span className="block h-px w-3.5 bg-foreground" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col justify-between overflow-y-auto bg-pearl-grad px-5 py-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <span className="display text-2xl tracking-tight">VELORA</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-secondary"
              >
                <span>Close</span>
                <span className="text-xs">✕</span>
              </button>
            </div>

            {/* Clean Luxury Menu List */}
            <ul className="my-auto space-y-2.5 py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="glass-strong group flex w-full items-center justify-center rounded-2xl border border-border/70 px-5 py-3 text-center transition-all duration-300 active:scale-[0.98] hover:border-primary/40 hover:shadow-[var(--shadow-glass)]"
                  >
                    <span className="display text-lg tracking-[0.1em] sm:text-xl">{item.label.toUpperCase()}</span>
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="#shop"
                  onClick={(e) => scrollToSection(e, "#shop")}
                  className="sheen mt-1.5 flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-md active:scale-[0.98]"
                >
                  <span>Shop VELORA Extra Lux</span>
                </a>
              </motion.li>
            </ul>

            {/* Footer info */}
            <div className="flex items-center justify-between border-t border-border/60 pt-4 text-[11px]">
              <a
                href="https://www.instagram.com/velora_vodka/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground"
              >
                Instagram — @velora_vodka
              </a>
              <span className="text-xs text-muted-foreground">© 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
