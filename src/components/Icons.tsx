import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Sparkle = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z" />
    <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
  </Base>
);

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </Base>
);

export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </Base>
);

export const ArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4v15" />
    <path d="M6 13l6 6 6-6" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 12.5l4.6 4.5L19.5 6.5" />
  </Base>
);

export const CheckCircle = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.3l2.7 2.6 5.4-5.5" />
  </Base>
);

export const XCircle = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
  </Base>
);

export const Copy = (p: IconProps) => (
  <Base {...p}>
    <rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.2" />
    <path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5" />
  </Base>
);

export const Play = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10.2 8.6l5.2 3.4-5.2 3.4z" fill="currentColor" stroke="none" />
  </Base>
);

export const Lock = (p: IconProps) => (
  <Base {...p}>
    <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
  </Base>
);

export const Browser = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2.2" />
    <path d="M3 9h18" />
    <path d="M6.3 6.7h.01M9 6.7h.01" />
  </Base>
);

export const WifiOff = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 8.5a15 15 0 0 1 5-2.7M21 8.5a15 15 0 0 0-7.6-3.3" />
    <path d="M6 12.2a11 11 0 0 1 4-1.6M18 12.2a11 11 0 0 0-3-.7" />
    <path d="M9.1 15.6a6 6 0 0 1 5.8 0" />
    <path d="M12 19h.01M3.5 3.5l17 17" />
  </Base>
);

export const Layers = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l9 4.8-9 4.8-9-4.8z" />
    <path d="M3 12.4l9 4.8 9-4.8" />
    <path d="M3 16.8l9 4.8 9-4.8" />
  </Base>
);

export const Tag = (p: IconProps) => (
  <Base {...p}>
    <path d="M20.5 13.2l-7.3 7.3a2 2 0 0 1-2.8 0L3 13V3h10l7.5 7.5a2 2 0 0 1 0 2.7z" />
    <path d="M7.5 7.5h.01" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.2" />
    <path d="M3.6 6.4l8.4 6.3 8.4-6.3" />
  </Base>
);

export const Megaphone = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 10.5v3a1.5 1.5 0 0 0 1.5 1.5H7l8 4.5V4.5L7 9H4.5A1.5 1.5 0 0 0 3 10.5z" />
    <path d="M18 8.5a4 4 0 0 1 0 7" />
    <path d="M7 15v4.5" />
  </Base>
);

export const Video = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="6" width="12.5" height="12" rx="2.2" />
    <path d="M15.5 10.5l5.5-3v9l-5.5-3z" />
  </Base>
);

export const Image = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.2" />
    <circle cx="8.5" cy="9.5" r="1.6" />
    <path d="M4 17l4.8-4.8L13 16.5l2.6-2.6L20 18" />
  </Base>
);

export const FileText = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M8.5 13h7M8.5 16.5h5" />
  </Base>
);

export const Wand = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20L15 9" />
    <path d="M14 4l.9 2.6L17.5 7.5l-2.6.9L14 11l-.9-2.6L10.5 7.5l2.6-.9z" />
    <path d="M19 12.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z" />
  </Base>
);

export const Download = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v12" />
    <path d="M7 10.5l5 5 5-5" />
    <path d="M4.5 18.5v1a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-1" />
  </Base>
);

export const Shield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7.5 3v6c0 4.4-3.1 7.9-7.5 9-4.4-1.1-7.5-4.6-7.5-9V6z" />
    <path d="M8.7 12l2.3 2.3 4.3-4.4" />
  </Base>
);

export const Clock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.4 2" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
    <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M18 14.6a6.2 6.2 0 0 1 3.2 5.4" />
  </Base>
);

export const ChevronDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M5.5 9l6.5 6.5L18.5 9" />
  </Base>
);

export const Star = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.6l2.9 6.1 6.7.9-4.9 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6L2.4 9.6l6.7-.9z" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const X = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const Search = (p: IconProps) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </Base>
);

export const Calendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Base>
);

export const BookOpen = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 6.5C10.5 5 8.4 4.5 4 4.5V19c4.4 0 6.5.5 8 2 1.5-1.5 3.6-2 8-2V4.5c-4.4 0-6.5.5-8 2z" />
    <path d="M12 6.5V21" />
  </Base>
);

export const Calculator = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="2.5" width="14" height="19" rx="2.2" />
    <path d="M8.5 6.5h7v3h-7z" />
    <path d="M9 13h.01M12 13h.01M15 13h.01M9 17h.01M12 17h.01M15 17h.01" />
  </Base>
);

export const Palette = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3a9 9 0 1 0 0 18h1.3a2.2 2.2 0 0 0 0-4.4h-.8a1.6 1.6 0 0 1 0-3.2H16A5 5 0 0 0 21 8.4C21 5.3 17 3 12 3z" />
    <path d="M7.5 10h.01M10 6.8h.01M14.2 7h.01" />
  </Base>
);

export const Globe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
  </Base>
);

export const Plug = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3v5M15 3v5" />
    <path d="M6 8h12v3a6 6 0 0 1-12 0z" />
    <path d="M12 17v4" />
  </Base>
);

export const Zap = (p: IconProps) => (
  <Base {...p}>
    <path d="M13.5 2.5L5 13.5h5.5L10 21.5l8.5-11h-5.5z" />
  </Base>
);

export const Rotate = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 11.5a8.5 8.5 0 1 1 2.8 6.3" />
    <path d="M3 5v6.5h6.5" />
  </Base>
);

export const Quote = (p: IconProps) => (
  <Base {...p}>
    <path d="M9.5 6.5c-3 1.2-4.5 3.6-4.5 6.7v4.3h5.2v-5.2H7.6c0-1.6.8-2.8 2.6-3.6zM20 6.5c-3 1.2-4.5 3.6-4.5 6.7v4.3h5.2v-5.2H18c0-1.6.8-2.8 2.6-3.6z" />
  </Base>
);

export const Grid = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
  </Base>
);

export const CreditCard = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 10h19" />
    <path d="M6.5 14.5h3" />
  </Base>
);

export const Infinite = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.5 8.5c-2.5 0-4 1.6-4 3.5s1.5 3.5 4 3.5c3.5 0 5.5-7 9-7 2.5 0 4 1.6 4 3.5s-1.5 3.5-4 3.5c-3.5 0-5.5-7-9-7z" />
  </Base>
);
