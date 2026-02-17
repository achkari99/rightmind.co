import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isGrowth, setIsGrowth] = useState(false);

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Simple, transparent pricing</h2>
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !isGrowth ? "text-foreground" : "text-muted-foreground")}>
              Small Teams
            </span>
            <Switch checked={isGrowth} onCheckedChange={setIsGrowth} />
            <span className={cn("text-sm font-medium transition-colors", isGrowth ? "text-foreground" : "text-muted-foreground")}>
              Growing Business
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold mb-2">Essential</h3>
            <p className="text-muted-foreground mb-6 h-12">For teams getting structured fast.</p>
            <div className="mb-8">
              <span className="text-3xl font-bold tracking-tight">$0</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <Button variant="outline" className="w-full mb-8">Start Free</Button>
            <ul className="space-y-4 text-sm flex-1">
              <FeatureItem text="Up to 5 users" />
              <FeatureItem text="Basic reporting dashboards" />
              <FeatureItem text="Community support" />
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-xl relative flex flex-col scale-105 z-10">
            <div className="absolute top-0 right-0 -translate-y-1/2 md:translate-x-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <p className="text-muted-foreground mb-6 h-12">For scaling teams needing control.</p>
            <div className="mb-8">
              <span className="text-3xl font-bold tracking-tight">{isGrowth ? "$99" : "$49"}</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <Button className="w-full mb-8">Start Free Trial</Button>
            <ul className="space-y-4 text-sm flex-1">
              <FeatureItem text={isGrowth ? "Unlimited users" : "Up to 20 users"} primary />
              <FeatureItem text="Advanced reporting" primary />
              <FeatureItem text="SSO and role controls" primary />
              <FeatureItem text="Priority email support" primary />
            </ul>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold mb-2">Scale</h3>
            <p className="text-slate-400 mb-6 h-12">Custom setup for enterprise operations.</p>
            <div className="mb-8">
              <span className="text-3xl font-bold tracking-tight">Custom</span>
            </div>
            <Button variant="secondary" className="w-full mb-8">Contact Sales</Button>
            <ul className="space-y-4 text-sm flex-1">
              <FeatureItem text="Dedicated account manager" dark />
              <FeatureItem text="Custom SLAs and support windows" dark />
              <FeatureItem text="Hybrid or on-prem deployment" dark />
              <FeatureItem text="24/7 incident response" dark />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text, primary, dark }: { text: string; primary?: boolean; dark?: boolean }) => (
  <li className="flex gap-3">
    <Check className={cn("size-5 shrink-0", primary ? "text-primary" : dark ? "text-primary" : "text-green-500")} />
    <span>{text}</span>
  </li>
);

export default Pricing;
