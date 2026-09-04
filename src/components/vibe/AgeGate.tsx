import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LiquidCanvas } from "./LiquidCanvas";

const KEY = "velora-age-verified";

export function AgeGate({ onEnter }: { onEnter: () => void }) {
  const [state, setState] = useState<"loading" | "ask" | "declined" | "gone">("loading");

  useEffect(() => {
    const ok = typeof window !== "undefined" && sessionStorage.getItem(KEY) === "yes";
    if (ok) {
      setState("gone");
      onEnter();
    } else {
      setState("ask");
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [onEnter]);

  const enter = () => {
    sessionStorage.setItem(KEY, "yes");
    document.body.style.overflow = "";
    setState("gone");
    onEnter();
  };

  return (
    <AnimatePresence>
      {(state === "ask" || state === "declined") && (
        <motion.div
          key="gate"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-pearl-grad px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.12, filter: "blur(14px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <LiquidCanvas />
          <motion.div
            aria-hidden="true"
            className="display pointer-events-none absolute inset-0 flex items-center justify-center text-[38vw] leading-none text-foreground/[0.045]"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            VELORA
          </motion.div>

          <div className="relative w-full max-w-xl text-center">
            {state === "ask" ? (
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="eyebrow">Velora Vodka · Extra Lux</p>
                <h1 className="display mt-7 text-[clamp(2.6rem,8vw,5.5rem)]">
                  PURE LUXURY
                  <br />
                  STARTS HERE.
                </h1>
                <p className="mt-8 fluid-sub text-muted-foreground">Are you 18 or older?</p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={enter}
                    className="sheen glass-strong rounded-full px-9 py-4 text-xs font-semibold tracking-[0.24em] uppercase transition-transform duration-500 hover:-translate-y-0.5"
                  >
                    Yes, enter
                  </button>
                  <button
                    onClick={() => setState("declined")}
                    className="rounded-full border border-border px-9 py-4 text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  >
                    No, exit
                  </button>
                </div>
                <p className="mx-auto mt-10 max-w-sm text-xs leading-relaxed text-muted-foreground">
                  Please enjoy Velora responsibly. By entering you confirm you are of legal drinking
                  age in your country.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="display text-[clamp(2rem,6vw,4rem)]">
                  COME BACK
                  <br />
                  LATER.
                </h2>
                <p className="mt-6 text-sm text-muted-foreground">
                  You must be of legal drinking age to explore Velora.
                </p>
                <button
                  onClick={() => setState("ask")}
                  className="mt-8 text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase underline underline-offset-8 hover:text-foreground"
                >
                  Back
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
