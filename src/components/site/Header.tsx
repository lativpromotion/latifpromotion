import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Our Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        scrolled ? "border-border bg-ivory/95 backdrop-blur-md" : "border-transparent bg-ivory",
      )}
    >
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10", scrolled ? "h-16" : "h-20")}>
        <Link to="/" className="group flex flex-col leading-none" aria-label="LATIF — home" onClick={() => setOpen(false)}>
          <span className="wordmark text-2xl text-navy md:text-[1.7rem]">LATIF</span>
          <span className="mt-1 hidden text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold sm:block">
            Ebook Promotion Specialist
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative whitespace-nowrap py-2 text-[0.78rem] font-normal uppercase tracking-[0.16em] text-charcoal/80 transition-colors hover:text-navy data-[status=active]:text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center whitespace-nowrap border border-navy bg-navy px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-on-navy transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy"
          >
            Work With Me
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-navy xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-ivory px-6 pb-8 pt-4 xl:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-4 font-display text-2xl text-navy data-[status=active]:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center bg-navy px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] text-on-navy"
          >
            Work With Me
          </Link>
        </nav>
      )}
    </header>
  );
}
