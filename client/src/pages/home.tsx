import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ProductTour from "@/components/sections/ProductTour"; // This is our "Approach/Process"
import Proof from "@/components/sections/Proof";
import Pricing from "@/components/sections/Pricing"; // This will be our "Offers"
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <ProductTour /> {/* Approach / Process: Audit -> Pilot -> Implementation -> Optimization */}
        <Proof />
        <Pricing /> {/* Offers: Grouped by outcome (Automation / Conversion / Data visibility) */}
        <Trust />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
