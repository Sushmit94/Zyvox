import { ArrowRight, CheckCircle2, ShieldCheck, Timer, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

const cards = [
  {
    icon: ShieldCheck,
    title: "Reliable Operations",
    desc: "Structured workflows that keep every customer inquiry organized and actionable.",
  },
  {
    icon: Timer,
    title: "Faster Response",
    desc: "Reduce delays and improve first-response quality across all channels.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Growth",
    desc: "Performance reporting and optimization aligned to business outcomes.",
  },
];

const metrics = [
  { label: "Average response speed", value: "< 5 min" },
  { label: "Workflow consistency", value: "98%" },
  { label: "Implementation window", value: "2-4 weeks" },
  { label: "Client support", value: "Ongoing" },
];

const testimonials = [
  {
    image: "/images/testimonial-client-1.jpg",
    quote: "Their delivery model gave us immediate structure and confidence.",
  },
  {
    image: "/images/testimonial-client-2.jpg",
    quote: "Our inquiry handling quality improved in the first month.",
  },
  {
    image: "/images/testimonial-client-3.jpg",
    quote: "Professional, pragmatic, and focused on measurable outcomes.",
  },
];

const Home = () => {
  usePageMeta({
    title: "Zyvox Automations | Home",
    description: "Zyvox Automations helps service businesses improve communication operations, response quality, and customer conversion with practical workflow systems.",
    path: "/",
  });

  return (
    <div className="bg-brand-surface">
      <section className="container grid items-center gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-2 md:py-20">
        <div className="animate-rise">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Business Workflow Consultancy</p>
          <h1 className="text-3xl font-bold leading-tight text-brand-navy sm:text-4xl md:text-6xl">
            Design a front-desk operation your customers can trust
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
            Zyvox Automations helps service businesses modernize communication, streamline daily operations, and deliver a premium customer experience at scale.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-pop inline-flex items-center justify-center rounded-lg bg-brand-navy px-6 py-3 text-sm font-semibold text-primary-foreground">
              Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="animate-rise">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl sm:p-4">
            <img
              src="/images/hero-main.jpg"
              alt="Premium clinic reception"
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[380px] md:h-[420px]"
            />
            <div className="absolute bottom-4 left-4 max-w-[14rem] rounded-xl bg-background/90 p-3 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:max-w-xs sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Execution Blueprint</p>
              <p className="mt-1 text-sm text-muted-foreground">Discovery, implementation, and optimization in one operating model.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-10 sm:pb-12 md:pb-16">
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-xl font-bold text-brand-navy sm:text-2xl">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-6 pb-14 md:grid-cols-2 md:pb-20">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src="/images/operations-dashboard.jpg" alt="Operations dashboard" className="h-72 w-full object-cover md:h-full" />
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src="/images/team-consultation.jpg" alt="Team consultation" className="h-72 w-full object-cover md:h-full" />
        </div>
      </section>

      <section className="container pb-12 sm:pb-14 md:pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="interactive-card rounded-2xl border border-border bg-card p-5 sm:p-6">
              <card.icon className="h-8 w-8 text-brand-navy" />
              <h3 className="mt-4 text-xl font-semibold sm:text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-gold">
                <CheckCircle2 className="h-4 w-4" />
                Implementation-ready
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="container pb-14 sm:pb-16 md:pb-24">
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Client Confidence</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">Trusted by growth-focused leadership teams</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <article key={item.quote} className={`interactive-card rounded-xl bg-secondary p-4 ${index === 1 ? "animate-float-soft" : ""}`}>
                <img src={item.image} alt="Client portrait" className="h-28 w-28 rounded-xl object-cover" />
                <p className="mt-4 text-sm text-muted-foreground">"{item.quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
