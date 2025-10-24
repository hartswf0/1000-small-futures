# Entity List - Final Design

## New Design: Vertical List with Dot Buttons

### Visual
```
┌─────────────────────────────────────┐
│ ASSISTANT MESSAGE                   │
│ The wizard casts a spell...         │
├─────────────────────────────────────┤
│ ● ▣ WIZARD           [4,5]          │ ← Click row to select
│ ● ○ DRAGON           [2,3]          │ ← Click dot to send
│ ● ◆ SPELL            [4,6]          │
│ ● ▲ ESCAPE           [7,8]          │
└─────────────────────────────────────┘
```

## Features

### 1. Vertical List (One Per Line)
- Each entity on separate line
- No wrapping
- Max height 200px, scrollable
- Gap 2px between rows

### 2. Small Dot Button
```
● ← 12px circle, click to send to chat
```
- Border color matches entity type
- Fills with color when clicked (flash)
- Separate from row selection

### 3. Selection Highlighting
```
Click row → Background changes to var(--panel)
          → Border-left thickens (2px → 4px)
          → Stays highlighted until another selected
```

### 4. Grid Highlighting
```
Click row → Grid cell gets:
          → Box shadow: 0 0 0 3px accent
          → Transform: scale(1.1)
          → Scrolls into view
```

---

## Interaction Flow

### Select Entity
```
1. Click row (not dot)
2. Row background → var(--panel)
3. Border-left → 4px
4. Grid cell highlights
5. Grid scrolls to cell
```

### Send to Chat
```
1. Click dot (●)
2. Text inserted into input
3. Input auto-focuses
4. Dot flashes (fills with color)
5. Row stays selected
```

---

## Row Structure

```
┌─────────────────────────────────────┐
│ [●] [▣] [WIZARD          ] [[4,5]]  │
│  ↑   ↑   ↑                  ↑       │
│  │   │   └─ Name (flex:1)   └─ Pos  │
│  │   └─ Symbol (10px)               │
│  └─ Dot button (12px)               │
└─────────────────────────────────────┘
```

### Spacing
- Gap: 6px between elements
- Padding: 3px 6px
- Border-left: 2px (4px when selected)

---

## Color Coding

### Temporal Opacity
```
Recency ≤ 1: opacity 1.0  (bright)
Recency ≤ 3: opacity 0.7  (medium)
Recency > 3: opacity 0.4  (faded)
```

### Border Color
- Matches entity type color
- From blockPalette

### Hover State
```
opacity → 1.0
background → var(--panel-dark)
```

### Selected State
```
background → var(--panel)
border-left → 4px
opacity → 1.0 (stays bright)
```

---

## Grid Highlighting

### Visual Effect
```css
box-shadow: 0 0 0 3px var(--accent), 0 0 20px var(--accent-glow);
transform: scale(1.1);
```

### Behavior
- Removes previous highlights
- Highlights selected cell
- Scrolls cell into view (smooth)
- Persists until new selection

---

## Benefits

### ✅ Clear List Format
- One entity per line
- Easy to scan
- No wrapping confusion

### ✅ Separate Actions
- Click row = select
- Click dot = send
- No accidental sends

### ✅ Visual Feedback
- Row highlights when selected
- Grid cell highlights
- Dot flashes when clicked

### ✅ Spatial Context
- Grid scrolls to entity
- Easy to see location
- Visual connection

### ✅ Temporal Tracking
- Opacity shows recency
- Sorted by activity
- Recent entities first

---

## Mobile-Friendly

### Touch Targets
- Row: Full width, 3px padding
- Dot: 12px circle (easy to tap)
- No precise clicking needed

### Scrolling
- Max height 200px
- Overflow-y: auto
- Smooth scrolling

---

## Summary

### Changed
- ❌ Wrapped chips → ✅ Vertical list
- ❌ Click to send → ✅ Click to select
- ❌ No grid link → ✅ Grid highlights

### Added
- ✅ Dot button (send to chat)
- ✅ Row selection (highlight)
- ✅ Grid highlighting (visual link)
- ✅ Scrollable list (200px max)

### Result
**Better UX**: Clear list, separate actions, grid connection, visual feedback ✅
