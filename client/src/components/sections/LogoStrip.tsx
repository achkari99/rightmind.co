import { motion } from "framer-motion";

const LogoStrip = () => {
  // Placeholder logos - using simple text/geometric shapes for mockup
  const logos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-10 border-y border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-muted-foreground tracking-wide uppercase mb-8">
          Trusted by teams building critical systems
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos - Replacing with generic SVG shapes for a cleaner look than random text */}
          <div className="h-8 w-24 bg-foreground/20 rounded animate-pulse" />
          <div className="h-8 w-24 bg-foreground/20 rounded animate-pulse delay-100" />
          <div className="h-8 w-24 bg-foreground/20 rounded animate-pulse delay-200" />
          <div className="h-8 w-24 bg-foreground/20 rounded animate-pulse delay-300" />
          <div className="h-8 w-24 bg-foreground/20 rounded animate-pulse delay-150" />
          <div className="h-8 w-24 bg-foreground/20 rounded animate-pulse delay-75" />
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
