import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { enquirySchema } from "./enquiry-schema";
import { getService } from "./services";

/**
 * Inserts with the publishable key (insert-only RLS policy, no read access), so the form
 * works on any host — Lovable, Vercel or a custom domain — without private server keys.
 * Values fall back to the build-time VITE_* copies when the host has no runtime env vars.
 */
function publicClient() {
  const url = process.env["SUPABASE_URL"] || import.meta.env.VITE_SUPABASE_URL;
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"] || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Enquiry storage is not configured (missing Supabase URL or publishable key).");
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    // Opaque sb_ keys aren't JWTs; send only apikey, not the default Authorization bearer.
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled in: pretend success, store nothing.
    if (data.company) return { ok: true as const };

    const service = getService(data.service);
    try {
      const { error } = await publicClient().from("contact_submissions").insert({
        full_name: data.fullName,
        email: data.email,
        book_title: data.bookTitle || null,
        author_name: data.authorName || null,
        service: service?.title ?? data.service,
        message: data.message,
      });
      if (error) throw error;
    } catch (error) {
      console.error("Enquiry insert failed", error);
      return { ok: false as const, error: "We couldn't send your enquiry just now. Please try again or email latif@fourthgroup.co directly." };
    }
    return { ok: true as const };
  });
