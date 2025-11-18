# Events Quick Reference

Quick lookup for all tracked events across both landing pages.

## Main Route (/) Events

### Automatic Events
| Event | When | Platform | Data |
|-------|------|----------|------|
| `PageView` | Page loads | FB Pixel, GA4, GTM | Automatic |

### User Interaction Events

#### Hero Section CTA
**Trigger**: Click "Join FREE Now" button in hero
```
Facebook Pixel:
  - Event: Lead

Google Analytics / GTM:
  - Event: button_click
    category: engagement
    label: Join FREE Now
    button_location: hero_section
    destination_url: {telegram_link}

  - Event: cta_click
    category: conversion
    label: Hero Join Telegram
    cta_type: telegram
```

#### Countdown Timer Redirect
**Trigger**: Timer reaches 0 seconds (auto-redirect)
```
Facebook Pixel:
  - Event: Lead

Google Analytics / GTM:
  - Event: countdown_complete
    category: engagement
    label: timer_redirect
    redirect_url: {telegram_link}

  - Event: Lead (custom)
    category: conversion
    label: countdown_auto_redirect

  - Event: auto_redirect
    category: conversion
    label: countdown_timer
    destination: {telegram_link}
```

#### Final CTA
**Trigger**: Click "Get Instant Access FREE" button at bottom
```
Facebook Pixel:
  - Event: Lead

Google Analytics / GTM:
  - Event: button_click
    category: engagement
    label: Join Now - Final CTA
    button_location: footer_cta
    destination_url: {telegram_link}

  - Event: cta_click
    category: conversion
    label: Final CTA Join Now
    cta_type: telegram
```

---

## MyAd Route (/myad) Events

### Automatic Events
| Event | When | Platform | Data |
|-------|------|----------|------|
| `PageView` | Page loads | FB Pixel (dedicated), GA4, GTM | Route: /myad |

### User Interaction Events

#### Top Telegram Button
**Trigger**: Click first "Join Telegram" button
```
Facebook Pixel:
  - Event: Lead

Google Analytics / GTM:
  - Event: Contact (custom)
    category: conversion
    label: telegram
    contact_value: {telegram_link}

  - Event: cta_click
    category: conversion
    label: MyAd top Button
    cta_type: telegram

  - Event: button_click
    category: engagement
    label: Join Telegram
    button_location: top
    destination_url: {telegram_link}
```

#### Bottom Telegram Button
**Trigger**: Click second "Join Telegram" button
```
Facebook Pixel:
  - Event: Lead

Google Analytics / GTM:
  - Event: Contact (custom)
    category: conversion
    label: telegram
    contact_value: {telegram_link}

  - Event: cta_click
    category: conversion
    label: MyAd bottom Button
    cta_type: telegram

  - Event: button_click
    category: engagement
    label: Join Telegram
    button_location: bottom
    destination_url: {telegram_link}
```

---

## Event Categories

### Engagement Events
- `button_click` - User clicks any button
- `countdown_complete` - Countdown timer reaches 0
- `scroll_depth` - User scrolls to certain depth (if implemented)
- `time_on_page` - User spends time on page (if implemented)

### Conversion Events
- `Lead` - Facebook Pixel lead event
- `Contact` - Facebook Pixel contact event
- `cta_click` - Call-to-action button clicks
- `auto_redirect` - Automatic redirects

---

## Platform-Specific Events

### Facebook Pixel Only
- `PageView` - Automatic page view
- `Lead` - Main route conversions
- `Contact` - MyAd route conversions

### Google Analytics / GTM Only
- `button_click` - All button interactions
- `cta_click` - CTA-specific tracking
- `countdown_complete` - Timer completion
- `auto_redirect` - Auto-redirect tracking
- Custom `Lead` - Lead tracking for analytics
- Custom `Contact` - Contact tracking for analytics

---

## Testing Commands

### Check Events in Browser Console (Dev Mode)
All events log to console in development:
```
📊 Event Tracked: button_click { ... }
📊 Event Tracked: cta_click { ... }
📊 Event Tracked: Lead { ... }
```

### Check Facebook Pixel
```javascript
// In browser console
typeof fbq
// Should return: "function"

// Check dataLayer (if GTM enabled)
window.dataLayer
// Should return: Array with events
```

### Manually Fire Test Event
```javascript
import { trackEvent } from '@/lib/analytics';

trackEvent('test_event', {
  category: 'test',
  label: 'manual_test',
  value: 123
});
```

---

## Event Flow Diagrams

### Main Route (/) User Journey
```
User visits page
  ↓
PageView event fires
  ↓
User sees countdown timer
  ↓
User clicks "Join FREE Now" (Hero)
  → Lead event (FB)
  → button_click event (GA/GTM)
  → cta_click event (GA/GTM)
  → Redirects to Telegram

OR

Timer reaches 0
  → Lead event (FB)
  → countdown_complete event (GA/GTM)
  → auto_redirect event (GA/GTM)
  → Auto-redirects to Telegram

OR

User scrolls down
  ↓
User clicks "Get Instant Access" (Final CTA)
  → Lead event (FB)
  → button_click event (GA/GTM)
  → cta_click event (GA/GTM)
  → Redirects to Telegram
```

### MyAd Route (/myad) User Journey
```
User visits page
  ↓
PageView event fires (dedicated pixel)
  ↓
User clicks "Join Telegram" (Top)
  → Contact event (FB)
  → contact event (GA/GTM)
  → button_click event (GA/GTM)
  → cta_click event (GA/GTM)
  → Redirects to Telegram

OR

User scrolls down
  ↓
User clicks "Join Telegram" (Bottom)
  → Contact event (FB)
  → contact event (GA/GTM)
  → button_click event (GA/GTM)
  → cta_click event (GA/GTM)
  → Redirects to Telegram
```

---

## Conversion Tracking Summary

### Facebook Ads Manager
Track these conversions for campaign optimization:
- **Main Route**: Lead events (Hero CTA, Countdown, Final CTA)
- **MyAd Route**: Contact events (Top Button, Bottom Button)

### Google Analytics 4
Create conversions from these events:
- `button_click` (category: engagement)
- `cta_click` (category: conversion)
- Custom `Lead` event
- Custom `Contact` event

### Google Tag Manager
Use these events as triggers:
- `button_click` - For remarketing pixels
- `cta_click` - For conversion tracking
- `auto_redirect` - For funnel analysis
- `countdown_complete` - For engagement tracking

---

## Quick Debugging

### Event Not Firing?
1. Check browser console for errors
2. Verify event function is called
3. Check if analytics script loaded
4. Disable ad blockers
5. Check network tab for requests

### Event Firing Multiple Times?
1. Check for duplicate onClick handlers
2. Verify useEffect dependencies
3. Look for event bubbling issues
4. Check React StrictMode (causes double render in dev)

### Wrong Data in Event?
1. Console.log event parameters
2. Check variable values before tracking
3. Verify data types (string vs number)
4. Check for undefined values

---

## Event Naming Convention

### Format
`{action}_{object}` or standard event name

### Examples
- ✅ `button_click` - Action + Object
- ✅ `cta_click` - Action + Object
- ✅ `Lead` - Standard Facebook event
- ✅ `Contact` - Standard Facebook event
- ✅ `countdown_complete` - Action + Object
- ❌ `click1` - Not descriptive
- ❌ `event` - Too generic

---

## Additional Events (Available but Not Currently Used)

```typescript
// Scroll tracking
trackScrollDepth(75); // Track 75% scroll

// Time tracking
trackTimeOnPage(120); // Track 2 minutes on page

// External links
trackExternalLink('https://example.com', 'Example Link');

// Form submissions
trackFormSubmit('Contact Form', { email: '...' });

// Social shares
trackSocialShare('facebook', 'https://...');

// Video plays
trackVideoPlay('Intro Video', 0);

// Generic events
trackEvent('custom_event', {
  category: 'category',
  label: 'label',
  value: 123
});
```

To enable these, import and call them in your components!

---

## Links

- 📚 [Full Event Tracking Guide](EVENT_TRACKING.md)
- 🎯 [Route Configuration](ROUTE_CONFIGURATION.md)
- 🚀 [Quick Start](QUICK_START.md)
- 📊 [Analytics Utility](lib/analytics.ts)
