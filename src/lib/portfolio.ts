import trailerImg from "@/assets/portfolio-trailer.jpg";
import trailerEditImg from "@/assets/portfolio-trailer-edit.jpg";
import mockupImg from "@/assets/portfolio-mockup.jpg";
import mockupSetImg from "@/assets/portfolio-mockup-set.jpg";
import socialFeatureImg from "@/assets/portfolio-social-feature.jpg";
import instagramPostsImg from "@/assets/portfolio-instagram-posts.jpg";
import socialDesignsImg from "@/assets/portfolio-social-designs.jpg";
import websiteImg from "@/assets/portfolio-website.jpg";
import goodreadsImg from "@/assets/portfolio-goodreads.jpg";

export const PORTFOLIO_CATEGORIES = [
  "Book Trailers",
  "3D Book Mockups",
  "TikTok & Instagram Features",
  "Social Media Graphics",
  "Goodreads Promotion",
  "Author Websites",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export type PortfolioItem = {
  id: string;
  img: string;
  width: number;
  height: number;
  category: PortfolioCategory;
  title: string;
  caption: string;
  /** Service slug in services.ts this format relates to. */
  service: string;
};

/** Illustrative concepts only — never present these as completed client projects. */
export const PORTFOLIO: PortfolioItem[] = [
  { id: "trailer-cinematic", img: trailerImg, width: 1024, height: 1024, category: "Book Trailers", title: "Cinematic Trailer Frame", caption: "Atmospheric storytelling that captures a book's mood and setting.", service: "book-trailer" },
  { id: "trailer-edit", img: trailerEditImg, width: 1280, height: 960, category: "Book Trailers", title: "Trailer Editing Concept", caption: "Scenes sequenced to present a book's identity in 15 seconds to 2 minutes.", service: "book-trailer" },
  { id: "mockup-display", img: mockupImg, width: 1024, height: 1024, category: "3D Book Mockups", title: "Hardcover Display", caption: "A polished 3D presentation of a book cover.", service: "book-mockup" },
  { id: "mockup-set", img: mockupSetImg, width: 1280, height: 960, category: "3D Book Mockups", title: "Print & Ebook Set", caption: "One cover shown across hardcover, paperback and tablet formats.", service: "book-mockup" },
  { id: "social-feature", img: socialFeatureImg, width: 1024, height: 1024, category: "TikTok & Instagram Features", title: "Short-Form Book Feature", caption: "A feature format built for social discovery on TikTok and Instagram.", service: "tiktok-instagram-feature" },
  { id: "instagram-posts", img: instagramPostsImg, width: 1280, height: 960, category: "TikTok & Instagram Features", title: "Instagram Feature Posts", caption: "Cover, quote and reading-moment posts presented as a set.", service: "tiktok-instagram-feature" },
  { id: "social-designs", img: socialDesignsImg, width: 1024, height: 1024, category: "Social Media Graphics", title: "Promotional Graphics", caption: "Consistent, on-brand graphics for an author's social channels.", service: "social-media-management" },
  { id: "goodreads", img: goodreadsImg, width: 1024, height: 1024, category: "Goodreads Promotion", title: "Goodreads Listopia Visuals", caption: "Graphics supporting Listopia placement and reader-list promotion.", service: "goodreads-listopia" },
  { id: "author-website", img: websiteImg, width: 1024, height: 1024, category: "Author Websites", title: "Author Website Layout", caption: "A refined online home for an author's books and identity.", service: "website-design" },
];

export const PORTFOLIO_DISCLAIMER =
  "Illustrative concepts showing the types of work offered. These are not completed client projects.";
