import { Link } from "@tanstack/react-router";
import { ArrowRight, Expand } from "lucide-react";
import { useState } from "react";
import { MOCKUP_SAMPLES, MOCKUP_SAMPLES_NOTE, type PortfolioItem } from "@/lib/portfolio";
import { Lightbox, itemAlt } from "./Lightbox";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const singles = MOCKUP_SAMPLES.filter((m) => m.width < m.height);
const collections = MOCKUP_SAMPLES.filter((m) => m.width >= m.height);

/** Matted print-style frame; the image keeps its own proportions and is never cropped. */
function SampleFigure({ item, large = false }: { item: PortfolioItem; large?: boolean }) {
  return (
    <>
      <div className="relative border border-border bg-paper p-3 transition-colors duration-500 group-hover:border-gold md:p-4">
        <img src={item.img} alt={itemAlt(item)} width={item.width} height={item.height} loading="lazy" className="block h-auto w-full" />
        <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-on-navy/40 bg-navy/70 text-on-navy opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">
          <Expand className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-5">
        <p className="eyebrow text-[0.62rem] text-gold">{item.category}</p>
        <p className={`mt-2 font-display leading-tight text-navy ${large ? "text-3xl" : "text-2xl"}`}>{item.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
      </div>
    </>
  );
}

const cardFocus = "group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ivory";

/** Full gallery of LATIF's own mockups with a viewer (Portfolio page). */
export function MockupSamplesGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const indexOf = (id: string) => MOCKUP_SAMPLES.findIndex((m) => m.id === id);

  return (
    <section id="mockup-samples" className="scroll-mt-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Book Mockup Samples"
          title="Covers, presented in three dimensions."
          intro="Book mockup presentations that let a cover be seen as readers would hold it. Open any sample to view it in full."
        />
        <p className="max-w-xs border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">{MOCKUP_SAMPLES_NOTE}</p>
      </div>

      <ul className="mt-14 grid items-start gap-10 md:grid-cols-3 md:gap-8">
        {singles.map((m, i) => (
          <Reveal as="li" key={m.id} delay={i * 90}>
            <button type="button" onClick={() => setOpen(indexOf(m.id))} className={cardFocus} aria-label={`View full size: ${m.title}`}>
              <SampleFigure item={m} />
            </button>
          </Reveal>
        ))}
      </ul>

      <ul className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-8">
        {collections.map((m, i) => (
          <Reveal as="li" key={m.id} delay={i * 90}>
            <button type="button" onClick={() => setOpen(indexOf(m.id))} className={cardFocus} aria-label={`View full size: ${m.title}`}>
              <SampleFigure item={m} large />
            </button>
          </Reveal>
        ))}
      </ul>

      <Lightbox items={MOCKUP_SAMPLES} index={open} onIndexChange={setOpen} />
    </section>
  );
}

/** Compact strip of the single-book mockups that links to the full gallery (Home page). */
export function MockupSamplesStrip() {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-between gap-4 border-t border-border pt-10 md:flex-row md:items-baseline">
        <div>
          <p className="eyebrow text-gold">Book Mockup Samples</p>
          <p className="mt-3 font-display text-3xl text-navy md:text-4xl">{MOCKUP_SAMPLES_NOTE}</p>
        </div>
        <Link to="/portfolio" hash="mockup-samples" className="inline-flex shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-navy underline decoration-gold underline-offset-8 hover:text-gold">
          View all mockup samples <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <ul className="mt-10 grid items-start gap-10 sm:grid-cols-3 sm:gap-6">
        {singles.map((m, i) => (
          <Reveal as="li" key={m.id} delay={i * 90}>
            <Link to="/portfolio" hash="mockup-samples" className={cardFocus} aria-label={`See ${m.title} in the portfolio`}>
              <SampleFigure item={m} />
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/** Small tile beside the Book Mockup Design service card. */
export function MockupSamplesTile() {
  const featured = singles[0]!;
  return (
    <Link
      to="/portfolio"
      hash="mockup-samples"
      className="group flex h-full flex-col border border-border bg-navy p-6 text-on-navy transition-colors duration-500 hover:border-gold md:p-8"
    >
      <div className="flex flex-1 items-center justify-center bg-paper p-3">
        <img src={featured.img} alt={itemAlt(featured)} width={featured.width} height={featured.height} loading="lazy" className="block max-h-[22rem] w-auto max-w-full" />
      </div>
      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-[0.62rem] text-gold">Book Mockup Samples</p>
          <p className="mt-2 font-display text-2xl leading-tight">See mockup work by LATIF</p>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  );
}
