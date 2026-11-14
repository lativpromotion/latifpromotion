import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { MockupSamplesTile } from "@/components/site/MockupSamples";
import { ServiceCard, hasPackageCards } from "@/components/site/ServiceCard";
import { Fragment } from "react";
import { ContactBand } from "@/components/site/sections";
import { SERVICES } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta(
      "Services & Pricing — LATIF Book Promotion",
      "Book trailers, 3D mockups, TikTok and Instagram features, social media management, author websites, Goodreads Listopia placement and book challenges — with clear pricing.",
    ),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-ivory pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            as="h1"
            eyebrow="Professional Services & Pricing"
            title="Promotional services, clearly priced."
            intro="Eight service categories, each with transparent pricing. Choose a service to start an enquiry — it will be selected for you on the contact form."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Fragment key={s.slug}>
                <Reveal delay={(i % 2) * 90} className={hasPackageCards(s) ? "md:col-span-2" : ""}>
                  <ServiceCard service={s} />
                </Reveal>
                {/* Fills the space beside Book Mockup Design so the full-width packages card starts on a fresh row. */}
                {s.slug === "book-mockup" && (
                  <Reveal delay={90}>
                    <MockupSamplesTile />
                  </Reveal>
                )}
              </Fragment>
            ))}
          </div>
          <p className="mt-12 max-w-2xl border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">
            Promotional services are designed to support visibility and discoverability. Specific views, sales, reviews or results cannot be guaranteed.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
