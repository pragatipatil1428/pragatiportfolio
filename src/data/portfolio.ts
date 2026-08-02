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
  { label: "Years Experience", value: "2+" },
  { label: "B2B SaaS Products", value: "5+" },
  { label: "Core Focus", value: "Full Stack" },
];

export const aboutHighlights = [
  {
    title: "Experience",
    description: "2+ years building scalable web applications for SaaS products and internal platforms.",
  },
  {
    title: "Passion",
    description: "Delivering secure, high-performance products with thoughtful UX and clean architecture.",
  },
  {
    title: "Current Focus",
    description: "React, Next.js, TypeScript, Prisma, PostgreSQL, and product-led engineering.",
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
    skills: ["PostgreSQL", "Redis", "Firebase Firestore", "SQL"],
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
  {
    title: "Product Focus",
    icon: ShieldCheck,
    skills: ["CRM", "Workflow Automation", "Payments", "KYC", "Reporting"],
  },
];

export const experienceItems = [
  {
    title: "Executive Software Engineer",
    company: "Fynbit Tech Pvt. Ltd.",
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
    company: "Pric Technology Pvt. Ltd.",
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
    title: "Fynbit Commerce",
    description:
      "A merchant operations platform that simplifies onboarding, workflows, and CRM automation.",
    image: "/images/projects/fynbit.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/pragatipatil1428/",
  },
  {
    title: "EventFlow",
    description:
      "A polished event management experience with QR ticketing, attendee insights, and reports.",
    image: "/images/projects/event.svg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/pragatipatil1428/",
  },
  {
    title: "CourseHub",
    description:
      "A course platform focused on content delivery, user progress tracking, and administration.",
    image: "/images/projects/course.svg",
    tags: ["Node.js", "Prisma", "Redis"],
    github: "https://github.com/pragatipatil1428/",
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
