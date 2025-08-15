"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "../Loader"; // Path to your loader file

export default function SEOPlan() {
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false); // Track if generated at least once

  const seoPlan = [
    {
      title: "Keyword Research",
      description:
        "Identify primary and secondary keywords, analyze search volume, and assess competition.",
    },
    {
      title: "On-Page Optimization",
      description:
        "Optimize titles, meta descriptions, headings, and image alt tags for target keywords.",
    },
    {
      title: "Technical SEO",
      description:
        "Ensure fast page load speed, mobile responsiveness, and fix crawl errors.",
    },
    {
      title: "Content Strategy",
      description:
        "Create high-quality, keyword-focused content that matches user intent.",
    },
    {
      title: "Backlink Strategy",
      description:
        "Build high-quality backlinks through outreach, guest posts, and partnerships.",
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor rankings, traffic, and conversions using Google Analytics and Search Console.",
    },
  ];

  const handleGenerate = () => {
    setLoading(true);
    setShowData(false);

    setTimeout(() => {
      setLoading(false);
      setShowData(true);
      setHasGenerated(true); // Now button text changes
    }, 2500);
  };

  return (
    <div className="p-6 bg-[#0f0f0f] min-h-screen text-white">
      <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-blue-600 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
        Get Pro
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold mb-6">SEO Plan</h1>
    
      {/* Generate / Regenerate button */}
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mb-6 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium disabled:opacity-50"
      >
        {hasGenerated ? "Regenerate" : "Generate"}
      </button>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader />
        </div>
      )}

      {/* Data */}
      {showData && (
        <div className="grid gap-6 md:grid-cols-2">
          {seoPlan.map((section, index) => (
            <Card
              key={index}
              className="bg-[#121212] border border-gray-800 text-white shadow-md hover:shadow-lg hover:border-gray-700 transition-all duration-300 rounded-xl"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {section.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
