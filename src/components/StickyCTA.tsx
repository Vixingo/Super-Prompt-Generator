import { useEffect, useState } from "react";
import { FINAL_PRICE, PRICE } from "@/lib/site";
import { BuyButton } from "./ui";
import { Sparkle, X } from "./Icons";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [atFinalCta, setAtFinalCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 760);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.querySelector("[data-final-cta]");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setAtFinalCta(entry.isIntersecting));
      },
      { threshold: 0.12 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const show = visible && !dismissed && !atFinalCta;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!show}
    >
      <div className="border-t border-cream/12 bg-forest/97 shadow-[0_-18px_40px_-24px_rgba(8,37,29,0.7)] backdrop-blur-xl">
        <div className="wrap flex items-center justify-between gap-3 py-2.5 sm:py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="hidden size-9 shrink-0 place-items-center rounded-lg bg-gold text-forest sm:grid">
              <Sparkle className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.72rem] font-extrabold text-cream sm:text-[0.82rem]">
                Prompt Generator <span className="text-gold-light">· PLR edition</span>
              </p>
              <p className="truncate text-[0.6rem] font-semibold text-cream/45 sm:text-[0.66rem]">
                Today {PRICE} · rises to {FINAL_PRICE} as sales come in
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <BuyButton variant="gold" size="sm" location="sticky-bar" className="whitespace-nowrap px-3.5 py-2.5 text-[0.72rem] sm:px-5 sm:text-[0.8rem]" withArrow={false}>
              Get instant access
            </BuyButton>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss offer bar"
              className="grid size-7 place-items-center rounded-full text-cream/45 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
