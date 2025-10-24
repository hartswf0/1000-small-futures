# Tet-Tut Diagnostic - Safe Assessment

## Test Checklist (No Code Changes)

### Test 1: Open Tet-Tut
```
1. Open thousand-tet-tut.html in browser
2. What do you see?
   - [ ] Collection picker (QUICKSTART, TETRAD STUDIO, ADVANCED, SKIP)
   - [ ] Blacked out screen
   - [ ] Error in console
   - [ ] Other: ___________
```

### Test 2: Click QUICKSTART
```
1. Click QUICKSTART button
2. What happens?
   - [ ] Tutorial starts
   - [ ] Screen goes black
   - [ ] Nothing happens
   - [ ] Error in console
   - [ ] Other: ___________
```

### Test 3: Check Iframe
```
1. Open browser dev tools
2. Inspect #mainFrame element
3. What's the src?
   - [ ] thousand-tetrad.html
   - [ ] Empty/missing
   - [ ] Other: ___________
```

### Test 4: Check Overlay
```
1. Inspect .tutorial-overlay element
2. Check computed styles
   - [ ] display: block
   - [ ] display: none
   - [ ] z-index: ___________
   - [ ] opacity: ___________
```

---

## Current State Analysis

### Files Involved
1. `thousand-tet-tut.html` - Tutorial wrapper
2. `thousand-tetrad.html` - Main app (loaded in iframe)
3. `CONTEXTUAL_TOUR.js` - Native tour system
4. `GUIDED_TOUR.js` - Guided tour system

### Potential Conflicts
- Tet-tut loads tetrad in iframe
- Tetrad has its own tour systems
- Multiple tutorial systems may conflict

---

## Safe Fixes (Reversible)

### Fix 1: Add Iframe Source (Low Risk)
**Current**: Iframe may be missing src
**Fix**: Add src attribute
**Risk**: Very low - just adds missing attribute
**Reversible**: Yes - remove attribute

### Fix 2: Adjust Overlay Opacity (Low Risk)
**Current**: Overlay may be too dark
**Fix**: Change opacity from 0.5 to 0.3
**Risk**: Very low - just CSS change
**Reversible**: Yes - change back

### Fix 3: Fix Z-Index (Low Risk)
**Current**: Elements may be stacked wrong
**Fix**: Adjust z-index values
**Risk**: Low - just CSS change
**Reversible**: Yes - change back

---

## What NOT to Do (High Risk)

### ❌ Don't Rebuild from Scratch
- Too many moving parts
- Could break working features
- Hard to reverse

### ❌ Don't Merge Tutorial Systems
- Complex integration
- Could create conflicts
- Hard to debug

### ❌ Don't Change Core Logic
- Auto-advance removal
- Event listeners
- State management

---

## Recommended Approach

### Step 1: Diagnose (Safe)
Run the test checklist above and report findings

### Step 2: Minimal Fix (Low Risk)
Based on diagnosis, apply ONE small fix at a time

### Step 3: Test (Safe)
Verify fix works before proceeding

### Step 4: Repeat (Controlled)
Only proceed if previous fix worked

---

## Emergency Rollback

If anything breaks:

### Git Rollback
```bash
git checkout thousand-tet-tut.html
git checkout CONTEXTUAL_TOUR.js
```

### Manual Rollback
Keep backup copies before any changes:
```bash
cp thousand-tet-tut.html thousand-tet-tut.html.backup
```

---

## Summary

**Don't**: Make sweeping changes
**Do**: Diagnose first, fix incrementally
**Always**: Keep backups, test each change
**Remember**: Working code > perfect code

**Next Step**: Run the test checklist and report what you find. Then we'll make ONE small fix at a time.
