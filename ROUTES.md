# Landing Page Routes

This project supports multiple landing page styles with different routes. Each route has its own unique design and layout.

## Available Routes

### 1. Main Landing Page
**Route**: `/`
**URL**: http://localhost:3000/

**Features**:
- Modern glassmorphism design
- Animated background with floating shapes
- Market ticker at top
- 30-second countdown timer with auto-redirect
- SEBI registered badge
- Social proof with testimonials
- Trust badges
- Fully mobile responsive
- Performance optimized (LCP: 0.56s, CLS: 0.04, INP: ~160-180ms)

**Components**:
- MarketTicker
- BackgroundAnimation
- HeroSection
- CountdownTimer
- UrgencyStrip
- BenefitsGrid
- SocialProof
- TrustBadges
- FinalCTA
- Disclaimer

---

### 2. MyAd Landing Page
**Route**: `/myad`
**URL**: http://localhost:3000/myad

**Features**:
- Simple, clean design
- Blue telegram button with zoom pulse animation
- Roboto font family
- Minimal distractions
- Mobile responsive
- Facebook Pixel tracking on button clicks

**Design Style**:
- Black background
- Blue CTA buttons (#187eaf)
- Uppercase letter-spaced text
- Centered layout
- Emoji-based feature list

---

## Adding New Routes

To create a new landing page route:

1. **Create route directory**:
   ```bash
   mkdir app/your-route-name
   ```

2. **Create page.tsx**:
   ```bash
   app/your-route-name/page.tsx
   ```

3. **Create layout.tsx** (optional, for route-specific metadata):
   ```bash
   app/your-route-name/layout.tsx
   ```

4. **Example structure**:
   ```typescript
   // app/your-route-name/page.tsx
   'use client';

   export default function YourRoutePage() {
     return (
       <div>
         {/* Your landing page content */}
       </div>
     );
   }
   ```

---

## Environment Variables

**🎯 Each route has its own Telegram link and Facebook Pixel ID!**

Edit `.env.local` to configure route-specific settings:

```env
# Main Route (/)
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/+KIHM83XCLoMyNjU1
NEXT_PUBLIC_FB_PIXEL_ID=641640395326380

# MyAd Route (/myad)
NEXT_PUBLIC_MYAD_TELEGRAM_LINK=https://t.me/+pkE7SAaUqEdjOTM1
NEXT_PUBLIC_MYAD_FB_PIXEL_ID=1507008270601589
```

### Using in Routes:
```typescript
// Main route
const TELEGRAM_LINK = process.env.NEXT_PUBLIC_TELEGRAM_LINK || 'default-link';

// MyAd route
const TELEGRAM_LINK = process.env.NEXT_PUBLIC_MYAD_TELEGRAM_LINK || 'default-link';
```

📚 **For detailed configuration guide, see [ROUTE_CONFIGURATION.md](ROUTE_CONFIGURATION.md)**

---

## Facebook Pixel Tracking

**🎯 Each route has its own Facebook Pixel ID for independent tracking!**

### Main Route (/)
- **Pixel ID**: `641640395326380`
- Initialized in `app/layout.tsx`
- **Events**: PageView (auto), Lead (countdown redirect)

### MyAd Route (/myad)
- **Pixel ID**: `1507008270601589`
- Initialized in `app/myad/page.tsx`
- **Events**: PageView (auto), Contact (button click)

### Track Custom Events:
```typescript
const handleClick = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'EventName');
  }
};
```

📚 **For detailed pixel setup and troubleshooting, see [ROUTE_CONFIGURATION.md](ROUTE_CONFIGURATION.md)**

---

## Styling Options

### Option 1: CSS-in-JS (used in /myad)
```typescript
<style jsx>{`
  .my-class {
    color: white;
  }
`}</style>
```

### Option 2: Tailwind CSS (used in /)
```typescript
<div className="bg-black text-white p-4">
```

### Option 3: Global CSS
Add styles to `app/globals.css`

---

## Testing Routes

### Development:
```bash
npm run dev
```
Visit:
- http://localhost:3000/ (main page)
- http://localhost:3000/myad (myad page)

### Production Build:
```bash
npm run build
npm start
```

---

## Route Comparison

| Feature | Main (/) | MyAd (/myad) |
|---------|----------|--------------|
| Design Style | Modern, Animated | Simple, Clean |
| Background | Animated Gradients | Solid Black |
| Ticker | ✅ Yes | ❌ No |
| Countdown Timer | ✅ Yes (30s) | ❌ No |
| Auto Redirect | ✅ Yes | ❌ No |
| Button Style | Gradient Gold | Solid Blue |
| Font | System Default | Roboto |
| Animations | Multiple | Button Pulse Only |
| Performance Focus | ✅ High | ✅ High |
| Mobile Optimized | ✅ Yes | ✅ Yes |

---

## Deployment

All routes are statically generated at build time for optimal performance.

Build output example:
```
Route (app)                    Size    First Load JS
┌ ○ /                       8.47 kB      110 kB
├ ○ /_not-found               127 B      102 kB
└ ○ /myad                   3.89 kB      106 kB
```

The `/myad` route is lighter (3.89 kB vs 8.47 kB) due to its simpler design.

---

## Route-Specific Metadata

Each route can have custom metadata by adding a `layout.tsx` file:

```typescript
// app/myad/layout.tsx
export const metadata: Metadata = {
  title: 'Custom Title for MyAd',
  description: 'Custom description...',
};
```

This allows for:
- Custom page titles
- Different OpenGraph images
- Route-specific keywords
- Unique Twitter Card data

---

## Best Practices

1. **Keep routes focused**: Each route should target a specific audience or campaign
2. **Track separately**: Use different FB Pixel events for each route to measure performance
3. **Test mobile**: Always verify responsive design on actual devices
4. **Monitor performance**: Use Lighthouse to ensure each route maintains good Core Web Vitals
5. **Use consistent branding**: Keep brand colors and messaging aligned across routes

---

## Future Route Ideas

Consider creating routes for:
- `/premium` - Premium subscription landing page
- `/webinar` - Webinar registration page
- `/free-trial` - Free trial signup
- `/testimonials` - Dedicated testimonials page
- `/compare` - Comparison with competitors

Each can be A/B tested for conversion optimization!
