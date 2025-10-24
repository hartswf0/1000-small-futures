# Sequentialized Onboarding - Linear Hand-Held Experience

## Philosophy
**Make the first experience LINEAR** - open screens FOR the user, prompt each action, wait for completion, then advance automatically.

No guessing. No confusion. Just follow the yellow brick road.

---

## How It Works

### Old Approach (User-Driven)
```
Tutorial: "Click the ◎ button to open API key overlay"
User: *looks around*
User: *finds button*
User: *clicks*
User: "Now what?"
User: *confused*
```

### New Approach (Sequentialized)
```
Tutorial: "STEP 1: Get Your API Key"
Tutorial: *automatically opens API key overlay*
Tutorial: "Paste your key here"
Tutorial: *focuses input field*
Tutorial: *waits for user to paste and save*
Tutorial: *automatically advances to next step*
User: "Oh, I just follow along!"
```

---

## Sequentialized Flow

### STEP 1: Get Your API Key
```
1. Tutorial shows instructions
2. Tutorial AUTO-OPENS API key overlay (clicks ◎ for user)
3. Tutorial highlights the overlay
4. Tutorial waits for overlay to appear
5. Tutorial auto-advances to STEP 2
```

**Code**:
```javascript
// Auto-open API key overlay
if(step.target==='#cornerKey' && currentStep===0){
  const keyBtn=iframeDoc.querySelector('#cornerKey');
  if(keyBtn){
    setTimeout(()=>{
      keyBtn.click(); // Click FOR the user
    },500);
  }
}

// Watch for overlay to open
if(waitFor==='keyOverlay'){
  const checkOverlay=setInterval(()=>{
    const overlay=iframeDoc.querySelector('#keyOverlay');
    if(overlay && overlay.classList.contains('active')){
      clearInterval(checkOverlay);
      setTimeout(nextStep,500); // Auto-advance
    }
  },100);
}
```

---

### STEP 2: Paste Your Key
```
1. Tutorial shows "Paste your key here"
2. Tutorial AUTO-FOCUSES input field
3. Tutorial changes placeholder to "Paste your sk-proj-... key here"
4. User pastes key
5. User clicks SAVE
6. Tutorial watches localStorage for key
7. Tutorial auto-advances to STEP 3
```

**Code**:
```javascript
// Auto-focus input
if(step.target==='#keyInput'){
  setTimeout(()=>{
    const keyInput=iframeDoc.querySelector('#keyInput');
    if(keyInput){
      keyInput.focus(); // Focus FOR the user
      keyInput.placeholder='Paste your sk-proj-... key here';
    }
  },300);
}

// Watch for key to be saved
if(waitFor==='apiKeySaved'){
  const checkKey=setInterval(()=>{
    const key=iframe.contentWindow.localStorage.getItem('legos.multichannel.key');
    if(key){
      clearInterval(checkKey);
      setTimeout(nextStep,500); // Auto-advance
    }
  },100);
}
```

---

### STEP 3: Send Your First Message
```
1. Tutorial shows "Type what happens next"
2. Tutorial AUTO-FOCUSES message input
3. Tutorial changes placeholder to "Try: 'A wizard enters the tavern'"
4. User types message
5. User clicks SEND
6. Tutorial watches for message to appear
7. Tutorial auto-advances to STEP 4
```

**Code**:
```javascript
// Auto-focus message input
if(step.target==='.message-input' && step.waitFor==='firstMessage'){
  setTimeout(()=>{
    const msgInput=iframeDoc.querySelector('.message-input');
    if(msgInput){
      msgInput.focus(); // Focus FOR the user
      msgInput.placeholder='Try: "A wizard enters the tavern"';
    }
  },300);
}

// Watch for first message
if(waitFor==='firstMessage'){
  const checkMessages=setInterval(()=>{
    const messages=iframeDoc.querySelectorAll('.message-item');
    if(messages.length>0){
      clearInterval(checkMessages);
      setTimeout(nextStep,1000); // Auto-advance
    }
  },100);
}
```

---

### STEP 4: Click a Grid Cell
```
1. Tutorial shows "Click any grid cell"
2. Tutorial highlights grid cells
3. User clicks a cell
4. Cell menu opens
5. Tutorial watches for menu to appear
6. Tutorial auto-advances to STEP 5
```

**Code**:
```javascript
// Watch for cell menu
if(waitFor==='cellMenuOpened'){
  const checkMenu=setInterval(()=>{
    const menu=iframeDoc.querySelector('.cell-menu');
    if(menu){
      clearInterval(checkMenu);
      setTimeout(nextStep,500); // Auto-advance
    }
  },100);
}
```

---

## Key Features

### ✅ Auto-Opens Screens
Tutorial clicks buttons FOR the user:
- Opens API key overlay
- Opens menus
- Opens dialogs

### ✅ Auto-Focuses Inputs
Tutorial focuses fields FOR the user:
- API key input
- Message input
- Search fields

### ✅ Auto-Advances Steps
Tutorial watches for completion and advances automatically:
- Waits for overlay to open
- Waits for key to be saved
- Waits for message to be sent
- Waits for menu to open

### ✅ Helpful Placeholders
Tutorial updates placeholders with examples:
- "Paste your sk-proj-... key here"
- "Try: 'A wizard enters the tavern'"

### ✅ Console Logging
Tutorial logs every action for debugging:
```
[TUTORIAL] Auto-opening API key overlay
[TUTORIAL] API key overlay opened
[TUTORIAL] Watching for: keyOverlay
[TUTORIAL] Key overlay detected - advancing
[TUTORIAL] Focusing on key input
[TUTORIAL] Watching for: apiKeySaved
[TUTORIAL] API key saved - advancing
```

---

## User Experience

### Before (Confusing)
```
1. User sees: "Click ◎ button"
2. User: "Where is it?"
3. User: *finds button*
4. User: *clicks*
5. User: "Now what?"
6. User: "Where do I paste the key?"
7. User: *gives up*
```

### After (Sequentialized)
```
1. Tutorial: "Get your API key"
2. Tutorial: *opens overlay automatically*
3. User: "Oh, it opened for me!"
4. Tutorial: *focuses input*
5. User: *pastes key*
6. User: *clicks SAVE*
7. Tutorial: *automatically advances*
8. User: "This is easy!"
9. Tutorial: *focuses message input*
10. User: *types message*
11. Tutorial: *automatically advances*
12. User: "I'm using the app!"
```

---

## Implementation Details

### Action Watchers
Each step can have a `waitFor` condition:

```javascript
{
  target: '#cornerKey',
  title: 'STEP 1: Get Your API Key',
  text: '...',
  position: 'bottom',
  waitFor: 'keyOverlay' // Wait for this before advancing
}
```

### Watcher Types

#### 1. keyOverlay
Waits for API key overlay to open
```javascript
const overlay=iframeDoc.querySelector('#keyOverlay');
if(overlay && overlay.classList.contains('active')){
  // Advance
}
```

#### 2. apiKeySaved
Waits for API key to be saved to localStorage
```javascript
const key=iframe.contentWindow.localStorage.getItem('legos.multichannel.key');
if(key){
  // Advance
}
```

#### 3. firstMessage
Waits for first message to appear in chat
```javascript
const messages=iframeDoc.querySelectorAll('.message-item');
if(messages.length>0){
  // Advance
}
```

#### 4. cellMenuOpened
Waits for grid cell menu to open
```javascript
const menu=iframeDoc.querySelector('.cell-menu');
if(menu){
  // Advance
}
```

---

## Benefits

### ✅ Zero Confusion
User never wonders "what do I do next?"

### ✅ Zero Searching
Tutorial opens screens and focuses inputs

### ✅ Zero Skipping
Can't advance without completing action

### ✅ Zero Guessing
Placeholders show exact examples

### ✅ Linear Experience
One step at a time, in order, automatically

### ✅ Hand-Held
Tutorial does everything except the actual typing/pasting

---

## Testing

### Test 1: Auto-Open API Key
1. Open `thousand-tet-tut.html`
2. Click ⚡ QUICKSTART
3. ✅ API key overlay opens automatically
4. ✅ Tutorial advances to STEP 2

### Test 2: Auto-Focus Input
1. Continue from STEP 2
2. ✅ Input field is focused
3. ✅ Placeholder says "Paste your sk-proj-... key here"
4. Paste key and save
5. ✅ Tutorial auto-advances to STEP 3

### Test 3: Auto-Focus Message
1. Continue from STEP 3
2. ✅ Message input is focused
3. ✅ Placeholder says "Try: 'A wizard enters the tavern'"
4. Type message and send
5. ✅ Tutorial auto-advances to STEP 4

### Test 4: Watch for Menu
1. Continue from STEP 4
2. Click grid cell
3. ✅ Cell menu opens
4. ✅ Tutorial auto-advances to STEP 5

---

## Console Output

```
[TUTORIAL] Iframe loaded
[TUTORIAL] Auto-opening API key overlay
[TUTORIAL] API key overlay opened
[TUTORIAL] Watching for: keyOverlay
[TUTORIAL] Key overlay detected - advancing
[TUTORIAL] Focusing on key input
[TUTORIAL] Watching for: apiKeySaved
[TUTORIAL] API key saved - advancing
[TUTORIAL] Focusing on message input
[TUTORIAL] Watching for: firstMessage
[TUTORIAL] First message detected - advancing
[TUTORIAL] Watching for: cellMenuOpened
[TUTORIAL] Cell menu detected - advancing
```

---

## Summary

**Sequentialized Onboarding** = Linear hand-held experience

**What it does**:
1. ✅ Auto-opens screens (clicks buttons for user)
2. ✅ Auto-focuses inputs (focuses fields for user)
3. ✅ Auto-advances steps (watches for completion)
4. ✅ Helpful placeholders (shows examples)
5. ✅ Console logging (tracks progress)

**Result**:
- User never confused
- User never searching
- User never skipping
- User never guessing
- User successfully onboarded

**Philosophy**: Make the first experience LINEAR - open screens FOR the user, prompt each action, wait for completion, advance automatically.

**Test**: Open `thousand-tet-tut.html` → Click QUICKSTART → Watch it guide you through setup ✅
