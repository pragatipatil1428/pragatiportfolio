'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Globe2, Mail, Sparkles } from "lucide-react";
import { heroStats } from "@/src/data/portfolio";

const floatingBadges = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];

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
            <Sparkles size={14} />
            Available for impactful product work
          </div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl lg:text-3xl">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Pragati Patil</span>.
          </h1>
          <p className="mt-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
            Full Stack Software Engineer
          </p>
          <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
            I build polished, scalable web experiences with a sharp focus on user experience, product thinking, and reliable engineering.
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
              <Globe2 size={14} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pragati-patil1428/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200"
            >
              <Globe2 size={14} />
              LinkedIn
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200"
            >
              <Mail size={14} />
              Contact
            </Link>
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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mt-6 flex flex-wrap gap-1.5 lg:hidden"
      >
        {floatingBadges.map((badge) => (
          <span key={badge} className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
            {badge}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
