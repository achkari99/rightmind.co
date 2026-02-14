import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import SecurityReliability from "@/components/sections/SecurityReliability";
import { motion } from "framer-motion";

const SecurityPage = () => {
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
              Enterprise-Grade <br/><span className="text-primary">Security Foundation.</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we protect your systems, enforce reliability, and maintain compliance at scale.
            </p>
          </div>
        </section>

        <SecurityReliability />

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPage;
