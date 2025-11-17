# BankNifty Expert Landing Page

A modern, high-converting landing page built with Next.js 15, TypeScript, and Tailwind CSS for BankNifty Expert - SEBI Registered Research Analyst.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for responsive, utility-first styling
- **SEO Optimized** with proper metadata and OpenGraph tags
- **Image Optimization** using Next.js Image component
- **Facebook Pixel** integration for tracking
- **Market Ticker** 📊 scrolling market predictions at top
- **Countdown Timer** ⏱️ for creating urgency and engagement
- **Animated UI** with custom Tailwind animations
- **Mobile-First Design** fully responsive across all devices
- **Server-Side Rendering (SSR)** for improved performance
- **Component-Based Architecture** for maintainability

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Copy the `.env.example` file to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:
```env
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/your-channel-link
NEXT_PUBLIC_FB_PIXEL_ID=your-facebook-pixel-id
```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── BackgroundAnimation.tsx  # Animated background
│   ├── MarketTicker.tsx         # Scrolling market predictions
│   ├── HeroSection.tsx          # Hero section with CTA
│   ├── CountdownTimer.tsx       # Live countdown timer
│   ├── UrgencyStrip.tsx         # Urgency banner
│   ├── BenefitsGrid.tsx         # Benefits cards
│   ├── SocialProof.tsx          # Testimonials
│   ├── TrustBadges.tsx          # Trust indicators
│   ├── FinalCTA.tsx             # Bottom CTA section
│   └── Disclaimer.tsx           # Legal disclaimer
├── public/
│   └── logo.jpeg            # Company logo
├── .env.local               # Environment variables (not in repo)
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🎨 Customization

### Update Content

Edit the respective component files in the `components/` directory:
- Hero text: `components/HeroSection.tsx`
- Benefits: `components/BenefitsGrid.tsx`
- Testimonials: `components/SocialProof.tsx`
- Disclaimer: `components/Disclaimer.tsx`

### Update Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  background: '#0a0e27',
  gold: '#ffd700',
  cyan: '#00d4ff',
  // Add more colors...
}
```

### Update Animations

Custom animations are defined in `tailwind.config.ts` under `extend.animation` and `extend.keyframes`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` file is already configured for Next.js deployment.

### Manual Deployment

1. Build the production version:
```bash
npm run build
```

2. The output will be in the `.next` folder
3. Deploy the `.next` folder to your hosting provider

## 📊 Analytics & Tracking

- **Facebook Pixel**: Configured in `app/layout.tsx`
- Tracks PageView on load and Lead events on CTA clicks

## 🔧 Best Practices Implemented

1. **Performance**
   - Image optimization with Next.js Image
   - Lazy loading components
   - CSS-in-JS with Tailwind for minimal bundle size

2. **SEO**
   - Comprehensive metadata
   - OpenGraph tags
   - Twitter Card tags
   - Semantic HTML

3. **Accessibility**
   - Alt tags for images
   - Proper heading hierarchy
   - ARIA labels where needed

4. **Security**
   - Environment variables for sensitive data
   - No hardcoded credentials
   - Proper CORS configuration

5. **Code Quality**
   - TypeScript for type safety
   - ESLint configuration
   - Component-based architecture
   - Clean, maintainable code

## 📝 License

MIT

## 👥 Author

Vyom Research LLP - Banknifty Expert

---

**Note**: This is a high-conversion landing page designed for lead generation. Ensure compliance with SEBI regulations and trading advisory guidelines when deploying to production.
