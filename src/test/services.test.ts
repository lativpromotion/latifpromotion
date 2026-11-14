import { describe, expect, it } from "vitest";
import { SERVICES, describePackage, getPackage, getService } from "@/lib/services";
import { enquirySchema } from "@/lib/enquiry-schema";

const prices = (slug: string) => {
  const s = getService(slug)!;
  return s.packages ? s.packages.map((p) => `${p.label}: ${p.price}`) : [s.price];
};

describe("service pricing", () => {
  it("has exactly eight services", () => {
    expect(SERVICES).toHaveLength(8);
  });
  it("TikTok / Instagram feature is a $20 registration fee", () => {
    const s = getService("tiktok-instagram-feature")!;
    expect(s.price).toBe("$20");
    expect(s.priceNote).toBe("registration fee");
  });
  it("book trailers are $95 / $145 / $350", () => {
    expect(prices("book-trailer")).toEqual([
      "15-second book trailer: $95",
      "45-second book trailer: $145",
      "2-minute book trailer: $350",
    ]);
  });
  it("book mockup is $75", () => expect(prices("book-mockup")).toEqual(["$75"]));
  it("social media management is $45 / $85 / $155", () => {
    expect(prices("social-media-management")).toEqual([
      "One-Week Management: $45",
      "Two-Week Management: $85",
      "One-Month Management: $155",
    ]);
  });
  it("one-week management includes 6 static posts and 4 reels", () => {
    expect(getPackage("social-media-management", "one-week")?.includes).toEqual([{ count: 6, item: "Static Posts" }, { count: 4, item: "Reels" }]);
  });
  it("two-week management includes 12 static posts and 8 reels", () => {
    expect(getPackage("social-media-management", "two-week")?.includes).toEqual([{ count: 12, item: "Static Posts" }, { count: 8, item: "Reels" }]);
  });
  it("one-month management includes 21 static posts and 9 reels", () => {
    expect(getPackage("social-media-management", "one-month")?.includes).toEqual([{ count: 21, item: "Static Posts" }, { count: 9, item: "Reels" }]);
  });
  it("a package link names the chosen package for the enquiry", () => {
    expect(describePackage(getPackage("social-media-management", "one-month")!)).toBe("One-Month Management ($155 — 21 Static Posts, 9 Reels)");
  });
  it("ignores a package that belongs to a different service", () => {
    expect(getPackage("book-trailer", "one-week")).toBeUndefined();
  });
  it("website design is $845", () => expect(prices("website-design")).toEqual(["$845"]));
  it("website redesign is $455", () => expect(prices("website-redesign")).toEqual(["$455"]));
  it("Goodreads Listopia is $95 / $145 / $357", () => {
    expect(prices("goodreads-listopia")).toEqual([
      "2 Listopia lists: $95",
      "5 Listopia lists: $145",
      "10 Listopia lists: $357",
    ]);
  });
  it("book challenge is $75", () => expect(prices("book-challenge")).toEqual(["$75"]));
});

describe("enquiry form", () => {
  it("rejects an unknown service", () => {
    const r = enquirySchema.safeParse({ fullName: "A", email: "a@b.co", service: "nope", message: "Hello there friend" });
    expect(r.success).toBe(false);
  });
  it("accepts a valid enquiry", () => {
    const r = enquirySchema.safeParse({ fullName: "Jane", email: "jane@example.com", service: "book-mockup", message: "I'd love a mockup for my novel." });
    expect(r.success).toBe(true);
  });
});

describe("contact details", () => {
  it("latif@fourthgroup.co is the primary email", async () => {
    const { BRAND } = await import("@/lib/services");
    expect(BRAND.email).toBe("latif@fourthgroup.co");
  });
  it("hello@fourthgroup.co is the general business email", async () => {
    const { BRAND } = await import("@/lib/services");
    expect(BRAND.generalEmail).toBe("hello@fourthgroup.co");
  });
});
