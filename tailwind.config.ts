import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
      },
      colors: {
        background: '#0a0e27',
        'background-secondary': '#1a1f3a',
        gold: '#ffd700',
        'gold-light': '#ffed4e',
        cyan: '#00d4ff',
        'cyan-dark': '#0099ff',
        pink: '#ff0066',
        orange: '#ff9900',
      },
      animation: {
        'bg-move': 'bgMove 20s ease infinite',
        'float': 'float 20s infinite ease-in-out',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'logo-glow': 'logoGlow 3s ease-in-out infinite',
        'color-shift': 'colorShift 5s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'cta-pulse': 'ctaPulse 2s ease-in-out infinite',
        'fire-move': 'fireMove 1s ease-in-out infinite',
        'gradient-move': 'gradientMove 3s linear infinite',
        'blink': 'blink 1s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        bgMove: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(-20px, -20px) rotate(120deg)' },
          '66%': { transform: 'translate(20px, -20px) rotate(240deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'translateY(-100px) rotate(180deg)', opacity: '0.8' },
        },
        glow: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
        shimmer: {
          '0%, 100%': { boxShadow: '0 5px 15px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 5px 25px rgba(255, 215, 0, 0.5)' },
        },
        logoGlow: {
          '0%, 100%': { boxShadow: '0 5px 20px rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 8px 30px rgba(255, 215, 0, 0.6)' },
        },
        colorShift: {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(30deg)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        ctaPulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 10px 30px rgba(255, 215, 0, 0.5), 0 0 60px rgba(255, 215, 0, 0.3)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 15px 40px rgba(255, 215, 0, 0.7), 0 0 80px rgba(255, 215, 0, 0.5)',
          },
        },
        fireMove: {
          '0%, 100%': { transform: 'scale(1) rotate(-10deg)' },
          '50%': { transform: 'scale(1.2) rotate(10deg)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
        'gradient-rainbow': 'linear-gradient(135deg, #00d4ff 0%, #ffd700 50%, #ff0066 100%)',
        'gradient-bg': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        'gradient-urgency': 'linear-gradient(90deg, #ff0066, #ff9900, #ffdd00, #ff9900, #ff0066)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
