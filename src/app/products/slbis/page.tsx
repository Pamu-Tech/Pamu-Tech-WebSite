import Link from "next/link";
import { Check, Mail, Wrench } from "lucide-react";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "SLBIS",
  description:
    "Sri Lanka Biodiversity Information System (SLBIS) is an environmental technology ecosystem in development for ecological research and field data collection.",
  path: "/products/slbis/",
});

const challenges = [
  "Fragmented field records across spreadsheets, paper notes and isolated files",
  "Limited connectivity in remote field sites across Sri Lanka",
  "Time-consuming manual consolidation of species observations and site visits",
  "Lack of a unified, locally tailored digital workflow for research teams",
];

const targetUsers = [
  "Ecological researchers and field biologists",
  "Conservation organisations and survey teams",
  "Universities and academic research groups",
  "Citizen scientists and biodiversity enthusiasts",
];

const ecosystem = [
  {
    name: "SLBIS Pro",
    role: "Field & research platform",
    summary:
      "Designed for structured ecological surveys, team coordination and offline-first field data collection.",
  },
  {
    name: "SLBIS Web",
    role: "Web workspace & management",
    summary:
      "Browser-based access for reviewing observations, managing projects and exporting datasets.",
  },
  {
    name: "SLBIS Free",
    role: "Accessible community tier",
    summary:
      "A free entry point to support broader participation in biodiversity documentation.",
  },
];

// Note: Exact split between "Implemented in development builds" and "Planned"
// is kept high-level until confirmed by the founder.
const slbisProCapabilities = [
  "Offline-first field data collection",
  "Project and team management",
  "Field visits and site records",
  "Scientific species datasets",
  "Observation management",
  "Cloud synchronisation",
  "CSV and Excel exports",
];

const roadmapStages = [
  {
    stage: "Foundation",
    detail: "Core data models, offline-first field workflows and species dataset structure.",
  },
  {
    stage: "Development & Field Testing",
    detail: "Iterative builds of SLBIS Pro and SLBIS Web tested with ecological workflows.",
  },
  {
    stage: "Ecosystem Expansion",
    detail: "Refining collaboration tools, exports and the SLBIS Free community tier.",
  },
];

export default function SlbisPage() {
  const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "SLBIS Research Collaboration & Early-Access Enquiry"
  )}`;

  return (
    <div className="slbis-section">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/products/" className="text-sm font-semibold text-muted hover:text-fg">
            Products
          </Link>
          <span className="text-muted" aria-hidden>/</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf px-3 py-1 text-xs font-semibold text-leaf">
            <Wrench className="h-3.5 w-3.5" aria-hidden />
            <span>In Development</span>
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          SLBIS: Sri Lanka Biodiversity Information System
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">
          A digital biodiversity technology ecosystem in active development, designed to modernise ecological research, field data collection and biodiversity information management.
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Research challenges</h2>
            <ul className="mt-6 space-y-3">
              {challenges.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                  <span className="text-muted">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Proposed digital solution</h2>
            <p className="mt-4 text-muted">
              SLBIS brings field data collection, project coordination and structured species records into a cohesive digital ecosystem. By supporting offline-first workflows, researchers can record observations reliably in remote environments and synchronise their work when connectivity is available.
            </p>
            <h3 className="mt-6 text-lg font-bold">Target users</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {targetUsers.map((u) => (
                <li key={u} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-leaf" aria-hidden />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">The SLBIS ecosystem</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ecosystem.map((tier) => (
              <div key={tier.name} className="rounded-2xl border border-leaf/40 bg-surface p-6">
                <p className="text-xs font-semibold tracking-wider text-leaf uppercase">{tier.role}</p>
                <h3 className="mt-2 text-xl font-bold">{tier.name}</h3>
                <p className="mt-3 text-sm text-muted">{tier.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">SLBIS Pro capabilities</h2>
            <p className="mt-3 text-muted">
              SLBIS Pro is currently in development. The following core capabilities are part of the development scope:
            </p>
            <ul className="mt-6 space-y-3">
              {slbisProCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Development roadmap</h2>
            <p className="mt-3 text-muted">
              We are progressing through focused stages without fixed public release dates.
            </p>
            <ol className="mt-6 space-y-4">
              {roadmapStages.map((r, idx) => (
                <li key={r.stage} className="rounded-xl border border-border bg-bg p-4">
                  <p className="text-xs font-semibold text-leaf">Stage {idx + 1}</p>
                  <h3 className="mt-1 font-bold">{r.stage}</h3>
                  <p className="mt-1 text-sm text-muted">{r.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Research collaboration &amp; early access</h2>
          <p className="mt-4 max-w-3xl text-muted">
            We welcome conversations with ecological researchers, conservation groups and institutions interested in testing development builds or collaborating on biodiversity data workflows.
          </p>
          <a
            href={enquiryHref}
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-lg border border-leaf bg-leaf/10 px-6 font-semibold text-leaf hover:bg-leaf/20"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Enquire About Early Access
          </a>
        </div>
      </section>
    </div>
  );
}
