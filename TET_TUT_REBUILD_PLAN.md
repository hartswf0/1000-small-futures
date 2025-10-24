# Tet-Tut Rebuild Plan - Pre-Flight Checklist

## Current Issues

### 1. ❌ Blacked Out / Not Visible
- Tutorial overlay is broken
- Can't see the interface through it
- Feels unfinished

### 2. ❌ Conflicting with Native Tour
- Two tutorial systems showing at once
- Tet-tut should be **independent** pre-flight
- Native tour is **in-app** contextual help

### 3. ❌ Aesthetic Degradation
- Lost the polished feel
- Not matching grid aesthetic
- Feels rushed/broken

### 4. ❌ Perspective Overlay Issues
- X button in wrong place
- Top buttons not usable
- Needs better mobile UX

---

## What Tet-Tut Should Be

### ✅ Independent Linear Onboarding
**Purpose**: Pre-flight checklist before takeoff

**Metaphor**: Airplane boarding
- Check ticket (API key)
- Find your seat (send first message)
- Understand safety features (grid, buttons)
- Ready for takeoff (enter main app)

**NOT**: In-app contextual help (that's the native tour)

---

## Rebuild Strategy

### Phase 1: Fix Core Functionality
1. **Make overlay visible** - Fix blacked-out issue
2. **Remove conflicts** - Separate from native tour
3. **Test each step** - Ensure it works

### Phase 2: Polish Aesthetic
1. **Match grid style** - LEGOS symbols, monospace
2. **Smooth animations** - Pulsing, fading
3. **Clear instructions** - Box drawing, spacing

### Phase 3: Linear Flow
1. **Step 1: API Key** - "Fuel the plane"
2. **Step 2: First Message** - "Start the engine"
3. **Step 3: Grid Interaction** - "Understand the controls"
4. **Step 4: Ready to Fly** - "You're cleared for takeoff"

---

## Tet-Tut vs Native Tour

### Tet-Tut (Pre-Flight)
- **When**: Before first use
- **Where**: Separate page (`thousand-tet-tut.html`)
- **Purpose**: Ensure readiness
- **Style**: Linear, sequential, checklist
- **Metaphor**: Airplane boarding
- **Completion**: Redirects to main app

### Native Tour (In-Flight)
- **When**: During use
- **Where**: Inside main app (`thousand-tetrad.html`)
- **Purpose**: Contextual help
- **Style**: Event-driven, tooltips
- **Metaphor**: Flight attendant
- **Completion**: Dismissible, repeatable

---

## Fixed Tet-Tut Structure

### Landing Page
```
┌─────────────────────────────┐
│                             │
│   ◎ TETRAD PRE-FLIGHT       │
│                             │
│   Before you fly, let's     │
│   make sure you're ready.   │
│                             │
│   [START CHECKLIST]         │
│                             │
└─────────────────────────────┘
```

### Step 1: API Key
```
┌─────────────────────────────┐
│ ✓ STEP 1/4: FUEL            │
│                             │
│ Store your OpenAI API key   │
│                             │
│ [Input field]               │
│                             │
│ [SAVE & CONTINUE]           │
└─────────────────────────────┘
```

### Step 2: First Message
```
┌─────────────────────────────┐
│ ✓ STEP 2/4: ENGINE          │
│                             │
│ Send your first message     │
│ using LEGOS                 │
│                             │
│ [Message input]             │
│                             │
│ [SEND & CONTINUE]           │
└─────────────────────────────┘
```

### Step 3: Grid Interaction
```
┌─────────────────────────────┐
│ ✓ STEP 3/4: CONTROLS        │
│                             │
│ Click a grid cell to see    │
│ entity actions              │
│                             │
│ [Grid shown]                │
│                             │
│ [CONTINUE]                  │
└─────────────────────────────┘
```

### Step 4: Ready
```
┌─────────────────────────────┐
│ ✓ STEP 4/4: CLEARED         │
│                             │
│ You're ready for takeoff!   │
│                             │
│ [ENTER TETRAD] →            │
└─────────────────────────────┘
```

---

## Perspective Overlay Fixes

### Current Issues
1. **X button wrong place** - Should be top-right
2. **Top buttons not usable** - Overlapping/hidden
3. **Mobile UX poor** - Too big, covers screen

### Fixes Needed

#### 1. X Button Position
```css
.close-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
  /* NOT bottom-right */
}
```

#### 2. Top Buttons Visible
```css
.perspective-overlay-content {
  padding-top: 60px;
  /* Space for buttons */
}

.perspective-buttons {
  position: sticky;
  top: 0;
  z-index: 10;
  /* Always visible */
}
```

#### 3. Mobile Responsive
```css
.perspective-overlay {
  max-width: min(600px, 100vw);
  max-height: 90vh;
  overflow-y: auto;
  /* Fits on mobile */
}
```

---

## Implementation Plan

### Day 1: Core Fixes
- [ ] Fix blacked-out overlay
- [ ] Remove auto-advance
- [ ] Test each step works
- [ ] Fix perspective X button

### Day 2: Polish
- [ ] Add LEGOS grid styling
- [ ] Smooth animations
- [ ] Clear instructions
- [ ] Fix perspective top buttons

### Day 3: Integration
- [ ] Separate from native tour
- [ ] Add redirect to main app
- [ ] Test full flow
- [ ] Mobile responsive

---

## Success Criteria

### ✅ Tet-Tut Works
1. User opens `thousand-tet-tut.html`
2. Sees clear pre-flight checklist
3. Completes 4 steps
4. Redirects to `thousand-tetrad.html`
5. Ready to use the app

### ✅ No Conflicts
1. Tet-tut is independent
2. Native tour is separate
3. No overlapping tutorials
4. Clear separation of concerns

### ✅ Polished Experience
1. Matches grid aesthetic
2. Smooth animations
3. Clear instructions
4. Mobile responsive

---

## Summary

**Problem**: Tet-tut has degraded, conflicts with native tour, feels unfinished

**Solution**: Rebuild as independent pre-flight checklist

**Metaphor**: Airplane boarding - ensure readiness before takeoff

**Result**: Clean, polished, linear onboarding that tests the interface

**Next Steps**: Fix core issues, polish aesthetic, test full flow
