import { usePageMeta } from "@/hooks/usePageMeta";

const testimonials = [
  {
    name: "Andrew Parker",
    role: "Product Manager",
    initials: "AP",
    quote:
      "I've worked with many people, but Yashica stands out. Her approach is clear, precise, and always focused on delivering real value.",
  },
  {
    name: "Alfa Peterson",
    role: "Operations Lead",
    initials: "AP",
    quote:
      "The process was very hands-off, yet the impact was huge. Yashica and her team didn't just automate, we saw growth.",
  },
  {
    name: "Marco Alvarez",
    role: "CTO",
    initials: "MA",
    quote:
      "Yashica brought an energy and insight that we needed. The automation implementation was seamless, and the results were immediate. A fantastic experience, highly recommended!!",
  },
  {
    name: "Terell Harris",
    role: "Head of Operations",
    initials: "TH",
    quote:
      "The team is exceptional. They really took the time to understand our needs and delivered a system that just works, no hassle.",
  },
  {
    name: "Juho Virtanen",
    role: "CEO",
    initials: "JV",
    quote:
      "Yashica's dedication and expertise are unmatched. She made complex AI solutions easy to understand and implement. A true professional with a hands-on approach.",
  },
  {
    name: "Kyle Thompson",
    role: "Marketing Director",
    initials: "KT",
    quote:
      "Yashica and her team worked seamlessly together. They not only automated our operations but also provided constant support and clarity throughout the journey.",
  },
];

const Testimonials = () => {
  usePageMeta({
    title: "Zyvox Automations | Testimonials",
    description: "Read client testimonials about Zyvox Automations delivery quality and operational impact.",
    path: "/testimonials",
  });

  return (
    <section className="container py-10 sm:py-12 md:py-16">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-slate-700">
                {item.initials}
              </div>
              <div>
                <h2 className="text-base font-semibold leading-tight">{item.name}</h2>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">{item.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
