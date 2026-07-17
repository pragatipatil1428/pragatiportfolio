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

export const heroStats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Built", value: "15+" },
  { label: "Focus Areas", value: "Full Stack" },
];

export const aboutHighlights = [
  {
    title: "Experience",
    description: "2+ years crafting reliable web products and internal platforms.",
  },
  {
    title: "Passion",
    description: "Building polished user experiences with thoughtful engineering.",
  },
  {
    title: "Current Focus",
    description: "Frontend architecture, scalable APIs, and product-led systems.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["Node.js", "REST APIs", "Authentication", "System design"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "Prisma", "Query optimization"],
  },
  {
    title: "Tools",
    icon: Workflow,
    skills: ["Git", "Docker", "VS Code", "Vercel"],
  },
  {
    title: "Cloud",
    icon: Globe2,
    skills: ["AWS", "Firebase", "CI/CD", "Deployment"],
  },
  {
    title: "Integrations",
    icon: ShieldCheck,
    skills: ["Third-party APIs", "Payments", "Auth", "Analytics"],
  },
];

export const experienceItems = [
  {
    title: "Senior Software Engineer",
    company: "Product-focused teams",
    period: "2024 — Present",
    description:
      "Built scalable B2B SaaS platforms with strong focus on reliability, maintainability, and polished user experiences.",
    bullets: [
      "Developed merchant onboarding and KYC workflows.",
      "Created reusable dashboard components and CRM modules.",
      "Built workflow automation and role-based access controls.",
      "Optimized PostgreSQL queries and application performance.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Fast-moving product teams",
    period: "2022 — 2024",
    description:
      "Delivered responsive web experiences and internal tools for event and education products.",
    bullets: [
      "Developed responsive UI and modern interfaces.",
      "Integrated third-party APIs and analytics services.",
      "Designed REST APIs and improved developer workflows.",
      "Collaborated in Agile teams with strong product thinking.",
    ],
  },
];

export const projectItems = [
  {
    title: "Hotel Administration System",
    description:
      "A polished admin platform for managing bookings, rooms, staff duties, and reporting workflows.",
    image: "/images/projects/hotel.svg",
    tags: ["React", "Next.js", "PostgreSQL"],
    github: "https://github.com/pragatipatil1428/",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A thoughtful productivity app for planning, tracking, and coordinating day-to-day work.",
    image: "/images/projects/task.svg",
    tags: ["TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/pragatipatil1428/",
    demo: "https://example.com",
  },
  {
    title: "React Calculator",
    description:
      "A minimal, elegant calculator experience designed for speed and clarity on any device.",
    image: "/images/projects/calculator.svg",
    tags: ["React", "CSS", "Vite"],
    github: "https://github.com/pragatipatil1428/",
  },
];

export const certificationItems = [
  {
    title: "Full Stack Development",
    issuer: "Modern Web Academy",
    year: "2024",
    icon: BrainCircuit,
  },
  {
    title: "UI/UX Design Principles",
    issuer: "Design Systems Lab",
    year: "2023",
    icon: Sparkles,
  },
  {
    title: "Advanced React Patterns",
    issuer: "Engineering Academy",
    year: "2024",
    icon: Rocket,
  },
];

export const techStack = ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "PostgreSQL", "Vercel"];
