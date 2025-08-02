import React from 'react';

const Dashboard = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-3 md:p-6 shadow-2xl max-w-7xl mx-auto">
        
        <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-3xl p-4 md:p-8 shadow-2xl">
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* Box 1 */}
            <div className="w-full aspect-square max-w-xs mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 md:p-6" />

            {/* Box 2 */}
            <div className="w-full aspect-square max-w-xs mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 md:p-6" />

            {/* Box 3 */}
            <div className="w-full aspect-square max-w-xs mx-auto backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 md:p-6" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
