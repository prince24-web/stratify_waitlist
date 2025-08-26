'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [expandedItem, setExpandedItem] = useState(0); // First item expanded by default

  const faqs = [
    {
      id: 1,
      question: "What is Stratify?",
      answer:
        "Stratify is an AI-powered tool that instantly generates tailored marketing strategies and campaign plans. Simply describe your product or service, and Stratify creates a full playbook with content ideas, audience targeting, and platform-specific tactics in seconds."
    },
    {
      id: 2,
      question: "Who can benefit from Stratify?",
      answer:
        "Stratify is built for startups, marketers, founders, and small businesses who want to save time and scale smarter. Whether you’re launching your first product or running multiple campaigns, Stratify helps you cut out the guesswork and focus on execution."
    },
    {
      id: 3,
      question: "Do I need marketing experience to use it?",
      answer:
        "Not at all! Stratify is designed to make marketing strategy accessible to everyone. Even if you’ve never built a campaign before, the AI will walk you through step-by-step strategies, content calendars, and growth tactics tailored to your business."
    },
    {
      id: 4,
      question: "Can I customize the strategies?",
      answer:
        "Yes. Stratify generates strategies as a starting point, but you’re always in control. You can edit campaigns, tweak messaging, and refine targeting to fit your unique brand voice and goals."
    },
    {
      id: 5,
      question: "Is Stratify free to use?",
      answer:
        "We offer a free trial so you can experience Stratify before committing. For advanced features like unlimited strategies, team collaboration, and priority support, we have affordable plans designed for businesses at any stage."
    },
    {
      id: 6,
      question: "How does Stratify handle my data?",
      answer:
        "Your privacy and data security are our top priorities. Stratify does not share or sell your business data, and all information you provide is encrypted and securely stored."
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-cyan-400/20 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
            Frequently Asked Questions
            <svg
              className="w-4 h-4 text-blue-500"
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
          <p className="text-gray-400 text-base sm:text-lg">
            Everything you need to know about Stratify
          </p>
        </div>

        {/* FAQ Container with Glassmorphism */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-white/10 last:border-b-0"
              >
                {/* FAQ Question Header */}
                <div
                  className="flex items-center justify-between py-4 sm:py-6 cursor-pointer group"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-gray-300 transition-colors pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30">
                      {expandedItem === index ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedItem === index ? "max-h-96 pb-4 sm:pb-6" : "max-h-0"
                  }`}
                >
                  <div className="pr-4 sm:pr-12">
                    <div className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/5">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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
