"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { projects, projectFilters, type Project } from "@/src/data/projects";
import SectionHeading from "@/src/components/SectionHeading";
import ProjectDetailsModal from "@/src/components/ProjectDetailsModal";

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const filterButtonClasses = (active: boolean) =>
  `rounded-full border px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-950 ${
    active
      ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm shadow-indigo-500/30 dark:from-indigo-500 dark:to-fuchsia-500"
      : "border-slate-200 bg-white/60 text-slate-600 hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:text-indigo-300"
  }`;

const outlineButtonClasses =
  "inline-flex items-center justify-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-950";

const primaryButtonClasses =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:from-indigo-500 dark:to-fuchsia-500 dark:hover:from-indigo-400 dark:hover:to-fuchsia-400 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-950";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        description="Selected full-stack applications demonstrating scalable architecture, secure authentication, database design, APIs, payments, analytics, and modern frontend development."
      />

      {/* Filters */}
      <div
        className="mb-5 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={filterButtonClasses(activeFilter === filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur transition hover:border-indigo-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-800"
          >
            {/* Preview */}
            <div className="relative bg-slate-100 p-2 dark:bg-slate-800/80">
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                width={800}
                height={500}
                className="h-28 w-full rounded-lg object-cover"
              />
              <span
                className="absolute right-3 top-3 rounded-full border border-slate-200/70 bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-700 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
                {project.category}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                {project.title}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              {/* Technology badges */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 ? (
                  <span className="rounded-full border border-dashed border-slate-300 bg-transparent px-2 py-0.5 text-[11px] text-slate-500 dark:border-slate-600 dark:text-slate-400">
                    +{project.technologies.length - 5} more
                  </span>
                ) : null}
              </div>

              {/* Highlights */}
              <ul className="mt-3 space-y-1.5">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-1.5 text-[11px] leading-4 text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2
                      size={13}
                      className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {project.note ? (
                <p className="mt-3 flex items-start gap-1.5 rounded-lg border border-amber-200/70 bg-amber-50/60 px-2.5 py-1.5 text-[11px] leading-4 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-300">
                  <Sparkles size={12} className="mt-0.5 shrink-0" />
                  {project.note}
                </p>
              ) : null}

              {/* Actions */}
              <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={primaryButtonClasses}
                >
                  View Details
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={outlineButtonClasses}
                >
                  <GitHubIcon size={13} />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={outlineButtonClasses}
                >
                  <ExternalLink size={13} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectDetailsModal project={selectedProject} onClose={closeModal} />
    </section>
  );
}
