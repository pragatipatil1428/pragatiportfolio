"use client";

import { useCallback, useSyncExternalStore } from "react";

// Shared module-level theme store so every instance (Sidebar, Navbar) stays in sync.
let darkMode = false;
const listeners = new Set<() => void>();

function readTheme(): boolean {
  if (typeof window === "undefined") return false;
  const savedTheme = window.localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme ? savedTheme === "dark" : prefersDark;
}

darkMode = readTheme();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return darkMode;
}

function getServerSnapshot() {
  // Server always renders with light theme; the FOUC script sets the real
  // class before hydration and useSyncExternalStore re-renders if it differs.
  return false;
}

function applyTheme(next: boolean) {
  darkMode = next;
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", next);
  }
  if (typeof window !== "undefined") {
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleDarkMode = useCallback(() => applyTheme(!darkMode), []);

  return { darkMode: isDark, toggleDarkMode };
}
