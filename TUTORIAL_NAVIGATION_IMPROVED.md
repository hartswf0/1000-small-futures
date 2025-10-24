# Tutorial Navigation Improved - Back/Forward/Skip/Help

## Changes Made

### ❌ Before (Limited Control)
```
┌─────────────────────────┐
│ Step 1/5                │
│ Welcome                 │
│                         │
│ [SKIP]    [GOT IT]      │
└─────────────────────────┘
```

**Problems**:
- Can't go back
- "GOT IT" is vague
- No access to help
- Binary choice (skip or continue)

---

### ✅ After (Full Navigation)
```
┌─────────────────────────┐
│ Step 1/5                │
│ Welcome                 │
│                         │
│ [← BACK]  [FORWARD →]   │
│ [SKIP ALL]  [? HELP]    │
└─────────────────────────┘
```

**Improvements**:
- ✅ Can go back to previous step
- ✅ Clear "FORWARD" action
- ✅ "SKIP ALL" is explicit
- ✅ "? HELP" for documentation

---

## Button System

### Row 1: Primary Navigation
```html
<button onclick="prevStep()">← BACK</button>
<button onclick="nextStep()">FORWARD →</button>
```

**Features**:
- **← BACK**: Go to previous step
  - Disabled on step 1 (opacity: 0.3)
  - Enabled on steps 2-5
- **FORWARD →**: Go to next step
  - Changes to "FINISH →" on last step
  - Primary action (accent color)

### Row 2: Secondary Actions
```html
<button onclick="skipTutorial()">SKIP ALL</button>
<button onclick="showHelp()">? HELP</button>
```

**Features**:
- **SKIP ALL**: Exit tutorial completely
  - Clear about what it does
  - Secondary styling (muted)
- **? HELP**: Access documentation
  - Opens wiki in new tab
  - Shows inline help alert
  - Provides LEGOS + McLuhan reference

---

## Button States

### BACK Button
```javascript
// Step 1: Disabled
backBtn.disabled = true;
backBtn.style.opacity = '0.3';

// Steps 2-5: Enabled
backBtn.disabled = false;
backBtn.style.opacity = '1';
```

### FORWARD Button
```javascript
// Steps 1-4: "FORWARD →"
forwardBtn.textContent = 'FORWARD →';

// Step 5: "FINISH →"
forwardBtn.textContent = 'FINISH →';
```

---

## Help System

### showHelp() Function
```javascript
function showHelp(){
  // Open documentation in new tab
  window.open('https://github.com/yourusername/thousand-tetrad/wiki', '_blank');
  
  // Show inline help
  alert('HELP:\n\n▣ LEGOS Framework\nL - Location (where)\nE - Entity (who/what)\nG - Goal (want)\nO - Obstacle (blocks)\nS - Shift (change)\nU - Solution (resolve)\n\n⋔ McLuhan\'s Four Laws\nEnhances, Obsolesces, Retrieves, Reverses\n\nFor full documentation, visit the wiki.');
}
```

**Features**:
- Opens wiki in new tab
- Shows inline reference
- LEGOS framework summary
- McLuhan's Four Laws summary

---

## User Flow

### Forward Navigation
```
Step 1 → Click FORWARD → Step 2 → Click FORWARD → Step 3 → ... → Step 5 → Click FINISH → Complete
```

### Backward Navigation
```
Step 3 → Click BACK → Step 2 → Click BACK → Step 1 (BACK disabled)
```

### Skip All
```
Any Step → Click SKIP ALL → Exit tutorial → Use app freely
```

### Help
```
Any Step → Click ? HELP → Read documentation → Continue tutorial
```

---

## Visual Layout

### Button Arrangement
```
┌─────────────────────────────┐
│ STEP 1/5                    │
│ ◎ API Key                   │
│                             │
│ Get your OpenAI API key:    │
│ platform.openai.com/api-keys│
│                             │
│ Click ◎ button to paste it. │
│                             │
│ ┌──────────┐ ┌───────────┐  │
│ │ ← BACK   │ │ FORWARD → │  │
│ └──────────┘ └───────────┘  │
│                             │
│ ┌──────────┐ ┌───────────┐  │
│ │ SKIP ALL │ │ ? HELP    │  │
│ └──────────┘ └───────────┘  │
└─────────────────────────────┘
```

### Spacing
```css
.instruction-actions {
  display: flex;
  gap: 8px;
}

/* Second row */
.instruction-actions + .instruction-actions {
  margin-top: 8px;
}
```

---

## Benefits

### ✅ User Control
- Can go back to review
- Can skip entire tutorial
- Can access help anytime

### ✅ Clear Actions
- "FORWARD" is clearer than "GOT IT"
- "SKIP ALL" is explicit
- "? HELP" is discoverable

### ✅ Better UX
- No dead ends
- Always have options
- Access to documentation

### ✅ Progressive Disclosure
- Help available but not intrusive
- Skip available but not encouraged
- Forward is primary action

---

## Documentation Integration

### Wiki Link
Update this line with your actual wiki URL:
```javascript
window.open('https://github.com/yourusername/thousand-tetrad/wiki', '_blank');
```

### Inline Help
Provides quick reference:
- LEGOS framework
- McLuhan's Four Laws
- Link to full documentation

---

## Summary

**Removed**: "SKIP" and "GOT IT" (vague, limited)
**Added**: "← BACK", "FORWARD →", "SKIP ALL", "? HELP" (clear, flexible)

**Result**: Users have full control over tutorial navigation and access to help ✅

**Test**: 
1. Start tutorial
2. Click FORWARD
3. Click BACK (should work)
4. Click ? HELP (should show documentation)
5. Click SKIP ALL (should exit)
