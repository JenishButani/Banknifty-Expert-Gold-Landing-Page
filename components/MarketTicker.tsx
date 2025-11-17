'use client';

interface TickerItem {
  symbol: string;
  prediction: string;
  color: string;
}

const tickerItems: TickerItem[] = [
  {
    symbol: 'BANKNIFTY',
    prediction: 'Predicted: Bullish Move +124pts',
    color: 'text-gold',
  },
  {
    symbol: 'NIFTY',
    prediction: 'Possible Pullback near 22300',
    color: 'text-pink',
  },
  {
    symbol: 'FINNIFTY',
    prediction: 'Sideways Pattern Detected',
    color: 'text-gold',
  },
  {
    symbol: 'USDINR',
    prediction: 'Strength toward 83.2',
    color: 'text-gold',
  },
];

export default function MarketTicker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-background-secondary to-background border-b border-gold/20 overflow-hidden will-change-transform">
      <div className="relative h-7 sm:h-8 flex items-center">
        {/* Animated scrolling content */}
        <div className="flex animate-scroll whitespace-nowrap will-change-transform">
          {/* Duplicate items for seamless loop */}
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div key={`ticker-${index}`} className="inline-flex items-center px-4 sm:px-8">
              <span className="font-bold text-white text-xs sm:text-sm">{item.symbol}</span>
              <span className="mx-1 sm:mx-2 text-gold text-xs sm:text-sm" aria-hidden="true">→</span>
              <span className={`text-xs sm:text-sm font-medium ${item.color}`}>{item.prediction}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
