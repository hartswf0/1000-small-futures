# Entity Chips - Final Implementation

## Problem Solved
- **Hard to track** entities across messages
- **Hard to reference** entities (typing required)
- **Bad for low vision** - no temporal color coding
- **No quick insertion** into chat

## Solution: Clickable Entity Chips in Chat

### Visual Design
```
┌─────────────────────────────────────┐
│ ASSISTANT MESSAGE                   │
│ The wizard casts a spell...         │
├─────────────────────────────────────┤
│ ▣ WIZARD [4,5]  ○ DRAGON [2,3]     │ ← Entity chips
│ ◆ SPELL [4,6]   ▲ ESCAPE [7,8]     │
└─────────────────────────────────────┘
```

### Features

#### 1. Temporal Color Coding
```javascript
// Opacity based on recency
recency <= 1: opacity = 1.0  // Just acted (bright)
recency <= 3: opacity = 0.7  // Recent (medium)
recency > 3:  opacity = 0.4  // Old (faded)
```

**Result**: Recent entities are brighter, easier to see

#### 2. Click to Insert
```
Click ▣ WIZARD [4,5]
→ Inserts: "▣ WIZARD [4,5]: A powerful sorcerer seeking ancient knowledge"
→ Auto-focuses chat input
→ User can edit/send
```

**No typing required!**

#### 3. Visual Feedback
```javascript
// On click
→ Scale 1.1
→ Border changes to accent
→ Resets after 200ms

// On hover
→ Scale 1.05
→ Border changes to accent
→ Opacity 1.0 (full brightness)
```

#### 4. Position Included
```
▣ WIZARD [4,5]
         ↑ Grid position
```

**Easy spatial reference**

---

## Implementation Details

### Where They Appear
```
After every ASSISTANT message
Below the message text
Above message actions
```

### Data Source
```javascript
// Collect from grid
channel.grid.forEach((row, y) => {
  row.forEach((cell, x) => {
    if (cell && cell.label) {
      // Get entity data
      // Calculate recency
      // Add to list
    }
  });
});
```

### Recency Calculation
```javascript
const cellLogs = channel.cells[`${x},${y}`] || [];
const lastActionIndex = cellLogs[cellLogs.length - 1].sceneIndex;
const currentSceneIndex = channel.ledger.length;
const recency = currentSceneIndex - lastActionIndex;
```

**Lower recency = more recent action**

### Sorting
```javascript
// Sort by recency (most recent first)
entities.sort((a, b) => a.recency - b.recency);
```

**Most active entities appear first**

---

## Chip Structure

### HTML
```html
<button class="entity-chip">
  <span class="symbol">▣</span>
  <span class="name">WIZARD</span>
  <span class="position">[4,5]</span>
</button>
```

### Styling
```css
border: 2px solid [entity-color];
opacity: [based on recency];
gap: 4px;
padding: 4px 8px;
font-size: 9px;
```

### Colors
- **Symbol**: Entity type color (from blockPalette)
- **Name**: var(--text)
- **Position**: var(--text-muted)
- **Border**: Entity type color → accent on hover

---

## Accessibility

### For Low Vision
1. **Color-coded borders** (thick 2px)
2. **Temporal opacity** (bright = recent)
3. **Large symbols** (11px, font-weight 900)
4. **High contrast** on hover

### For Motor Impairment
1. **Large touch targets** (padding 4px 8px)
2. **No precise clicking** required
3. **Visual feedback** on hover/click
4. **Mobile-friendly** (wraps on small screens)

### For Cognitive Load
1. **Sorted by recency** (most relevant first)
2. **Position included** (spatial context)
3. **Tooltip with full info**
4. **One-click insertion** (no typing)

---

## Mobile Responsive

### Desktop
```
▣ WIZARD [4,5]  ○ DRAGON [2,3]  ◆ SPELL [4,6]  ▲ ESCAPE [7,8]
```

### Mobile (wraps)
```
▣ WIZARD [4,5]  ○ DRAGON [2,3]
◆ SPELL [4,6]   ▲ ESCAPE [7,8]
```

**Features**:
- Flex-wrap for small screens
- 6px gap between chips
- Touch-friendly (4px padding)
- Scrollable if needed

---

## Interaction Flow

### 1. User Sees Message
```
ASSISTANT: The wizard encounters a dragon...
```

### 2. Entity Chips Appear
```
▣ WIZARD [4,5]  ○ DRAGON [2,3]
```

### 3. User Clicks Chip
```
Click ▣ WIZARD [4,5]
```

### 4. Text Inserted
```
Chat Input: "▣ WIZARD [4,5]: A powerful sorcerer seeking ancient knowledge"
```

### 5. User Edits/Sends
```
User can modify text or send as-is
```

---

## Visual Hierarchy

### Brightness = Recency
```
▣ WIZARD [4,5]     ← opacity: 1.0 (just acted)
○ DRAGON [2,3]     ← opacity: 0.7 (recent)
◆ CURSE [1,1]      ← opacity: 0.4 (old)
```

### Border Color = Type
```
▣ Location  → Green
○ Entity    → Blue
▲ Goal      → Yellow
◆ Obstacle  → Red
⟡ Shift     → Purple
◉ Solution  → Cyan
```

### Hover = Highlight
```
All chips → opacity: 1.0 on hover
All chips → border: accent on hover
```

---

## Benefits

### ✅ No Typing
- Click to insert
- Full text with position
- Instant focus on input

### ✅ Visual Tracking
- Temporal color coding
- Sorted by recency
- Easy to see active entities

### ✅ Better for Low Vision
- High contrast borders
- Bright = recent
- Large symbols

### ✅ Mobile-Friendly
- Touch targets
- Wraps on small screens
- Visual feedback

### ✅ Spatial Context
- Position included [x,y]
- Easy grid reference
- No confusion

---

## Summary

### Added
- ✅ Entity chips after assistant messages
- ✅ Temporal color coding (opacity by recency)
- ✅ Click to insert into chat
- ✅ Position included [x,y]
- ✅ Sorted by recency (most active first)
- ✅ Visual feedback (hover/click)
- ✅ Mobile responsive (wraps)

### Result
**Better UX**: Easy tracking, no typing, better for low vision, mobile-friendly ✅

---

## Test Checklist

- [ ] Entity chips appear after assistant messages
- [ ] Chips show symbol, name, position
- [ ] Recent entities are brighter
- [ ] Click inserts full text into input
- [ ] Input auto-focuses
- [ ] Hover shows feedback
- [ ] Mobile: chips wrap
- [ ] Low vision: high contrast
- [ ] Tooltip shows full info

**Result**: Visual tracking + easy insertion + accessibility ✅
