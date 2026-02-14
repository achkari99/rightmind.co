import { Button } from "@/components/ui/button";

type CTAProps = {
  title?: string;
  description?: string;
};

const CTA = ({ title, description }: CTAProps) => {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {title ?? "Ready to reduce operational risk?"}
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
          {description ??
            "Start with a 14-day pilot to see measurable results, or request a free 5-point audit of your current automation potential."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold">
            Request a 14-Day Pilot
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white text-white hover:bg-white/10">
            Get a Free 5-Point Audit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
