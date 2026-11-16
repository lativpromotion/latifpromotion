import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Film, Smartphone } from "lucide-react";
import { useRef, type SyntheticEvent } from "react";
import { TRAILER_SAMPLES, TRAILER_SHOWCASE_SUBTITLE, TRAILER_SHOWCASE_TITLE, type TrailerSample } from "@/lib/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const landscape = TRAILER_SAMPLES.filter((t) => t.width > t.height);
const vertical = TRAILER_SAMPLES.filter((t) => t.width <= t.height);

/** One native player per trailer; the video keeps its own aspect ratio inside a navy mat. */
function TrailerPlayer({ trailer, onPlay, className }: { trailer: TrailerSample; onPlay: (e: SyntheticEvent<HTMLVideoElement>) => void; className?: string }) {
  return (
    <div className={`border border-gold/40 bg-navy p-2 md:p-3 ${className ?? ""}`}>
      <video
        controls
        playsInline
        preload="none"
        poster={trailer.poster}
        width={trailer.width}
        height={trailer.height}
        onPlay={onPlay}
        aria-label={`Book trailer: ${trailer.title}`}
        className="block h-full w-full bg-navy object-contain"
      >
        <source src={trailer.src} type="video/mp4" />
        Your browser can't play this video.
      </video>
    </div>
  );
}

function Caption({ trailer, index, format }: { trailer: TrailerSample; index: number; format: string }) {
  return (
    <div className="mt-5 flex items-start justify-between gap-6">
      <div>
        <p className="eyebrow text-[0.62rem] text-gold">Trailer {String(index + 1).padStart(2, "0")}</p>
        <p className="mt-2 font-display text-2xl leading-tight text-navy">{trailer.title}</p>
      </div>
      <p className="mt-1 flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
        <span className="sr-only">Length </span>
        {trailer.duration}
        <span aria-hidden="true">·</span>
        {format}
      </p>
    </div>
  );
}

/** LATIF's own uploaded book trailers (Portfolio page). */
export function TrailerShowcase() {
  const root = useRef<HTMLElement | null>(null);

  // Only one trailer plays at a time.
  const pauseOthers = (e: SyntheticEvent<HTMLVideoElement>) => {
    root.current?.querySelectorAll("video").forEach((v) => {
      if (v !== e.currentTarget && !v.paused) v.pause();
    });
  };

  return (
    <section id="trailer-showcase" ref={root} className="scroll-mt-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow={TRAILER_SHOWCASE_TITLE} title={TRAILER_SHOWCASE_TITLE} intro={TRAILER_SHOWCASE_SUBTITLE} />
        <p className="flex max-w-xs items-start gap-3 border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">
          <Film className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          Book trailer samples by LATIF. Press play to watch each trailer here.
        </p>
      </div>

      <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {landscape.map((t, i) => (
          <Reveal as="li" key={t.id} delay={(i % 2) * 90}>
            <TrailerPlayer trailer={t} onPlay={pauseOthers} className="aspect-video" />
            <Caption trailer={t} index={TRAILER_SAMPLES.indexOf(t)} format="Landscape" />
          </Reveal>
        ))}
      </ul>

      {vertical.map((t) => (
        <Reveal key={t.id} className="mt-16 grid items-center gap-10 border-t border-border pt-16 md:grid-cols-12 md:gap-12">
          <div className="mx-auto w-full max-w-[22rem] md:col-span-5 md:max-w-none lg:col-span-4">
            <TrailerPlayer trailer={t} onPlay={pauseOthers} className="aspect-[9/16]" />
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <p className="eyebrow flex items-center gap-3 text-gold">
              <Smartphone className="h-4 w-4" aria-hidden="true" /> Vertical Format
            </p>
            <p className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">{t.title}</p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              An upright trailer made for phone screens — TikTok, Instagram Reels and Stories.
            </p>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span className="sr-only">Length </span>
              Trailer {String(TRAILER_SAMPLES.indexOf(t) + 1).padStart(2, "0")} · {t.duration}
            </p>
            <Link
              to="/contact"
              search={{ service: "book-trailer" }}
              className="mt-10 inline-flex items-center gap-3 border border-navy px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-navy transition-colors duration-300 hover:bg-navy hover:text-on-navy"
            >
              Enquire About a Book Trailer <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
