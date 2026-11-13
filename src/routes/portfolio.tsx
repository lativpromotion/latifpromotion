import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactBand } from "@/components/site/sections";
import { PORTFOLIO_DISCLAIMER } from "@/lib/portfolio";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: pageMeta(
      "Portfolio — LATIF Book Promotion Formats",
      "Illustrative examples of book trailers, 3D book mockups, TikTok and Instagram features, social graphics, Goodreads visuals and author websites.",
    ),
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="bg-ivory pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              as="h1"
              eyebrow="Portfolio Showcase"
              title="Promotional formats, presented with care."
              intro="Explore the kinds of visual work available — choose a format to filter, then open any example to see it larger."
            />
            <p className="max-w-xs border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">{PORTFOLIO_DISCLAIMER}</p>
          </div>
          <div className="mt-14">
            <PortfolioGallery />
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
