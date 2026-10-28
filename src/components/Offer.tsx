import { bonuses, includedMain } from "@/data";
import { FINAL_PRICE, PRICE } from "@/lib/site";
import { BuyButton, PriceLadder } from "./ui";
import { productImages } from "@/lib/images";
import {
  BookOpen,
  Check,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Layers,
  Lock,
  Shield,
  Sparkle,
  Tag,
  XCircle,
  Zap,
} from "./Icons";

const plans = [
  {
    label: "DIY",
    name: "Build it from scratch",
    price: "Design + dev fees",
    tone: "muted" as const,
    features: [
      "Weeks to months of build time",
      "Pay a designer and a developer",
      "Write every prompt from zero",
      "Create all the marketing assets",
      "No licence or rights included",
    ],
  },
  {
    label: "Subscription",
    name: "White-label an AI tool",
    price: "Monthly fee",
    tone: "muted" as const,
    features: [
      "Days to weeks of setup",
      "Recurring monthly cost",
      "Limited branding control",
      "Platform's prompt logic only",
      "No PLR or resale rights",
    ],
  },
  {
    label: "This package",
    name: "The PLR shortcut",
    price: `${PRICE} today`,
    tone: "highlight" as const,
    features: [
      "Launch minutes after download",
      "One-time payment, no subscription",
      "Full rebrand with your name & links",
      "Eight categories + custom formats",
      "PLR licence to sell as your own",
    ],
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-paper py-18 sm:py-24 lg:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow no-rule justify-center text-gold-deep">The shortcut, side by side</span>
          <h2 className="mt-4 text-[2.1rem] leading-[1.06] text-forest sm:text-[2.6rem] lg:text-[3rem]">
            You could build it from scratch.
            <span className="mt-1 block italic-serif text-gold-deep">Or you could launch this afternoon.</span>
          </h2>
          <p className="mt-4 text-[0.96rem] leading-relaxed text-forest/60 sm:text-[1.02rem]">
            A branded tool normally means a build, a subscription or a long wait. This is a finished
            package with the rights to put your name on it.
          </p>
        </div>

        <div className="mt-11 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const highlight = plan.tone === "highlight";
            return (
              <div
                key={plan.name}
                className={
                  highlight
                    ? "relative overflow-hidden rounded-2xl bg-forest p-6 text-cream shadow-lift sm:p-7"
                    : "relative rounded-2xl border border-forest/12 bg-cream/50 p-6 text-forest sm:p-7"
                }
              >
                {highlight && (
                  <>
                    <div aria-hidden className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" />
                    <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 size-44 rounded-full bg-gold/15 blur-2xl" />
                    <span className="absolute top-0 right-0 rounded-bl-xl bg-gold px-3 py-1.5 text-[0.55rem] font-extrabold tracking-[0.12em] text-forest uppercase">
                      Best shortcut
                    </span>
                  </>
                )}
                <div className="relative">
                  <span
                    className={
                      highlight
                        ? "text-[0.6rem] font-extrabold tracking-[0.16em] text-gold-light uppercase"
                        : "text-[0.6rem] font-extrabold tracking-[0.16em] text-forest/38 uppercase"
                    }
                  >
                    {plan.label}
                  </span>
                  <h3 className={highlight ? "mt-2 font-display text-[1.45rem] leading-tight text-cream" : "mt-2 font-display text-[1.45rem] leading-tight text-forest"}>
                    {plan.name}
                  </h3>
                  <p className={highlight ? "mt-1.5 text-[0.78rem] font-bold text-gold-light" : "mt-1.5 text-[0.78rem] font-bold text-forest/45"}>{plan.price}</p>

                  <ul className={highlight ? "mt-5 space-y-2.5 border-t border-cream/12 pt-5" : "mt-5 space-y-2.5 border-t border-forest/10 pt-5"}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2 text-[0.8rem] leading-snug">
                        {highlight ? (
                          <Check className="mt-0.5 size-3.5 shrink-0 text-gold-light" />
                        ) : (
                          <span className="mt-[0.42rem] size-1 shrink-0 rounded-full bg-forest/25" />
                        )}
                        <span className={highlight ? "font-medium text-cream/80" : "text-forest/55"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {highlight ? (
                    <BuyButton variant="gold" size="md" location="comparison" className="mt-6 w-full">
                      Get the shortcut — {PRICE}
                    </BuyButton>
                  ) : (
                    <p className="mt-6 flex items-center gap-1.5 text-[0.68rem] font-bold text-forest/35">
                      <Clock className="size-3.5" /> Not the shortcut
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-center text-[0.68rem] font-medium text-forest/38">
          Comparison is illustrative. Build time, fees and third-party platform rules vary.
        </p>
      </div>
    </section>
  );
}

const guaranteePoints = [
  { icon: Zap, label: "Instant digital delivery" },
  { icon: Shield, label: "Private Label Rights included" },
  { icon: Lock, label: "Secure checkout on WarriorPlus" },
];

export default function OfferSection() {
  return (
    <section id="included" className="relative overflow-hidden border-y border-forest/10 bg-cream py-18 sm:py-24 lg:py-28">
      <div aria-hidden className="dot-grid pointer-events-none absolute top-0 right-0 h-96 w-96 opacity-30 [mask-image:radial-gradient(black,transparent_70%)]" />
      <div className="wrap relative">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-deep">Everything in the box</span>
            <h2 className="mt-4 text-[2.15rem] leading-[1.04] text-forest sm:text-[2.7rem] lg:text-[3.1rem]">
              A complete product.
              <span className="italic-serif text-gold-deep"> Not a promise of one.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[0.96rem] leading-relaxed text-forest/62 sm:text-[1.02rem]">
              The tool, the guide, the rights and the marketing to launch your own version. Everything is
              delivered digitally, so you can be working through it in the next few minutes.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            {["HTML tool", "PDF + Word", "PLR licence", "Promo kit"].map((tag) => (
              <span key={tag} className="rounded-full border border-forest/15 bg-paper px-3 py-1.5 text-[0.62rem] font-extrabold tracking-[0.03em] text-forest/55">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.83fr_1.17fr] lg:gap-6">
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-2xl border border-forest/12 bg-[linear-gradient(150deg,#faf5e9,#eee3cd)] p-3 shadow-soft sm:p-4">
              <div aria-hidden className="dot-grid absolute inset-0 opacity-35" />
              <span className="absolute top-5 left-5 z-10 rounded-full bg-forest px-2.5 py-1 text-[0.52rem] font-extrabold tracking-[0.12em] text-gold-light uppercase">
                PLR edition
              </span>
              <img
                src={productImages.bundle}
                alt="The complete My AI Super Prompt Generator package: cover, browser tool and guide"
                width={1024}
                height={768}
                className="relative z-[1] w-full mix-blend-multiply"
                loading="lazy"
              />
              <div className="relative z-10 mt-1 flex items-center justify-between rounded-xl border border-forest/10 bg-paper/85 px-3.5 py-3 backdrop-blur-sm">
                <div>
                  <p className="text-[0.55rem] font-extrabold tracking-[0.12em] text-forest/40 uppercase">Complete package</p>
                  <p className="mt-0.5 font-display text-[1.05rem] leading-none font-semibold text-forest">Yours to keep & sell</p>
                </div>
                <Sparkle className="size-5 text-gold-deep" />
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              {guaranteePoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-lg border border-forest/10 bg-paper/70 px-3.5 py-2.5">
                  <Icon className="size-4 shrink-0 text-gold-deep" />
                  <span className="text-[0.72rem] font-bold text-forest/60">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-1 items-end">
              <div className="w-full rounded-xl border border-gold-deep/30 bg-gold/15 p-4">
                <div className="flex items-start gap-2.5">
                  <BookOpen className="mt-0.5 size-[1.1rem] shrink-0 text-gold-deep" />
                  <div>
                    <p className="text-[0.63rem] font-extrabold tracking-[0.1em] text-gold-deep uppercase">Optional checkout upgrade</p>
                    <p className="mt-1 text-[0.82rem] font-bold leading-snug text-forest">
                      Add <span className="italic-serif">50 Ways To Get More From Your AI Usage Limit</span> for +{PRICE}
                    </p>
                    <p className="mt-1 text-[0.7rem] leading-relaxed text-forest/55">
                      A rebrandable 150-page guide in PDF and Word — with PLR rights. Offered at checkout, completely optional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-forest/12 bg-paper p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-forest/10 pb-3">
                <h3 className="font-sans text-[0.75rem] font-extrabold tracking-[0.12em] text-forest/55 uppercase">The core package</h3>
                <span className="text-[0.6rem] font-bold text-forest/35">2 essentials</span>
              </div>
              <div className="divide-y divide-forest/8">
                {includedMain.map(({ title, tag, description, icon: Icon }) => (
                  <div key={title} className="flex gap-3.5 py-3.5 first:pt-4 last:pb-0">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-forest text-gold">
                      <Icon className="size-[1.05rem]" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-sans text-[0.86rem] font-extrabold text-forest">{title}</h4>
                        <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[0.5rem] font-extrabold tracking-[0.06em] text-gold-deep uppercase">{tag}</span>
                      </div>
                      <p className="mt-1 text-[0.77rem] leading-relaxed text-forest/62">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-forest/12 bg-cream-2/55 p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-forest/10 pb-3">
                <h3 className="flex items-center gap-2 font-sans text-[0.75rem] font-extrabold tracking-[0.12em] text-forest/55 uppercase">
                  <Tag className="size-3.5 text-gold-deep" /> Plus 5 included bonuses
                </h3>
                <span className="rounded-full bg-forest px-2.5 py-1 text-[0.52rem] font-extrabold tracking-[0.08em] text-gold-light uppercase">Free with your order</span>
              </div>
              <div className="mt-1 grid sm:grid-cols-2 sm:gap-x-5">
                {bonuses.map(({ n, title, description, icon: Icon }) => (
                  <div key={n} className="flex gap-2.5 border-b border-forest/8 py-3 last:border-0 sm:last:border-b sm:[&:nth-last-child(2)]:border-0">
                    <Icon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                    <div>
                      <p className="text-[0.76rem] font-extrabold leading-snug text-forest">
                        <span className="mr-1.5 font-display text-[0.72rem] text-gold-deep/70">{n}</span>
                        {title}
                      </p>
                      <p className="mt-1 text-[0.69rem] leading-relaxed text-forest/58">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[1.6rem] bg-forest text-cream shadow-lift sm:rounded-[2rem]">
          <div aria-hidden className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-24 size-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
            <div>
              <span className="eyebrow text-gold-light">The complete package</span>
              <h3 className="mt-3 max-w-xl text-[1.8rem] leading-[1.08] text-cream sm:text-[2.2rem]">
                Everything above. One payment.
                <span className="italic-serif text-gold-light"> Yours for good.</span>
              </h3>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] font-semibold text-cream/55">
                {["No subscription", "No API fees", "No revenue share", "Rebrand + resell rights"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-gold-light" /> {item}
                  </span>
                ))}
              </div>
              <PriceLadder dark className="mt-6 max-w-sm" />
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[0.62rem] font-semibold text-cream/35">
                <Lock className="size-3.5" /> Digital delivery · 100% secure checkout · Processed by WarriorPlus
              </div>
            </div>

            <div className="w-full rounded-2xl border border-cream/20 bg-paper p-5 text-forest shadow-[0_28px_50px_-28px_rgba(0,0,0,0.6)] sm:w-[19rem]">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-forest/[0.06] px-2.5 py-1 text-[0.55rem] font-extrabold tracking-[0.1em] text-forest/50 uppercase">Today&rsquo;s price</span>
                <span className="text-[0.58rem] font-bold text-clay">Rises with every sale</span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-[3.4rem] leading-none font-semibold text-forest">{PRICE}</span>
                <span className="mb-1.5 text-[0.7rem] font-semibold text-forest/38">
                  one-time
                  <span className="block text-[0.6rem] text-forest/30">final tier {FINAL_PRICE}</span>
                </span>
              </div>
              <BuyButton variant="gold" size="md" location="offer-card" className="mt-4 w-full">
                Get instant access
              </BuyButton>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[0.6rem] font-semibold text-forest/40">
                <Lock className="size-3" /> Instant access after checkout
              </p>
              <div className="mt-3 border-t border-forest/10 pt-3">
                <div className="flex items-center justify-between text-[0.6rem] font-semibold text-forest/40">
                  <span className="inline-flex items-center gap-1"><Download className="size-3" /> Tool</span>
                  <span className="inline-flex items-center gap-1"><FileText className="size-3" /> Guide</span>
                  <span className="inline-flex items-center gap-1"><Shield className="size-3" /> PLR</span>
                  <span className="inline-flex items-center gap-1"><Layers className="size-3" /> Bonuses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { icon: CheckCircle, t: "Instant access", d: "Download the files right after checkout." },
            { icon: FileText, t: "Editable formats", d: "Word docs, a PDF guide and a plain HTML tool." },
            { icon: XCircle, t: "No lock-in", d: "One payment. No tool logins or recurring charges." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-2.5 rounded-xl border border-forest/10 bg-paper/60 px-4 py-3">
              <Icon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
              <p className="text-[0.72rem] leading-snug text-forest/55">
                <span className="block font-extrabold text-forest/80">{t}</span>
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
