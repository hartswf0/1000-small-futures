# Contextual Tour - Testing Guide

## Integration Complete

**File**: `CONTEXTUAL_TOUR.js`
**Added to**: `thousand-tetrad.html` line 10666
**Status**: ✅ Ready to test

---

## How to Test

### Test 1: Chat Input Tooltip
1. Open `thousand-tetrad.html` in browser
2. Wait 3 seconds
3. ✅ **Expected**: Tooltip appears above chat input
4. **Shows**: "Send a Message - Use LEGOS: Location, Entity, Goal..."
5. Click "GOT IT" to dismiss

### Test 2: Grid Cell Menu Tooltip
1. Send a message to populate grid
2. Click any grid cell with an entity
3. ✅ **Expected**: Cell menu appears
4. After 300ms, tooltip appears to the left
5. **Shows**: "Grid Cell Menu - Actions for this entity..."
6. Click "GOT IT" to dismiss

### Test 3: Perspective Overlay Tooltip
1. Click grid cell
2. Click "RUN ELEMENT PERSPECTIVE" button
3. ✅ **Expected**: Perspective overlay opens
4. After 300ms, tooltip appears at top
5. **Shows**: "Perspective Analysis - Shows emotional state..."
6. Click "GOT IT" to dismiss

### Test 4: Tooltips Only Show Once
1. Dismiss chat input tooltip
2. Reload page
3. ✅ **Expected**: Chat input tooltip does NOT reappear
4. Other tooltips still show on first trigger

---

## Console Commands

### Check if Loaded
```javascript
console.log(window.ContextualTour);
// Should show object with methods
```

### Check What's Been Shown
```javascript
console.log(ContextualTour.shown);
// Shows which tooltips have been dismissed
```

### Reset All Tooltips
```javascript
ContextualTour.reset();
location.reload();
// All tooltips will show again
```

### Manually Trigger Tooltip
```javascript
// Show chat input tooltip
ContextualTour.showChatInputTooltip();
```

---

## Console Messages

### Normal Operation
```
[CONTEXTUAL TOUR] Script loaded
[CONTEXTUAL TOUR] Initializing...
[CONTEXTUAL TOUR] Watching for menus...
[CONTEXTUAL TOUR] Showing: chatInput
[CONTEXTUAL TOUR] Showing: cellMenu
[CONTEXTUAL TOUR] Dismissed: chatInput
```

### If Something's Wrong
```
[CONTEXTUAL TOUR] Script loaded
[CONTEXTUAL TOUR] Initializing...
[CONTEXTUAL TOUR] Watching for menus...
// Nothing else? Check if elements exist
```

---

## Tooltips Explained

### 1. Chat Input (3 seconds after load)
```
Title: Send a Message
Text: Type what happens next. Use LEGOS:
      • Location - Where
      • Entity - Who/What
      • Goal - Want
      • Obstacle - Block
      • Shift - Change
      • Solution - Resolve
Position: Above chat input
```

### 2. Grid Cell Menu (when menu opens)
```
Title: Grid Cell Menu
Text: Actions for this entity:
      • SEND TO CHAT - Add to message
      • RUN ELEMENT PERSPECTIVE - Deep analysis
      • TETRAD INTERVENTION - McLuhan's laws
      • SPAWN POV CHANNEL - New perspective
Position: Left of menu
```

### 3. Perspective Overlay (when overlay opens)
```
Title: Perspective Analysis
Text: Shows this entity's:
      • Emotional state
      • Plot impact
      • Next action
      • Local awareness
      • Relationships
      
      Use GENERATE TETRAD FROM PERSPECTIVE
      to analyze from their viewpoint.
Position: Top of overlay
```

---

## Troubleshooting

### Tooltip Doesn't Appear

**Check 1**: Is script loaded?
```javascript
console.log(window.ContextualTour);
```

**Check 2**: Was it already shown?
```javascript
console.log(ContextualTour.shown);
// If chatInput: true, it won't show again
```

**Fix**: Reset
```javascript
ContextualTour.reset();
location.reload();
```

**Check 3**: Does target element exist?
```javascript
// For chat input
console.log(document.querySelector('.chat-input'));

// For cell menu (after clicking cell)
console.log(document.querySelector('.cell-menu'));
```

### Tooltip Position Wrong

**Issue**: Tooltip appears off-screen
**Cause**: Element near edge of viewport
**Fix**: Tooltip has `Math.max(10, ...)` to stay on screen

### Tooltip Doesn't Dismiss

**Issue**: Click "GOT IT" doesn't work
**Check**: Console for errors
**Fix**: Ensure `onclick="ContextualTour.dismiss('key')"` is correct

---

## Integration with Other Tours

### Current Setup
```html
<!-- Linear tour (manual trigger) -->
<script src="GUIDED_TOUR.js"></script>

<!-- Contextual tooltips (automatic) -->
<script src="CONTEXTUAL_TOUR.js"></script>
```

### They Work Together
- **GUIDED_TOUR**: Click `?` → `START TOUR` for overview
- **CONTEXTUAL_TOUR**: Automatic tooltips when features appear

### Or Use Just One
```html
<!-- Option A: Only contextual -->
<script src="CONTEXTUAL_TOUR.js"></script>

<!-- Option B: Only linear -->
<script src="GUIDED_TOUR.js"></script>
```

---

## What Gets Explained

### ✅ Covered by Contextual Tour
- LEGOS system (L-E-G-O-S-U)
- Grid cell menu buttons
- RUN ELEMENT PERSPECTIVE
- TETRAD INTERVENTION
- SPAWN POV CHANNEL
- Perspective overlay features
- GENERATE TETRAD FROM PERSPECTIVE

### ❌ Not Yet Covered (Can Add)
- 👁 SELECT PERSPECTIVE dropdown
- Tetrad chips (Enhance, Reverse, etc.)
- Channel management
- Export/Import

---

## Adding More Tooltips

### Example: Add Tetrad Chips Tooltip

```javascript
// In CONTEXTUAL_TOUR.js, add to watchForMenus():

// Check for tetrad chips
if (node.classList?.contains('tetrad-chip')) {
  if (!this.shown.tetradChips) {
    setTimeout(() => this.showTetradTooltip(node), 300);
  }
}

// Add method:
showTetradTooltip(chip) {
  this.showTooltip({
    key: 'tetradChips',
    title: 'Tetrad Options',
    text: 'Click any chip:\n• Enhance - Amplifies\n• Reverse - Flips\n• Retrieve - Brings back\n• Obsolesce - Replaces',
    target: chip,
    position: 'top'
  });
}
```

---

## Summary

**Status**: ✅ Integrated and ready to test
**How to test**: Open `thousand-tetrad.html`, wait 3 seconds for first tooltip
**Reset**: `ContextualTour.reset()` in console
**Console**: Check for `[CONTEXTUAL TOUR]` messages

**Three tooltips currently active**:
1. Chat input (3 seconds after load)
2. Grid cell menu (when menu opens)
3. Perspective overlay (when overlay opens)

**Each shows once, then remembers via localStorage.**
