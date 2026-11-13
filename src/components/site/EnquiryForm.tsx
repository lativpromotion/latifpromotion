import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2 } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { BRAND, SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 rounded-none border-0 border-b border-input bg-transparent px-0 text-base shadow-none focus-visible:border-gold focus-visible:ring-0";

export function EnquiryForm({ initialService }: { initialService?: string | undefined }) {
  const send = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      bookTitle: "",
      authorName: "",
      service: (initialService ?? "") as EnquiryInput["service"],
      message: "",
      company: "",
    },
  });

  useEffect(() => {
    if (initialService) form.setValue("service", initialService as EnquiryInput["service"]);
  }, [initialService, form]);

  const onSubmit = form.handleSubmit(async (values) => {
    setServerError(null);
    try {
      const res = await send({ data: values });
      if (res.ok) {
        setStatus("sent");
        form.reset({ ...form.getValues(), message: "", bookTitle: "", authorName: "" });
      } else {
        setStatus("error");
        setServerError(res.error);
      }
    } catch {
      setStatus("error");
      setServerError("We couldn't send your enquiry just now. Please check your details and try again.");
    }
  });

  if (status === "sent") {
    return (
      <div className="flex min-h-[28rem] flex-col items-start justify-center border border-gold/60 bg-paper p-10 md:p-14" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-8 text-4xl text-navy">Thank you — your enquiry has been received.</h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Your message has been saved and will be reviewed personally. You can also reach LATIF directly at{" "}
          <a href={`mailto:${BRAND.email}`} className="text-navy underline decoration-gold underline-offset-4">{BRAND.email}</a>.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-navy underline decoration-gold underline-offset-8"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = form.formState.errors;

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-paper p-8 shadow-card md:p-12" aria-label="Author enquiry form">
      <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
        <Field label="Full Name" id="fullName" error={err.fullName?.message}>
          <Input id="fullName" autoComplete="name" className={fieldClass} {...form.register("fullName")} />
        </Field>
        <Field label="Email Address" id="email" error={err.email?.message}>
          <Input id="email" type="email" autoComplete="email" className={fieldClass} {...form.register("email")} />
        </Field>
        <Field label="Book Title" id="bookTitle" error={err.bookTitle?.message}>
          <Input id="bookTitle" className={fieldClass} {...form.register("bookTitle")} />
        </Field>
        <Field label="Author Name" id="authorName" error={err.authorName?.message}>
          <Input id="authorName" className={fieldClass} {...form.register("authorName")} />
        </Field>
        <Field label="Service Interested In" id="service" error={err.service?.message} className="md:col-span-2">
          <Controller
            control={form.control}
            name="service"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger id="service" className={cn(fieldClass, "w-full justify-between")}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.number} — {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field label="Message" id="message" error={err.message?.message} className="md:col-span-2">
          <Textarea
            id="message"
            rows={5}
            className="min-h-32 rounded-none border-0 border-b border-input bg-transparent px-0 text-base shadow-none focus-visible:border-gold focus-visible:ring-0"
            placeholder="Tell me about your book, its genre and what you'd like to achieve."
            {...form.register("message")}
          />
        </Field>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" tabIndex={-1} autoComplete="off" {...form.register("company")} />
        </div>
      </div>

      {status === "error" && serverError && (
        <p className="mt-8 border-l-2 border-destructive pl-4 text-sm text-destructive" role="alert">{serverError}</p>
      )}

      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Prefer email? Write to <a href={`mailto:${BRAND.email}`} className="text-navy underline decoration-gold underline-offset-4">{BRAND.email}</a>
        </p>
        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="inline-flex items-center justify-center gap-3 bg-navy px-10 py-4 text-xs font-medium uppercase tracking-[0.22em] text-on-navy transition-colors duration-300 hover:bg-gold hover:text-navy disabled:opacity-60"
        >
          {form.formState.isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          Send Enquiry
        </button>
      </div>
    </form>
  );
}

function Field({ label, id, error, className, children }: { label: string; id: string; error?: string | undefined; className?: string | undefined; children: ReactNode }) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="eyebrow text-[0.65rem] text-muted-foreground">{label}</Label>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
