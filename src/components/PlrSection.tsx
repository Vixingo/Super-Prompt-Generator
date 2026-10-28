import { licenseCan, licenseCannot } from "@/data";
import { BuyButton, PriceLadder } from "./ui";
import { ArrowRight, Check, CheckCircle, Shield, Sparkle, Tag, Users, XCircle, Zap } from "./Icons";
import { PRICE } from "@/lib/site";

const plays = [
  {
    n: "01",
    title: "Put your name on it",
    copy: "Swap the name, colours and links. Add your logo to the tool, the guide and the cover art.",
    icon: Sparkle,
  },
  {
    n: "02",
    title: "Choose your price",
    copy: "Sell it as a low-ticket offer or a premium bundle. Your price, your positioning, your revenue.",
    icon: Tag,
  },
  {
    n: "03",
    title: "Sell it anywhere",
    copy: "Your website, email list, shop, paid bundle, course or membership. One asset, multiple paths.",
    icon: Users,
  },
];

export default function PlrSection() {
  return (
    <section id="plr" className="relative overflow-hidden bg-cream-2 py-18 sm:py-24 lg:py-28">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="wrap relative">
        <div className="relative overflow-hidden rounded-[1.8rem] bg-forest text-cream shadow-lift sm:rounded-[2.2rem]">
          <div aria-hidden className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" />
          <div aria-hidden className="pointer-events-none absolute -top-32 left-1/3 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(215,173,97,0.2),transparent_64%)]" />
          <div className="relative p-6 sm:p-9 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div>
                <span className="eyebrow text-gold-light">The business-in-a-box part</span>
                <h2 className="mt-4 text-[2.1rem] leading-[1.04] text-cream sm:text-[2.65rem] lg:text-[3.05rem]">
                  A tool you can use is nice.
                  <span className="mt-1 block italic text-gold-light">A tool you can sell is a business.</span>
                </h2>
                <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-cream/65 sm:text-[1.02rem]">
                  Most licences tell you what you <em>can&rsquo;t</em> do. This package includes Private Label
                  Rights: customize the tool and materials, add your branding, and sell the finished product
                  to your own customers. No revenue share. No per-seat fees. No waiting for permission.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <BuyButton variant="gold" size="md" location="plr">
                    Own the full package — {PRICE}
                  </BuyButton>
                  <a href="#faq" className="btn px-4 py-3 text-[0.8rem] font-bold text-cream/70 hover:text-cream">
                    Read the licence FAQs <ArrowRight className="size-4" />
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] font-semibold text-cream/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-gold-light" /> Rebrand included
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-gold-light" /> Sell as your own
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-gold-light" /> Keep your revenue
                  </span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm lg:mr-1">
                <div className="relative rotate-[1.2deg] rounded-2xl border border-forest/10 bg-paper p-5 text-forest shadow-[0_35px_70px_-30px_rgba(0,0,0,0.55)] sm:p-6">
                  <div className="flex items-center justify-between border-b border-forest/12 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 place-items-center rounded-md bg-forest text-gold">
                        <Shield className="size-3.5" />
                      </span>
                      <div>
                        <p className="text-[0.55rem] font-extrabold tracking-[0.14em] text-forest/40 uppercase">Licence summary</p>
                        <p className="font-display text-[0.95rem] leading-none font-semibold">Private Label Rights</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-gold/20 px-2 py-1 text-[0.5rem] font-extrabold tracking-[0.08em] text-gold-deep uppercase">Included</span>
                  </div>

                  <div className="mt-4">
                    <p className="text-[0.55rem] font-extrabold tracking-[0.14em] text-forest/40 uppercase">Licensee</p>
                    <p className="mt-1 border-b border-dashed border-forest/25 pb-1.5 font-display text-[1.2rem] italic text-forest/70">
                      Your name here
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {[
                      "Rebrand the tool & materials",
                      "Sell your finished version",
                      "Bundle with paid offers",
                      "Use in courses & memberships",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[0.76rem] font-semibold text-forest/75">
                        <CheckCircle className="size-3.5 shrink-0 text-forest-3" /> {item}
                      </li>
                    ))}
                    <li className="flex items-center gap-2 border-t border-forest/10 pt-2.5 text-[0.76rem] font-semibold text-forest/40">
                      <XCircle className="size-3.5 shrink-0 text-clay/80" /> Pass PLR rights to buyers
                    </li>
                  </ul>

                  <div className="mt-4 flex items-center justify-between rounded-lg bg-forest px-3 py-2.5 text-cream">
                    <span className="text-[0.6rem] font-extrabold tracking-[0.1em] text-gold-light/80 uppercase">Commercial use</span>
                    <span className="flex items-center gap-1 text-[0.68rem] font-bold"><Check className="size-3.5 text-gold-light" /> Approved</span>
                  </div>
                </div>

                <div className="absolute -right-3 -bottom-4 grid size-24 rotate-[-9deg] place-content-center rounded-full border-[3px] border-double border-gold-deep/60 bg-cream text-center shadow-lg sm:-right-5 sm:size-28">
                  <Sparkle className="mx-auto size-3.5 text-gold-deep" />
                  <span className="font-display text-[0.88rem] leading-tight font-semibold text-forest">YOUR<br />BRAND</span>
                  <span className="mt-0.5 text-[0.42rem] font-extrabold tracking-[0.12em] text-forest/45 uppercase">Ready to ship</span>
                </div>
              </div>
            </div>

            <div className="mt-11 grid gap-6 border-t border-cream/12 pt-7 sm:grid-cols-3 sm:gap-8">
              {plays.map(({ n, title, copy, icon: Icon }) => (
                <div key={n}>
                  <div className="flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-lg border border-cream/15 bg-cream/5 text-gold-light">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-display text-[1rem] text-cream/25">{n}</span>
                  </div>
                  <h3 className="mt-3 font-sans text-[0.9rem] font-extrabold tracking-tight text-cream">{title}</h3>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-cream/55">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <span className="eyebrow text-gold-deep">Rights, in plain English</span>
            <h3 className="mt-3 text-[1.7rem] leading-tight text-forest sm:text-[2rem]">
              Know exactly what
              <span className="italic-serif text-gold-deep"> you&rsquo;re allowed to do.</span>
            </h3>
            <p className="mt-3 text-[0.86rem] leading-relaxed text-forest/58">
              No legal fog. Here&rsquo;s the short version of the licence included with your purchase. The
              full terms ship with the product so you can check every detail before you sell.
            </p>
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-forest/12 bg-paper/70 p-3.5">
              <Zap className="mt-0.5 size-4 shrink-0 text-gold-deep" />
              <p className="text-[0.72rem] leading-relaxed text-forest/55">
                Your customers receive personal-use rights. Check each marketplace&rsquo;s digital-product
                rules before listing your version there.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-forest/12 bg-paper p-5">
              <div className="flex items-center gap-2 border-b border-forest/10 pb-3">
                <CheckCircle className="size-[1.1rem] text-forest-3" />
                <h4 className="font-sans text-[0.8rem] font-extrabold tracking-[0.06em] text-forest uppercase">You can</h4>
              </div>
              <ul className="mt-3 space-y-2.5">
                {licenseCan.map((item) => (
                  <li key={item} className="flex gap-2 text-[0.79rem] leading-snug text-forest/72">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-forest-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-forest/12 bg-paper/60 p-5">
              <div className="flex items-center gap-2 border-b border-forest/10 pb-3">
                <XCircle className="size-[1.1rem] text-clay" />
                <h4 className="font-sans text-[0.8rem] font-extrabold tracking-[0.06em] text-forest uppercase">You can&rsquo;t</h4>
              </div>
              <ul className="mt-3 space-y-2.5">
                {licenseCannot.map((item) => (
                  <li key={item} className="flex gap-2 text-[0.79rem] leading-snug text-forest/62">
                    <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-clay/70" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-forest/12 bg-paper px-5 py-5 sm:flex-row sm:px-7">
          <div className="flex items-center gap-4">
            <span className="hidden size-12 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold-deep sm:grid">
              <Tag className="size-5" />
            </span>
            <div>
              <p className="font-display text-[1.2rem] leading-tight text-forest sm:text-[1.35rem]">
                The tool, the guide, the licence — <span className="italic text-gold-deep">and the marketing</span>.
              </p>
              <p className="mt-1 text-[0.74rem] font-semibold text-forest/45">One payment today: {PRICE}. Price rises with every sale.</p>
            </div>
          </div>
          <div className="flex w-full items-center gap-5 sm:w-auto">
            <PriceLadder className="hidden w-36 sm:block" />
            <BuyButton variant="forest" size="md" location="plr-footer" className="w-full sm:w-auto">
              Get instant access
            </BuyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
