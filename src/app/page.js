import BackgroundLayer from "./components/background";
import Dashboard from "./components/heroilustration";
import HowItWorks from "./components/howitworks";
import Maquee from "./components/Maquee";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import PricingTable from "./components/pricingpage";
import WhyHeadSpark from "./components/WhyHeadspark";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <BackgroundLayer />

      {/* Hero Content */}
      <div className="z-10 text-center max-w-4xl px-4 sm:px-6 pt-24 sm:pt-32">
        {/* Small badge/label */}
        <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 inline-flex items-center gap-2 mb-6 text-gray-200 text-sm">
          Modern Marketing AI tool
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Generate Tailored Marketing
          <br />
          Plans in Seconds
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Transform your product description into comprehensive marketing strategies and cross-platform content with our AI agent.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Get Started Free Trial
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
            Watch Demo
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      {/* Dashboard Illustration */}
      <div className="z-10 flex justify-center mt-10 w-full px-4">
        <Dashboard />
      </div>
      {/* Footer Text */}
      <div className="z-10 flex justify-center mt-12 w-full px-4">
        <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto text-center">
          Relied upon by over 6000 individuals from around the world
        </p>
      </div>
       <HowItWorks/>
       <WhyHeadSpark/>
       < Pricing/>
       < PricingTable/>
    </main>
  );
}
