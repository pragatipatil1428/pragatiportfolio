'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FolderGit2, Mail } from "lucide-react";
import { heroStats } from "@/src/data/portfolio";
import { scrollToId } from "@/src/utils";

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-[380px] max-w-7xl flex-col justify-center px-6 py-8 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-indigo-200/70 bg-indigo-50/80 px-2.5 py-0.5 text-[11px] font-medium text-indigo-700 backdrop-blur dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
            <span className="relative flex size-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            Open to full-time opportunities
          </div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl lg:text-3xl">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Pragati Patil</span>.
          </h1>
          <p className="mt-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
            Full Stack Software Engineer
          </p>
          <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
            I design and ship fast, scalable web applications for B2B SaaS — pairing thoughtful user experience with clean, reliable engineering.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href="/Pragati_Patil_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-sm shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500 dark:from-indigo-500 dark:to-fuchsia-500 dark:hover:from-indigo-400 dark:hover:to-fuchsia-400"
            >
              <Download size={14} />
              Download Resume
            </a>
            <a
              href="https://github.com/pragatipatil1428/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pragati-patil1428/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToId("projects");
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200"
            >
              <FolderGit2 size={14} />
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToId("contact");
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200"
            >
              <Mail size={14} />
              Contact
            </a>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-slate-200/80 bg-white/70 px-2.5 py-2 shadow-sm backdrop-blur transition hover:border-indigo-200 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-800">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative mx-auto hidden w-full max-w-[15rem] lg:block"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-fuchsia-400/30 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 p-2 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <Image
              src="/images/profile.svg"
              alt="Stylized portrait of Pragati Patil"
              width={640}
              height={760}
              priority
              className="h-auto w-full rounded-[1.6rem]"
            />
          </div>

          {/* Floating chips */}
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-5 top-10 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-indigo-300"
          >
            ⚛️ React
          </motion.span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-3 top-1/3 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-violet-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-violet-300"
          >
            ▲ Next.js
          </motion.span>
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-fuchsia-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-fuchsia-300"
          >
            ⚡ TypeScript
          </motion.span>
        </motion.div>
      </div>

    </section>
  );
}
