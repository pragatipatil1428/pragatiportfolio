'use client';

import { motion } from "framer-motion";
import { experiences } from "@/src/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          A progression from product delivery to broader ownership.
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.company}</h3>
                <p className="text-base text-slate-600 dark:text-slate-300">{item.role}</p>
              </div>
              <span className="text-sm font-medium text-sky-600">{item.period}</span>
            </div>
            <ul className="mt-6 space-y-2 text-slate-600 dark:text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
