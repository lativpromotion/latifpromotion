import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/services";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Our Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-on-navy">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="wordmark text-5xl text-on-navy md:text-6xl">LATIF</p>
            <p className="mt-5 text-xs uppercase tracking-[0.24em] text-gold">{BRAND.title}</p>
            <p className="mt-8 max-w-md font-display text-2xl italic leading-snug text-on-navy-muted">
              Helping authors present their books and connect with potential readers.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-gold">Navigate</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-on-navy-muted transition-colors hover:text-gold">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-gold">Contact LATIF</p>
            <a href={`mailto:${BRAND.email}`} className="mt-6 block font-display text-xl text-on-navy transition-colors hover:text-gold">{BRAND.email}</a>
            <p className="mt-8 eyebrow text-[0.62rem] text-on-navy-muted">Associated Business Brand</p>
            <p className="mt-2 font-display text-xl text-on-navy">{BRAND.business}</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={`mailto:${BRAND.generalEmail}`} className="text-on-navy-muted transition-colors hover:text-gold">{BRAND.generalEmail}</a></li>
              <li><a href={BRAND.websiteUrl} className="text-on-navy-muted transition-colors hover:text-gold" target="_blank" rel="noreferrer">{BRAND.website}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-on-navy/15 pt-8 text-xs text-on-navy-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LATIF · {BRAND.business}</p>
          <p>{BRAND.title}</p>
        </div>
      </div>
    </footer>
  );
}
