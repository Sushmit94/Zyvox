import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featured = {
  quote:
    "Zyvox didn't sell us software. They rebuilt how our intake function thinks. Every call, every missed inquiry, every follow-up now lives inside a rhythm we can actually measure — and that has changed the economics of our front desk.",
  name: "Priya Menon",
  role: "Director of Operations",
  company: "Saanvi Dental Group",
  location: "Toronto, Canada",
  image: "/images/testimonial-client-1.jpg",
};

type Voice = {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  initials: string;
  image?: string;
  accent?: "navy" | "gold";
};

const voices: Voice[] = [
  {
    quote:
      "We had run three vendors through this problem before Zyvox. None of them owned the result. Zyvox runs the operation, not just the tooling — and that's the difference we paid for.",
    name: "James Whitford",
    role: "Chief Operating Officer",
    company: "Northshore Home Services",
    location: "New York, USA",
    initials: "JW",
    image: "/images/testimonial-client-2.jpg",
    accent: "gold",
  },
  {
    quote:
      "Their dispatch logic is the cleanest implementation I've reviewed in this industry. It respects how our crews actually work in the field, instead of forcing them into a shape the software prefers.",
    name: "Aarav Khurana",
    role: "Head of Field Operations",
    company: "Meridian Facility Partners",
    location: "London, United Kingdom",
    initials: "AK",
    accent: "navy",
  },
  {
    quote:
      "The thing I keep returning to is how unflashy their work is. There is no theatre. The voice agent answers the phone, the CRM updates itself, the team trusts the numbers. That is rare.",
    name: "Hannah Lindqvist",
    role: "Customer Experience Lead",
    company: "Brightline Dental Collective",
    location: "Stockholm, Sweden",
    initials: "HL",
    image: "/images/testimonial-client-3.jpg",
    accent: "gold",
  },
  {
    quote:
      "We expected an automation vendor. We got an operating partner. They sat in our weekly review for the first six weeks, and the system they built reflects that depth.",
    name: "Rohan Mehta",
    role: "VP of Operations",
    company: "Halevy Multi-Site Group",
    location: "Singapore",
    initials: "RM",
    accent: "navy",
  },
  {
    quote:
      "Implementation was deliberate, almost slow at first — and then everything compounded. Three months in, after-hours inquiries stopped leaking and our schedule finally felt full instead of busy.",
    name: "Eleanor Whitcombe",
    role: "Practice Director",
    company: "Cohen & Whitcombe Advisory",
    location: "Dublin, Ireland",
    initials: "EW",
    accent: "gold",
  },
];

const metrics = [
  { value: "82%", label: "After-hours inquiries captured into the booking flow" },
  { value: "3.4×", label: "Faster first-response on inbound patient and customer messages" },
  { value: "97%", label: "Customer satisfaction sustained across automated touchpoints" },
];

const Testimonials = () => {
  usePageMeta({
    title: "Zyvox Automations | Client Voices",
    description:
      "Operators around the world describe how Zyvox Automations rebuilt their intake, dispatch, and customer communication operations.",
    path: "/testimonials",
  });

  const header = useScrollAnimation();
  const featuredAnim = useScrollAnimation();
  const metricsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-brand-surface">
        <div
          className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-navy/10 blur-3xl"
          aria-hidden="true"
        />

        <div
          ref={header.ref}
          className={`container relative z-10 max-w-5xl py-16 sm:py-20 md:py-28 scroll-fade-in ${
            header.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Client Voices
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-brand-navy sm:text-5xl md:text-6xl">
              Operators talk about the work,{" "}
              <span className="italic text-brand-gold">not the technology.</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The strongest endorsement of an automation partner is rarely about features. It is about
              what stopped breaking, what stopped costing time, and what finally became measurable.
              These are conversations from operators across global markets who have lived inside
              the systems we build.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-14 sm:py-16 md:py-20">
        <article
          ref={featuredAnim.ref}
          className={`relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-50px_hsl(var(--brand-navy)/0.55)] scroll-fade-in ${
            featuredAnim.isVisible ? "visible" : ""
          }`}
        >
          <div className="grid gap-0 md:grid-cols-[1.35fr_1fr]">
            <div className="relative p-8 sm:p-12 md:p-14">
              <Quote
                aria-hidden="true"
                className="absolute -top-2 -left-1 h-20 w-20 text-brand-gold/30 sm:h-28 sm:w-28"
              />
              <p className="relative font-serif text-2xl leading-[1.35] text-brand-navy sm:text-3xl md:text-[2.05rem]">
                &ldquo;{featured.quote}&rdquo;
              </p>

              <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-foreground">{featured.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {featured.role} &middot; {featured.company}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                    {featured.location}
                  </p>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent sm:block" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Featured engagement
                </span>
              </div>
            </div>

            <div className="relative hidden md:block">
              <img
                src={featured.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-navy/10 to-card" />
            </div>
          </div>
        </article>
      </section>

      <section className="container pb-14 sm:pb-16 md:pb-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
              The room of voices
            </p>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
              Five operators. Five operations. One throughline.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {voices.map((voice, index) => (
            <VoiceCard key={voice.name} voice={voice} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div
          ref={metricsAnim.ref}
          className={`container max-w-6xl scroll-fade-in ${metricsAnim.isVisible ? "visible" : ""}`}
        >
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                What the words point to
              </p>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
                Numbers behind the conversations.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Aggregated across pilot deployments and active engagements. Specific operational
                figures available under NDA on request.
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="hover-lift rounded-2xl border border-border bg-background p-6"
                >
                  <dt className="font-serif text-4xl font-bold text-brand-navy sm:text-5xl">
                    {metric.value}
                  </dt>
                  <dd className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div
          ref={ctaAnim.ref}
          className={`relative overflow-hidden rounded-3xl bg-brand-navy p-10 text-primary-foreground sm:p-14 scroll-fade-in ${
            ctaAnim.isVisible ? "visible" : ""
          }`}
        >
          <div
            className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-brand-gold/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Talk to an operator
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                If any of this sounds like the operation you are running, we should have a
                conversation.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                Thirty minutes is enough to understand whether your communication infrastructure is
                ready for an upgrade — or whether something earlier in your process needs attention
                first. We will tell you either way.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:ml-auto md:flex-col md:items-stretch md:w-64">
              <Link
                to="/contact"
                className="btn-pop inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-lg"
              >
                Book a strategy call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:border-brand-gold hover:text-brand-gold"
              >
                Review our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const VoiceCard = ({ voice, index }: { voice: Voice; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const accent = voice.accent ?? (index % 2 === 0 ? "navy" : "gold");
  const accentClass =
    accent === "gold"
      ? "before:bg-brand-gold"
      : "before:bg-brand-navy";

  return (
    <article
      ref={ref}
      className={`interactive-card relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 before:absolute before:left-0 before:top-0 before:h-1 before:w-full ${accentClass} scroll-fade-in ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <Quote
        aria-hidden="true"
        className={`mb-5 h-7 w-7 ${accent === "gold" ? "text-brand-gold" : "text-brand-navy"}`}
      />

      <p className="font-serif text-lg leading-relaxed text-foreground sm:text-[1.18rem]">
        &ldquo;{voice.quote}&rdquo;
      </p>

      <div className="mt-auto pt-7">
        <div className="flex items-center gap-4">
          {voice.image ? (
            <img
              src={voice.image}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 rounded-full border border-border object-cover"
            />
          ) : (
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full font-serif text-base font-bold ${
                accent === "gold"
                  ? "bg-brand-gold/15 text-brand-gold"
                  : "bg-brand-navy/10 text-brand-navy"
              }`}
            >
              {voice.initials}
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{voice.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {voice.role} &middot; {voice.company}
            </p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
              {voice.location}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Testimonials;
