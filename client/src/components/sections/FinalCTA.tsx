import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to standardise your scale?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join teams building reliable operations with a clear rollout and measurable outcomes.
        </p>

        <div className="mb-16">
          <Button size="lg" className="h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/20">
            Get Started Now
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required for trial.</p>
        </div>

        <div className="text-left max-w-2xl mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="font-bold mb-4 text-lg">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline font-medium">Can I deploy on-premise?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, enterprise plans support private cloud and on-premise deployments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="hover:no-underline font-medium">How does pricing scale?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pricing scales with active seats and service scope.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="hover:no-underline font-medium">Is migration assistance included?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, implementation onboarding and migration support are included in annual plans.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
