import { Facebook, Instagram } from "lucide-react";
import { SOCIALS, type SocialPlatform } from "@/lib/services";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const ICONS: Record<SocialPlatform, ({ className }: { className?: string }) => React.ReactNode> = {
  facebook: ({ className }) => <Facebook className={className} strokeWidth={1.6} aria-hidden="true" />,
  instagram: ({ className }) => <Instagram className={className} strokeWidth={1.6} aria-hidden="true" />,
  tiktok: TikTokIcon,
};

export function SocialConnect() {
  return (
    <section className="bg-navy py-24 text-on-navy md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tone="dark"
          eyebrow="Stay Connected"
          title="Connect with LATIF"
          intro="Follow LATIF's official social media accounts for book promotion updates, creative work and author features."
        />
        <ul className="mt-16 grid gap-px border border-on-navy/15 bg-on-navy/15 sm:grid-cols-3">
          {SOCIALS.map((s, i) => {
            const Icon = ICONS[s.platform];
            return (
              <Reveal as="li" key={s.platform} delay={i * 100} className="bg-navy">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col items-center gap-6 p-10 text-center transition-colors duration-500 hover:bg-navy-soft md:p-12"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block font-display text-2xl text-on-navy">{s.name}</span>
                    <span className="mt-2 block text-sm tracking-wide text-on-navy-muted transition-colors group-hover:text-gold">
                      {s.handle}
                    </span>
                  </span>
                  <span className="mt-auto text-[0.65rem] uppercase tracking-[0.24em] text-on-navy-muted/70 transition-colors group-hover:text-gold">
                    Follow on {s.name}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
