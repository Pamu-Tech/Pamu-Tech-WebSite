"use client";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between dark and light theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg transition-colors hover:border-accent"
    >
      <Sun className="hidden h-5 w-5 [[data-theme=dark]_&]:block" aria-hidden />
      <Moon className="hidden h-5 w-5 [[data-theme=light]_&]:block" aria-hidden />
    </button>
  );
}
