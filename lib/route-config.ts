/**
 * Route-specific configuration
 * Each route can have its own Telegram link and Facebook Pixel ID
 */

export interface RouteConfig {
  telegramLink: string;
  fbPixelId: string;
  routeName: string;
}

export const ROUTE_CONFIGS: Record<string, RouteConfig> = {
  '/': {
    telegramLink: process.env.NEXT_PUBLIC_TELEGRAM_LINK || 'https://t.me/+KIHM83XCLoMyNjU1',
    fbPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '641640395326380',
    routeName: 'Main Landing Page',
  },
  '/myad': {
    telegramLink: process.env.NEXT_PUBLIC_MYAD_TELEGRAM_LINK || 'https://t.me/+pkE7SAaUqEdjOTM1',
    fbPixelId: process.env.NEXT_PUBLIC_MYAD_FB_PIXEL_ID || '1507008270601589',
    routeName: 'MyAd Landing Page',
  },
};

/**
 * Get configuration for a specific route
 */
export function getRouteConfig(route: string): RouteConfig {
  return ROUTE_CONFIGS[route] || ROUTE_CONFIGS['/'];
}

/**
 * Add a new route configuration
 * Example usage in .env.local:
 *
 * # Premium Route (/premium)
 * NEXT_PUBLIC_PREMIUM_TELEGRAM_LINK=https://t.me/your-premium-link
 * NEXT_PUBLIC_PREMIUM_FB_PIXEL_ID=your-premium-pixel-id
 */
export function addRouteConfig(route: string, config: RouteConfig): void {
  ROUTE_CONFIGS[route] = config;
}
