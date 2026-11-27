import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = (site.url ?? "https://www.pamutech.dev").replace(/\/$/, "");
  const isPreview = process.env.VERCEL_ENV === "preview" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

  return {
    rules: isPreview
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
