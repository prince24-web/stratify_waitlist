"use client";

import { CheckCircle2 } from "lucide-react";
import CardFlip from "../../components/kokonutui/card-flip";


export default function WhyHeadSpark() {
  return (
    <div>
      {/* Header */}
      <div className="z-10 text-center max-w-6xl px-4 sm:px-6 pt-12 sm:pt-16 mx-auto">
        <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-blue-400/20 inline-flex items-center gap-2 mb-6 text-blue-100 text-sm animate-pulse hover:animate-none hover:bg-blue-400/10 transition-colors mx-auto md:mx-0">
          Master Modern AI Solution
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


        <h1 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-cyan-100 to-white bg-clip-text text-transparent">
          Why Choose Stratify?
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Stop juggling endless tools. Stratify is your all-in-one AI marketing
          assistant — from strategy to execution.
        </p>
      </div>

      {/* Main Container */}
      <div className="px-4">
        <div className="w-full max-w-7xl mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between min-h-[28rem] gap-6">
          {/* Left Side - CardFlip */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <CardFlip
              title="Blog Post"
              subtitle="Engaging & SEO-optimized"
              description="Write full-length blog posts tailored to your audience."
              features={["SEO Keywords", "Engaging Headlines", "Call-to-Actions"]}
            />
          </div>

          {/* Right Side - Feature List */}
          <div className="w-full md:w-1/2 text-white space-y-4">
            <h2 className="text-3xl font-bold">AI-Powered Content Creation</h2>
            <p className="text-sm md:text-base text-white/80">
              Generate high-quality, tailored content in seconds. Whether you&apos;re
              a startup founder, marketer, or business owner, Stratify gives you
              everything you need to stay consistent and visible.
            </p>

            {/* Feature List */}
            <div className="space-y-2">
              {[
                "Blog post & article generation",
                "Content Calendar Generation",
                "Ad creatives & social media posts",
                "Tailored Marketing Strategies",
                "SEO-optimized copy with keywords",
                "Time-Saving Automation",
                "Content Tone Matching",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Boxes */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6 w-full max-w-7xl mx-auto">
          {/* Box 1 */}
          <div className="flex-1 min-h-[24rem] backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Strategy That Scales
              </h3>
              <p className="text-white/80 mb-4">
                Stratify builds a tailored marketing strategy for your product
                — including positioning, messaging, and campaign roadmap.
              </p>
              <div className="space-y-2">
                {[
                  "Competitor & trend analysis",
                  "Target audience insights",
                  "Go-to-market strategy",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex-1 min-h-[24rem] backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Plan & Stay Consistent
              </h3>
              <p className="text-white/80 mb-4">
                Create an AI-powered content calendar that organizes your
                publishing schedule across platforms — so you never miss a post.
              </p>
              <div className="space-y-2">
                {[
                  "Auto-generated X & LinkedIn calendar",
                  "Ready-to-post captions & hashtags",
                  "Drag-and-drop scheduling (coming soon)",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
