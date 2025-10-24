# Guided Tour - Quick Start

## Current Status

### ✅ Tour is Loaded
- File: `GUIDED_TOUR.js`
- Location: `thousand-tetrad.html` line 10663
- Status: **Ready to use**

### How to Start Tour

#### Method 1: First-Time Auto-Start
1. Clear the completion flag:
   ```javascript
   localStorage.removeItem('tour.done');
   ```
2. Reload page
3. Tour starts after 2 seconds

#### Method 2: Manual Trigger (Recommended)
1. Open `thousand-tetrad.html`
2. Click `?` button (top-right corner)
3. Click `▶ START TOUR`
4. Tour starts immediately

#### Method 3: Console
```javascript
// Start tour manually
GuidedTour.show(0);

// Check if loaded
console.log(window.GuidedTour);
```

---

## Console Messages Explained

### ✅ Normal Messages (Not Errors)

```
[TUTORIAL] Script loaded
[TUTORIAL] URL params: 
[TUTORIAL] Should start: false
[TUTORIAL] Not starting - no tutorial parameter
```
**What this means**: `tutorial-system.js` checked for `?tutorial=start` URL parameter, didn't find it, so it didn't start. **This is correct behavior.**

```
Tone.min.js:1 The AudioContext was not allowed to start...
```
**What this means**: Browser security prevents audio from auto-playing. Audio will work after first user interaction (click). **This is a warning, not an error.**

```
[TETRAD] Unknown format: Object
```
**What this means**: Some data format issue in tetrad processing. **Does not affect tour.**

### ✅ Tour Messages (What You Should See)

```
[GUIDED TOUR] Initializing...
[GUIDED TOUR] Tour done flag: null
[GUIDED TOUR] Adding styles and cursor...
[GUIDED TOUR] Will start in 2 seconds...
[GUIDED TOUR] Starting now!
```

**If you DON'T see these**, the tour script isn't loading. Check:
1. Is `GUIDED_TOUR.js` in the same folder as `thousand-tetrad.html`?
2. Open browser console and type: `console.log(window.GuidedTour)`
3. Should show an object with methods

---

## Two Tutorial Systems

### 1. Grid Tutorial (`tutorial-system.js`)
- **Purpose**: Teaches LEGOS grid system
- **How to start**: Add `?tutorial=start` to URL
- **Example**: `thousand-tetrad.html?tutorial=start`
- **What it does**: Draws letters on grid, teaches via chat

### 2. Guided Tour (`GUIDED_TOUR.js`)
- **Purpose**: Teaches overall interface
- **How to start**: Click `?` → `▶ START TOUR`
- **What it does**: Fake cursor, overlay, demo mode

**Both can coexist.** They don't interfere with each other.

---

## Troubleshooting

### Tour Doesn't Start

**Check 1**: Is it already completed?
```javascript
localStorage.getItem('tour.done') // Should be null
```

**Fix**: Clear flag
```javascript
localStorage.removeItem('tour.done');
location.reload();
```

**Check 2**: Is script loaded?
```javascript
console.log(window.GuidedTour); // Should show object
```

**Fix**: Verify `GUIDED_TOUR.js` exists in folder

**Check 3**: Console errors?
Open DevTools → Console → Look for red errors

### Tour Button Not Visible

**Check**: Help menu
1. Click `?` button (top-right)
2. Menu should show:
   - ▶ START TOUR (green)
   - HELP OVERVIEW
   - TOGGLE THEME
   - FULLSCREEN MODE
   - RESET ALL CHATS

**If missing**: The edit to `thousand-tetrad.html` didn't save

---

## Quick Test

### 1. Open Console
Press F12 or Cmd+Option+I

### 2. Run These Commands
```javascript
// Check if tour loaded
console.log('Tour loaded:', !!window.GuidedTour);

// Check completion flag
console.log('Tour done:', localStorage.getItem('tour.done'));

// Start tour manually
GuidedTour.show(0);
```

### 3. Expected Result
- Overlay appears in top-right corner
- Shows "STEP 1/7 - Welcome to Thousand Tetrad"
- Has [SKIP] and [START] buttons

---

## Summary

**The tour is ready.** The console messages you're seeing are normal:
- `tutorial-system.js` checked for URL param (didn't find it, correctly didn't start)
- Tone.js audio warning (browser security, not an error)
- Tetrad format messages (unrelated to tour)

**To use tour**: Click `?` → `▶ START TOUR`

**If tour doesn't appear**: Check console for `[GUIDED TOUR]` messages and verify `window.GuidedTour` exists.
