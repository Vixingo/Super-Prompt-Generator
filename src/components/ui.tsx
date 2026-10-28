import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { AFFILIATE_URL, PRICE, FINAL_PRICE } from "@/lib/site";
import { ArrowRight } from "./Icons";

type ButtonVariant = "gold" | "forest" | "ghost" | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  gold: "btn-gold",
  forest: "btn-forest",
  ghost: "btn-ghost",
  "ghost-light": "btn-ghost-light",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-[0.8rem]",
  md: "px-5 py-3 text-[0.86rem] sm:px-6 sm:py-3.5 sm:text-[0.93rem]",
  lg: "px-6 py-4 text-[0.95rem] sm:px-8 sm:py-[1.15rem] sm:text-base",
};

export function BuyButton({
  children,
  variant = "gold",
  size = "md",
  className,
  withArrow = true,
  location = "general",
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  location?: string;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={cn("btn group", variantClass[variant], sizeClass[size], className)}
      data-cta={location}
    >
      <span>{children ?? `Get instant access — ${PRICE}`}</span>
      {withArrow && (
        <ArrowRight className="size-[1.05em] transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );
}

export function AnchorButton({
  href,
  children,
  variant = "ghost",
  size = "md",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <a href={href} className={cn("btn group", variantClass[variant], sizeClass[size], className)}>
      <span>{children}</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  dark = false,
  className,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className={cn("eyebrow", dark ? "text-gold-light" : "text-gold-deep", align === "center" && "no-rule justify-center")}>
        {eyebrow}
      </span>
      <Tag
        className={cn(
          "mt-4 text-[2.1rem] leading-[1.06] sm:text-[2.65rem] lg:text-[3.1rem]",
          dark ? "text-cream" : "text-forest",
        )}
      >
        {title}
      </Tag>
      {copy && (
        <p
          className={cn(
            "mt-5 text-[0.98rem] leading-relaxed sm:text-[1.05rem]",
            dark ? "text-cream/70" : "text-forest/72",
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function PriceLadder({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-end justify-between gap-3">
        <div>
          <span
            className={cn(
              "block text-[0.6rem] font-extrabold tracking-[0.18em] uppercase",
              dark ? "text-gold-light/80" : "text-forest/55",
            )}
          >
            Today&rsquo;s tier
          </span>
          <span
            className={cn(
              "font-display text-[1.7rem] leading-none font-semibold",
              dark ? "text-gold-light" : "text-forest",
            )}
          >
            {PRICE}
          </span>
        </div>
        <div className="text-right">
          <span
            className={cn(
              "block text-[0.6rem] font-extrabold tracking-[0.18em] uppercase",
              dark ? "text-cream/45" : "text-forest/45",
            )}
          >
            Final tier
          </span>
          <span
            className={cn(
              "font-display text-[1.05rem] leading-none font-semibold",
              dark ? "text-cream/60" : "text-forest/55",
            )}
          >
            {FINAL_PRICE}
          </span>
        </div>
      </div>
      <div className="relative mt-3">
        <div className={cn("h-[5px] w-full rounded-full", dark ? "bg-cream/12" : "bg-forest/10")}>
          <div className="h-full w-[13%] rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light" />
        </div>
        <span className="absolute top-1/2 left-[13%] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold bg-cream shadow-sm" />
        <div
          className={cn(
            "mt-2 flex justify-between text-[0.6rem] font-semibold tracking-wide",
            dark ? "text-cream/40" : "text-forest/40",
          )}
        >
          <span>Price rises with every sale</span>
          <span>Locked at {FINAL_PRICE}</span>
        </div>
      </div>
    </div>
  );
}

export function TrustLine({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.72rem] font-semibold tracking-wide",
        dark ? "text-cream/55" : "text-forest/55",
        className,
      )}
    >
      <span className="inline-flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-gold" /> Instant download
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-gold" /> One-time payment
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-gold" /> PLR included
      </span>
    </div>
  );
}

export function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-forest/12 bg-paper px-3 py-1.5 text-[0.68rem] font-bold tracking-wide text-forest/70">
      {children}
    </span>
  );
}
