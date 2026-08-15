'use client';

import { motion } from "framer-motion";
import { aboutHighlights, certificationItems } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Turning complex requirements into clean, dependable products."
        description="A product-minded full stack engineer focused on B2B SaaS — from first commit to production."
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            I’m a full stack software engineer with 2+ years of experience shipping B2B SaaS platforms. I move comfortably from interface details to API architecture, and I care deeply about building products that are fast, secure, and genuinely useful to the people who use them.
          </p>
          <div className="mt-5 grid gap-2.5">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-xl font-semibold text-slate-950 dark:text-white">Full stack</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Frontend & backend</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-3">
          {aboutHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-slate-200/80 bg-white/70 p-3.5 shadow-sm backdrop-blur transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-800"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">{item.title}</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
          Education & Certifications
        </p>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
          {certificationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-slate-200/80 bg-white/70 p-3.5 shadow-sm backdrop-blur transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-800"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-gradient-to-br from-indigo-100 to-violet-100 p-1.5 text-indigo-600 dark:from-indigo-900/40 dark:to-violet-900/40 dark:text-indigo-300">
                    <Icon size={14} />
                  </div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{item.title}</p>
                </div>
                <p className="mt-2 text-[11px] leading-4 text-slate-600 dark:text-slate-300">{item.issuer}</p>
                <p className="mt-1 text-[11px] font-medium text-indigo-600 dark:text-indigo-300">
                  {item.year}
                  {item.grade ? ` · ${item.grade}` : ""}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
