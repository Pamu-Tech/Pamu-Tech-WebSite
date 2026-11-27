import Link from "next/link";
import { Mail } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import { products, site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Pamu Tech for general enquiries, business partnerships, research collaborations, investment, product support or future contributions.",
  path: "/contact/",
});

const categories = [
  {
    title: "General",
    description: "General questions about Pamu Tech and our work.",
    subject: "General Enquiry - Pamu Tech",
  },
  {
    title: "Business partnership",
    description: "Exploring commercial or strategic partnerships.",
    subject: "Business Partnership Enquiry - Pamu Tech",
  },
  {
    title: "Research collaboration",
    description: "Academic, conservation or ecological research collaborations.",
    subject: "Research Collaboration - Pamu Tech",
  },
  {
    title: "Investment",
    description: "Early-stage investment and funding discussions.",
    subject: "Investment Enquiry - Pamu Tech",
  },
  {
    title: "Product support",
    description: "Help, bug reports or feedback for our products.",
    subject: "Product Support - Pamu Tech",
  },
  {
    title: "Future career or contribution",
    description: "Interest in contributing, testing or future roles.",
    subject: "Future Contribution / Career - Pamu Tech",
  },
  {
    title: "AI solutions or custom software project",
    description: "Selective AI and custom software enquiries alongside our own products.",
    subject: "AI solutions enquiry",
  },
];

export default function ContactPage() {
  const socials = [
    ["LinkedIn", site.social.linkedin],
    ["Facebook", site.social.facebook],
    ["YouTube", site.social.youtube],
    ["Blog", site.blog],
  ].filter(([, url]) => Boolean(url));

  const productSupport = products.filter((p) => p.supportEmail);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-text">CONTACT</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Get in touch with Pamu Tech
        </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
          Choose the category that best matches your enquiry below to open an email with a prefilled subject line, or write directly to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-accent-text underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          . For selective project work, you can also read about{" "}
          <Link href="/ai-solutions/" className="font-semibold text-accent-text underline-offset-4 hover:underline">
            AI solutions
          </Link>
          .
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Enquiry categories</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div key={cat.title} className="flex flex-col justify-between rounded-2xl border border-border bg-bg p-6">
                <div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                  <p className="mt-2 text-sm text-muted">{cat.description}</p>
                </div>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(cat.subject)}`}
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border px-4 text-sm font-semibold hover:border-accent"
                >
                  <Mail className="h-4 w-4 text-accent-text" aria-hidden />
                  Send Email
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Product support</h2>
            <p className="mt-3 text-muted">
              For dedicated support on specific products:
            </p>
            <ul className="mt-4 space-y-3">
              {productSupport.map((p) => (
                <li key={p.slug} className="rounded-xl border border-border bg-surface p-4">
                  <p className="font-semibold">{p.name}</p>
                  <a
                    href={`mailto:${p.supportEmail}?subject=${encodeURIComponent(`${p.name} Support`)}`}
                    className="mt-1 inline-flex min-h-8 items-center text-sm text-accent-text underline-offset-4 hover:underline"
                  >
                    {p.supportEmail}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Online channels</h2>
            <p className="mt-3 text-muted">
              Follow our updates and announcements:
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
