import { Code, Server, ShieldCheck, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: Code,
    label: "Engineering",
    title: "Ship faster with zero-config DevOps",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: Server,
    label: "Operations",
    title: "99.99% uptime SLA guarantee",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: ShieldCheck,
    label: "IT & Security",
    title: "Enterprise-grade SOC2 compliance",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: Rocket,
    label: "Startups",
    title: "Scale from day one without debt",
    color: "text-purple-600",
    bg: "bg-purple-50"
  }
];

const UseCaseGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.color}`}>
                    {item.label}
                  </p>
                  <h3 className="font-semibold text-lg leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Learn more <span className="ml-1">→</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;
