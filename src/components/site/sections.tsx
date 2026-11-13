import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import trailerImg from "@/assets/portfolio-trailer.jpg";
import mockupImg from "@/assets/portfolio-mockup.jpg";
import socialFeatureImg from "@/assets/portfolio-social-feature.jpg";
import socialDesignsImg from "@/assets/portfolio-social-designs.jpg";
import websiteImg from "@/assets/portfolio-website.jpg";
import goodreadsImg from "@/assets/portfolio-goodreads.jpg";

const REASONS = [
  { n: "01", title: "Personalized Author Communication", body: "Every project begins with understanding the author's book and objectives." },
  { n: "02", title: "Professional Presentation", body: "Carefully prepared promotional materials that respect the identity of each book." },
  { n: "03", title: "Clear Pricing", body: "Transparent service descriptions and pricing." },
  { n: "04", title: "Creative Promotional Solutions", body: "Different promotional opportunities for different types of books and authors." },
  { n: "05", title: "Author-Focused Approach", body: "Professional communication, organized delivery and author approval where applicable." },
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
                title="Why Choose LATIF?"
                intro="A considered, author-first way of working — built on clarity, care and professional presentation."
              />
            </div>
          </div>
          <ol className="lg:col-span-8">
            {REASONS.map((r, i) => (
              <Reveal as="li" key={r.n} delay={i * 60} className="grid grid-cols-[4rem_1fr] gap-6 border-t border-border py-10 last:border-b md:grid-cols-[6rem_1fr]">
                <span className="font-display text-4xl text-gold md:text-5xl">{r.n}</span>
                <div>
                  <h3 className="text-2xl text-navy md:text-3xl">{r.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "Discovery", body: "Understand the author's book, genre, audience and promotional goals." },
  { n: "02", title: "Strategy", body: "Identify suitable services and promotional opportunities." },
  { n: "03", title: "Preparation", body: "Prepare promotional materials and share proposed content with the author for approval where applicable." },
  { n: "04", title: "Delivery", body: "Proceed with the agreed service and provide professional communication throughout the process." },
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

const PORTFOLIO = [
  { img: trailerImg, label: "Book Trailer", caption: "Cinematic storytelling that captures a book's atmosphere.", span: "md:col-span-7 md:row-span-2", aspect: "aspect-[4/5] md:aspect-auto md:h-full" },
  { img: mockupImg, label: "3D Book Mockup", caption: "Polished displays across print and digital formats.", span: "md:col-span-5", aspect: "aspect-[4/3]" },
  { img: socialFeatureImg, label: "TikTok & Instagram Feature", caption: "Short-form features built for social discovery.", span: "md:col-span-5", aspect: "aspect-[4/3]" },
  { img: socialDesignsImg, label: "Social Media Designs", caption: "Consistent, on-brand promotional graphics.", span: "md:col-span-4", aspect: "aspect-square" },
  { img: websiteImg, label: "Author Website Design", caption: "A refined home for an author's books and identity.", span: "md:col-span-4", aspect: "aspect-square" },
  { img: goodreadsImg, label: "Goodreads Graphics", caption: "Visuals supporting Listopia and reader-list promotion.", span: "md:col-span-4", aspect: "aspect-square" },
];

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
          <p className="max-w-xs border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">
            Illustrative concepts showing the types of work offered. These are not completed client projects.
          </p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-12 md:auto-rows-[minmax(0,1fr)]">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.label} delay={(i % 3) * 90} className={p.span}>
              <figure className="group relative h-full overflow-hidden bg-navy">
                <div className={`${p.aspect} w-full overflow-hidden`}>
                  <img
                    src={p.img}
                    alt={`${p.label} — illustrative concept`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6 pt-16">
                  <p className="eyebrow text-gold">Example Format</p>
                  <p className="mt-2 font-display text-2xl text-on-navy">{p.label}</p>
                  <p className="mt-1 text-sm text-on-navy-muted">{p.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
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

export function ContactBand() {
  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-10 border border-navy/15 bg-paper p-10 md:flex-row md:items-center md:p-16">
          <div>
            <p className="eyebrow text-gold">Author Enquiries</p>
            <h2 className="mt-4 text-4xl text-navy md:text-5xl">Let's Talk About Your Book.</h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center bg-navy px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-on-navy transition-colors duration-300 hover:bg-gold hover:text-navy"
          >
            Start a Conversation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
