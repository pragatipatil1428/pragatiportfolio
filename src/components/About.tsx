'use client';

import { motion } from "framer-motion";

const highlights = [
  { label: "Experience", value: "2+ years" },
  { label: "Current company", value: "Fynbit Tech" },
  { label: "Tech focus", value: "React, Next.js, Node.js" },
  { label: "Interests", value: "Product thinking, automation, UX" },
  { label: "Career goal", value: "Build scalable products that create real impact" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          About me
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Building useful software with calm, modern interfaces.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
