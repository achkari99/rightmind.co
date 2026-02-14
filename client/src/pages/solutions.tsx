import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import UseCaseGrid from "@/components/sections/UseCaseGrid";
import { motion } from "framer-motion";

const SolutionsPage = () => {
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
              Infrastructure tailored <br/><span className="text-primary">to your stage.</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple solution tracks aligned to your team's operational goals.
            </p>
          </div>
        </section>

        <UseCaseGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
