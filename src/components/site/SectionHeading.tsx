import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light", className, as = "h2" }: Props) {
  const Heading = as;
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-4 text-gold", align === "center" && "justify-center")}>
        <span className="gold-rule w-8" aria-hidden="true" />
        {eyebrow}
      </p>
      <Heading
        className={cn(
          "mt-5 text-4xl leading-[1.05] md:text-5xl lg:text-6xl",
          tone === "dark" ? "text-on-navy" : "text-navy",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p className={cn("mt-6 text-lg leading-relaxed", tone === "dark" ? "text-on-navy-muted" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
