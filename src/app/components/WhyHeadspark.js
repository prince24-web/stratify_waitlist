export default function WhyHeadSpark(){
    return(
        <div>
        <div className="z-10 text-center max-w-6xl px-4 sm:px-6 pt-12 sm:pt-16 mx-auto">
      {/* Badge with unified blue accent */}
      <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-cyan-400/20 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
        Master Modern AI Solution
        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
       <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-cyan-100 to-white bg-clip-text text-transparent">
        Why Choose HeadSpark?
      </h1>
      <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Everything you need to create professional marketing strategies and content that converts.
        </p>
      </div>
    <div className="overflow-x-auto">
    <div className="w-[70rem] h-[30rem] mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex items-center justify-between">
  {/* Left side (you can leave it empty or add an illustration later) */}
  <div className="w-1/2 h-full flex items-center justify-center">
    {/* Placeholder for image/illustration */}
    <div className="w-64 h-64 bg-white/10 rounded-xl border border-white/20" />
  </div>

  {/* Right side: Text content */}
  <div className="w-1/2 text-white space-y-4">
    <h2 className="text-3xl font-bold">AI-Powered Content Creation</h2>
    <p className="text-sm md:text-base text-white/80">
      Generate high-quality, tailored content in seconds. Whether you're a marketer, writer, or business owner, our AI tools help you save time and boost productivity with minimal effort.
    </p>
    <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-white/70">
      <li>Blog post generation</li>
      <li>Product descriptions</li>
      <li>Ad copy & social media posts</li>
      <li>Email content & subject lines</li>
      <li>SEO-optimized paragraphs</li>
      <li>Summaries & rephrasing</li>
      <li>Hashtag & caption suggestions</li>
    </ul>
     <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
            Watch Demo
            <span className="ml-1">→</span>
          </button>
  </div>
</div>
<div className="flex gap-6 mt-5 justify-center">
  <div className="w-[34rem] h-[30rem] backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex items-center justify-between">
    {/* Box 1 content here */}
  </div>
  <div className="w-[34rem] h-[30rem] backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex items-center justify-between">
    {/* Box 2 content here */}
  </div>
</div>

</div>

</div>
    )
}