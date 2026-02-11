import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Talk to an expert</h1>
                <p className="text-xl text-muted-foreground mb-12">
                  Our engineering team is ready to help you architect your next breakthrough.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Email us</h4>
                      <p className="text-muted-foreground">solutions@novainfra.io</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Call us</h4>
                      <p className="text-muted-foreground">+1 (555) 012-3456</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Visit us</h4>
                      <p className="text-muted-foreground">101 Digital Way, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-border"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" placeholder="jane@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea id="message" placeholder="Tell us about your infrastructure goals..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full h-12 text-lg font-bold">Send Message</Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">What happens next?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-bold mb-2">Technical Discovery</h4>
                <p className="text-sm text-muted-foreground">We'll reach out within 4 hours to schedule a deep dive into your stack.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-bold mb-2">Infrastructure Audit</h4>
                <p className="text-sm text-muted-foreground">Our engineers perform a non-invasive assessment of your current environment.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-bold mb-2">Migration Plan</h4>
                <p className="text-sm text-muted-foreground">Receive a detailed roadmap for stabilization and scaling within 48 hours.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
