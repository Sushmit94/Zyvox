import { usePageMeta } from "@/hooks/usePageMeta";

const focusAreas = [
  { id: "1", title: "Direct B2B Projects", subtitle: "Business AI implementation" },
  { id: "2", title: "Agency Partnerships", subtitle: "Collaborative solutions" },
  { id: "3", title: "AI Education", subtitle: "Training & workshops" },
  { id: "4", title: "AI Consulting", subtitle: "Strategic advisory" },
];

const founderPlaceholders = [
  { id: "01", title: "Founder 1" },
  { id: "02", title: "Founder 2" },
  { id: "03", title: "Founder 3" },
];

const About = () => {
  usePageMeta({
    title: "Zyvox Automations | About",
    description: "Learn about Zyvox Automations methodology, mission, and principles for building scalable communication operations.",
    path: "/about",
  });

  return (
    <section className="container py-10 sm:py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl font-bold text-violet-700 sm:text-4xl">About Us</h1>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-violet-500" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <div className="border-l-4 border-violet-500 pl-4">
              <p>
                At Automatez AI, we blend <span className="font-semibold text-violet-600">artificial and human intelligence</span> to empower businesses with systems that cut through inefficiencies and unlock scale. We have{" "}
                <span className="font-semibold text-violet-600">partnered with established companies</span> to reduce manual work, automate decision-making, and move faster without the overhead of building in-house.
              </p>
            </div>
            <div className="border-l-4 border-violet-500 pl-4">
              <p>
                Our core work falls into four areas: delivering custom AI systems through <span className="font-semibold text-violet-600">direct B2B projects</span>, <span className="font-semibold text-violet-600">collaborating with other agencies</span> as a technical partner, providing hands-on{" "}
                <span className="font-semibold text-violet-600">AI education</span> through training and workshops, and offering strategic consulting to guide AI adoption. Each solution is tailored, each result measurable.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.id} className="rounded-xl border border-border bg-card p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-violet-100 text-base font-bold text-violet-700">
                  {area.id}
                </div>
                <h2 className="text-xl font-semibold text-foreground">{area.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{area.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-violet-700 sm:text-3xl">Founders</h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Placeholder section. Add founder names, roles, bios, and profile links below.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {founderPlaceholders.map((founder) => (
            <article key={founder.id} className="rounded-xl border border-dashed border-violet-300 bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-600">{founder.id}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{founder.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">Name: [Add founder name]</p>
              <p className="mt-1 text-sm text-muted-foreground">Role: [Add founder role]</p>
              <p className="mt-1 text-sm text-muted-foreground">Bio: [Add short founder bio]</p>
              <p className="mt-1 text-sm text-muted-foreground">LinkedIn: [Add profile URL]</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
