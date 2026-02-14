import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemOutcome from "@/components/sections/ProblemOutcome";
import ProductTour from "@/components/sections/ProductTour"; // This is our "Approach/Process"
import UseCaseGrid from "@/components/sections/UseCaseGrid";
import Proof from "@/components/sections/Proof";
import Pricing from "@/components/sections/Pricing"; // This will be our "Offers"
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemOutcome />
        <ProductTour /> {/* Approach / Process: Audit -> Pilot -> Implementation -> Optimization */}
        <UseCaseGrid />
        <Proof />
        <Pricing /> {/* Offers: Grouped by outcome (Automation / Conversion / Data visibility) */}
        <Trust />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
