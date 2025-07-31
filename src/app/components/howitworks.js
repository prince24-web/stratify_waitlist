export default function HowItWorks() {
  return (
    <div className="z-10 text-center max-w-4xl px-4 sm:px-6 pt-12 sm:pt-16">
      <div className="px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 inline-flex items-center gap-2 mb-6 text-gray-200 text-sm">
        How it Works
      </div>
       <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight">
         Turn your product description into a full marketing strategy.
        </h1>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  
  {/* Box 1 - Increased width */}
  <div className="w-full max-w-4xl h-60 mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6" />

  {/* Box 2 - Increased width */}
  <div className="w-full max-w-4xl h-60 mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6" />

  {/* Box 3 - Increased width */}
  <div className="w-full max-w-4xl h-60 mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6" />

</div>

    </div>
  );
}
