import React from 'react';

const Maquee = () => {
  return (
    <div className="relative overflow-hidden w-full bg-black py-4">
      {/* Gradient mask on the left and right */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black" />

      {/* Marquee Text */}
      <div className="animate-marquee whitespace-nowrap flex gap-16 text-white text-2xl font-bold">
        <span>Innovate</span>
        <span>Create</span>
        <span>Learn</span>
        <span>Grow</span>
        <span>Inspire</span>
      </div>
    </div>
  );
};

export default Maquee;
