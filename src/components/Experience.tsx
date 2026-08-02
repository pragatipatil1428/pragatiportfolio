'use client';

import { motion } from "framer-motion";
import { experienceItems } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Building scalable SaaS products across multiple domains."
        description="2+ years of full stack work on merchant platforms, event ticketing, and course management systems."
      />

      <div className="relative border-l border-slate-200 pl-4 dark:border-slate-800">
        {experienceItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative mb-5 rounded-xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-800"
          >
            <div className="absolute -left-[1.34rem] top-6 h-3 w-3 rounded-full border-4 border-white bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] dark:border-slate-950" />
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">{item.period}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{item.company}</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-300">{item.description}</p>
            <ul className="mt-3 space-y-1.5 text-xs leading-5 text-slate-600 dark:text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
