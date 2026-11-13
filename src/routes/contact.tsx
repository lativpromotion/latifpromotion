import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT_INTRO } from "@/components/site/sections";
import { BRAND, SERVICE_SLUGS } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

type ContactSearch = { service?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => {
    const s = search["service"];
    return typeof s === "string" && (SERVICE_SLUGS as string[]).includes(s) ? { service: s } : {};
  },
  head: () => ({
    meta: pageMeta(
      "Contact LATIF — Ebook Promotion Specialist",
      "Email LATIF at latif@fourthgroup.co or send an enquiry about book trailers, mockups, social features, author websites, Goodreads promotion and more.",
    ),
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHeading
            as="h1"
            eyebrow="Author Enquiries"
            title="Contact LATIF"
            intro={CONTACT_INTRO}
          />
          <Reveal delay={100}>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-10 flex items-center justify-between gap-4 bg-navy p-6 text-on-navy transition-colors duration-300 hover:bg-navy-soft md:p-8"
            >
              <span>
                <span className="eyebrow block text-[0.62rem] text-gold">Email LATIF directly</span>
                <span className="mt-2 block font-display text-2xl md:text-3xl">{BRAND.email}</span>
              </span>
              <Mail className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal delay={150}>
            <dl className="mt-12 divide-y divide-border border-y border-border">
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">Professional Name</dt>
                <dd className="wordmark text-xl text-navy">LATIF</dd>
              </div>
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">Associated Business</dt>
                <dd className="font-display text-xl text-navy">{BRAND.business}</dd>
              </div>
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">Personal Email</dt>
                <dd>
                  <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-navy underline decoration-gold underline-offset-4 hover:text-gold">
                    <Mail className="h-4 w-4" aria-hidden="true" /> {BRAND.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">General Business Email</dt>
                <dd>
                  <a href={`mailto:${BRAND.generalEmail}`} className="inline-flex items-center gap-2 text-charcoal underline decoration-border underline-offset-4 hover:text-gold">
                    <Mail className="h-4 w-4" aria-hidden="true" /> {BRAND.generalEmail}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">Website</dt>
                <dd>
                  <a href={BRAND.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-navy underline decoration-gold underline-offset-4 hover:text-gold">
                    <Globe className="h-4 w-4" aria-hidden="true" /> {BRAND.website}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
        <Reveal delay={100} className="lg:col-span-7">
          <EnquiryForm key={service ?? "none"} initialService={service} />
        </Reveal>
      </div>
    </section>
  );
}
