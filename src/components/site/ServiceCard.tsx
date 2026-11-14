import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clapperboard, Image as ImageIcon } from "lucide-react";
import type { Service, ServicePackage } from "@/lib/services";
import { cn } from "@/lib/utils";

const ITEM_ICONS: Record<string, typeof ImageIcon> = { "Static Posts": ImageIcon, Reels: Clapperboard };

function PackageCard({ service, pkg }: { service: Service; pkg: ServicePackage }) {
  return (
    <li className="group/pkg relative flex flex-col border border-border bg-ivory p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:bg-paper hover:shadow-card md:p-7">
      <span className="absolute inset-x-6 top-0 h-px bg-gold/70 md:inset-x-7" aria-hidden="true" />
      <h4 className="eyebrow text-[0.68rem] text-gold">{pkg.label}</h4>
      <p className="mt-4 font-display text-5xl leading-none text-navy">{pkg.price}</p>
      <p className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Includes</p>
      <ul className="mt-3 divide-y divide-border border-y border-border">
        {pkg.includes!.map((inc) => {
          const Icon = ITEM_ICONS[inc.item] ?? ImageIcon;
          return (
            <li key={inc.item} className="flex items-center gap-4 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold transition-colors duration-500 group-hover/pkg:bg-gold group-hover/pkg:text-navy">
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="font-display text-4xl leading-none text-navy">{inc.count}</span>
              <span className="text-sm text-charcoal">{inc.item}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto pt-7">
        <Link
          to="/contact"
          search={{ service: service.slug, package: pkg.slug }}
          className="inline-flex w-full items-center justify-between gap-3 bg-navy px-5 py-4 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-on-navy transition-colors duration-300 hover:bg-gold hover:text-navy"
          aria-label={`${service.packageCta ?? service.cta}: ${pkg.label} ${pkg.price}`}
        >
          {service.packageCta ?? service.cta}
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </li>
  );
}

/** Services whose packages list deliverables get full-width pricing cards, each with its own enquiry button. */
export function hasPackageCards(service: Service) {
  return !!service.packages?.some((p) => p.includes?.length);
}

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  if (hasPackageCards(service)) {
    return (
      <article
        id={service.slug}
        className={cn("relative scroll-mt-28 border border-border bg-paper p-8 md:p-10", className)}
      >
        <span className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden="true" />
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-baseline gap-6">
              <span className="font-display text-5xl text-gold/80">{service.number}</span>
              <span className="eyebrow text-muted-foreground">Service · Three Packages</span>
            </div>
            <h3 className="mt-8 text-3xl leading-tight text-navy md:text-4xl">{service.title}</h3>
          </div>
          <p className="leading-relaxed text-muted-foreground lg:col-span-5">{service.description}</p>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {service.packages!.map((p) => (
            <PackageCard key={p.label} service={service} pkg={p} />
          ))}
        </ul>
      </article>
    );
  }

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
