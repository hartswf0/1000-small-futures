# Contextual Tour - Event-Driven Design

## Problem with Linear Tour

### What's Wrong
1. **Shows features before they're visible** - Explains perspective button when menu is closed
2. **No context** - Doesn't explain LEGOS or scene construction
3. **Missing key features** - Doesn't cover RUN ELEMENT PERSPECTIVE, TETRAD INTERVENTION
4. **Wrong timing** - Shows tooltips when user can't use the feature

### Example Issues
- "Send a Message" doesn't explain LEGOS (L-E-G-O-S-U)
- "Apply Tetrad" doesn't mention perspective selector (👁)
- Grid menu buttons (RUN ELEMENT PERSPECTIVE, TETRAD INTERVENTION) never explained
- Perspective overlay affordances not covered

---

## New Approach: Contextual Tooltips

### Core Principle
**Show tooltips WHEN features become visible/available, not before.**

### Event-Driven Architecture
```
User Action → Feature Appears → Tooltip Shows → User Learns
```

---

## Tooltip Triggers

### 1. First Load
**When**: Page loads, app ready
**Shows**:
- Chat Input tooltip: "Type what happens next. Use LEGOS: Location, Entity, Goal, Obstacle, Shift, Solution."

### 2. Grid Cell Click
**When**: User clicks any grid cell
**Shows**:
- Grid Menu tooltip: "Click SEND TO CHAT or RUN ELEMENT PERSPECTIVE"

### 3. Grid Menu Opens
**When**: Grid cell menu appears
**Shows** (in sequence):
- RUN ELEMENT PERSPECTIVE: "Analyzes emotional state, plot impact, next action, relationships"
- TETRAD INTERVENTION: "Applies McLuhan's Four Laws to this element"
- SEND TO CHAT: "Adds this entity to your message"
- SPAWN POV CHANNEL: "Creates new channel from this perspective"

### 4. Perspective Overlay Opens
**When**: User clicks RUN ELEMENT PERSPECTIVE
**Shows**:
- Perspective Analysis tooltip: "Shows emotional state, plot impact, next action, local awareness, relational probabilities"
- GENERATE TETRAD FROM PERSPECTIVE: "Creates tetrad based on this character's viewpoint and actions"
- SEND TO CHAT: "Sends perspective analysis to chat"
- FORK POV CHANNEL: "Creates new channel exploring this perspective"

### 5. Tetrad Generated
**When**: Tetrad chips appear
**Shows**:
- Tetrad Options tooltip: "Click any chip to explore. Each applies McLuhan's Four Laws."

### 6. Perspective Selector Visible
**When**: User selects scenario with entities
**Shows**:
- 👁 SELECT PERSPECTIVE tooltip: "Choose which entity's viewpoint for tetrad generation"

---

## Tooltip Content

### Chat Input
```
Title: Send a Message
Text: Type what happens next. Use LEGOS:
      • Location - Where things happen
      • Entity - Characters, objects
      • Goal - What they want
      • Obstacle - What blocks them
      • Shift - Transformations
      • Solution - Resolutions
      The AI will update the grid.
```

### Grid Cell Menu
```
Title: Grid Cell Menu
Text: This entity has multiple actions:
      • SEND TO CHAT - Add to message
      • RUN ELEMENT PERSPECTIVE - Deep analysis
      • TETRAD INTERVENTION - McLuhan's laws
      • SPAWN POV CHANNEL - New perspective
```

### RUN ELEMENT PERSPECTIVE
```
Title: Run Element Perspective
Text: Analyzes this entity from their viewpoint:
      • Emotional State - How they feel
      • Plot Impact - Story significance
      • Next Action - What they might do
      • Local Awareness - What they perceive
      • Relational Probabilities - Connections
```

### TETRAD INTERVENTION
```
Title: Tetrad Intervention
Text: Applies McLuhan's Four Laws:
      • Enhance - What does it amplify?
      • Reverse - What does it flip into?
      • Retrieve - What does it bring back?
      • Obsolesce - What does it replace?
```

### Perspective Overlay
```
Title: Perspective Analysis
Text: Deep character analysis showing:
      • Emotional state and motivations
      • Impact on plot and story
      • Suggested next actions
      • Awareness of surroundings
      • Relationships with other entities
      
      Use buttons below to:
      • Generate tetrad from this POV
      • Send analysis to chat
      • Fork into new channel
```

### GENERATE TETRAD FROM PERSPECTIVE
```
Title: Generate Tetrad from Perspective
Text: Creates tetrad based on this character's:
      • Current emotional state
      • Potential actions
      • Relationships
      • Story position
      
      The tetrad will show what THEY might
      enhance, reverse, retrieve, or obsolesce.
```

### 👁 SELECT PERSPECTIVE
```
Title: Select Perspective
Text: Choose which entity's viewpoint to use
      for tetrad generation. The analysis will
      be from THEIR perspective, not neutral.
      
      Different perspectives = different tetrads.
```

---

## Implementation

### File Structure
```
CONTEXTUAL_TOUR.js
├── tooltips {} - Tooltip definitions
├── shown {} - Track what's been shown
├── init() - Setup triggers
├── setupTriggers() - Event listeners
├── trigger(event) - Fire tooltips for event
├── show(key, tooltip) - Display tooltip
└── dismiss(key) - Hide tooltip
```

### Tooltip Definition
```javascript
{
  trigger: 'gridMenuOpen',
  title: 'Run Element Perspective',
  text: 'Analyzes this entity...',
  target: 'button:contains("RUN ELEMENT PERSPECTIVE")',
  position: 'left',
  highlight: true
}
```

### Triggers
- `firstLoad` - Page ready
- `gridCellClick` - User clicks grid cell
- `gridMenuOpen` - Grid menu appears
- `perspectiveOpen` - Perspective overlay appears
- `tetradGenerated` - Tetrad chips appear
- `scenarioSelected` - Scenario chosen

---

## User Experience

### Scenario 1: New User
```
1. Opens app
   → Tooltip: "Send a Message - Use LEGOS..."
   
2. Types message, AI responds, grid updates
   → No tooltip (they're using it correctly)
   
3. Clicks grid cell
   → Tooltip: "Grid Cell Menu - Multiple actions..."
   
4. Clicks RUN ELEMENT PERSPECTIVE
   → Tooltip: "Perspective Analysis - Shows emotional state..."
   
5. Perspective overlay opens
   → Tooltip: "Generate Tetrad from Perspective - Creates tetrad based on..."
   
6. Clicks GENERATE TETRAD
   → Tooltip: "Tetrad Options - Click any chip..."
```

### Scenario 2: Returning User
```
1. Opens app
   → No tooltip (already seen)
   
2. Clicks grid cell
   → No tooltip (already seen)
   
3. Uses features normally
   → No interruptions
```

---

## Advantages

### ✅ Contextual
- Shows tooltips when feature is visible
- User can immediately try it
- No confusion about where feature is

### ✅ Just-in-Time Learning
- Learn right before using
- No information overload
- Remember better (immediate practice)

### ✅ Non-Intrusive
- Only shows once per feature
- Can dismiss anytime
- Doesn't block interface

### ✅ Complete Coverage
- Explains LEGOS system
- Covers all grid menu buttons
- Explains perspective overlay
- Shows tetrad generation flow

---

## Integration

### Replace Linear Tour
```html
<!-- OLD: Linear tour -->
<script src="GUIDED_TOUR.js"></script>

<!-- NEW: Contextual tour -->
<script src="CONTEXTUAL_TOUR.js"></script>
```

### Or Use Both
```html
<!-- Linear tour for first-time overview -->
<script src="GUIDED_TOUR.js"></script>

<!-- Contextual tooltips for feature discovery -->
<script src="CONTEXTUAL_TOUR.js"></script>
```

---

## Testing

### Test 1: Chat Input
1. Open app
2. Wait 2 seconds
3. ✅ Tooltip appears near chat input
4. ✅ Explains LEGOS system

### Test 2: Grid Menu
1. Click any grid cell
2. ✅ Tooltip appears explaining menu
3. ✅ Highlights RUN ELEMENT PERSPECTIVE

### Test 3: Perspective Overlay
1. Click RUN ELEMENT PERSPECTIVE
2. ✅ Tooltip appears explaining overlay
3. ✅ Highlights GENERATE TETRAD button

### Test 4: Persistence
1. Dismiss tooltip
2. Reload page
3. Trigger same event
4. ✅ Tooltip doesn't reappear

---

## Summary

**Old approach**: Linear sequence, shows features before they're visible
**New approach**: Event-driven, shows tooltips when features appear
**Result**: Users learn in context, right when they need it

**Key improvements**:
1. Explains LEGOS system (L-E-G-O-S-U)
2. Covers grid menu buttons (RUN ELEMENT PERSPECTIVE, TETRAD INTERVENTION)
3. Explains perspective overlay affordances
4. Shows tooltips when features are visible
5. Non-intrusive, shows once per feature
