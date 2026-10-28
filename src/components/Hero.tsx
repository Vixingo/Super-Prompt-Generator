import { PRICE, FINAL_PRICE } from "@/lib/site";
import { BuyButton } from "./ui";
import { ArrowDown, Check, Play, Sparkle, Star } from "./Icons";
import { productFacts } from "@/data";
import { productImages } from "@/lib/images";

const ais = ["ChatGPT", "Claude", "Gemini", "Grok", "Copilot", "Perplexity", "DeepSeek"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(215,173,97,0.32),transparent_66%)]"
      />
      <div aria-hidden className="pointer-events-none absolute top-52 -left-40 size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(17,69,54,0.13),transparent_68%)]" />
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-72 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="wrap relative grid items-center gap-12 pt-9 pb-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pt-16 lg:pb-20">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-deep/25 bg-gold/15 px-3.5 py-1.5 text-[0.64rem] font-extrabold tracking-[0.12em] text-gold-deep uppercase sm:text-[0.68rem]">
              <Sparkle className="size-3.5" /> Private Label Rights included
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/12 bg-paper px-3 py-1.5 text-[0.64rem] font-bold text-forest/60 sm:text-[0.68rem]">
              <span className="size-1.5 rounded-full bg-forest/40" /> Instant digital download
            </span>
          </div>

          <h1 className="mt-6 text-[2.6rem] leading-[0.98] font-semibold text-forest sm:text-[3.4rem] lg:text-[3.85rem] xl:text-[4.15rem]">
            Create super prompts.
            <span className="mt-1.5 block text-gold-deep">
              <span className="italic-serif">Then sell the tool</span> as your own.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-forest/72 sm:text-[1.06rem]">
            <strong className="font-bold text-forest">My AI Super Prompt Generator</strong> turns a rough goal
            into a complete, copy-paste brief your AI can actually run with. It works in any browser —{" "}
            <span className="bg-gold/25 px-1 font-semibold text-forest">no API key, no login, no monthly fee</span>.
            Your PLR licence lets you rebrand it, sell it and keep every dollar you charge.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BuyButton variant="forest" size="lg" location="hero">
              Get instant access — {PRICE}
            </BuyButton>
            <a
              href="#demo"
              className="btn btn-ghost group px-5 py-3.5 text-[0.88rem] sm:px-6"
            >
              <span className="grid size-6 place-items-center rounded-full bg-forest/8 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                <Play className="size-4" />
              </span>
              Try the live demo
              <ArrowDown className="size-3.5 text-forest/45" />
            </a>
          </div>

          <p className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.72rem] font-semibold text-forest/52">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-gold-deep" /> One-time payment
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-gold-deep" /> No subscription
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-gold-deep" /> Yours to rebrand
            </span>
          </p>

          <div className="mt-7 flex max-w-md flex-col gap-3 rounded-2xl border border-forest/10 bg-paper/80 p-4 shadow-[0_18px_40px_-34px_rgba(8,37,29,0.55)] backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6">
            <div className="shrink-0">
              <span className="block text-[0.58rem] font-extrabold tracking-[0.16em] text-forest/45 uppercase">
                Today&rsquo;s dime-sale price
              </span>
              <span className="flex items-baseline gap-2">
                <span className="font-display text-3xl leading-none font-semibold text-forest">{PRICE}</span>
                <span className="text-[0.7rem] font-semibold text-forest/40 line-through">{FINAL_PRICE} later</span>
              </span>
            </div>
            <div className="h-px w-full bg-forest/10 sm:h-9 sm:w-px" />
            <p className="text-[0.72rem] leading-snug font-semibold text-forest/60">
              Price rises with every sale.
              <span className="block font-normal text-forest/45">The price you see at checkout is today&rsquo;s tier.</span>
            </p>
          </div>
        </div>

        {/* Product visual */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-x-4 top-10 bottom-0 rounded-[2.6rem] border border-gold-deep/20"
          />
          <div className="relative rounded-[2rem] border border-forest/10 bg-paper/85 p-2.5 shadow-lift backdrop-blur-sm sm:p-3">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#fbf8ef_0%,#f3ead8_100%)]">
              <div aria-hidden className="dot-grid absolute inset-0 opacity-35" />
              <span className="absolute top-4 left-4 z-10 rounded-full bg-forest px-2.5 py-1 text-[0.55rem] font-extrabold tracking-[0.14em] text-gold-light uppercase">
                Tool + guide + licence
              </span>
              <img
                src={productImages.bundle}
                alt="My AI Super Prompt Generator PLR package showing the product cover and the browser-based prompt tool"
                width={1024}
                height={768}
                className="relative z-[1] w-full mix-blend-multiply"
                loading="eager"
                fetchPriority="high"
              />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f3ead8]/85 to-transparent" />
              <p className="absolute inset-x-0 bottom-3.5 z-10 px-4 text-center text-[0.62rem] font-extrabold tracking-[0.14em] text-forest/45 uppercase">
                Runs 100% in your browser · Works offline
              </p>
            </div>
          </div>

          <div className="absolute -top-4 -right-2 z-20 grid size-[5.2rem] rotate-[8deg] place-content-center rounded-full bg-gold text-center shadow-[0_14px_30px_-14px_rgba(8,37,29,0.75)] ring-4 ring-cream sm:-top-5 sm:-right-3 sm:size-24">
            <Sparkle className="mx-auto mb-0.5 size-3.5 text-forest/70" />
            <span className="font-display text-[1.35rem] leading-none font-semibold text-forest">PLR</span>
            <span className="mt-0.5 text-[0.46rem] font-extrabold tracking-[0.14em] text-forest/70 uppercase">Included</span>
          </div>

          <div className="animate-float absolute -bottom-5 -left-2 z-20 hidden w-[15.5rem] rounded-xl border border-forest/10 bg-paper p-3.5 shadow-soft sm:-left-6 sm:block">
            <div className="flex items-center gap-2 border-b border-forest/10 pb-2">
              <span className="grid size-6 place-items-center rounded-md bg-forest text-gold">
                <Star className="size-3" />
              </span>
              <p className="text-[0.6rem] font-extrabold tracking-[0.12em] text-forest/60 uppercase">You can</p>
            </div>
            <ul className="mt-2 space-y-1.5">
              {["Rebrand it as yours", "Sell it, keep 100%", "Bundle it with offers"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[0.72rem] font-semibold text-forest/80">
                  <Check className="size-3.5 shrink-0 text-gold-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-1.5 sm:hidden">
            {["Rebrand it", "Sell it", "Bundle it"].map((item) => (
              <span key={item} className="flex items-center justify-center gap-1 rounded-lg border border-forest/10 bg-paper/90 px-1.5 py-2 text-[0.6rem] font-extrabold text-forest/65">
                <Check className="size-3 text-gold-deep" /> {item}
              </span>
            ))}
          </div>

          <div className="animate-float-slow absolute -right-1 bottom-16 z-20 hidden w-[10.5rem] rounded-xl border border-forest/10 bg-paper p-3 shadow-soft sm:block lg:-right-4">
            <p className="text-[0.55rem] font-extrabold tracking-[0.12em] text-forest/45 uppercase">Works with</p>
            <p className="mt-1 font-display text-[0.95rem] leading-tight text-forest">
              ChatGPT · Claude
              <br />
              Gemini · Grok
            </p>
            <p className="mt-1.5 flex items-center gap-1 text-[0.58rem] font-semibold text-gold-deep">
              <Check className="size-3" /> Any assistant
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-y border-forest/10 bg-cream-2/60">
        <div className="wrap grid grid-cols-2 gap-x-4 gap-y-4 py-5 sm:grid-cols-4">
          {productFacts.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center justify-center gap-2.5 text-center">
              <Icon className="size-4 shrink-0 text-gold-deep sm:size-[1.1rem]" />
              <span className="text-[0.72rem] font-extrabold tracking-[0.04em] text-forest/70 sm:text-[0.78rem]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-forest">
        <div className="wrap flex flex-col items-center gap-4 py-5 lg:flex-row lg:justify-between">
          <p className="text-[0.62rem] font-extrabold tracking-[0.18em] text-gold-light/85 uppercase">
            Paste your prompt into the AI you already use
          </p>
          <div className="marquee-mask w-full max-w-2xl overflow-hidden">
            <div className="marquee-track gap-8">
              {[...ais, ...ais].map((ai, i) => (
                <span key={`${ai}-${i}`} className="flex shrink-0 items-center gap-2.5 font-display text-[0.98rem] font-medium text-cream/75">
                  <span className="size-1 rounded-full bg-gold/70" />
                  {ai}
                </span>
              ))}
            </div>
          </div>
          <p className="hidden text-[0.65rem] font-semibold text-cream/40 lg:block">Or any assistant you like</p>
        </div>
      </div>

    </section>
  );
}
