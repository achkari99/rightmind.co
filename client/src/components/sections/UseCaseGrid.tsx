import { BarChart3, Lock, Server, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    icon: Users,
    title: "Support Teams",
    desc: "Automate triage and reduce ticket handling time.",
    outcome: "Faster response and fewer escalations",
  },
  {
    icon: Server,
    title: "Operations",
    desc: "Standardize monitoring, backups, and incident workflows.",
    outcome: "Higher uptime with less manual effort",
  },
  {
    icon: Lock,
    title: "Security & IT",
    desc: "Apply baseline controls across tools and environments.",
    outcome: "Stronger compliance and lower risk",
  },
  {
    icon: BarChart3,
    title: "Leadership",
    desc: "Unify KPIs in real-time dashboards for decision speed.",
    outcome: "Clear visibility across teams and systems",
  },
];

const UseCaseGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions that fit how your team works</h2>
          <p className="text-lg text-muted-foreground">
            Focused solutions mapped to real operational roles, with clear outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((item) => (
            <Card key={item.title} className="h-full border border-border/60 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-3">{item.desc}</p>
                <p className="text-sm font-semibold text-primary">{item.outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;
