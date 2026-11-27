"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/config/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg transition-colors duration-200 md:bg-bg/95 md:backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight" aria-label="Pamu Tech home">
          <img src="/logos/pamu-tech-logo.svg" alt="" width={36} height={36} className="h-9 w-9" aria-hidden="true" />
          <span>Pamu<span className="text-accent-text"> Tech</span></span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {nav.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm transition-colors duration-150 ${
                  active ? "font-semibold text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {n.label}
                {active && (
                  <span
                    className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact/" className="hidden h-11 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-on-accent transition-transform duration-150 hover:-translate-y-px md:inline-flex">
            Contact
          </Link>
          <button
            ref={menuBtnRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {nav.map((n) => {
              const active = isActive(n.href);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-11 items-center text-base ${active ? "font-semibold text-accent-text" : ""}`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact/"
                aria-current={isActive("/contact/") ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-11 items-center text-base ${isActive("/contact/") ? "font-semibold text-accent-text" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
