import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const PricingPage = () => {
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
              Scale your business, <br/><span className="text-primary">not your bills.</span>
            </motion.h1>
          </div>
        </section>

        <Pricing />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What cloud providers do you support?</AccordionTrigger>
                <AccordionContent>
                  We currently support AWS, Google Cloud, and Azure. You can also bring your own bare-metal infrastructure for our Scale tier.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I change my plan at any time?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at the start of any billing cycle. There are no long-term contracts for Essential and Growth tiers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
                <AccordionContent>
                  We offer a free infrastructure assessment and a 14-day proof of concept for qualified startups and enterprises.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is support included in the price?</AccordionTrigger>
                <AccordionContent>
                  Standard support is included in all plans. 24/7 priority incident response is included in the Growth and Scale tiers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
