import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Building2, Cpu, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Rocket,
    title: "High-Growth Startups",
    desc: "Scale your infrastructure from MVP to millions of users without technical debt.",
    bullets: ["Auto-scaling clusters", "CI/CD automation", "Cost monitoring"]
  },
  {
    icon: Building2,
    title: "Established Enterprises",
    desc: "Modernize legacy systems with zero-downtime migrations and hybrid cloud support.",
    bullets: ["Legacy integration", "SOC2 compliance", "Dedicated support"]
  },
  {
    icon: Cpu,
    title: "Operations & IT",
    desc: "Reduce manual tickets by 60% with AI-driven monitoring and self-healing systems.",
    bullets: ["Incident automation", "Log centralization", "Predictive ops"]
  },
  {
    icon: BarChart3,
    title: "Data-Driven Teams",
    desc: "Turn fragmented data into real-time executive dashboards for better decision making.",
    bullets: ["Data warehousing", "Real-time ETL", "BI tool integration"]
  }
];

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-12 bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Infrastructure tailored <br/><span className="text-primary">to your stage.</span>
            </motion.h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((s, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow border-border/60">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <s.icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                    <ul className="space-y-3">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
