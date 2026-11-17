import { describe, expect, it } from "vitest";
import { BRAND } from "@/lib/services";
import { MOCKUP_SAMPLES, TRAILER_SAMPLES } from "@/lib/portfolio";

describe("brand title", () => {
  it("is Book Promotion Specialist, never Ebook", () => {
    expect(BRAND.title).toBe("Book Promotion Specialist | Author Outreach & Book Marketing");
    expect(BRAND.title.toLowerCase()).not.toContain("ebook");
  });
});

describe("media works on self-hosted domains", () => {
  it("no image or video points at Lovable-only asset URLs", () => {
    const urls = [...MOCKUP_SAMPLES.map((m) => m.img), ...TRAILER_SAMPLES.flatMap((t) => [t.src, t.poster])];
    expect(urls).toHaveLength(15);
    for (const u of urls) expect(u.startsWith("/__l5e/")).toBe(false);
  });
});
