import { FormEvent, useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialPayload: ContactPayload = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const Contact = () => {
  usePageMeta({
    title: "Zyvox Automations | Contact",
    description: "Contact Zyvox Automations to discuss your current workflow challenges and receive a tailored implementation roadmap.",
    path: "/contact",
  });

  const [payload, setPayload] = useState<ContactPayload>(initialPayload);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/.netlify/functions/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("submission failed");
      }

      setPayload(initialPayload);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container py-10 sm:py-12 md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Contact</p>
      <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">Let us design your next growth system</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
        Share your current process, and we will propose a practical roadmap tailored to your business goals.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <aside className="interactive-card rounded-2xl border border-border bg-card p-5 sm:p-6 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Direct contacts</p>
          <img src="/images/contact-cta.jpg" alt="Consultation setup" className="mt-4 h-44 w-full rounded-xl object-cover" />
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <a href="mailto:hello@zyvoxautomations.com" className="block rounded-lg bg-secondary px-4 py-3 hover:text-foreground">
              Email: hello@zyvoxautomations.com
            </a>
            <a href="https://www.linkedin.com/company/zyvox-ai/" target="_blank" rel="noreferrer" className="block rounded-lg bg-secondary px-4 py-3 hover:text-foreground">
              LinkedIn: zyvox-ai
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Typical response time is within one business day.
          </p>
        </aside>

        <div className="interactive-card relative overflow-hidden rounded-2xl border border-border bg-card lg:col-span-3">
          <img src="/images/pricing-background.jpg" alt="Background texture" className="absolute inset-0 h-full w-full object-cover opacity-18" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-white/92 to-white/86" />

          <form onSubmit={submit} className="relative z-10 grid gap-4 p-5 sm:p-6 md:grid-cols-2 md:p-8">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Inquiry Form</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy">Tell us about your requirements</h2>
              <p className="mt-2 text-sm text-muted-foreground">Share a few details and our team will return with a practical roadmap.</p>
            </div>

            <input
              required
              value={payload.name}
              onChange={(event) => setPayload((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Full name"
              className="h-11 rounded-lg border border-input bg-background/95 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              required
              value={payload.email}
              onChange={(event) => setPayload((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="Work email"
              className="h-11 rounded-lg border border-input bg-background/95 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              required
              value={payload.company}
              onChange={(event) => setPayload((prev) => ({ ...prev, company: event.target.value }))}
              placeholder="Company name"
              className="h-11 rounded-lg border border-input bg-background/95 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              value={payload.phone}
              onChange={(event) => setPayload((prev) => ({ ...prev, phone: event.target.value }))}
              placeholder="Phone"
              className="h-11 rounded-lg border border-input bg-background/95 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              value={payload.message}
              onChange={(event) => setPayload((prev) => ({ ...prev, message: event.target.value }))}
              placeholder="Tell us about your project and current challenges"
              className="min-h-32 rounded-lg border border-input bg-background/95 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring md:col-span-2"
            />
            <button
              disabled={submitting}
              type="submit"
              className="btn-pop rounded-lg bg-brand-navy px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-70 md:col-span-2"
            >
              {submitting ? "Submitting..." : "Send Inquiry"}
            </button>

            {status === "success" && <p className="text-sm text-brand-navy md:col-span-2">Thanks, your inquiry has been submitted.</p>}
            {status === "error" && <p className="text-sm text-destructive md:col-span-2">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
