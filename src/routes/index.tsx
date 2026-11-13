import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-books.jpg";
import aboutImg from "@/assets/about-desk.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Commitment, ContactBand, PortfolioShowcase, ProcessTimeline, WhyChoose } from "@/components/site/sections";
import { SERVICES } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "LATIF — Ebook Promotion Specialist | Author Outreach & Book Marketing",
      "Every book deserves to be discovered. LATIF helps authors showcase their books through creative promotion, professional visuals and thoughtful book marketing.",
    ),
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesOverview />
      <WhyChoose />
      <ProcessTimeline />
      <PortfolioShowcase />
      <Commitment />
      <ContactBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-on-navy">
      <img
        src={heroImg}
        alt="Open hardcover book with a gold ribbon beside a stack of navy and ivory books under a brass lamp"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/20" aria-hidden="true" />
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="wordmark animate-rise text-6xl text-on-navy md:text-8xl" style={{ animationDelay: "60ms" }}>
            Latif
          </p>
          <div className="animate-rise mt-6 space-y-1" style={{ animationDelay: "180ms" }}>
            <p className="eyebrow text-gold">Ebook Promotion Specialist</p>
            <p className="eyebrow text-on-navy-muted">Author Outreach &amp; Book Marketing</p>
          </div>
          <span className="gold-rule animate-rise mt-10" style={{ animationDelay: "280ms" }} aria-hidden="true" />
          <h1 className="animate-rise mt-10 text-5xl leading-[1.02] text-on-navy md:text-7xl" style={{ animationDelay: "360ms" }}>
            Every Book Deserves to Be <em className="text-gold">Discovered.</em>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-on-navy-muted" style={{ animationDelay: "480ms" }}>
            Helping authors showcase their books through creative promotional strategies, professional visual content and thoughtful marketing solutions designed to connect books with potential readers.
          </p>
          <div className="animate-rise mt-12 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "600ms" }}>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-navy transition-colors duration-300 hover:bg-ivory"
            >
              Explore Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-on-navy/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-on-navy transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Start a Conversation
            </Link>
          </div>
          <p className="animate-rise mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-on-navy-muted" style={{ animationDelay: "720ms" }}>
            <span className="h-px w-10 bg-on-navy/30" aria-hidden="true" />
            Associated business brand · <span className="font-display text-base normal-case tracking-normal text-on-navy">Fourth Group &amp; Co.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <img src={aboutImg} alt="An open notebook and fountain pen on a writer's desk beside ivory books" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
            <span className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full border border-gold md:block" aria-hidden="true" />
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading eyebrow="About" title="Meet LATIF" />
          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-charcoal">
              LATIF is an Ebook Promotion Specialist focused on helping authors present their books professionally and explore meaningful promotional opportunities.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Through author outreach, creative book marketing and digital promotional services, LATIF works to help authors strengthen their book presentation, improve discoverability and introduce their work to potential readers.
            </p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-navy underline decoration-gold underline-offset-8 hover:text-gold">
              Read more about LATIF <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="border-t border-border bg-ivory pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Services & Pricing" title="Eight ways to bring a book forward." intro="Clear, transparent pricing across every promotional service." />
          <Link to="/services" className="inline-flex shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-navy underline decoration-gold underline-offset-8 hover:text-gold">
            View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const from = s.price ?? s.packages?.[0]?.price;
            return (
              <Reveal as="li" key={s.slug} delay={(i % 4) * 70} className="border-b border-r border-border">
                <Link
                  to="/services"
                  hash={s.slug}
                  className="group flex h-full flex-col bg-paper/40 p-8 transition-colors duration-500 hover:bg-navy"
                >
                  <span className="font-display text-3xl text-gold">{s.number}</span>
                  <span className="mt-6 font-display text-2xl leading-tight text-navy transition-colors group-hover:text-on-navy">{s.title}</span>
                  <span className="mt-auto pt-8 text-sm text-muted-foreground transition-colors group-hover:text-on-navy-muted">
                    {s.packages ? `From ${from}` : s.priceNote ? `${from} ${s.priceNote}` : from}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
