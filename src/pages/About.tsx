import { usePageMeta } from "@/hooks/usePageMeta";

const About = () => {
  usePageMeta({
    title: "Zyvox Automations | About",
    description: "Learn about Zyvox Automations methodology, mission, and principles for building scalable communication operations.",
    path: "/about",
  });

  return (
    <section className="container py-10 sm:py-12 md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">About</p>
      <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">Built for operational excellence</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <img src="/images/about-vision.jpg" alt="Leadership vision meeting" className="h-64 w-full rounded-2xl border border-border object-cover md:h-80" />
        <img src="/images/team-consultation.jpg" alt="Team consultation" className="h-64 w-full rounded-2xl border border-border object-cover md:h-80" />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <article className="interactive-card rounded-2xl border border-border bg-card p-6 sm:p-7">
          <h2 className="text-xl font-semibold">Our mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Help growth-focused organizations run communication and workflow operations with confidence, consistency, and measurable quality.
          </p>
        </article>

        <article className="interactive-card rounded-2xl border border-border bg-card p-6 sm:p-7">
          <h2 className="text-xl font-semibold">How we work</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We combine strategy, implementation, and optimization under one delivery model so execution remains clear from day one.
          </p>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-secondary p-7">
        <h2 className="text-xl font-semibold">Core principles</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Precision over complexity</li>
          <li>Professional user experience first</li>
          <li>Transparent reporting and outcomes</li>
          <li>Scalable systems for long-term growth</li>
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Methodology</p>
        <h2 className="mt-2 text-2xl font-bold text-brand-navy">Our engagement structure</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-secondary p-4">
            <p className="font-semibold">Phase 1: Discovery</p>
            <p className="mt-2 text-sm text-muted-foreground">Audit workflows, identify gaps, align leadership priorities.</p>
          </div>
          <div className="rounded-xl bg-secondary p-4">
            <p className="font-semibold">Phase 2: Implementation</p>
            <p className="mt-2 text-sm text-muted-foreground">Deploy process improvements with clear owners and milestones.</p>
          </div>
          <div className="rounded-xl bg-secondary p-4">
            <p className="font-semibold">Phase 3: Optimization</p>
            <p className="mt-2 text-sm text-muted-foreground">Measure performance, refine operations, and scale sustainably.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
