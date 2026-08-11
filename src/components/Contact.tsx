'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Globe2, Mail, MapPin, Phone, Send } from "lucide-react";
import LocationMap from "@/src/components/LocationMap";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", gotcha: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Thanks for reaching out! Your message has been sent.");
      setFormState({ name: "", email: "", message: "", gotcha: "" });
    } catch {
      setStatus("error");
      setStatusMessage("Could not reach the server. Please try again later.");
    }
  };

  const linkClasses =
    "flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 transition hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-indigo-700";

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
      <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-slate-200/80 bg-white/70 p-3.5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">Contact</p>
          <h2 className="mt-1 text-base font-semibold tracking-tight text-slate-950 dark:text-white">
            Let’s connect.
          </h2>
          <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
            Hiring, collaborating, or just saying hi — reach out.
          </p>

          <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            <a href="tel:+917030543403" className={linkClasses}>
              <Phone size={14} className="shrink-0 text-indigo-500 dark:text-indigo-400" />
              <span className="truncate">+91 70305 43403</span>
            </a>
            <a href="mailto:pragatipatil1428@gmail.com" className={linkClasses}>
              <Mail size={14} className="shrink-0 text-indigo-500 dark:text-indigo-400" />
              <span className="truncate">pragatipatil1428@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/pragati-patil1428/" target="_blank" rel="noreferrer" className={linkClasses}>
              <Globe2 size={14} className="shrink-0 text-indigo-500 dark:text-indigo-400" />
              <span className="truncate">LinkedIn</span>
            </a>
            <a href="https://github.com/pragatipatil1428/" target="_blank" rel="noreferrer" className={linkClasses}>
              <Globe2 size={14} className="shrink-0 text-indigo-500 dark:text-indigo-400" />
              <span className="truncate">GitHub</span>
            </a>
          </div>

          <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
            <MapPin size={14} className="shrink-0 text-indigo-500 dark:text-indigo-400" />
            <span className="truncate">Pune, Maharashtra, India</span>
          </div>
          <LocationMap />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200/80 bg-white/70 p-3.5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <input
            type="text"
            name="gotcha"
            value={formState.gotcha}
            onChange={(event) => setFormState({ ...formState, gotcha: event.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              Name
              <input required value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm text-slate-900 placeholder-slate-500 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-400" />
            </label>
            <label className="flex flex-col gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              Email
              <input type="email" required value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm text-slate-900 placeholder-slate-500 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-400" />
            </label>
          </div>
          <label className="mt-2 flex flex-col gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
            Message
            <textarea required rows={2} value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm text-slate-900 placeholder-slate-500 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-400" />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-indigo-500/30 transition hover:from-indigo-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-60 dark:from-indigo-500 dark:to-fuchsia-500 dark:hover:from-indigo-400 dark:hover:to-fuchsia-400"
          >
            <Send size={13} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "success" ? (
            <p role="status" className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={13} />
              {statusMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p role="alert" className="mt-2 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
              <AlertCircle size={13} />
              {statusMessage}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
