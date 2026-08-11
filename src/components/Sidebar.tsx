'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Zap, Briefcase, Code2, Mail, Moon, Sun } from "lucide-react";
import { navLinks } from "@/src/utils";
import { useTheme } from "@/src/hooks/useTheme";
import { useActiveSection } from "@/src/hooks/useActiveSection";

const sectionIcons: Record<string, React.ReactNode> = {
  about: <User size={20} />,
  skills: <Zap size={20} />,
  experience: <Briefcase size={20} />,
  projects: <Code2 size={20} />,
  contact: <Mail size={20} />,
};

export default function Sidebar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const activeSection = useActiveSection();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 top-0 z-40 hidden h-screen w-20 border-r border-slate-200/70 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:flex md:w-24"
    >
      <div className="flex h-full flex-col items-center justify-between py-6">
        {/* Logo */}
        <a
          href="#home"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 transition hover:border-indigo-400 dark:border-indigo-500/40 dark:from-indigo-950/60 dark:to-violet-950/60 dark:text-indigo-400 dark:hover:border-indigo-400 md:h-14 md:w-14"
          aria-label="Back to top"
        >
          <Home size={20} />
        </a>

        {/* Navigation Tabs */}
        <nav className="flex flex-col gap-3" aria-label="Sections">
          {navLinks
            .filter((link) => link.href !== "#home")
            .map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition md:h-12 md:w-12 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200"
                }`}
                title={link.label}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive ? (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-indigo-500 to-fuchsia-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                ) : null}
                {sectionIcons[sectionId] || null}
              </motion.a>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <motion.button
          type="button"
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:text-indigo-300 md:h-12 md:w-12"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          suppressHydrationWarning
          disabled={true}
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
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.aside>
  );
}
