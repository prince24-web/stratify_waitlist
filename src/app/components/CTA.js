export default function CalltoAction() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-[70rem] h-[25rem] mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-start shadow-xl">
        <div className="text-white max-w-md space-y-4 ml-12">
          <h2 className="text-3xl font-bold">Take The Leap With AI</h2>
          <p className="text-white/80 text-base">
            An advanced AI-driven platform that enhances marketing, delivers personalized customer interaction, and optimizes campaigns.
          </p>

          {/* Email input form */}
          <form className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </div>
  );
}
