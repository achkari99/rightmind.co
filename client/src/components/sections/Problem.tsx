import { AlertTriangle, Clock, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Problem = () => {
  const pains = [
    {
      icon: AlertTriangle,
      title: "Fragmented IT Infrastructure",
      desc: "Siloed systems leading to data gaps and manual entry errors."
    },
    {
      icon: Clock,
      title: "Slow Implementation Cycles",
      desc: "Projects dragging on for months without measurable ROI."
    },
    {
      icon: TrendingDown,
      title: "Rising Operational Costs",
      desc: "Scaling manually is expensive and prone to human error."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The hidden cost of "Status Quo"</h2>
          <p className="text-muted-foreground">Growing organizations in Morocco face unique scaling challenges that manual processes can't solve.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="border-none shadow-none text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
                    <pain.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{pain.title}</h3>
                  <p className="text-muted-foreground text-sm">{pain.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
