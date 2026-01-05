"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const preferred = getPreferredTheme();
    setTheme(preferred);
    applyTheme(preferred);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyTheme(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const handleToggle = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center justify-center border border-[var(--line)] p-2 rounded-full transition hover:bg-[color-mix(in srgb, var(--line) 25%, transparent)]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <img
        src="/icons/night-mode.svg"
        alt=""
        className="h-5 w-5"
      />
      <span className="sr-only">
        {theme === "light" ? "Dark" : "Light"} Mode
      </span>
    </button>
  );
};

export default ThemeToggle;
