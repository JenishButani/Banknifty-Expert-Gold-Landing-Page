# Route-Specific Configuration Guide

This guide explains how to set up different Telegram links and Facebook Pixel IDs for each landing page route.

## Overview

Each route in the application can have:
- **Unique Telegram Channel Link**: Direct users to different channels based on the route
- **Unique Facebook Pixel ID**: Track conversions separately for each landing page

This allows you to:
- Run A/B tests with different channels
- Track ROI for different ad campaigns
- Manage multiple funnels independently

---

## Current Route Configurations

### Main Route (/)
- **URL**: `https://yourdomain.com/`
- **Telegram Link**: `https://t.me/+KIHM83XCLoMyNjU1`
- **Facebook Pixel ID**: `641640395326380`
- **Environment Variables**:
  ```env
  NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/+KIHM83XCLoMyNjU1
  NEXT_PUBLIC_FB_PIXEL_ID=641640395326380
  ```

### MyAd Route (/myad)
- **URL**: `https://yourdomain.com/myad`
- **Telegram Link**: `https://t.me/+pkE7SAaUqEdjOTM1`
- **Facebook Pixel ID**: `1507008270601589`
- **Environment Variables**:
  ```env
  NEXT_PUBLIC_MYAD_TELEGRAM_LINK=https://t.me/+pkE7SAaUqEdjOTM1
  NEXT_PUBLIC_MYAD_FB_PIXEL_ID=1507008270601589
  ```

---

## Adding a New Route with Custom Config

### Step 1: Add Environment Variables

Edit `.env.local` and add your new route configuration:

```env
# Example: Premium Route (/premium)
NEXT_PUBLIC_PREMIUM_TELEGRAM_LINK=https://t.me/+YOUR_PREMIUM_CHANNEL_ID
NEXT_PUBLIC_PREMIUM_FB_PIXEL_ID=YOUR_PREMIUM_PIXEL_ID
```

**Naming Convention**: `NEXT_PUBLIC_[ROUTE_NAME]_[VARIABLE]`
- Use UPPERCASE
- Use underscores for spaces
- Use descriptive route names

### Step 2: Create Route Directory

```bash
mkdir app/premium
```

### Step 3: Create Page Component

Create `app/premium/page.tsx`:

```typescript
'use client';

import { useEffect } from 'react';

const TELEGRAM_LINK = process.env.NEXT_PUBLIC_PREMIUM_TELEGRAM_LINK || 'https://t.me/default';
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_PREMIUM_FB_PIXEL_ID || 'default-pixel-id';

export default function PremiumPage() {
  // Initialize Facebook Pixel for this route
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js',
        null,
        null,
        null
      );

      (window as any).fbq('init', FB_PIXEL_ID);
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  const handleTelegramClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <>
      {/* Facebook Pixel Noscript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <div>
        <a
          href={TELEGRAM_LINK}
          onClick={handleTelegramClick}
        >
          Join Premium Channel
        </a>
      </div>
    </>
  );
}
```

### Step 4: Add Route to Configuration (Optional)

Edit `lib/route-config.ts` to add your route to the central config:

```typescript
export const ROUTE_CONFIGS: Record<string, RouteConfig> = {
  '/': { ... },
  '/myad': { ... },
  '/premium': {
    telegramLink: process.env.NEXT_PUBLIC_PREMIUM_TELEGRAM_LINK || 'default-link',
    fbPixelId: process.env.NEXT_PUBLIC_PREMIUM_FB_PIXEL_ID || 'default-id',
    routeName: 'Premium Landing Page',
  },
};
```

---

## Facebook Pixel Implementation

### How It Works

1. **Global Pixel (Main Route)**: Initialized in `app/layout.tsx`
2. **Route-Specific Pixels**: Initialized in each route's `page.tsx` using `useEffect`

### Events Tracked

Each route can track different events:

| Route | PageView | Lead | Contact |
|-------|----------|------|---------|
| `/` | ✅ Auto | ✅ On countdown redirect | ❌ |
| `/myad` | ✅ Auto | ❌ | ✅ On button click |

### Custom Event Tracking

Add custom events in your route:

```typescript
const handleCustomAction = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: 99.00,
      currency: 'INR'
    });
  }
};
```

Available Facebook Pixel Events:
- `PageView` - Automatic page view
- `ViewContent` - View content
- `Lead` - Lead generation
- `Contact` - Contact form submission
- `Purchase` - Transaction
- `AddToCart` - Add to cart
- `InitiateCheckout` - Begin checkout

---

## Environment Variables Reference

### Structure

```env
# Main Route
NEXT_PUBLIC_TELEGRAM_LINK=main-telegram-link
NEXT_PUBLIC_FB_PIXEL_ID=main-pixel-id

# Route Name Pattern: [ROUTE]_TELEGRAM_LINK and [ROUTE]_FB_PIXEL_ID
NEXT_PUBLIC_MYAD_TELEGRAM_LINK=myad-telegram-link
NEXT_PUBLIC_MYAD_FB_PIXEL_ID=myad-pixel-id

NEXT_PUBLIC_PREMIUM_TELEGRAM_LINK=premium-telegram-link
NEXT_PUBLIC_PREMIUM_FB_PIXEL_ID=premium-pixel-id
```

### Getting Telegram Links

1. Create a Telegram channel or group
2. Create an invite link:
   - Go to channel settings
   - Click "Invite Link"
   - Create a new link
   - Copy the link (format: `https://t.me/+XXXXXXXXXX`)

### Getting Facebook Pixel IDs

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Create a new Pixel or select existing
3. Copy the Pixel ID (format: numeric like `641640395326380`)

---

## Testing Route Configurations

### Development Testing

```bash
npm run dev
```

Visit each route and verify:
1. Correct Telegram link on buttons
2. Facebook Pixel fires correctly
3. Events track in Facebook Events Manager

### Browser Console Testing

Open DevTools Console and check:

```javascript
// Check if pixel is loaded
console.log(typeof fbq); // Should output "function"

// Check pixel ID
// You can verify by looking at network requests to facebook.com
```

### Facebook Pixel Helper

Install [Facebook Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

It will show:
- Which pixel is active
- What events are firing
- Any errors or warnings

---

## Best Practices

### 1. Use Descriptive Route Names
```env
# Good
NEXT_PUBLIC_PREMIUM_TELEGRAM_LINK=...
NEXT_PUBLIC_WEBINAR_TELEGRAM_LINK=...

# Avoid
NEXT_PUBLIC_ROUTE1_TELEGRAM_LINK=...
NEXT_PUBLIC_LINK2_TELEGRAM_LINK=...
```

### 2. Document Your Routes

Keep a spreadsheet or document with:
- Route path
- Telegram link
- Pixel ID
- Campaign name
- Target audience
- Conversion metrics

### 3. Test Before Deployment

Always test:
- ✅ Links work correctly
- ✅ Pixel fires on page load
- ✅ Events track properly
- ✅ Mobile responsiveness

### 4. Monitor Pixel Health

Check Facebook Events Manager regularly for:
- Event count
- Error rate
- Match quality
- Attribution

### 5. Use URL Parameters (Optional)

Track campaign sources:
```
https://yourdomain.com/myad?source=facebook&campaign=summer2024
```

Then track in custom event:
```typescript
const urlParams = new URLSearchParams(window.location.search);
const source = urlParams.get('source');

(window as any).fbq('trackCustom', 'CampaignView', {
  source: source,
  campaign: urlParams.get('campaign')
});
```

---

## Troubleshooting

### Issue: Pixel Not Firing

**Solution**:
1. Check browser console for errors
2. Verify Pixel ID is correct
3. Check ad blockers are disabled for testing
4. Verify Facebook Pixel Helper shows the pixel

### Issue: Wrong Telegram Link

**Solution**:
1. Check `.env.local` has correct URL
2. Restart dev server after changing env vars
3. Clear browser cache
4. Check you're using correct env variable name

### Issue: Multiple Pixels Firing

**Solution**:
This is expected if you visit multiple routes in one session. Each route initializes its own pixel. Facebook will handle multiple pixels correctly.

### Issue: Events Not Showing in Facebook

**Solution**:
1. Events can take 20-30 minutes to appear
2. Check Events Manager, not Ads Manager
3. Verify pixel is in "Active" state
4. Check date range filter in Events Manager

---

## Example: Complete Route Setup

Let's create a `/webinar` route:

**1. Edit `.env.local`:**
```env
NEXT_PUBLIC_WEBINAR_TELEGRAM_LINK=https://t.me/+WebinarChannel123
NEXT_PUBLIC_WEBINAR_FB_PIXEL_ID=999888777666
```

**2. Create `app/webinar/page.tsx`:**
```typescript
'use client';
import { useEffect } from 'react';

const TELEGRAM_LINK = process.env.NEXT_PUBLIC_WEBINAR_TELEGRAM_LINK || '';
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_WEBINAR_FB_PIXEL_ID || '';

export default function WebinarPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
        t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js', null, null, null);

      (window as any).fbq('init', FB_PIXEL_ID);
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`} alt="" />
      </noscript>

      <div className="webinar-page">
        <h1>Join Our Exclusive Webinar</h1>
        <a href={TELEGRAM_LINK}>Register Now</a>
      </div>
    </>
  );
}
```

**3. Test:**
```bash
npm run dev
# Visit http://localhost:3000/webinar
```

**4. Deploy:**
```bash
npm run build
npm start
```

---

## Summary

✅ Each route has independent Telegram link
✅ Each route has independent Facebook Pixel
✅ Easy to add new routes with custom configs
✅ Centralized configuration management
✅ Complete tracking isolation per route

This setup allows you to run multiple campaigns, track them separately, and optimize each funnel independently!
