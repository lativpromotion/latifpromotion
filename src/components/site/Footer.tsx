import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-navy text-on-navy">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="wordmark text-4xl text-on-navy">Latif</p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gold">{BRAND.title}</p>
            <p className="mt-8 max-w-md font-display text-2xl italic leading-snug text-on-navy-muted">
              Helping authors present their books and connect with potential readers.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-gold">Navigate</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/" className="text-on-navy-muted transition-colors hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="text-on-navy-muted transition-colors hover:text-gold">About</Link></li>
              <li><Link to="/services" className="text-on-navy-muted transition-colors hover:text-gold">Services</Link></li>
              <li><Link to="/contact" className="text-on-navy-muted transition-colors hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-gold">Associated Business</p>
            <p className="mt-6 font-display text-xl text-on-navy">{BRAND.business}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={`mailto:${BRAND.email}`} className="text-on-navy-muted transition-colors hover:text-gold">{BRAND.email}</a></li>
              <li><a href={BRAND.websiteUrl} className="text-on-navy-muted transition-colors hover:text-gold" target="_blank" rel="noreferrer">{BRAND.website}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-on-navy/15 pt-8 text-xs text-on-navy-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LATIF · {BRAND.business}</p>
          <p className="tracking-[0.2em] uppercase">Home | About | Services | Contact</p>
        </div>
      </div>
    </footer>
  );
}
