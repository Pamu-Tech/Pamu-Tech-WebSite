import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Innovation",
  description:
    "How Pamu Tech approaches research-driven innovation, real-world problem identification, architecture principles, sustainability and accessibility.",
  path: "/innovation/",
});

const principles = [
  {
    title: "Offline-first where it matters",
    detail: "Field and community tools should remain dependable even when connectivity is limited or intermittent.",
  },
  {
    title: "Clean, modular foundations",
    detail: "We keep our software architecture focused and maintainable so products can evolve steadily over time.",
  },
  {
    title: "Privacy and restraint",
    detail: "We collect only what is necessary for a product to function and avoid intrusive tracking.",
  },
  {
    title: "Accessible by design",
    detail: "Clear typography, keyboard navigation, local language support and respectful defaults are built in from the start.",
  },
];

const roadmap = [
  {
    phase: "Current Focus",
    detail: "Maintaining and improving Pin Potha while advancing core development of the SLBIS ecosystem.",
  },
  {
    phase: "Near-Term Direction",
    detail: "Validating SLBIS workflows with ecological researchers and expanding multilingual community tools.",
  },
  {
    phase: "Long-Term Direction",
    detail: "Growing a sustainable portfolio of Sri Lankan-built software products for communities and the environment.",
  },
];

export default function InnovationPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">INNOVATION</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Research-driven innovation for real-world problems
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">
          At Pamu Tech, innovation starts by observing practical challenges in everyday life, community spaces and environmental research, then designing dependable software to address them.
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our development approach</h2>
            <p className="mt-4 text-muted">
              We do not build technology for its own sake. Every product begins with real-world problem identification, followed by research into how people actually work, what constraints they face and how software can fit naturally into their routine.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Sustainability &amp; accessibility</h2>
            <p className="mt-4 text-muted">
              Sustainable software is lightweight, maintainable and respectful of user devices. Accessibility means supporting local languages such as Sinhala, Tamil and English, designing for low-connectivity environments and ensuring interfaces are clear for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Architecture principles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">AI as a tool</h2>
          <p className="mt-3 max-w-3xl text-muted">
            We treat artificial intelligence as a practical engineering tool rather than a marketing label. No AI product is available yet.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
              <span className="text-muted">AI tools, including Claude, support our software development work.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
              <span className="text-muted">AI features may be explored in future products where they solve a clear user need.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Product roadmap</h2>
          <p className="mt-3 text-muted">
            A high-level view of how our work progresses, without fixed public dates.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {roadmap.map((item) => (
              <div key={item.phase} className="rounded-2xl border border-border bg-surface p-6">
                <p className="flex items-center gap-2 text-xs font-semibold text-accent-text uppercase">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                  {item.phase}
                </p>
                <p className="mt-3 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/products/"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 font-semibold text-on-accent"
          >
            View Our Products <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
