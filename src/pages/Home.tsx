import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, Shield, Cpu, Zap, BadgeCheck, Phone, MessageSquare, Truck, Database, Link2, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

/* ─────────────────────────────────────────────
   Reveal-on-scroll wrapper (framer-motion)
   ───────────────────────────────────────────── */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Section I: Architectural Hero
   ───────────────────────────────────────────── */
const HeroSection = () => (
  <section className="relative overflow-hidden bg-white">
    {/* Subtle radial accents */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/[0.07] to-transparent blur-3xl" />
      <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#001F3F]/[0.04] to-transparent blur-3xl" />
    </div>

    <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 md:py-28 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <div>
          <Reveal>
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              The New Standard in Enterprise Infrastructure
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl font-bold leading-[1.08] text-[#001F3F] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
              Automation for the next generation of{" "}
              <span className="relative inline-block">
                industry leaders
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30" />
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#001F3F]/60 sm:text-lg">
              We build the AI-powered infrastructure that scales mid-market
              enterprises across India and Australia.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="btn-primary-gold inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-sans text-sm font-semibold"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#001F3F]/10 bg-white px-8 py-4 font-sans text-sm font-semibold text-[#001F3F] transition-all hover:border-[#D4AF37]/30 hover:shadow-diffused"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right — Hero image with gold overlay */}
        <Reveal delay={0.15} direction="right">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-diffused-lg">
              <img
                src="/images/hero-main.jpg"
                alt="Modern enterprise office"
                className="h-[380px] w-full object-cover sm:h-[440px] md:h-[500px]"
              />
              {/* Gold gradient overlays on edges */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#D4AF37]/[0.08] via-transparent to-[#D4AF37]/[0.05]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>

            {/* Floating glass card */}
            <div className="absolute -bottom-5 -left-4 z-10 max-w-[16rem] rounded-2xl border border-white/40 bg-white/80 p-5 shadow-diffused backdrop-blur-xl sm:-left-6 sm:max-w-xs">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                  <Zap className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  Live Infrastructure
                </p>
              </div>
              <p className="mt-2 text-sm leading-snug text-[#001F3F]/60">
                AI agents processing{" "}
                <span className="font-semibold text-[#001F3F]">10,000+</span>{" "}
                workflows monthly.
              </p>
            </div>

            {/* Decorative gold ring */}
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border-2 border-[#D4AF37]/20 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Section II: Moving Marquee — Tech Stack
   ───────────────────────────────────────────── */
const techLogos = [
  { name: "n8n", icon: "⚡" },
  { name: "Retell AI", icon: "🎙️" },
  { name: "OpenAI", icon: "🧠" },
  { name: "Anthropic", icon: "🔬" },
  { name: "Plivo", icon: "📞" },
];

const TechMarquee = () => (
  <section className="relative border-y border-[#001F3F]/5 bg-[#F9FAFB] py-10 sm:py-14">
    <Reveal>
      <p className="mb-8 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#001F3F]/30">
        Powered by world-class infrastructure
      </p>
    </Reveal>

    <div className="relative overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#F9FAFB] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F9FAFB] to-transparent sm:w-40" />

      <div className="marquee-track">
        {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="logo-grey mx-6 flex flex-shrink-0 cursor-default items-center gap-3 rounded-2xl border border-[#001F3F]/5 bg-white px-8 py-4 shadow-sm transition-all hover:border-[#D4AF37]/20 hover:shadow-gold-glow-sm sm:mx-8 sm:px-10 sm:py-5"
          >
            <span className="text-2xl">{logo.icon}</span>
            <span className="font-sans text-base font-semibold text-[#001F3F] sm:text-lg">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Section III: The Three Pillars (Vault Cards)
   ───────────────────────────────────────────── */
const pillars = [
  {
    icon: Phone,
    secondaryIcon: MessageSquare,
    title: "AI Customer Communication",
    desc: "Voice AI agents and intelligent SMS workflows that handle inbound and outbound customer interactions with human-level nuance.",
    features: ["Voice AI Agents", "SMS Automation", "Call Routing", "Sentiment Analysis"],
    specs: [
      { label: "Latency", value: "<200ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "Languages", value: "12+" },
    ],
  },
  {
    icon: Truck,
    secondaryIcon: Database,
    title: "Intelligent Logistics",
    desc: "Resource-to-job matching and real-time dispatch engines that optimize field operations and reduce idle time.",
    features: ["Smart Matching", "Live Dispatch", "Route Optimization", "Resource Tracking"],
    specs: [
      { label: "Match Speed", value: "<3s" },
      { label: "Accuracy", value: "97.8%" },
      { label: "Throughput", value: "50K/day" },
    ],
  },
  {
    icon: Link2,
    secondaryIcon: Settings,
    title: "Operational Sync",
    desc: "Deep integrations between CRM, back-office, and field systems that eliminate data silos and manual reconciliation.",
    features: ["CRM Sync", "ERP Bridge", "Data Pipeline", "Audit Trail"],
    specs: [
      { label: "Sync Freq", value: "Real-time" },
      { label: "Integrations", value: "40+" },
      { label: "Data Loss", value: "0%" },
    ],
  },
];

const PillarsSection = () => (
  <section className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Core Capabilities
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#001F3F] sm:text-4xl md:text-5xl">
            Three pillars of operational excellence
          </h2>
          <p className="mt-4 text-base text-[#001F3F]/50 sm:text-lg">
            Enterprise-grade systems engineered for reliability, speed, and scale.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        {pillars.map((pillar, idx) => (
          <Reveal key={pillar.title} delay={idx * 0.12}>
            <article className="vault-card group flex h-full flex-col rounded-3xl border border-[#001F3F]/[0.06] bg-white p-7 shadow-diffused sm:p-8">
              {/* Icon cluster */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001F3F] shadow-lg">
                  <pillar.icon className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                  <pillar.secondaryIcon className="h-4 w-4 text-[#D4AF37]" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#001F3F]">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#001F3F]/50">
                {pillar.desc}
              </p>

              {/* Feature tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-[#001F3F]/[0.06] bg-[#F9FAFB] px-3 py-1 font-sans text-[11px] font-medium text-[#001F3F]/60"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech Specs — monospace */}
              <div className="mt-6 border-t border-dashed border-[#001F3F]/[0.08] pt-5">
                <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Tech Specs
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {pillar.specs.map((spec) => (
                    <div key={spec.label}>
                      <p className="font-mono text-lg font-bold text-[#001F3F]">
                        {spec.value}
                      </p>
                      <p className="font-mono text-[10px] text-[#001F3F]/35">
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Section IV: Executive Trust — Bento Grid
   ───────────────────────────────────────────── */
const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "COO, TechVista Solutions",
    quote:
      "Zyvox transformed our customer communication pipeline. Response times dropped by 70% and our team finally has bandwidth to focus on strategic work.",
    image: "/images/testimonial-client-1.jpg",
    featured: true,
  },
  {
    name: "Sarah Chen",
    role: "VP Operations, MedBridge Health",
    quote:
      "Their dispatch system reduced our field team idle time by 40%. The ROI was visible within the first quarter.",
    image: "/images/testimonial-client-2.jpg",
    featured: false,
  },
  {
    name: "David Armstrong",
    role: "Managing Director, Pacific Logistics",
    quote:
      "Professional, pragmatic, and focused on measurable outcomes. The integration work alone saved us 200+ hours monthly.",
    image: "/images/testimonial-client-3.jpg",
    featured: false,
  },
];

const TestimonialsSection = () => (
  <section className="bg-[#F9FAFB] py-24 sm:py-32">
    <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Executive Trust
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#001F3F] sm:text-4xl md:text-5xl">
            Trusted by growth-focused leadership teams
          </h2>
        </div>
      </Reveal>

      {/* Bento Grid */}
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Featured large card */}
        <Reveal delay={0.05} className="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="bento-item group flex h-full flex-col rounded-3xl border border-[#001F3F]/[0.06] bg-white p-6 shadow-diffused sm:p-8">
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
              />
              {/* Verified badge */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                <BadgeCheck className="h-4 w-4 text-[#D4AF37]" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Verified Executive
                </span>
              </div>
            </div>
            <blockquote className="flex-1 font-serif text-lg leading-relaxed text-[#001F3F] sm:text-xl">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="mt-6 border-t border-[#001F3F]/[0.06] pt-5">
              <p className="font-sans text-sm font-bold text-[#001F3F]">
                {testimonials[0].name}
              </p>
              <p className="font-sans text-xs text-[#001F3F]/40">
                {testimonials[0].role}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Smaller bento cards */}
        {testimonials.slice(1).map((t, idx) => (
          <Reveal key={t.name} delay={0.12 + idx * 0.1}>
            <div className="bento-item group flex flex-col rounded-3xl border border-[#001F3F]/[0.06] bg-white p-6 shadow-diffused sm:p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-[#001F3F]">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-[#001F3F]/40">
                    {t.role}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1 rounded-full bg-[#D4AF37]/10 px-2.5 py-1">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Verified
                  </span>
                </div>
              </div>
              <blockquote className="font-serif text-base leading-relaxed text-[#001F3F]/80 sm:text-lg">
                "{t.quote}"
              </blockquote>
            </div>
          </Reveal>
        ))}

        {/* Stats bento card */}
        <Reveal delay={0.35}>
          <div className="bento-item flex flex-col justify-center rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-br from-[#001F3F] to-[#001F3F]/90 p-6 text-white shadow-diffused-lg sm:p-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Collective Impact
            </p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              {[
                { value: "70%", label: "Faster Response" },
                { value: "40%", label: "Less Idle Time" },
                { value: "200+", label: "Hours Saved/Mo" },
                { value: "99.9%", label: "System Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-2xl font-bold text-[#D4AF37] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   CTA Section
   ───────────────────────────────────────────── */
const CTASection = () => (
  <section className="relative overflow-hidden bg-white py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </div>
    <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#001F3F]">
            <Shield className="h-6 w-6 text-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#001F3F] sm:text-4xl md:text-5xl">
            Ready to build infrastructure that scales?
          </h2>
          <p className="mt-5 text-base text-[#001F3F]/50 sm:text-lg">
            Join the enterprises across India and Australia already running on
            Zyvox-powered automation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="btn-primary-gold inline-flex items-center gap-2 rounded-xl px-10 py-4 font-sans text-sm font-semibold"
            >
              Start Your Transformation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="font-mono text-[11px] text-[#001F3F]/30">
              No commitment required
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Home Page Assembly
   ───────────────────────────────────────────── */
const Home = () => {
  usePageMeta({
    title: "Zyvox Automations | AI-Powered Enterprise Infrastructure",
    description:
      "Zyvox Automations builds AI-powered infrastructure that scales mid-market enterprises across India and Australia. Voice AI, intelligent logistics, and operational sync.",
    path: "/",
  });

  return (
    <div className="bg-white">
      <HeroSection />
      <TechMarquee />
      <PillarsSection />
      <div className="gold-divider mx-auto max-w-[800px]" />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
