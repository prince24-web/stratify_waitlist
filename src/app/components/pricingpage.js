'use client'
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      subtitle: "Get Started at No Cost",
      price: isYearly ? 0 : 0,
      period: isYearly ? "/year" : "/month",
      features: [
        { text: "Basic Reports (Limited Metrics)", included: true },
        { text: "1 Campaign/Month", included: true },
        { text: "Basic (Up to 500 Contacts)", included: true },
        { text: "Community Forum Support", included: true },
        { text: "1 User", included: true },
        { text: "Trend Prediction", included: false }
      ],
      buttonText: "Sign Up Free",
      buttonStyle: "border border-gray-600 text-white hover:bg-gray-800",
      popular: false
    },
    {
      name: "Pro Plan",
      subtitle: "Scale Your Marketing",
      price: isYearly ? 490 : 49,
      period: isYearly ? "/year" : "/month",
      features: [
        { text: "Advanced Reports + Real-Time", included: true },
        { text: "Up to 10 Campaigns/Month", included: true },
        { text: "Enhanced (Up to 5,000 Contacts)", included: true },
        { text: "Email Support (48-Hour Response)", included: true },
        { text: "Up to 5 Users", included: true },
        { text: "Trend Prediction Included", included: true }
      ],
      buttonText: "Start Pro Trial",
      buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
      popular: true
    },
    {
      name: "Professional Plan",
      subtitle: "Dominate Your Market",
      price: isYearly ? 1990 : 199,
      period: isYearly ? "/year" : "/month",
      features: [
        { text: "Full Analytics + Custom Dashboards", included: true },
        { text: "Unlimited Campaigns", included: true },
        { text: "Advanced (Unlimited Contacts)", included: true },
        { text: "24/7 Priority Phone + Chat", included: true },
        { text: "Unlimited Users", included: true },
        { text: "Included + Custom Forecasts", included: true }
      ],
      buttonText: "Get Professional",
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
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
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