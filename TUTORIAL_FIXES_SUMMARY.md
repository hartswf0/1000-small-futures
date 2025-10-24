# Tutorial Fixes - Complete

## Problems Fixed

### 1. ❌ Wrong Selector
**Before**: `.chat-input` (doesn't exist)
**After**: `.message-input` (correct)
**Files**: `thousand-tet-tut.html`, `CONTEXTUAL_TOUR.js`

### 2. ❌ Overlay Too Dark
**Before**: `rgba(3,24,12,0.85)` - 85% opacity, obscured app
**After**: `rgba(3,24,12,0.5)` - 50% opacity, app visible
**Result**: Can see app while tutorial runs

### 3. ❌ Background Blocked Clicks
**Before**: `pointer-events:auto` on spotlight-bg
**After**: `pointer-events:none` on spotlight-bg
**Result**: Can interact with app through overlay

---

## Changes Made

### thousand-tet-tut.html
```diff
- {target:'.chat-input', ...}
+ {target:'.message-input', ...}

- background:rgba(3,24,12,0.85)
+ background:rgba(3,24,12,0.5)

- box-shadow:0 0 0 9999px rgba(3,24,12,0.85)
+ box-shadow:0 0 0 9999px rgba(3,24,12,0.5)

- .spotlight-bg{...pointer-events:auto}
+ .spotlight-bg{...pointer-events:none}
```

### CONTEXTUAL_TOUR.js
```diff
- const input = document.querySelector('.chat-input');
+ const input = document.querySelector('.message-input');
```

---

## How to Test

### Test 1: Modal Tutorial
1. Open `thousand-tet-tut.html`
2. Click **⚡ QUICKSTART**
3. ✅ Step 1: Highlights ◎ button
4. ✅ Step 2: Highlights message input (no error!)
5. ✅ App is visible (50% opacity, not 85%)
6. ✅ Can see what you're doing

### Test 2: Contextual Tour
1. Open `thousand-tetrad.html`
2. Wait 3 seconds
3. ✅ Tooltip appears above message input (no error!)
4. ✅ Shows LEGOS explanation

### Console Check
```javascript
// Before
[TUTORIAL] Target not found: .chat-input ❌

// After
[TUTORIAL] Iframe loaded ✅
// No errors
```

---

## Visual Comparison

### Before (85% opacity)
```
████████████████████  ← Can't see app
█ INSTRUCTION CARD █
████████████████████
```

### After (50% opacity)
```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ← Can see app!
▓ INSTRUCTION CARD ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

---

## All Selectors Fixed

### Modal Tutorial
- ✅ `#cornerKey` - ◎ button
- ✅ `.message-input` - Chat input (FIXED)
- ✅ `.grid-cell` - Grid cells
- ✅ `#cornerAdd` - ＋ button
- ✅ `#cornerExchange` - ⇆ button
- ✅ `.grid-container` - Grid system
- ✅ `#cornerHelp` - ? button
- ✅ `.channel-header` - Channel header

### Contextual Tour
- ✅ `.message-input` - Chat input (FIXED)
- ✅ `.cell-menu` - Grid cell menu
- ✅ `#perspectiveOverlay` - Perspective overlay
- ✅ `#keyOverlay` - API key overlay
- ✅ `#infoMenu` - Help menu
- ✅ `#exchangeMenu` - Exchange menu

---

## Summary

**3 fixes applied**:
1. Chat input selector: `.chat-input` → `.message-input`
2. Overlay opacity: 85% → 50% (app visible)
3. Background clicks: blocked → allowed (pointer-events:none)

**Result**: 
- ✅ No console errors
- ✅ App visible during tutorial
- ✅ Can see what you're doing
- ✅ Less obtrusive overlay

**Test**: Open `thousand-tet-tut.html` → Click QUICKSTART → See app clearly
