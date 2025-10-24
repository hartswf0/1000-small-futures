# Grid Cell Menu Tutorial - First Time Experience

## What Happens

When you click a grid cell for the **first time**, a comprehensive tutorial appears explaining all 4 buttons.

---

## Tutorial Content

### 🎯 Grid Cell Menu

```
This entity has 4 powerful actions:

📤 SEND TO CHAT
Add this entity to your next message

🌀 SPAWN POV CHANNEL
Create new channel from this entity's perspective

💡 RUN ELEMENT PERSPECTIVE (Green)
Deep analysis: emotional state, plot impact, next action, 
local awareness, relationships

⋔ TETRAD INTERVENTION (Red)
Apply McLuhan's Four Laws:
• Enhance - What it amplifies
• Reverse - What it flips into
• Retrieve - What it brings back
• Obsolesce - What it replaces

Click any button to try it!
```

---

## How to Test

### Test 1: First Time
1. Open `thousand-tetrad.html`
2. Send a message to populate grid
3. Click any grid cell with an entity
4. ✅ **Menu appears**
5. ✅ **Tooltip appears to the left after 300ms**
6. ✅ **Explains all 4 buttons**
7. Click "GOT IT" to dismiss

### Test 2: Second Time
1. Click another grid cell
2. ✅ **Menu appears**
3. ✅ **No tooltip** (already seen)
4. Use menu normally

### Test 3: Reset
```javascript
// In console
ContextualTour.reset();
location.reload();
// Tooltip will show again on first click
```

---

## Tooltip Details

### Position
- **Left of menu** (doesn't block buttons)
- **380px wide** (fits detailed explanations)
- **Auto-positioned** (stays on screen)

### Timing
- **Appears**: 300ms after menu opens
- **Shows once**: Remembers via localStorage
- **Dismissible**: Click "GOT IT" button

### Content Breakdown

#### 📤 SEND TO CHAT
- **What**: Adds entity to message input
- **Use**: Quick reference to entity in conversation
- **Example**: "The Metaphysical Practitioner feels..."

#### 🌀 SPAWN POV CHANNEL
- **What**: Creates new channel from entity's perspective
- **Use**: Explore story from this character's viewpoint
- **Example**: New channel titled "Metaphysical Practitioner POV"

#### 💡 RUN ELEMENT PERSPECTIVE (Green Button)
- **What**: Deep character analysis
- **Shows**:
  - Emotional state
  - Plot impact
  - Next action
  - Local awareness
  - Relational probabilities
- **Use**: Understand character's inner world
- **Example**: See image you provided - full perspective overlay

#### ⋔ TETRAD INTERVENTION (Red Button)
- **What**: McLuhan's Four Laws analysis
- **Shows**:
  - Enhance - What it amplifies
  - Reverse - What it flips into
  - Retrieve - What it brings back
  - Obsolesce - What it replaces
- **Use**: Understand transformative potential
- **Example**: How this entity changes the story

---

## Visual Flow

```
1. User clicks grid cell
   ↓
2. Menu appears with 4 buttons
   ↓
3. 300ms delay
   ↓
4. Tooltip appears to the left
   ↓
5. User reads explanation
   ↓
6. User clicks "GOT IT"
   ↓
7. Tooltip dismissed
   ↓
8. localStorage: cellMenu = true
   ↓
9. Next time: No tooltip (already learned)
```

---

## Console Messages

```javascript
[CONTEXTUAL TOUR] Watching for all menus...
// User clicks grid cell
[CONTEXTUAL TOUR] Showing: cellMenu
// User clicks GOT IT
[CONTEXTUAL TOUR] Dismissed: cellMenu
```

---

## Integration with Other Tutorials

### Chat Input (3 seconds after load)
- Explains LEGOS system
- Shows once

### Grid Cell Menu (when menu opens)
- Explains 4 buttons
- Shows once ← **THIS ONE**

### Perspective Overlay (when RUN ELEMENT PERSPECTIVE clicked)
- Explains analysis sections
- Shows once

### API Key Overlay (when ◎ clicked)
- Explains how to get/store key
- Shows once

### Help Menu (when ? clicked)
- Explains menu options
- Shows once

---

## User Journey

### New User Experience
```
1. Opens app
   → Tutorial: "Send a Message - Use LEGOS..."
   
2. Sends message, grid populates
   
3. Clicks grid cell
   → Menu appears
   → Tutorial: "🎯 Grid Cell Menu - 4 powerful actions..."
   
4. Clicks RUN ELEMENT PERSPECTIVE
   → Perspective overlay opens
   → Tutorial: "Perspective Analysis - Deep analysis..."
   
5. Uses app normally
   → No more tooltips (already learned)
```

### Returning User
- No tooltips
- Can use all features
- Can reset if needed: `ContextualTour.reset()`

---

## Summary

**Trigger**: First time grid cell menu opens
**Content**: Explains all 4 buttons with icons and descriptions
**Position**: Left of menu (380px wide)
**Timing**: 300ms after menu appears
**Persistence**: Shows once, remembers via localStorage
**Dismissal**: Click "GOT IT" button

**Result**: Users understand all grid cell menu options on first encounter

---

## Test Checklist

- [ ] Open `thousand-tetrad.html`
- [ ] Send message to populate grid
- [ ] Click grid cell
- [ ] See menu appear
- [ ] See tooltip appear to the left
- [ ] Tooltip explains all 4 buttons
- [ ] Tooltip mentions colors (Green, Red)
- [ ] Tooltip has icons (📤 🌀 💡 ⋔)
- [ ] Click "GOT IT"
- [ ] Tooltip disappears
- [ ] Click another cell
- [ ] No tooltip (already shown)
- [ ] Console: `ContextualTour.shown.cellMenu === true`

**All checks pass** = Tutorial working perfectly ✅
