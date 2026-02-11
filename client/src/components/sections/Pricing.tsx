import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, predictable pricing</h2>
          <p className="text-lg text-muted-foreground">No hidden server costs. No surprise overages. Just scale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Essential */}
          <Card className="flex flex-col border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-8 pb-4">
              <h3 className="font-bold text-2xl">Essential</h3>
              <p className="text-muted-foreground mt-2">For early-stage startups building their MVP.</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex-1">
              <div className="my-6">
                <span className="text-4xl font-extrabold">$1,500</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 text-sm">
                <FeatureItem text="Managed AWS/GCP environment" />
                <FeatureItem text="Basic security hardening" />
                <FeatureItem text="9-5 Support (Slack)" />
                <FeatureItem text="Monthly infrastructure audit" />
                <FeatureItem text="Up to 5 microservices" />
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button variant="outline" className="w-full h-12">Request Quote</Button>
            </CardFooter>
          </Card>

          {/* Growth - Highlighted */}
          <Card className="flex flex-col border-primary shadow-xl scale-105 z-10 relative bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
            <CardHeader className="p-8 pb-4">
              <h3 className="font-bold text-2xl text-primary">Growth</h3>
              <p className="text-muted-foreground mt-2">For scaling teams with active users.</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex-1">
              <div className="my-6">
                <span className="text-4xl font-extrabold">$3,500</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 text-sm">
                <FeatureItem text="Everything in Essential" />
                <FeatureItem text="24/7 Incident Response" />
                <FeatureItem text="Advanced SOC2 Compliance" />
                <FeatureItem text="CI/CD Optimization" />
                <FeatureItem text="Unlimited microservices" />
                <FeatureItem text="Dedicated Account Manager" />
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button className="w-full h-12 font-bold text-base shadow-lg hover:bg-primary/90">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Scale */}
          <Card className="flex flex-col border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-8 pb-4">
              <h3 className="font-bold text-2xl">Scale</h3>
              <p className="text-muted-foreground mt-2">For established enterprises.</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex-1">
              <div className="my-6">
                <span className="text-4xl font-extrabold">Custom</span>
              </div>
              <ul className="space-y-3 text-sm">
                <FeatureItem text="Multi-cloud architecture" />
                <FeatureItem text="On-premise hybrid support" />
                <FeatureItem text="Custom SLA guarantees" />
                <FeatureItem text="Dedicated Engineering Team" />
                <FeatureItem text="White-glove migration" />
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button variant="outline" className="w-full h-12">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <Check className="w-5 h-5 text-primary shrink-0" />
    <span className="text-foreground/80">{text}</span>
  </li>
);

export default Pricing;
