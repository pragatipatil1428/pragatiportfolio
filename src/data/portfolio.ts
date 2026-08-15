import {
  BrainCircuit,
  Code2,
  Database,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  note?: string;
}

export const aboutHighlights = [
  {
    title: "Experience",
    description: "2+ years building scalable B2B SaaS applications — onboarding, payments, reporting, and product management.",
  },
  {
    title: "Passion",
    description: "Delivering secure, high-performance products with thoughtful UX, clean architecture, and reliable engineering.",
  },
  {
    title: "Current Focus",
    description: "Product-led engineering that ships — from clean architecture to secure, high-performance features.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["Node.js", "Prisma ORM", "REST APIs", "Zod", "Java"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "Firebase Firestore"],
  },
  {
    title: "Tools",
    icon: Workflow,
    skills: ["GitHub", "Docker", "Google Cloud Tasks", "VS Code"],
  },
  {
    title: "Integrations",
    icon: Globe2,
    skills: ["WhatsApp Business API", "Telegram Bot API", "MSG91", "Razorpay"],
  },
];

export const heroStats = [
  { label: "Years of Experience", value: "2+" },
  { label: "B2B SaaS Products", value: "3" },
  {
    label: "Tools & Technologies",
    value: `${skillGroups.reduce((total, group) => total + group.skills.length, 0)}`,
  },
];

export const experienceItems = [
  {
    title: "Executive Software Engineer",
    company: "Fynbit Tech Pvt. Ltd., Pune",
    period: "Mar 2026 — Jul 2026",
    description:
      "Built scalable B2B SaaS workflows across onboarding, verification, payments, reporting, and product management modules.",
    bullets: [
      "Developed merchant onboarding, KYC, bank verification, and payment gateway registration workflows.",
      "Built product management, advanced filtering, reporting, subscription management, and merchant/admin dashboard features.",
      "Designed scalable REST APIs and reusable UI components while optimizing PostgreSQL queries through Prisma ORM.",
      "Integrated WhatsApp Business API, Telegram Bot API, and MSG91 for automated communication.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "PRIC Technology Pvt. Ltd., Pune",
    period: "Feb 2024 — Mar 2026",
    description:
      "Delivered multi-product SaaS experiences for events, courses, subscriptions, and payments with strong focus on reusable UI and reliability.",
    bullets: [
      "Developed event ticketing, attendee management, QR check-in, and reporting modules.",
      "Built course management features including lesson handling, media uploads, certifications, and subscription access.",
      "Created booking, checkout, and payment workflows with Razorpay integration.",
      "Built reusable UI components and dynamic server-side data tables with export systems.",
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "ContentHub",
    description:
      "A full-stack digital content marketplace for buying and selling courses, ebooks, templates, and software — with UPI/QR payments, JWT auth, and admin approval workflows.",
    image: "/images/projects/contenthub.svg",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Tailwind CSS", "Zustand", "Vercel"],
    github: "https://github.com/pragatipatil1428/contenthub",
    demo: "https://contenthub-one-orcin.vercel.app/",
    note: "Admin panel access is available on request — contact me for demo credentials.",
  },
  {
    title: "Minutely",
    description:
      "An AI-powered meeting-notes platform that turns raw notes into summaries, decisions, and tasks — with authentication, a Kanban task board, and an analytics dashboard.",
    image: "/images/projects/minutely.svg",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS", "Vercel", "Docker"],
    github: "https://github.com/pragatipatil1428/meetingnotes",
    demo: "https://meetingnotes-wheat.vercel.app/",
  },
  {
    title: "Spendly",
    description:
      "A full-stack personal expense tracker for managing income and expenses — with real-time dashboards, Chart.js analytics, monthly summaries, and one-click CSV export. JWT auth, user-scoped data, and a responsive dark/light UI deployed on Vercel.",
    image: "/images/projects/spendly.svg",
    tags: ["React", "Vite", "JavaScript", "Express", "MongoDB", "Mongoose", "JWT", "Chart.js", "Vercel"],
    github: "https://github.com/pragatipatil1428/expensetracker",
    demo: "https://expensetracker-nu-black.vercel.app/",
  },
];

export const certificationItems = [
  {
    title: "Java Full Stack Development",
    issuer: "QSpiders Software Testing Training Institute, Pune",
    year: "2023",
    icon: BrainCircuit,
  },
  {
    title: "MCA",
    issuer: "SRTMU University",
    year: "2023",
    icon: Sparkles,
  },
  {
    title: "B.Sc. Computer Science",
    issuer: "SRTMU University",
    year: "2021",
    icon: Rocket,
  },
];

export const techStack = ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "PostgreSQL", "Vercel"];
