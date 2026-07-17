'use client';

import { motion } from "framer-motion";
import { experienceItems } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Building scalable SaaS products across multiple domains."
        description="2+ years of full stack work on merchant platforms, event ticketing, and course management systems."
      />

      <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
        {experienceItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative mb-8 rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="absolute -left-[1.72rem] top-8 h-4 w-4 rounded-full border-4 border-white bg-sky-500 dark:border-slate-950" />
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-base text-slate-600 dark:text-slate-300">{item.company}</p>
              </div>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
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
