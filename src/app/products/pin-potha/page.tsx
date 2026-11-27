import Link from "next/link";
import { Check, CheckCircle2, Globe, Mail, Smartphone } from "lucide-react";
import { products, site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pin Potha",
  description:
    "Pin Potha is a free, advertisement-free good deeds journal mobile application available in English, Sinhala and Tamil.",
  path: "/products/pin-potha/",
});

const features = [
  "Record daily good deeds quickly and privately",
  "Organise and review past entries for personal reflection",
  "Clean, distraction-free interface",
  "Completely free to use with no advertisements or subscriptions",
];

const languages = ["English", "Sinhala", "Tamil"];

const screenshotPlaceholders = [
  { label: "Home & Quick Entry", note: "Screenshot placeholder: Home screen" },
  { label: "Journal History", note: "Screenshot placeholder: Deed history view" },
  { label: "Multilingual Support", note: "Screenshot placeholder: Language selection" },
];

export default function PinPothaPage() {
  const product = products.find((p) => p.slug === "pin-potha");
  const playUrl = product?.external ?? "https://play.google.com/store/apps/details?id=com.pinpotha.mobile";
  const supportEmail = product?.supportEmail ?? "pinpotha.official@gmail.com";
  const privacyPolicyUrl = product?.privacyPolicyUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pin Potha",
    operatingSystem: "Android",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    inLanguage: ["en", "si", "ta"],
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    url: playUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/products/" className="text-sm font-semibold text-muted hover:text-fg">
            Products
          </Link>
          <span className="text-muted" aria-hidden>/</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent px-3 py-1 text-xs font-semibold text-accent-text">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            <span>Available</span>
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Pin Potha: Good Deeds Journal
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">
          A free mobile application designed to help users record, manage and reflect on their good deeds. Built to be simple, respectful and accessible to everyone.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 font-semibold text-on-accent"
          >
            <Smartphone className="h-4 w-4" aria-hidden />
            Get it on Google Play
          </a>
          <a
            href={`mailto:${supportEmail}?subject=${encodeURIComponent("Pin Potha Support")}`}
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-border px-6 font-semibold hover:border-accent"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Contact Support
          </a>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Key features</h2>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" aria-hidden />
                  <span className="text-muted">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-bg p-6">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent-text" aria-hidden />
                <h2 className="text-xl font-bold">Supported languages</h2>
              </div>
              <p className="mt-2 text-sm text-muted">
                Designed for local and international communities with full support for:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-semibold"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-bg p-6">
              <h2 className="text-xl font-bold">Support &amp; policies</h2>
              <p className="mt-2 text-sm text-muted">
                For help, feedback or questions about Pin Potha, email{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-semibold text-accent-text underline-offset-4 hover:underline"
                >
                  {supportEmail}
                </a>
                .
              </p>
              {privacyPolicyUrl ? (
                <p className="mt-3 text-sm">
                  <a
                    href={privacyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent-text underline-offset-4 hover:underline"
                  >
                    Pin Potha Privacy Policy
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Screenshots</h2>
          <p className="mt-3 text-muted">
            App screenshots will be added here once final store assets are supplied.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {screenshotPlaceholders.map((item) => (
              <div
                key={item.label}
                className="flex aspect-[9/16] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface p-6 text-center"
              >
                <Smartphone className="h-8 w-8 text-muted" aria-hidden />
                <p className="mt-4 font-semibold">{item.label}</p>
                <p className="mt-1 text-xs text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
