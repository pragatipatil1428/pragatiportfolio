'use client';

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Let’s build something useful together.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
            <a href="mailto:pragatipatil1428@gmail.com" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-sky-600 dark:text-slate-100">
              pragatipatil1428@gmail.com
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
            <a href="tel:+917030543403" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-sky-600 dark:text-slate-100">
              +91 70305 43403
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</p>
            <a href="https://www.linkedin.com/in/pragati-patil1428/" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-sky-600 dark:text-slate-100">
              linkedin.com/in/pragati-patil1428
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">GitHub</p>
            <a href="https://github.com/pragatipatil1428/" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-sky-600 dark:text-slate-100">
              github.com/pragatipatil1428
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
