import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { FINAL_PRICE, navLinks, PRICE } from "@/lib/site";
import { BuyButton } from "./ui";
import { Menu, Sparkle, X, Check } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="relative z-50 overflow-hidden bg-forest text-cream">
        <div className="wrap flex min-h-10 items-center justify-center gap-2.5 py-2 text-center text-[0.7rem] font-semibold tracking-[0.02em] sm:text-[0.76rem]">
          <span className="pulse-dot hidden size-1.5 shrink-0 rounded-full bg-gold sm:block" />
          <span className="text-gold-light">Dime sale live:</span>
          <span className="text-cream/85">
            <span className="sm:hidden">today {PRICE}, then rises to {FINAL_PRICE}</span>
            <span className="hidden sm:inline">today {PRICE} — the price rises with every sale up to {FINAL_PRICE}.</span>
          </span>
          <a href="#included" className="hidden shrink-0 items-center gap-1 font-bold text-gold-light underline decoration-gold/40 underline-offset-4 hover:text-cream md:inline-flex">
            See what&rsquo;s included
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-forest/10 bg-cream/92 shadow-[0_10px_30px_-24px_rgba(8,37,29,0.55)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream/80 backdrop-blur-sm",
        )}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="My AI Super Prompt Generator home">
            <span className="relative grid size-10 place-items-center rounded-xl bg-forest text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <Sparkle className="size-5 transition-transform duration-500 group-hover:rotate-90" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[1.02rem] font-semibold tracking-tight text-forest">
                My AI Super Prompt
              </span>
              <span className="mt-1 flex items-baseline gap-1.5">
                <span className="font-display text-[1.02rem] font-semibold tracking-tight text-gold-deep">
                  Generator
                </span>
                <span className="rounded-sm bg-forest/8 px-1.5 py-0.5 text-[0.5rem] font-extrabold tracking-[0.14em] text-forest/60 uppercase">
                  PLR edition
                </span>
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.8rem] font-bold text-forest/65 transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <BuyButton variant="forest" size="sm" location="header" className="hidden sm:inline-flex">
              Get instant access
            </BuyButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest/5 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col bg-cream p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-forest">Explore the offer</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full border border-forest/15 text-forest"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-forest/10 py-4 font-display text-xl text-forest"
                >
                  {link.label}
                  <span className="text-[0.65rem] font-sans font-bold text-forest/35">0{i + 1}</span>
                </a>
              ))}
            </nav>
            <div className="mt-7 space-y-3">
              <BuyButton variant="forest" size="md" className="w-full" location="mobile-menu">
                Get instant access — {PRICE}
              </BuyButton>
              <p className="flex items-center justify-center gap-2 text-[0.7rem] font-semibold text-forest/55">
                <Check className="size-3.5 text-gold-deep" /> Instant download · PLR included
              </p>
            </div>
            <div className="mt-auto rounded-2xl bg-forest p-5 text-cream">
              <p className="text-[0.65rem] font-extrabold tracking-[0.16em] text-gold-light uppercase">Limited dime sale</p>
              <p className="mt-2 font-display text-lg leading-snug">
                Today {PRICE}. It rises with every sale to {FINAL_PRICE}.
              </p>
              <a href="#included" onClick={() => setOpen(false)} className="mt-3 inline-block text-[0.72rem] font-bold text-gold-light underline underline-offset-4">
                What&rsquo;s in the box?
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
