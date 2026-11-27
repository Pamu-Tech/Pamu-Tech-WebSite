import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { products, site } from "@/config/site";
import { featuredFaqItems } from "@/content/faq";
import updates from "@/content/updates.json";

const approach = [
  "Identify real-world problems.",
  "Develop strong technical foundations.",
  "Build practical digital solutions.",
  "Validate products with real users.",
  "Continuously improve based on feedback.",
];
const areas = ["Software innovation", "Environmental technology", "Community-focused applications", "Cloud technologies", "Accessible digital products"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        {site.effects.heroBackground && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="hero-bg-grid absolute inset-0" />
            <div className="hero-bg-glow absolute inset-0" />
          </div>
        )}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">INNOVATION. TECHNOLOGY. IMPACT.</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Pamu Tech: Building Technology.<br />Creating Meaningful Impact.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Pamu Tech creates innovative digital products that address real-world challenges through reliable, accessible and practical technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/products/" className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-6 font-semibold text-on-accent transition-colors duration-150">Explore Our Products</Link>
            <Link href="/about/" className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-6 font-semibold transition-colors duration-150 hover:border-accent">About Pamu Tech</Link>
          </div>
          <a href="#about-summary" className="scroll-cue mt-10 inline-flex min-h-11 items-center gap-2 text-xs font-semibold tracking-wider text-muted uppercase hover:text-fg">
            Scroll to explore <ArrowRight className="h-3.5 w-3.5 rotate-90" aria-hidden />
          </a>
        </div>
      </section>

      <section id="about-summary" className="reveal border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">A Sri Lankan product-based technology brand</h2>
          <p className="mt-4 max-w-3xl text-muted">
            Pamu Tech is a founder-led, early-stage brand. We build and own our software products, focusing on real-world problem solving and meaningful innovation.
          </p>
          <Link href="/about/" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-text">About Pamu Tech <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Featured products</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <article
                key={p.slug}
                className={`reveal relative overflow-hidden rounded-2xl border bg-bg p-6 transition-colors duration-150 ${
                  p.accent === "green"
                    ? "border-leaf/50 hover:border-leaf focus-within:border-leaf"
                    : "border-border hover:border-accent focus-within:border-accent"
                }`}
              >
                {p.accent === "green" && site.effects.slbisNodes && (
                  <svg
                    className="slbis-nodes pointer-events-none absolute right-3 top-3 h-24 w-24 text-leaf"
                    viewBox="0 0 100 100"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M20 25 L55 18 L80 45 L45 72 Z" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.2" />
                    <circle className="slbis-node-pulse" cx="20" cy="25" r="3" fill="currentColor" />
                    <circle className="slbis-node-pulse" cx="55" cy="18" r="3" fill="currentColor" />
                    <circle className="slbis-node-pulse" cx="80" cy="45" r="3" fill="currentColor" />
                    <circle className="slbis-node-pulse" cx="45" cy="72" r="3" fill="currentColor" />
                  </svg>
                )}
                <p className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${p.accent === "green" ? "border-leaf text-leaf" : "border-accent text-accent-text"}`}>
                  {p.status === "Available" ? "Available Now" : p.status}
                </p>
                <h3 className="mt-4 text-xl font-bold">{p.name}: {p.tagline}</h3>
                <p className="mt-3 text-muted">{p.description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2"><Check className={`h-4 w-4 ${p.accent === "green" ? "text-leaf" : "text-accent-text"}`} aria-hidden />{h}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.external && (
                    <a href={p.external} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-lg bg-accent px-5 font-semibold text-on-accent">Get it on Google Play</a>
                  )}
                  <Link href={p.href} className="inline-flex h-11 items-center rounded-lg border border-border px-5 font-semibold hover:border-accent">Explore {p.name}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our approach</h2>
            <ol className="mt-6 space-y-3">
              {approach.map((a, i) => (
                <li key={a} className="flex gap-3"><span className="font-bold text-accent-text">{i + 1}.</span><span className="text-muted">{a}</span></li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Innovation and impact</h2>
            <p className="mt-4 text-muted">Areas of interest that guide our product ideas. These are focus areas, not commercial services.</p>
            <ul className="mt-4 space-y-2">{areas.map((a) => <li key={a} className="border-b border-border py-2">{a}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Partner with us</h2>
          <p className="mt-4 max-w-3xl text-muted">We welcome research collaborations, startup investors, technology partners, product testers and future contributors.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/contact/" className="inline-flex h-12 items-center rounded-lg bg-accent px-6 font-semibold text-on-accent">Let&apos;s Connect</Link>
            <Link href="/ai-solutions/" className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent-text">Explore AI solutions <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Latest updates</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {updates.map((u) => (
              <div key={u.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-lg font-bold">{u.title}</h3>
                <p className="mt-2 text-sm text-muted">{u.summary}</p>
                <Link href={u.href} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-text">
                  {u.cta} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
          <a href={site.blog} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-text">Visit the blog <ArrowRight className="h-4 w-4" aria-hidden /></a>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion items={featuredFaqItems} />
          </div>
          <Link href="/faq/" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-text">
            View all FAQs <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
