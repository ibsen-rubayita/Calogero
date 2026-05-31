"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-11 place-items-center rounded-full border border-black/10 bg-white/80 text-navy transition hover:-translate-y-0.5 hover:border-gold dark:border-white/[0.15] dark:bg-white/10 dark:text-white"
    >
      {isDark ? <FiSun className="size-5" /> : <FiMoon className="size-5" />}
    </button>
  );
}
