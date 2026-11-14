import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, Eye, Lightbulb, Mail, MessagesSquare, Receipt, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { itemAlt } from "./Lightbox";
import { Reveal } from "./Reveal";
import { MockupSamplesStrip } from "./MockupSamples";
import { PORTFOLIO, PORTFOLIO_DISCLAIMER } from "@/lib/portfolio";
import { BRAND } from "@/lib/services";

const REASONS = [
  { icon: MessagesSquare, title: "Personalized Author Communication", body: "Every project begins with understanding the author's book, voice and objectives." },
  { icon: BookOpen, title: "Professional Book Presentation", body: "Carefully prepared promotional materials that respect the identity of each book." },
  { icon: Receipt, title: "Clear Service Descriptions & Pricing", body: "Every service is described plainly, with its price shown upfront." },
  { icon: Lightbulb, title: "Creative Promotional Solutions", body: "Different promotional opportunities for different types of books and authors." },
  { icon: Target, title: "Author-Focused Promotional Planning", body: "Services are suggested around the author's book, genre and goals." },
  { icon: Eye, title: "Transparent Expectations", body: "Promotion supports visibility and discoverability — specific results are never promised." },
  { icon: ClipboardCheck, title: "Professional Service Delivery", body: "Organized delivery, clear updates and author approval where applicable." },
];

export function WhyChoose() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="The Approach"
                title="Why Work With LATIF?"
                intro="A considered, author-first way of working — built on clarity, care and professional presentation."
              />
            </div>
          </div>
          <ol className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {REASONS.map((r, i) => (
              <Reveal
                as="li"
                key={r.title}
                delay={(i % 2) * 80}
                className={`group relative bg-paper p-8 transition-colors duration-500 hover:bg-ivory md:p-10 ${i === REASONS.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                    <r.icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-2xl leading-snug text-navy">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "Discovery", body: "Understand the author's book, genre and promotional goals." },
  { n: "02", title: "Strategy", body: "Identify suitable promotional services and opportunities." },
  { n: "03", title: "Preparation", body: "Prepare promotional materials and share proposed content for approval where applicable." },
  { n: "04", title: "Delivery", body: "Proceed with the agreed service professionally." },
];

export function ProcessTimeline({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-on-navy md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          as={headingAs}
          tone="dark"
          eyebrow="How the Process Works"
          title="Four considered steps, from first conversation to delivery."
        />
        <ol className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-8">
          <span className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gold/40 md:block" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="relative">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-navy text-xs font-medium tracking-[0.15em] text-gold">
                {s.n}
              </span>
              <p className="eyebrow mt-8 text-gold">Step {s.n}</p>
              <h3 className="mt-3 text-3xl text-on-navy">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-on-navy-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const SHOWCASE_LAYOUT = [
  { id: "trailer-cinematic", span: "md:col-span-7 md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto md:h-full" },
  { id: "trailer-edit", span: "md:col-span-5", aspect: "aspect-[4/3] md:h-full" },
  { id: "instagram-posts", span: "md:col-span-5", aspect: "aspect-[4/3] md:h-full" },
  { id: "social-designs", span: "md:col-span-4", aspect: "aspect-square md:h-full" },
  { id: "author-website", span: "md:col-span-4", aspect: "aspect-square md:h-full" },
  { id: "goodreads", span: "md:col-span-4", aspect: "aspect-square md:h-full" },
];

const SHOWCASE = SHOWCASE_LAYOUT.map((l) => ({ ...l, item: PORTFOLIO.find((p) => p.id === l.id)! }));

export function PortfolioShowcase() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Portfolio Showcase"
            title="The kinds of work on offer."
            intro="A visual overview of the promotional formats available — from trailers and mockups to author websites."
          />
          <p className="max-w-xs border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">{PORTFOLIO_DISCLAIMER}</p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-12 md:auto-rows-[minmax(0,1fr)]">
          {SHOWCASE.map(({ id, span, aspect, item }, i) => (
            <Reveal key={id} delay={(i % 3) * 90} className={span}>
              <Link to="/portfolio" className="group relative block h-full overflow-hidden bg-navy">
                <div className={`${aspect} w-full overflow-hidden`}>
                  <img
                    src={item.img}
                    alt={itemAlt(item)}
                    loading="lazy"
                    width={item.width}
                    height={item.height}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6 pt-16">
                  <p className="eyebrow text-gold">{item.category}</p>
                  <p className="mt-2 font-display text-2xl text-on-navy">{item.title}</p>
                  <p className="mt-1 text-sm text-on-navy-muted">{item.caption}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <MockupSamplesStrip />
        <div className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 border border-navy px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-navy transition-colors duration-300 hover:bg-navy hover:text-on-navy"
          >
            Explore the Full Portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Commitment() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Professional Commitment</p>
          <h2 className="mt-6 text-4xl leading-[1.1] text-navy md:text-5xl">
            Professional Promotion. <em className="text-gold">Thoughtful Presentation.</em> Clear Communication.
          </h2>
          <span className="gold-rule mx-auto mt-10" aria-hidden="true" />
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-charcoal">
            Every book deserves to be presented with care. My commitment is to provide authors with clearly explained services, professional communication and thoughtful promotional preparation.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Promotional services are designed to support visibility and discoverability. Specific views, sales, reviews or results cannot be guaranteed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export const CONTACT_INTRO =
  "Have a book you'd like to promote? I'd be happy to discuss your book, your goals and the promotional services that could support them.";

export function ContactBand() {
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="relative grid gap-10 overflow-hidden bg-navy p-10 text-on-navy md:p-16 lg:grid-cols-12 lg:items-center">
          <span className="absolute inset-3 border border-gold/30 md:inset-4" aria-hidden="true" />
          <div className="relative lg:col-span-7">
            <p className="eyebrow text-gold">Author Enquiries</p>
            <h2 className="mt-4 text-4xl text-on-navy md:text-6xl">Contact LATIF</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-navy-muted">{CONTACT_INTRO}</p>
          </div>
          <div className="relative flex flex-col gap-5 lg:col-span-5 lg:items-end">
            <a href={`mailto:${BRAND.email}`} className="group inline-flex items-center gap-3 font-display text-2xl text-on-navy transition-colors hover:text-gold md:text-3xl">
              <Mail className="h-5 w-5 text-gold" aria-hidden="true" /> {BRAND.email}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-navy transition-colors duration-300 hover:bg-ivory"
            >
              Work With Me <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
