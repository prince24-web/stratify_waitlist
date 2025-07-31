'use client';

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0b0f]">
      {/* 🔵 BLUE GLOWING CIRCLES */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[100px] left-[-100px] w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[100px]" />

      {/* 🔘 CIRCLE RIPPLE LINES */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="aspect-square w-[80vw] max-w-[800px] rounded-full border border-blue-900/20" />
        <div className="aspect-square w-[100vw] max-w-[1000px] rounded-full border border-blue-900/10 mt-[-5vw] ml-[-5vw]" />
        <div className="aspect-square w-[120vw] max-w-[1200px] rounded-full border border-blue-900/5 mt-[-10vw] ml-[-10vw]" />

      </div>

      {/* ✨ STAR-LIKE DOTS */}
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animation: `blink ${1 + Math.random() * 2}s infinite ease-in-out`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
