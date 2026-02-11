import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";

interface FeatureSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  eyebrow,
  title,
  description,
  bullets,
  image,
  imageAlt,
  isReversed = false,
}) => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary font-bold tracking-wide uppercase text-sm mb-4">
              {eyebrow}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            <ul className="space-y-4 mb-8">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                  <span className="text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 group">
              Learn more about {eyebrow}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted/10 p-2 md:p-4">
               <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={image} 
                  alt={imageAlt} 
                  className="w-full h-auto object-cover"
                />
               </div>
               {/* Decorative floating card */}
               <div className={`absolute ${isReversed ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} bg-white p-4 rounded-lg shadow-xl border border-border/50 max-w-[200px] hidden md:block animate-bounce duration-[3000ms]`}>
                 <div className="flex gap-3 items-center mb-2">
                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                     <CheckCircle2 size={16} />
                   </div>
                   <div className="text-xs font-semibold">Optimization Complete</div>
                 </div>
                 <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-full" />
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
