'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Zap, Briefcase, Code2, Mail, Moon, Sun } from "lucide-react";
import { navLinks } from "@/src/utils";

const sectionIcons: Record<string, React.ReactNode> = {
  home: <Home size={20} />,
  about: <User size={20} />,
  skills: <Zap size={20} />,
  experience: <Briefcase size={20} />,
  projects: <Code2 size={20} />,
  contact: <Mail size={20} />,
};

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sky-600 transition hover:border-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 md:h-14 md:w-14"
        >
          <Home size={20} />
        </a>

        {/* Navigation Tabs */}
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => {
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
                    ? "bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200"
                }`}
                title={link.label}
              >
                {sectionIcons[sectionId] || null}
              </motion.a>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        {/* <button
          type="button"
          onClick={() => setDarkMode((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200 md:h-12 md:w-12"
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}
      </div>
    </motion.aside>
  );
}
