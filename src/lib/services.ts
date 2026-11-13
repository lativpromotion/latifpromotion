export type ServicePackage = { label: string; price: string };

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
};

export const SERVICES: Service[] = [
  {
    slug: "tiktok-instagram-feature",
    number: "01",
    title: "TikTok / Instagram Book Feature",
    description:
      "A social media book feature designed to introduce books to TikTok and Instagram audiences, showcase their stories and support book discoverability.",
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
      "Professional 3D book mockup presentations designed to showcase book covers through attractive, polished visual displays.",
    price: "$75",
    cta: "Order a Book Mockup",
  },
  {
    slug: "social-media-management",
    number: "04",
    title: "Social Media Management",
    description:
      "Social media management services designed to help authors maintain a consistent and professional online presence.",
    packages: [
      { label: "1-week management", price: "$45" },
      { label: "2-week management", price: "$85" },
      { label: "1-month management", price: "$155" },
    ],
    cta: "Discuss Social Media Management",
  },
  {
    slug: "website-design",
    number: "05",
    title: "Website Design",
    description:
      "Professional custom website creation for authors who want a polished online presence to showcase their books, author identity and writing projects.",
    price: "$845",
    cta: "Request Website Design",
  },
  {
    slug: "website-redesign",
    number: "06",
    title: "Website Redesign",
    description:
      "Website redesign services focused on improving the visual appearance, structure, user experience and overall presentation of an existing author website.",
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
      "A book-focused promotional challenge designed to encourage reader awareness, engagement and interest in featured titles.",
    price: "$75",
    cta: "Enquire About Book Challenges",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug) as [string, ...string[]];

export function getService(slug: string | undefined) {
  return SERVICES.find((s) => s.slug === slug);
}

export const BRAND = {
  name: "LATIF",
  title: "Ebook Promotion Specialist | Author Outreach & Book Marketing",
  business: "Fourth Group & Co.",
  email: "hello@fourthgroup.co",
  website: "fourthgroup.co",
  websiteUrl: "https://fourthgroup.co",
} as const;
