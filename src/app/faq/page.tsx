import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { faqGroups } from "@/content/faq";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Pamu Tech, Pin Potha, SLBIS, AI solutions, partnerships and privacy.",
  path: "/faq/",
});

export default function FaqPage() {
  const allItems = faqGroups.flatMap((g) => g.items);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">FAQ</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-6 text-lg text-muted">
          Clear, factual answers about Pamu Tech, our products and how to get in touch.
        </p>

        <div className="mt-12 space-y-12">
          {faqGroups.map((group) => (
            <section key={group.topic}>
              <h2 className="text-2xl font-bold">{group.topic}</h2>
              <div className="mt-4">
                <FaqAccordion items={group.items} />
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold">Still have a question?</h2>
          <p className="mt-2 text-sm text-muted">
            Reach out by email and we will be glad to help.
          </p>
          <Link
            href="/contact/"
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-text"
          >
            Contact Pamu Tech <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
