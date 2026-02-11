import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeatureSection from "@/components/sections/FeatureSection";
import CTA from "@/components/sections/CTA";
import featureSecurity from "@/assets/feature-security.png";
import featureScale from "@/assets/feature-scale.png";
import featureAutomation from "@/assets/feature-automation.png";
import { motion } from "framer-motion";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-12 bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Enterprise Infrastructure <br/><span className="text-primary">Without the Overhead</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Everything you need to build, deploy, and scale high-performance applications globally.
            </motion.p>
          </div>
        </section>

        <FeatureSection
          eyebrow="Security"
          title="Security-First Architecture"
          description="We implement the same security standards used by global banks and defense contractors."
          bullets={[
            "DDoS Protection & WAF",
            "Automatic TLS/SSL management",
            "Isolated network environments",
            "Continuous compliance monitoring"
          ]}
          image={featureSecurity}
          imageAlt="Security"
        />

        <FeatureSection
          eyebrow="Compute"
          title="Elastic Multi-Cloud Compute"
          description="Deploy anywhere. Scale everywhere. Our orchestration layer handles the complexity."
          bullets={[
            "Kubernetes-as-a-Service",
            "Serverless function support",
            "High-performance GPU instances",
            "Regional and global load balancing"
          ]}
          image={featureScale}
          imageAlt="Compute"
          isReversed
        />

        <FeatureSection
          eyebrow="Intelligence"
          title="Predictive Operations"
          description="Move from reactive to proactive with AI-driven infrastructure monitoring."
          bullets={[
            "Real-time log analysis",
            "Automated scaling triggers",
            "Anomalous behavior detection",
            "Cost optimization suggestions"
          ]}
          image={featureAutomation}
          imageAlt="AI Ops"
        />

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
