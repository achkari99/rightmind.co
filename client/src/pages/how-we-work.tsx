import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Play, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "1. 5-Point Audit",
    timeline: "Days 1-2",
    desc: "We analyze your manual bottlenecks and data silos to identify the highest ROI automation opportunities."
  },
  {
    icon: Play,
    title: "2. 14-Day Pilot",
    timeline: "Days 3-17",
    desc: "Fast-track implementation of a single, high-impact workflow to prove measurable results immediately."
  },
  {
    icon: Rocket,
    title: "3. Full Deployment",
    timeline: "Weeks 3-6",
    desc: "Scaling the pilot successes across your entire department with full documentation and staff training."
  },
  {
    icon: BarChart,
    title: "4. Optimization",
    timeline: "Ongoing",
    desc: "Monthly performance reviews and iterative tuning to ensure your infrastructure evolves with your growth."
  }
];

const HowWeWorkPage = () => {
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
              The Path to <br/><span className="text-primary">Predictable Scaling.</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our phased approach eliminates implementation risk and ensures measurable ROI at every stage.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-12">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute left-[24px] top-[48px] bottom-[-48px] w-0.5 bg-primary/20" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 z-10 font-bold">
                    <step.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{step.timeline}</span>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                      <h4 className="text-sm font-bold mb-2 uppercase tracking-tight">Key Deliverable:</h4>
                      <p className="text-sm text-foreground/80">
                        {i === 0 && "Gap analysis report & ROI projection map."}
                        {i === 1 && "Live production workflow & 14-day performance report."}
                        {i === 2 && "Department-wide infrastructure & operator handbook."}
                        {i === 3 && "Monthly performance dashboard & growth tuning."}
                      </p>
                    </div>
                  </div>
                </div>
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

export default HowWeWorkPage;
