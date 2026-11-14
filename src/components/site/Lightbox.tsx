import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { MOCKUP_SAMPLES_NOTE, type PortfolioItem } from "@/lib/portfolio";
import { getService } from "@/lib/services";

export function itemAlt(p: PortfolioItem) {
  return p.kind === "sample" ? `${p.title} — book mockup sample by LATIF` : `${p.title} — illustrative concept`;
}

/** Full-size viewer shared by the mockup samples and the concept gallery. */
export function Lightbox({ items, index, onIndexChange }: { items: PortfolioItem[]; index: number | null; onIndexChange: (i: number | null) => void }) {
  const current = index === null ? null : items[index];
  const step = (d: number) => index !== null && onIndexChange((index + d + items.length) % items.length);

  return (
    <DialogPrimitive.Root open={current != null} onOpenChange={(o) => !o && onIndexChange(null)}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex max-h-[92svh] w-[min(94vw,76rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden bg-paper shadow-card focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 md:flex-row"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
        >
          {current && (
            <>
              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-navy">
                <img src={current.img} alt={itemAlt(current)} width={current.width} height={current.height} className="h-full max-h-[55svh] w-full object-contain md:max-h-[92svh]" />
              </div>
              <div className="flex shrink-0 flex-col overflow-y-auto p-8 md:w-80">
                <p className="eyebrow text-[0.62rem] text-gold">{current.category}</p>
                <DialogPrimitive.Title className="mt-3 font-display text-3xl leading-tight text-navy">{current.title}</DialogPrimitive.Title>
                <DialogPrimitive.Description className="mt-3 leading-relaxed text-muted-foreground">{current.caption}</DialogPrimitive.Description>
                <p className="mt-6 border-l border-gold pl-4 text-xs leading-relaxed text-muted-foreground">
                  {current.kind === "sample" ? MOCKUP_SAMPLES_NOTE : "Illustrative concept — not a completed client project."}
                </p>
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
                      <span>{(index ?? 0) + 1} / {items.length}</span>
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
  );
}
