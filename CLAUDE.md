# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture

**Flip Clock** - A vintage mechanical flip clock built with React and Vite.

### Component Structure

```
src/components/
├── FlipClock.jsx    # Main container, manages time state and 12/24H toggle
├── FlipUnit.jsx     # Single time unit (hours/minutes/seconds) with flip animation logic
├── FlipCard.jsx     # Individual digit card with 3D flip animation
├── ColonSeparator.jsx  # Animated colon between time units
└── ToggleSwitch.jsx    # 12H/24H mode toggle
```

### Key Implementation Details

- Time updates every 1 second via `setInterval` in `FlipClock`
- Flip animation uses CSS 3D transforms (`rotateX`) with 600ms duration
- `FlipUnit` tracks `flipping` state and passes it to `FlipCard` to trigger animation
- 12H/24H mode controlled by `is24Hour` state in `FlipClock`
- AM/PM indicator rendered vertically when in 12H mode
