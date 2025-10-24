# Modal Tutorial - FIXED

## Problem
Modal tutorial (`thousand-tet-tut.html`) was looking for elements that don't exist:
- `#apiKeyBtn` → Doesn't exist
- `#globalScenarioSelect` → Doesn't exist  
- `#snapshotBtn` → Doesn't exist
- `#exportBtn` → Doesn't exist

**Result**: Console errors "Target not found"

---

## Solution
Updated all selectors to match actual element IDs in `thousand-tetrad.html`:

### Fixed Selectors

#### Quickstart Tutorial
1. `#cornerKey` - ◎ button (API key)
2. `.chat-input` - Message input
3. `.grid-cell` - Grid cells
4. `#cornerAdd` - ＋ button (add channel)
5. `#cornerExchange` - ⇆ button (import/export)

#### Studio Tutorial
1. `.grid-container` - Grid system
2. `.chat-input` - LEGOS system
3. `#cornerHelp` - ? button (help)
4. `.channel-header` - Channel options

#### Advanced Tutorial
1. `.grid-cell` - Element perspective
2. `#cornerKey` - Perspective selector
3. `.chat-input` - Advanced LEGOS
4. `#cornerExchange` - Session management

---

## How to Test

### Test 1: Open Modal Tutorial
1. Open `thousand-tet-tut.html` in browser
2. ✅ See tutorial picker with 4 options:
   - ⚡ QUICKSTART
   - ⋔ TETRAD STUDIO
   - ◎ ADVANCED
   - → SKIP

### Test 2: Quickstart Tutorial
1. Click **⚡ QUICKSTART**
2. ✅ Step 1: Highlights ◎ button (top-left)
3. ✅ Step 2: Highlights chat input
4. ✅ Step 3: Highlights grid cell
5. ✅ Step 4: Highlights ＋ button (bottom-right)
6. ✅ Step 5: Highlights ⇆ button (bottom-left)

### Test 3: Studio Tutorial
1. Click **⋔ TETRAD STUDIO**
2. ✅ Step 1: Highlights grid container
3. ✅ Step 2: Highlights chat input
4. ✅ Step 3: Highlights ? button
5. ✅ Step 4: Highlights channel header

### Test 4: Advanced Tutorial
1. Click **◎ ADVANCED**
2. ✅ Step 1: Highlights grid cell
3. ✅ Step 2: Highlights ◎ button
4. ✅ Step 3: Highlights chat input
5. ✅ Step 4: Highlights ⇆ button

---

## Console Messages

### Before Fix (Broken)
```
[TUTORIAL] Target not found: #apiKeyBtn
[TUTORIAL] Target not found: .tetrad-chip[data-fork="enhance"]
[TUTORIAL] Target not found: #snapshotBtn
[TUTORIAL] Target not found: #exportBtn
```

### After Fix (Working)
```
[TUTORIAL] Iframe loaded
// No errors - all targets found
```

---

## Tutorial Content

### Quickstart (5 steps)
1. **Store API Key** - Click ◎ to open key overlay
2. **Send a Message** - Use LEGOS system
3. **Grid Cells** - Click cells for actions
4. **Add Channel** - Click ＋ for new channel
5. **Export Session** - Click ⇆ to save

### Studio (4 steps)
1. **Grid System** - Spatial relationships
2. **LEGOS System** - L-E-G-O-S-U explained
3. **Help Menu** - Click ? for options
4. **Channel Header** - Manage channels

### Advanced (4 steps)
1. **Element Perspective** - Right-click for deep analysis
2. **Perspective Selector** - 👁 dropdown for viewpoint
3. **Advanced LEGOS** - Combine multiple elements
4. **Session Management** - Export/import workflows

---

## How It Works

### Spotlight System
```
1. User selects tutorial (Quickstart/Studio/Advanced)
2. Tutorial overlay appears
3. For each step:
   - Darkens screen (spotlight background)
   - Highlights target element (spotlight hole)
   - Shows instruction card
   - User clicks "GOT IT" or clicks highlighted element
4. Advances to next step
5. Completes when all steps done
```

### Iframe Access
```javascript
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
const target = iframeDoc.querySelector(step.target);
```

Accesses elements inside the iframe to:
- Get their position
- Highlight them
- Make them clickable through overlay

---

## Integration

### Two Tutorial Systems

#### 1. Modal Tutorial (`thousand-tet-tut.html`)
- **Purpose**: Launcher page with tutorial picker
- **Style**: Full-screen iframe + spotlight overlay
- **Use**: First-time users, structured learning paths
- **Trigger**: Open `thousand-tet-tut.html` directly

#### 2. Contextual Tour (`CONTEXTUAL_TOUR.js`)
- **Purpose**: In-app tooltips when menus appear
- **Style**: Small tooltips near features
- **Use**: Feature discovery, just-in-time learning
- **Trigger**: Automatic when menus open

### Use Both
- **Modal** for initial onboarding (structured path)
- **Contextual** for ongoing discovery (event-driven)

---

## Summary

**Problem**: Modal tutorial had wrong selectors
**Solution**: Updated to match actual element IDs
**Result**: All 3 tutorials (Quickstart, Studio, Advanced) now work

**Test**: Open `thousand-tet-tut.html` → Select tutorial → See spotlight highlights

**No more console errors** ✅
