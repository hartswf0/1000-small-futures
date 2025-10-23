# Thousand Small Futures - Interactive Tutorial Specification

## Overview

Create `thousands-tutorial.html` - a beautiful, beginner-friendly guided experience teaching all features.

## Key Requirements

✅ **Standalone HTML file** - All CSS/JS inline  
✅ **Common interface** - Uses grid + chat like main app  
✅ **Drunk grandma proof** - Crystal clear, simple language  
✅ **Skippable** - Can exit tutorial anytime  
✅ **First-class UX** - Smooth animations, polish, delight  
✅ **Interactive tooltips** - Highlights + pointers  
✅ **Complete workflow** - Setup → Transform → Chat → Branch → Tetrad → Cultural

## Tutorial Flow (12 Steps)

### 1. Welcome Screen
- Beautiful gradient title
- "Start Tutorial" (primary) or "Skip & Explore" (secondary)
- ~5 minute estimate

### 2. Meet Your Grid
- Highlight 9×9 grid
- "This is your narrative canvas"
- Spotlight effect on grid

### 3. The Chat Interface
- Highlight chat panel
- "Bring your story to life here"
- Show command syntax (/)

### 4. Create First Scene
- Prompt user: "A brave knight meets a wise dragon"
- Wait for user to type and press Enter
- Validate input matches pattern

### 5. Watch the Magic
- Simulate LEGOS entity generation
- Animate cells filling with symbols
- Show knight 🗡️, dragon 🐉, cave 🏔️

### 6. Explore a Cell
- Highlight cell with entity
- "Click to see its perspective"
- Wait for user click

### 7. Entity Perspective
- Show overlay with entity details
- Perspective text
- Relations
- Personality traits

### 8. Branch the Story
- Prompt: "A mysterious wizard appears"
- Wait for input
- Add wizard 🧙 to grid

### 9. Special Commands
- Show command palette:
  - `/cultural spawn` - Dynamics
  - `/perspective` - Analyze
  - `/tetrad` - Deep breakdown
  - `/compare` - Diffractive analysis

### 10. Tetrad Analysis
- Prompt: `/tetrad`
- Show McLuhan's four questions:
  - Enhances?
  - Makes obsolete?
  - Retrieves?
  - Reverses?
- Beautiful visualization

### 11. Cultural Dynamics
- Prompt: `/cultural spawn`
- Show agents animating
- Explain rebellion/cop/citizen
- Show BDI reasoning in overlay

### 12. Completion
- Confetti celebration 🎉
- "You're Ready!"
- "Start Creating" button
- Achievement unlocked feel

## UI Components

### Tutorial Overlay
```css
backdrop-filter: blur(8px)
background: rgba(0,0,0,0.85)
z-index: 10000
```

### Spotlight
```css
box-shadow: 0 0 0 9999px rgba(0,0,0,0.85)
border: 3px solid accent
glow effect
```

### Step Card
```css
background: gradient
border-radius: 16px
padding: 24px
max-width: 400px
slide-in animation
```

### Progress Bar
```css
Fixed top
Gradient fill
Smooth transitions
```

### Pointer Arrow
```css
Animated bounce
Points to target element
Pulse glow
```

## Animations

- **Fade in**: Overlay appears
- **Slide up**: Welcome screen
- **Spotlight**: Smooth transition between highlights
- **Bounce**: Pointer arrow
- **Confetti**: Celebration on completion
- **Message slide**: Chat messages animate in
- **Cell pulse**: Grid cells when populated

## Interactions

### Wait for Input
- Monitor chat input
- Pattern match expected text
- Auto-advance when complete
- Show "Great!" feedback

### Wait for Click
- Monitor click on target
- Highlight clickable element
- Proceed on successful click

### Auto-Advance
- "Next" button for passive steps
- "Back" button (except step 1)
- "Skip Tutorial" always visible

## Mobile Responsive

- Stack grid above chat on mobile
- Full-width tutorial cards
- Touch-friendly buttons
- No hover effects, use taps

## Example Messages

**System:**
```
👋 Welcome! I'm here to help you create narrative simulations.

💬 Type the prompt above and press Enter!

✨ Your scene appeared on the grid!

🎭 Entity: The Brave Knight
Perspective: "I seek glory through honorable deeds..."

🌟 Add another element to your story!

💡 Commands start with / and unlock special powers!

⚡ Bring your scene to life with /cultural spawn!
```

**User (simulated):**
```
A brave knight meets a wise dragon in a mountain cave

A mysterious wizard appears offering a magical sword

/tetrad

/cultural spawn
```

## Accessibility

- High contrast colors
- Large touch targets (48px min)
- Clear focus states
- Keyboard navigation
- Screen reader friendly

## Performance

- Lightweight (< 100KB)
- No external dependencies
- Fast load time
- Smooth 60fps animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari
- Mobile Chrome
- Progressive enhancement

## Implementation Notes

The actual HTML file should be ~1500 lines including:
- Inline CSS (~400 lines)
- Inline JavaScript (~800 lines)
- HTML structure (~300 lines)

All self-contained, no external resources needed.
