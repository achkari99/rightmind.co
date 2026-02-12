import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Solutions built for outcomes</h2>
          <p className="text-lg text-muted-foreground">Fixed-scope implementations with clear deliverables and timelines.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Automation Systems */}
          <Card className="flex flex-col border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-8 pb-4">
              <h3 className="font-bold text-2xl">Automation Systems</h3>
              <p className="text-muted-foreground mt-2">Internal workflows, support triage, and reporting automation to reduce manual load.</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex-1">
              <ul className="space-y-3 text-sm mt-6">
                <FeatureItem text="Custom workflow mapping" />
                <FeatureItem text="Support triage automation" />
                <FeatureItem text="API & legacy integrations" />
                <FeatureItem text="Staff training & handover" />
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button variant="outline" className="w-full h-12">Learn More</Button>
            </CardFooter>
          </Card>

          {/* Conversion & Growth */}
          <Card className="flex flex-col border-primary shadow-xl scale-105 z-10 relative bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              High Impact
            </div>
            <CardHeader className="p-8 pb-4">
              <h3 className="font-bold text-2xl text-primary">Conversion & Growth</h3>
              <p className="text-muted-foreground mt-2">Landing pages, funnels, and tracking designed to capture more local market share.</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex-1">
              <ul className="space-y-3 text-sm mt-6">
                <FeatureItem text="Conversion-led UI/UX" />
                <FeatureItem text="Automated lead scoring" />
                <FeatureItem text="CRM synchronization" />
                <FeatureItem text="A/B testing pilot" />
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button className="w-full h-12 font-bold text-base shadow-lg hover:bg-primary/90">Request Pilot</Button>
            </CardFooter>
          </Card>

          {/* Data Visibility */}
          <Card className="flex flex-col border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-8 pb-4">
              <h3 className="font-bold text-2xl">Data Visibility</h3>
              <p className="text-muted-foreground mt-2">Dashboards, KPIs, and analytics setup for real-time executive decision making.</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex-1">
              <ul className="space-y-3 text-sm mt-6">
                <FeatureItem text="KPI dashboard setup" />
                <FeatureItem text="Automated reporting" />
                <FeatureItem text="Analytics verification" />
                <FeatureItem text="Predictive data modeling" />
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button variant="outline" className="w-full h-12">Learn More</Button>
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
