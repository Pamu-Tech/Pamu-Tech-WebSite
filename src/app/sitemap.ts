import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/about/",
  "/products/",
  "/products/pin-potha/",
  "/products/slbis/",
  "/innovation/",
  "/ai-solutions/",
  "/investors/",
  "/faq/",
  "/blog/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (site.url ?? "https://pamutech.dev").replace(/\/$/, "");
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
