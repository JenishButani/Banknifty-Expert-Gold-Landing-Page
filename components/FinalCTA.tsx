'use client';

interface FinalCTAProps {
  telegramLink: string;
}

export default function FinalCTA({ telegramLink }: FinalCTAProps) {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

  return (
    <div className="px-5 py-8 text-center bg-gold/5 border-t border-gold/20">
      <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-br from-gold to-pink bg-clip-text text-transparent">
        Start Your Quality Trading Journey Today! 🚀
      </h2>
      <p className="text-white/80 mb-5">
        Don&apos;t miss another High Quality Researched trades. Join 1,50,000+ traders now!
      </p>

      <a
        href={telegramLink}
        onClick={handleCTAClick}
        className="inline-flex items-center justify-center gap-2.5 bg-gradient-gold text-background px-9 py-[18px] rounded-[50px] text-base font-bold shadow-[0_10px_30px_rgba(255,215,0,0.5),0_0_60px_rgba(255,215,0,0.3)] transition-all duration-300 mt-4 hover:translate-y-[-3px] hover:scale-[1.05] hover:shadow-[0_15px_40px_rgba(255,215,0,0.7),0_0_80px_rgba(255,215,0,0.5)] no-underline animate-[ctaPulse_1.5s_ease-in-out_infinite]"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
        <span>Get Instant Access FREE</span>
      </a>

      <div className="mt-4 flex justify-center gap-5 flex-wrap">
        <span className="text-gold text-sm">⚡ Instant Access</span>
        <span className="text-gold text-sm">💳 No Card Required</span>
        <span className="text-gold text-sm">🎁 100% FREE</span>
      </div>
    </div>
  );
}
