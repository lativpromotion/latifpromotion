import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/lib/portfolio";
import { getService } from "@/lib/services";
import { cn } from "@/lib/utils";

type Filter = "All" | PortfolioCategory;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(() => (filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)), [filter]);
  const current = openIndex === null ? null : items[openIndex];
  const step = (d: number) => setOpenIndex((i) => (i === null ? i : (i + d + items.length) % items.length));
  const filters: Filter[] = ["All", ...PORTFOLIO_CATEGORIES];

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
                  alt={`${p.title} — illustrative concept`}
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

      <DialogPrimitive.Root open={current != null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className="fixed left-1/2 top-1/2 z-50 flex max-h-[92svh] w-[min(92vw,64rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden bg-paper shadow-card focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 md:flex-row"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
          >
            {current && (
              <>
                <div className="relative min-h-0 flex-1 bg-navy">
                  <img src={current.img} alt={`${current.title} — illustrative concept`} width={current.width} height={current.height} className="h-full max-h-[55svh] w-full object-contain md:max-h-[92svh]" />
                </div>
                <div className="flex shrink-0 flex-col p-8 md:w-80">
                  <p className="eyebrow text-[0.62rem] text-gold">{current.category}</p>
                  <DialogPrimitive.Title className="mt-3 font-display text-3xl leading-tight text-navy">{current.title}</DialogPrimitive.Title>
                  <DialogPrimitive.Description className="mt-3 leading-relaxed text-muted-foreground">{current.caption}</DialogPrimitive.Description>
                  <p className="mt-6 border-l border-gold pl-4 text-xs leading-relaxed text-muted-foreground">Illustrative concept — not a completed client project.</p>
                  <div className="mt-auto pt-8">
                    <Link
                      to="/contact"
                      search={{ service: current.service }}
                      className="inline-flex w-full items-center justify-between gap-3 bg-navy px-5 py-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-on-navy transition-colors duration-300 hover:bg-gold hover:text-navy"
                    >
                      Enquire: {getService(current.service)?.title}
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                    {items.length > 1 && (
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <button type="button" onClick={() => step(-1)} className="inline-flex h-10 w-10 items-center justify-center border border-border text-navy hover:border-gold" aria-label="Previous example">
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <span>{(openIndex ?? 0) + 1} / {items.length}</span>
                        <button type="button" onClick={() => step(1)} className="inline-flex h-10 w-10 items-center justify-center border border-border text-navy hover:border-gold" aria-label="Next example">
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <DialogPrimitive.Close className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-navy/70 text-on-navy backdrop-blur-sm hover:bg-gold hover:text-navy" aria-label="Close">
                  <X className="h-5 w-5" />
                </DialogPrimitive.Close>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
