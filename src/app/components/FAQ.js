'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [expandedItem, setExpandedItem] = useState(0); // First item expanded by default

  const faqs = [
    {
      id: 1,
      question: "What exactly does your Marketing AI do?",
      answer: "Our Marketing AI helps you grow your business by automating tasks like campaign creation and audience targeting, while providing powerful analytics and insights. It's like having a smart marketing assistant that works 24/7 to boost your results!"
    },
    {
      id: 2,
      question: "How do I create an FAQ?",
      answer: "Creating an FAQ is simple! Just navigate to your dashboard, click on the 'FAQ' section, and use our intuitive builder to add questions and answers. You can customize the design, add categories, and even use AI to generate common questions for your industry."
    },
    {
      id: 3,
      question: "Can I customize the FAQ layout?",
      answer: "Absolutely! Our platform offers complete customization options for your FAQ layout. You can choose from multiple templates, adjust colors and fonts, add your branding, and even create custom CSS styles to match your website perfectly."
    },
    {
      id: 4,
      question: "Is FAQify free?",
      answer: "We offer a free plan that includes basic FAQ functionality for up to 10 questions. For advanced features like analytics, custom branding, and unlimited questions, we have affordable premium plans starting at just $9/month."
    },
    {
      id: 5,
      question: "How can I contact support?",
      answer: "We're here to help! You can reach our support team through multiple channels: live chat (available 24/7), email at support@faqify.com, or by submitting a ticket through your dashboard. Premium users also get priority phone support."
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
           <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-cyan-400/20 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
             Frequently Asked Questions
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our platform
          </p>
        </div>

        {/* FAQ Container with Glassmorphism */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="border-b border-white/10 last:border-b-0"
              >
                {/* FAQ Question Header */}
                <div 
                  className="flex items-center justify-between py-6 cursor-pointer group"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors pr-4">
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
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedItem === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="pr-12">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <p className="text-gray-300 leading-relaxed">
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