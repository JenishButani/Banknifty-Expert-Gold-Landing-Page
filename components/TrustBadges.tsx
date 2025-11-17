interface TrustBadge {
  icon: string;
  text: string;
}

const badges: TrustBadge[] = [
  { icon: '🛡️', text: '100% Secure' },
  { icon: '✅', text: 'SEBI Registered' },
  { icon: '🏆', text: 'Top Rated' },
];

export default function TrustBadges() {
  return (
    <div className="flex justify-around p-5 mx-5 bg-black/30 rounded-[20px]">
      {badges.map((badge, index) => (
        <div key={index} className="text-center">
          <div className="text-[32px] mb-1">{badge.icon}</div>
          <div className="text-[11px] text-white/70">{badge.text}</div>
        </div>
      ))}
    </div>
  );
}
