import { site } from "@/config/site";

export type BackgroundVariant =
  | "hero-dots"
  | "about-lines"
  | "approach-line"
  | "impact-nodes"
  | "partner-arcs"
  | "updates-sweep"
  | "faq-quiet"
  | "about-contours"
  | "catalogue-grid"
  | "pin-potha-warm"
  | "slbis-topography"
  | "slbis-sync"
  | "innovation-network"
  | "ai-circuit"
  | "investors-line"
  | "contact-pulse";

export default function SectionBackground({ variant }: { variant: BackgroundVariant }) {
  if (!site.effects.variants[variant]) return null;

  return (
    <div
      className={`sec-bg sec-bg--${variant} pointer-events-none absolute inset-0 overflow-hidden`}
      aria-hidden="true"
    >
      {variant === "hero-dots" && (
        <>
          <div className="hero-bg-grid absolute inset-0" />
          <div className="hero-bg-glow absolute inset-0" />
        </>
      )}

      {variant === "partner-arcs" && (
        <svg className="sec-bg-svg h-full w-full opacity-20" viewBox="0 0 800 300" fill="none">
          <circle className="sec-drift-slow text-accent" cx="320" cy="150" r="110" stroke="currentColor" strokeWidth="1" />
          <circle className="sec-drift-rev text-accent" cx="460" cy="150" r="110" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}

      {variant === "impact-nodes" && (
        <svg className="sec-bg-svg hidden h-full w-full opacity-20 sm:block" viewBox="0 0 800 300" fill="none">
          <path d="M120 80 L280 140 L440 90 L600 170 L700 110" stroke="currentColor" className="text-muted" strokeWidth="1" />
          <circle className="sec-float text-accent" cx="120" cy="80" r="4" fill="currentColor" />
          <circle className="sec-float text-accent" cx="280" cy="140" r="4" fill="currentColor" />
          <circle className="sec-float text-accent" cx="440" cy="90" r="4" fill="currentColor" />
          <circle className="sec-float text-accent" cx="600" cy="170" r="4" fill="currentColor" />
          <circle className="sec-float text-accent" cx="700" cy="110" r="4" fill="currentColor" />
        </svg>
      )}

      {variant === "slbis-sync" && (
        <svg className="sec-bg-svg hidden h-full w-full opacity-25 sm:block" viewBox="0 0 800 200" fill="none">
          <line x1="160" y1="100" x2="640" y2="100" stroke="currentColor" className="text-leaf" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="160" cy="100" r="5" fill="currentColor" className="text-leaf" />
          <circle cx="400" cy="100" r="5" fill="currentColor" className="text-leaf" />
          <circle cx="640" cy="100" r="5" fill="currentColor" className="text-leaf" />
        </svg>
      )}

      {variant === "contact-pulse" && (
        <svg className="sec-bg-svg h-full w-full opacity-15" viewBox="0 0 600 300" fill="none">
          <circle className="sec-pulse-ring text-accent" cx="500" cy="150" r="40" stroke="currentColor" strokeWidth="1" />
          <circle className="sec-pulse-ring text-accent" cx="500" cy="150" r="85" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
}
