# Flip Clock — Specification

## 1. Project Overview
- **Type**: React web application
- **Core functionality**: A vintage mechanical flip clock displaying hours, minutes, and seconds with authentic card-flip animations
- **Target users**: Anyone appreciating retro design and smooth animations

## 2. Visual & Rendering Specification

### Scene Setup
- Full-page dark background with subtle noise texture
- Clock centered vertically and horizontally
- Ambient glow effect behind the clock

### Materials & Effects
- **Card style**: 3D-flipping cards with metallic sheen finish
- **Color palette**:
  - Background: Deep charcoal (#1a1a1a)
  - Card front: Warm cream (#f5f0e6) with dark text (#2a2a2a)
  - Card back: Slightly darker cream (#e8e0d0)
  - Accent: Copper/bronze metallic (#b87333)
- **Typography**: "Bebas Neue" for digits (bold, condensed), "Courier New" for labels

### Post-Processing / Effects
- Subtle drop shadow on cards
- Ambient glow (copper tint) behind clock body
- Smooth ease-in-out for flip animations

### Layout
- Clock housed in a rounded rectangle frame with metallic border
- Three flip units: HH : MM : SS
- Colon separators with pulsing animation
- "HOURS", "MINUTES", "SECONDS" labels below each unit

## 3. Interaction Specification

### User Controls
- None required — purely a display component
- Auto-updates every second in sync with system time

### Animations
- **Flip animation**: Card rotates on X-axis (180deg) over 600ms with ease-in-out
- Upper card flips down to reveal new digit
- Lower card (next digit) flips up simultaneously
- Colon separators pulse every second

## 4. Component Structure

### `<FlipClock />`
Main container component
- States: none (receives time from useDate)

### `<FlipUnit value={digit} />`
Single digit flip unit (0-9)
- Props: `value` (current digit), `flipping` (boolean)
- Uses two card halves (top and bottom) for flip effect

### `<FlipCard digit={n} position="top|bottom" />`
Individual card half
- Props: `digit`, `position`
- Renders the card face with appropriate clipping

### `<ColonSeparator />`
Animated colon between time units
- Pulsing opacity animation

## 5. Acceptance Criteria

1. Clock displays current system time (HH:MM:SS, 12-hour format with AM/PM)
2. Each second change triggers a smooth 3D flip animation
3. Cards have visible depth and metallic finish
4. Colon separators pulse on each second tick
5. No console errors or warnings
6. Responsive — works on desktop and tablet viewports
7. Frame has visible metallic/copper border styling
