# LEGOS Order + Multi-Select + Send Button

## Features Implemented

### 1. LEGOS Order (Always)
```
L - Location  (0)
E - Entity    (1)
G - Goal      (2)
O - Obstacle  (3)
S - Shift     (4)
S - Solution  (5)
```

**Within each type**: Sorted by recency (most recent first)

**Result**: Consistent, predictable order

---

### 2. Multi-Select
```
Single click → Select one (deselect others)
Shift/Ctrl + click → Add to selection
Click selected → Deselect
```

**Features**:
- Select multiple entities
- Toggle selection
- Visual feedback (border thickens)

---

### 3. Red Send Button (Appears When Selected)
```
┌─────────────────────────────────────┐
│ ▣ WIZARD           [4,5]  ✓         │ ← Selected
│ ○ DRAGON           [2,3]  ✓         │ ← Selected
├─────────────────────────────────────┤
│ [→ SEND 2 TO CHAT]                  │ ← Button appears
└─────────────────────────────────────┘
```

**Style**: Same red gradient as tetrad/perspective buttons

---

### 4. Pleasant Multi-Highlight on Grid
```
Select multiple → All highlight on grid
                → Staggered animation (80ms delay)
                → Gentle pulse
                → Softer glow (pleasant)
```

**Result**: Beautiful visual feedback

---

## Visual Design

### Entity List (LEGOS Order)
```
┌─────────────────────────────────────┐
│ ENTITIES                            │
├─────────────────────────────────────┤
│ ▣ TAVERN           [2,2]            │ ← Location
│ ▣ FOREST           [5,5]            │ ← Location
│ ○ WIZARD           [4,5]            │ ← Entity
│ ○ DRAGON           [2,3]            │ ← Entity
│ ▲ ESCAPE           [7,8]            │ ← Goal
│ ◆ CURSE            [3,4]            │ ← Obstacle
│ ⟡ SPELL            [4,6]            │ ← Shift
│ ◉ VICTORY          [8,8]            │ ← Solution
└─────────────────────────────────────┘
```

### Selected State
```
┌─────────────────────────────────────┐
│ ▣ TAVERN           [2,2]            │
│ ○ WIZARD           [4,5]  ✓         │ ← Selected (thick border)
│ ○ DRAGON           [2,3]  ✓         │ ← Selected
│ ▲ ESCAPE           [7,8]            │
├─────────────────────────────────────┤
│ [→ SEND 2 TO CHAT]                  │ ← Red button
└─────────────────────────────────────┘
```

---

## Send Button Details

### Style (Same as Tetrad/Perspective)
```css
background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
border: 2px solid #ff6b6b;
color: white;
font-size: 10px;
font-weight: 700;
letter-spacing: 0.1em;
box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
```

### States
```
Default: "→ SEND TO CHAT"
Multiple: "→ SEND 2 TO CHAT"
Hover: scale(1.05), stronger shadow
Click: Gradient reverses (flash)
```

---

## Multi-Highlight Animation

### Staggered Appearance
```javascript
entities.forEach((entity, idx) => {
  setTimeout(() => {
    // Highlight this cell
  }, idx * 80); // 80ms delay between each
});
```

**Result**: Smooth cascade effect

### Pleasant Glow (Softer)
```css
/* Single select */
box-shadow: 0 0 0 4px accent, 0 0 40px accent, 0 0 80px glow;

/* Multi-select (softer) */
box-shadow: 0 0 0 3px accent, 0 0 30px glow;
outline: 1px solid accent;
```

**Result**: Less overwhelming, more pleasant

### Gentle Pulse
```
scale(1.1) → scale(1.15) → scale(1.1)
Duration: 250ms total
```

**Result**: Subtle movement, draws attention

---

## Interaction Flow

### Select Single Entity
```
1. Click WIZARD
2. Row highlights (border 3px → 5px)
3. Grid cell highlights
4. Send button appears: "→ SEND TO CHAT"
```

### Select Multiple Entities
```
1. Click WIZARD
2. Shift+Click DRAGON
3. Both rows highlight
4. Both grid cells highlight (staggered)
5. Send button appears: "→ SEND 2 TO CHAT"
```

### Send to Chat
```
1. Click send button
2. All selected entities → chat input
3. Format: One per line
4. Button flashes (gradient reverses)
5. Input auto-focuses
```

---

## Chat Input Format

### Single Entity
```
▣ WIZARD [4,5]: A powerful sorcerer seeking ancient knowledge
```

### Multiple Entities
```
▣ WIZARD [4,5]: A powerful sorcerer seeking ancient knowledge
○ DRAGON [2,3]: Ancient beast guarding treasure hoard
```

**Result**: Clean, readable, one per line

---

## LEGOS Sorting Logic

```javascript
const legosOrder = { 
  'Location': 0, 
  'Entity': 1, 
  'Goal': 2, 
  'Obstacle': 3, 
  'Shift': 4, 
  'Solution': 5 
};

entities.sort((a, b) => {
  // First by LEGOS type
  const orderDiff = (legosOrder[a.type] || 99) - (legosOrder[b.type] || 99);
  if (orderDiff !== 0) return orderDiff;
  
  // Then by recency within type
  return a.recency - b.recency;
});
```

**Result**: Locations first, Solutions last, recent first within each type

---

## Benefits

### ✅ Predictable Order
- Always LEGOS sequence
- Easy to find entity types
- Consistent across scenes

### ✅ Multi-Select
- Select multiple entities
- Shift/Ctrl for multi-select
- Toggle selection

### ✅ Pleasant Highlighting
- Staggered animation (80ms)
- Softer glow (not overwhelming)
- Gentle pulse

### ✅ Clear Send Action
- Red button (same as tetrad)
- Shows count (SEND 2 TO CHAT)
- Only appears when selected

### ✅ Better UX
- No individual arrows (less clutter)
- One action button (clearer)
- Multi-line output (readable)

---

## Mobile Support

### Touch Targets
- Row: 32px tall (easy to tap)
- Send button: 10px padding (comfortable)

### Multi-Select on Mobile
```
Tap → Select
Tap again → Deselect
No shift/ctrl needed (just tap multiple)
```

**Result**: Works great on touch devices

---

## Summary

### Added
- ✅ LEGOS order (L→E→G→O→S→S)
- ✅ Multi-select (shift/ctrl)
- ✅ Red send button (appears when selected)
- ✅ Pleasant multi-highlight (staggered, gentle)
- ✅ Multi-line chat output

### Removed
- ❌ Individual arrow buttons (clutter)

### Result
**Predictable order, multi-select, pleasant highlighting, clear action** ✅

---

## Test Checklist

- [ ] Entities ordered by LEGOS
- [ ] Click to select (border thickens)
- [ ] Shift+click for multi-select
- [ ] All selected highlight on grid
- [ ] Staggered animation (80ms)
- [ ] Send button appears when selected
- [ ] Button shows count (SEND 2 TO CHAT)
- [ ] Click button → all sent to chat
- [ ] Multi-line format in chat
- [ ] Mobile: tap to select multiple

**Result**: Organized, multi-select, pleasant, clear ✅
