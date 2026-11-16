import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, BookOpen, Film } from "lucide-react";
import { MockupSamplesGallery } from "@/components/site/MockupSamples";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactBand } from "@/components/site/sections";
import { TrailerShowcase } from "@/components/site/TrailerShowcase";
import { MOCKUP_SAMPLES, PORTFOLIO_DISCLAIMER, TRAILER_SAMPLES, TRAILER_SHOWCASE_TITLE } from "@/lib/portfolio";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: pageMeta(
      "Portfolio — LATIF Book Promotion Formats",
      "Book mockup designs and a book trailer showcase by LATIF, plus examples of TikTok and Instagram features, social graphics, Goodreads visuals and author websites.",
    ),
  }),
  component: PortfolioPage,
});

const CATEGORIES = [
  { hash: "mockup-samples", icon: BookOpen, label: "Category 01 · Design", title: "Book Mockup Designs", count: `${MOCKUP_SAMPLES.length} mockup samples` },
  { hash: "trailer-showcase", icon: Film, label: "Category 02 · Video", title: TRAILER_SHOWCASE_TITLE, count: `${TRAILER_SAMPLES.length} book trailers` },
];

function PortfolioPage() {
  return (
    <>
      <section className="bg-ivory pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio Showcase"
            title="Promotional formats, presented with care."
            intro="Explore book mockup designs and book trailers by LATIF, then browse the other promotional formats on offer."
          />
          <nav aria-label="Portfolio categories" className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {CATEGORIES.map((c) => (
              <a key={c.hash} href={`#${c.hash}`} className="group flex items-center gap-5 bg-paper p-6 transition-colors duration-500 hover:bg-ivory md:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                  <c.icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="eyebrow block text-[0.62rem] text-gold">{c.label}</span>
                  <span className="mt-1 block font-display text-2xl leading-tight text-navy md:text-3xl">{c.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{c.count}</span>
                </span>
                <ArrowDown className="h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:translate-y-1" aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="mt-20">
            <MockupSamplesGallery />
          </div>
          <div className="mt-28 border-t border-border pt-20">
            <TrailerShowcase />
          </div>
          <div className="mt-28 border-t border-border pt-20">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="More Promotional Formats"
                title="Trailers, features, graphics and websites."
                intro="Illustrative examples of the other services available."
              />
              <p className="max-w-xs border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">{PORTFOLIO_DISCLAIMER}</p>
            </div>
            <div className="mt-14">
              <PortfolioGallery />
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
