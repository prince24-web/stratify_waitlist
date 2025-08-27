'use client'
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      subtitle: "Try Stratify at no cost",
      price: 0,
      period: isYearly ? "/year" : "/month",
      features: [
        { text: "Access to all features (except Content Calendar)", included: true },
        { text: "Try each feature only once", included: true },
      ],
      buttonText: "Sign Up Free",
      buttonStyle: "border border-gray-600 text-white hover:bg-gray-800",
      popular: false
    },
    {
      name: "Pro",
      subtitle: "For startups & indie creators",
      // $20/mo → $240/yr, with 25% off → $180/yr
      price: isYearly ? 180 : 20,
      period: isYearly ? "/year" : "/month",
      features: [
        { text: "Up to 15 Product Personas", included: true },
        { text: "Up to 250 Credits", included: true },
        { text: "All features unlocked", included: true },
      ],
      buttonText: "Start Pro",
      buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
      popular: true
    },
    {
      name: "Business",
      subtitle: "For teams & scaling businesses",
      // $50/mo → $600/yr, with 25% off → $450/yr
      price: isYearly ? 450 : 50,
      period: isYearly ? "/year" : "/month",
      features: [
        { text: "Unlimited Product Personas (Fair Use)", included: true },
        { text: "Unlimited Credits (Fair Use)", included: true },
        { text: "All features unlocked", included: true },
        { text: "Priority Support", included: true },
        { text: "Exclusive Community (coming soon)", included: true },
      ],
      buttonText: "Get Business",
      buttonStyle: "border border-gray-600 text-white hover:bg-gray-800",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                !isYearly 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isYearly 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly <span className="ml-1 text-green-400">(Save 25%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:bg-black/30 hover:border-white/20 ${
                plan.popular ? 'scale-105 ring-2 ring-blue-500/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                          <X className="w-3 h-3 text-gray-500" />
                        </div>
                      )}
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 