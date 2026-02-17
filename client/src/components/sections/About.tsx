const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why we exist</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RightMinds was founded to bridge the gap between "experimental AI" and "practical business outcomes." We provide the stability growing Moroccan companies need to innovate safely.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to reduce technical risk for decision-makers, ensuring every automation project is predictable, measurable, and supportable.
            </p>
          </div>
          <div className="bg-secondary/10 p-8 rounded-2xl border border-border">
            <h4 className="font-bold mb-4 text-primary italic">"We don't build hype. We build infrastructure that works when you're not looking."</h4>
            <p className="text-sm font-semibold">— The Operating Principle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
