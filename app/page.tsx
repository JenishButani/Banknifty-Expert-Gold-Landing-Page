import BackgroundAnimation from '@/components/BackgroundAnimation';
import MarketTicker from '@/components/MarketTicker';
import HeroSection from '@/components/HeroSection';
import UrgencyStrip from '@/components/UrgencyStrip';
import BenefitsGrid from '@/components/BenefitsGrid';
import SocialProof from '@/components/SocialProof';
import TrustBadges from '@/components/TrustBadges';
import FinalCTA from '@/components/FinalCTA';
import Disclaimer from '@/components/Disclaimer';

const TELEGRAM_LINK = process.env.NEXT_PUBLIC_TELEGRAM_LINK || 'https://t.me/+KIHM83XCLoMyNjU1';

export default function Home() {
  return (
    <>
      <MarketTicker />
      <BackgroundAnimation />

      <div className="container max-w-[480px] mx-auto px-3 sm:px-4 pt-10 sm:pt-12 pb-4 relative z-10">
        <div className="glass-effect rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] animate-slide-up">
          <HeroSection telegramLink={TELEGRAM_LINK} />
          <UrgencyStrip />
          <BenefitsGrid />
          <SocialProof />
          <TrustBadges />
          <FinalCTA telegramLink={TELEGRAM_LINK} />
          <Disclaimer />
        </div>
      </div>
    </>
  );
}
