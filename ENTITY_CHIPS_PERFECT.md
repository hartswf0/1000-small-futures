# Entity Chips - Perfect Design

## Final Design

### Visual
```
┌─────────────────────────────────────┐
│ ENTITIES (LEGOS ORDER)              │
├─────────────────────────────────────┤
│ [▣] TAVERN           [2,2]    [→]   │ ← Square + Red button
│ [○] WIZARD           [4,5]    [→]   │
│ [▲] ESCAPE           [7,8]    [→]   │
└─────────────────────────────────────┘
```

---

## Features

### 1. **Square Around Symbol** (Good Looking)
```
┌──┐
│▣ │ ← 20px square, bordered
└──┘
```

**Style**:
- Border: 2px solid (entity color)
- Background: var(--bg)
- Border-radius: 3px
- Size: 20px × 20px

**Result**: Clean, professional look

---

### 2. **Individual Red Send Buttons** (Better Affordance)
```
[→] ← Red gradient button on each row
```

**Style**:
- Same red gradient as tetrad/perspective
- Padding: 4px 8px
- Font-size: 9px
- Arrow symbol: →
- Box-shadow: 0 2px 6px rgba(255, 107, 107, 0.3)

**Result**: Clear, obvious action

---

### 3. **LEGOS Order** (Always)
```
L - Location  ▣
E - Entity    ○
G - Goal      ▲
O - Obstacle  ◆
S - Shift     ⟡
S - Solution  ◉
```

Within each type: Most recent first

---

### 4. **Multi-Select** (Still Works)
```
Click → Select (highlight)
Shift/Ctrl + Click → Multi-select
All selected → Highlight on grid
```

---

## Row Structure

```
┌─────────────────────────────────────┐
│ [▣] [TAVERN          ] [[2,2]] [→]  │
│  ↑   ↑                  ↑       ↑   │
│  │   └─ Name           │       └─ Send
│  │                     └─ Position  │
│  └─ Symbol in square                │
└─────────────────────────────────────┘
```

### Spacing
- Gap: 8px between elements
- Padding: 8px 10px
- Min-height: 32px
- Border-left: 3px (5px when selected)

---

## Button Details

### Red Send Button (Same as Tetrad/Perspective)
```css
background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
border: 2px solid #ff6b6b;
color: white;
font-size: 9px;
font-weight: 700;
box-shadow: 0 2px 6px rgba(255, 107, 107, 0.3);
```

### States
```
Default: → (arrow)
Hover: scale(1.1), stronger shadow
Click: Gradient reverses, scale(1.15)
```

### Action
```
Click → Insert text to chat
      → Auto-focus input
      → Flash button (200ms)
```

---

## Symbol Square

### Style
```css
width: 20px;
height: 20px;
border: 2px solid [entity-color];
border-radius: 3px;
background: var(--bg);
display: flex;
align-items: center;
justify-content: center;
```

### Symbol Inside
```css
color: [entity-color];
font-size: 10px;
font-weight: 900;
```

**Result**: Professional, contained, color-coded

---

## Interaction Flow

### Send Single Entity
```
1. Click red → button
2. Text inserted to chat
3. Input focuses
4. Button flashes
```

### Select + Highlight
```
1. Click row (not button)
2. Row highlights (border thickens)
3. Grid cell highlights
4. Can multi-select with Shift/Ctrl
```

---

## Why This Design Works

### ✅ Square Around Symbol
- **Professional**: Clean, contained
- **Color-coded**: Border matches type
- **Consistent**: Same size (20px)
- **Visual hierarchy**: Draws eye to symbol

### ✅ Individual Red Buttons
- **Clear affordance**: Red = action
- **Always visible**: No hidden state
- **Consistent**: Same style as tetrad/perspective
- **Easy to find**: On every row

### ✅ LEGOS Order
- **Predictable**: Always same sequence
- **Organized**: By type, then recency
- **Scannable**: Easy to find types

### ✅ Multi-Select Still Works
- **Flexible**: One or many
- **Visual feedback**: Grid highlights
- **Pleasant**: Staggered animation

---

## Comparison

### Before (Hidden Affordance)
```
┌─────────────────────────────────────┐
│ ○ WIZARD           [4,5]  ✓         │ ← Selected
│ ○ DRAGON           [2,3]  ✓         │
├─────────────────────────────────────┤
│ [→ SEND 2 TO CHAT]                  │ ← Hard to find
└─────────────────────────────────────┘
```

**Problem**: Button only appears when selected (bad affordance)

### After (Clear Affordance)
```
┌─────────────────────────────────────┐
│ [○] WIZARD           [4,5]    [→]   │ ← Always visible
│ [○] DRAGON           [2,3]    [→]   │ ← Clear action
└─────────────────────────────────────┘
```

**Solution**: Button always visible on every row

---

## Benefits

### ✅ Better Affordance
- Red buttons always visible
- Clear action (→)
- Same style as other actions

### ✅ Professional Look
- Square around symbol
- Clean borders
- Consistent sizing

### ✅ Organized
- LEGOS order
- Type-based grouping
- Recency within type

### ✅ Flexible
- Single send (click button)
- Multi-select (click row)
- Grid highlighting

---

## Mobile Support

### Touch Targets
- Row: 32px tall
- Button: 4px × 8px padding
- Square: 20px × 20px

### Visual Feedback
- Button scales on tap
- Row highlights on select
- Grid cells pulse

---

## Summary

### What Makes It Perfect

1. **Square around symbol** → Professional, clean
2. **Individual red buttons** → Clear affordance, always visible
3. **LEGOS order** → Predictable, organized
4. **Multi-select** → Flexible, powerful
5. **Pleasant highlighting** → Staggered, gentle

### Result
**Professional look + clear affordance + organized + flexible** ✅

---

## Test Checklist

- [ ] Symbols have square borders (20px)
- [ ] Red → buttons on every row
- [ ] Entities ordered by LEGOS
- [ ] Click button → text to chat
- [ ] Button flashes on click
- [ ] Click row → select/highlight
- [ ] Multi-select with Shift/Ctrl
- [ ] Grid cells highlight (staggered)
- [ ] Mobile: easy to tap buttons

**Result**: Perfect entity chip design ✅
