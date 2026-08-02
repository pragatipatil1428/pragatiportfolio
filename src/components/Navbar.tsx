'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { navLinks } from "@/src/utils";
import { useTheme } from "@/src/hooks/useTheme";
import { useActiveSection } from "@/src/hooks/useActiveSection";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 md:hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-base font-semibold tracking-wide text-slate-900 dark:text-slate-100">
          Pragati.dev
        </a>
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-300 transition hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-500"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-4 rounded-full bg-slate-800 dark:bg-slate-100"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-4 rounded-full bg-slate-800 dark:bg-slate-100"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-4 rounded-full bg-slate-800 dark:bg-slate-100"
            />
          </button>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            suppressHydrationWarning
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/70 dark:border-slate-800"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
