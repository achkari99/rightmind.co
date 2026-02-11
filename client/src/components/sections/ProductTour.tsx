import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import featureScale from "@/assets/feature-scale.png"; // Reuse existing image for tour mockup

const steps = [
  {
    id: 1,
    title: "Assess",
    desc: "Full audit of your current infrastructure, security gaps, and performance bottlenecks.",
  },
  {
    id: 2,
    title: "Stabilize",
    desc: "Immediate remediation of critical risks and implementation of failover systems.",
  },
  {
    id: 3,
    title: "Standardize",
    desc: "Implementation of IaC (Infrastructure as Code) and consistent environments.",
  },
  {
    id: 4,
    title: "Optimize",
    desc: "Cost reduction and performance tuning through automated resource management.",
  },
  {
    id: 5,
    title: "Scale",
    desc: "Architecture ready for 10x growth with zero manual intervention.",
  }
];

const ProductTour = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">From chaos to clarity</h2>
          <p className="text-lg text-muted-foreground">Our proven methodology for transforming legacy IT into a modern digital engine.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Stepper Controls */}
          <div className="md:col-span-5 flex flex-col gap-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "text-left p-6 rounded-xl transition-all duration-300 relative overflow-hidden group border-l-4",
                  activeStep === index 
                    ? "bg-white shadow-md border-primary" 
                    : "hover:bg-white/50 border-transparent hover:border-primary/30"
                )}
              >
                <div className="flex items-baseline gap-4">
                  <span className={cn(
                    "text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center border",
                    activeStep === index 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "text-muted-foreground border-muted-foreground/30"
                  )}>
                    {step.id}
                  </span>
                  <div className="flex-1">
                    <h3 className={cn(
                      "font-semibold text-xl mb-1",
                      activeStep === index ? "text-primary" : "text-foreground/80"
                    )}>
                      {step.title}
                    </h3>
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visualization */}
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-xl border border-border p-2">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeStep}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                   className="w-full h-full bg-muted/10 rounded-xl overflow-hidden relative"
                 >
                    {/* Placeholder content that changes based on step - using CSS patterns for now */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                       <img 
                        src={featureScale} 
                        className="w-3/4 opacity-80 mix-blend-multiply" 
                        alt="Process Visualization"
                       />
                       <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm border text-primary">
                         Phase {activeStep + 1}: {steps[activeStep].title}
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
