import { usePageMeta } from "@/hooks/usePageMeta";

const services = [
  {
    title: "Workflow Design",
    points: [
      "Front-desk process mapping",
      "Escalation and routing logic",
      "Service-quality checkpoints",
    ],
  },
  {
    title: "Implementation",
    points: [
      "System setup and onboarding",
      "Integration with existing tools",
      "Go-live readiness planning",
    ],
  },
  {
    title: "Optimization",
    points: [
      "Conversion and response audits",
      "Performance reporting",
      "Continuous iteration sprints",
    ],
  },
];

const Services = () => {
  usePageMeta({
    title: "Zyvox Automations | Services",
    description: "Explore Zyvox Automations services across workflow design, implementation, and optimization for faster and more reliable customer operations.",
    path: "/services",
  });

  return (
    <section className="container py-10 sm:py-12 md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Services</p>
      <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">From strategy to daily execution</h1>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground sm:mt-5 sm:text-base">
        Our services are structured to help you move from operational friction to clear, repeatable systems that improve customer outcomes.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card p-4">
        <img src="/images/service-workflow.jpg" alt="Service workflow visualization" className="h-64 w-full rounded-xl object-cover md:h-80" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service, idx) => (
          <article key={service.title} className="interactive-card rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Step 0{idx + 1}</p>
            <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">{service.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-secondary p-6 md:p-8">
        <h2 className="text-2xl font-bold text-brand-navy">Delivery format</h2>
        <div className="mt-5 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
          <p className="rounded-xl bg-background p-4">Weekly implementation touchpoints</p>
          <p className="rounded-xl bg-background p-4">Clear ownership and milestones</p>
          <p className="rounded-xl bg-background p-4">Reporting dashboard with action items</p>
        </div>
        <div className="mt-5 overflow-hidden rounded-xl border border-border">
          <img src="/images/operations-dashboard.jpg" alt="Operations metrics dashboard" className="h-56 w-full object-cover md:h-64" />
        </div>
      </div>
    </section>
  );
};

export default Services;
