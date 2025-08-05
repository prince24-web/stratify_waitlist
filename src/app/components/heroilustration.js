'use'
import React from 'react';

const Dashboard = () => {
  return (
    <div className="w-full px-1 md:px-0">
      <div className="group relative bg-black/20 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-2 md:p-3 shadow-2xl max-w-6xl mx-auto overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-cyan-400/10 rounded-full filter blur-xl"></div>
        <div className="absolute -top-3 -left-3 w-12 h-12 bg-cyan-400/10 rounded-full filter blur-lg"></div>

        <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl p-2 md:p-3 shadow-2xl">
          {/* Compact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2">
            {/* Box 1 */}
           <div className="w-full aspect-[1/0.9] backdrop-blur-sm bg-white/[0.015] border border-white/[0.05] rounded-2xl p-2 md:p-2.5 flex flex-col justify-between">
  {/* Bar Chart */}
  <div className="flex justify-between items-end h-3/5 gap-[2px]">
    <div className="w-3.5 h-12 bg-blue-300/60 rounded-md backdrop-blur-sm" />
    <div className="w-3.5 h-16 bg-blue-500/60 rounded-md backdrop-blur-sm" />
    <div className="w-3.5 h-20 bg-blue-300/60 rounded-md backdrop-blur-sm" />
    <div className="w-3.5 h-14 bg-blue-500/60 rounded-md backdrop-blur-sm" />
    <div className="w-3.5 h-18 bg-blue-300/60 rounded-md backdrop-blur-sm" />
    <div className="w-3.5 h-10 bg-blue-500/60 rounded-md backdrop-blur-sm" />
    <div className="w-3.5 h-22 bg-blue-300/60 rounded-md backdrop-blur-sm" />
    <div className="w-3.5 h-16 bg-blue-500/60 rounded-md backdrop-blur-sm" />
  </div>

  {/* Middle Label Bar */}
  <div className="mt-2 w-12 h-2 bg-white/10 rounded-full mx-auto backdrop-blur-sm" />

  {/* Bottom Illustrative Bars */}
  <div className="flex items-center gap-2 mt-2">
    {/* Circle Icon */}
    <div className="w-4 h-4 rounded-full bg-white/10 backdrop-blur-sm" />
    {/* Text Lines */}
    <div className="flex flex-col gap-1 flex-1">
      <div className="h-2 w-full bg-white/5 rounded-full backdrop-blur-sm" />
      <div className="h-2 w-[85%] bg-white/5 rounded-full backdrop-blur-sm" />
      <div className="h-2 w-[70%] bg-white/5 rounded-full backdrop-blur-sm" />
    </div>
  </div>
</div>

            {/* Box 2 */}
         <div className="w-full aspect-[1/0.9] backdrop-blur-sm bg-white/[0.015] border border-white/[0.05] rounded-2xl p-2 md:p-2.5" />

  {/* Main Container */}
 
            {/* Box 3 */}
           <div className="w-full aspect-[1/0.9] backdrop-blur-sm bg-white/[0.015] border border-white/[0.05] rounded-2xl p-2 md:p-2.5" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
