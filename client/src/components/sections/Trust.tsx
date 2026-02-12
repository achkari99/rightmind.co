import { ShieldCheck, FileText, Handshake, Headphones, Calendar } from "lucide-react";

const Trust = () => {
  const features = [
    { icon: ShieldCheck, title: "Security Basics", desc: "Enterprise-grade encryption and access controls." },
    { icon: FileText, title: "Clear Documentation", desc: "Full ownership of process maps and technical docs." },
    { icon: Handshake, title: "Contract Clarity", desc: "No-hidden-fee agreements with clear exit terms." },
    { icon: Headphones, title: "Local Support", desc: "WhatsApp-enabled professional support desk." },
    { icon: Calendar, title: "Guaranteed Timelines", desc: "SLA-backed delivery dates for all phases." }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Built for long-term predictability</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <f.icon size={20} />
              </div>
              <h4 className="font-bold text-sm mb-1">{f.title}</h4>
              <p className="text-muted-foreground text-xs leading-tight">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
