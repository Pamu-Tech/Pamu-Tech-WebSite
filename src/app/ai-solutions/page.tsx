import { Mail } from "lucide-react";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AI Solutions",
  description:
    "Pamu Tech takes on a limited number of selective AI and custom software projects alongside its own products.",
  path: "/ai-solutions/",
});

const areas = [
  {
    title: "AI assistants and integrations",
    detail: "Exploring practical assistant workflows and connecting existing tools with language models.",
  },
  {
    title: "Workflow automation",
    detail: "Reducing repetitive manual steps in everyday business or research processes.",
  },
  {
    title: "Custom web and mobile software",
    detail: "Focused web applications and mobile tools tailored to a specific operational need.",
  },
];

export default function AiSolutionsPage() {
  const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent("AI solutions enquiry")}`;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">AI SOLUTIONS</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Selective AI &amp; software projects
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">
          Pamu Tech takes on a limited number of AI and software projects alongside its own products.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Availability is limited because the main focus is our own products.
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Areas of interest and capability</h2>
          <p className="mt-3 max-w-3xl text-muted">
            These represent technical areas we can explore for businesses and individuals by enquiry.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {areas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-border bg-bg p-6">
                <h3 className="text-lg font-bold">{area.title}</h3>
                <p className="mt-2 text-sm text-muted">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">How to start</h2>
          <p className="mt-4 max-w-3xl text-muted">
            Send a brief outline of what you are trying to solve. We will review whether it fits our current capacity and reply by email.
          </p>
          <a
            href={enquiryHref}
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-on-accent"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Send AI Solutions Enquiry
          </a>
        </div>
      </section>
    </>
  );
}
