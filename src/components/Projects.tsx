'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectItems } from "@/src/data/portfolio";
import SectionHeading from "@/src/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds showcasing product thinking and craft."
        description="Personal and professional projects reflecting my engineering approach."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projectItems.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="overflow-hidden rounded-xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="bg-slate-100 p-3 dark:bg-slate-800/80">
              <Image src={project.image} alt={project.title} width={800} height={500} className="h-32 w-full rounded-lg object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200">
                  <ExternalLink size={12} />
                  GitHub
                </a>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500">
                    <ExternalLink size={12} />
                    Demo
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
