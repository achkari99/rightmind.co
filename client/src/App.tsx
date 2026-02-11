import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Placeholder pages for routing structure
const Features = () => <div className="min-h-screen flex items-center justify-center font-sans text-2xl font-bold">Features Page Placeholder</div>;
const Solutions = () => <div className="min-h-screen flex items-center justify-center font-sans text-2xl font-bold">Solutions Page Placeholder</div>;
const Pricing = () => <div className="min-h-screen flex items-center justify-center font-sans text-2xl font-bold">Pricing Page Placeholder</div>;
const About = () => <div className="min-h-screen flex items-center justify-center font-sans text-2xl font-bold">About Page Placeholder</div>;
const Contact = () => <div className="min-h-screen flex items-center justify-center font-sans text-2xl font-bold">Contact Page Placeholder</div>;

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
