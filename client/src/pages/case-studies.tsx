import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Clock, Users } from "lucide-react";

const cases = [
  {
    client: "Logistica Maroc",
    industry: "Transportation",
    outcome: "40% reduction in processing time",
    detail: "Automation of support triage and route reporting using real-time API integrations.",
    metrics: [
      { label: "Hours Saved", value: "120/mo" },
      { label: "Accuracy", value: "99.8%" },
      { label: "Pilot Success", value: "11 Days" }
    ]
  },
  {
    client: "RetailHub",
    industry: "E-commerce",
    outcome: "2.5x increase in funnel conversion",
    detail: "Implementation of conversion-led landing pages and automated lead scoring for the Moroccan market.",
    metrics: [
      { label: "Conversion Lift", value: "150%" },
      { label: "Lead Response", value: "< 5min" },
      { label: "Tracking ROI", value: "3.4x" }
    ]
  },
  {
    client: "FinTech Atlas",
    industry: "Financial Services",
    outcome: "Real-time visibility for executive team",
    detail: "Deployment of custom KPI dashboards synchronizing data across 4 legacy platforms.",
    metrics: [
      { label: "Data Latency", value: "Zero" },
      { label: "Report Time", value: "-95%" },
      { label: "SLA Uptime", value: "99.99%" }
    ]
  }
];

const CaseStudiesPage = () => {
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
              Proven Outcomes <br/><span className="text-primary">in the Real World.</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilot examples and implementation successes from our partners.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12">
              {cases.map((c, i) => (
                <Card key={i} className="overflow-hidden border-border/60">
                  <div className="grid md:grid-cols-12">
                    <div className="md:col-span-8 p-8 md:p-12">
                      <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{c.industry}</div>
                      <h2 className="text-3xl font-bold mb-4">{c.client}: {c.outcome}</h2>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{c.detail}</p>
                      <div className="grid grid-cols-3 gap-6">
                        {c.metrics.map((m, j) => (
                          <div key={j}>
                            <div className="text-2xl font-black text-foreground">{m.value}</div>
                            <div className="text-xs text-muted-foreground font-bold uppercase tracking-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-4 bg-muted/30 p-8 flex flex-col justify-center border-l border-border/40">
                      <h4 className="font-bold mb-4 uppercase text-xs tracking-tight text-muted-foreground">Key Technologies Used:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-primary" />
                          Workflow Automation
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-primary" />
                          Custom API Connector
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-primary" />
                          Predictive Analytics
                        </li>
                      </ul>
                    </div>
                  </div>
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

export default CaseStudiesPage;
