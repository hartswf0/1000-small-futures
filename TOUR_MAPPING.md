# Guided Tour - Direct Action Mapping

## The Simple Approach

**No complex state management. No waiting for events. Just a linear tour that calls actual functions.**

---

## Step-by-Step Mapping

### Step 1: Welcome
**What it shows**: Welcome message  
**What it does**: Nothing (just intro)  
**User clicks**: "NEXT"

---

### Step 2: Store API Key
**What it shows**: "Click the ◎ button"  
**What it highlights**: `#cornerKey` (top-left corner button)  
**What "DO IT" does**: 
```javascript
document.getElementById('cornerKey').click()
```
**Actual app function called**: Opens the API key overlay  
**User then**: Stores their key manually  
**User clicks**: "NEXT" to continue

---

### Step 3: Select Scenario
**What it shows**: "Choose a scenario from dropdown"  
**What it highlights**: `#globalScenarioSelect` (bottom dropdown)  
**What "DO IT" does**: Nothing (user selects manually)  
**Actual app function**: User changes dropdown value  
**User clicks**: "NEXT" to continue

---

### Step 4: Send Message
**What it shows**: "Type and send a message"  
**What it highlights**: `.chat-input` (chat input field)  
**What "DO IT" does**: Nothing (user types manually)  
**Actual app function**: User types and clicks send  
**User clicks**: "NEXT" to continue

---

### Step 5: Apply Tetrad
**What it shows**: "Click any tetrad chip"  
**What it highlights**: `.tetrad-options` (tetrad chips)  
**What "DO IT" does**: Nothing (user clicks manually)  
**Actual app function**: User clicks Enhance/Reverse/etc  
**User clicks**: "NEXT" to continue

---

### Step 6: Complete
**What it shows**: "Tour complete!"  
**What it does**: Sets `localStorage.setItem('tour.completed', 'true')`  
**User clicks**: "FINISH"

---

## Visual Design

### Overlay Position
```
┌─────────────────────────────────┐
│                     ┌─────────┐ │ ← Tour overlay (top-right)
│                     │ STEP 2  │ │   Small, doesn't block interface
│                     │ Title   │ │
│  [◎] Interface      │ Message │ │
│   visible here      │ [SKIP]  │ │
│                     │ [DO IT] │ │
│                     └─────────┘ │
└─────────────────────────────────┘
```

### Highlight
- Green pulsing border around target element
- Doesn't block clicking
- Removed when moving to next step

---

## Code Structure

### Simple Object
```javascript
const GuidedTour = {
  currentStep: 0,
  steps: [...],
  
  showStep(index) {
    // Show overlay with step info
    // Highlight target element
  },
  
  doAction() {
    // Call the actual function
    this.steps[this.currentStep].action();
  },
  
  next() {
    // Move to next step
  }
}
```

### Each Step
```javascript
{
  title: 'Step Title',
  message: 'What to do',
  action: () => document.getElementById('button').click(), // Direct call!
  highlight: '#button' // What to highlight
}
```

---

## Direct Function Calls

### What We're Actually Calling

| Step | Action | Actual App Code |
|------|--------|-----------------|
| API Key | `document.getElementById('cornerKey').click()` | Opens key overlay |
| Scenario | User selects manually | Changes `globalScenarioSelect.value` |
| Message | User types manually | Calls `sendMessage()` when they click send |
| Tetrad | User clicks manually | Calls `applyFork()` when they click chip |

---

## Why This Is Simple

### ❌ What We're NOT Doing
- Intercepting events
- Waiting for localStorage changes
- Complex state management
- Shadow DOM manipulation
- Iframe messaging

### ✅ What We ARE Doing
- Showing an overlay (top-right corner)
- Highlighting elements (green border)
- Calling `.click()` on buttons
- Linear step progression
- Simple localStorage flag

---

## User Experience

### First Visit
1. Page loads
2. After 1.5 seconds, tour overlay appears (top-right)
3. User reads step 1 (welcome)
4. User clicks "NEXT"
5. Overlay shows step 2, highlights ◎ button
6. User clicks "DO IT" → Button clicks automatically
7. User stores API key in opened overlay
8. User clicks "NEXT" in tour
9. Repeat for remaining steps
10. Tour completes, never shows again

### Subsequent Visits
- No tour (localStorage flag set)
- Full interface immediately

---

## Integration

### Already Done
Added to `thousand-tetrad.html` line 10653:
```html
<script src="ONBOARDING_SYSTEM.js"></script>
```

### That's It
No other changes needed. The tour:
- Auto-starts on first run
- Calls actual functions
- Doesn't interfere with normal use
- Completes and disappears

---

## Testing

### Clear Flag
```javascript
localStorage.removeItem('tour.completed');
location.reload();
```

### Manual Control
```javascript
GuidedTour.showStep(0); // Start tour
GuidedTour.next();       // Next step
GuidedTour.skip();       // Skip tour
```

---

## Customization

### Add a Step
```javascript
steps: [
  // ... existing steps
  {
    title: 'New Feature',
    message: 'Click this button to do X',
    action: () => document.getElementById('myBtn').click(),
    highlight: '#myBtn'
  }
]
```

### Change Position
```css
.tour-overlay {
  top: 20px;    /* Change this */
  right: 20px;  /* Or this */
}
```

---

## The Key Insight

**Don't build a parallel system. Just call the real functions.**

Instead of:
```javascript
// Complex event listening
localStorage.setItem = function(key, value) {
  if (key === 'api.key') {
    tourAdvance();
  }
};
```

Do this:
```javascript
// Direct function call
action: () => document.getElementById('cornerKey').click()
```

**The tour doesn't need to know HOW the app works. It just needs to click the buttons.**

---

## Summary

- **5 steps** (welcome, key, scenario, message, tetrad, complete)
- **1 direct action** (clicks the ◎ button)
- **4 manual actions** (user does the rest)
- **Small overlay** (top-right, doesn't block)
- **Simple code** (200 lines, no complexity)
- **Direct calls** (just `.click()` on real buttons)

**No magic. No complexity. Just a guided tour.**
