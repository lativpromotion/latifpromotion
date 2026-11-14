export type PackageItem = { count: number; item: string };

export type ServicePackage = {
  label: string;
  price: string;
  /** URL id used in /contact?service=<slug>&package=<slug> to identify the chosen package. */
  slug?: string;
  /** Deliverables, shown exactly as supplied. */
  includes?: PackageItem[];
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  description: string;
  /** Single price shown on the card, exactly as supplied. */
  price?: string;
  /** Extra wording beside a single price, e.g. "registration fee". */
  priceNote?: string;
  packages?: ServicePackage[];
  cta: string;
  /** Button label on each package card, when packages have their own enquiry button. */
  packageCta?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "tiktok-instagram-feature",
    number: "01",
    title: "TikTok / Instagram Book Feature",
    description:
      "A social media book feature designed to introduce books to TikTok and Instagram audiences and support book discoverability.",
    price: "$20",
    priceNote: "registration fee",
    cta: "Enquire About This Service",
  },
  {
    slug: "book-trailer",
    number: "02",
    title: "Book Trailer Creation",
    description:
      "Creative video trailers designed to present a book's identity, storyline and atmosphere through engaging visual storytelling.",
    packages: [
      { label: "15-second book trailer", price: "$95" },
      { label: "45-second book trailer", price: "$145" },
      { label: "2-minute book trailer", price: "$350" },
    ],
    cta: "Request a Book Trailer",
  },
  {
    slug: "book-mockup",
    number: "03",
    title: "Book Mockup Design",
    description:
      "Professional 3D book mockup presentations designed to showcase book covers through attractive visual displays.",
    price: "$75",
    cta: "Order a Book Mockup",
  },
  {
    slug: "social-media-management",
    number: "04",
    title: "Social Media Management",
    description:
      "Social media management and content support designed to help authors maintain a consistent professional online presence.",
    packages: [
      { slug: "one-week", label: "One-Week Management", price: "$45", includes: [{ count: 6, item: "Static Posts" }, { count: 4, item: "Reels" }] },
      { slug: "two-week", label: "Two-Week Management", price: "$85", includes: [{ count: 12, item: "Static Posts" }, { count: 8, item: "Reels" }] },
      { slug: "one-month", label: "One-Month Management", price: "$155", includes: [{ count: 21, item: "Static Posts" }, { count: 9, item: "Reels" }] },
    ],
    cta: "Discuss Social Media Management",
    packageCta: "Enquire About This Package",
  },
  {
    slug: "website-design",
    number: "05",
    title: "Website Design",
    description:
      "Professional custom website creation for authors seeking an online presence to showcase their books and author identity.",
    price: "$845",
    cta: "Request Website Design",
  },
  {
    slug: "website-redesign",
    number: "06",
    title: "Website Redesign",
    description:
      "Website redesign focused on improving presentation, layout, usability and visual consistency.",
    price: "$455",
    cta: "Request Website Redesign",
  },
  {
    slug: "goodreads-listopia",
    number: "07",
    title: "Goodreads Listopia Placement",
    description:
      "Relevant Goodreads Listopia placement opportunities based on book genres, themes and reader interests.",
    packages: [
      { label: "2 Listopia lists", price: "$95" },
      { label: "5 Listopia lists", price: "$145" },
      { label: "10 Listopia lists", price: "$357" },
    ],
    cta: "Explore Goodreads Promotion",
  },
  {
    slug: "book-challenge",
    number: "08",
    title: "Book Challenge",
    description:
      "A book-focused promotional challenge designed to encourage reader awareness and participation.",
    price: "$75",
    cta: "Enquire About Book Challenges",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug) as [string, ...string[]];

export function getService(slug: string | undefined) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getPackage(serviceSlug: string | undefined, packageSlug: string | undefined) {
  if (!packageSlug) return undefined;
  return getService(serviceSlug)?.packages?.find((p) => p.slug === packageSlug);
}

/** e.g. "One-Week Management ($45 — 6 Static Posts, 4 Reels)" */
export function describePackage(p: ServicePackage) {
  const items = p.includes?.map((i) => `${i.count} ${i.item}`).join(", ");
  return `${p.label} (${p.price}${items ? ` — ${items}` : ""})`;
}

export const BRAND = {
  name: "LATIF",
  title: "Ebook Promotion Specialist | Author Outreach & Book Marketing",
  business: "Fourth Group & Co.",
  /** Primary contact email — LATIF's personal professional address. */
  email: "latif@fourthgroup.co",
  /** General business email for Fourth Group & Co. */
  generalEmail: "hello@fourthgroup.co",
  website: "fourthgroup.co",
  websiteUrl: "https://fourthgroup.co",
} as const;
