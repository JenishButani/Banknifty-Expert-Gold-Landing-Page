import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0e27',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bankniftyexpert.com'),
  title: 'Banknifty Expert - SEBI Registered Research Analyst | Join Free Telegram Channel',
  description:
    'Join India\'s Most Trusted Trading Channel. Get expert BankNifty & Nifty Options trading research from SEBI Registered Analyst. 173,524+ Active Traders. Premium calls with real-time alerts and risk management.',
  keywords: [
    'BankNifty',
    'Nifty Options',
    'SEBI Registered',
    'Trading Research',
    'Stock Market',
    'Options Trading',
    'Trading Signals',
    'Banknifty Expert',
    'Free Trading Channel',
  ],
  authors: [{ name: 'Vyom Research LLP' }],
  creator: 'Banknifty Expert',
  publisher: 'Vyom Research LLP',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bankniftyexpert.com',
    siteName: 'Banknifty Expert',
    title: 'Banknifty Expert - SEBI Registered Research Analyst',
    description:
      'Join India\'s Most Trusted Trading Channel. Get expert BankNifty & Nifty Options trading research from SEBI Registered Analyst.',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Banknifty Expert Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banknifty Expert - SEBI Registered Research Analyst',
    description:
      'Join India\'s Most Trusted Trading Channel. Get expert BankNifty & Nifty Options trading research from SEBI Registered Analyst.',
    images: ['/logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '641640395326380');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=641640395326380&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
