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
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="h-5 w-5 text-[var(--text)]"
      >
        <path
          fill="currentColor"
          d="M44.7 5.4c-3.1-.8-6.3-1-9.5-.7C21.7 5.9 11.2 17.4 11.2 31.1c0 14.8 12 26.8 26.8 26.8 7.5 0 14.2-3.1 19.1-8-3.8 9.4-13 16.1-23.8 16.1-14.7 0-26.6-11.9-26.6-26.6 0-13.7 10.1-25.1 23.5-26.4 5-.5 10 .2 14.5 2.4z"
        />
        <path
          fill="currentColor"
          d="M20 18l4.5 4.5L20 27l-4.5-4.5L20 18z"
        />
        <path
          fill="currentColor"
          d="M35 9l3.5 3.5L35 16l-3.5-3.5L35 9z"
        />
      </svg>
      <span className="sr-only">
        {theme === "light" ? "Dark" : "Light"} Mode
      </span>
    </button>
  );
};

export default ThemeToggle;
