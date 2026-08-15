"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, CheckCircle2, ExternalLink, X } from "lucide-react";
import type { Project } from "@/src/data/projects";

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
      {children}
    </p>
  );
}

const linkClasses =
  "inline-flex items-center justify-center gap-1.5 rounded-full border border-indigo-300 bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-200 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-900";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/60 backdrop-blur-sm sm:items-center sm:p-4"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-slate-200/80 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:rounded-2xl"
          >
            {/* Sticky header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                  {project.category}
                </p>
                <h2
                  id="project-modal-title"
                  className="truncate text-sm font-semibold text-slate-900 dark:text-white"
                >
                  {project.name} — {project.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-900"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto overscroll-contain">
              <div className="relative bg-slate-100 dark:bg-slate-800/80">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  width={800}
                  height={500}
                  className="h-36 w-full object-cover sm:h-44"
                />
              </div>

              <div className="space-y-6 p-4 sm:p-6">
                {/* Actions */}
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:from-indigo-500 dark:to-fuchsia-500 dark:hover:from-indigo-400 dark:hover:to-fuchsia-400 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-900"
                  >
                    <GitHubIcon size={13} />
                    GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className={linkClasses}>
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                </div>

                {project.note ? (
                  <p className="rounded-lg border border-amber-200/70 bg-amber-50/60 px-3 py-2 text-[11px] leading-4 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-300">
                    {project.note}
                  </p>
                ) : null}

                {/* Overview */}
                <section aria-labelledby="overview-heading">
                  <SectionLabel>Overview</SectionLabel>
                  <h3 id="overview-heading" className="sr-only">
                    Overview
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {project.overview}
                  </p>
                </section>

                {/* Problem solved */}
                <section aria-labelledby="problem-heading">
                  <SectionLabel>Problem Solved</SectionLabel>
                  <h3 id="problem-heading" className="sr-only">
                    Problem Solved
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {project.problemSolved}
                  </p>
                </section>

                {/* Key features */}
                <section aria-labelledby="features-heading">
                  <SectionLabel>Key Features</SectionLabel>
                  <h3 id="features-heading" className="sr-only">
                    Key Features
                  </h3>
                  <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-3.5 dark:border-slate-800 dark:bg-slate-950/50"
                      >
                        <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                          {group.title}
                        </h4>
                        <ul className="mt-2 space-y-1.5">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-1.5 text-[11px] leading-4 text-slate-600 dark:text-slate-300"
                            >
                              <CheckCircle2
                                size={12}
                                className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Architecture */}
                <section aria-labelledby="architecture-heading">
                  <SectionLabel>Architecture</SectionLabel>
                  <h3 id="architecture-heading" className="sr-only">
                    Architecture
                  </h3>
                  <div className="mt-2 flex flex-col items-start rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-950/50">
                    {project.architecture.stack.map((layer, index) => (
                      <div key={layer} className="flex flex-col items-start">
                        <div className="rounded-lg border border-indigo-200/70 bg-indigo-50/60 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:border-indigo-500/30 dark:bg-indigo-950/40 dark:text-slate-100">
                          {layer}
                        </div>
                        {index < project.architecture.stack.length - 1 ? (
                          <ArrowDown
                            size={14}
                            className="my-1 ml-3 text-indigo-400 dark:text-indigo-500"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                    ))}
                    <div className="mt-3 flex flex-col items-start gap-1.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        External Services
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.architecture.external.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-fuchsia-300/70 bg-fuchsia-50/60 px-2.5 py-1 text-[11px] font-medium text-fuchsia-700 dark:border-fuchsia-500/30 dark:bg-fuchsia-950/40 dark:text-fuchsia-300"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Technical challenges */}
                <section aria-labelledby="challenges-heading">
                  <SectionLabel>Technical Challenges</SectionLabel>
                  <h3 id="challenges-heading" className="sr-only">
                    Technical Challenges
                  </h3>
                  <ol className="mt-2 space-y-1.5">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={challenge}
                        className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-[9px] font-semibold text-white">
                          {index + 1}
                        </span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Engineering highlights */}
                <section aria-labelledby="engineering-heading">
                  <SectionLabel>Engineering Highlights</SectionLabel>
                  <h3 id="engineering-heading" className="sr-only">
                    Engineering Highlights
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.engineering.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Results */}
                <section aria-labelledby="results-heading">
                  <SectionLabel>Results &amp; Capabilities</SectionLabel>
                  <h3 id="results-heading" className="sr-only">
                    Results &amp; Capabilities
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="flex gap-1.5 text-xs leading-5 text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 shrink-0 text-indigo-500 dark:text-indigo-400"
                        />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Contribution */}
                <section
                  aria-labelledby="contribution-heading"
                  className="rounded-xl border border-indigo-200/70 bg-indigo-50/40 p-4 dark:border-indigo-500/20 dark:bg-indigo-950/30"
                >
                  <SectionLabel>My Contribution</SectionLabel>
                  <h3 id="contribution-heading" className="sr-only">
                    My Contribution
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-700 dark:text-slate-200">
                    {project.contribution}
                  </p>
                </section>

                {/* Footer actions */}
                <div className="flex flex-col gap-2 border-t border-slate-200/80 pt-4 dark:border-slate-800 sm:flex-row">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClasses}
                  >
                    <GitHubIcon size={13} />
                    View on GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className={linkClasses}>
                    <ExternalLink size={13} />
                    Open Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
