import { AFFILIATE_URL, FINAL_PRICE, PRICE, navLinks, PRODUCT_NAME } from "@/lib/site";
import { BuyButton, PriceLadder } from "./ui";
import { ArrowRight, ArrowUpRight, Check, Lock, Shield, Sparkle } from "./Icons";
import { productImages } from "@/lib/images";

export function FinalCTA() {
  return (
    <section
      id="get-access"
      data-final-cta
      className="relative overflow-hidden bg-[#08271f] py-18 text-cream sm:py-24 lg:py-28"
    >
      <div aria-hidden className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/3 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(215,173,97,0.22),transparent_62%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
        <span className="absolute top-1/2 right-4 -translate-y-1/2 font-display text-[26rem] leading-none font-semibold text-cream/[0.035] select-none">
          5
        </span>
      </div>

      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-[0.64rem] font-extrabold tracking-[0.13em] text-gold-light uppercase">
            <span className="pulse-dot size-1.5 rounded-full bg-gold" /> The {PRICE} tier is live
          </span>
          <h2 className="mt-5 text-[2.35rem] leading-[1.02] text-cream sm:text-[3rem] lg:text-[3.5rem]">
            Your next product is already built.
            <span className="mt-1 block italic-serif text-gold-light">Put your name on it.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-cream/62 sm:text-[1.03rem]">
            Get the browser tool, the practical guide, the marketing assets and the Private Label Rights
            to sell your own version. No subscription. No API bill. Nothing to build from scratch.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BuyButton variant="gold" size="lg" location="final-cta">
              Get instant access — {PRICE}
            </BuyButton>
            <a href="#demo" className="btn px-5 py-3.5 text-[0.85rem] font-bold text-cream/70 hover:text-cream">
              Try the demo first <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] font-semibold text-cream/45">
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-gold-light" /> Instant digital access</span>
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-gold-light" /> One-time payment</span>
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-gold-light" /> PLR licence included</span>
          </div>

          <p className="mt-6 max-w-lg text-[0.66rem] leading-relaxed text-cream/30">
            Price rises with every sale until it reaches {FINAL_PRICE}. Price shown at checkout is the
            current tier. Digital product with instant access; all files and licence terms are supplied by
            Scalable PLR Products.
          </p>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute -inset-2 rounded-[2rem] border border-cream/10" />
          <div className="relative rounded-2xl bg-paper p-5 text-forest shadow-lift sm:p-6">
            <div className="flex items-center justify-between border-b border-forest/10 pb-3.5">
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-forest text-gold">
                  <Sparkle className="size-4" />
                </span>
                <div>
                  <p className="font-sans text-[0.78rem] font-extrabold leading-none text-forest">Order summary</p>
                  <p className="mt-1 text-[0.55rem] font-bold tracking-[0.1em] text-forest/35 uppercase">PLR edition</p>
                </div>
              </div>
              <span className="rounded-full bg-forest/[0.06] px-2 py-1 text-[0.52rem] font-extrabold tracking-[0.08em] text-forest/45 uppercase">One-time</span>
            </div>

            <div className="flex gap-3 py-4">
              <div className="w-20 shrink-0 overflow-hidden rounded-lg border border-forest/10 bg-cream-2/60">
                <img
                  src={productImages.bundle}
                  alt="My AI Super Prompt Generator package"
                  width={160}
                  height={120}
                  className="h-full w-full object-cover mix-blend-multiply"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-sans text-[0.83rem] font-extrabold leading-snug text-forest">{PRODUCT_NAME}</p>
                <p className="mt-1 text-[0.65rem] leading-relaxed text-forest/45">
                  Tool + guide + PLR licence + 5 marketing bonuses
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1 text-[0.6rem] font-bold text-forest-3">
                  <Check className="size-3" /> Instant download
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-cream/70 px-3.5 py-3">
              <div className="flex items-center justify-between text-[0.68rem]">
                <span className="font-semibold text-forest/50">Standalone browser tool</span>
                <span className="font-bold text-forest/60">Included</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[0.68rem]">
                <span className="font-semibold text-forest/50">Guide — PDF + Word</span>
                <span className="font-bold text-forest/60">Included</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[0.68rem]">
                <span className="font-semibold text-forest/50">Private Label Rights</span>
                <span className="font-bold text-forest-3">Included</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[0.68rem]">
                <span className="font-semibold text-forest/50">Marketing & promo assets</span>
                <span className="font-bold text-forest-3">Included</span>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <span className="text-[0.55rem] font-extrabold tracking-[0.12em] text-forest/35 uppercase">Today&rsquo;s total</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[2.8rem] leading-none font-semibold text-forest">{PRICE}</span>
                  <span className="text-[0.66rem] font-semibold text-forest/35">then {FINAL_PRICE} final tier</span>
                </div>
              </div>
              <span className="grid size-9 place-items-center rounded-full border border-forest/12 text-gold-deep">
                <Lock className="size-4" />
              </span>
            </div>

            <BuyButton variant="forest" size="md" location="final-summary" className="mt-4 w-full">
              Get instant access
            </BuyButton>
            <PriceLadder className="mt-4" />
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.6rem] font-semibold text-forest/38">
              <Lock className="size-3" /> Secure checkout via WarriorPlus · Instant delivery
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 border-t border-forest/10 pt-3 text-[0.56rem] font-bold text-forest/40">
              <span className="inline-flex items-center gap-1"><Shield className="size-3" /> PLR included</span>
              <span className="size-1 rounded-full bg-forest/15" />
              <span>No subscription</span>
              <span className="size-1 rounded-full bg-forest/15" />
              <span>Yours to keep</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-paper pt-14 pb-24 text-forest sm:pb-14">
      <div className="wrap">
        <div className="grid gap-10 border-b border-forest/10 pb-10 lg:grid-cols-[1.4fr_0.6fr_0.6fr] lg:gap-14">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid size-10 place-items-center rounded-xl bg-forest text-gold">
                <Sparkle className="size-5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[1.02rem] font-semibold text-forest">My AI Super Prompt</span>
                <span className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-[1.02rem] font-semibold text-gold-deep">Generator</span>
                  <span className="rounded-sm bg-forest/8 px-1.5 py-0.5 text-[0.5rem] font-extrabold tracking-[0.14em] text-forest/55 uppercase">PLR edition</span>
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-[0.8rem] leading-relaxed text-forest/55">
              A standalone prompt-building tool plus a Private Label Rights package. Create better AI
              briefs locally, then rebrand the tool and sell your own version.
            </p>
            <BuyButton variant="forest" size="sm" location="footer" className="mt-5">
              Get instant access — {PRICE}
            </BuyButton>
            <p className="mt-3 text-[0.62rem] font-semibold text-forest/35">Instant download · One-time payment · Price rises to {FINAL_PRICE}</p>
          </div>

          <div>
            <p className="text-[0.6rem] font-extrabold tracking-[0.14em] text-forest/35 uppercase">This page</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[0.78rem] font-semibold text-forest/60 transition-colors hover:text-forest">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.6rem] font-extrabold tracking-[0.14em] text-forest/35 uppercase">The offer</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#included" className="text-[0.78rem] font-semibold text-forest/60 hover:text-forest">What&rsquo;s included</a></li>
              <li><a href="#plr" className="text-[0.78rem] font-semibold text-forest/60 hover:text-forest">PLR licence</a></li>
              <li><a href="#demo" className="text-[0.78rem] font-semibold text-forest/60 hover:text-forest">Prompt demo</a></li>
              <li><a href="#faq" className="text-[0.78rem] font-semibold text-forest/60 hover:text-forest">FAQ</a></li>
              <li>
                <a href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="inline-flex items-center gap-1 text-[0.78rem] font-bold text-gold-deep hover:text-forest">
                  Visit the offer page <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="disclosure" className="grid gap-6 border-b border-forest/10 py-8 md:grid-cols-3">
          <div>
            <h3 className="font-sans text-[0.62rem] font-extrabold tracking-[0.14em] text-forest/45 uppercase">Affiliate disclosure</h3>
            <p className="mt-2 text-[0.7rem] leading-relaxed text-forest/58">
              This is an independent promotional page for My AI Super Prompt Generator. We may earn a
              commission if you buy through the links on this page, at no extra cost to you. That doesn&rsquo;t
              change the price you pay or the terms of the product. The product is created and fulfilled by
              Scalable PLR Products, not by this page. Product access, fulfilment, support and any refund
              terms are set and handled by the vendor; the refund policy offered, if any, is shown at checkout.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-[0.62rem] font-extrabold tracking-[0.14em] text-forest/45 uppercase">Earnings disclaimer</h3>
            <p className="mt-2 text-[0.7rem] leading-relaxed text-forest/58">
              No income is guaranteed. This is a tool and licence package — not a business opportunity, an
              investment or a get-rich-quick system. Any results depend on your effort, audience, pricing,
              promotion and the platform you sell through. Nothing here should be read as a promise of sales
              or profit.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-[0.62rem] font-extrabold tracking-[0.14em] text-forest/45 uppercase">AI &amp; privacy</h3>
            <p className="mt-2 text-[0.7rem] leading-relaxed text-forest/58">
              The prompt generator runs locally in your browser and does not make AI calls. You paste its
              output into an AI service of your choice, whose terms and usage limits apply. The demo on this
              page also runs locally; nothing you type into it is sent to us. Third-party product names are
              trademarks of their respective owners.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.66rem] font-medium text-forest/35">
            © {new Date().getFullYear()} My AI Super Prompt Generator. Product and PLR assets by Scalable PLR
            Products. All trademarks belong to their respective owners.
          </p>
          <div className="flex items-center gap-4 text-[0.66rem] font-semibold text-forest/40">
            <a href="#faq" className="hover:text-forest">Questions</a>
            <a href="#disclosure" className="hover:text-forest">Disclosures</a>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-forest">
              Back to top <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
