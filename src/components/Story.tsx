import { useState } from "react";
import { cn } from "@/utils/cn";
import { builtFor, features, workflowSteps } from "@/data";
import { ArrowRight, Browser, Check, Clock, Shield, Sparkle, Zap } from "./Icons";
import { BuyButton, SectionHeading } from "./ui";
import { PRICE } from "@/lib/site";
import { productImages } from "@/lib/images";

const chat = [
  { who: "You", text: "Write me an ebook about productivity.", mine: true },
  { who: "AI", text: "Happy to help! Who is the audience, how long should it be, and what tone do you want?", mine: false },
  { who: "You", text: "Busy people. Short-ish. Friendly, maybe 10 chapters?", mine: true },
  { who: "AI", text: "Got it. Should it include exercises, templates or worksheets? What makes it different from other productivity books?", mine: false },
];

export function PainSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-18 sm:py-24 lg:py-28">
      <div className="wrap">
        <SectionHeading
          eyebrow="The prompt tax"
          title={
            <>
              You&rsquo;re not short on ideas.
              <span className="mt-1 block text-gold-deep">
                <span className="italic-serif">You&rsquo;re short on AI credits.</span>
              </span>
            </>
          }
          copy="The average project dies in the back-and-forth: one vague prompt, six clarifying questions, three rewrites — and a usage meter that's already in the red."
        />

        <div className="mt-12 grid gap-9 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="relative lg:col-span-5">
            <div className="absolute -top-3 -right-2 z-20 rotate-[5deg] rounded-full bg-gold px-3.5 py-2 text-[0.6rem] font-extrabold tracking-[0.08em] text-forest uppercase shadow-[0_10px_20px_-12px_rgba(8,37,29,0.6)]">
              7 replies · 0 deliverables
            </div>
            <div className="overflow-hidden rounded-2xl border border-forest/12 bg-paper shadow-soft">
              <div className="flex items-center justify-between border-b border-forest/10 bg-cream-2/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-clay/70" />
                  <span className="size-2 rounded-full bg-gold/80" />
                  <span className="size-2 rounded-full bg-sage/70" />
                  <span className="ml-2 text-[0.65rem] font-extrabold tracking-[0.12em] text-forest/45 uppercase">
                    New chat
                  </span>
                </div>
                <span className="rounded-md border border-forest/10 bg-paper px-2 py-1 text-[0.58rem] font-bold text-forest/45">
                  Any AI assistant
                </span>
              </div>
              <div className="space-y-3 p-4">
                {chat.map((m, i) => (
                  <div key={i} className={cn("flex", m.mine ? "justify-end" : "justify-start")}>
                    <div
                      className={cn(
                        "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[0.78rem] leading-relaxed",
                        m.mine
                          ? "rounded-br-sm bg-forest text-cream/90"
                          : "rounded-bl-sm border border-forest/10 bg-cream/70 text-forest/75",
                      )}
                    >
                      <span className={cn("mb-1 block text-[0.52rem] font-extrabold tracking-[0.12em] uppercase", m.mine ? "text-gold-light/80" : "text-forest/35")}>
                        {m.who}
                      </span>
                      {m.text}
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-2 pl-1">
                  <span className="flex gap-1 rounded-full border border-forest/10 bg-cream px-3 py-2">
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="size-1.5 animate-pulse rounded-full bg-forest/30" style={{ animationDelay: `${d * 0.18}s` }} />
                    ))}
                  </span>
                  <span className="text-[0.65rem] font-semibold text-forest/35">Clarifying question #6&hellip;</span>
                </div>
              </div>
              <div className="border-t border-forest/10 bg-[#f9f2e4] px-4 py-3.5">
                <div className="flex items-center justify-between text-[0.62rem] font-bold">
                  <span className="flex items-center gap-1.5 text-forest/55">
                    <Clock className="size-3.5" /> AI usage limit
                  </span>
                  <span className="text-clay">91% used</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-forest/10">
                  <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-gold-deep to-clay" />
                </div>
                <p className="mt-1.5 text-[0.6rem] font-medium text-forest/40">Reply quality may slow down until your limit resets.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[0.65rem] font-extrabold tracking-[0.16em] text-forest/40 uppercase">Every prompt without a brief costs you</p>
            <div className="mt-3 divide-y divide-forest/10 border-y border-forest/10">
              {[
                {
                  t: "Credits",
                  d: "Every missing detail becomes another reply, another rewrite and another slice of your limit.",
                },
                {
                  t: "Momentum",
                  d: "You spend the creative window explaining the task instead of shipping the work.",
                },
                {
                  t: "Quality",
                  d: "Vague instructions produce average output — even from a brilliant model.",
                },
              ].map((item, i) => (
                <div key={item.t} className="grid grid-cols-[2.2rem_1fr] gap-3 py-4 sm:grid-cols-[2.7rem_1fr] sm:gap-5">
                  <span className="font-display text-[1.3rem] leading-none text-gold-deep/75">0{i + 1}</span>
                  <div>
                    <h3 className="font-sans text-[0.95rem] font-extrabold tracking-tight text-forest">{item.t}</h3>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-forest/60">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-6 overflow-hidden rounded-2xl bg-forest p-6 text-cream sm:p-7">
              <div aria-hidden className="absolute -top-16 -right-10 size-44 rounded-full bg-gold/12 blur-2xl" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.62rem] font-extrabold tracking-[0.16em] text-gold-light/80 uppercase">The fix</p>
                  <p className="mt-2 font-display text-[1.4rem] leading-tight sm:text-[1.65rem]">
                    It isn&rsquo;t a better AI.
                    <span className="block italic text-gold-light">It&rsquo;s a better first prompt.</span>
                  </p>
                </div>
                <a href="#tool" className="btn shrink-0 border border-cream/25 px-4 py-2.5 text-[0.78rem] font-bold text-cream hover:bg-cream/10">
                  See the 3-step fix <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ToolSection() {
  return (
    <section id="tool" className="relative overflow-hidden border-y border-forest/10 bg-paper py-18 sm:py-24 lg:py-28">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-25 [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="wrap relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The tool"
              title={
                <>
                  The prompt-writing happens
                  <span className="italic-serif text-gold-deep"> before you open your AI.</span>
                </>
              }
              copy="Answer three short steps. The generator assembles the role, objective, audience, format, tone, source material and quality checks into one complete prompt — then you paste it in and let your AI create."
            />

            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="group border-t border-forest/12 pt-4">
                  <span className="grid size-9 place-items-center rounded-lg bg-forest/[0.055] text-gold-deep transition-colors group-hover:bg-forest group-hover:text-gold-light">
                    <Icon className="size-[1.15rem]" />
                  </span>
                  <h3 className="mt-3 font-sans text-[0.9rem] font-extrabold tracking-tight text-forest">{title}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-forest/58">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BuyButton variant="forest" size="md" location="tool-section">
                Get the full PLR tool — {PRICE}
              </BuyButton>
              <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-forest/50">
                <Shield className="size-4 text-gold-deep" /> Instant access · Rebrand rights included
              </span>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-[linear-gradient(150deg,#f8f2e4,#eee4d0)] p-3 shadow-soft">
              <div aria-hidden className="dot-grid absolute inset-0 opacity-40" />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-forest/10 bg-[#fcf9f1]">
                <img
                  src={productImages.cover}
                  alt="The My AI Super Prompt Generator cover and tool interface"
                  width={1024}
                  height={1024}
                  className="w-full mix-blend-multiply"
                  loading="lazy"
                />
              </div>
              <div className="relative mt-3 grid grid-cols-3 gap-2">
                {[
                  { icon: Browser, label: "Browser-based" },
                  { icon: Zap, label: "Instant prompts" },
                  { icon: Shield, label: "PLR licence" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 rounded-xl border border-forest/10 bg-paper/80 px-2 py-2.5 text-center">
                    <Icon className="size-4 text-gold-deep" />
                    <span className="text-[0.58rem] font-extrabold tracking-wide text-forest/60 uppercase">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-float absolute -bottom-6 -left-3 z-10 flex max-w-[13.5rem] items-center gap-3 rounded-xl border border-forest/10 bg-paper px-4 py-3 shadow-soft sm:-left-6">
              <Sparkle className="size-5 shrink-0 text-gold-deep" />
              <p className="text-[0.72rem] font-bold leading-snug text-forest/75">
                No blank page.
                <span className="block font-medium text-forest/50">No prompt engineering degree.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-forest/12 pt-8 lg:mt-20">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow text-gold-deep">Scope</span>
              <h3 className="mt-2 text-[1.5rem] leading-tight text-forest sm:text-[1.8rem]">One tool. Far more than blog posts.</h3>
            </div>
            <p className="max-w-sm text-[0.8rem] leading-relaxed text-forest/50">
              Choose a category, add details, and let the prompt carry the context. If the format isn&rsquo;t listed, choose a custom deliverable.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {builtFor.map(({ title, icon: Icon, items }) => (
              <div key={title} className="rounded-xl border border-forest/10 bg-cream/55 p-4 transition-colors hover:border-gold-deep/35 hover:bg-cream">
                <div className="flex items-center gap-2.5">
                  <Icon className="size-[1.05rem] text-gold-deep" />
                  <h4 className="font-sans text-[0.82rem] font-extrabold text-forest">{title}</h4>
                </div>
                <p className="mt-2 text-[0.74rem] leading-relaxed text-forest/50">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  const [active, setActive] = useState(0);
  const step = workflowSteps[active];

  return (
    <section className="bg-cream py-18 sm:py-24 lg:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                Three steps.
                <span className="italic-serif text-gold-deep"> One usable prompt.</span>
              </>
            }
            copy="No blank page, no prompt engineering degree. Just answer, choose, copy — then get back to the work."
          />
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-forest/12 bg-paper px-4 py-2 text-[0.7rem] font-bold text-forest/55">
            <span className="size-2 rounded-full bg-gold pulse-dot" />
            Actual tool screens below
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12">
          <div className="space-y-3">
            {workflowSteps.map((s, i) => (
              <button
                key={s.n}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn(
                  "w-full rounded-2xl border p-5 text-left transition-all duration-200",
                  active === i
                    ? "border-forest bg-forest text-cream shadow-[0_18px_40px_-26px_rgba(8,37,29,0.8)]"
                    : "border-forest/12 bg-paper/60 text-forest hover:border-forest/25 hover:bg-paper",
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full font-display text-[0.8rem] font-semibold",
                      active === i ? "bg-gold text-forest" : "bg-forest/8 text-forest/55",
                    )}
                  >
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-sans text-[0.95rem] font-extrabold tracking-tight">{s.title}</h3>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[0.55rem] font-extrabold tracking-[0.08em] uppercase",
                          active === i ? "bg-cream/10 text-gold-light" : "bg-forest/6 text-forest/40",
                        )}
                      >
                        {s.note}
                      </span>
                    </div>
                    <p className={cn("mt-1.5 text-[0.82rem] leading-relaxed", active === i ? "text-cream/65" : "text-forest/55")}>
                      {s.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <BuyButton variant="forest" size="md" location="workflow">
                Get the full tool — {PRICE}
              </BuyButton>
              <a href="#demo" className="inline-flex items-center gap-1.5 text-[0.76rem] font-bold text-forest/60 underline decoration-forest/20 underline-offset-4 hover:text-forest">
                Or try the demo first
              </a>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-gold-deep/20 sm:-inset-4" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-forest/15 bg-paper shadow-soft">
              <div className="flex items-center justify-between gap-3 border-b border-forest/10 bg-cream-2/70 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-clay/60" />
                  <span className="size-2 rounded-full bg-gold/70" />
                  <span className="size-2 rounded-full bg-sage/70" />
                </div>
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-forest/10 bg-paper px-3 py-1">
                  <Shield className="size-3 shrink-0 text-sage" />
                  <span className="truncate text-[0.58rem] font-semibold text-forest/45">super-prompt-generator.html</span>
                  <span className="ml-1 shrink-0 rounded-sm bg-forest/8 px-1.5 py-0.5 text-[0.48rem] font-extrabold text-forest/45 uppercase">Offline</span>
                </div>
                <span className="hidden text-[0.58rem] font-bold text-forest/35 sm:block">Step {step.n} of 03</span>
              </div>
              <div className="relative bg-[#f8f3e7]">
                <img
                  key={step.screenshot}
                  src={step.screenshot}
                  alt={step.alt}
                  width={1200}
                  height={820}
                  className="w-full animate-[fade-up_0.45s_ease-out_both]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <p className="flex items-center gap-1.5 text-[0.68rem] font-semibold text-forest/45">
                <Check className="size-3.5 text-gold-deep" /> Eight categories + Other, all in one interface
              </p>
              <span className="font-display text-[0.9rem] text-forest/35">{step.n} / 03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
