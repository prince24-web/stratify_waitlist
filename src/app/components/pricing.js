export default function Pricing() {
    return( 
<div>
     <div className="z-10 text-center max-w-6xl px-4 sm:px-6 pt-12 sm:pt-16 mx-auto">
         <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-cyan-400/20 inline-flex items-center gap-2 mb-6 text-cyan-100 text-sm animate-pulse hover:animate-none hover:bg-cyan-400/10 transition-colors">
        Simple and Flexible
        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-cyan-100 to-white bg-clip-text text-transparent">
        Custom Solution
      </h1>
       <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Need something unique? Contact us for custom <br/> AI plans to achieve your marketing goals.
        </p>
     </div>
</div>
    )
}