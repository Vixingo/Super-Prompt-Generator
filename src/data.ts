import {
  BookOpen,
  Calculator,
  Calendar,
  FileText,
  Globe,
  Image,
  Layers,
  Mail,
  Megaphone,
  Palette,
  Shield,
  Sparkle,
  Tag,
  Users,
  Wand,
  Zap,
} from "@/components/Icons";
import { productImages } from "@/lib/images";

export type TaskCategory = {
  id: string;
  label: string;
  helper: string;
  role: string;
  items: string[];
};

export const taskCategories: TaskCategory[] = [
  {
    id: "writing",
    label: "Writing & editing",
    helper: "Ebooks, guides, reports, newsletters",
    role: "senior editor and long-form writer",
    items: [
      "Ebook",
      "Report",
      "Book outline",
      "Workbook",
      "Guide",
      "Checklist",
      "Sales letter",
      "Newsletter",
      "Article or blog post",
      "Editing existing material",
    ],
  },
  {
    id: "promotions",
    label: "Promotions",
    helper: "Sales pages, emails, ads, launches",
    role: "direct-response copywriter and launch strategist",
    items: [
      "Sales page",
      "Email sequence",
      "Ad copy",
      "Social posts",
      "Launch campaign",
      "Landing page copy",
    ],
  },
  {
    id: "research",
    label: "Research",
    helper: "Market research and decision briefs",
    role: "research analyst",
    items: [
      "Market research",
      "Product comparison",
      "Evidence summary",
      "Decision brief",
      "Customer research",
    ],
  },
  {
    id: "plans",
    label: "Plans",
    helper: "Launch plans, content calendars, schedules",
    role: "operations and marketing planner",
    items: [
      "Launch plan",
      "Content calendar",
      "Project checklist",
      "Schedule",
      "Business decision",
    ],
  },
  {
    id: "courses",
    label: "Courses & guides",
    helper: "Outlines, lessons, workbooks",
    role: "instructional designer",
    items: [
      "Course outline",
      "Lesson plan",
      "Training guide",
      "Workbook exercises",
      "Learning materials",
    ],
  },
  {
    id: "web",
    label: "Websites & tools",
    helper: "Browser tools, pages, build instructions",
    role: "product designer and front-end developer",
    items: [
      "Browser tool spec",
      "Calculator instructions",
      "Planner app",
      "Landing page",
      "Custom web build",
    ],
  },
  {
    id: "spreadsheets",
    label: "Spreadsheets & data",
    helper: "Formulas, analysis, tables, reports",
    role: "data analyst",
    items: [
      "Formula plan",
      "Data analysis",
      "Table structure",
      "Chart brief",
      "Report",
    ],
  },
  {
    id: "graphics",
    label: "Graphics",
    helper: "Covers, promo visuals, image prompts",
    role: "art director",
    items: [
      "Product cover",
      "Promotional visuals",
      "Image prompts",
      "Storyboard",
      "Design brief",
    ],
  },
  {
    id: "other",
    label: "Other / custom",
    helper: "Describe a deliverable of your own",
    role: "senior specialist",
    items: ["Custom deliverable"],
  },
];

export const tones = [
  "Practical & friendly",
  "Expert & authoritative",
  "Conversational",
  "Warm & reassuring",
  "Bold & punchy",
  "Neutral & professional",
];

export const lengths = [
  "As concise as possible",
  "Short — under 500 words",
  "Medium — 500 to 1,000 words",
  "Long — 1,000 to 2,000 words",
  "Comprehensive — 2,000+ words",
  "Length fits the deliverable",
];

export const examples = [
  {
    label: "Sell my ebook",
    goal: "Create a 7-chapter ebook outline for busy parents who want calmer mornings, including a short intro and a clear action step in each chapter.",
    categoryId: "writing",
    format: "Ebook",
    tone: "Warm & reassuring",
  },
  {
    label: "Launch a product",
    goal: "Write a 5-email launch sequence for a new low-ticket digital product aimed at freelance designers, ending with a clear 48-hour offer.",
    categoryId: "promotions",
    format: "Email sequence",
    tone: "Conversational",
  },
  {
    label: "Plan my content",
    goal: "Build a 30-day content calendar for a small business coach who posts on Instagram and LinkedIn, mixing value posts, stories and offers.",
    categoryId: "plans",
    format: "Content calendar",
    tone: "Practical & friendly",
  },
];

export const includedMain = [
  {
    title: "The standalone browser tool",
    tag: "HTML file",
    description:
      "Open it in any modern browser. Eight task categories plus Other, guided intake, output options, prompt checks and copy controls.",
    icon: Wand,
  },
  {
    title: "The practical user guide",
    tag: "PDF + editable Word",
    description:
      "A four-page walkthrough showing how to use the tool, add source material and test your prompts — fully editable for your brand.",
    icon: FileText,
  },
];

export const bonuses = [
  {
    n: "01",
    title: "Your licence to rebrand and sell",
    description:
      "Customize the tool and materials, add your name and branding, and sell a finished version for personal use.",
    icon: Shield,
  },
  {
    n: "02",
    title: "A sales letter you can rebrand",
    description:
      "Start with proven sales copy for your own offer. Add your branding, price and payment details.",
    icon: FileText,
  },
  {
    n: "03",
    title: "Email, social & video campaign",
    description:
      "6 promo email swipes, 25 social posts and 5 short-video scripts, ready to adapt to your audience.",
    icon: Mail,
  },
  {
    n: "04",
    title: "Product cover artwork",
    description:
      "Use the included graphics to present your offer on your sales page and across your promotions.",
    icon: Image,
  },
  {
    n: "05",
    title: "Tool excerpts for your sales page",
    description:
      "Real screenshots of the tool in action, ready to show prospects exactly what they're buying.",
    icon: Layers,
  },
];

export const features = [
  {
    title: "Guided, three-step intake",
    description:
      "Answer a few plain-English questions. The tool assembles the role, context, constraints and output format for you.",
    icon: Sparkle,
  },
  {
    title: "Eight categories + custom",
    description:
      "Writing, promotions, research, plans, courses, websites, spreadsheets, graphics — or describe any deliverable.",
    icon: Layers,
  },
  {
    title: "Inclusion checks before you paste",
    description:
      "See exactly what made it into your prompt — audience, format, tone, source material — so nothing important is missing.",
    icon: Shield,
  },
  {
    title: "Local, private, no subscription",
    description:
      "No API key, no tool login, no monthly fee. Prompt generation happens in your browser, even offline.",
    icon: Zap,
  },
];

export const workflowSteps = [
  {
    n: "01",
    title: "Describe the job",
    description:
      "Enter your goal, choose the task category and add the audience if it matters. Most written details are optional.",
    screenshot: productImages.step1,
    alt: "Step one of My AI Super Prompt Generator: describe your goal, task type and audience",
    note: "Goal + task type",
  },
  {
    n: "02",
    title: "Choose your output",
    description:
      "Pick the deliverable, tone and length. Add notes or existing material so your AI has the full picture.",
    screenshot: productImages.step2,
    alt: "Step two of the tool: choose the output format, tone and any source material",
    note: "Format + details",
  },
  {
    n: "03",
    title: "Copy your super prompt",
    description:
      "Click create, review the inclusion checks and copy one complete prompt into ChatGPT, Claude, Gemini, Grok or any assistant.",
    screenshot: productImages.step3,
    alt: "Step three of the tool: the finished super prompt with inclusion checks and copy controls",
    note: "Copy + paste",
  },
];

export const audience = [
  {
    title: "Digital product sellers",
    description:
      "A finished tool to put your label on this week — for your shop, site or next bundle.",
    icon: Tag,
  },
  {
    title: "Email list owners",
    description:
      "A useful lead magnet or low-ticket offer your subscribers can actually put to work.",
    icon: Mail,
  },
  {
    title: "Freelancers & agencies",
    description:
      "Create rich, client-ready briefs in minutes and reduce the revision ping-pong.",
    icon: Users,
  },
  {
    title: "Course creators & coaches",
    description:
      "Add a practical prompt-building resource to your curriculum or membership.",
    icon: BookOpen,
  },
  {
    title: "Affiliate marketers",
    description:
      "A fast, low-ticket front-end offer that's easy to explain and easy to deliver.",
    icon: Megaphone,
  },
  {
    title: "First-time creators",
    description:
      "No code, no designer, no developer required. Follow the guide, add your name, launch.",
    icon: Globe,
  },
];

export const builtFor = [
  {
    title: "Ebooks & long-form",
    icon: BookOpen,
    items: ["Ebooks", "Reports", "Guides", "Workbooks", "Lead magnets", "Editing"],
  },
  {
    title: "Launch & promo copy",
    icon: Megaphone,
    items: ["Sales letters", "Email sequences", "Ad copy", "Social posts", "Launches"],
  },
  {
    title: "Plans & calendars",
    icon: Calendar,
    items: ["Launch plans", "Content calendars", "Schedules", "Checklists"],
  },
  {
    title: "Websites & tools",
    icon: Globe,
    items: ["Browser tools", "Planners", "Calculators", "Landing pages"],
  },
  {
    title: "Data & spreadsheets",
    icon: Calculator,
    items: ["Formulas", "Analysis", "Tables", "Charts", "Reports"],
  },
  {
    title: "Graphics & design",
    icon: Palette,
    items: ["Covers", "Promo images", "Image prompts", "Storyboards"],
  },
];

export const comparison = [
  {
    label: "Time to launch",
    scratch: "Weeks to months",
    saas: "Days to weeks",
    plr: "Minutes after download",
  },
  {
    label: "Upfront cost",
    scratch: "Developer & designer fees",
    saas: "Monthly subscription",
    plr: "$5 one-time today",
  },
  {
    label: "Your own brand",
    scratch: "Yes",
    saas: "Usually limited",
    plr: "Yes — full rebrand included",
  },
  {
    label: "Resell rights",
    scratch: "Your own code, your call",
    saas: "No",
    plr: "Yes — PLR included",
  },
  {
    label: "Prompt capability",
    scratch: "Build it from zero",
    saas: "Platform's prompts only",
    plr: "8 categories + custom",
  },
];

export const faqs = [
  {
    q: "How much does it cost today?",
    a: "This is a dime sale. The price starts at $5 and rises with every sale until it reaches $37. Whatever price is showing at checkout is today's tier — so earlier buyers pay less.",
  },
  {
    q: "What is the refund policy?",
    a: "This is a digital product with immediate access, and the vendor's refund terms are the ones that apply. Any refund policy offered for this offer is displayed by Scalable PLR Products during checkout — please read it there before you buy. Because the files are delivered instantly, review the package contents and licence terms on this page first, and contact vendor support through your WarriorPlus receipt if you have an access issue.",
  },
  {
    q: "How is the product delivered?",
    a: "Digitally and immediately after checkout. You'll get the tool, the guide and the marketing package as downloads, and your purchase stays available in your WarriorPlus account. Delivery is handled by the vendor, Scalable PLR Products.",
  },
  {
    q: "Do I need an API key, a paid AI account or a monthly subscription?",
    a: "No. The prompt generator is a standalone HTML file that runs locally in any modern browser. It makes no AI calls and needs no login, API key or tool subscription. You then paste the finished prompt into whatever AI assistant you already use — free or paid. Your AI provider's own terms and usage limits still apply.",
  },
  {
    q: "What exactly do I get?",
    a: "The standalone browser tool, a four-page practical user guide in PDF and editable Word, and a Private Label Rights licence. You also get a rebrandable sales letter, 6 email swipes, 25 social posts, 5 short-video scripts, product cover artwork and real tool screenshots.",
  },
  {
    q: "Can I really sell the tool as my own?",
    a: "Yes. The licence lets you customize the tool and materials, add your name and branding, and sell the finished product for personal use. You can also bundle it with paid offers, or adapt the content for courses and memberships.",
  },
  {
    q: "Can I pass the PLR rights to my customers?",
    a: "No. Your customers receive personal-use rights only. You cannot pass on PLR, resale or master resale rights, and you may not give away editable source files or upload them to free download sites.",
  },
  {
    q: "Do I need coding or design skills to rebrand it?",
    a: "No coding is required. The guide explains how to swap the name, links and colours in the HTML file using a plain text editor, and the Word versions let you edit the documents normally. If you can edit a document or ask a VA to follow instructions, you can put your brand on it.",
  },
  {
    q: "Will it work for my niche?",
    a: "The generator supports eight task categories — writing and editing, promotions, research, plans, courses and guides, websites and tools, spreadsheets and data, and graphics — plus an Other option and a custom format field. Whatever your audience, you can describe the deliverable you need.",
  },
  {
    q: "Can I keep and reuse the prompts I create?",
    a: "Yes. Copy and save the prompts you like before closing or refreshing the tab — answers stay only in the open session. Reuse the winners, change a few details and run them again for similar projects.",
  },
  {
    q: "What if I don't know every answer in the intake?",
    a: "Only the goal and task type are essential. Most written details are optional, and the generated instructions tell your AI to use sensible defaults and ask for essential missing information instead of stalling.",
  },
  {
    q: "Is this a hosted tool or a subscription?",
    a: "Neither. It's a downloadable HTML tool plus a PLR licence, paid for once. There are no recurring charges, no tool logins and no API fees. You host it wherever you like when you sell your own version.",
  },
  {
    q: "Who do I contact if I need help?",
    a: "Access and product questions are handled by the vendor's support team. The contact details are included on your WarriorPlus purchase receipt, so keep that email handy.",
  },
];

export const licenseCan = [
  "Rebrand the tool and materials with your name, logo and colours",
  "Sell the finished product for personal use at whatever price you choose",
  "Bundle it with your own paid offers",
  "Adapt the content for courses, memberships or lead magnets",
  "Use the included sales copy, emails and social posts as the base for your offer",
];

export const licenseCannot = [
  "Pass on PLR, resale or master resale rights",
  "Give customers editable source files or access to the raw PLR package",
  "Upload the files to free download sites or shareware directories",
  "Claim the original authorship or the PLR rights itself as your product",
];

export const productFacts = [
  { label: "No API key", icon: Zap },
  { label: "No monthly fee", icon: Shield },
  { label: "Works offline", icon: Globe },
  { label: "Any modern browser", icon: Layers },
];
