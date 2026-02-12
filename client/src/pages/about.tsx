import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";

const AboutPage = () => {
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
              Building the <br/><span className="text-primary">Future of Predictability.</span>
            </motion.h1>
          </div>
        </section>

        <About />

        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Operating Principles</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="text-4xl font-black text-primary/20 shrink-0">01</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Outcomes Over Hype</h3>
                  <p className="text-muted-foreground leading-relaxed">We don't sell technology; we sell measurable business improvements. If it doesn't move the needle, we don't build it.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-black text-primary/20 shrink-0">02</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Security by Design</h3>
                  <p className="text-muted-foreground leading-relaxed">Infrastructure isn't complete without a shield. Every line of code and server configuration is audited for risk.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-black text-primary/20 shrink-0">03</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Long-Term Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">We act as your external IT department. Our success is directly tied to the stability and scale of your operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
