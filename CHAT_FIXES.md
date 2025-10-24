# Chat Interaction Fixes

## 1. Megablocks Now Collapse ✅

### Problem
```
Click megablock → Opens menu (not collapse)
Can't collapse messages easily
```

### Fix
```javascript
// Before: Opens action menu
toggleMessageActions(channel, msg, item);

// After: Collapses (like user messages)
item.classList.toggle('collapsed');
```

### Result
- **Click megablock → Collapse/expand** ✅
- **Entity chips still work** (ignored in click handler)
- **Same behavior as user messages** ✅

---

## 2. Multi-Highlight from Chat ✅

### Problem
```
Click entity in chat → Only that one highlights
Can't select multiple from different messages
Can't see multiple on grid at once
```

### Fix
```javascript
// Get ALL entity chips across ALL messages in channel
const allEntityRows = channelColumn?.querySelectorAll('.entity-chip-row');

// Highlight ALL selected on grid
const selectedEntities = allSelected.map(r => ({
  x: parseInt(r.dataset.entityX),
  y: parseInt(r.dataset.entityY)
}));
highlightGridCells(channel, selectedEntities);
```

### Result
- **Click entity in any message → Select** ✅
- **Shift+Click more → Multi-select** ✅
- **All selected show on grid (white)** ✅
- **Works across different messages** ✅

---

## Visual Examples

### Megablock Collapse
```
Before:
┌─────────────────────────────────────┐
│ ASSISTANT MESSAGE (MEGABLOCK)       │
│ [Full content always visible]       │
│ Click → Opens menu (annoying)       │
└─────────────────────────────────────┘

After:
┌─────────────────────────────────────┐
│ ASSISTANT MESSAGE (MEGABLOCK)       │ ← Click to collapse
│ [Preview line...]                   │
└─────────────────────────────────────┘
```

---

### Multi-Highlight from Chat
```
Message 1:
┌─────────────────────────────────────┐
│ [▣] TAVERN  [2,2]  [→]  ✓           │ ← Selected
│ [○] WIZARD  [4,5]  [→]              │
└─────────────────────────────────────┘

Message 2:
┌─────────────────────────────────────┐
│ [▲] ESCAPE  [7,8]  [→]  ✓           │ ← Shift+Click selected
│ [◆] CURSE   [3,4]  [→]              │
└─────────────────────────────────────┘

Grid:
┌────┐         ┌────┐
│ ▣ ①│         │ ▲ ②│ ← Both highlighted (white)
└────┘         └────┘
```

---

## How Multi-Highlight Works

### Step-by-Step
```
1. Click entity in Message 1
   → Entity highlights
   → Grid cell highlights (white)

2. Scroll to Message 2
   → Shift+Click entity
   → Both entities selected
   → Both grid cells highlight (①②)

3. Shift+Click more entities
   → All stay selected
   → All show on grid (①②③④)
```

### Cross-Message Selection
```
Message 1: TAVERN selected
Message 2: WIZARD selected  
Message 3: ESCAPE selected

Grid shows: All 3 highlighted (①②③)
```

---

## Benefits

### ✅ Megablock Collapse
- **Click to collapse** (like user messages)
- **Less scrolling** (hide old content)
- **Entity chips still work** (not affected)
- **Consistent behavior** (all messages same)

### ✅ Multi-Highlight from Chat
- **Select across messages** (not just one)
- **See all on grid** (visual context)
- **White highlighting** (persistent, clear)
- **Index badges** (shows order ①②③)

---

## Interaction Patterns

### Collapse Megablock
```
Click message → Collapse
Click again   → Expand
Click entity  → Select (doesn't collapse)
```

### Multi-Select Entities
```
Click entity         → Select (deselect others)
Shift+Click entity   → Add to selection
Click selected       → Deselect
All selected         → Show on grid (white)
```

### Cross-Message Selection
```
Message 1: Click TAVERN
Message 2: Shift+Click WIZARD
Message 3: Shift+Click ESCAPE

Result: All 3 highlighted on grid (①②③)
```

---

## Technical Details

### Megablock Click Handler
```javascript
item.addEventListener('click', (event) => {
  // Ignore entity chip clicks
  if (event.target.closest('.entity-chip-row')) return;
  if (event.target.closest('.message-actions')) return;
  
  // Toggle collapse
  item.classList.toggle('collapsed');
  // ... update active state
});
```

### Cross-Message Selection
```javascript
// Get ALL entity rows in channel (not just current message)
const channelColumn = channel.dom?.column;
const allEntityRows = channelColumn?.querySelectorAll('.entity-chip-row');

// Deselect all if not multi-select
if (!isMultiSelect) {
  allEntityRows.forEach(r => r.classList.remove('selected'));
}

// Highlight ALL selected on grid
const allSelected = Array.from(allEntityRows).filter(r => 
  r.classList.contains('selected')
);
highlightGridCells(channel, allSelected);
```

---

## Use Cases

### 1. Collapse Old Messages
```
Long conversation → Click old megablocks
                 → Collapse to preview
                 → Less scrolling
```

### 2. Compare Entities Across Scenes
```
Scene 1: TAVERN, WIZARD
Scene 2: DRAGON, CURSE
Scene 3: ESCAPE, VICTORY

Select: WIZARD (Scene 1) + ESCAPE (Scene 3)
Grid:   Both highlighted → See spatial relationship
```

### 3. Build Complex Selections
```
Message 1: Select LOCATION
Message 2: Select ENTITY
Message 3: Select GOAL

Grid: All 3 highlighted (①②③)
      See full context
```

### 4. Visual Analysis
```
Select multiple entities from different scenes
See them all on grid at once
Understand spatial patterns
```

---

## Summary

### Fixed
- ✅ Megablocks collapse on click (not just menu)
- ✅ Multi-select works across all messages
- ✅ All selected entities show on grid
- ✅ White highlighting (persistent, clear)
- ✅ Index badges (①②③)

### Result
**Collapsible messages + cross-message multi-select + visual grid context** ✅

---

## Test Checklist

- [ ] Click megablock → Collapses
- [ ] Click again → Expands
- [ ] Click entity in Message 1 → Highlights on grid
- [ ] Shift+Click entity in Message 2 → Both on grid
- [ ] Shift+Click more → All show on grid (①②③)
- [ ] White highlighting (persistent)
- [ ] Index badges appear
- [ ] Entity chips don't collapse message
- [ ] Multi-send button works

**Result**: Better chat interaction + visual grid context ✅
