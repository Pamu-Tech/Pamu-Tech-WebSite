import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollEffects from "@/components/effects/ScrollEffects";
import { site } from "@/config/site";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-inter", display: "swap" });

const siteUrl = (site.url ?? "https://www.pamutech.dev").replace(/\/$/, "");
const isPreview = process.env.VERCEL_ENV === "preview" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "61572AF800921E25A732E656D9FFB597";

const homeDescription =
  "Pamu Tech is a Sri Lankan technology startup building innovative software, mobile apps and accessible digital products, including Pin Potha and SLBIS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Pamu Tech | Sri Lankan Software & Technology Startup", template: "%s | Pamu Tech" },
  description: homeDescription,
  alternates: { canonical: "/" },
  robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
  openGraph: {
    title: "Pamu Tech | Sri Lankan Software & Technology Startup",
    description: homeDescription,
    url: siteUrl,
    siteName: "Pamu Tech",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pamu Tech - Building Technology. Creating Meaningful Impact." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamu Tech | Sri Lankan Software & Technology Startup",
    description: homeDescription,
    images: ["/og-image.png"],
  },
};

const themeScript = `try{var t=localStorage.getItem("theme")||"dark";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

const sameAs = [site.social.linkedin, site.social.facebook, site.social.youtube, site.blog].filter(Boolean);

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: site.name,
      alternateName: "PamuTech",
      url: siteUrl,
      logo: `${siteUrl}/logos/pamu-tech-logo.png`,
      email: site.email,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
      },
      ...(sameAs.length > 0 ? { sameAs } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: site.name,
      alternateName: "PamuTech",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body suppressHydrationWarning>
        <ScrollEffects />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
