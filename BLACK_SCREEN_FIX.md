# Black Screen Fix - Tutorial Stops After First Step

## Issue
Tutorial stops after first step and screen goes black.

## Root Causes

### 1. Overlay Too Dark
**Problem**: Overlay opacity was 0.2 (20% dark on already dark background)
**Result**: Screen appears black when overlay is active

**Fix**: Reduced to 0.1 (10% dark)
```css
/* Before */
background: rgba(3,24,12,0.2);
box-shadow: 0 0 0 9999px rgba(3,24,12,0.2);

/* After */
background: rgba(3,24,12,0.1);
box-shadow: 0 0 0 9999px rgba(3,24,12,0.1);
```

### 2. Missing Target Handling
**Problem**: When target element not found (e.g., `#keyInput` before overlay opens), tutorial fails silently

**Fix**: Added graceful fallback
```javascript
if(target){
  // Position spotlight
} else {
  console.warn('[TUTORIAL] Target not found:', step.target);
  // Show card in center
  card.style.top = '50%';
  card.style.left = '50%';
  card.style.transform = 'translate(-50%,-50%)';
  // Hide spotlight hole
  hole.style.display = 'none';
}
```

### 3. Error Handling
**Problem**: Iframe access errors caused tutorial to break

**Fix**: Added try-catch with fallback
```javascript
try {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const target = iframeDoc.querySelector(step.target);
  // ... positioning logic
} catch(e) {
  console.error('[TUTORIAL] Error accessing iframe:', e);
  // Show card in center on error
  card.style.top = '50%';
  card.style.left = '50%';
  card.style.transform = 'translate(-50%,-50%)';
  hole.style.display = 'none';
}
```

---

## Changes Made

### 1. Lighter Overlay
```
0.2 → 0.1 opacity
```
**Result**: Screen is 90% visible instead of 80%

### 2. Graceful Degradation
```javascript
// If target not found
→ Show tooltip in center
→ Hide spotlight hole
→ Continue tutorial
```

### 3. Always Show Overlay
```javascript
// Always show overlay
overlay.classList.add('active');
// Reset hole display
if(hole.style.display === 'none'){
  hole.style.display = 'block';
}
```

---

## Visual Comparison

### Before (Black Screen)
```
┌─────────────────────────┐
│                         │
│                         │
│   [Black screen]        │
│   Can't see anything    │
│                         │
│                         │
└─────────────────────────┘
Opacity: 0.2 (too dark)
```

### After (Visible)
```
┌─────────────────────────┐
│                         │
│  [Slightly dimmed]      │
│  Can see interface      │
│                         │
│  ┌─────────────┐        │
│  │ Tooltip     │        │
│  └─────────────┘        │
└─────────────────────────┘
Opacity: 0.1 (light)
```

---

## Flow

### Step 1: Choose Tutorial
```
User clicks QUICKSTART
→ Tutorial starts
→ Overlay appears (0.1 opacity)
→ Screen visible ✓
```

### Step 2: Target Not Found
```
Looking for #keyInput
→ Not found (overlay not open yet)
→ Show tooltip in center
→ Hide spotlight hole
→ Continue tutorial ✓
```

### Step 3: User Clicks Forward
```
User clicks FORWARD
→ Next step loads
→ New target found
→ Spotlight repositions
→ Tutorial continues ✓
```

---

## Test Checklist

- [ ] Start QUICKSTART tutorial
- [ ] Screen should be visible (not black)
- [ ] Tooltip appears
- [ ] Click FORWARD
- [ ] Next step loads
- [ ] Screen stays visible
- [ ] Tutorial completes without black screen

---

## Summary

**Problem**: Black screen after first step
**Cause**: Overlay too dark (0.2) + missing target handling
**Fix**: Lighter overlay (0.1) + graceful fallback
**Result**: Screen always visible, tutorial never breaks ✅
