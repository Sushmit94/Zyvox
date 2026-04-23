import { Zap, Users, Target, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Zap, value: "< 5 min", label: "Lead Follow-Up", title: "Faster first response", desc: "Respond quickly to high-intent inquiries with operational consistency across shifts." },
  { icon: Users, value: "3x", label: "Team Capacity", title: "Scale without front-desk overload", desc: "Standardized workflows let small admin teams manage larger patient volumes reliably." },
  { icon: Target, value: "98%", label: "Capture Rate", title: "More qualified opportunities", desc: "Minimize dropped inquiries and improve booking conversion through process discipline." },
  { icon: Clock, value: "24/7", label: "Service Continuity", title: "Always-on communication", desc: "Maintain professional response standards after business hours and during peak periods." },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="py-20 md:py-28 bg-secondary">
      <div ref={ref} className={`container scroll-fade-in ${isVisible ? "visible" : ""}`}>
        <p className="text-sm font-semibold text-brand-gold text-center mb-3 uppercase tracking-[0.2em]">Performance Snapshot</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Outcome-focused operations for business-ready growth
        </h2>
        <p className="text-center text-muted-foreground mb-16">Measured for reliability, conversion, and patient experience quality.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`rounded-2xl bg-card border border-border p-6 text-center hover-lift scroll-fade-in scroll-fade-in-delay-${i + 1} ${isVisible ? "visible" : ""}`}>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-brand-navy" />
              </div>
              <p className="text-3xl font-bold text-brand-navy">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1 mb-4">{stat.label}</p>
              <h3 className="font-semibold text-foreground mb-2">{stat.title}</h3>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
