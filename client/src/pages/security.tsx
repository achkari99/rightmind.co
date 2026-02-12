import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, FileText, Lock, Eye, Database } from "lucide-react";

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
              Enterprise-Grade <br/><span className="text-primary">Security & Trust.</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we handle your data, protect your privacy, and ensure 99.9% availability.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid gap-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Encryption</h3>
                  <p className="text-muted-foreground">All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Your intellectual property and customer data never leave our secure environments during processing.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Access Control</h3>
                  <p className="text-muted-foreground">We implement strict Zero-Trust policies. Every system access is authenticated, authorized, and continuously validated. Multi-factor authentication is mandatory for all administrative actions.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compliance & Backups</h3>
                  <p className="text-muted-foreground">Daily automated backups with 30-day retention. We adhere to GDPR and local Moroccan data protection regulations (CNDP), ensuring your business remains compliant.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/20 border-y border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Third-Party Verification</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-50">
              <div className="font-bold border-2 border-foreground px-4 py-2 rounded">SOC2 TYPE II</div>
              <div className="font-bold border-2 border-foreground px-4 py-2 rounded">GDPR READY</div>
              <div className="font-bold border-2 border-foreground px-4 py-2 rounded">CNDP COMPLIANT</div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPage;
