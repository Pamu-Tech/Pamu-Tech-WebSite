"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onVisibility = () => {
      root.classList.toggle("tab-hidden", document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibility);

    let ticking = false;
    const updateScroll = () => {
      ticking = false;
      const y = window.scrollY;
      if (site.effects.scrollProgress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
        root.style.setProperty("--scroll-progress", progress.toFixed(4));
      }
      if (site.effects.headerScroll) {
        const header = document.querySelector("header");
        if (header) header.classList.toggle("is-scrolled", y > 12);
      }
      root.classList.toggle("has-scrolled", y > 24);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    let observer: IntersectionObserver | undefined;
    let rafId = 0;
    if (site.effects.scrollReveal && !reduced && "IntersectionObserver" in window) {
      rafId = requestAnimationFrame(() => {
        root.classList.add("js-reveal");
        const targets = document.querySelectorAll<HTMLElement>(".reveal");
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.08 }
        );
        targets.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.98) {
            el.classList.add("is-visible");
          } else {
            observer?.observe(el);
          }
        });
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [pathname]);

  if (!site.effects.scrollProgress) return null;
  return <div className="scroll-progress" aria-hidden="true" />;
}
