import { LiquidCanvas } from "./LiquidCanvas";
import { Reveal } from "./Reveal";

export function ShopCTA() {
  return (
    <section id="shop" className="relative overflow-hidden bg-pearl-grad px-4 py-20 sm:px-6 md:px-12 md:py-40">
      <LiquidCanvas />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,8vw,8rem)] leading-[0.95]">
            READY
            <br />
            FOR VELORA?
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#collection"
              data-cursor="Shop"
              className="sheen w-full rounded-full bg-primary px-7 py-4 text-center text-[10px] font-semibold tracking-[0.22em] text-primary-foreground uppercase transition-transform duration-500 hover:-translate-y-0.5 sm:w-auto sm:px-10 sm:py-5 sm:text-[11px]"
            >
              Shop Velora
            </a>
            <a
              href="#collection"
              className="w-full rounded-full border border-border px-7 py-4 text-center text-[10px] font-semibold tracking-[0.22em] uppercase transition-colors hover:bg-secondary sm:w-auto sm:px-10 sm:py-5 sm:text-[11px]"
            >
              Discover the collection
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <img
            src="/assets/velora-bottle-special.png"
            alt="Velora Vodka Special Edition 0.75 L bottle"
            loading="lazy"
            width={420}
            height={900}
            className="bottle-shadow float-slow mx-auto h-[300px] w-auto max-w-full object-contain sm:h-[400px] md:h-[62vh]"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="bg-background px-5 py-20 md:px-12">
      <div className="glass mx-auto flex max-w-[1400px] flex-col gap-6 rounded-[1.5rem] p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <p className="eyebrow">Newsletter</p>
          <p className="display mt-3 text-[clamp(1.8rem,3.4vw,3rem)]">PURE LUXURY, DELIVERED.</p>
        </div>
        <form
          className="flex w-full max-w-md items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-full border border-border bg-card px-6 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
          />
          <button
            type="submit"
            className="sheen shrink-0 rounded-full bg-primary px-7 py-4 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="brand-info" className="bg-ivory-grad px-5 pt-20 pb-16 md:px-12 sm:pb-10">
      <div className="mx-auto max-w-[1400px]">
        <p className="display text-center text-[clamp(3.5rem,20vw,17rem)] leading-[0.8] sm:text-left">VELORA</p>
        <div className="mt-12 grid gap-8 border-t border-border/70 pt-10 text-center text-xs text-muted-foreground sm:grid-cols-2 sm:text-left md:grid-cols-4">
          <div>
            <p className="eyebrow">Brand</p>
            <p className="mt-3 leading-relaxed">
              Velora Spirits Co.
              <br />
              Extra Lux Distilled Spirits
              <br />
              Premium European Quality
            </p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="#story" className="hover:text-foreground">
                  Story
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-foreground">
                  Collection
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-foreground">
                  Process
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Follow</p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a
                  href="https://www.instagram.com/velora_vodka/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  className="hover:text-foreground"
                >
                  @velora_vodka
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Responsibility</p>
            <p className="mt-3 leading-relaxed">
              Please enjoy Velora responsibly. 18+ only.
              <br />
              Velora Vodka is a registered trademark. © 2026
            </p>
          </div>
        </div>

        {/* Competition Creator Credit Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-8 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p className="order-2 sm:order-1">© 2026 Velora Vodka. All rights reserved.</p>
          <div className="order-1 flex flex-col items-center gap-1.5 sm:order-2 sm:flex-row sm:gap-2">
            <span>
              Designed & Developed by{" "}
              <a
                href="https://vian-pandya-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Vian Pandya
              </a>
            </span>
            <span className="hidden sm:inline">·</span>
            <a
              href="mailto:vianpandya66@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              vianpandya66@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
