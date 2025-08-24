'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SiriOrbDemo from "../components/orb"

export default function Benefit() {
  const [expandedItem, setExpandedItem] = useState(0);

  const features = [
    {
      id: 1,
      title: 'Save Time with AI Automation',
      description:
        'From ad creation to email sequences and social media posts, AI automates everything you hours of manual work.',
    },
    {
      id: 2,
      title: 'Maximize ROI with AI Optimization',
      description:
        'Smart algorithms continuously optimize your campaigns for better performance and higher returns on investment.',
    },
    {
      id: 3,
      title: 'Automate Customer Engagement',
      description:
        'Personalized customer interactions powered by intelligent automation and behavioral triggers for maximum impact.',
    },
  ];

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-xl gap-6">
        {/* Left: AI Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
         <SiriOrbDemo/>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-white space-y-4">
          <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-cyan-400/20 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
            Master Modern AI Solution
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Powerful Features to <br /> Boost Your Business
          </h2>

          {/* Expandable Features List */}
          <div className="space-y-0 max-h-64 overflow-y-auto pr-2">
            {features.map((feature, index) => (
              <div key={feature.id} className="border-b border-white/10 last:border-b-0">
                <div
                  className="flex items-center justify-between py-3 cursor-pointer group"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex-1">
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-400 font-medium text-xs mt-1">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedItem === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedItem === index ? 'max-h-32 pb-3' : 'max-h-0'
                  }`}
                >
                  <div className="ml-6 pr-6">
                    <p className="text-gray-300 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
