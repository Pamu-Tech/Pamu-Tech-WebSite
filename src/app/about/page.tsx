import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FounderSection from "@/components/about/FounderSection";
import SectionBackground from "@/components/effects/SectionBackground";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Pamu Tech, a Sri Lankan founder-led, early-stage product-based technology brand building practical and accessible software.",
  path: "/about/",
});

const coreValues = [
  {
    title: "Practicality first",
    detail: "We focus on software that solves real, everyday problems without unnecessary complexity.",
  },
  {
    title: "Accessibility and inclusion",
    detail: "We design for diverse users, supporting local languages and clear, usable interfaces.",
  },
  {
    title: "Long-term ownership",
    detail: "As a product-based brand, we build, maintain and improve our own software over time.",
  },
  {
    title: "Honest engineering",
    detail: "We value reliability, user privacy and transparent communication over hype.",
  },
];

const philosophy = [
  "Start with a clearly understood problem.",
  "Build a dependable technical foundation.",
  "Ship focused, usable software and listen to real users.",
  "Refine continuously through feedback and careful iteration.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <SectionBackground variant="about-contours" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">ABOUT PAMU TECH</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A Sri Lankan product-based technology brand
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">
          Pamu Tech is a founder-led, early-stage technology brand based in Sri Lanka. We create, own and evolve digital products that address real-world challenges through reliable, accessible and practical software.
        </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our brand story</h2>
            <p className="mt-4 text-muted">
              Pamu Tech began with technology content creation, sharing practical knowledge, guides and insights with a growing audience. Through that work, it became clear that many everyday and domain-specific challenges needed dedicated software rather than articles alone.
            </p>
            <p className="mt-4 text-muted">
              This led to a deliberate shift from content creation to product development. Today, Pamu Tech operates on a product-based model: we identify meaningful problems, design focused applications and take long-term responsibility for the tools we put into the world.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Founder introduction</h2>
            <p className="mt-4 text-muted">
              Pamu Tech is led by its founder, combining software engineering with a strong interest in community-focused applications and environmental technology. Every product is shaped with direct attention to user needs, technical quality and long-term sustainability.
            </p>
            <h3 className="mt-6 text-lg font-bold">Early stage</h3>
            <p className="mt-2 text-muted">
              Pamu Tech is founder-led, self-funded and currently building its first products. We have not raised external funding, allowing us to stay focused on practical software and steady, deliberate growth.
            </p>
          </div>
        </div>
      </section>

      <FounderSection />

      {/* Proposed vision and mission: pending founder approval */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-xl font-bold sm:text-2xl">Vision</h2>
            <p className="mt-3 text-muted">
              To build dependable, accessible digital products from Sri Lanka that create lasting, positive impact for communities and the environment.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-xl font-bold sm:text-2xl">Mission</h2>
            <p className="mt-3 text-muted">
              To identify real-world problems, design thoughtful software with strong technical foundations, and continuously improve our products through real-world use and feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Core values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {coreValues.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-bg p-6">
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-muted">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Development philosophy</h2>
            <ul className="mt-6 space-y-3">
              {philosophy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Future direction</h2>
            <p className="mt-4 text-muted">
              We are expanding our product portfolio carefully, starting with community-focused mobile applications such as Pin Potha and environmental research platforms such as SLBIS. Our goal is steady, sustainable growth driven by real-world usefulness.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products/" className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 font-semibold text-on-accent">
                Explore Our Products <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/contact/" className="inline-flex h-11 items-center rounded-lg border border-border px-5 font-semibold hover:border-accent">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
