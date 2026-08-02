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
}

export const heroStats = [
  { label: "Years of Experience", value: "2+" },
  { label: "B2B SaaS Products", value: "5+" },
  { label: "Tools & Technologies", value: "20+" },
];

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
    description: "React, Next.js, TypeScript, Prisma, PostgreSQL — and product-led engineering that ships.",
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
      "A premium digital content marketplace where creators sell and buyers instantly access courses, templates, ebooks, software, and more — with secure payments and a full user dashboard.",
    image: "/images/projects/contenthub.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/pragatipatil1428/contenthub",
    demo: "https://contenthub-one-orcin.vercel.app/",
  },
  {
    title: "Minutely",
    description:
      "A full-stack AI-powered meeting notes & task management platform that captures meeting insights, auto-extracts action items into a Kanban board, and tracks productivity with analytics dashboards.",
    image: "/images/projects/minutely.svg",
    tags: ["Next.js", "React 19", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "React Query", "Recharts", "Framer Motion"],
    github: "https://github.com/pragatipatil1428/meetingnotes",
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
