'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/src/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Projects
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Selected work that blends product thinking and execution.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="bg-slate-100 p-4 dark:bg-slate-800">
              <Image src={project.image} alt={project.name} width={800} height={500} className="h-48 w-full rounded-2xl object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white">
                  GitHub
                </a>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-sky-600 dark:hover:bg-sky-500">
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
