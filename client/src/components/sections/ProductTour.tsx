import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Assess",
    desc: "We audit your infrastructure and workflows to expose bottlenecks, risks, and quick-win automation targets.",
    color: "bg-blue-500",
    progress: "bg-blue-500",
  },
  {
    id: 2,
    title: "Stabilize",
    desc: "We reduce incidents with hardening, alerting, and reliability fixes across your core systems.",
    color: "bg-sky-500",
    progress: "bg-sky-500",
  },
  {
    id: 3,
    title: "Standardize",
    desc: "We align tooling and processes so teams operate from consistent baselines and shared playbooks.",
    color: "bg-cyan-500",
    progress: "bg-cyan-500",
  },
  {
    id: 4,
    title: "Optimize",
    desc: "We improve cost, speed, and quality using measured iterations based on real operational data.",
    color: "bg-indigo-500",
    progress: "bg-indigo-500",
  },
  {
    id: 5,
    title: "Scale",
    desc: "We expand capacity and coverage without losing control, visibility, or service quality.",
    color: "bg-blue-600",
    progress: "bg-blue-600",
  },
];

const ProductTour = () => {
  const [activeStep, setActiveStep] = useState(1);
  const active = steps[activeStep - 1];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">From chaos to clarity in 5 steps</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Our proven methodology transforms your operations without disrupting your team.
            </p>

            <div className="relative ml-4 border-l-2 border-slate-200">
              {steps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className="relative block w-full text-left pl-12 pb-10 last:pb-0 group"
                >
                  <span
                    className={cn(
                      "absolute -left-[9px] top-1 size-4 rounded-full border-2 transition-all duration-300",
                      activeStep === step.id
                        ? "bg-white border-primary scale-125 ring-4 ring-primary/20"
                        : activeStep > step.id
                          ? "bg-primary border-primary"
                          : "bg-white border-slate-300 group-hover:border-primary/50",
                    )}
                  />
                  <h3
                    className={cn(
                      "text-2xl font-bold mb-2 transition-colors duration-300",
                      activeStep === step.id ? "text-primary" : "text-slate-400 group-hover:text-slate-600",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "text-slate-600 transition-all duration-300",
                      activeStep === step.id ? "opacity-100 max-h-24" : "opacity-0 max-h-0 overflow-hidden",
                    )}
                  >
                    {step.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative h-[520px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xl p-8 flex items-center justify-center">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center z-10"
            >
              <div
                className={cn(
                  "size-32 rounded-3xl mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white shadow-xl",
                  active.color,
                )}
              >
                {activeStep}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-slate-700">{active.title} Phase</h3>
              <div className="h-2 w-32 mx-auto bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full", active.progress)}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.9 }}
                />
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 opacity-60">
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-full" />
              </div>
            </motion.div>

            <div
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
