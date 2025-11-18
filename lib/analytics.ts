/**
 * Analytics & Event Tracking Utility
 * Supports: Facebook Pixel, Google Analytics, Google Tag Manager
 */

export interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Track event across all analytics platforms
 */
export function trackEvent(
  eventName: string,
  params?: EventParams
): void {
  // Track in Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }

  // Track in Google Analytics (GA4)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }

  // Track in Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event Tracked:', eventName, params);
  }
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }

  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'pageview',
      page: {
        path: pagePath,
        title: pageTitle,
      },
    });
  }
}

/**
 * Track button click
 */
export function trackButtonClick(
  buttonName: string,
  buttonLocation: string,
  destinationUrl?: string
): void {
  trackEvent('button_click', {
    category: 'engagement',
    label: buttonName,
    button_location: buttonLocation,
    destination_url: destinationUrl,
  });
}

/**
 * Track CTA click (Call-to-Action)
 */
export function trackCTAClick(ctaName: string, ctaType: string = 'telegram'): void {
  trackEvent('cta_click', {
    category: 'conversion',
    label: ctaName,
    cta_type: ctaType,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, formData?: any): void {
  trackEvent('form_submit', {
    category: 'conversion',
    label: formName,
    form_data: formData,
  });
}

/**
 * Track lead generation
 */
export function trackLead(leadSource: string, leadValue?: number): void {
  trackEvent('Lead', {
    category: 'conversion',
    label: leadSource,
    value: leadValue,
    currency: 'INR',
  });
}

/**
 * Track contact event
 */
export function trackContact(contactMethod: string, contactValue?: string): void {
  trackEvent('Contact', {
    category: 'conversion',
    label: contactMethod,
    contact_value: contactValue,
  });
}

/**
 * Track countdown timer completion
 */
export function trackCountdownComplete(redirectUrl: string): void {
  trackEvent('countdown_complete', {
    category: 'engagement',
    label: 'timer_redirect',
    redirect_url: redirectUrl,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', {
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage(seconds: number): void {
  trackEvent('time_on_page', {
    category: 'engagement',
    label: `${seconds}s`,
    value: seconds,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, linkText?: string): void {
  trackEvent('external_link', {
    category: 'outbound',
    label: linkText || url,
    url: url,
  });
}

/**
 * Track video play (if you add videos later)
 */
export function trackVideoPlay(videoName: string, videoPosition: number = 0): void {
  trackEvent('video_play', {
    category: 'engagement',
    label: videoName,
    video_position: videoPosition,
  });
}

/**
 * Track social share
 */
export function trackSocialShare(platform: string, contentUrl?: string): void {
  trackEvent('social_share', {
    category: 'engagement',
    label: platform,
    content_url: contentUrl,
  });
}

/**
 * Initialize Google Tag Manager
 */
export function initGTM(gtmId: string): void {
  if (typeof window === 'undefined') return;

  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}

/**
 * Initialize Google Analytics
 */
export function initGA(gaId: string): void {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', gaId);
}

/**
 * Track user engagement score
 */
export function trackEngagementScore(score: number, actions: string[]): void {
  trackEvent('engagement_score', {
    category: 'analytics',
    value: score,
    actions: actions.join(','),
  });
}
