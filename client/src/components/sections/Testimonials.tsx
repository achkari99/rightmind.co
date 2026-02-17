import type { ComponentType } from "react";
import { MessageSquare, BarChart, FileText } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-4xl md:text-5xl text-primary mb-6">"</div>
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              RightMind transformed how we deliver projects. We went from recurring incidents to stable operations in weeks.
            </h3>
            <div>
              <p className="font-bold text-lg">Sarah Jenkins</p>
              <p className="text-muted-foreground">CTO, FinScale Global</p>
            </div>
          </div>

          <div className="grid gap-4">
            <Feature icon={MessageSquare} title="SLA-based response" desc="Guaranteed 15-minute first response." />
            <Feature icon={BarChart} title="Monthly Cadence" desc="Structured performance and roadmap reviews." />
            <Feature icon={FileText} title="Documented Runbooks" desc="Clear, repeatable procedures for every team." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-4 bg-white rounded-xl border shadow-sm flex items-start gap-4">
      <div className="p-2 bg-secondary text-primary rounded-lg shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
