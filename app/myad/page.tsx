'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { trackContact, trackCTAClick, trackButtonClick, trackPageView, trackJoinAndRedirect } from '@/lib/analytics';

const TELEGRAM_LINK = process.env.NEXT_PUBLIC_MYAD_TELEGRAM_LINK || 'https://t.me/+pkE7SAaUqEdjOTM1';

export default function MyAdPage() {
  // Meta Pixel is initialized once, site-wide, in app/layout.tsx
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track page view in analytics
      trackPageView('/myad', 'MyAd - BANKNIFTY EXPERT');
    }
  }, []);

  const handleTelegramClick = (
    buttonLocation: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    // Track in Analytics (trackContact also sends Meta 'Contact')
    trackContact('telegram', TELEGRAM_LINK);
    trackCTAClick(`MyAd ${buttonLocation} Button`, 'telegram');
    trackButtonClick('Join Telegram', buttonLocation, TELEGRAM_LINK);

    // Meta Lead + Subscribe, then open Telegram once the pixel request has gone out
    trackJoinAndRedirect(TELEGRAM_LINK, e, ['Lead', 'Subscribe']);
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white font-roboto">
        <div className="container-myad">
          <div className="img-container">
            {/* Logo placeholder - uncomment if you have the image */}
            {/* <Image src="/wewe.png" alt="casino" width={150} height={150} className="logo-img" /> */}
          </div>

        <div className="get-id">
          <h1 className="main-title">🚀 BANKNIFTY EXPERT™️ 🚀</h1>
          <h3 className="subtitle">Nifty &amp; BankNifty Market Research</h3>
          <h3 className="subtitle">10+ Years Experience</h3>
        </div>

        <div className="btn-second">
          <a
            href={TELEGRAM_LINK}
            onClick={(e) => handleTelegramClick('top', e)}
            className="telegram-btn"
          >
            Join Telegram
          </a>
        </div>

        <div className="get-id">
          <p className="feature">📈 Nifty, BankNifty trend Beginners &amp; Retail Investors</p>
          <p className="feature">🔔 Research-based analysis of the Indian market</p>
          <p className="feature">📈 Get Nifty,Banknifty Level Update With Proper Analysis</p>
          <p className="feature">👇 For More Updates CLICK ON BELOW BUTTON</p>
          <h2 className="cta-heading">Join Our Free Telegram Channel – Join Now!</h2>
        </div>

        <div className="btn-second" id="second">
          <a
            href={TELEGRAM_LINK}
            onClick={(e) => handleTelegramClick('bottom', e)}
            className="telegram-btn"
          >
            Join Telegram
          </a>
        </div>
      </div>

      <style jsx>{`
        .container-myad {
          width: 70%;
          margin: auto;
          padding: 20px 0;
        }

        .img-container {
          text-align: center;
        }

        .logo-img {
          width: 140px;
          margin-top: 20px;
        }

        .get-id {
          text-align: center;
        }

        .main-title {
          font-size: 40px;
          font-weight: 800;
          margin: 20px 0;
        }

        .subtitle {
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 20px;
          margin: 8px 0;
        }

        .feature {
          font-size: 18px;
          margin: 12px 0;
        }

        .cta-heading {
          font-size: 24px;
          font-weight: 600;
          text-transform: capitalize;
          margin: 20px 0;
        }

        .btn-second {
          text-align: center;
          margin: 20px 0;
        }

        .telegram-btn {
          display: inline-block;
          padding: 12px 60px;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.3s ease;
          animation: zoomPulse 1.5s infinite ease-in-out;
          background-color: #187eaf;
          letter-spacing: 5px;
          text-transform: uppercase;
        }

        .telegram-btn:hover {
          opacity: 0.9;
        }

        @keyframes zoomPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        #second {
          margin-top: 20px;
          margin-bottom: 20px;
        }

        @media only screen and (max-width: 500px) {
          .container-myad {
            width: 95%;
          }

          .logo-img {
            width: 150px;
          }

          .main-title {
            font-size: 30px;
          }

          .subtitle {
            font-size: 14px;
            line-height: 19px;
          }

          .feature {
            font-size: 16px;
          }

          .cta-heading {
            font-size: 20px;
            line-height: 30px;
          }
        }
      `}</style>
      </div>
    </>
  );
}
