'use client';

import { useState } from "react";
import SiriOrbDemo from "../components/orb";
import { createClient } from "@supabase/supabase-js";


// ✅ Make sure env vars are loaded
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or anon key is missing! Did you set .env.local?");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CalltoAction() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!email) {
      setMessage("Please enter a valid email.");
      setLoading(false);
      return;
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("waitlist") // your table name
      .insert([{ email }]);

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("🎉 You're on the waitlist!");
      setEmail(""); // clear input
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center px-4 md:px-8 py-8 md:py-12">
      <div className="w-full max-w-[70rem] h-[26rem] mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8 flex items-center justify-between shadow-2xl overflow-hidden">
        
        {/* Text and form section */}
        <div className="text-white max-w-md space-y-5 ml-2 md:ml-8">
          <h2 className="text-3xl md:text-4xl font-bold">Take The Leap With AI</h2>
          <p className="text-white/80 text-base md:text-lg">
            An advanced AI-driven platform that enhances marketing, delivers personalized customer interaction, and optimizes campaigns.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join the Waitlist →"}
            </button>
          </form>

          {/* Status message */}
          {message && (
            <p className="text-sm mt-2 text-green-400">{message}</p>
          )}
        </div>

        {/* AI Visual Flow Illustration */}
        <div className="hidden md:flex w-[26rem] h-full items-center justify-center">
          <SiriOrbDemo />
        </div>
      </div>
    </div>
  );
}
