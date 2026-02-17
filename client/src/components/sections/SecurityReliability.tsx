import { Shield, Lock, Eye, FileCheck, Server, History } from "lucide-react";

const controls = [
  { icon: Lock, label: "End-to-End Encryption" },
  { icon: Server, label: "Daily Backups" },
  { icon: Eye, label: "Access Logs" },
  { icon: FileCheck, label: "SOC2 Type II" },
  { icon: History, label: "90-Day Retention" },
  { icon: Shield, label: "DDoS Protection" },
];

export default function SecurityReliability() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-6">
              <Shield size={14} /> TRUST CENTER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Security isn't an afterthought. It's our foundation.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We apply strict controls and continuous monitoring so your team can scale without compromising protection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {controls.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <item.icon size={18} className="text-slate-500" />
                  <span className="font-semibold text-sm text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <div className="font-mono text-sm text-green-400">SYSTEM_SECURE</div>
                <div className="text-xs text-slate-500">Live Monitor</div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Encryption_Status</span>
                  <span className="text-green-400">AES-256 [ACTIVE]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Firewall_Rules</span>
                  <span className="text-green-400">UPDATED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Threat_Detection</span>
                  <span className="text-green-400">0 THREATS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Uptime_Rolling</span>
                  <span className="text-green-400">99.998%</span>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
