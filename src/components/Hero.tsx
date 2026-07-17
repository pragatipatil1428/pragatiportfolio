'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Globe2, Mail, Sparkles } from "lucide-react";
import { heroStats } from "@/src/data/portfolio";

const floatingBadges = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-sky-50/80 px-3 py-1 text-sm font-medium text-sky-700 backdrop-blur dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300">
            <Sparkles size={16} />
            Available for impactful product work
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
            Hi, I’m <span className="bg-gradient-to-r from-sky-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">Pragati Patil</span>.
          </h1>
          <p className="mt-6 text-xl font-medium text-slate-700 dark:text-slate-200">
            Full Stack Software Engineer
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I build polished, scalable web experiences with a sharp focus on user experience, product thinking, and reliable engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Pragati_Patil_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="https://github.com/pragatipatil1428/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200"
            >
              <Globe2 size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pragati-patil1428/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200"
            >
              <Globe2 size={16} />
              LinkedIn
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200"
            >
              <Mail size={16} />
              Contact
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-2xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-200/60 via-violet-200/40 to-cyan-200/60 blur-3xl dark:from-sky-800/40 dark:via-violet-800/30 dark:to-cyan-800/50" />
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-2xl shadow-slate-200/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30">
            <Image
              src="/images/profile.svg"
              alt="Pragati Patil"
              width={720}
              height={840}
              className="rounded-[1.6rem] object-cover"
              priority
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {floatingBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
