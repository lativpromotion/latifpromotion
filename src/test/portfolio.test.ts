import { describe, expect, it } from "vitest";
import { TRAILER_SAMPLES } from "@/lib/portfolio";

describe("book trailer showcase", () => {
  it("shows all five uploaded trailers, each in its own player", () => {
    expect(TRAILER_SAMPLES).toHaveLength(5);
    expect(new Set(TRAILER_SAMPLES.map((t) => t.src)).size).toBe(5);
  });
});
