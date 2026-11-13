import { createFileRoute } from "@tanstack/react-router";
import { Commitment, ContactBand, ProcessTimeline } from "@/components/site/sections";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: pageMeta(
      "Our Process — How LATIF Works With Authors",
      "Discovery, strategy, preparation and delivery: a clear four-step process for every book promotion project.",
    ),
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <ProcessTimeline headingAs="h1" />
      <Commitment />
      <ContactBand />
    </>
  );
}
