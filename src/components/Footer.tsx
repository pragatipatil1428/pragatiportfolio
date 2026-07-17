import { Globe2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 py-10 text-sm text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-8">
        <p>© 2026 Pragati Patil. Crafted with care and modern web tools.</p>
        <div className="flex items-center gap-3">
          <a href="mailto:pragatipatil1428@gmail.com" className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href="https://www.linkedin.com/in/pragati-patil1428/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200" aria-label="LinkedIn">
            <Globe2 size={16} />
          </a>
          <a href="https://github.com/pragatipatil1428/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200" aria-label="GitHub">
            <Globe2 size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
