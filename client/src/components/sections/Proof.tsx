import { motion } from "framer-motion";

const Proof = () => {
  const pilots = [
    {
      metric: "40%",
      label: "Reduction in Operational Lag",
      context: "Logistic Firm Pilot"
    },
    {
      metric: "14 Days",
      label: "To First Measurable ROI",
      context: "Average Pilot Timeline"
    },
    {
      metric: "Zero",
      label: "Disruption to Operations",
      context: "Implementation Guarantee"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Measurable outcomes from Day 1</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {pilots.map((p, i) => (
            <div key={i}>
              <div className="text-5xl font-extrabold mb-2">{p.metric}</div>
              <div className="text-lg font-semibold mb-1">{p.label}</div>
              <div className="text-primary-foreground/60 text-sm">{p.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
