import { site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for the Pamu Tech informational website.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <div className="rounded-xl border border-accent bg-surface p-4 text-sm font-semibold text-accent-text">
        Draft: requires founder review before publication
      </div>

      <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">Terms of Use</h1>
      <p className="mt-4 text-muted">
        This website is provided by {site.name} for general informational purposes about our brand and software products.
      </p>

      <div className="mt-10 space-y-8 text-muted">
        <div>
          <h2 className="text-xl font-bold text-fg">Informational content</h2>
          <p className="mt-2">
            Product descriptions, including details of software currently in development, are provided for information only and may evolve as products are built and refined.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-fg">External links</h2>
          <p className="mt-2">
            Links to third-party platforms such as Google Play and Blogger are provided for convenience. {site.name} is not responsible for the availability or content of external websites.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-fg">Contact</h2>
          <p className="mt-2">
            Questions regarding these terms may be sent to{" "}
            <a href={`mailto:${site.email}`} className="text-accent-text underline-offset-4 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
