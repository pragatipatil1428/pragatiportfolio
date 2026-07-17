import type { ProjectItem } from "@/src/types";

export const projects: ProjectItem[] = [
  {
    name: "Fynbit Commerce",
    description:
      "A merchant operations platform that simplifies onboarding, workflows, and CRM automation.",
    image: "/images/projects/fynbit.svg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "EventFlow",
    description:
      "A polished event management experience with QR ticketing, attendee insights, and reports.",
    image: "/images/projects/event.svg",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "CourseHub",
    description:
      "A course platform focused on content delivery, user progress tracking, and administration.",
    image: "/images/projects/course.svg",
    technologies: ["Node.js", "Prisma", "Redis"],
    github: "https://github.com",
  },
];
