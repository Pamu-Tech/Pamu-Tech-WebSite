import type { Metadata } from "next";
import { site } from "@/config/site";

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const base = (site.url ?? "https://www.pamutech.dev").replace(/\/$/, "");
  const fullTitle = `${title} | ${site.name}`;
  const url = `${base}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${site.name} - Building Technology. Creating Meaningful Impact.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}
