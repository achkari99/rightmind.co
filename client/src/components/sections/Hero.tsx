import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-illustration.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
              Focus on outcomes, <br />
              <span className="text-primary">not IT chaos.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We act as your long-term external IT department. Cloud, security, and networks—managed so you can scale without friction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Input 
                placeholder="Work email" 
                className="h-12 px-4 bg-white border-muted-foreground/20 text-base shadow-sm min-w-[240px]" 
              />
              <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-md">
                Get Started
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                No credit card required
              </span>
              <Separator orientation="vertical" className="h-4" />
              <button className="hover:text-primary transition-colors font-medium">
                Or continue with Google
              </button>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white/50 backdrop-blur-sm">
               <img 
                 src={heroImage} 
                 alt="Cloud Infrastructure Dashboard" 
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
               />
            </div>
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/40 rounded-full blur-3xl opacity-60 z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

function Separator({ orientation = "horizontal", className = "" }) {
  return (
    <div className={`bg-border ${orientation === 'vertical' ? 'w-[1px] h-full' : 'h-[1px] w-full'} ${className}`} />
  );
}
