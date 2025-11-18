# Quick Start Guide

Get your multi-route landing pages up and running in 5 minutes!

## 📋 What You Have

✅ **2 Landing Page Routes**:
- `/` - Main modern landing page
- `/myad` - Simple clean landing page

✅ **Route-Specific Tracking**:
- Each route has its own Telegram channel link
- Each route has its own Facebook Pixel ID

✅ **Performance Optimized**:
- LCP: 0.56s ✅
- CLS: 0.04 ✅
- INP: ~160-180ms ✅

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Edit `.env.local` with your settings:

```env
# Main Route (/)
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/+YourMainChannelID
NEXT_PUBLIC_FB_PIXEL_ID=YourMainPixelID

# MyAd Route (/myad)
NEXT_PUBLIC_MYAD_TELEGRAM_LINK=https://t.me/+YourMyAdChannelID
NEXT_PUBLIC_MYAD_FB_PIXEL_ID=YourMyAdPixelID
```

### 3. Run Development Server
```bash
npm run dev
```

Visit:
- http://localhost:3000/ (main page)
- http://localhost:3000/myad (myad page)

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with main route pixel
├── page.tsx            # Main landing page (/)
├── globals.css         # Global styles
├── myad/
│   ├── layout.tsx      # MyAd route metadata
│   └── page.tsx        # MyAd landing page (/myad)
└── not-found.tsx       # 404 page

components/
├── MarketTicker.tsx    # Scrolling market ticker
├── CountdownTimer.tsx  # 30s countdown with redirect
├── HeroSection.tsx     # Main hero section
├── BackgroundAnimation.tsx
├── UrgencyStrip.tsx
├── BenefitsGrid.tsx
├── SocialProof.tsx
├── TrustBadges.tsx
├── FinalCTA.tsx
└── Disclaimer.tsx

lib/
└── route-config.ts     # Route configuration helper

.env.local              # Environment variables
```

---

## 🎯 Route Configuration

### Main Route (/)

**Features**:
- Modern animated design
- Market ticker at top
- 30-second countdown timer
- Auto-redirect to Telegram
- SEBI badges
- Social proof

**Config**:
```env
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/+KIHM83XCLoMyNjU1
NEXT_PUBLIC_FB_PIXEL_ID=641640395326380
```

**Pixel Events**:
- PageView (auto)
- Lead (countdown redirect)

---

### MyAd Route (/myad)

**Features**:
- Simple clean design
- Blue pulsing CTA button
- Minimal distractions
- Roboto font

**Config**:
```env
NEXT_PUBLIC_MYAD_TELEGRAM_LINK=https://t.me/+pkE7SAaUqEdjOTM1
NEXT_PUBLIC_MYAD_FB_PIXEL_ID=1507008270601589
```

**Pixel Events**:
- PageView (auto)
- Contact (button click)

---

## 🔧 Common Tasks

### Add a New Route

1. **Create directory**: `mkdir app/your-route`
2. **Add env vars** to `.env.local`:
   ```env
   NEXT_PUBLIC_YOUR_ROUTE_TELEGRAM_LINK=https://t.me/+ChannelID
   NEXT_PUBLIC_YOUR_ROUTE_FB_PIXEL_ID=PixelID
   ```
3. **Create page**: `app/your-route/page.tsx`
4. **Copy pixel setup** from `/myad/page.tsx`

📚 See [ROUTE_CONFIGURATION.md](ROUTE_CONFIGURATION.md) for detailed guide

### Change Telegram Links

Edit `.env.local`:
```env
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/+NewChannelID
```

Restart dev server:
```bash
npm run dev
```

### Change Facebook Pixel IDs

Edit `.env.local`:
```env
NEXT_PUBLIC_FB_PIXEL_ID=NewPixelID
```

Restart dev server and verify in Facebook Pixel Helper extension.

### Test Facebook Pixel

1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your pages
3. Check extension shows correct Pixel ID
4. Click buttons and verify events fire

---

## 📊 Monitoring

### Check Performance

```bash
npm run build
npm start
```

Run Lighthouse:
1. Open DevTools
2. Go to Lighthouse tab
3. Run audit
4. Check Core Web Vitals

### Check Facebook Events

1. Go to [Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel
3. Check recent events
4. Verify event counts

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Other Platforms

```bash
npm run build
```

Deploy the `.next` folder and run:
```bash
npm start
```

Make sure to set environment variables on your hosting platform!

---

## 📚 Documentation

- [ROUTES.md](ROUTES.md) - Complete routes overview
- [ROUTE_CONFIGURATION.md](ROUTE_CONFIGURATION.md) - Detailed configuration guide
- [PERFORMANCE_OPTIMIZATIONS.md](PERFORMANCE_OPTIMIZATIONS.md) - Performance details
- [README.md](README.md) - Full project documentation

---

## 🆘 Troubleshooting

### "Telegram link not working"
- Check `.env.local` has correct URL
- Restart dev server after env changes
- Clear browser cache

### "Facebook Pixel not firing"
- Check Pixel ID is correct
- Disable ad blockers for testing
- Check browser console for errors
- Verify with Facebook Pixel Helper

### "Build fails"
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check for TypeScript errors

### "Wrong pixel showing"
- Each route has its own pixel
- Check you're on the correct route
- Clear browser cache
- Check `.env.local` configuration

---

## 💡 Pro Tips

1. **Use URL Parameters**: Track campaign sources
   ```
   https://yourdomain.com/myad?source=facebook&campaign=summer
   ```

2. **A/B Test Routes**: Send different traffic to different routes
   - Route A: `/` (Modern design)
   - Route B: `/myad` (Simple design)

3. **Monitor Separately**: Each route tracks independently in Facebook

4. **Keep Backups**: Copy `.env.local` to `.env.backup`

5. **Document Changes**: Keep notes on what works best

---

## 🎉 You're Ready!

Your multi-route landing page system is fully configured and ready to drive conversions!

**Next Steps**:
1. ✅ Configure your Telegram channels
2. ✅ Set up Facebook Pixels
3. ✅ Test both routes
4. ✅ Deploy to production
5. ✅ Start driving traffic!

Good luck! 🚀
