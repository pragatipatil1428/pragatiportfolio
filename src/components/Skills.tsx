'use client';

import { motion } from "framer-motion";
import { skillGroups } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="A modern toolkit for product engineering and product thinking."
        description="I keep my stack focused, pragmatic, and ready for both fast-moving startups and high-scale product teams."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur transition dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-100 p-2 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
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
