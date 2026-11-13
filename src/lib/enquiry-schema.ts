import { z } from "zod";
import { SERVICE_SLUGS } from "./services";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name").max(120, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  bookTitle: z.string().trim().max(200, "Book title is too long").optional().or(z.literal("")),
  authorName: z.string().trim().max(120, "Author name is too long").optional().or(z.literal("")),
  service: z.enum(SERVICE_SLUGS, { errorMap: () => ({ message: "Please choose a service" }) }),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more about your book (10+ characters)")
    .max(3000, "Message is too long (3000 characters max)"),
  /** Honeypot: real visitors never fill this in. */
  company: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
