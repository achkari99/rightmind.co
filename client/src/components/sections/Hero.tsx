import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-illustration.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4 md:px-6 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
              We help enterprises <span className="text-primary">scale outcomes</span> using practical AI + automation.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Fast, measurable pilots → reliable implementation → long-term optimization. Security-first infrastructure built for the local market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center md:justify-start">
              <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-md">
                Request a 14-Day Pilot
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold shadow-sm">
                Get a Free 5-Point Audit
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center md:justify-start">
              <span className="flex items-center gap-2">
                Available via WhatsApp for rapid support
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white/50 backdrop-blur-sm">
               <img 
                 src={heroImage.src} 
                 alt="RightMinds Enterprise Solutions" 
                 className="w-full h-auto object-cover"
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
