# Event Tracking Guide

Complete guide for tracking user interactions across all analytics platforms (Facebook Pixel, Google Analytics, Google Tag Manager).

## Overview

This project includes comprehensive event tracking that works across:
- ✅ **Facebook Pixel** - Ad conversion tracking
- ✅ **Google Analytics (GA4)** - User behavior analytics
- ✅ **Google Tag Manager (GTM)** - Tag management and custom events

All events are tracked automatically using the centralized `lib/analytics.ts` utility.

---

## Tracked Events

### Main Route (/)

| Event | Trigger | Platforms | Details |
|-------|---------|-----------|---------|
| **PageView** | Page load | FB, GA, GTM | Automatic tracking |
| **button_click** | Hero CTA click | GA, GTM | Button: "Join FREE Now" |
| **cta_click** | Hero CTA click | GA, GTM | Location: hero_section |
| **Lead** | Hero CTA click | FB | Facebook conversion event |
| **countdown_complete** | Timer reaches 0 | GA, GTM | Auto-redirect tracking |
| **Lead** | Countdown redirect | FB | Facebook conversion event |
| **auto_redirect** | Countdown redirect | GA, GTM | Conversion tracking |
| **button_click** | Final CTA click | GA, GTM | Button: "Get Instant Access" |
| **cta_click** | Final CTA click | GA, GTM | Location: footer_cta |
| **Lead** | Final CTA click | FB | Facebook conversion event |

### MyAd Route (/myad)

| Event | Trigger | Platforms | Details |
|-------|---------|-----------|---------|
| **PageView** | Page load | FB, GA, GTM | Route-specific pixel |
| **Contact** | Top button click | FB | Facebook conversion event |
| **contact** | Top button click | GA, GTM | Method: telegram |
| **cta_click** | Top button click | GA, GTM | Button: "MyAd top Button" |
| **button_click** | Top button click | GA, GTM | Location: top |
| **Contact** | Bottom button click | FB | Facebook conversion event |
| **contact** | Bottom button click | GA, GTM | Method: telegram |
| **cta_click** | Bottom button click | GA, GTM | Button: "MyAd bottom Button" |
| **button_click** | Bottom button click | GA, GTM | Location: bottom |

---

## Setup Instructions

### 1. Facebook Pixel

**Already Configured!** ✅

Each route has its own pixel ID:
- Main route: `641640395326380`
- MyAd route: `1507008270601589`

**Verify Pixel is Working**:
1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your pages
3. Click the extension icon
4. Verify pixel ID matches your route
5. Click buttons and verify events fire

### 2. Google Tag Manager (Optional)

**To Enable GTM**:

1. **Get GTM Container ID**:
   - Go to [Google Tag Manager](https://tagmanager.google.com/)
   - Create account or select existing
   - Create container (Web type)
   - Copy Container ID (format: `GTM-XXXXXXX`)

2. **Add to Environment Variables**:
   Edit `.env.local`:
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

3. **Initialize GTM** in `app/layout.tsx`:
   ```typescript
   import { initGTM } from '@/lib/analytics';

   useEffect(() => {
     const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
     if (gtmId && gtmId !== 'GTM-XXXXXXX') {
       initGTM(gtmId);
     }
   }, []);
   ```

### 3. Google Analytics 4 (Optional)

**To Enable GA4**:

1. **Get Measurement ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create property or select existing
   - Go to Admin → Data Streams
   - Create web stream or select existing
   - Copy Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Environment Variables**:
   Edit `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Initialize GA** in `app/layout.tsx`:
   ```typescript
   import { initGA } from '@/lib/analytics';

   useEffect(() => {
     const gaId = process.env.NEXT_PUBLIC_GA_ID;
     if (gaId && gaId !== 'G-XXXXXXXXXX') {
       initGA(gaId);
     }
   }, []);
   ```

---

## Event Tracking Functions

### Available Functions (`lib/analytics.ts`)

```typescript
// Track custom event
trackEvent('event_name', { category: 'engagement', label: 'button_click' });

// Track page view
trackPageView('/my-page', 'My Page Title');

// Track button click
trackButtonClick('Button Name', 'button_location', 'destination_url');

// Track CTA click
trackCTAClick('CTA Name', 'telegram');

// Track form submission
trackFormSubmit('Form Name', { field1: 'value1' });

// Track lead generation
trackLead('lead_source', 100);

// Track contact event
trackContact('telegram', 'https://t.me/...');

// Track countdown completion
trackCountdownComplete('redirect_url');

// Track scroll depth
trackScrollDepth(75); // 75%

// Track time on page
trackTimeOnPage(120); // 120 seconds

// Track external link
trackExternalLink('https://example.com', 'Link Text');

// Track video play
trackVideoPlay('Video Name', 0);

// Track social share
trackSocialShare('facebook', 'https://...');
```

---

## Custom Event Examples

### Track Button Click
```typescript
import { trackButtonClick } from '@/lib/analytics';

const handleClick = () => {
  trackButtonClick('Download PDF', 'sidebar', '/downloads/guide.pdf');
  // ... your logic
};
```

### Track Form Submit
```typescript
import { trackFormSubmit } from '@/lib/analytics';

const handleSubmit = (formData: any) => {
  trackFormSubmit('Contact Form', {
    email: formData.email,
    interest: formData.interest,
  });
  // ... your logic
};
```

### Track Scroll Depth
```typescript
import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

useEffect(() => {
  let maxScroll = 0;
  const thresholds = [25, 50, 75, 100];

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    const newThreshold = thresholds.find(t => scrollPercent >= t && t > maxScroll);
    if (newThreshold) {
      maxScroll = newThreshold;
      trackScrollDepth(newThreshold);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Track Time on Page
```typescript
import { useEffect } from 'react';
import { trackTimeOnPage } from '@/lib/analytics';

useEffect(() => {
  const startTime = Date.now();

  return () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    if (timeSpent > 10) { // Only track if user stayed >10s
      trackTimeOnPage(timeSpent);
    }
  };
}, []);
```

---

## Facebook Events Manager

### View Events

1. Go to [Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel
3. Click "Test Events" tab to see real-time events
4. Click "Overview" tab to see historical data

### Standard Events Tracked

- **PageView**: Automatic on all pages
- **Lead**: Main route CTA clicks and countdown redirects
- **Contact**: MyAd route telegram button clicks

### Custom Conversions

Create custom conversions in Facebook Ads Manager:
1. Go to Events Manager
2. Click "Custom Conversions"
3. Create new conversion
4. Set rules based on events
5. Use in ad campaigns

---

## Google Tag Manager Events

### View Events

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Preview" to enter debug mode
3. Visit your site
4. See all events in the debug panel

### DataLayer Events

All events are pushed to `window.dataLayer`:

```javascript
window.dataLayer.push({
  event: 'button_click',
  category: 'engagement',
  label: 'Join FREE Now',
  button_location: 'hero_section',
  destination_url: 'https://t.me/...'
});
```

### Create GTM Triggers

1. Go to GTM → Triggers
2. Click "New"
3. Choose "Custom Event"
4. Enter event name (e.g., `button_click`)
5. Save trigger
6. Create tags using this trigger

---

## Google Analytics 4 Events

### View Events

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Reports" → "Engagement" → "Events"
3. See all events with counts and parameters

### Event Parameters

All events include parameters:

```javascript
gtag('event', 'button_click', {
  category: 'engagement',
  label: 'Join FREE Now',
  button_location: 'hero_section',
  destination_url: 'https://t.me/...'
});
```

### Create Conversions

1. Go to GA4 → Configure → Events
2. Find your event
3. Click "Mark as conversion"
4. Use in reports and audiences

---

## Development Mode

In development, all events are logged to console:

```
📊 Event Tracked: button_click {
  category: 'engagement',
  label: 'Join FREE Now',
  button_location: 'hero_section'
}
```

This helps verify events are firing correctly before deployment.

---

## Testing Checklist

Before going live, test all events:

### Main Route (/)
- [ ] PageView fires on load
- [ ] Hero CTA tracks Lead event
- [ ] Hero CTA tracks analytics events
- [ ] Countdown timer tracks at 0 seconds
- [ ] Countdown redirect works correctly
- [ ] Final CTA tracks Lead event
- [ ] Final CTA tracks analytics events

### MyAd Route (/myad)
- [ ] PageView fires with correct pixel ID
- [ ] Top button tracks Contact event
- [ ] Top button tracks analytics events
- [ ] Bottom button tracks Contact event
- [ ] Bottom button tracks analytics events

### Verify in Tools
- [ ] Facebook Pixel Helper shows correct events
- [ ] Facebook Events Manager shows test events
- [ ] GTM Preview shows dataLayer events (if enabled)
- [ ] GA4 Real-Time shows events (if enabled)
- [ ] Console logs show events in development

---

## Troubleshooting

### Events Not Showing in Facebook

**Problem**: Events don't appear in Events Manager

**Solutions**:
1. Wait 20-30 minutes (events can be delayed)
2. Check Pixel Helper shows events firing
3. Verify Pixel ID is correct in `.env.local`
4. Check browser console for errors
5. Disable ad blockers for testing
6. Verify Test Events tab (real-time)

### Events Not in Google Analytics

**Problem**: Events don't appear in GA4

**Solutions**:
1. Wait a few minutes for processing
2. Check Real-Time reports (instant)
3. Verify Measurement ID is correct
4. Check browser console for gtag errors
5. Ensure GA4 is initialized before events fire
6. Check date range filter in reports

### Events Not in GTM

**Problem**: Events not in dataLayer

**Solutions**:
1. Enable GTM Preview mode
2. Check browser console for dataLayer
3. Verify GTM container ID is correct
4. Ensure GTM script loads before events
5. Check for JavaScript errors

### Duplicate Events

**Problem**: Events fire multiple times

**Solutions**:
1. Check for duplicate event calls in code
2. Verify useEffect dependencies
3. Check if multiple pixels initialized
4. Use React StrictMode carefully (causes double renders in dev)

---

## Best Practices

### 1. Consistent Naming
Use clear, descriptive event names:
```typescript
// Good
trackEvent('signup_complete', { ...});

// Avoid
trackEvent('event1', { ... });
```

### 2. Meaningful Parameters
Include context in event parameters:
```typescript
trackButtonClick('Join Telegram', 'hero_section', telegramUrl);
```

### 3. Don't Over-Track
Only track meaningful interactions:
- ✅ Button clicks that lead to conversions
- ✅ Form submissions
- ✅ Important page views
- ❌ Every mouse movement
- ❌ Every scroll pixel

### 4. Privacy Compliance
- Don't track PII (email, phone, name)
- Add cookie consent banner if required
- Follow GDPR/CCPA regulations
- Use IP anonymization in GA4

### 5. Test Before Deploy
- Always test events in development
- Verify in Facebook Test Events
- Check GA4 Real-Time reports
- Use GTM Preview mode

---

## Advanced: Custom Event Implementation

### Add New Event Type

1. **Define Function** in `lib/analytics.ts`:
```typescript
export function trackNewsletterSignup(email: string): void {
  trackEvent('newsletter_signup', {
    category: 'conversion',
    label: 'email_subscription',
    // Don't send PII in production!
    subscriber_count: 1,
  });
}
```

2. **Use in Component**:
```typescript
import { trackNewsletterSignup } from '@/lib/analytics';

const handleSubmit = (email: string) => {
  trackNewsletterSignup(email);
  // ... rest of logic
};
```

3. **Verify**:
- Check console in dev mode
- Test in Facebook Events Manager
- Verify in GA4 Real-Time

---

## Summary

✅ **Facebook Pixel** - Already tracking PageView, Lead, Contact
✅ **Analytics Utility** - Comprehensive event tracking functions
✅ **Multi-Platform** - FB Pixel, GA4, GTM support
✅ **Easy Integration** - Simple function calls
✅ **Development Logging** - Console logs in dev mode

All events are centralized in `lib/analytics.ts` for easy management and consistent tracking across all platforms!
