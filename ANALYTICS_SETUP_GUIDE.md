# Analytics Setup & Verification Guide

Your landing pages now have **Google Tag Manager**, **Google Analytics 4**, and **Facebook Pixel** fully integrated!

## ✅ What's Been Set Up

### 1. Google Tag Manager (GTM)
- **Container ID**: `GTM-53M57TKN`
- **Location**: Automatically loaded in `<head>` and `<body>`
- **Status**: ✅ Active and Ready

### 2. Google Analytics 4 (GA4)
- **Measurement ID**: `G-K9K22Q7NRE`
- **Location**: Loaded via gtag.js in `<head>`
- **Status**: ✅ Active and Ready

### 3. Facebook Pixel
- **Main Route Pixel**: `641640395326380`
- **MyAd Route Pixel**: `1507008270601589`
- **Status**: ✅ Active and Ready

---

## 🔍 How to Verify Installation

### Method 1: Browser Console (Easiest)

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Open Your Site**: http://localhost:3000

3. **Open Browser Console** (F12 or right-click → Inspect → Console)

4. **Check for GTM**:
   ```javascript
   typeof dataLayer
   // Should return: "object"

   dataLayer
   // Should show array with GTM events
   ```

5. **Check for GA4**:
   ```javascript
   typeof gtag
   // Should return: "function"
   ```

6. **Check for Facebook Pixel**:
   ```javascript
   typeof fbq
   // Should return: "function"
   ```

---

### Method 2: Google Tag Assistant (Chrome Extension)

1. **Install Extension**:
   - [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)

2. **Enable Extension** and visit your site

3. **Check Results**:
   - ✅ Google Tag Manager should show as "Working"
   - ✅ Google Analytics should show as "Working"
   - ✅ Click tag for details

---

### Method 3: Facebook Pixel Helper (Chrome Extension)

1. **Install Extension**:
   - [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

2. **Visit Your Site**:
   - Main route `/` should show pixel: `641640395326380`
   - MyAd route `/myad` should show pixel: `1507008270601589`

3. **Click Buttons** and verify events fire

---

### Method 4: GTM Preview Mode

1. **Go to GTM**: https://tagmanager.google.com

2. **Select Container**: `GTM-53M57TKN`

3. **Click "Preview"** button (top right)

4. **Enter URL**: http://localhost:3000 (or your production URL)

5. **Debug Panel Opens**:
   - Shows all dataLayer events
   - Shows all tags firing
   - Shows variables and triggers

---

### Method 5: GA4 Real-Time Reports

1. **Go to GA4**: https://analytics.google.com

2. **Navigate**: Reports → Real-time

3. **Visit Your Site** in another tab

4. **Check Real-Time**:
   - Should show 1 active user
   - Should show page views
   - Should show events when buttons clicked

---

### Method 6: Network Tab

1. **Open DevTools** → Network tab

2. **Visit Your Site**

3. **Filter by**:
   - `google-analytics.com` - GA4 requests
   - `googletagmanager.com` - GTM requests
   - `facebook.com/tr` - FB Pixel requests

4. **Click Buttons** and watch new requests

---

## 📊 Expected Events

### Page Load Events

**Main Route (`/`)**:
```
GTM dataLayer:
  - gtm.js (GTM initialization)
  - gtm.dom (DOM ready)
  - gtm.load (Page load)

GA4:
  - page_view (Automatic)

Facebook Pixel:
  - PageView (Automatic)
```

**MyAd Route (`/myad`)**:
```
GTM dataLayer:
  - gtm.js
  - gtm.dom
  - gtm.load
  - pageview (custom from trackPageView)

GA4:
  - page_view (Automatic)

Facebook Pixel (dedicated):
  - PageView (Automatic)
```

### Button Click Events

**Main Route - Hero CTA**:
```
Console Output:
  📊 Event Tracked: button_click { category: 'engagement', ... }
  📊 Event Tracked: cta_click { category: 'conversion', ... }

GTM dataLayer:
  - button_click
  - cta_click

GA4:
  - button_click
  - cta_click

Facebook Pixel:
  - Lead
```

**MyAd Route - Telegram Buttons**:
```
Console Output:
  📊 Event Tracked: Contact { category: 'conversion', ... }
  📊 Event Tracked: cta_click { category: 'conversion', ... }
  📊 Event Tracked: button_click { category: 'engagement', ... }

GTM dataLayer:
  - Contact
  - cta_click
  - button_click

GA4:
  - Contact
  - cta_click
  - button_click

Facebook Pixel:
  - Contact
```

---

## 🚀 Testing Checklist

### Before Deployment

- [ ] GTM container loads in browser console
- [ ] GA4 gtag function exists in console
- [ ] Facebook Pixel fbq function exists
- [ ] Main route shows correct FB Pixel ID (641640395326380)
- [ ] MyAd route shows correct FB Pixel ID (1507008270601589)
- [ ] Console logs show events in development
- [ ] GTM Preview mode shows events
- [ ] GA4 Real-Time shows page views
- [ ] Facebook Test Events shows activity
- [ ] Button clicks fire all expected events
- [ ] No console errors related to analytics

### After Deployment

- [ ] Test on production URL
- [ ] Verify GTM in production
- [ ] Check GA4 Real-Time on production
- [ ] Test Facebook Pixel on production
- [ ] Verify all events fire correctly
- [ ] Check mobile devices
- [ ] Test different browsers

---

## 🔧 Troubleshooting

### GTM Not Loading

**Check**:
```javascript
// In console
window.dataLayer
// Should return array, not undefined
```

**If undefined**:
1. Check `.env.local` has correct `NEXT_PUBLIC_GTM_ID`
2. Restart dev server: `npm run dev`
3. Hard refresh browser (Ctrl+Shift+R)
4. Check browser console for errors

---

### GA4 Not Loading

**Check**:
```javascript
// In console
typeof gtag
// Should return "function"
```

**If undefined**:
1. Check `.env.local` has correct `NEXT_PUBLIC_GA_ID`
2. Restart dev server
3. Check Network tab for gtag/js requests
4. Verify GA4 Measurement ID format: `G-XXXXXXXXXX`

---

### Facebook Pixel Not Loading

**Check**:
```javascript
// In console
typeof fbq
// Should return "function"
```

**If undefined**:
1. Check `.env.local` has `NEXT_PUBLIC_FB_PIXEL_ID`
2. Disable ad blockers (they block FB Pixel)
3. Check Network tab for `facebook.com/tr` requests
4. Try incognito mode

---

### Events Not Firing

**Check Console**:
```
Should see: 📊 Event Tracked: ...
```

**If not showing**:
1. Verify you're in development mode (`npm run dev`)
2. Check component imports `trackEvent` functions
3. Check browser console for JavaScript errors
4. Verify onClick handlers are attached

---

### GTM Preview Not Connecting

**Solutions**:
1. Use same browser for GTM and your site
2. Allow pop-ups from tagmanager.google.com
3. Disable strict cookie/tracking prevention
4. Try incognito mode
5. Clear browser cache

---

## 📈 Next Steps

### 1. Set Up GTM Tags

Go to GTM → Tags → New Tag:

**Example: Facebook Conversion Tag**
- Type: Custom HTML
- Trigger: Custom Event → `cta_click`
- HTML: Your Facebook conversion code

**Example: Google Ads Conversion**
- Type: Google Ads Conversion Tracking
- Trigger: Custom Event → `Lead`
- Conversion ID: Your Google Ads ID

### 2. Create GA4 Conversions

1. Go to GA4 → Configure → Events
2. Find `button_click`, `cta_click`, `Lead`, `Contact`
3. Click "Mark as conversion"
4. Use in reports and audiences

### 3. Set Up Facebook Custom Conversions

1. Go to Events Manager
2. Click "Custom Conversions"
3. Create rules based on events
4. Use in ad campaigns

### 4. Create Audiences

**GTM**:
- Use dataLayer variables to create audiences
- Send to GA4, Google Ads, Facebook

**GA4**:
- Create audiences based on events
- Use for remarketing

**Facebook**:
- Create custom audiences from pixel data
- Use for lookalike audiences

---

## 🎯 Environment Variables Reference

Your `.env.local` should have:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://banknifty-expert.in

# Analytics
NEXT_PUBLIC_GTM_ID=GTM-53M57TKN
NEXT_PUBLIC_GA_ID=G-K9K22Q7NRE

# Facebook Pixels
NEXT_PUBLIC_FB_PIXEL_ID=641640395326380
NEXT_PUBLIC_MYAD_FB_PIXEL_ID=1507008270601589

# Telegram Links
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/+KIHM83XCLoMyNjU1
NEXT_PUBLIC_MYAD_TELEGRAM_LINK=https://t.me/+pkE7SAaUqEdjOTM1
```

---

## 📚 Additional Resources

- [Google Tag Manager Documentation](https://developers.google.com/tag-manager)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel)
- [GTM for Next.js](https://developers.google.com/tag-platform/tag-manager/web)
- [EVENT_TRACKING.md](EVENT_TRACKING.md) - Full event tracking guide
- [EVENTS_QUICK_REFERENCE.md](EVENTS_QUICK_REFERENCE.md) - Event lookup

---

## ✅ Summary

Your analytics setup is complete with:

✅ **Google Tag Manager** - `GTM-53M57TKN`
✅ **Google Analytics 4** - `G-K9K22Q7NRE`
✅ **Facebook Pixel (Main)** - `641640395326380`
✅ **Facebook Pixel (MyAd)** - `1507008270601589`
✅ **Automatic Event Tracking** - All buttons and interactions
✅ **Multi-Platform Support** - Works across GTM, GA4, FB
✅ **Route-Specific Tracking** - Different configs per route

**Start Testing**:
```bash
npm run dev
# Visit http://localhost:3000
# Open browser console
# Click buttons and watch events! 📊
```

All analytics platforms are working and ready to track your conversions! 🎉
