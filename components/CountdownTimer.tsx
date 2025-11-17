'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  initialSeconds?: number;
  title?: string;
  redirectUrl?: string;
}

export default function CountdownTimer({
  initialSeconds = 30,
  title = "Next Signal Drop In",
  redirectUrl
}: CountdownTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Redirect when timer reaches 0
    if (seconds === 0 && redirectUrl && typeof window !== 'undefined') {
      // Track the event with Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
      // Redirect to Telegram
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 100);
      return;
    }

    // Countdown every second - using setTimeout for better performance than setInterval
    const timer = setTimeout(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, redirectUrl]);

  return (
    <div className="max-w-md mx-auto my-6 px-4">
      <div className="bg-black/40 backdrop-blur-md border border-gold/30 rounded-[25px] p-6 text-center shadow-[0_10px_40px_rgba(255,215,0,0.2)]">
        <div className="text-gold text-base font-bold mb-3 uppercase tracking-wide">
          {title}
        </div>
        <div className="relative">
          <div className="text-6xl font-black text-cyan bg-gradient-to-br from-cyan to-gold bg-clip-text text-transparent animate-pulse">
            {seconds}
          </div>
          <div className="text-xs font-semibold text-white/70 uppercase tracking-[3px] mt-2">
            SECONDS
          </div>
        </div>
      </div>
    </div>
  );
}
