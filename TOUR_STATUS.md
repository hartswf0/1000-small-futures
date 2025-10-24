# Guided Tour - Current Status

## ✅ What's Working

### Integration Complete
- **File**: `GUIDED_TOUR.js` (315 lines)
- **Integrated into**: `thousand-tetrad.html` (line 10653)
- **Manual trigger**: Click `?` button → `▶ START TOUR`

### Features
1. **Fake cursor animation** (arrow → checkmark ✓)
2. **Minimal overlay** (280px, top-right corner)
3. **Demo mode** for each step
4. **6 steps** (cognitive load optimized)
5. **Skippable** at any point

---

## 🚫 What's NOT Working

### `thousand-tet-tut.html` (Broken Wrapper)
This file is a **separate wrapper page** that tries to:
- Load `thousand-tetrad.html` in an iframe
- Overlay tutorial instructions
- Find elements inside the iframe

**Problems**:
1. ❌ Can't find elements in iframe (cross-origin issues)
2. ❌ Two overlapping modals (z-index conflicts)
3. ❌ Tone.js audio errors (no user gesture)
4. ❌ Not collapsible or movable
5. ❌ Blocks the interface

**Solution**: **Don't use this file.** Use `thousand-tetrad.html` directly.

---

## How to Use the Tour

### Method 1: Auto-Start (First Run)
1. Open `thousand-tetrad.html` in browser
2. If first visit, tour starts after 2 seconds
3. Follow the steps

### Method 2: Manual Start
1. Open `thousand-tetrad.html`
2. Click `?` button (top-right corner)
3. Click `▶ START TOUR`
4. Tour begins immediately

### Method 3: Console
```javascript
// Clear flag and restart
localStorage.removeItem('tour.done');
GuidedTour.show(0);
```

---

## The 7 Steps

1. **Welcome** → "Watch the cursor" → START
2. **API Key** → Cursor clicks ◎ → User pastes key → I DID IT
3. **Scenario** → Cursor clicks dropdown → SHOW ME
4. **Message** → Cursor types & sends → SHOW ME
5. **Tetrad** → Cursor clicks chip → SHOW ME
6. **Grid** → Cursor right-clicks cell → SHOW ME
7. **Complete** → "You're ready!" → DONE

---

## Files Overview

### ✅ Use These
- `thousand-tetrad.html` - Main app with integrated tour
- `GUIDED_TOUR.js` - Tour script (already loaded)

### ❌ Ignore These
- `thousand-tet-tut.html` - Broken wrapper (don't use)
- `ONBOARDING_SYSTEM.js` - Old version (replaced)

---

## Testing

### Start Tour
```javascript
// In browser console on thousand-tetrad.html
GuidedTour.show(0);
```

### Check if Loaded
```javascript
console.log(window.GuidedTour); // Should show object
```

### Clear Flag
```javascript
localStorage.removeItem('tour.done');
location.reload(); // Tour will auto-start
```

---

## Troubleshooting

### Tour Doesn't Start
1. Check console for errors
2. Verify `GUIDED_TOUR.js` is loaded
3. Clear localStorage flag
4. Use manual trigger: `?` → `▶ START TOUR`

### Elements Not Found
- Tour looks for: `#cornerKey`, `#globalScenarioSelect`, `.chat-input`, `.tetrad-chip`, `.grid-cell`
- If elements don't exist yet, tour shows alert
- Wait for page to fully load

### Cursor Not Visible
- Cursor only appears during demo mode
- Click "SHOW ME" button to see cursor
- Cursor fades out after action completes

---

## Next Steps

### To Improve
1. Add pre-loaded demo content (no empty screen)
2. Better API key onboarding (direct link)
3. More visual feedback (progress bar)
4. Keyboard shortcuts (Esc to skip)

### To Remove
- Delete `thousand-tet-tut.html` (not needed)
- Delete `ONBOARDING_SYSTEM.js` (old version)

---

## Summary

**Working**: Guided tour with fake cursor in `thousand-tetrad.html`
**Access**: Click `?` → `▶ START TOUR`
**Not Working**: `thousand-tet-tut.html` wrapper (ignore it)

**The tour is ready to use. Just open `thousand-tetrad.html` and click the START TOUR button in the help menu.**
