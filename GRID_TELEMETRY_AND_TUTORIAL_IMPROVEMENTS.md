# Grid Telemetry + Improved Modal Tutorial

## Two Critical Improvements

### 1. Grid Telemetry in Chat
**Problem**: Users couldn't see when entities were added/removed from grid
**Solution**: Log all grid changes to chat as system messages

### 2. Better Modal Tutorial
**Problem**: Tutorial just described features, didn't guide through actual actions
**Solution**: Step-by-step walkthrough with real actions required

---

## 1. Grid Telemetry System

### What It Does
Logs all grid changes to the chat so users can:
- See what entities were added
- See what entities were removed
- Track grid state changes over time
- Reference entities directly in chat

### Example Output

#### When Entities Are Added
```
📊 GRID TELEMETRY:
✨ Wizard appeared @ (4,3)
✨ Tavern appeared @ (2,5)
✨ Quest Giver appeared @ (6,4)
```

#### When Entities Are Removed
```
📊 GRID TELEMETRY:
❌ Old Guard disappeared
❌ Broken Sword disappeared
```

### Implementation
```javascript
// In applyScene() function

// Log removals to chat
const removals = changes.filter(c => c.startsWith('❌'));
if (removals.length > 0) {
  addMessageToChannel(channel, 'system', 
    `📊 GRID TELEMETRY:\n${removals.join('\n')}`, 
    { autoCollapse: false }
  );
}

// Log additions to chat
if (newElements.length) {
  addMessageToChannel(channel, 'system', 
    `📊 GRID TELEMETRY:\n${newElements.join('\n')}`, 
    { autoCollapse: false }
  );
}
```

### Benefits
- ✅ **Visibility**: See exactly what changed
- ✅ **Tracking**: Full history of grid state
- ✅ **Reference**: Can mention entities by name in chat
- ✅ **Understanding**: Learn how AI interprets your messages
- ✅ **Debugging**: See if entities are being added/removed correctly

---

## 2. Improved Modal Tutorial

### Old Approach (Broken)
```
Step 1: "Store API Key - Click this ◎ button"
→ User clicks
→ Nothing happens (just description)
→ User confused
```

### New Approach (Idiot-Proof)
```
Step 1: "Get Your API Key"
→ Shows exact steps:
   1. Go to platform.openai.com/api-keys
   2. Click "Create new secret key"
   3. Copy the key
   4. Click ◎ button
   5. Paste and SAVE
→ Waits for user to actually do it
→ Only advances when action completed
```

### New Tutorial Flow

#### STEP 1: Get Your API Key
```
Target: #cornerKey (◎ button)
Text:
  You need an OpenAI API key to use this app.
  
  1. Go to platform.openai.com/api-keys
  2. Click "Create new secret key"
  3. Copy the key (starts with sk-proj-...)
  4. Click the ◎ button to open the key overlay
  5. Paste your key and click SAVE
  
  Click the ◎ button now to continue.

WaitFor: keyOverlay (waits for overlay to open)
```

#### STEP 2: Paste Your Key
```
Target: #keyInput (input field)
Text:
  Paste your OpenAI API key here.
  
  The key is stored locally in your browser - 
  never sent to our servers.
  
  After pasting, click SAVE.

WaitFor: apiKeySaved (waits for key to be saved)
```

#### STEP 3: Send Your First Message
```
Target: .message-input (chat input)
Text:
  Type what happens next using LEGOS:
  
  • Location - Where things happen
  • Entity - Who/What
  • Goal - What they want
  • Obstacle - What blocks them
  • Shift - Transformations
  • Solution - Resolutions
  
  Example: "A wizard enters the tavern"
  
  Type a message and click SEND.

WaitFor: firstMessage (waits for message to be sent)
```

#### STEP 4: Click a Grid Cell
```
Target: .grid-cell (grid cell)
Text:
  Entities now appear on the grid!
  
  Click any cell with an entity to see 4 powerful actions:
  
  • SEND TO CHAT
  • SPAWN POV CHANNEL
  • RUN ELEMENT PERSPECTIVE
  • TETRAD INTERVENTION
  
  Click a grid cell now.

WaitFor: cellMenuOpened (waits for menu to open)
```

#### STEP 5: Add More Channels
```
Target: #cornerAdd (＋ button)
Text:
  Create multiple narrative channels.
  
  Each channel is an independent conversation thread.
  
  Click the ＋ button to add a channel.
```

---

## Key Improvements

### ✅ Shows Actual Screens
- Tutorial runs in iframe showing real app
- User sees exactly what they'll interact with
- No fake/shadow UI elements

### ✅ Guides Through Real Actions
- Step 1: Actually open API key overlay
- Step 2: Actually paste and save key
- Step 3: Actually send a message
- Step 4: Actually click grid cell
- Step 5: Actually add channel

### ✅ Waits for Completion
- Each step has `waitFor` condition
- Tutorial only advances when action completed
- User can't skip ahead accidentally

### ✅ Clear Instructions
- Numbered steps (1, 2, 3...)
- Exact URLs (platform.openai.com/api-keys)
- Examples ("A wizard enters the tavern")
- Visual cues (◎ button, ＋ button)

### ✅ Idiot-Proof
- Can't proceed without completing action
- Shows exactly where to click
- Explains what will happen
- Highlights target element

---

## User Journey

### Before (Confusing)
```
1. User opens tutorial
2. Sees "Store API Key"
3. Clicks button
4. Tutorial advances
5. User: "Wait, where do I get a key?"
6. User: "Where do I paste it?"
7. User gives up
```

### After (Clear)
```
1. User opens tutorial
2. Sees "Get Your API Key"
3. Reads 5 clear steps
4. Goes to platform.openai.com/api-keys
5. Creates key
6. Clicks ◎ button
7. Tutorial waits for overlay to open
8. Sees "Paste Your Key"
9. Pastes key
10. Clicks SAVE
11. Tutorial waits for save
12. Advances to next step
13. User successfully set up!
```

---

## Technical Details

### Grid Telemetry
**File**: `thousand-tetrad.html`
**Function**: `applyScene()`
**Lines**: 8896-8906, 8934-8938

```javascript
// Track removals
const removals = changes.filter(c => c.startsWith('❌'));
if (removals.length > 0) {
  addMessageToChannel(channel, 'system', 
    `📊 GRID TELEMETRY:\n${removals.join('\n')}`, 
    { autoCollapse: false }
  );
}

// Track additions
if (newElements.length) {
  addMessageToChannel(channel, 'system', 
    `📊 GRID TELEMETRY:\n${newElements.join('\n')}`, 
    { autoCollapse: false }
  );
}
```

### Modal Tutorial
**File**: `thousand-tet-tut.html`
**Lines**: 95-100 (quickstart tutorial)

```javascript
quickstart:[
  {
    target:'#cornerKey',
    title:'STEP 1: Get Your API Key',
    text:'You need an OpenAI API key...\n\n1. Go to...',
    position:'bottom',
    waitFor:'keyOverlay'
  },
  {
    target:'#keyInput',
    title:'STEP 2: Paste Your Key',
    text:'Paste your OpenAI API key here...',
    position:'center',
    waitFor:'apiKeySaved'
  },
  // ... etc
]
```

---

## Testing

### Test 1: Grid Telemetry
1. Open `thousand-tetrad.html`
2. Send message: "A wizard enters the tavern"
3. ✅ See in chat: "📊 GRID TELEMETRY: ✨ Wizard appeared @ (4,3)"
4. Send message: "The wizard leaves"
5. ✅ See in chat: "📊 GRID TELEMETRY: ❌ Wizard disappeared"

### Test 2: Modal Tutorial
1. Open `thousand-tet-tut.html`
2. Click ⚡ QUICKSTART
3. ✅ See STEP 1 with 5 numbered instructions
4. Click ◎ button
5. ✅ Tutorial waits for overlay
6. ✅ Advances to STEP 2 automatically
7. Paste key and save
8. ✅ Tutorial waits for save
9. ✅ Advances to STEP 3 automatically
10. Send message
11. ✅ Tutorial waits for message
12. ✅ Advances to STEP 4 automatically

---

## Benefits Summary

### Grid Telemetry
- **Visibility**: See all grid changes in chat
- **Tracking**: Full history of entity additions/removals
- **Reference**: Can mention entities by name
- **Learning**: Understand how AI interprets messages
- **Debugging**: Verify grid updates are correct

### Improved Tutorial
- **Clarity**: Exact steps with URLs and examples
- **Guidance**: Shows real screens, not descriptions
- **Validation**: Waits for actual completion
- **Idiot-proof**: Can't skip ahead without completing
- **Success**: Users actually set up the app correctly

---

## Summary

**Grid Telemetry**: All entity additions/removals now logged to chat with 📊 GRID TELEMETRY prefix

**Modal Tutorial**: Step-by-step walkthrough that:
1. Shows exact URLs (platform.openai.com/api-keys)
2. Waits for real actions (paste key, send message, click cell)
3. Only advances when action completed
4. Guides through actual app setup

**Result**: 
- ✅ Users can track grid changes
- ✅ Users can reference entities in chat
- ✅ Users successfully set up API key
- ✅ Users understand how to use the app
- ✅ No more confusion or giving up

**Test**: 
1. Send messages → See grid telemetry in chat
2. Open modal tutorial → Follow steps → Successfully set up
