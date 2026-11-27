// Draft: founder review required
import Link from "next/link";
import { Check, CheckCircle2, Mail, Wrench } from "lucide-react";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Investors and Funders",
  description:
    "Factual overview of Pamu Tech for aligned investors, grant programmes and partners.",
  path: "/investors/",
});

export default function InvestorsPage() {
  const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Investor or funder enquiry"
  )}`;

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">
          INVESTORS AND FUNDERS
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Pamu Tech at a glance
        </h1>
        <p className="mt-6 text-lg text-muted">
          Pamu Tech is an early-stage, founder-led, self-funded software product company in Sri Lanka building Pin Potha (available on Google Play) and SLBIS (in active development).
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl space-y-12 px-4 py-16">
          <div>
            <h2 className="text-2xl font-bold">The problem</h2>
            <p className="mt-3 text-muted">
              In ecological and biodiversity research, field teams often rely on fragmented spreadsheets, paper notes and manual consolidation, with limited connectivity in remote sites. In everyday community life, people who want to record and reflect on personal good deeds often lack a simple, private, advertisement-free tool in local languages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">The solution</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-bg p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent px-3 py-1 text-xs font-semibold text-accent-text">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                  Available
                </span>
                <h3 className="mt-3 text-lg font-bold">Pin Potha</h3>
                <p className="mt-2 text-sm text-muted">
                  A free, advertisement-free good deeds journal mobile app supporting English, Sinhala and Tamil.
                </p>
              </div>
              <div className="rounded-2xl border border-leaf/40 bg-bg p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf px-3 py-1 text-xs font-semibold text-leaf">
                  <Wrench className="h-3.5 w-3.5" aria-hidden />
                  In Development
                </span>
                <h3 className="mt-3 text-lg font-bold">SLBIS Ecosystem</h3>
                <p className="mt-2 text-sm text-muted">
                  SLBIS Pro, SLBIS Web and SLBIS Free: an offline-first biodiversity data collection and research platform.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Proof so far</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-bold">Built</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
                    <span>Pin Potha published on Google Play in English, Sinhala and Tamil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
                    <span>Offline-first mobile and web foundation under active development for SLBIS.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Planned</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                    <span>Field validation of SLBIS with ecological research teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                    <span>Rollout of SLBIS Web and the SLBIS Free community tier.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Why it can succeed</h2>
            <ul className="mt-3 space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
                <span>Offline-first design suited to real field conditions with intermittent connectivity.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
                <span>Multilingual access (English, Sinhala and Tamil) for local adoption.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
                <span>Lean, low-cost cloud architecture with a focus on quality and security.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Roadmap</h2>
            <p className="mt-3 text-muted">
              Near-term milestones focus on maintaining Pin Potha, completing core SLBIS development builds, and running early-access testing with researchers. No unconfirmed release dates are published.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Founder</h2>
            <p className="mt-3 text-muted">
              Pamu Tech is led by a single founder in Sri Lanka, combining software engineering with a focus on community applications and environmental technology.
            </p>
          </div>

          {/* TODO: Founder to complete funding sought, type, planned use of funds, and optional one-pager PDF. */}
          <div>
            <h2 className="text-2xl font-bold">What we are seeking</h2>
            <p className="mt-3 text-muted">
              We welcome conversations with aligned investors, programmes and partners.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Risks and how we manage them</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <strong className="text-fg">Solo founder capacity:</strong> Managed by keeping product scope focused and using modern development tools to stay lean.
              </li>
              <li>
                <strong className="text-fg">Early stage:</strong> Managed by validating workflows directly with users before expanding scope.
              </li>
              <li>
                <strong className="text-fg">Adoption:</strong> Managed by supporting local languages and offline-first reliability from the start.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bg p-6">
            <h2 className="text-xl font-bold">Next step</h2>
            <p className="mt-2 text-sm text-muted">
              If you would like to discuss investment, grants or strategic support, please get in touch by email.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={enquiryHref}
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-on-accent"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Investor or Funder Enquiry
              </a>
              <Link
                href="/about/"
                className="inline-flex h-12 items-center rounded-lg border border-border px-5 font-semibold hover:border-accent"
              >
                About Pamu Tech
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted">
              This page is informational and is not an offer of securities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
