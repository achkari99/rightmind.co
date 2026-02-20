import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Bot,
  MessageSquareMore,
  BarChart3,
  Headset,
  DatabaseZap,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";
import { cn } from "@/lib/utils";
import rightMindsLogo from "@/assets/RightMindLogo.png";

type UseCase = {
  id: string;
  title: string;
  outcome: string;
  icon: ComponentType<{ className?: string }>;
};

const useCases: UseCase[] = [
  {
    id: "lead-qualification",
    title: "Lead Qualification",
    outcome: "Shorten response time with automated scoring and routing.",
    icon: Bot,
  },
  {
    id: "support-automation",
    title: "Support Automation",
    outcome: "Resolve repetitive tickets faster with smart triage flows.",
    icon: MessageSquareMore,
  },
  {
    id: "sales-reporting",
    title: "Sales Reporting",
    outcome: "Get weekly dashboards without manual spreadsheet work.",
    icon: BarChart3,
  },
  {
    id: "customer-ops",
    title: "Customer Operations",
    outcome: "Standardize follow-ups, handoffs, and escalation paths.",
    icon: Headset,
  },
  {
    id: "data-cleanup",
    title: "Data Cleanup",
    outcome: "Fix duplicates and sync errors across your core tools.",
    icon: DatabaseZap,
  },
  {
    id: "workflow-orchestration",
    title: "Workflow Orchestration",
    outcome: "Connect systems so work moves automatically end-to-end.",
    icon: Workflow,
  },
];

const processSteps = [
  { title: "Audit", detail: "Week 1: Baseline workflows, bottlenecks, and ROI targets." },
  { title: "Pilot", detail: "Week 2: Deliver one production-safe automation use case." },
  { title: "Implement", detail: "Weeks 3-4: Expand to adjacent workflows and teams." },
  { title: "Optimize", detail: "Ongoing: Track KPIs and improve performance monthly." },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(useCases[0].id);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Security", href: "/security" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ];

  const selectedUseCase = useCases.find((item) => item.id === activeUseCase) ?? useCases[0];

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span className="opacity-90">Enterprise-safe automation pilots.</span>
        <Link
          href="/contact"
          className="ml-2 underline underline-offset-2 hover:opacity-80 cursor-pointer"
        >
          Request Your Free 48H Prototype -&gt;
        </Link>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border/40 shadow-sm"
            : "bg-background border-transparent",
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center"
          >
            <img
              src={rightMindsLogo.src}
              alt="RightMinds"
              className="h-12 w-52 object-cover object-center"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setPanelOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
              aria-expanded={panelOpen}
            >
              Explore
              <ChevronDown
                className={cn("size-4 transition-transform duration-200", panelOpen && "rotate-180")}
              />
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Request Pilot</Link>
            </Button>
          </div>

          <button
            className="xl:hidden p-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={cn(
            "hidden xl:block overflow-hidden transition-all duration-300",
            panelOpen ? "max-h-[32rem] border-t border-border/60" : "max-h-0",
          )}
        >
          <div className="bg-secondary/70 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6 py-8 grid grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-3">Use Cases</p>
                <h3 className="text-2xl font-bold mb-2">Choose your first automation win</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Start with one measurable workflow, then expand from a proven result.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {useCases.map((item) => {
                    const Icon = item.icon;
                    const active = activeUseCase === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onMouseEnter={() => setActiveUseCase(item.id)}
                        onFocus={() => setActiveUseCase(item.id)}
                        onClick={() => setActiveUseCase(item.id)}
                        className={cn(
                          "rounded-xl border p-3 text-left transition-all duration-200",
                          active
                            ? "bg-white border-primary shadow-sm"
                            : "bg-white/60 border-border hover:bg-white",
                        )}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className={cn("size-8 rounded-md flex items-center justify-center", active ? "bg-primary text-primary-foreground" : "bg-secondary text-primary") }>
                            <Icon className="size-4" />
                          </div>
                          <span className="text-sm font-semibold">{item.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.outcome}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-wide uppercase text-primary mb-3">How We Work</p>
                <h3 className="text-2xl font-bold mb-2">From audit to measurable scale</h3>
                <p className="text-sm text-muted-foreground mb-6">Focused on your selected use case: {selectedUseCase.title}.</p>

                <div className="space-y-4 mb-6">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="flex items-start gap-3">
                      <div className="mt-0.5 size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <CheckCircle2 className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{index + 1}. {step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button asChild>
                    <Link href="/contact">Book Discovery Call</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/how-we-work">View Full Process</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground py-2 border-b border-border/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="rounded-xl border border-border p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Popular Use Cases</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {useCases.slice(0, 4).map((item) => (
                  <div key={item.id} className="rounded-md bg-secondary px-2 py-1.5">
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Button asChild variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Request Pilot</Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
