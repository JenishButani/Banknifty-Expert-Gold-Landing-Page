import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://banknift-yexpert.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'BANKNIFTY EXPERT™ - Best Investing Company | 10+ Years Experience',
  description: 'Join India\'s #1 Channel for Investors. Get Nifty & BankNifty trend analysis with 90% accuracy. Expert guidance for beginners & retail investors.',
  keywords: [
    'banknifty',
    'nifty',
    'stock market',
    'trading',
    'investing',
    'market analysis',
    'india stocks',
    'retail investors',
    'trading signals',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE_URL}/myad`,
    siteName: 'BANKNIFTY EXPERT',
    title: 'BANKNIFTY EXPERT™ - Best Investing Company',
    description: 'Join India\'s #1 Channel for Investors. Get Nifty & BankNifty trend analysis with 90% accuracy.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BANKNIFTY EXPERT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BANKNIFTY EXPERT™ - Best Investing Company',
    description: 'Join India\'s #1 Channel for Investors. Get Nifty & BankNifty trend analysis with 90% accuracy.',
    images: ['/og-image.jpg'],
  },
};

export default function MyAdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
