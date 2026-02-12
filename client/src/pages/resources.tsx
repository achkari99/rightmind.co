import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, PlayCircle, BookOpen } from "lucide-react";

const resources = [
  {
    type: "Case Study",
    icon: FileText,
    title: "How a Moroccan Logistics Leader Reduced Downtime by 94%",
    desc: "A deep dive into the 14-day pilot and subsequent implementation."
  },
  {
    type: "Guide",
    icon: BookOpen,
    title: "The B2B Automation Playbook",
    desc: "5 practical steps to auditing your internal processes for AI potential."
  },
  {
    type: "Webinar",
    icon: PlayCircle,
    title: "Predictable Infrastructure for 2026",
    desc: "Our engineering team discusses the shift from reactive to proactive ops."
  }
];

const ResourcesPage = () => {
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
              Insights for <br/><span className="text-primary">Decision Makers.</span>
            </motion.h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((r, i) => (
                <Card key={i} className="hover:shadow-md transition-all cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                      <r.icon size={14} />
                      {r.type}
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{r.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                    <div className="mt-6 text-primary font-semibold text-sm">Read more →</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
