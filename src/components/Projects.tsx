'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectItems } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected builds that showcase clarity, craft, and product focus."
        description="I keep the portfolio focused on public, personal projects that reflect how I think and build."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projectItems.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="bg-slate-100 p-4 dark:bg-slate-800/80">
              <Image src={project.image} alt={project.title} width={800} height={500} className="h-48 w-full rounded-[1.2rem] object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200">
                  <ExternalLink size={16} />
                  GitHub
                </a>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
