'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 scroll-mt-24 lg:flex-row lg:items-center lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex-1"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Software Engineer
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Hi, I’m Pragati Patil.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          I build thoughtful digital products for merchants, events, and learning platforms with a focus on smooth UX and reliable engineering.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/Pragati_Patil_Resume.pdf"
            download
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-sky-600 dark:hover:bg-sky-500"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/pragatipatil1428/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pragati-patil1428/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="flex flex-1 justify-center"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <Image
            src="/images/profile.svg"
            alt="Pragati Patil"
            width={420}
            height={520}
            className="rounded-[1.4rem]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
