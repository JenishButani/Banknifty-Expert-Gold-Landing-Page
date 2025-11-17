interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: '💎',
    title: 'Premium Calls',
    description: 'BankNifty & Nifty Options',
  },
  {
    icon: '🎖️',
    title: 'SEBI Registered',
    description: 'Licensed Research Analyst',
  },
  {
    icon: '⚡',
    title: 'Real-Time Alerts',
    description: 'Instant Notifications',
  },
  {
    icon: '📊',
    title: 'Risk Management',
    description: 'SL & Target Levels',
  },
];

export default function BenefitsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-2">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="glass-effect rounded-[20px] p-5 text-center transition-all duration-300 cursor-pointer hover:bg-gold/10 hover:translate-y-[-5px] hover:scale-105 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(255,215,0,0.2)]"
        >
          <div className="w-[60px] h-[60px] mx-auto mb-3 bg-gradient-to-br from-cyan to-gold rounded-full flex items-center justify-center text-[28px] shadow-[0_5px_20px_rgba(255,215,0,0.3)]">
            {benefit.icon}
          </div>
          <div className="text-[15px] font-bold mb-1 text-gold">{benefit.title}</div>
          <div className="text-xs text-white/70">{benefit.description}</div>
        </div>
      ))}
    </div>
  );
}
