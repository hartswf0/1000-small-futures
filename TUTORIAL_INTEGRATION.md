# Tutorial Integration Guide

## Quick Setup

Add the tutorial overlay to `thousand-medical.html`:

### Option 1: Script Tag (Recommended)

Add before closing `</body>` tag in `thousand-medical.html`:

```html
<script src="tutorial-overlay.js"></script>
```

### Option 2: Direct Launch

Users can access tutorial mode by:

```
thousand-medical.html?tutorial=start
```

Or create a shortcut link:

```html
<a href="thousand-medical.html?tutorial=start">Start Tutorial</a>
```

## Features

✓ **Exact brand styling** - Uses same colors, fonts, animations as main app  
✓ **Real interface** - Tutorial runs on actual application, not demo  
✓ **Skippable** - Users can skip anytime  
✓ **Progress tracking** - Remembers if user has seen tutorial  
✓ **Interactive** - Waits for user actions at key steps  

## Tutorial Flow

1. Welcome screen
2. Grid introduction
3. Chat interface
4. First scene creation
5. Entity exploration
6. Cell click interaction
7. Branch story
8. Special commands
9. Completion

## Customization

Edit `tutorial-overlay.js` to:

- Modify step content
- Change target selectors
- Adjust timing
- Add/remove steps

## Disable Tutorial

Users who've completed tutorial won't see it again (localStorage).

To reset:
```javascript
localStorage.removeItem('thousand_tutorial_shown');
```

## Styling

All styles inline in `tutorial-overlay.js` using exact brand values:

- Colors: `#03180c` (bg), `#56ff9f` (accent), `#aef3c1` (text)
- Font: `Courier New` monospace
- Transitions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Borders: `#1b6e3e`, `#0c3a23`
