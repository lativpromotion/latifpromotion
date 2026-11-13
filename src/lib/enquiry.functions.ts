import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "./enquiry-schema";
import { getService } from "./services";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled in: pretend success, store nothing.
    if (data.company) return { ok: true as const };

    const service = getService(data.service);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      full_name: data.fullName,
      email: data.email,
      book_title: data.bookTitle || null,
      author_name: data.authorName || null,
      service: service?.title ?? data.service,
      message: data.message,
    });

    if (error) {
      console.error("Enquiry insert failed", error);
      return { ok: false as const, error: "We couldn't send your enquiry just now. Please try again or email us directly." };
    }
    return { ok: true as const };
  });
