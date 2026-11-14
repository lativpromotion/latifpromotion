import portrait from "@/assets/latif-portrait.webp.asset.json";
import { cn } from "@/lib/utils";

/** LATIF's real uploaded portrait — layout and frame only, the photo itself is never altered. */
export function LatifPortrait({ frameSide = "right", eager = false, className }: { frameSide?: "left" | "right"; eager?: boolean; className?: string }) {
  return (
    <figure className={cn("relative mx-auto w-full max-w-md lg:max-w-none", className)}>
      <div className="relative">
        <span
          className={cn("absolute -bottom-5 -z-10 hidden h-full w-full border border-gold md:block", frameSide === "right" ? "-right-5" : "-left-5")}
          aria-hidden="true"
        />
        <div className="relative bg-paper p-2 shadow-card">
          <img
            src={portrait.url}
            alt="Portrait of LATIF, Ebook Promotion Specialist"
            width={1200}
            height={1200}
            loading={eager ? "eager" : "lazy"}
            className="aspect-[4/5] w-full object-cover object-[50%_30%]"
          />
        </div>
      </div>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="h-px w-10 bg-gold" aria-hidden="true" />
        <span className="wordmark text-lg text-navy">LATIF</span>
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Ebook Promotion Specialist</span>
      </figcaption>
    </figure>
  );
}
