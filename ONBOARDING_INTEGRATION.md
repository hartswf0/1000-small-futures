# Onboarding System Integration Guide

## Overview

This is a **proper onboarding system** that follows best practices:

✅ **Embedded in the interface** (not a separate page)  
✅ **Progressive disclosure** (one step at a time)  
✅ **Contextual guidance** (highlights real UI elements)  
✅ **Wait for actions** (advances when user completes tasks)  
✅ **Skippable** (users can opt out anytime)  
✅ **First-run only** (never shows again after completion)  

---

## Integration Steps

### 1. Add Script to `thousand-tetrad.html`

Add this line **before the closing `</body>` tag**:

```html
<script src="ONBOARDING_SYSTEM.js"></script>
</body>
</html>
```

That's it! The system auto-initializes on first run.

---

## How It Works

### First-Run Detection
```javascript
isFirstRun: !localStorage.getItem('tetrad.onboarding.completed')
```

- Checks if user has completed onboarding before
- If not, starts tutorial automatically after 1 second
- After completion, sets flag so it never shows again

### Step Flow

Each step has:
- **Target**: CSS selector for UI element to highlight
- **Title**: Short heading
- **Text**: Explanation (1-2 sentences)
- **Position**: Where to place tooltip (top, bottom, left, right, center)
- **Action**: What triggers next step (`next`, `wait-for-key`, `wait-for-scenario`, etc.)
- **Highlight**: Whether to spotlight the element
- **Pulse**: Whether to animate the spotlight

### Example Step
```javascript
{
  id: 'api-key',
  target: '#cornerKey',
  title: 'Store Your API Key',
  text: 'Click this button (◎) to store your OpenAI API key.',
  position: 'bottom-left',
  action: 'wait-for-key',
  highlight: true,
  pulse: true
}
```

---

## 10-Step Tutorial Flow

### 1. **Welcome** (center modal)
"Welcome to Thousand Tetrad. Let's get you started."

### 2. **API Key** (wait for user to store key)
Highlights `#cornerKey` (◎ button)  
Advances when `localStorage.setItem('legos.multichannel.key')` is called

### 3. **Scenario Select** (wait for selection)
Highlights `#globalScenarioSelect`  
Advances when user selects a scenario

### 4. **Chat Input** (wait for first message)
Highlights `.chat-input`  
Advances when user clicks send button

### 5. **Tetrad Chips** (wait for tetrad application)
Highlights `.tetrad-options`  
Advances when user clicks any tetrad chip

### 6. **Grid** (manual next)
Highlights `.grid-container`  
User clicks "NEXT" to continue

### 7. **Perspective** (manual next)
Highlights `#globalTetradBtn` (✦ button)

### 8. **Add Channel** (manual next)
Highlights `#cornerAdd` (＋ button)

### 9. **Export** (manual next)
Highlights `#cornerExchange` (⇆ button)

### 10. **Complete** (center modal)
"You're ready! Click ? anytime for help."

---

## Visual Design

### Spotlight Effect
```css
.onboarding-spotlight {
  border: 3px solid #56ff9f;
  box-shadow: 0 0 0 9999px rgba(3, 24, 12, 0.92);
  /* Darkens everything except highlighted element */
}
```

### Tooltip Card
```css
.onboarding-tooltip {
  background: #052010;
  border: 2px solid #56ff9f;
  max-width: 320px;
  /* Positioned near highlighted element */
}
```

### Pulse Animation
```css
@keyframes onboarding-pulse {
  0%, 100% { box-shadow: 0 0 30px rgba(86, 255, 159, 0.5); }
  50% { box-shadow: 0 0 50px rgba(86, 255, 159, 0.8); }
}
```

---

## User Experience

### First Visit
1. Page loads normally
2. After 1 second, onboarding starts
3. Screen dims, spotlight appears on ◎ button
4. Tooltip explains: "Store Your API Key"
5. User clicks ◎, stores key
6. Onboarding advances automatically
7. Next spotlight appears on scenario selector
8. Process continues...

### Subsequent Visits
- Onboarding never shows again
- User has full access to interface
- Can access help via ? button anytime

---

## Best Practices Implemented

### ✅ Progressive Disclosure
- Shows **one thing at a time**
- Doesn't overwhelm with all features at once
- Builds understanding incrementally

### ✅ Learn by Doing
- User **actually performs actions** (not just reading)
- Stores real API key
- Selects real scenario
- Sends real message
- Applies real tetrad

### ✅ Contextual Guidance
- Highlights **exact UI element** to interact with
- Positions tooltip **near the element**
- Uses **arrows** to point at target

### ✅ Respectful of User Time
- **Skippable** at any point
- **Never repeats** after completion
- **Brief explanations** (1-2 sentences max)

### ✅ Non-Blocking
- User can **still interact** with highlighted elements
- Overlay doesn't prevent clicking
- Z-index management keeps targets accessible

---

## Advanced Features

### Manual Reset (for testing)
```javascript
OnboardingSystem.reset();
// Clears completion flag and reloads page
```

### Manual Trigger
```javascript
OnboardingSystem.showStep(0);
// Starts onboarding from beginning
```

### Check Status
```javascript
OnboardingSystem.state.completed
// Returns true if user completed tutorial
```

---

## Customization

### Add New Steps
Edit `ONBOARDING_SYSTEM.js`:

```javascript
steps: [
  // ... existing steps
  {
    id: 'my-feature',
    target: '#myButton',
    title: 'My Feature',
    text: 'This does something cool.',
    position: 'bottom',
    action: 'next',
    highlight: true,
    pulse: true
  }
]
```

### Change Timing
```javascript
// In init()
setTimeout(() => this.showStep(0), 1000); // 1 second delay
```

### Modify Styles
Edit CSS in `injectStyles()` method

---

## Testing Checklist

- [ ] First visit: Onboarding starts automatically
- [ ] Spotlight highlights correct elements
- [ ] Tooltip positioned correctly (doesn't go off-screen)
- [ ] User can click highlighted elements
- [ ] Advances automatically after key actions
- [ ] "SKIP ALL" button works
- [ ] "NEXT" button works
- [ ] Completion sets localStorage flag
- [ ] Second visit: No onboarding shown
- [ ] Mobile: Tooltips fit on screen
- [ ] Mobile: Touch targets accessible

---

## Troubleshooting

### Onboarding doesn't start
- Check: `localStorage.getItem('tetrad.onboarding.completed')` should be `null`
- Clear: `localStorage.removeItem('tetrad.onboarding.completed')`
- Reload page

### Element not highlighted
- Check: CSS selector in `target` field
- Verify: Element exists in DOM when step shows
- Try: `document.querySelector('#yourTarget')` in console

### Tooltip off-screen
- Adjust: `position` value in step definition
- Options: `top`, `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right`, `center`

### Doesn't advance automatically
- Check: Event listener for that action type
- Verify: Action name matches step definition
- Add: `console.log()` in listener to debug

---

## Why This Approach Works

### ❌ What We Avoided
- Separate tutorial page (disconnected from real interface)
- Video walkthroughs (passive, not interactive)
- Long text instructions (nobody reads them)
- Fake demo data (not their actual workflow)
- Blocking modals (frustrating)

### ✅ What We Did Instead
- **Embedded in interface** (learn where you work)
- **Interactive** (do real actions)
- **Contextual** (highlights exact elements)
- **Progressive** (one step at a time)
- **Respectful** (skippable, never repeats)

---

## Onboarding Best Practices Reference

Based on:
- **Duolingo**: Gamified, bite-sized lessons
- **Figma**: Contextual tooltips on first use
- **Notion**: Progressive disclosure of features
- **Superhuman**: Guided keyboard shortcuts
- **Linear**: Minimal, elegant onboarding

Key principles:
1. **Show, don't tell** (highlight real UI)
2. **Do, don't watch** (user performs actions)
3. **One thing at a time** (no overwhelming)
4. **Celebrate progress** (step counter, completion)
5. **Respect expertise** (skippable for pros)

---

**Status**: ✅ Ready to integrate  
**File**: `ONBOARDING_SYSTEM.js`  
**Integration**: One `<script>` tag  
**Maintenance**: Edit steps array to add/modify  
