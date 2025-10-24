# Hints System - Get Help When Stuck

## Problem Solved
**"What can I do on this screen?"**

When users are stuck or unsure what to do, they can click **? → 💡 SHOW HINTS** to see context-aware suggestions.

---

## How It Works

### 1. User Gets Stuck
```
User: "I don't know what to do next..."
```

### 2. Click ? Button
```
? button (top-right corner)
  ↓
Help menu opens
```

### 3. Click 💡 SHOW HINTS
```
💡 SHOW HINTS button (highlighted in green)
  ↓
Hints overlay appears
```

### 4. See Context-Aware Hints
```
💡 HINTS FOR THIS SCREEN

💡 Click any grid cell to see entity actions

💡 Click any message to fork, copy, or delete it

💡 Use LEGOS in messages: Location, Entity, Goal,
   Obstacle, Shift, Solution

🎯 Try clicking a grid cell to see the menu tutorial

🎯 Try RUN ELEMENT PERSPECTIVE on a grid cell
   for deep analysis

[GOT IT]
```

---

## What Hints Show

### Context-Aware Suggestions

#### If Grid Has Entities
```
💡 Click any grid cell to see entity actions
```

#### If Messages Exist
```
💡 Click any message to fork, copy, or delete it
```

#### If Tetrad Chips Visible
```
💡 Click tetrad chips to explore McLuhan's Four Laws
```

#### If Message Input Visible
```
💡 Use LEGOS in messages: Location, Entity, Goal,
   Obstacle, Shift, Solution
```

### Tutorial Prompts (If Not Yet Seen)

#### Cell Menu Not Seen
```
🎯 Try clicking a grid cell to see the menu tutorial
```

#### Perspective Not Seen
```
🎯 Try RUN ELEMENT PERSPECTIVE on a grid cell
   for deep analysis
```

#### Message Fork Not Seen
```
🎯 Try clicking a message to see forking options
```

---

## Example Scenarios

### Scenario 1: Just Started
**User**: Opens app, waits 3 seconds
**Sees**: Chat input tutorial
**Then**: Clicks ? → 💡 SHOW HINTS
**Hints**:
```
💡 Use LEGOS in messages: Location, Entity, Goal,
   Obstacle, Shift, Solution
```

### Scenario 2: Sent Message, Grid Populated
**User**: Sent message, grid has entities
**Clicks**: ? → 💡 SHOW HINTS
**Hints**:
```
💡 Click any grid cell to see entity actions

💡 Use LEGOS in messages: Location, Entity, Goal,
   Obstacle, Shift, Solution

🎯 Try clicking a grid cell to see the menu tutorial
```

### Scenario 3: Has Messages and Grid
**User**: Multiple messages, grid populated
**Clicks**: ? → 💡 SHOW HINTS
**Hints**:
```
💡 Click any grid cell to see entity actions

💡 Click any message to fork, copy, or delete it

💡 Use LEGOS in messages: Location, Entity, Goal,
   Obstacle, Shift, Solution

🎯 Try RUN ELEMENT PERSPECTIVE on a grid cell
   for deep analysis

🎯 Try clicking a message to see forking options
```

### Scenario 4: Seen Everything
**User**: Has seen all tutorials
**Clicks**: ? → 💡 SHOW HINTS
**Hints**:
```
You've discovered everything on this screen!
Try sending a message or exploring the grid.
```

---

## Help Menu Updated

### New Button Added
```
? Help Menu

• ▶ START TOUR - Guided walkthrough
• 💡 SHOW HINTS - See tutorials for current screen ← NEW!
• HELP OVERVIEW - Quick tips
• TOGGLE THEME - Change colors
• FULLSCREEN MODE - Expand view
• RESET ALL CHATS - Clear everything

Stuck? Click SHOW HINTS to see what you can do!
```

---

## Integration

### Files Modified
1. **CONTEXTUAL_TOUR.js**
   - Added `showHints()` method
   - Added `showHintsOverlay()` method
   - Updated help menu tooltip

2. **thousand-tetrad.html**
   - Added 💡 SHOW HINTS button to help menu
   - Added `hints` action handler

---

## Technical Details

### Hint Detection Logic
```javascript
showHints() {
  const hints = [];
  
  // Check what's visible
  if (document.querySelector('.grid-cell[data-entity]')) {
    hints.push('💡 Click any grid cell to see entity actions');
  }
  
  if (document.querySelector('.message-item:not(.system-message)')) {
    hints.push('💡 Click any message to fork, copy, or delete it');
  }
  
  if (document.querySelector('.tetrad-chip')) {
    hints.push('💡 Click tetrad chips to explore McLuhan\'s Four Laws');
  }
  
  // Check what hasn't been seen
  if (!this.shown.cellMenu && document.querySelector('.grid-cell[data-entity]')) {
    hints.push('🎯 Try clicking a grid cell to see the menu tutorial');
  }
  
  if (!this.shown.perspectiveOverlay) {
    hints.push('🎯 Try RUN ELEMENT PERSPECTIVE for deep analysis');
  }
  
  if (!this.shown.messageForkMenu) {
    hints.push('🎯 Try clicking a message to see forking options');
  }
  
  this.showHintsOverlay(hints);
}
```

### Hints Overlay
```javascript
showHintsOverlay(hints) {
  const overlay = document.createElement('div');
  overlay.id = 'hintsOverlay';
  overlay.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(5, 32, 16, 0.98);
    border: 2px solid #56ff9f;
    border-radius: 12px;
    padding: 24px;
    max-width: 400px;
    z-index: 10004;
  `;
  
  overlay.innerHTML = `
    <div>💡 HINTS FOR THIS SCREEN</div>
    <div>${hints.join('<br><br>')}</div>
    <button onclick="document.getElementById('hintsOverlay').remove()">
      GOT IT
    </button>
  `;
  
  document.body.appendChild(overlay);
}
```

---

## User Flow

```
1. User opens app
   ↓
2. Sees chat input tutorial
   ↓
3. Sends message
   ↓
4. Grid populates
   ↓
5. User thinks: "What now?"
   ↓
6. Clicks ? button
   ↓
7. Sees help menu
   ↓
8. Clicks 💡 SHOW HINTS
   ↓
9. Sees hints overlay:
   "💡 Click any grid cell to see entity actions
    🎯 Try clicking a grid cell to see the menu tutorial"
   ↓
10. Clicks GOT IT
    ↓
11. Clicks grid cell
    ↓
12. Sees cell menu tutorial
    ↓
13. Continues exploring
```

---

## Benefits

### ✅ Always Available
Click ? → 💡 SHOW HINTS anytime

### ✅ Context-Aware
Shows hints relevant to current screen

### ✅ Tutorial Prompts
Suggests tutorials user hasn't seen yet

### ✅ Non-Intrusive
Only appears when user asks for help

### ✅ Actionable
Each hint tells user exactly what to do

### ✅ Progressive
Adapts to what user has already learned

---

## Testing

### Test 1: Empty Screen
1. Open app
2. Click ? → 💡 SHOW HINTS
3. ✅ See: "Use LEGOS in messages..."

### Test 2: Grid Populated
1. Send message
2. Grid populates
3. Click ? → 💡 SHOW HINTS
4. ✅ See: "Click any grid cell..."

### Test 3: Has Messages
1. Send multiple messages
2. Click ? → 💡 SHOW HINTS
3. ✅ See: "Click any message to fork..."

### Test 4: Seen Everything
1. Complete all tutorials
2. Click ? → 💡 SHOW HINTS
3. ✅ See: "You've discovered everything..."

### Test 5: Hints Overlay
1. Click ? → 💡 SHOW HINTS
2. ✅ Overlay appears centered
3. ✅ Shows relevant hints
4. Click GOT IT
5. ✅ Overlay disappears

---

## Console Commands

### Manually Show Hints
```javascript
ContextualTour.showHints();
```

### Check What's Been Shown
```javascript
console.log(ContextualTour.shown);
```

### Reset to See All Tutorials Again
```javascript
ContextualTour.reset();
location.reload();
```

---

## Summary

**Problem**: Users get stuck, don't know what to do
**Solution**: ? → 💡 SHOW HINTS button
**Result**: Context-aware suggestions + tutorial prompts

**How to use**:
1. Click ? (top-right)
2. Click 💡 SHOW HINTS
3. See hints for current screen
4. Click GOT IT
5. Try suggested actions

**Always available, always helpful** ✅
