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
    telegramLink: 'https://telegram.me/+w0P8GurFKHVmMjY1',
    fbPixelId: '570823988425735',
    routeName: 'Main Landing Page',
  },
  '/myad': {
    telegramLink: process.env.NEXT_PUBLIC_MYAD_TELEGRAM_LINK || 'https://t.me/+pkE7SAaUqEdjOTM1',
    fbPixelId: '570823988425735',
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
