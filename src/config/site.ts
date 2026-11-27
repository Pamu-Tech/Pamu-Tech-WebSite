export const site = {
  name: "Pamu Tech",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Pamu Tech is a Sri Lankan product-based technology brand creating innovative, accessible and practical software.",
  email: "official.pamutech@gmail.com",
  blog: "https://pamutechofficial.blogspot.com",
  location: "Sri Lanka",
  // Set to "2026" or leave empty if not displayed.
  foundingYear: "",
  developmentNote: "AI tools, including Claude, support our software development.",
  // Set these to the confirmed URLs. Entries left empty are hidden automatically.
  social: {
    linkedin: "",
    facebook: "",
    youtube: "",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Products", href: "/products/" },
  { label: "Innovation", href: "/innovation/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;

export type ProductStatus = "Available" | "In Development" | "Planned";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  description: string;
  highlights: string[];
  href: string;
  external?: string;
  supportEmail?: string;
  privacyPolicyUrl?: string;
  accent: "orange" | "green";
}

// Add future products here. Pages read from this list.
export const products: Product[] = [
  {
    slug: "pin-potha",
    name: "Pin Potha",
    tagline: "Good Deeds Journal",
    status: "Available",
    description:
      "A free mobile application designed to help users record, manage and reflect on their good deeds.",
    highlights: ["Free to use", "Advertisement-free", "No subscriptions", "English, Sinhala and Tamil"],
    href: "/products/pin-potha/",
    external: "https://play.google.com/store/apps/details?id=com.pinpotha.mobile",
    supportEmail: "pinpotha.official@gmail.com",
    // Set to a confirmed URL when available.
    privacyPolicyUrl: "",
    accent: "orange",
  },
  {
    slug: "slbis",
    name: "SLBIS",
    tagline: "Sri Lanka Biodiversity Information System",
    status: "In Development",
    description:
      "A digital biodiversity technology ecosystem designed to modernise ecological research, field data collection and biodiversity information management.",
    highlights: ["SLBIS Pro", "SLBIS Web", "SLBIS Free"],
    href: "/products/slbis/",
    accent: "green",
  },
];
