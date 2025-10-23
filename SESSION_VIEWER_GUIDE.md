# LEGOS Session Viewer - Quick Reference

## ✨ Classic LEGOS Interface

**Styled to match** `thousand-tetrad.html` with:
- **4 Corner Buttons** (◎ ? ⇆ ◐)
- **Header/Footer** design
- **CRT Green theme** (toggleable to Thousand theme)
- **Tabbed navigation**
- **Channel color-coding**

---

## 🎯 Quick Start

### Load Your Sessions

**Option 1: Click Corner Button**
```
Click ◎ (top-left) → LOAD JSON FILE
```

**Option 2: Load Samples**
```
Click ◎ (top-left) → SAMPLE: RING MEMORY or SAMPLE: MULTI-CHANNEL
```

**Option 3: Direct Link**
```
Open: session-viewer.html
Click central LOAD JSON FILE button
```

---

## 📂 Supported Formats

### 1. Ring Memory Export
**File**: `legos-ring-memory-*.json`

Contains:
- Ring memory entries (up to 48)
- Channel metadata (names, colors, scenarios)
- Export timestamp

**Use for**: Timeline view of narrative beats across channels

### 2. Multi-Channel Export
**File**: `legos-multi-channel-*.json`

Contains:
- Full channel state with messages
- LEGOS grids (9×9)
- System instructions
- Ring memory
- Snapshots

**Use for**: Complete session reconstruction and analysis

---

## 🎨 Four Corner Buttons

| Button | Position | Function |
|--------|----------|----------|
| **◎** | Top-Left | Load session files |
| **?** | Top-Right | Help and formats info |
| **⇆** | Bottom-Left | Export (future) |
| **◐** | Bottom-Right | Toggle theme (CRT ↔ Thousand) |

---

## 📑 Four Tabs

### 1. **Overview**
- Export metadata
- Session statistics
- Channel summary cards
- Quick navigation

### 2. **Channels**
**Ring Memory Format**:
- Channel names and colors
- Scenario types
- IDs and metadata

**Multi-Channel Format**:
- Full message history
- System instructions (expandable)
- LEGOS grid state (9×9 visual)
- Channel-specific stats

### 3. **Ring Memory**
- All 48 ring entries (or less)
- Chronological order
- Type badges (SCENE/PERSPECTIV/SNAPSHOT)
- Channel color-coded
- Headlines and summaries
- Timestamps and symbols

### 4. **Snapshots**
- Saved simulation states
- Grid cell counts
- Message counts
- Timestamps

---

## 🎨 Visual Design

### Theme: CRT Green (Default)
```
Background: #03180c (deep green-black)
Accent: #56ff9f (bright green)
Text: #aef3c1 (light green)
```

### Theme: Thousand (Toggle with ◐)
```
Background: #050507 (near black)
Accent: #ff3d4e (red)
Text: #f6f2ef (off-white)
```

### Channel Colors
Each channel displays in its unique color:
- Borders
- Titles
- Badges
- Ring entry accents

---

## 📊 Reading the Data

### Channel Card
```
┌────────────────────────────────────┐
│ MAYA PRIME             [mouseofsilver] │ ← Name + scenario
│ CH00000001 · Ring: R0066           │ ← ID + ring binding
├────────────────────────────────────┤
│ System Instruction (expandable)    │
├────────────────────────────────────┤
│ Messages:                          │
│  [SYSTEM]  08:11:23                │
│  Mouse of Silver scenario primed...│
│                                    │
│  [USER]    08:11:25                │
│  Your mother says: "I'm not..."    │
├────────────────────────────────────┤
│ Grid State (9×9) (expandable)      │
│ [3D grid visualization]            │
└────────────────────────────────────┘
```

### Ring Entry
```
┌────────────────────────────────────┐
│ Embrace of Impermanence   [SCENE]  │ ← Headline + type
│ MAYA PRIME · L 5 5 · R0071        │ ← Channel + symbol + ID
│ In a surreal psychedelic landscape,│ ← Summary
│ Clancy and his mother navigate...  │
└────────────────────────────────────┘
```

### Grid Visualization
```
┌─┬─┬─┬─┬─┬─┬─┬─┬─┐
│ │ │ │ │ │ │ │ │ │  Empty cells
├─┼─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │ │ │O│ │ │ │ │  O = Obstacle
├─┼─┼─┼─┼─┼─┼─┼─┼─┤
│ │ │E│ │ │ │G│ │ │  E = Entity, G = Goal
├─┼─┼─┼─┼─┼─┼─┼─┼─┤
│L│ │ │ │ │ │ │ │S│  L = Location, S = Solution
└─┴─┴─┴─┴─┴─┴─┴─┴─┘
```

---

## 🔍 What You Can See

### Ring Memory Export
✅ Ring entries with timestamps
✅ Channel names and colors
✅ Entry types (Scene/Perspective/Snapshot)
✅ Headlines and summaries
✅ Symbols and grid positions
❌ Full message history (not included in export)
❌ Grid state (not included in export)

### Multi-Channel Export
✅ Everything from Ring Memory, PLUS:
✅ Full conversation history (user/assistant messages)
✅ System instructions for each channel
✅ Complete LEGOS grid state (9×9)
✅ Snapshots with grid data
✅ Channel configuration details

---

## 💡 Use Cases

### 1. **Session Review**
Load your multi-channel export to see:
- How conversations evolved
- Which entities were placed where
- When you took snapshots
- Ring memory flow across channels

### 2. **Narrative Analysis**
Track storytelling patterns:
- Scene vs perspective ratio
- Channel switching frequency
- Recurring themes in summaries
- Grid usage patterns

### 3. **Debugging**
Verify session integrity:
- Message timestamps in order
- Grid cells properly placed
- Ring entries correctly logged
- Channel colors consistent

### 4. **Archival**
Create permanent records:
- Export after important sessions
- Document creative process
- Share narrative timelines
- Compare session strategies

---

## 🎯 Footer Stats

Always visible at bottom:
```
13 ENGINES LOADED · TETRAD SYSTEMS OPERATIONAL

[32] Channels    [156] Messages    [48] Ring Entries
```

Live updates as you load different sessions.

---

## ⌨️ Tips & Tricks

### Quick Theme Toggle
Click **◐** (bottom-right) to instantly switch between CRT Green and Thousand Red themes.

### Expandable Details
- **System Instructions**: Click to expand/collapse
- **Grid State**: Click to show/hide 9×9 visualization
- Keeps interface clean while preserving data access

### Message Truncation
- First 10 messages shown per channel
- First 300 characters per message
- Prevents overwhelming long exports

### Grid Cell Tooltips
Hover over grid cells to see:
- Cell type (Location/Entity/Goal/etc.)
- Label or name
- Empty vs occupied

---

## 🔄 Workflow

### Standard Session Review
1. Export from `thousand-tetrad.html` (⇆ → EXPORT SESSION)
2. Open `session-viewer.html`
3. Click **◎** → LOAD JSON FILE
4. Select your export
5. Navigate tabs (Overview → Channels → Ring → Snapshots)
6. Toggle theme with **◐** if desired

### Quick Sample Load
1. Open `session-viewer.html`
2. Click **◎** → SAMPLE: MULTI-CHANNEL
3. Explore pre-loaded session
4. See full capabilities demonstrated

---

## 📚 Related Files

- **session-viewer.html** - Main viewer interface
- **session-viewer-styles.css** - CRT green styling
- **session-viewer-main.js** - Tab and data rendering logic
- **SESSION_VIEWER_GUIDE.md** - This file

---

## 🎨 Design Philosophy

### Classic LEGOS Interface
Matches the aesthetic of `thousand-tetrad.html`:
- Four corner button pattern
- Header/footer structure
- Same color variables
- Same typography
- Same interaction patterns

### Why This Matters
- **Familiar**: Users know the interface
- **Consistent**: Same navigation paradigm
- **Integrated**: Feels like part of the same system
- **Professional**: Polished, cohesive design

### GitHub Influence
Removed from the new design:
- Timeline-style commit graph
- Vertical connection lines
- Date group headers

Added in new design:
- Tabbed content organization
- Card-based layouts
- Expandable sections
- Corner button navigation

---

## 🆚 vs Ring Memory Viewer

| Feature | Ring Viewer | Session Viewer |
|---------|-------------|----------------|
| **Interface** | GitHub timeline | Classic LEGOS |
| **Buttons** | 2 (load, filter) | 4 corners (◎?⇆◐) |
| **Navigation** | Scroll + filter | Tabs |
| **Themes** | 1 (CRT green) | 2 (CRT + Thousand) |
| **Data** | Ring only | Ring + Channels + Grids |
| **Layout** | Timeline entries | Tabbed sections |
| **Best For** | Timeline view | Full session analysis |

**Use Ring Viewer when**: You want chronological narrative flow
**Use Session Viewer when**: You need full session reconstruction

---

## ✅ Production Status

**Ready**: ✨ Yes

All features implemented:
- ✅ Four corner buttons with menus
- ✅ Theme toggle (CRT ↔ Thousand)
- ✅ Tabbed navigation (4 tabs)
- ✅ Ring memory display
- ✅ Multi-channel support
- ✅ Grid visualization
- ✅ Message rendering
- ✅ Snapshot display
- ✅ Channel color coding
- ✅ Expandable sections
- ✅ Footer stats
- ✅ Sample file loading
- ✅ Mobile responsive

---

## 🚀 Try It Now

```bash
# Option 1: Main interface
open session-viewer.html

# Option 2: Via index
open index.html  # Click #13 SESSION VIEWER
```

Load your exported sessions and explore! 🎯

---

**Part of 1000 Small Futures**  
**Style**: Classic LEGOS Interface  
**Created**: 2025-10-23  
**Version**: 1.0
