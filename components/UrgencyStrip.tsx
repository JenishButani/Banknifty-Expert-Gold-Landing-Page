export default function UrgencyStrip() {
  return (
    <div className="relative bg-gradient-urgency bg-[length:200%_100%] text-white py-3 px-3 text-center font-bold text-sm uppercase tracking-wide animate-gradient-move will-change-[background-position] overflow-hidden before:content-['⚡'] before:absolute before:left-5 before:animate-blink after:content-['⚡'] after:absolute after:right-5 after:animate-blink">
      Limited Offer: Only 23 FREE Spots Left
    </div>
  );
}
