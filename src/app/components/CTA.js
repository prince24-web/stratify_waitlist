'use client';

import SiriOrbDemo from "../components/orb"

export default function CalltoAction() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-12">
      <div className="w-full max-w-[70rem] h-[26rem] mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8 flex items-center justify-between shadow-2xl overflow-hidden">
        
        {/* Text and form section */}
        <div className="text-white max-w-md space-y-5 ml-2 md:ml-8">
          <h2 className="text-3xl md:text-4xl font-bold">Take The Leap With AI</h2>
          <p className="text-white/80 text-base md:text-lg">
            An advanced AI-driven platform that enhances marketing, delivers personalized customer interaction, and optimizes campaigns.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 pt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Join the Waitlist <span className="ml-1">→</span>
            </button>
          </form>
        </div>

        {/* AI Visual Flow Illustration */}
        <div className="hidden md:flex w-[26rem] h-full items-center justify-center">
          <SiriOrbDemo />
        </div>
      </div>
    </div>
  );
}
