'use client';

export default function BackgroundAnimation() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-0 bg-gradient-bg overflow-hidden">
      {/* Animated radial gradients */}
      <div className="absolute w-[150%] h-[150%] animate-bg-move will-change-transform">
        <div
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 0, 102, 0.2) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Floating shapes */}
      <div className="floating-shapes absolute w-full h-full overflow-hidden">
        <div
          className="shape absolute rounded-full bg-gradient-to-br from-cyan/[0.13] to-gold/[0.13] w-20 h-20 left-[10%] animate-float will-change-transform"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="shape absolute rounded-full bg-gradient-to-br from-cyan/[0.13] to-gold/[0.13] w-30 h-30 right-[10%] animate-float will-change-transform"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="shape absolute rounded-full bg-gradient-to-br from-cyan/[0.13] to-gold/[0.13] w-15 h-15 left-[50%] animate-float will-change-transform"
          style={{ animationDelay: '4s' }}
        />
      </div>
    </div>
  );
}
