# Countdown Timer Component

## Overview

A live countdown timer component has been added to create urgency and engagement on the landing page, similar to the reference design.

## Features

✅ **Real-time Countdown** - Counts down every second
✅ **Auto-Reset** - Automatically resets when reaching 0
✅ **Customizable** - Easy to configure duration and title
✅ **Responsive Design** - Works perfectly on all devices
✅ **Animated** - Pulsing effect with gradient text
✅ **Glass Morphism** - Modern blurred background effect

## Location

The countdown timer is placed in the Hero Section, between the main CTA button and the live statistics counter.

## Component Details

### File: `components/CountdownTimer.tsx`

```typescript
interface CountdownTimerProps {
  initialSeconds?: number;  // Default: 30
  title?: string;           // Default: "Next Signal Drop In"
  redirectUrl?: string;     // URL to redirect when timer hits 0
}
```

### Design Features

1. **Black background** with 40% opacity
2. **Gold border** with 30% opacity
3. **Backdrop blur** for glass effect
4. **Shadow effect** with gold glow
5. **Large number display** (text-6xl) with gradient
6. **Pulsing animation** on the number
7. **Uppercase styling** for title and "SECONDS" label

### Visual Elements

- **Title**: Gold color, bold, uppercase, tracking-wide
- **Number**: Cyan to gold gradient, 6xl size, pulsing animation
- **Label**: White with 70% opacity, small uppercase text

## Usage

### Basic Usage
```tsx
<CountdownTimer />
```

### Custom Configuration
```tsx
<CountdownTimer
  initialSeconds={30}
  title="Join Before It's Too Late"
  redirectUrl="https://t.me/your-channel"
/>
```

### In HeroSection
The timer is already integrated in the Hero Section:

```tsx
{/* Countdown Timer */}
<CountdownTimer
  initialSeconds={30}
  title="Next Signal Drop In"
  redirectUrl={telegramLink}
/>
```

**Important**: The `redirectUrl` prop is required for the auto-redirect feature to work.

## Customization

### Change Duration
Edit the `initialSeconds` prop:
```tsx
<CountdownTimer initialSeconds={300} /> // 5 minutes
```

### Change Title
Edit the `title` prop:
```tsx
<CountdownTimer title="Next Free Signal In" />
```

### Modify Styles
Edit `components/CountdownTimer.tsx` and update the Tailwind classes:

```tsx
// Background
className="bg-black/40 backdrop-blur-md border border-gold/30"

// Number color
className="text-cyan bg-gradient-to-br from-cyan to-gold"

// Title color
className="text-gold"
```

## Animation Details

### Pulse Effect
The countdown number has a pulsing animation:
```css
animate-pulse
```

This creates a subtle breathing effect that draws attention.

### Gradient Background
Uses Tailwind's gradient utilities:
```css
bg-gradient-to-br from-cyan to-gold
bg-clip-text text-transparent
```

## Behavior

1. **On Load**: Timer starts at 30 seconds
2. **Every Second**: Number decrements by 1
3. **At Zero**: Automatically redirects to Telegram channel
4. **Facebook Pixel**: Tracks 'Lead' event before redirect
5. **One-Time Action**: After redirect, user joins the Telegram channel

## Performance

- ✅ Uses React hooks (`useState`, `useEffect`)
- ✅ Proper cleanup with `clearInterval`
- ✅ Client-side only (`'use client'`)
- ✅ Minimal re-renders
- ✅ No memory leaks

## Responsive Design

The timer is fully responsive:

- **Mobile**: Full width with proper padding
- **Tablet**: Max width container
- **Desktop**: Centered with max width

## SEO Impact

The timer is client-side rendered and doesn't affect SEO as it's purely decorative and creates urgency for user engagement.

## Accessibility

- ✅ Semantic HTML structure
- ✅ High contrast text
- ✅ Large, readable numbers
- ✅ Clear labels

## Integration Points

The timer is currently integrated in:
1. **HeroSection.tsx** (line 75)

You can also add it to:
- Before the urgency strip
- In the final CTA section
- As a floating element

## Example: Multiple Timers

```tsx
{/* Different timers for different purposes */}
<CountdownTimer initialSeconds={60} title="Next Signal Drop In" />
<CountdownTimer initialSeconds={300} title="Offer Expires In" />
<CountdownTimer initialSeconds={30} title="Join Before Spots Fill" />
```

## Browser Compatibility

✅ Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Testing

To test the timer:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and watch the countdown in action.

## Future Enhancements

Potential improvements:
- Add hours and minutes display for longer countdowns
- Add sound/notification when timer reaches zero
- Connect to real-time signal drops from backend
- Add pause/resume functionality
- Add different timer styles (circular, flip clock, etc.)

---

**Timer successfully integrated!** ⏱️

The countdown creates urgency and encourages immediate action, which can significantly improve conversion rates on your landing page.
