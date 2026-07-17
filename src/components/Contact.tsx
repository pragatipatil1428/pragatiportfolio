'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Globe2, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = `mailto:pragatipatil1428@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Let’s shape something thoughtful together.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            If you’re hiring, collaborating, or just want to connect, feel free to reach out.
          </p>

          <div className="mt-8 space-y-4">
            <a href="mailto:pragatipatil1428@gmail.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 transition hover:border-slate-400 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
              <Mail size={18} className="text-sky-500" />
              <span>pragatipatil1428@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/pragati-patil1428/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 transition hover:border-slate-400 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
              <Globe2 size={18} className="text-sky-500" />
              <span>linkedin.com/in/pragati-patil1428</span>
            </a>
            <a href="https://github.com/pragatipatil1428/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 transition hover:border-slate-400 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
              <Globe2 size={18} className="text-sky-500" />
              <span>github.com/pragatipatil1428</span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
              <MapPin size={18} className="text-sky-500" />
              <span>India</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
              <input required value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950/80" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
              <input type="email" required value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950/80" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Message
            <textarea required rows={6} value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950/80" />
          </label>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500">
            <Send size={16} />
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
