export interface ProjectFeatureGroup {
  title: string;
  items: string[];
}

export interface ProjectArchitecture {
  stack: string[];
  external: string[];
}

export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  categories: string[];
  technologies: string[];
  highlights: string[];
  overview: string;
  problemSolved: string;
  features: ProjectFeatureGroup[];
  architecture: ProjectArchitecture;
  challenges: string[];
  engineering: string[];
  results: string[];
  contribution: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
  note?: string;
  featured: boolean;
}

export const projectFilters = [
  "All",
  "Full Stack",
  "SaaS",
  "Payments",
  "Analytics",
  "Productivity",
  "Finance",
];

const contributionStatement =
  "Designed and implemented the application architecture, database models, APIs, authentication, business logic, frontend components, integrations, testing, and deployment.";

export const projects: Project[] = [
  {
    id: "contenthub",
    name: "ContentHub",
    title: "Digital Content Marketplace SaaS",
    description:
      "A full-stack digital marketplace where sellers publish courses, ebooks, templates, software, and media while buyers purchase content through Razorpay or UPI/QR payments and receive gated digital access.",
    category: "Full-Stack SaaS · E-Commerce · Payments",
    categories: ["Full Stack", "SaaS", "Payments"],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma 7",
      "Tailwind CSS v4",
      "Zustand",
      "Razorpay",
      "Zod",
      "React Hook Form",
      "Vercel",
    ],
    highlights: [
      "Dual payment system using Razorpay and UPI/QR with payment verification and an admin approval workflow.",
      "Secure JWT authentication using bcrypt and httpOnly cookies with role-based admin protection.",
      "PostgreSQL/Prisma schema covering users, content, purchases, payments, reviews, downloads, notifications, and marketplace settings.",
      "Chunked file uploads supporting digital files up to 200MB within serverless request limits.",
    ],
    overview:
      "ContentHub is a full-stack digital marketplace where sellers publish courses, ebooks, templates, software, and media, and buyers purchase content through Razorpay or UPI/QR payments. Every purchase is verified and provisioned atomically, after which the buyer receives gated, purchase-linked access to their downloads.",
    problemSolved:
      "Digital creators and small sellers rely on scattered tools for payments, file delivery, and access control, leaving buyers with manual payment verification and sellers with no reliable way to prevent unauthorized downloads. ContentHub unifies listing, payment, approval, and gated delivery into a single marketplace with an admin dashboard for operations and revenue oversight.",
    features: [
      {
        title: "Authentication",
        items: [
          "Email/password registration and login",
          "bcrypt password hashing",
          "JWT authentication with httpOnly session cookies",
          "Remember-me sessions",
          "Protected routes with admin role protection",
          "Login history and activity logs",
          "Profile and password management",
        ],
      },
      {
        title: "Marketplace catalog",
        items: [
          "Content types: courses, ebooks, images, videos, audio, PDFs, software, templates, documents",
          "Categories and subcategories",
          "Free, paid, and coming-soon pricing",
          "Original and discounted prices with tax calculation",
          "Search, filtering, and sorting",
          "Featured, trending, popular, and new-arrival products",
          "Reviews, ratings, bookmarks, and wishlists",
        ],
      },
      {
        title: "Razorpay payments",
        items: [
          "Server-side order creation",
          "Signature, amount, and payment status verification",
          "Signed webhooks",
          "Idempotent payment handling",
        ],
      },
      {
        title: "UPI / QR payments",
        items: [
          "Dynamic QR generation and UPI deep links",
          "Transaction ID capture with payment proof upload",
          "Admin approval/rejection with approval notes",
          "30-minute payment countdown with live status polling",
          "Automatic access after approval",
        ],
      },
      {
        title: "Digital delivery",
        items: [
          "Purchase-gated and free downloads",
          "Download records",
          "Chunked upload system with 3MB chunks",
          "Files up to 200MB",
          "Database-based file storage",
        ],
      },
      {
        title: "Admin dashboard",
        items: [
          "Revenue dashboard with monthly revenue reports",
          "User, purchase, and content-type statistics",
          "Pending payment approvals",
          "User blocking/unblocking",
          "Category management",
          "Site settings: UPI, QR, tax, and site name configuration",
        ],
      },
    ],
    architecture: {
      stack: ["Next.js", "API Routes", "Prisma", "PostgreSQL"],
      external: ["Razorpay", "UPI / QR"],
    },
    challenges: [
      "Secure payment verification across Razorpay signatures, amounts, and payment statuses",
      "Idempotent payment provisioning so retries never create duplicates",
      "Serverless file upload limitations for large digital files",
      "Large-file chunking and reassembly up to 200MB",
      "Database transaction consistency across purchase, payment, and download records",
    ],
    engineering: [
      "Prisma 7 driver adapter",
      "PostgreSQL",
      "Shared Zod schemas",
      "Consistent API response format",
      "Lazy Prisma initialization",
      "Atomic database transactions",
      "Idempotent payment provisioning",
      "Responsive UI",
      "Skeleton loaders",
      "Empty states",
      "Toast notifications",
    ],
    results: [
      "Multi-role marketplace (buyers, sellers, admins)",
      "25-model PostgreSQL schema",
      "200MB chunked uploads",
      "Dual payment workflows (Razorpay + UPI/QR)",
      "Real-time payment status polling",
    ],
    contribution: contributionStatement,
    githubUrl: "https://github.com/pragatipatil1428/contenthub",
    liveUrl: "https://contenthub-one-orcin.vercel.app/",
    image: "/images/projects/contenthub.svg",
    note: "Admin panel access is available on request — contact me for demo credentials.",
    featured: true,
  },
  {
    id: "minutely",
    name: "Minutely",
    title: "Meeting & Task Management SaaS",
    description:
      "A full-stack productivity platform where teams capture meeting notes, manage tasks, track time, automatically extract action items, and analyze productivity.",
    category: "Full-Stack SaaS · Productivity · Analytics",
    categories: ["Full Stack", "SaaS", "Productivity", "Analytics"],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth v5",
      "TanStack Query v5",
      "Zod",
      "React Hook Form",
      "Zustand",
      "Tailwind CSS v4",
      "Recharts",
      "Framer Motion",
      "Vercel",
    ],
    highlights: [
      "Meeting and task management with full CRUD, search, filtering, pagination, and sorting.",
      "Automatic task extraction from meeting notes with duplicate prevention and priority handling.",
      "Complete meeting/task time tracking with start, pause, resume, stop, and event history.",
      "Analytics dashboards for meeting trends, task completion, priority distribution, and productivity.",
    ],
    overview:
      "Minutely is a meeting and task management SaaS where teams capture meeting notes, manage tasks on a Kanban board or table, track time spent on meetings and tasks, automatically extract action items from notes, and analyze productivity over configurable date ranges.",
    problemSolved:
      "Action items from meetings get lost in chat threads and notes apps, and teams have little visibility into where time actually goes. Minutely closes that loop: notes are automatically scanned for action items, tasks are tracked through completion with priorities and due dates, timers record where time went, and analytics reveal trends over time.",
    features: [
      {
        title: "Authentication",
        items: [
          "Email/password registration with bcrypt hashing",
          "NextAuth v5 with JWT sessions",
          "Protected API routes",
          "Profile and password management",
        ],
      },
      {
        title: "Meetings",
        items: [
          "Create, edit, and soft-delete meetings",
          "Meeting notes with scheduled date/time",
          "Participants, tags, and meeting status",
          "Search, filtering, pagination, and sorting",
          "Lifecycle: Scheduled → In Progress → Completed / Cancelled",
          "Derived Past status for finished meetings",
        ],
      },
      {
        title: "Tasks",
        items: [
          "Create, edit, and delete tasks",
          "Status, priority, due dates, and labels",
          "Meeting association",
          "Search, filtering, and sorting",
          "Statuses: Todo, In Progress, Done",
          "Priorities: Low, Medium, High, Urgent",
          "Views: drag-and-drop Kanban board and table",
        ],
      },
      {
        title: "AI-style task extraction",
        items: [
          "“Extract Tasks” analyzes meeting notes",
          "Recognizes bullet points, checkboxes, numbered lists, and “Task:” lines",
          "Creates tasks automatically and links them to the meeting",
          "Prevents duplicate tasks and assigns positions",
          "Preserves task priority",
        ],
      },
      {
        title: "Time tracking",
        items: [
          "Start, pause, resume, and stop with a live timer",
          "Timer history with pause and total durations",
          "Event audit history",
          "Meeting timers respect scheduled meeting timing",
          "Stopping a meeting timer updates the meeting status when appropriate",
        ],
      },
      {
        title: "Analytics",
        items: [
          "Meetings over time and task completion rate",
          "Tasks by status and tasks by priority",
          "Top tags and productivity summary",
          "Date ranges: week, month, quarter, year",
          "Recharts visualizations",
        ],
      },
    ],
    architecture: {
      stack: ["Next.js", "API Routes", "Prisma", "PostgreSQL"],
      external: ["Recharts Analytics"],
    },
    challenges: [
      "Timer state consistency across start, pause, resume, and stop",
      "Task extraction and duplicate prevention from free-form notes",
      "Analytics aggregation for trends and productivity metrics",
      "Optimistic updates with cache invalidation",
      "Meeting lifecycle handling across status transitions",
    ],
    engineering: [
      "TanStack Query",
      "Optimistic updates",
      "Cache invalidation",
      "Server-side pagination, filtering, and sorting",
      "Shared Zod validation",
      "Typed API client",
      "Prisma/PostgreSQL",
      "Responsive UI",
      "Skeleton loaders",
      "Empty states",
      "Dark/light theme",
      "Framer Motion animations",
    ],
    results: [
      "Automated task extraction from meeting notes",
      "Event-based time tracking",
      "Server-side analytics dashboards",
      "Kanban and table task views",
      "Multi-step meeting lifecycle",
    ],
    contribution: contributionStatement,
    githubUrl: "https://github.com/pragatipatil1428/meetingnotes",
    liveUrl: "https://meetingnotes-wheat.vercel.app/",
    image: "/images/projects/minutely.svg",
    featured: true,
  },
  {
    id: "spendly",
    name: "Spendly",
    title: "Personal Expense Tracker",
    description:
      "A full-stack personal finance application for tracking income and expenses, searching transactions, exporting data, and analyzing spending through server-computed MongoDB analytics.",
    category: "Full-Stack Web App · Finance · Analytics",
    categories: ["Full Stack", "Finance", "Analytics"],
    technologies: [
      "React 19",
      "Vite 6",
      "JavaScript ES Modules",
      "Node.js",
      "Express 4",
      "MongoDB",
      "Mongoose 8",
      "JWT",
      "bcryptjs",
      "Axios",
      "Chart.js",
      "React Context",
      "Vercel",
    ],
    highlights: [
      "Secure JWT authentication with bcrypt password hashing and protected REST APIs.",
      "Ownership-scoped MongoDB queries so users can only access and modify their own transactions.",
      "MongoDB aggregation pipelines for category spending, monthly trends, savings, and financial summaries.",
      "Complete transaction CRUD with search, filtering, sorting, date ranges, and CSV export.",
    ],
    overview:
      "Spendly is a full-stack personal expense tracker for managing income and expenses. Transactions are searchable, filterable, and exportable, while analytics — category spending, monthly income versus expenses, savings trends, top categories, and largest expenses — are computed on the server via MongoDB aggregation pipelines and rendered with Chart.js dashboards.",
    problemSolved:
      "Spreadsheets make it tedious to categorize spending, spot trends, and stay consistent across devices. Spendly replaces them with a focused dashboard backed by an Express REST API and MongoDB analytics: total balance, monthly income versus expenses, top spending categories, and one-click CSV export, all scoped to the signed-in user.",
    features: [
      {
        title: "Authentication",
        items: [
          "Registration and login with bcrypt password hashing",
          "JWT sessions with protected routes",
          "Profile management, password change, and account deletion",
          "Ownership-based authorization",
        ],
      },
      {
        title: "Transactions",
        items: [
          "Income and expense types",
          "Amount, category, description, date, and notes",
          "Create, edit, and delete with soft delete",
          "Search, type/category filters, date range filtering, and sorting",
          "CSV export",
        ],
      },
      {
        title: "Dashboard",
        items: [
          "Total balance, total income, and total expenses",
          "Current-month spending",
          "Monthly income and monthly expenses",
          "Savings, top spending category, and largest expense",
        ],
      },
      {
        title: "Analytics (server-computed)",
        items: [
          "Expense by category, monthly income vs expenses, and savings trends",
          "Top category and largest expense",
          "Date filters: this month, last month, last 3 months, this year, all time",
          "Chart.js visualizations: doughnut, bar, and line charts",
        ],
      },
    ],
    architecture: {
      stack: ["React / Vite", "Express REST API", "Mongoose", "MongoDB"],
      external: ["Chart.js Analytics"],
    },
    challenges: [
      "MongoDB aggregation pipelines for financial analytics",
      "Ownership-scoped queries and authorization",
      "JWT authentication with global 401 handling",
      "Serverless database connection reuse",
      "Responsive data visualization across devices",
    ],
    engineering: [
      "Express REST API",
      "MongoDB aggregation pipelines",
      "Mongoose",
      "Centralized Axios client",
      "JWT interceptor",
      "Global 401 handling",
      "React Context",
      "CSS custom properties",
      "Responsive tables",
      "Mobile card layout",
      "Loading skeletons",
      "Empty states",
      "Error states",
      "Confirmation dialogs",
      "Toast notifications",
      "Seed script with realistic demo data",
    ],
    results: [
      "Server-side analytics via MongoDB aggregation pipelines",
      "Ownership-scoped data access",
      "One-click CSV export",
      "Responsive Chart.js dashboards",
    ],
    contribution: contributionStatement,
    githubUrl: "https://github.com/pragatipatil1428/expensetracker",
    liveUrl: "https://expensetracker-nu-black.vercel.app/",
    image: "/images/projects/spendly.svg",
    featured: true,
  },
];
