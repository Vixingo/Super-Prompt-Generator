import { useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { examples, lengths, taskCategories, tones } from "@/data";
import { BuyButton } from "./ui";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Copy,
  CreditCard,
  Rotate,
  Shield,
  Sparkle,
  Wand,
} from "./Icons";
import { PRICE } from "@/lib/site";

type CopyState = "idle" | "copied" | "error";

function buildPrompt(input: {
  goal: string;
  audience: string;
  categoryLabel: string;
  categoryRole: string;
  format: string;
  tone: string;
  length: string;
  details: string;
}) {
  const { goal, audience, categoryLabel, categoryRole, format, tone, length, details } = input;

  return `ROLE
Act as a senior ${categoryRole}. Work as a careful collaborator who values clarity, originality and finished work over generic commentary.

PRIMARY OBJECTIVE
${goal.trim()}

AUDIENCE
${audience.trim() || "A general audience. Make sensible assumptions about their level of knowledge and state those assumptions briefly."}

DELIVERABLE
Create: ${format}
Task category: ${categoryLabel}
Target length: ${length}
Tone: ${tone}

WRITING & FORMAT STANDARDS
1. Lead with the finished work, not a description of what you plan to do.
2. Use specific, concrete language. Cut filler, clichés, repetition and empty claims.
3. Structure the deliverable with clear headings, short paragraphs and scannable lists where they genuinely help.
4. Match the requested format and length. If something must be shortened, protect the substance: keep key steps, examples and next actions.
5. Write for the stated audience. Explain anything that requires specialist knowledge.
6. Use plain, direct sentences. Prefer active voice.
7. Avoid inventing facts, quotes, statistics or sources. If a fact cannot be verified, flag it instead of presenting it as certain.

ADDITIONAL CONTEXT
${details.trim() || "None supplied. Where a detail is missing, choose a sensible default, state the assumption in one line, and continue. Do not stop to ask clarifying questions."}

QUALITY CHECK BEFORE YOU FINISH
- Does the deliverable fully satisfy the primary objective for the stated audience?
- Is every section complete, specific and usable without a follow-up round of edits?
- Are the format and length exactly as requested?
- Is anything important missing, unsupported or unexplained? Fix it now.
- Could any sentence be removed without losing meaning? If so, remove it.

FINISH WITH
A short section titled "Optional next steps" containing three specific improvements I could ask for next, one line each.

Begin by restating the objective in a single sentence. Then deliver the completed work.`;
}

const stepLabels = ["Describe", "Options", "Your prompt"];

export default function PromptDemo() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState("");
  const [categoryId, setCategoryId] = useState(taskCategories[0].id);
  const [format, setFormat] = useState(taskCategories[0].items[0]);
  const [customFormat, setCustomFormat] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [length, setLength] = useState(lengths[2]);
  const [details, setDetails] = useState("");
  const [prompt, setPrompt] = useState("");
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [showError, setShowError] = useState(false);

  const category = useMemo(
    () => taskCategories.find((c) => c.id === categoryId) ?? taskCategories[0],
    [categoryId],
  );

  const finalFormat = format === "__custom" ? customFormat.trim() || "Custom deliverable" : format;
  const goalReady = goal.trim().length > 8;
  const wordCount = prompt ? prompt.trim().split(/\s+/).filter(Boolean).length : 0;

  function chooseCategory(id: string) {
    const next = taskCategories.find((c) => c.id === id);
    setCategoryId(id);
    if (next) setFormat(next.items[0]);
    setCustomFormat("");
  }

  function useExample(index: number) {
    const ex = examples[index];
    const cat = taskCategories.find((c) => c.id === ex.categoryId);
    setGoal(ex.goal);
    setCategoryId(ex.categoryId);
    setFormat(ex.format);
    setTone(ex.tone);
    if (cat) setFormat(cat.items.includes(ex.format) ? ex.format : cat.items[0]);
    setShowError(false);
    setStep(1);
  }

  function next() {
    if (step === 0) {
      if (!goalReady) {
        setShowError(true);
        return;
      }
      setShowError(false);
      setStep(1);
      return;
    }
    if (step === 1) {
      const generated = buildPrompt({
        goal,
        audience,
        categoryLabel: category.label,
        categoryRole: category.role,
        format: finalFormat,
        tone,
        length,
        details,
      });
      setPrompt(generated);
      setCopyState("idle");
      setStep(2);
    }
  }

  function reset() {
    setStep(0);
    setGoal("");
    setAudience("");
    setCategoryId(taskCategories[0].id);
    setFormat(taskCategories[0].items[0]);
    setCustomFormat("");
    setTone(tones[0]);
    setLength(lengths[2]);
    setDetails("");
    setPrompt("");
    setCopyState("idle");
    setShowError(false);
  }

  async function copyPrompt() {
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyState("copied");
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = prompt;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopyState("copied");
      } catch {
        setCopyState("error");
      }
    }
    window.setTimeout(() => setCopyState("idle"), 2400);
  }

  const checks = [
    { label: "Goal", on: goalReady },
    { label: "Task type", on: true },
    { label: "Audience", on: audience.trim().length > 1 },
    { label: "Format", on: true },
    { label: "Tone", on: true },
    { label: "Guardrails", on: true },
  ];

  return (
    <section id="demo" className="relative overflow-hidden bg-forest py-18 text-cream sm:py-24 lg:py-28">
      <div aria-hidden className="dot-grid-light pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(215,173,97,0.18),transparent_65%)]" />
      <div className="wrap relative">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-light">Live preview</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.05] text-cream sm:text-[2.7rem] lg:text-[3.05rem]">
              Build your first super prompt.
              <span className="italic-serif text-gold-light"> Right here.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-cream/65 sm:text-[1.02rem]">
              This is the actual three-step intake logic, running in your browser. Answer a few questions
              and watch a complete, reusable prompt assemble itself.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-xl border border-cream/15 bg-cream/[0.055] px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
            <Shield className="size-5 text-gold-light" />
            <p className="text-[0.72rem] leading-snug text-cream/60">
              <span className="font-bold text-cream">100% local demo.</span>
              <br className="hidden sm:block" /> Nothing you type is sent anywhere.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          {/* Builder */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-cream/15 bg-paper text-forest shadow-lift">
            <div className="border-b border-forest/10 bg-cream/60 px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-forest text-gold">
                    <Wand className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-[1rem] leading-none font-semibold">Super Prompt Builder</p>
                    <p className="mt-1 text-[0.58rem] font-extrabold tracking-[0.1em] text-forest/40 uppercase">Demo · step {step + 1} of 3</p>
                  </div>
                </div>
                <span className="hidden rounded-full border border-forest/12 bg-paper px-2.5 py-1 text-[0.56rem] font-extrabold tracking-[0.08em] text-forest/45 uppercase sm:inline-flex">
                  Works with any AI
                </span>
              </div>

              <ol className="mt-4 flex items-center gap-1.5" aria-label="Prompt builder progress">
                {stepLabels.map((label, i) => (
                  <li key={label} className="flex flex-1 items-center gap-1.5">
                    <span className="flex min-w-0 items-center gap-1.5">
                      <span
                        className={cn(
                          "grid size-5 shrink-0 place-items-center rounded-full text-[0.58rem] font-extrabold transition-colors",
                          i < step
                            ? "bg-forest text-cream"
                            : i === step
                              ? "bg-gold text-forest"
                              : "bg-forest/10 text-forest/40",
                        )}
                      >
                        {i < step ? <Check className="size-3" /> : i + 1}
                      </span>
                      <span className={cn("truncate text-[0.62rem] font-bold sm:text-[0.68rem]", i === step ? "text-forest" : "text-forest/40")}>
                        {label}
                      </span>
                    </span>
                    {i < 2 && <span className={cn("h-px flex-1 rounded", i < step ? "bg-forest/40" : "bg-forest/12")} />}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex-1 px-4 py-5 sm:px-6 sm:py-6">
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <p className="text-[0.6rem] font-extrabold tracking-[0.14em] text-forest/40 uppercase">Quick start</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {examples.map((ex, i) => (
                        <button
                          key={ex.label}
                          type="button"
                          onClick={() => useExample(i)}
                          className="rounded-full border border-forest/15 bg-cream/60 px-2.5 py-1.5 text-[0.66rem] font-bold text-forest/65 transition-colors hover:border-gold-deep/50 hover:bg-gold/15 hover:text-forest"
                        >
                          {ex.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between">
                      <label htmlFor="goal" className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">
                        Your goal <span className="text-clay">*</span>
                      </label>
                      <span className="text-[0.6rem] font-semibold text-forest/35">{goal.length}/500</span>
                    </div>
                    <textarea
                      id="goal"
                      value={goal}
                      maxLength={500}
                      onChange={(e) => {
                        setGoal(e.target.value);
                        if (showError) setShowError(false);
                      }}
                      rows={3}
                      placeholder="Describe what you want to accomplish. e.g. Create a 7-chapter ebook outline for busy parents who want calmer mornings…"
                      className={cn("input-base mt-1.5 resize-none leading-relaxed", showError && !goalReady && "border-clay/70 bg-clay/[0.04]")}
                    />
                    {showError && !goalReady && (
                      <p className="mt-1.5 text-[0.68rem] font-semibold text-clay">Add a sentence about what you want to create — that's the only requirement.</p>
                    )}
                  </div>

                  <div>
                    <span className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">Task type</span>
                    <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                      {taskCategories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => chooseCategory(cat.id)}
                          aria-pressed={categoryId === cat.id}
                          className={cn(
                            "rounded-lg border px-2.5 py-2 text-left text-[0.68rem] leading-tight font-bold transition-colors",
                            categoryId === cat.id
                              ? "border-forest bg-forest text-cream"
                              : "border-forest/12 bg-[#fffdf8] text-forest/60 hover:border-forest/25 hover:text-forest",
                          )}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                    <p className="mt-1.5 text-[0.66rem] text-forest/40">{category.helper}</p>
                  </div>

                  <div>
                    <label htmlFor="audience" className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">
                      Audience <span className="font-semibold text-forest/35 normal-case">(optional)</span>
                    </label>
                    <input
                      id="audience"
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      placeholder="e.g. busy parents, freelance designers, first-time buyers…"
                      className="input-base mt-1.5"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <div className="rounded-lg border border-gold-deep/25 bg-gold/10 px-3 py-2.5 text-[0.7rem] leading-snug text-forest/65">
                    <span className="font-extrabold text-forest">Your goal:</span> {goal}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="format" className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">Deliverable</label>
                      <select
                        id="format"
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className="input-base mt-1.5"
                      >
                        {category.items.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                        <option value="__custom">A different format…</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="length" className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">Target length</label>
                      <select
                        id="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="input-base mt-1.5"
                      >
                        {lengths.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {format === "__custom" && (
                    <div>
                      <label htmlFor="customFormat" className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">Describe your format</label>
                      <input
                        id="customFormat"
                        value={customFormat}
                        onChange={(e) => setCustomFormat(e.target.value)}
                        placeholder="e.g. a one-page client proposal"
                        className="input-base mt-1.5"
                      />
                    </div>
                  )}

                  <div>
                    <span className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">Tone</span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {tones.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTone(t)}
                          aria-pressed={tone === t}
                          className={cn(
                            "rounded-full border px-2.5 py-1.5 text-[0.66rem] font-bold transition-colors",
                            tone === t
                              ? "border-forest bg-forest text-cream"
                              : "border-forest/12 bg-[#fffdf8] text-forest/55 hover:border-forest/25 hover:text-forest",
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className="text-[0.7rem] font-extrabold tracking-wide text-forest/70 uppercase">
                      Details or source notes <span className="font-semibold text-forest/35 normal-case">(optional)</span>
                    </label>
                    <textarea
                      id="details"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      rows={3}
                      placeholder="Anything the AI should know? Paste an excerpt, list must-haves, add constraints…"
                      className="input-base mt-1.5 resize-none leading-relaxed"
                    />
                    <p className="mt-1.5 flex items-start gap-1.5 text-[0.65rem] leading-snug text-forest/40">
                      <Sparkle className="mt-px size-3 shrink-0 text-gold-deep" />
                      Not sure what to add? Leave it blank. The prompt tells your AI to use sensible defaults.
                    </p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex h-full flex-col">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-forest/15 bg-cream px-2.5 py-1 text-[0.6rem] font-extrabold tracking-[0.08em] text-forest/60 uppercase">
                    <CheckCircle className="size-3.5 text-gold-deep" /> Prompt assembled
                  </span>
                  <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-forest sm:text-[1.65rem]">
                    It&rsquo;s ready to paste.
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-forest/60">
                    Your full prompt is on the right. Copy it into ChatGPT, Claude, Gemini, Grok or any other
                    assistant — then let it do the work.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-1.5">
                    {checks.map((c) => (
                      <div key={c.label} className="flex items-center gap-1.5 rounded-md bg-forest/[0.045] px-2 py-1.5">
                        <Check className={cn("size-3.5", c.on ? "text-forest-3" : "text-forest/25")} />
                        <span className="text-[0.68rem] font-semibold text-forest/65">{c.label}</span>
                        <span className="ml-auto text-[0.55rem] font-bold text-forest/30">{c.on ? "Included" : "Default"}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl bg-forest/[0.045] p-3.5">
                    <div className="flex items-start gap-2">
                      <Shield className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                      <p className="text-[0.7rem] leading-relaxed text-forest/55">
                        This demo generates the prompt locally. The full version lets you rebrand every
                        screen, works offline, and comes with the PLR licence.
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    <a
                      href="#included"
                      className="btn btn-forest flex-1 px-4 py-3 text-[0.8rem]"
                    >
                      Get the full tool <ArrowRight className="size-4" />
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="btn border border-forest/15 px-3.5 py-3 text-[0.76rem] font-bold text-forest/60 hover:bg-forest/5"
                    >
                      <Rotate className="size-4" /> Start over
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-forest/10 bg-cream/50 px-4 py-3.5 sm:px-6">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="text-[0.72rem] font-bold text-forest/45 transition-colors hover:text-forest"
                >
                  ← Back
                </button>
              ) : (
                <span className="flex items-center gap-1.5 text-[0.64rem] font-semibold text-forest/35">
                  <CreditCard className="size-3.5" /> No sign-up. No email needed.
                </span>
              )}
              {step < 2 && (
                <button
                  type="button"
                  onClick={next}
                  className={cn(
                    "btn px-4 py-2.5 text-[0.78rem] font-extrabold sm:px-5",
                    step === 1 ? "btn-forest" : "btn-forest",
                  )}
                >
                  {step === 1 ? "Create my prompt" : "Continue"} <ArrowRight className="size-4" />
                </button>
              )}
              {step === 2 && (
                <button
                  type="button"
                  onClick={copyPrompt}
                  className="btn btn-gold px-4 py-2.5 text-[0.78rem] font-extrabold sm:px-5"
                >
                  <Copy className="size-4" />
                  {copyState === "copied" ? "Copied!" : copyState === "error" ? "Select & copy" : "Copy prompt"}
                </button>
              )}
            </div>
          </div>

          {/* Output */}
          <div className="flex min-h-[29rem] flex-col overflow-hidden rounded-2xl border border-cream/15 bg-[#07271e] shadow-lift">
            <div className="flex items-center justify-between gap-3 border-b border-cream/10 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold/80" />
                <span className="size-2 rounded-full bg-cream/20" />
                <span className="size-2 rounded-full bg-cream/20" />
                <span className="ml-1.5 text-[0.62rem] font-extrabold tracking-[0.1em] text-cream/45 uppercase">Your super prompt</span>
              </div>
              <div className="flex items-center gap-2">
                {prompt && (
                  <span className="rounded-full bg-cream/8 px-2 py-1 text-[0.56rem] font-bold text-cream/50">{wordCount} words</span>
                )}
                <button
                  type="button"
                  onClick={copyPrompt}
                  disabled={!prompt}
                  aria-label="Copy generated prompt"
                  className="grid size-7 place-items-center rounded-md border border-cream/15 text-cream/60 transition-colors hover:bg-cream/10 hover:text-cream disabled:cursor-not-allowed disabled:opacity-35"
                >
                  {copyState === "copied" ? <Check className="size-3.5 text-gold-light" /> : <Copy className="size-3.5" />}
                </button>
              </div>
            </div>

            {prompt ? (
              <div className="relative flex-1 overflow-hidden">
                <pre className="prompt-mono max-h-[26rem] overflow-auto px-4 py-4 whitespace-pre-wrap text-cream/78 sm:max-h-[30rem] sm:px-5">
                  {prompt}
                </pre>
                <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07271e] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 border-t border-cream/10 bg-[#07271e]/95 px-4 py-2.5 backdrop-blur-sm sm:px-5">
                  <span className="flex items-center gap-1.5 text-[0.6rem] font-semibold text-cream/40">
                    <Check className="size-3.5 text-gold-light" /> Guardrails included
                  </span>
                  <span className="text-[0.58rem] font-semibold text-cream/30">Paste into your AI of choice</span>
                </div>
              </div>
            ) : (
              <div className="relative flex flex-1 flex-col justify-center px-5 py-10 sm:px-8">
                <div aria-hidden className="pointer-events-none space-y-2.5 opacity-60 select-none">
                  <div className="h-2 w-16 rounded bg-gold/60" />
                  <div className="h-2 w-full rounded bg-cream/12" />
                  <div className="h-2 w-11/12 rounded bg-cream/12" />
                  <div className="h-2 w-3/4 rounded bg-cream/12" />
                  <div className="mt-5 h-2 w-24 rounded bg-gold/40" />
                  <div className="h-2 w-full rounded bg-cream/8" />
                  <div className="h-2 w-10/12 rounded bg-cream/8" />
                  <div className="h-2 w-full rounded bg-cream/8" />
                  <div className="h-2 w-2/3 rounded bg-cream/8" />
                  <div className="mt-5 h-2 w-20 rounded bg-gold/40" />
                  <div className="h-2 w-full rounded bg-cream/8" />
                  <div className="h-2 w-9/12 rounded bg-cream/8" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <span className="grid size-12 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-light">
                    <Sparkle className="size-6" />
                  </span>
                  <p className="mt-4 font-display text-[1.3rem] leading-tight text-cream sm:text-[1.5rem]">
                    Your finished prompt
                    <span className="block italic text-gold-light">appears here.</span>
                  </p>
                  <p className="mt-2 max-w-xs text-[0.75rem] leading-relaxed text-cream/45">
                    Add your goal on the left, choose a few options, and click create. It takes about 30 seconds.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                    {["Goal", "Audience", "Format", "Tone", "Guardrails"].map((c) => (
                      <span key={c} className="rounded-full border border-cream/12 px-2 py-1 text-[0.56rem] font-bold text-cream/40">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-cream/15 bg-cream/[0.055] px-5 py-5 sm:flex-row sm:px-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-[1.15rem] leading-tight text-cream sm:text-[1.3rem]">
              That&rsquo;s the thinking. <span className="italic text-gold-light">The full tool does the writing.</span>
            </p>
            <p className="mt-1 text-[0.74rem] font-semibold text-cream/45">
              Eight categories, your guide, your brand and the PLR licence — for one {PRICE} payment today.
            </p>
          </div>
          <BuyButton variant="gold" size="md" location="demo" className="w-full shrink-0 sm:w-auto">
            Get the full version — {PRICE}
          </BuyButton>
        </div>
      </div>
    </section>
  );
}
