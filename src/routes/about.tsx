import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-desk.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Commitment, ContactBand, WhyChoose } from "@/components/site/sections";
import { BRAND } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      "Meet LATIF — Ebook Promotion Specialist",
      "LATIF helps authors present their books professionally through author outreach, creative book marketing and digital promotional services.",
    ),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <SectionHeading as="h1" eyebrow="About" title="Meet LATIF" />
            <Reveal delay={120} className="mt-10 space-y-6 text-lg leading-relaxed text-charcoal">
              <p>
                LATIF is an Ebook Promotion Specialist focused on helping authors present their books professionally and explore meaningful promotional opportunities.
              </p>
              <p className="text-muted-foreground">
                Through author outreach, creative book marketing and digital promotional services, LATIF works to help authors strengthen their book presentation, improve discoverability and introduce their work to potential readers.
              </p>
              <p className="text-muted-foreground">
                With an emphasis on professional communication, personalized service and thoughtful promotional planning, the goal is to make every author's promotional experience clear, organized and professional.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
              <div className="bg-paper p-6">
                <p className="eyebrow text-gold">Professional Name</p>
                <p className="mt-3 wordmark text-2xl text-navy">Latif</p>
              </div>
              <div className="bg-paper p-6">
                <p className="eyebrow text-gold">Associated Business Brand</p>
                <p className="mt-3 font-display text-2xl text-navy">{BRAND.business}</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <div className="relative">
              <img src={aboutImg} alt="An open notebook and fountain pen on a writer's desk beside ivory books" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
              <span className="absolute -bottom-5 -left-5 -z-10 hidden h-full w-full border border-gold md:block" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>
      <WhyChoose />
      <Commitment />
      <ContactBand />
    </>
  );
}
