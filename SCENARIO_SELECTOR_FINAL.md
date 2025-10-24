# Scenario Selector - Final Design

## Design Philosophy

### ❌ Before (Bad UX)
- External button (clutters UI)
- Opens new tab (loses memory/context)
- Truncated names (hard to read)
- No default scenario

### ✅ After (Good UX)
- Info integrated into dropdown (◉ symbol)
- Inline overlay (stays on page)
- Full names visible (no truncation)
- Blank canvas as default

---

## Changes Made

### 1. Removed External Button
**Before**:
```html
<select id="globalScenarioSelect"></select>
<button id="globalCartridgeBtn">◉</button> ← External
<button id="globalTetradBtn">✦</button>
```

**After**:
```html
<select id="globalScenarioSelect"></select>
<button id="globalTetradBtn">✦</button> ← Only tetrad button
```

**Result**: Cleaner footer, less clutter

---

### 2. Info Symbol in Dropdown
**Before**:
```
MIGRAINE...  ← Truncated at 18 chars
```

**After**:
```
MIGRAINE ◉  ← Full name + info symbol
COCAINE INTOXICATION ◉
ORGANOPHOSPHATE POISONING ◉
```

**Features**:
- ◉ symbol indicates "more info available"
- Full names visible (no truncation)
- Double-click to view details

---

### 3. Inline Cartridge Overlay
**Before**: Opens new tab → loses context
**After**: Shows overlay → stays on page

```
┌─────────────────────────────┐
│ ✕                           │
│ MIGRAINE                    │
├─────────────────────────────┤
│ ROLE                        │
│ You are a medical student...│
│                             │
│ CONTEXT                     │
│ Patient presents with...    │
│                             │
│ RECURSIVE PATTERNS          │
│ • Symptom escalation        │
│ • Differential diagnosis    │
│                             │
│ [CLOSE]                     │
└─────────────────────────────┘
```

**Features**:
- Modal overlay (doesn't leave page)
- Shows role, context, recursive patterns
- Mobile-friendly (600px max, 85vh)
- Scrollable content

---

### 4. Blank Canvas Default
```javascript
// Set blank as default
globalScenarioSelect.value = 'blank';
```

**Result**: Clean starting point for new users

---

## User Interaction

### View Scenario Info
```
1. Select scenario from dropdown
   ↓
2. Double-click dropdown
   ↓
3. Overlay appears with full info
   ↓
4. Read details
   ↓
5. Close overlay
   ↓
6. Still on same page ✓
```

**Alternative**: Right-click option (future enhancement)

---

## Dropdown Styling

### Full Names
```javascript
// Before
const displayName = scenarios[id].name.length > 18 
  ? scenarios[id].name.substring(0, 17) + '…' 
  : scenarios[id].name;

// After
option.textContent = scenarios[id].name.toUpperCase() + ' ◉';
```

**Result**: 
- No truncation
- Full readability
- Info symbol visible

---

### Better Spacing
```css
.global-scenario-select option {
  padding: 10px 12px; /* More spacious */
  line-height: 1.6; /* More readable */
  border-bottom: 1px solid var(--border); /* Separation */
}
```

---

## Cartridge Info Display

### Overlay Structure
```html
<div class="overlay" id="cartridgeOverlay">
  <div class="overlay-card" style="max-width:600px;max-height:85vh;">
    <button class="close-overlay">×</button>
    <div class="overlay-title" id="cartridgeTitle">SCENARIO NAME</div>
    <div id="cartridgeContent">
      <!-- Dynamic content -->
    </div>
    <div class="overlay-actions">
      <button class="secondary-btn">CLOSE</button>
    </div>
  </div>
</div>
```

### Content Sections
```javascript
// ROLE
<div style="color:var(--accent);font-weight:700;">ROLE</div>
<div>${scenario.role}</div>

// CONTEXT
<div style="color:var(--accent);font-weight:700;">CONTEXT</div>
<div>${scenario.context}</div>

// RECURSIVE PATTERNS (if available)
<div style="color:var(--accent);font-weight:700;">RECURSIVE PATTERNS</div>
<div>${scenario.recursivePatterns.join('<br>')}</div>
```

---

## Mobile Responsive

### Dropdown
```css
.global-scenario-select {
  flex: 1;
  min-width: 0; /* Flex properly */
  max-width: none; /* Full width */
  padding: 12px 14px; /* Touch-friendly */
}
```

### Overlay
```html
<div class="overlay-card" style="
  max-width: min(600px, calc(100vw - 32px));
  max-height: 85vh;
  overflow-y: auto;
">
```

**Features**:
- Adapts to screen width
- Never exceeds viewport
- Scrollable on small screens
- 32px margin on mobile

---

## Visual Comparison

### Before (External Button)
```
┌─────────────────────────────┐
│                             │
│ [SCENA...▾] [◉] [✦]        │ ← Cluttered
│                             │
└─────────────────────────────┘
        ↓ Click ◉
Opens new tab → Loses context ✗
```

### After (Integrated)
```
┌─────────────────────────────┐
│                             │
│ [FULL SCENARIO NAME ◉ ▾] [✦]│ ← Clean
│                             │
└─────────────────────────────┘
        ↓ Double-click
Shows overlay → Stays on page ✓
```

---

## Benefits

### ✅ No Context Loss
- Stays on same page
- Doesn't open new tab
- Memory preserved

### ✅ Better Readability
- Full scenario names
- No truncation
- Info symbol (◉) indicates more details

### ✅ Cleaner UI
- No external button
- Less clutter
- Integrated design

### ✅ Mobile-Friendly
- Full-width dropdown
- Touch-friendly overlay
- Responsive sizing

### ✅ Default Scenario
- Blank canvas on load
- Clean starting point
- No confusion

---

## Interaction Patterns

### Primary: Select Scenario
```
Click dropdown → Select scenario → Auto-applies
```

### Secondary: View Info
```
Double-click dropdown → Overlay appears → Read details → Close
```

### Future: Context Menu
```
Right-click option → Show info
```

---

## Summary

### Removed
- ❌ External cartridge button
- ❌ New tab navigation
- ❌ Name truncation
- ❌ Empty default

### Added
- ✅ Info symbol in dropdown (◉)
- ✅ Inline overlay (stays on page)
- ✅ Full scenario names
- ✅ Blank canvas default
- ✅ Double-click to view info

### Result
**Better UX**: Integrated, readable, mobile-friendly, no context loss ✅

---

## Test Checklist

- [ ] Dropdown shows full names
- [ ] ◉ symbol visible in options
- [ ] Blank canvas selected by default
- [ ] Double-click opens overlay
- [ ] Overlay shows role, context, patterns
- [ ] Overlay scrollable on mobile
- [ ] Close button works
- [ ] Stays on same page (no new tab)
- [ ] Mobile: dropdown full width
- [ ] Mobile: overlay fits screen

**Result**: Polished, integrated scenario selector with inline info viewing ✅
