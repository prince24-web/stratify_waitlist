import BackgroundLayer from "./components/background";
import Benefit from "./components/Benefits";
import CalltoAction from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import HowItWorks from "./components/howitworks";
import Maquee from "./components/Maquee";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import PricingTable from "./components/pricingpage";
import WhyHeadSpark from "./components/WhyHeadspark";
import BentoGrid from "./components/kokonutui/bento-grid"


export default function HomePage() {
  return (
    
    <main className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <BackgroundLayer />

      {/* Hero Content */}
      <div className="z-10 text-center max-w-4xl px-4 sm:px-6 pt-24 sm:pt-32">
        {/* Small badge/label */}
         <div className="px-4 py-2 rounded-full backdrop-blur-md bg-black/20  border border-cyan-400/20 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
          Modern Marketing AI Tool
          <svg
            className="w-4 h-4 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-cyan-100 to-white bg-clip-text text-transparent">
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
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors">
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
        <BentoGrid/>
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
       <Benefit/>
       <FAQ/>
       <CalltoAction/>
       <Footer/>
    </main>
  );
}
