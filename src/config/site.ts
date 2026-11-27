
/* =========================================================
   PAMU TECH
   Central Website Configuration
   ========================================================= */

/* ---------------------------------------------------------
   COMPANY INFORMATION
   --------------------------------------------------------- */

export const site = {
  name: "Pamu Tech",
  shortName: "PT",
  tagline: "Technology with Purpose.",

  url: process.env.NEXT_PUBLIC_SITE_URL,

  description:
    "Pamu Tech is a Sri Lankan product-based technology brand focused on creating innovative, accessible and practical software solutions that address real-world challenges.",

  longDescription:
    "Founded in 2026, Pamu Tech is an independent technology brand dedicated to developing meaningful digital products. We focus on combining modern technology, thoughtful design and innovation to create reliable, user-friendly and accessible software solutions for individuals, communities and organisations.",

  type: "Product-Based Technology Startup",
  industry: "Information Technology and Software Development",

  foundingYear: "2026",
  foundingMonth: "April",

  location: "Sri Lanka",
  country: "Sri Lanka",
  countryCode: "LK",

  email: "official.pamutech@gmail.com",
  blog: "https://pamutechofficial.blogspot.com",

  copyright:
    `© ${new Date().getFullYear()} Pamu Tech. All rights reserved.`,

  social: {
    linkedin: "https://www.linkedin.com/company/pamu-tech",
    facebook: "https://web.facebook.com/pamu.tech.official",
    instagram: "",
    youtube: "https://www.youtube.com/channel/UC8lEo1RrMLCewa2J8RV1Jng",
    github: "",
    x: "",
  },

  effects: {
    heroBackground: true,
    scrollReveal: true,
    scrollProgress: true,
    headerScroll: true,
    slbisNodes: true,
    variants: {
      "hero-dots": true,
      "about-lines": true,
      "approach-line": true,
      "impact-nodes": true,
      "partner-arcs": true,
      "updates-sweep": true,
      "faq-quiet": true,
      "about-contours": true,
      "catalogue-grid": true,
      "pin-potha-warm": true,
      "slbis-topography": true,
      "slbis-sync": true,
      "innovation-network": true,
      "ai-circuit": true,
      "investors-line": true,
      "contact-pulse": true,
    },
  },
} as const;


/* ---------------------------------------------------------
   BRAND IDENTITY
   --------------------------------------------------------- */

export const brand = {
  name: "Pamu Tech",
  initials: "PT",

  colours: {
    primary: "#EA701F",
    black: "#000000",
    white: "#FFFFFF",

    neutral: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0A0A0A",
    },
  },

  typography: {
    primary: "Inter",
    fallback: "Arial, Helvetica, sans-serif",
  },

  logo: {
    primary: "/images/brand/logo-primary.svg",
    black: "/images/brand/logo-black.svg",
    white: "/images/brand/logo-white.svg",
    icon: "/images/brand/logo-icon.svg",
    favicon: "/favicon.ico",
    alt: "Pamu Tech",
  },

  personality: [
    "Innovative",
    "Minimalist",
    "Professional",
    "Accessible",
    "Reliable",
    "Purpose-driven",
  ],
} as const;


/* ---------------------------------------------------------
   ABOUT PAMU TECH
   --------------------------------------------------------- */

export const about = {
  heading: "Technology with Purpose",

  introduction:
    "At Pamu Tech, we believe technology should be meaningful, accessible and designed to improve everyday life.",

  story:
    "Pamu Tech was founded in 2026 with the ambition of transforming ideas into practical digital products. As a Sri Lankan technology brand, we focus on identifying real-world challenges and developing software that provides meaningful solutions.",

  approach:
    "We follow a product-focused approach, combining research, modern software development, thoughtful user experience design and emerging technologies to create practical and sustainable digital products.",

  mission:
    "To develop innovative, reliable and accessible software products that simplify everyday challenges and create meaningful value for individuals, communities and organisations.",

  vision:
    "To become a trusted technology brand from Sri Lanka, recognised for building impactful digital products that contribute to a smarter, more connected and sustainable future.",

  purpose:
    "To make technology more useful, accessible and meaningful through practical innovation.",

  objectives: [
    "Develop practical software solutions for real-world challenges.",
    "Create accessible and user-friendly digital experiences.",
    "Build reliable and maintainable software products.",
    "Explore emerging technologies responsibly.",
    "Support digital transformation and innovation.",
    "Contribute to Sri Lanka's technology ecosystem.",
    "Build products with long-term value and sustainability.",
  ],
} as const;


/* ---------------------------------------------------------
   CORE VALUES
   --------------------------------------------------------- */

export const values = [
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We explore new ideas and technologies to develop meaningful solutions for real-world challenges.",
    icon: "Lightbulb",
  },
  {
    id: "quality",
    title: "Quality",
    description:
      "We aim to build reliable, efficient and maintainable software with attention to detail.",
    icon: "BadgeCheck",
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description:
      "We believe technology should be inclusive, easy to use and accessible to diverse communities.",
    icon: "Accessibility",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We value honesty, transparency and responsible technology development.",
    icon: "ShieldCheck",
  },
  {
    id: "simplicity",
    title: "Simplicity",
    description:
      "We focus on clear, intuitive experiences that solve problems without unnecessary complexity.",
    icon: "Layers",
  },
  {
    id: "impact",
    title: "Meaningful Impact",
    description:
      "We aim to create products that deliver practical benefits and lasting value.",
    icon: "Target",
  },
  {
    id: "learning",
    title: "Continuous Learning",
    description:
      "We embrace research, experimentation and continuous improvement.",
    icon: "GraduationCap",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "We consider the long-term impact of our technology on people, communities and the environment.",
    icon: "Leaf",
  },
] as const;


/* ---------------------------------------------------------
   FOUNDER INFORMATION
   --------------------------------------------------------- */

export const founder = {
  name: "Pamuda",
  fullName: "",

  position: "Founder",
  organisation: "Pamu Tech",
  education: "Computer Science Undergraduate",
  location: "Sri Lanka",

  image: "",
  imageAlt: "Founder of Pamu Tech",

  shortBiography:
    "Pamuda is the founder of Pamu Tech and a Computer Science undergraduate with interests in software development, artificial intelligence, innovation and entrepreneurship.",

  biography:
    "Pamuda founded Pamu Tech with a vision to transform innovative ideas into practical and meaningful digital products. With an academic background in Computer Science and an interest in modern technologies, he focuses on developing accessible, reliable and user-friendly software that addresses real-world challenges.",

  extendedBiography:
    "Through Pamu Tech, he aims to explore emerging technologies, develop impactful digital products and contribute to Sri Lanka's growing technology ecosystem. His approach combines technical knowledge, continuous learning, research and practical problem-solving.",

  interests: [
    "Software Development",
    "Web Application Development",
    "Mobile Application Development",
    "Artificial Intelligence",
    "Product Development",
    "Research and Innovation",
    "Technology Entrepreneurship",
  ],

  social: {
    linkedin: "",
    github: "",
    portfolio: "",
    email: "",
  },
} as const;


/* ---------------------------------------------------------
   NAVIGATION
   --------------------------------------------------------- */

export const nav = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about/",
  },
  {
    label: "Products",
    href: "/products/",
  },
  {
    label: "Innovation",
    href: "/innovation/",
  },
] as const;


/* ---------------------------------------------------------
   PRODUCT TYPES
   --------------------------------------------------------- */

export type ProductStatus =
  | "Available"
  | "In Development"
  | "Planned";

export interface Product {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;

  status: ProductStatus;

  category?: string;
  description: string;
  longDescription?: string;

  highlights: string[];
  features?: string[];
  objectives?: string[];
  platforms?: string[];
  languages?: string[];

  pricing?: string;

  href: string;
  external?: string;
  website?: string;
  supportEmail?: string;
  privacyPolicyUrl?: string;
  termsUrl?: string;

  logo?: string;
  screenshots?: string[];

  accent: "orange" | "green";

  featured?: boolean;

  ecosystem?: {
    name: string;
    description?: string;
  }[];
}


/* ---------------------------------------------------------
   PRODUCTS
   --------------------------------------------------------- */

export const products: Product[] = [
  {
    slug: "pin-potha",
    name: "Pin Potha",
    tagline: "Good Deeds Journal",

    status: "Available",
    category: "Lifestyle and Personal Development",

    description:
      "A free mobile application designed to help users record, manage and reflect on their good deeds.",

    longDescription:
      "Pin Potha is a digital good deeds journal that encourages users to maintain a personal record of meaningful actions. The application provides a simple and accessible way to reflect on good deeds and develop positive everyday habits.",

    highlights: [
      "Free to use",
      "Advertisement-free",
      "No subscriptions",
      "English, Sinhala and Tamil",
    ],

    features: [
      "Record good deeds",
      "Manage personal good deed records",
      "Reflect on meaningful actions",
      "Multilingual experience",
      "Advertisement-free experience",
    ],

    platforms: [
      "Android",
    ],

    languages: [
      "English",
      "Sinhala",
      "Tamil",
    ],

    pricing: "Free",

    href: "/products/pin-potha/",

    external:
      "https://play.google.com/store/apps/details?id=com.pinpotha.mobile",

    website: "",
    supportEmail: "pinpotha.official@gmail.com",
    privacyPolicyUrl: "",
    termsUrl: "",

    logo: "",
    screenshots: [],

    accent: "orange",
    featured: true,
  },

  {
    slug: "slbis",
    name: "SLBIS",
    shortName: "SLBIS",
    tagline: "Sri Lanka Biodiversity Information System",

    status: "In Development",
    category: "Biodiversity and Environmental Technology",

    description:
      "A digital biodiversity technology ecosystem designed to modernise ecological research, field data collection and biodiversity information management.",

    longDescription:
      "SLBIS is a developing biodiversity technology ecosystem focused on supporting biodiversity research and information management in Sri Lanka. The initiative aims to provide practical digital tools for ecological fieldwork, biodiversity documentation and access to environmental information.",

    highlights: [
      "SLBIS Pro",
      "SLBIS Web",
      "SLBIS Free",
      "Biodiversity-focused technology",
      "Ecological research support",
    ],

    objectives: [
      "Modernise biodiversity data collection.",
      "Support ecological research and fieldwork.",
      "Improve biodiversity information management.",
      "Encourage access to biodiversity information.",
      "Support biodiversity documentation in Sri Lanka.",
    ],

    ecosystem: [
      {
        name: "SLBIS Pro",
      },
      {
        name: "SLBIS Web",
      },
      {
        name: "SLBIS Free",
      },
    ],

    href: "/products/slbis/",

    website: "",
    external: "",
    supportEmail: "",
    privacyPolicyUrl: "",
    termsUrl: "",

    logo: "",
    screenshots: [],

    accent: "green",
    featured: true,
  },
];


/* ---------------------------------------------------------
   PRODUCT STATUS CONFIGURATION
   --------------------------------------------------------- */

export const productStatuses = {
  Available: {
    label: "Available",
    description: "Currently available for users.",
    colour: "#15803D",
  },

  "In Development": {
    label: "In Development",
    description: "Currently being developed.",
    colour: "#EA701F",
  },

  Planned: {
    label: "Planned",
    description: "Planned for future development.",
    colour: "#737373",
  },
} as const;


/* ---------------------------------------------------------
   INNOVATION AND RESEARCH
   --------------------------------------------------------- */

export const innovation = {
  heading: "Innovation with Purpose",

  description:
    "Pamu Tech explores modern and emerging technologies to develop practical digital products that address meaningful challenges.",

  developmentPhilosophy:
    "Our approach combines research, experimentation, thoughtful design and responsible software development to turn ideas into useful digital solutions.",

  developmentNote:
    "Modern development tools, including artificial intelligence, support our software development process.",

  focusAreas: [
    {
      title: "Software Engineering",
      description:
        "Developing reliable, maintainable and practical software products.",
      icon: "Code2",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Exploring responsible AI integration to improve digital products and development processes.",
      icon: "BrainCircuit",
    },
    {
      title: "Mobile Technology",
      description:
        "Creating accessible mobile experiences for everyday needs.",
      icon: "Smartphone",
    },
    {
      title: "Web Technologies",
      description:
        "Exploring responsive, accessible and efficient web applications.",
      icon: "Globe",
    },
    {
      title: "Environmental Technology",
      description:
        "Applying digital technology to biodiversity research and environmental information management.",
      icon: "Leaf",
    },
    {
      title: "User Experience",
      description:
        "Designing intuitive, inclusive and meaningful digital experiences.",
      icon: "Layout",
    },
  ],

  principles: [
    "Research before implementation",
    "Responsible use of artificial intelligence",
    "User-centred design",
    "Privacy-conscious development",
    "Accessibility",
    "Continuous improvement",
    "Long-term maintainability",
  ],
} as const;


/* ---------------------------------------------------------
   PRODUCT DEVELOPMENT PROCESS
   --------------------------------------------------------- */

export const developmentProcess = [
  {
    step: "01",
    title: "Discover",
    description:
      "Identify real-world challenges and understand user needs.",
  },
  {
    step: "02",
    title: "Research",
    description:
      "Explore existing solutions, technologies and opportunities.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Create clear, accessible and intuitive product experiences.",
  },
  {
    step: "04",
    title: "Develop",
    description:
      "Transform ideas into functional and maintainable software.",
  },
  {
    step: "05",
    title: "Test",
    description:
      "Evaluate functionality, usability, reliability and performance.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Continuously refine products based on feedback and research.",
  },
] as const;


/* ---------------------------------------------------------
   CONTACT INFORMATION
   --------------------------------------------------------- */

export const contact = {
  heading: "Let's Connect",

  description:
    "Get in touch with Pamu Tech for general enquiries, product feedback, collaboration opportunities and technical support.",

  generalEmail: site.email,
  location: site.location,

  departments: [
    {
      title: "General Enquiries",
      description:
        "For questions about Pamu Tech and our products.",
      email: site.email,
    },
    {
      title: "Collaborations",
      description:
        "For research, partnerships and innovation opportunities.",
      email: site.email,
    },
    {
      title: "Pin Potha Support",
      description:
        "For technical support and feedback related to Pin Potha.",
      email: "pinpotha.official@gmail.com",
    },
  ],

  enquiryTypes: [
    "General Enquiry",
    "Product Support",
    "Product Feedback",
    "Bug Report",
    "Research Collaboration",
    "Partnership Opportunity",
    "Feature Request",
    "Other",
  ],
} as const;


/* ---------------------------------------------------------
   BLOG CONFIGURATION
   --------------------------------------------------------- */

export const blog = {
  name: "Pamu Tech Blog",

  description:
    "Discover technology insights, product updates, research, innovation and development stories from Pamu Tech.",

  externalUrl: site.blog,

  categories: [
    "Company Updates",
    "Product Updates",
    "Software Development",
    "Artificial Intelligence",
    "Technology",
    "Research",
    "Innovation",
    "Biodiversity Technology",
  ],
} as const;


/* ---------------------------------------------------------
   SEO CONFIGURATION
   --------------------------------------------------------- */

export const seo = {
  defaultTitle: "Pamu Tech | Technology with Purpose",

  titleTemplate: "%s | Pamu Tech",

  description: site.description,

  keywords: [
    "Pamu Tech",
    "PamuTech",
    "Sri Lanka Technology",
    "Sri Lankan Technology Startup",
    "Product Based Technology Company",
    "Software Products",
    "Software Development",
    "Mobile Applications",
    "Web Applications",
    "Technology Innovation",
    "Artificial Intelligence",
    "Digital Products",
    "Pin Potha",
    "SLBIS",
    "Sri Lanka Biodiversity Information System",
    "Biodiversity Technology",
  ],

  authors: [
    {
      name: "Pamu Tech",
    },
  ],

  creator: "Pamu Tech",
  publisher: "Pamu Tech",

  locale: "en_LK",
  language: "en",

  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_LK",
    image: "/images/brand/og-image.png",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Pamu Tech | Technology with Purpose",
  },

  twitter: {
    card: "summary_large_image",
    image: "/images/brand/og-image.png",
  },

  robots: {
    index: true,
    follow: true,
  },
} as const;


/* ---------------------------------------------------------
   PAGE METADATA
   --------------------------------------------------------- */

export const pages = {
  home: {
    title: "Pamu Tech | Technology with Purpose",
    description: site.description,
    href: "/",
  },

  about: {
    title: "About Us",
    description:
      "Learn about Pamu Tech, our founder, mission, vision and commitment to meaningful technology innovation.",
    href: "/about/",
  },

  products: {
    title: "Our Products",
    description:
      "Explore innovative and practical digital products developed by Pamu Tech.",
    href: "/products/",
  },

  innovation: {
    title: "Innovation and Research",
    description:
      "Discover how Pamu Tech explores technology, research and innovation to create meaningful digital solutions.",
    href: "/innovation/",
  },

  blog: {
    title: "Blog",
    description: blog.description,
    href: "/blog/",
  },

  contact: {
    title: "Contact Us",
    description:
      "Contact Pamu Tech for general enquiries, product support, feedback and collaboration opportunities.",
    href: "/contact/",
  },
} as const;


/* ---------------------------------------------------------
   LEGAL INFORMATION
   --------------------------------------------------------- */

export const legal = {
  copyrightOwner: site.name,
  copyrightYear: new Date().getFullYear(),

  privacyPolicy: {
    label: "Privacy Policy",
    href: "/privacy-policy/",
  },

  termsOfUse: {
    label: "Terms of Use",
    href: "/terms/",
  },

  contactEmail: site.email,

  disclaimer:
    "Information about products currently in development may change as research, development and testing progress.",
} as const;


/* ---------------------------------------------------------
   FOOTER CONFIGURATION
   --------------------------------------------------------- */

export const footer = {
  brand: {
    name: site.name,
    tagline: site.tagline,
    description:
      "A Sri Lankan technology brand creating innovative, accessible and practical digital products.",
  },

  groups: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about/" },
        { label: "Innovation", href: "/innovation/" },
        { label: "Contact", href: "/contact/" },
      ],
    },

    {
      title: "Products",
      links: products.map((product) => ({
        label: product.name,
        href: product.href,
      })),
    },

    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog/" },
        { label: "Product Support", href: "/contact/" },
      ],
    },

    {
      title: "Legal",
      links: [
        legal.privacyPolicy,
        legal.termsOfUse,
      ],
    },
  ],

  social: site.social,
  copyright: site.copyright,
} as const;


/* ---------------------------------------------------------
   BRAND MESSAGES
   --------------------------------------------------------- */

export const messaging = {
  primaryTagline: "Technology with Purpose.",

  hero: {
    heading: "Building Technology with Purpose",

    description:
      "We create innovative, accessible and practical digital products designed to solve real-world challenges and make a meaningful difference.",

    primaryAction: {
      label: "Explore Our Products",
      href: "/products/",
    },

    secondaryAction: {
      label: "Discover Pamu Tech",
      href: "/about/",
    },
  },

  products: {
    heading: "Ideas Transformed into Products",

    description:
      "Discover our growing collection of digital products, developed with innovation, accessibility and practical value in mind.",
  },

  innovation: {
    heading: "Exploring What's Possible",

    description:
      "Through research, creativity and modern technology, we explore new opportunities to build meaningful solutions.",
  },

  contact: {
    heading: "Build Meaningful Connections",

    description:
      "Have a question, an idea or an opportunity to collaborate? We would like to hear from you.",
  },
} as const;


/* ---------------------------------------------------------
   UTILITY FUNCTIONS
   --------------------------------------------------------- */

export function getProductBySlug(
  slug: string
): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getAvailableProducts(): Product[] {
  return products.filter(
    (product) => product.status === "Available"
  );
}

export function getProductsInDevelopment(): Product[] {
  return products.filter(
    (product) => product.status === "In Development"
  );
}

export function getPlannedProducts(): Product[] {
  return products.filter(
    (product) => product.status === "Planned"
  );
}

export function getProductsByStatus(
  status: ProductStatus
): Product[] {
  return products.filter(
    (product) => product.status === status
  );
}

export function getActiveSocialLinks() {
  return Object.entries(site.social)
    .filter(([, url]) => url.trim().length > 0)
    .map(([platform, url]) => ({
      platform,
      url,
    }));
}

export function getFounderSocialLinks() {
  return Object.entries(founder.social)
    .filter(([, url]) => url.trim().length > 0)
    .map(([platform, url]) => ({
      platform,
      url,
    }));
}
