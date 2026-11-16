import trailerImg from "@/assets/portfolio-trailer.jpg";
import trailerEditImg from "@/assets/portfolio-trailer-edit.jpg";
import socialFeatureImg from "@/assets/portfolio-social-feature.jpg";
import instagramPostsImg from "@/assets/portfolio-instagram-posts.jpg";
import socialDesignsImg from "@/assets/portfolio-social-designs.jpg";
import websiteImg from "@/assets/portfolio-website.jpg";
import goodreadsImg from "@/assets/portfolio-goodreads.jpg";
import superpowerMockup from "@/assets/mockup-superpower-hardcover.webp.asset.json";
import lastSecretMockups from "@/assets/mockup-last-secret-collection.webp.asset.json";
import coverCollectionMockups from "@/assets/mockup-cover-collection.webp.asset.json";
import loveMockup from "@/assets/mockup-love-in-every-chapter.webp.asset.json";
import dragonMockup from "@/assets/mockup-dragons-legacy.webp.asset.json";

import rippedApartVideo from "@/assets/trailers/trailer-ripped-apart.mp4.asset.json";
import rippedApartPoster from "@/assets/trailers/trailer-ripped-apart-poster.jpg.asset.json";
import throneVideo from "@/assets/trailers/trailer-throne-from-the-ashes.mp4.asset.json";
import thronePoster from "@/assets/trailers/trailer-throne-from-the-ashes-poster.jpg.asset.json";
import darknessVideo from "@/assets/trailers/trailer-a-beautiful-darkness.mp4.asset.json";
import darknessPoster from "@/assets/trailers/trailer-a-beautiful-darkness-poster.jpg.asset.json";
import kingVideo from "@/assets/trailers/trailer-king-of-ai.mp4.asset.json";
import kingPoster from "@/assets/trailers/trailer-king-of-ai-poster.jpg.asset.json";
import alienVideo from "@/assets/trailers/trailer-alien-planet-homemaking.mp4.asset.json";
import alienPoster from "@/assets/trailers/trailer-alien-planet-homemaking-poster.jpg.asset.json";

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
  /** "sample" = LATIF's own uploaded work; "concept" = illustrative format example. */
  kind: "sample" | "concept";
};

/**
 * LATIF's own book mockup samples, used exactly as uploaded (resized only).
 * Never regenerate, crop, merge or replace these, and never call them client projects.
 */
export const MOCKUP_SAMPLES: PortfolioItem[] = [
  { id: "sample-love", img: loveMockup.url, width: 1199, height: 1312, category: "3D Book Mockups", title: "Love in Every Chapter", caption: "Hardcover mockup presented in a warm desk setting.", service: "book-mockup", kind: "sample" },
  { id: "sample-dragon", img: dragonMockup.url, width: 1199, height: 1312, category: "3D Book Mockups", title: "The Dragon's Legacy", caption: "Fantasy hardcover mockup with a natural, lived-in backdrop.", service: "book-mockup", kind: "sample" },
  { id: "sample-superpower", img: superpowerMockup.url, width: 1214, height: 1295, category: "3D Book Mockups", title: "Superpower: The Ability to Fly or to Become Invisible", caption: "Hardcover mockup set against a bookshelf study scene.", service: "book-mockup", kind: "sample" },
  { id: "sample-last-secret", img: lastSecretMockups.url, width: 1536, height: 1024, category: "3D Book Mockups", title: "The Last Secret — Mockup Collection", caption: "One cover presented across ten scenes: hardcover, stacks, e-reader, interior pages and back cover.", service: "book-mockup", kind: "sample" },
  { id: "sample-cover-collection", img: coverCollectionMockups.url, width: 1536, height: 1024, category: "3D Book Mockups", title: "Multi-Genre Cover Collection", caption: "Ten book mockups across romance, fantasy, thriller, self-help, cookery, children's and non-fiction.", service: "book-mockup", kind: "sample" },
];

export const MOCKUP_SAMPLES_NOTE = "Book mockup samples by LATIF.";

/** Illustrative concepts only — never present these as completed client projects. */
export const PORTFOLIO: PortfolioItem[] = [
  { id: "trailer-cinematic", img: trailerImg, width: 1024, height: 1024, category: "Book Trailers", title: "Cinematic Trailer Frame", caption: "Atmospheric storytelling that captures a book's mood and setting.", service: "book-trailer", kind: "concept" },
  { id: "trailer-edit", img: trailerEditImg, width: 1280, height: 960, category: "Book Trailers", title: "Trailer Editing Concept", caption: "Scenes sequenced to present a book's identity in 15 seconds to 2 minutes.", service: "book-trailer", kind: "concept" },
  { id: "social-feature", img: socialFeatureImg, width: 1024, height: 1024, category: "TikTok & Instagram Features", title: "Short-Form Book Feature", caption: "A feature format built for social discovery on TikTok and Instagram.", service: "tiktok-instagram-feature", kind: "concept" },
  { id: "instagram-posts", img: instagramPostsImg, width: 1280, height: 960, category: "TikTok & Instagram Features", title: "Instagram Feature Posts", caption: "Cover, quote and reading-moment posts presented as a set.", service: "tiktok-instagram-feature", kind: "concept" },
  { id: "social-designs", img: socialDesignsImg, width: 1024, height: 1024, category: "Social Media Graphics", title: "Promotional Graphics", caption: "Consistent, on-brand graphics for an author's social channels.", service: "social-media-management", kind: "concept" },
  { id: "goodreads", img: goodreadsImg, width: 1024, height: 1024, category: "Goodreads Promotion", title: "Goodreads Listopia Visuals", caption: "Graphics supporting Listopia placement and reader-list promotion.", service: "goodreads-listopia", kind: "concept" },
  { id: "author-website", img: websiteImg, width: 1024, height: 1024, category: "Author Websites", title: "Author Website Layout", caption: "A refined online home for an author's books and identity.", service: "website-design", kind: "concept" },
];

/** Filter options for the concept gallery — only formats that have concept items. */
export const CONCEPT_CATEGORIES = PORTFOLIO_CATEGORIES.filter((c) => PORTFOLIO.some((p) => p.category === c));

export const PORTFOLIO_DISCLAIMER =
  "Illustrative concepts showing the types of work offered. These are not completed client projects.";


export type TrailerSample = {
  id: string;
  title: string;
  /** Running time as m:ss. */
  duration: string;
  src: string;
  poster: string;
  width: number;
  height: number;
};

/**
 * LATIF's own uploaded book trailers, served exactly as supplied (never re-encoded,
 * trimmed, merged or replaced). Posters are unedited frames taken from each video.
 */
export const TRAILER_SAMPLES: TrailerSample[] = [
  { id: "ripped-apart", title: "Ripped Apart: Quantum Twins", duration: "2:01", src: rippedApartVideo.url, poster: rippedApartPoster.url, width: 1024, height: 576 },
  { id: "throne-from-the-ashes", title: "Throne from the Ashes", duration: "0:45", src: throneVideo.url, poster: thronePoster.url, width: 1024, height: 576 },
  { id: "a-beautiful-darkness", title: "A Beautiful Darkness", duration: "0:37", src: darknessVideo.url, poster: darknessPoster.url, width: 1160, height: 576 },
  { id: "king-of-ai", title: "King of AI", duration: "0:31", src: kingVideo.url, poster: kingPoster.url, width: 1280, height: 568 },
  { id: "alien-planet-homemaking", title: "Alien Planet Homemaking", duration: "1:13", src: alienVideo.url, poster: alienPoster.url, width: 576, height: 1024 },
];

export const TRAILER_SHOWCASE_TITLE = "Book Trailer Showcase";
export const TRAILER_SHOWCASE_SUBTITLE = "Bringing stories to life through creative and engaging book trailers.";
