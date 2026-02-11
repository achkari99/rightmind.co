import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to stop worrying about uptime?</h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join 500+ engineering teams who trust Nova Infra to keep their lights on while they build the future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold">
            Start Free Assessment
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-transparent border-white text-white hover:bg-white/10">
            Talk to an Expert
          </Button>
        </div>
      </div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-3xl translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default CTA;
