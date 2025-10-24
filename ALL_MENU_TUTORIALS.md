# All Menu Tutorials - Complete Coverage

## Every Popup Menu Has Its Own Bespoke Tutorial

When any menu appears for the first time, it triggers a custom tooltip explaining all its features.

---

## 10 Menus Covered

### 1. **Chat Input** (3 seconds after load)
**Trigger**: Page loads
**Tutorial**:
```
Send a Message

Type what happens next. Use LEGOS:
• Location - Where things happen
• Entity - Characters, objects
• Goal - What they want
• Obstacle - What blocks them
• Shift - Transformations
• Solution - Resolutions

The AI will update the grid.
```

---

### 2. **Grid Cell Menu** (when clicking grid cell)
**Trigger**: User clicks grid cell with entity
**Tutorial**:
```
Grid Cell Menu

Actions for this entity:

• SEND TO CHAT - Add to your message
• SPAWN POV CHANNEL - New channel from this perspective
• RUN ELEMENT PERSPECTIVE - Deep character analysis
  (emotional state, plot impact, next action)
• TETRAD INTERVENTION - Apply McLuhan's Four Laws
  (enhance, reverse, retrieve, obsolesce)
```

---

### 3. **Perspective Overlay** (when RUN ELEMENT PERSPECTIVE clicked)
**Trigger**: Perspective analysis opens
**Tutorial**:
```
Perspective Analysis

Deep analysis of this entity:

• EMOTIONAL STATE - How they feel
• PLOT IMPACT - Story significance
• NEXT ACTION - What they might do
• LOCAL AWARENESS - What they perceive
• RELATIONAL PROBABILITIES - Connections to other entities

Buttons:
• ⋔ GENERATE TETRAD FROM PERSPECTIVE - Tetrad based on their viewpoint
• SEND TO CHAT - Add analysis to message
• FORK POV CHANNEL - New channel exploring this perspective
```

---

### 4. **API Key Overlay** (when ◎ button clicked)
**Trigger**: Key overlay opens
**Tutorial**:
```
API Key Storage

Store your OpenAI API key:

1. Get key from platform.openai.com/api-keys
2. Copy the key (starts with sk-proj-...)
3. Paste it here
4. Click SAVE

Your key is stored locally in your browser,
never sent to our servers.
```

---

### 5. **Help Menu** (when ? button clicked)
**Trigger**: Info menu opens
**Tutorial**:
```
Help Menu

Options:

• ▶ START TOUR - Guided walkthrough
• HELP OVERVIEW - Quick tips
• TOGGLE THEME - Change colors
• FULLSCREEN MODE - Expand view
• RESET ALL CHATS - Clear everything
```

---

### 6. **Exchange Menu** (when ⇆ button clicked)
**Trigger**: Exchange menu opens
**Tutorial**:
```
Import / Export

Save or load your work:

• EXPORT SESSION - Download as JSON file
  (includes all channels, messages, grid state)
• IMPORT SESSION - Load previously saved session

Use this to backup your work or share scenarios.
```

---

### 7. **Perspective Selector** (when dropdown appears)
**Trigger**: 👁 SELECT PERSPECTIVE dropdown visible
**Tutorial**:
```
👁 Select Perspective

Choose which entity's viewpoint to use
for tetrad generation.

The tetrad will analyze from THEIR perspective,
not neutral.

Different perspectives = different insights.

Shows entities currently on the grid.
```

---

### 8. **Tetrad Options** (when tetrad chips appear)
**Trigger**: Tetrad chips generated
**Tutorial**:
```
Tetrad Options

McLuhan's Four Laws of Media:

• ENHANCE - What does it amplify or intensify?
• REVERSE - What does it flip into when pushed to extremes?
• RETRIEVE - What does it bring back from the past?
• OBSOLESCE - What does it replace or make obsolete?

Click any chip to explore that aspect.
Each has steering arrows (→ ↗ ↔ ⋔) for deeper exploration.
```

---

### 9. **Snapshot Menu** (when snapshot UI appears)
**Trigger**: Snapshot menu opens
**Tutorial**:
```
Snapshot Menu

Time-travel through your story:

• CREATE SNAPSHOT - Save current state
• RESTORE - Go back to saved point
• DELETE - Remove snapshot

Snapshots preserve:
• Grid state
• Messages
• Entity positions
• Scene context
```

---

### 10. **Channel Header Menu** (when channel options clicked)
**Trigger**: Channel header menu opens
**Tutorial**:
```
Channel Options

Manage this channel:

• ⋔ TETRAD MODE - Auto-generate tetrad for every scene
• RESET CHAT - Clear messages (keep grid)
• COLLAPSE - Minimize channel
• RENAME - Change channel name
• DELETE - Remove channel
```

---

## How It Works

### Event-Driven System
```
User Action → Menu Appears → MutationObserver Detects → Tooltip Shows (if first time)
```

### Example Flow
```
1. User clicks grid cell
   ↓
2. Cell menu appears in DOM
   ↓
3. MutationObserver detects .cell-menu class
   ↓
4. Checks: Has cellMenu tooltip been shown before?
   ↓
5. If NO → Shows tooltip after 300ms
   ↓
6. If YES → Does nothing (already learned)
```

---

## Testing Each Menu

### Test 1: Chat Input
1. Open app
2. Wait 3 seconds
3. ✅ Tooltip appears above chat input

### Test 2: Grid Cell Menu
1. Send message to populate grid
2. Click any grid cell
3. ✅ Tooltip appears to left of menu

### Test 3: Perspective Overlay
1. Click grid cell
2. Click RUN ELEMENT PERSPECTIVE
3. ✅ Tooltip appears at top of overlay

### Test 4: API Key Overlay
1. Click ◎ button (top-left)
2. ✅ Tooltip appears centered

### Test 5: Help Menu
1. Click ? button (top-right)
2. ✅ Tooltip appears below menu

### Test 6: Exchange Menu
1. Click ⇆ button (bottom-left)
2. ✅ Tooltip appears above menu

### Test 7: Perspective Selector
1. Select scenario with entities
2. 👁 dropdown appears
3. ✅ Tooltip appears below dropdown

### Test 8: Tetrad Options
1. Generate tetrad
2. Chips appear
3. ✅ Tooltip appears above chips

### Test 9: Snapshot Menu
1. Open snapshot UI
2. ✅ Tooltip appears to right of menu

### Test 10: Channel Header Menu
1. Click channel header options
2. ✅ Tooltip appears below menu

---

## Console Commands

### Check What's Been Shown
```javascript
console.log(ContextualTour.shown);
// Shows: { chatInput: true, cellMenu: true, ... }
```

### Reset All Tutorials
```javascript
ContextualTour.reset();
location.reload();
// All tooltips will show again on first trigger
```

### Manually Trigger Specific Tutorial
```javascript
// Example: Show chat input tutorial
ContextualTour.showChatInputTooltip();

// Example: Show cell menu tutorial (if menu is open)
const menu = document.querySelector('.cell-menu');
if (menu) ContextualTour.showCellMenuTooltip(menu);
```

---

## Coverage Summary

### ✅ Complete Coverage
- **Chat Input** - LEGOS system explained
- **Grid Cell Menu** - All 4 buttons explained
- **Perspective Overlay** - All sections + buttons explained
- **API Key** - How to get and store key
- **Help Menu** - All options explained
- **Exchange Menu** - Export/import explained
- **Perspective Selector** - Viewpoint selection explained
- **Tetrad Options** - McLuhan's Four Laws explained
- **Snapshot Menu** - Time-travel explained
- **Channel Header** - Channel management explained

### 🎯 Key Features Explained
- LEGOS system (L-E-G-O-S-U)
- RUN ELEMENT PERSPECTIVE
- TETRAD INTERVENTION
- GENERATE TETRAD FROM PERSPECTIVE
- Perspective selector (👁)
- Tetrad chips + steering arrows
- Snapshot system
- Channel management
- Import/export

---

## Implementation Details

### File Structure
```javascript
ContextualTour = {
  shown: {},              // Track what's been shown
  currentTooltip: null,   // Current tooltip element
  
  init()                  // Setup watchers
  watchForMenus()         // MutationObserver
  
  // 10 tooltip methods
  showChatInputTooltip()
  showCellMenuTooltip()
  showPerspectiveTooltip()
  showKeyOverlayTooltip()
  showInfoMenuTooltip()
  showExchangeMenuTooltip()
  showPerspectiveSelectorTooltip()
  showTetradOptionsTooltip()
  showSnapshotMenuTooltip()
  showChannelHeaderMenuTooltip()
  
  // Core system
  showTooltip()           // Display tooltip
  dismiss()               // Hide tooltip
  reset()                 // Clear all shown flags
}
```

### MutationObserver Watches For
```javascript
// Grid cell menu
node.classList?.contains('cell-menu')

// Perspective overlay
node.id === 'perspectiveOverlay'

// API key overlay
node.id === 'keyOverlay'

// Help menu
node.id === 'infoMenu' && node.classList.contains('visible')

// Exchange menu
node.id === 'exchangeMenu' && node.classList.contains('visible')

// Perspective selector
node.id === 'perspectiveSelector'

// Tetrad options
node.classList?.contains('tetrad-options')

// Snapshot menu
node.classList?.contains('snapshot-menu')

// Channel header menu
node.classList?.contains('channel-header-menu')
```

---

## User Experience

### New User Journey
```
1. Opens app
   → Tutorial: "Send a Message - Use LEGOS..."
   
2. Sends message, grid updates
   
3. Clicks grid cell
   → Tutorial: "Grid Cell Menu - Actions for this entity..."
   
4. Clicks RUN ELEMENT PERSPECTIVE
   → Tutorial: "Perspective Analysis - Deep analysis..."
   
5. Clicks ◎ for API key
   → Tutorial: "API Key Storage - Get key from..."
   
6. Clicks ? for help
   → Tutorial: "Help Menu - Options..."
   
... and so on for each menu
```

### Returning User
- No tooltips (already seen)
- Can use all features without interruption
- Can reset with `ContextualTour.reset()` if needed

---

## Summary

**10 menus covered**, each with its own bespoke tutorial:
1. Chat Input (LEGOS)
2. Grid Cell Menu (4 actions)
3. Perspective Overlay (analysis + buttons)
4. API Key Overlay (setup)
5. Help Menu (options)
6. Exchange Menu (import/export)
7. Perspective Selector (viewpoint)
8. Tetrad Options (Four Laws)
9. Snapshot Menu (time-travel)
10. Channel Header Menu (management)

**Every menu triggers its tutorial on first appearance.**
**Each tutorial shows once, then remembers via localStorage.**
**Complete coverage of all features and affordances.**
