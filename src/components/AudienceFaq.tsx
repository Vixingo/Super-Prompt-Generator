import { useState } from "react";
import { cn } from "@/utils/cn";
import { audience, faqs } from "@/data";
import { AFFILIATE_URL, PRICE } from "@/lib/site";
import { BuyButton } from "./ui";
import { ArrowRight, Check, ChevronDown, Clock, Shield, Sparkle, XCircle } from "./Icons";

const fitFor = [
  "You want a finished digital product to brand and sell",
  "You already use AI and want better briefs from it",
  "You're happy to download a file and follow a short guide",
  "You understand that selling anything takes some effort",
];

const notFor = [
  "You want a hosted SaaS with user accounts and logins",
  "You expect a passive business with no promotion",
  "You need hands-on custom development included",
  "You want to pass PLR rights on to your own buyers",
];

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-cream-2/60 py-18 sm:py-24 lg:py-28">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="wrap relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow no-rule justify-center text-gold-deep">Who this is for</span>
          <h2 className="mt-4 text-[2.1rem] leading-[1.05] text-forest sm:text-[2.6rem] lg:text-[3rem]">
            Built for people who sell ideas.
            <span className="mt-1 block italic-serif text-gold-deep">Not just people who use AI.</span>
          </h2>
          <p className="mt-4 text-[0.96rem] leading-relaxed text-forest/60 sm:text-[1.02rem]">
            If you have an audience, a shop, a client list or an offer to grow, this package gives you a
            useful asset you can brand and put to work.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-xl border border-forest/10 bg-paper p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-deep/35 hover:shadow-soft"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-forest/[0.055] text-gold-deep transition-colors group-hover:bg-forest group-hover:text-gold-light">
                <Icon className="size-[1.05rem]" />
              </span>
              <h3 className="mt-3.5 font-sans text-[0.9rem] font-extrabold tracking-tight text-forest">{title}</h3>
              <p className="mt-1.5 text-[0.79rem] leading-relaxed text-forest/55">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-forest/12 bg-paper p-5 sm:p-6 lg:grid-cols-[1fr_1fr_auto] lg:items-center lg:gap-8">
          <div>
            <p className="flex items-center gap-2 text-[0.65rem] font-extrabold tracking-[0.12em] text-forest/40 uppercase">
              <Sparkle className="size-3.5 text-gold-deep" /> A good fit if
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {fitFor.map((item) => (
                <li key={item} className="flex gap-2 text-[0.78rem] leading-snug text-forest/68">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-forest-3" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-forest/10 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p className="flex items-center gap-2 text-[0.65rem] font-extrabold tracking-[0.12em] text-forest/40 uppercase">
              <XCircle className="size-3.5 text-clay/80" /> Probably not for you if
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {notFor.map((item) => (
                <li key={item} className="flex gap-2 text-[0.78rem] leading-snug text-forest/60">
                  <span className="mt-[0.42rem] size-1 shrink-0 rounded-full bg-clay/60" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-stretch gap-2 border-t border-forest/10 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <span className="text-[0.6rem] font-extrabold tracking-[0.12em] text-forest/35 uppercase">Still a fit?</span>
            <BuyButton variant="forest" size="sm" location="audience">
              Get access — {PRICE}
            </BuyButton>
            <a href="#included" className="text-center text-[0.68rem] font-bold text-forest/45 underline underline-offset-4 hover:text-forest">
              Review the package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-18 sm:py-24 lg:py-28">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="eyebrow text-gold-deep">Before you order</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.04] text-forest sm:text-[2.6rem]">
              Straight answers,
              <span className="italic-serif text-gold-deep"> no fine-print games.</span>
            </h2>
            <p className="mt-4 max-w-md text-[0.9rem] leading-relaxed text-forest/58">
              Everything you need to know about the tool, the files, the licence and what happens after
              checkout. Still unsure? The licence details are included with the product.
            </p>

            <div className="mt-6 max-w-sm rounded-2xl border border-forest/12 bg-paper p-5">
              <div className="flex items-center gap-2 text-[0.6rem] font-extrabold tracking-[0.12em] text-forest/40 uppercase">
                <Shield className="size-3.5 text-gold-deep" /> Secure checkout
              </div>
              <p className="mt-2 font-display text-[1.15rem] leading-tight text-forest">
                One payment of {PRICE}. Instant access.
              </p>
              <p className="mt-1.5 text-[0.72rem] leading-relaxed text-forest/50">
                Purchases are processed securely by WarriorPlus, the digital-product platform serving
                creators since 2006.
              </p>
              <BuyButton variant="forest" size="sm" location="faq" className="mt-4 w-full">
                Get instant access
              </BuyButton>
              <p className="mt-2.5 text-center text-[0.6rem] font-semibold text-forest/35">
                Price rises with every sale · final tier $37
              </p>
            </div>

            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-forest/50 underline decoration-forest/20 underline-offset-4 hover:text-forest"
            >
              Go straight to checkout <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="divide-y divide-forest/10 border-y border-forest/10" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-start justify-between gap-4 py-4 text-left sm:py-5"
                    >
                      <span className={cn("font-sans text-[0.87rem] font-extrabold leading-snug transition-colors sm:text-[0.92rem]", isOpen ? "text-forest" : "text-forest/72")}>
                        {faq.q}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border transition-all duration-200",
                          isOpen ? "rotate-180 border-forest bg-forest text-cream" : "border-forest/15 text-forest/45",
                        )}
                      >
                        <ChevronDown className="size-3.5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    aria-hidden={!isOpen}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="overflow-hidden">
                      <p itemProp="text" className="max-w-2xl pr-8 pb-4 text-[0.84rem] leading-relaxed text-forest/70 sm:pb-5 sm:text-[0.87rem]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const deliverySteps = [
  {
    n: "01",
    time: "Instant",
    title: "Checkout & download",
    copy: "Files are delivered right after payment and stay available in your WarriorPlus purchases.",
  },
  {
    n: "02",
    time: "1 minute",
    title: "Open the tool",
    copy: "Double-click the HTML file. It runs in your browser — no login, no install, no API key.",
  },
  {
    n: "03",
    time: "10 minutes",
    title: "Add your branding",
    copy: "Follow the guide to swap the name, links and colours. Word files are ready to edit normally.",
  },
  {
    n: "04",
    time: "When you're ready",
    title: "Sell it as yours",
    copy: "Use the rebrandable sales letter, emails, social posts and cover art to launch your own offer.",
  },
];

export function DeliverySection() {
  return (
    <section className="border-y border-forest/10 bg-paper py-14 sm:py-16">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-deep">What happens next</span>
            <h2 className="mt-3 text-[1.9rem] leading-[1.06] text-forest sm:text-[2.3rem]">
              From checkout to your own product
              <span className="italic-serif text-gold-deep"> in one sitting.</span>
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-xl border border-forest/12 bg-cream/60 px-4 py-3">
            <Clock className="size-4 text-gold-deep" />
            <p className="text-[0.72rem] leading-snug font-semibold text-forest/55">
              No code. No designer.
              <span className="block font-normal text-forest/40">A short guide walks you through it.</span>
            </p>
          </div>
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((s) => (
            <li key={s.n} className="relative rounded-xl border border-forest/10 bg-cream/45 p-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-[1.4rem] leading-none text-gold-deep/80">{s.n}</span>
                <span className="rounded-full bg-forest/[0.055] px-2 py-0.5 text-[0.52rem] font-extrabold tracking-[0.08em] text-forest/45 uppercase">{s.time}</span>
              </div>
              <h3 className="mt-3 font-sans text-[0.84rem] font-extrabold tracking-tight text-forest">{s.title}</h3>
              <p className="mt-1.5 text-[0.75rem] leading-relaxed text-forest/62">{s.copy}</p>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-xl bg-forest px-4 py-3.5 text-cream sm:flex-row sm:items-center sm:px-5">
          <p className="flex items-center gap-2 text-[0.76rem] font-semibold text-cream/75">
            <Check className="size-4 shrink-0 text-gold-light" />
            All four steps are explained in the guide — plus every marketing asset is already written.
          </p>
          <a href="#included" className="text-[0.72rem] font-bold text-gold-light underline decoration-gold/40 underline-offset-4 hover:text-cream">
            Review everything you get
          </a>
        </div>
      </div>
    </section>
  );
}
