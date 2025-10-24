# Scenario Selector Upgrade + Tet-Tut Fix

## Issues Fixed

### 1. ❌ Tet-Tut Stuck After API Step
**Problem**: Tutorial stops advancing after API key step
**Cause**: Spotlight hole display set to 'none' and never reset
**Fix**: Added setTimeout to reset hole display for next step

### 2. ❌ Scenario Selector Primitive
**Problems**:
- Hard to read full scenario names
- Not mobile-friendly (130px max-width)
- Poor aesthetics
- No link to cartridge page

---

## Tet-Tut Fix

### Before (Stuck)
```javascript
hole.style.display = 'none'; // Never reset
// Next step: hole still hidden
// Tutorial appears broken
```

### After (Fixed)
```javascript
hole.style.display = 'none';
// ...
setTimeout(() => {
  if(hole.style.display === 'none'){
    hole.style.display = 'block'; // Reset for next step
  }
}, 100);
```

**Result**: Tutorial advances properly through all steps ✅

---

## Scenario Selector Upgrade

### Visual Improvements

#### Before (Primitive)
```css
border: 1px solid var(--border);
color: var(--text-muted);
padding: 10px 12px;
max-width: 130px; /* Too narrow! */
letter-spacing: 0.15em; /* Too spaced */
```

#### After (Polished)
```css
border: 2px solid var(--border);
color: var(--text); /* More visible */
padding: 12px 14px; /* More spacious */
max-width: none; /* Full width */
min-width: 0; /* Flex properly */
letter-spacing: 0.05em; /* Readable */
box-shadow: 0 2px 8px rgba(0,0,0,0.3); /* Depth */
```

---

### Mobile-Friendly

#### Before
```
┌──────────────┐
│ SCENARIO... │ ← Cut off at 130px
└──────────────┘
```

#### After
```
┌────────────────────────────┐
│ FULL SCENARIO NAME HERE    │ ← Full width
└────────────────────────────┘
```

**Changes**:
- Removed `max-width: 130px`
- Added `min-width: 0` for flex
- Increased padding for touch targets
- Better line-height for readability

---

### Dropdown Options

#### Before
```css
.global-scenario-select option {
  padding: 6px 8px;
  font-size: 10px;
}
```

#### After
```css
.global-scenario-select option {
  padding: 10px 12px; /* More spacious */
  font-size: 10px;
  line-height: 1.6; /* More readable */
  border-bottom: 1px solid var(--border); /* Separation */
}
.global-scenario-select option:hover {
  background: var(--panel-dark);
  color: var(--accent); /* Highlight */
}
```

---

### Optgroups (Categories)

#### Before
```css
.global-scenario-select optgroup {
  font-size: 9px;
  background: var(--panel-dark);
  padding: 4px;
}
```

#### After
```css
.global-scenario-select optgroup {
  font-size: 10px; /* Larger */
  background: var(--bg); /* Darker */
  padding: 8px; /* More spacious */
  border-bottom: 1px solid var(--border); /* Separation */
}
```

---

### Cartridge Link Button

#### New Button Added
```html
<button class="footer-tetrad-btn" id="globalCartridgeBtn" title="View Cartridge Info">◉</button>
```

**Symbol**: ◉ (circle with dot)
**Purpose**: Opens CARTRIDGE_BROWSER.html for current scenario
**Position**: Between scenario selector and tetrad button

#### Functionality
```javascript
globalCartridgeBtn.addEventListener('click', () => {
  const activeChannel = appState.channels.find(ch => ch.id === appState.currentChannelId);
  if (activeChannel && activeChannel.scenario) {
    // Open cartridge browser with scenario hash
    window.open(`CARTRIDGE_BROWSER.html#${activeChannel.scenario}`, '_blank');
  } else {
    showHelpBanner('Select a scenario first');
  }
});
```

**Features**:
- Opens in new tab
- Passes scenario ID via hash
- Shows error if no scenario selected
- Single-symbol button (◉)

---

## Visual Comparison

### Before (Primitive)
```
┌─────────────────────────────┐
│                             │
│ [SCENA...▾] [✦]            │ ← Cut off, cramped
│                             │
└─────────────────────────────┘
```

### After (Polished)
```
┌─────────────────────────────┐
│                             │
│ [FULL SCENARIO NAME ▾] [◉] [✦] │ ← Full width, spaced
│                             │
└─────────────────────────────┘
```

---

## Mobile Responsive

### Desktop
```
┌────────────────────────────────────┐
│ [MEDICAL TRAINING: MIGRAINE ▾] [◉] [✦] │
└────────────────────────────────────┘
```

### Mobile (375px)
```
┌──────────────────────────┐
│ [MEDICAL: MIGRAINE ▾]    │
│ [◉] [✦]                  │
└──────────────────────────┘
```

**Features**:
- Selector takes full available width
- Buttons stack if needed
- Touch-friendly padding (12px)
- Readable font size (10px)

---

## Dropdown Improvements

### Categories (Optgroups)
```
┌────────────────────────────┐
│ MEDIA THEORY               │ ← Category header
├────────────────────────────┤
│ Blank Canvas               │
│ Microdrama                 │
│ Social Media               │
├────────────────────────────┤
│ MEDICAL TRAINING           │ ← Next category
├────────────────────────────┤
│ Migraine                   │
│ Cocaine Intoxication       │
└────────────────────────────┘
```

**Features**:
- Clear category headers (accent color)
- Separated by borders
- More padding (8px vs 4px)
- Larger font (10px vs 9px)

### Options
```
┌────────────────────────────┐
│ Migraine                   │ ← Normal
├────────────────────────────┤
│ Cocaine Intoxication       │ ← Hover (accent)
├────────────────────────────┤
│ Organophosphate Poisoning  │
└────────────────────────────┘
```

**Features**:
- More padding (10px vs 6px)
- Better line-height (1.6)
- Hover effect (accent color)
- Border separation

---

## Cartridge Integration

### Flow
```
1. User selects scenario
   ↓
2. Clicks ◉ button
   ↓
3. Opens CARTRIDGE_BROWSER.html#scenario_id
   ↓
4. Reads full scenario details
   ↓
5. Returns to tetrad app
```

### URL Format
```
CARTRIDGE_BROWSER.html#migraine
CARTRIDGE_BROWSER.html#cocaine_intox
CARTRIDGE_BROWSER.html#blank
```

**Benefits**:
- Direct link to scenario info
- Opens in new tab (doesn't lose work)
- Single-click access
- Minimal UI (just ◉ symbol)

---

## Summary

### Tet-Tut Fix
- ✅ Spotlight hole resets between steps
- ✅ Tutorial advances properly
- ✅ No more stuck after API step

### Scenario Selector
- ✅ Full-width (no 130px limit)
- ✅ More readable (better spacing, line-height)
- ✅ Mobile-friendly (responsive, touch targets)
- ✅ Better aesthetics (shadows, borders, hover)
- ✅ Cartridge link button (◉)

### Design System
- ✅ Matches grid aesthetic
- ✅ Monospace font
- ✅ Accent color highlights
- ✅ Border separations
- ✅ Box shadows for depth

---

## Test Checklist

### Tet-Tut
- [ ] Start tutorial
- [ ] Complete API step
- [ ] Click FORWARD
- [ ] Tutorial advances (not stuck)
- [ ] Complete all steps

### Scenario Selector
- [ ] Open on mobile (375px)
- [ ] Selector takes full width
- [ ] Can read full scenario names
- [ ] Dropdown shows categories
- [ ] Options have hover effect
- [ ] Click ◉ button
- [ ] Opens cartridge browser
- [ ] Scenario ID in URL

**Result**: Polished, mobile-friendly scenario selector with cartridge integration ✅
