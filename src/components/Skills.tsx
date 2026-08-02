'use client';

import { motion } from "framer-motion";
import { skillGroups } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="A pragmatic, modern tech toolkit."
        description="React, Next.js, Node.js, PostgreSQL, and tools for scalable product work."
      />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-xl border border-slate-200/80 bg-white/70 p-3.5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-800"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-gradient-to-br from-indigo-100 to-violet-100 p-1.5 text-indigo-600 dark:from-indigo-900/40 dark:to-violet-900/40 dark:text-indigo-300">
                  <Icon size={14} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
