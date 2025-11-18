'use client';

import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import { trackCTAClick, trackButtonClick } from '@/lib/analytics';

interface HeroSectionProps {
  telegramLink: string;
}

export default function HeroSection({ telegramLink }: HeroSectionProps) {
  const handleCTAClick = () => {
    // Track in Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // Track in Analytics
    trackCTAClick('Hero Join Telegram', 'telegram');
    trackButtonClick('Join FREE Now', 'hero_section', telegramLink);
  };

  return (
    <div className="relative px-4 sm:px-5 py-6 sm:py-8 text-center bg-white/[0.02]">
      {/* Glow effect */}
      <div className="absolute w-[300px] h-[300px] bg-gradient-radial from-gold to-transparent opacity-10 top-[-150px] left-1/2 -translate-x-1/2 animate-glow" />

      {/* SEBI Badge */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-gold text-background px-3 sm:px-4 py-1.5 sm:py-2 rounded-[30px] text-[10px] sm:text-xs font-bold mb-4 sm:mb-5 shadow-[0_5px_15px_rgba(255,215,0,0.3)] animate-shimmer">
        <span>🏆</span>
        <span className="whitespace-nowrap">SEBI REGISTERED ANALYST</span>
        <span>✅</span>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
        <Image
          src="/logo.jpeg"
          alt="Banknifty Expert Logo"
          width={60}
          height={60}
          className="rounded-[10%] shadow-[0_5px_20px_rgba(255,215,0,0.4)] animate-logo-glow sm:w-[70px] sm:h-[70px]"
          priority
        />
        <div className="flex flex-col items-start">
          <div className="text-[26px] sm:text-[32px] font-black text-gradient-rainbow animate-color-shift leading-[0.9] tracking-[1px] sm:tracking-[2px]">
            BANKNIFTY
          </div>
          <div className="text-[26px] sm:text-[32px] font-black text-gradient-rainbow animate-color-shift leading-[0.9] mt-1 tracking-[1px] sm:tracking-[2px]">
            EXPERT
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-[22px] sm:text-[28px] font-extrabold mb-3 leading-tight text-gradient-gold px-2">
        Get Expert Trading Research & Analysis
      </h1>
      <p className="text-base text-white/80 mb-6">
        Join India&apos;s Most Trusted Trading Channel
      </p>

      {/* Main CTA Button */}
      <div className="relative inline-block my-4 sm:my-5">
        <span className="absolute top-[-8px] right-[-8px] sm:top-[-10px] sm:right-[-10px] text-xl sm:text-2xl animate-fire-move">
          🔥
        </span>
        <a
          href={telegramLink}
          onClick={handleCTAClick}
          className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-gradient-gold text-background px-6 sm:px-10 py-3.5 sm:py-5 rounded-[60px] text-base sm:text-lg font-extrabold uppercase tracking-wide shadow-[0_10px_30px_rgba(255,215,0,0.5),0_0_60px_rgba(255,215,0,0.3),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 relative overflow-hidden animate-cta-pulse hover:translate-y-[-3px] hover:scale-[1.08] hover:shadow-[0_20px_50px_rgba(255,215,0,0.8),0_0_100px_rgba(255,215,0,0.6)] no-underline before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:animate-shine"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
          </svg>
          <span className="whitespace-nowrap">Join FREE Now</span>
        </a>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer
        initialSeconds={30}
        title="Next Signal Drop In"
        redirectUrl={telegramLink}
      />

      {/* Live Counter */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-6 p-4 sm:p-5 bg-white/[0.03] rounded-[20px] backdrop-blur-[10px]">
        <div className="text-center min-w-[90px]">
          <div className="text-[24px] sm:text-[32px] font-black text-gradient-rainbow">1,73,524+</div>
          <div className="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wide leading-tight">Active Traders</div>
        </div>
        <div className="text-center min-w-[90px]">
          <div className="text-[24px] sm:text-[32px] font-black text-gradient-rainbow">100%</div>
          <div className="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wide leading-tight">
            SEBI Compliance
          </div>
        </div>
        <div className="text-center min-w-[90px]">
          <div className="text-[24px] sm:text-[32px] font-black text-gradient-rainbow">647</div>
          <div className="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wide leading-tight">Joining Today</div>
        </div>
      </div>
    </div>
  );
}
