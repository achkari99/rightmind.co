import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import UseCaseGrid from "@/components/sections/UseCaseGrid";
import LogoStrip from "@/components/sections/LogoStrip";
import FeatureSection from "@/components/sections/FeatureSection";
import ProductTour from "@/components/sections/ProductTour";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

// Feature Images
import featureSecurity from "@/assets/feature-security.png";
import featureScale from "@/assets/feature-scale.png";
import featureAutomation from "@/assets/feature-automation.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <UseCaseGrid />
        <LogoStrip />
        
        <FeatureSection
          eyebrow="Security & Compliance"
          title="Enterprise-grade security, built-in by default."
          description="Don't wait for a breach to think about security. We implement zero-trust architecture, automated penetration testing, and real-time threat monitoring from day one."
          bullets={[
            "SOC2 Type II ready infrastructure",
            "Automated vulnerability scanning",
            "Zero-trust network policies",
            "24/7 Security Operations Center (SOC)"
          ]}
          image={featureSecurity}
          imageAlt="Security Dashboard"
        />
        
        <FeatureSection
          eyebrow="Global Scalability"
          title="Scale from 100 to 100 million users."
          description="Our infrastructure is designed to grow with you. Auto-scaling clusters, multi-region redundancy, and edge caching ensure your users always get the fastest experience."
          bullets={[
            "Kubernetes auto-scaling configuration",
            "Multi-region failover",
            "Global CDN integration",
            "Database sharding & replication strategies"
          ]}
          image={featureScale}
          imageAlt="Scalability Graphs"
          isReversed
        />
        
        <FeatureSection
          eyebrow="AI Automation"
          title="Intelligent ops that fix themselves."
          description="Why wake up at 3AM? Our AI-driven monitoring agents detect anomalies and trigger self-healing protocols before your users even notice a glitch."
          bullets={[
            "Predictive resource provisioning",
            "Automated incident remediation",
            "Smart alert noise reduction",
            "Root cause analysis assistance"
          ]}
          image={featureAutomation}
          imageAlt="AI Automation Network"
        />
        
        <ProductTour />
        
        {/* Testimonial Placeholder */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
             <div className="text-primary mb-6">
               <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
             </div>
             <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
               "Before Nova Infra, we spent 40% of our engineering time fighting fires. Now, we ship features while they handle the rest. It's like having a 20-person DevOps team overnight."
             </h3>
             <div>
               <div className="font-bold text-lg">Sarah Jenkins</div>
               <div className="text-muted-foreground">CTO at FinScale (Series B)</div>
             </div>
          </div>
        </section>

        <Pricing />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
