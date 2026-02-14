import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const beforePoints = [
  "Siloed systems causing communication gaps",
  "Manual workflows prone to costly errors",
  "Low visibility across infrastructure and support status",
];

const afterPoints = [
  "Single source of truth across teams and assets",
  "Automated workflows with fewer operational errors",
  "Real-time visibility into systems and service performance",
];

export default function ProblemOutcome() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2">
            <motion.div
              style={{ top: "10%" }}
              animate={{ top: ["10%", "90%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
          </div>

          <div className="md:pr-12 md:text-right">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
              Before Asset Manager
            </h3>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Fragmented chaos
            </h2>

            <ul className="space-y-6">
              {beforePoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-end gap-4 text-lg text-slate-600"
                >
                  <span>{item}</span>
                  <div className="flex-shrink-0 size-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <X size={16} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-12">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">
              With Asset Manager
            </h3>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Unified clarity
            </h2>

            <ul className="space-y-6">
              {afterPoints.map((item) => (
                <li key={item} className="flex items-center gap-4 text-lg font-medium text-foreground">
                  <div className="flex-shrink-0 size-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Check size={16} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
