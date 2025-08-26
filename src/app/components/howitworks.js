export default function HowItWorks() {
  return (
    <div className="z-10 text-center max-w-6xl px-4 sm:px-6 pt-12 sm:pt-16 mx-auto">
      {/* Badge with unified blue accent */}
      <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-blue-500/20 inline-flex items-center gap-2 mb-6 text-blue-100 text-sm animate-pulse hover:animate-none hover:bg-blue-500/10 transition-colors">
        How it Works
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

      {/* Headline with blue gradient */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
        Turn your product description into{" "}
        <span className="whitespace-nowrap">a full marketing strategy</span>.
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Box 1 - Document */}
        <div className="group relative w-full min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] backdrop-blur-sm bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center text-center hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl group-hover:opacity-80 transition-opacity"></div>
          <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
            <svg
              className="w-7 h-7 text-blue-500 group-hover:animate-float"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-blue-50 to-white bg-clip-text text-transparent">
            Describe Your Product
          </h3>
          <p className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">
            Simply input your product or service description - that&apos;s all we
            need to get started.
          </p>
        </div>

        {/* Box 2 - AI */}
        <div className="group relative w-full min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] backdrop-blur-sm bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center text-center hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl group-hover:opacity-80 transition-opacity"></div>
          <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
            <svg
              className="w-7 h-7 text-blue-500 group-hover:animate-pulse-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-blue-50 to-white bg-clip-text text-transparent">
            AI Analyzes & Strategizes
          </h3>
          <p className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">
            Our AI agent analyzes your input and generates a comprehensive
            marketing strategy.
          </p>
        </div>

        {/* Box 3 - Checkmark */}
        <div className="group relative w-full min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] backdrop-blur-sm bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center text-center hover:border-blue-500/40 transition-all duration-300 overflow-hidden">
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl group-hover:opacity-80 transition-opacity"></div>
          <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
            <svg
              className="w-7 h-7 text-blue-500 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 bg-gradient-to-r from-blue-50 to-white bg-clip-text text-transparent">
            Get Your Marketing Plan
          </h3>
          <p className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">
            Receive tailored content for multiple platforms and a complete
            marketing strategy.
          </p>
        </div>
      </div>
    </div>
  );
}
