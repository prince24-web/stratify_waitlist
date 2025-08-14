"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SEOPlan() {
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

  return (
    <div className="p-6 bg-[#0f0f0f] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">SEO Plan</h1>
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
    </div>
  );
}
