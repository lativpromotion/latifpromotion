import { Expand } from "lucide-react";
import { useMemo, useState } from "react";
import { CONCEPT_CATEGORIES, PORTFOLIO, type PortfolioCategory } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Lightbox, itemAlt } from "./Lightbox";

type Filter = "All" | PortfolioCategory;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(() => (filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)), [filter]);
  const filters: Filter[] = ["All", ...CONCEPT_CATEGORIES];

  return (
    <>
      <div className="-mx-6 overflow-x-auto px-6 pb-2" role="group" aria-label="Filter portfolio by format">
        <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "whitespace-nowrap border px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                filter === f ? "border-navy bg-navy text-on-navy" : "border-border bg-paper text-charcoal/80 hover:border-gold hover:text-navy",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
              aria-label={`View larger: ${p.title}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                <img
                  src={p.img}
                  alt={itemAlt(p)}
                  loading="lazy"
                  width={p.width}
                  height={p.height}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" aria-hidden="true" />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-on-navy/40 bg-navy/60 text-on-navy opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
              <div className="border-x border-b border-border bg-paper p-6">
                <p className="eyebrow text-[0.62rem] text-gold">{p.category}</p>
                <p className="mt-2 font-display text-2xl leading-tight text-navy">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.caption}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} />
    </>
  );
}
