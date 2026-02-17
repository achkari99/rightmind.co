import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span className="opacity-90">Enterprise-safe automation pilots.</span>
        <Link
          href="/contact"
          className="ml-2 underline underline-offset-2 hover:opacity-80 cursor-pointer"
        >
          Request 14-Day Pilot -&gt;
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
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary"
          >
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white text-xs">
              NI
            </div>
            RightMinds
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
