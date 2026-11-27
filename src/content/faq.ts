export interface FaqItem {
  question: string;
  answer: string;
  featured?: boolean;
}

export interface FaqGroup {
  topic: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    topic: "About Pamu Tech",
    items: [
      {
        question: "What is Pamu Tech?",
        answer:
          "Pamu Tech is a Sri Lankan founder-led, early-stage product-based technology brand. We build and own practical, accessible software products.",
        featured: true,
      },
      {
        question: "How does Pamu Tech operate?",
        answer:
          "We focus primarily on developing our own software products, while taking on a limited number of selective AI and custom software projects by enquiry.",
      },
    ],
  },
  {
    topic: "Products",
    items: [
      {
        question: "What products is Pamu Tech building?",
        answer:
          "Our current products are Pin Potha (a free good deeds journal app available on Google Play) and SLBIS (the Sri Lanka Biodiversity Information System, currently in development).",
      },
    ],
  },
  {
    topic: "Pin Potha",
    items: [
      {
        question: "Is Pin Potha free?",
        answer:
          "Yes. Pin Potha is completely free to use, advertisement-free and has no subscriptions.",
        featured: true,
      },
      {
        question: "Which languages does Pin Potha support?",
        answer: "Pin Potha supports English, Sinhala and Tamil.",
        featured: true,
      },
    ],
  },
  {
    topic: "SLBIS",
    items: [
      {
        question: "Is SLBIS available?",
        answer:
          "SLBIS is currently in active development. No public release date has been announced.",
        featured: true,
      },
      {
        question: "Who is SLBIS for?",
        answer:
          "SLBIS is designed for ecological researchers, field biologists, conservation organisations, academic research groups and citizen scientists.",
      },
      {
        question: "Does SLBIS work offline?",
        answer:
          "Yes. SLBIS is being designed with an offline-first approach so field researchers can record observations in remote areas and synchronise when connectivity is available.",
        featured: true,
      },
      // TODO: Founder to confirm exact public wording for "Where is data stored?" without exposing infrastructure details.
      {
        question: "Can I test SLBIS early?",
        answer:
          "Yes. Researchers and conservation teams interested in early testing can reach out via email through the SLBIS or Contact page.",
      },
    ],
  },
  {
    topic: "AI solutions",
    items: [
      {
        question: "Do you take AI or software projects?",
        answer:
          "Yes, selectively. Alongside our own products, we take on a limited number of AI and custom software projects by enquiry. Availability is limited because our main focus is our own products.",
        featured: true,
      },
    ],
  },
  {
    topic: "Partnerships and investment",
    items: [
      {
        question: "How can I partner or invest?",
        answer:
          "You can email official.pamutech@gmail.com or visit the Investors and Funders page or Contact page to start a conversation.",
      },
    ],
  },
  {
    topic: "Privacy",
    items: [
      {
        question: "Does this website track visitors?",
        answer:
          "No. This is an informational static website with no user accounts and no analytics or advertising trackers by default.",
      },
    ],
  },
];

export const featuredFaqItems: FaqItem[] = faqGroups
  .flatMap((g) => g.items)
  .filter((item) => item.featured);
