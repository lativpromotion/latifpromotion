import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <article
      id={service.slug}
      className={cn(
        "group relative flex h-full scroll-mt-28 flex-col border border-border bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-card md:p-10",
        className,
      )}
    >
      <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" aria-hidden="true" />
      <div className="flex items-baseline justify-between">
        <span className="font-display text-5xl text-gold/80">{service.number}</span>
        <span className="eyebrow text-muted-foreground">Service</span>
      </div>
      <h3 className="mt-8 text-3xl leading-tight text-navy">{service.title}</h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>

      <div className="mt-8 border-t border-border pt-6">
        {service.packages ? (
          <ul className="space-y-3">
            {service.packages.map((p) => (
              <li key={p.label} className="flex items-baseline gap-3">
                <span className="text-sm text-charcoal">{p.label}</span>
                <span className="flex-1 border-b border-dotted border-border" aria-hidden="true" />
                <span className="font-display text-2xl text-navy">{p.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex items-baseline gap-3">
            <span className="font-display text-5xl text-navy">{service.price}</span>
            {service.priceNote && <span className="text-sm uppercase tracking-[0.16em] text-muted-foreground">{service.priceNote}</span>}
          </p>
        )}
      </div>

      <div className="mt-auto pt-8">
        <Link
          to="/contact"
          search={{ service: service.slug }}
          className="inline-flex w-full items-center justify-between gap-3 border border-navy px-5 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-navy transition-colors duration-300 hover:bg-navy hover:text-on-navy"
        >
          {service.cta}
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
