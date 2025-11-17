import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-gold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-gold text-background px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform no-underline"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
