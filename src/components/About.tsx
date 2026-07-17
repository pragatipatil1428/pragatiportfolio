'use client';

import { motion } from "framer-motion";
import { aboutHighlights } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Designing scalable, thoughtful products with engineering focus."
        description="Building for reliability, performance, and meaningful user impact."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35 }}
          className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m a full stack engineer who enjoys moving from UI details to API architecture with equal care. I care deeply about making teams faster, products clearer, and interfaces more delightful.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-3xl font-semibold text-slate-950 dark:text-white">2+</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Years of experience</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-3xl font-semibold text-slate-950 dark:text-white">B2B</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">SaaS & product work</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-3xl font-semibold text-slate-950 dark:text-white">Full stack</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Frontend & backend</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {aboutHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">{item.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
