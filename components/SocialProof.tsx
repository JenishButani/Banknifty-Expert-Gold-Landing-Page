interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: 'Earned ₹67,000 profit last month! Best decision to join this channel.',
    author: 'Rakesh Sharma',
    rating: 5,
  },
  {
    text: 'Clear calls with proper risk management. Finally profitable!',
    author: 'Priya Mehta',
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <div className="p-6 bg-white/[0.02]">
      <h2 className="text-center text-xl font-bold mb-5 bg-gradient-to-br from-gold to-cyan bg-clip-text text-transparent">
        🌟 Real Results, Real Traders
      </h2>

      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="glass-effect-gold rounded-[20px] p-5 mb-4 relative overflow-hidden before:content-['\0022'] before:absolute before:top-2.5 before:left-4 before:text-[40px] before:text-gold/20"
        >
          <div className="text-sm text-white/90 mb-2.5 pl-8">{testimonial.text}</div>
          <div className="font-bold text-gold pl-8">{testimonial.author}</div>
          <div className="text-gold pl-8">
            {'⭐'.repeat(testimonial.rating)}
          </div>
        </div>
      ))}
    </div>
  );
}
