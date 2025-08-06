'use client'
import React, { useState } from 'react';
import { Sparkles, ChevronDown, MessageCircle } from 'lucide-react';
import BackgroundLayer from "../components/background";
import Navbar from "../components/navbar";


// app/marketing-strategy/page.tsx or page.jsx
export default function MarketingStrategyPage() {
  const [productDescription, setProductDescription] = useState('');
  const [productType, setProductType] = useState('Select product type');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const productTypes = [
    'Neutral',
    'Friendly',
    'Bold',
    'Professional',
    'Witty'
  ];

  const handleProductTypeSelect = (type) => {
    setProductType(type);
    setIsDropdownOpen(false);
  };
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-x-hidden px-4 pt-24">
      <Navbar />
      <BackgroundLayer />
    <h1 className="text-4xl sm:text-6xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-cyan-100 to-white bg-clip-text text-transparent">
       Generate an SEO Plan
      </h1>
     <div className="min-h-screen relative overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center min-h-[calc(100vh-120px)] px-6 py-12 gap-12">
        
        {/* Left Side - Form */}
        <div className="w-full max-w-2xl">
          <div className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-300 ${isDropdownOpen ? 'pb-80' : ''}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-cyan-400/20 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
  SEO configuration
  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</div>



            </div>
            
            <p className="text-blue-100 mb-8">
              Provide your product details and we'll create an SEO-optimized content plan
            </p>

            <div className="space-y-6">
              {/* Product Description */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Product Description
                </label>
                <div className="relative">
                  <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Describe your product or service..."
                    className="w-full h-32 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-300/70 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <p className="text-blue-300/70 text-sm mt-2">
                 Include key benefits, target audience, and unique features for better SEO targeting.
                </p>
              </div>

              {/* Product Type Dropdown */}
              <div className="relative">
                <label className="block text-white font-medium mb-3">
                  Tone
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-left text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 flex items-center justify-between"
                  >
                    <span className={productType === 'Select product type' ? 'text-blue-300/70' : 'text-white'}>
                      {productType}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-blue-300 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-20 overflow-hidden">
                      {productTypes.map((type, index) => (
                        <button
                          key={index}
                          onClick={() => handleProductTypeSelect(type)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/10 last:border-b-0"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Generate Button */}
              <button className="w-full py-4 bg-blue-500  text-white font-semibold rounded-xl hover:blue-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg">
                <Sparkles className="w-5 h-5" />
                <span>Generate SEO plan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Info Panel */}
        <div className="w-full max-w-2xl">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 py-16 shadow-2xl text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
              <MessageCircle className="w-10 h-10 text-blue-300" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to optimize your SEO
            </h2>
            
            <p className="text-blue-100 leading-relaxed">
             Fill out the form and we'll create a comprehensive SEO plan tailored to your product
            </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}