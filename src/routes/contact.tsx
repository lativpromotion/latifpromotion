import { createFileRoute } from "@tanstack/react-router";
import { Mail, Globe } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
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
      "Contact LATIF — Let's Talk About Your Book",
      "Send an author enquiry to LATIF about book trailers, mockups, social features, author websites, Goodreads promotion and more.",
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
            title="Let's Talk About Your Book."
            intro="Whether you're preparing to launch a new title or looking to give an existing book more visibility, let's discuss how the right promotional service can support your goals."
          />
          <Reveal delay={150}>
            <dl className="mt-12 divide-y divide-border border-y border-border">
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">Professional Name</dt>
                <dd className="wordmark text-xl text-navy">Latif</dd>
              </div>
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">Associated Business</dt>
                <dd className="font-display text-xl text-navy">{BRAND.business}</dd>
              </div>
              <div className="grid grid-cols-[10rem_1fr] gap-4 py-5">
                <dt className="eyebrow pt-1 text-[0.65rem] text-muted-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 text-navy underline decoration-gold underline-offset-4 hover:text-gold">
                    <Mail className="h-4 w-4" aria-hidden="true" /> {BRAND.email}
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
