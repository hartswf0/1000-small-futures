# User-Paced Grid Tutorial - No Auto-Advance

## Philosophy
**User controls the pace.** No rushing, no auto-advance. Tutorial uses LEGOS grid symbols throughout to familiarize users with the system immediately.

---

## What Changed

### ❌ Before (Auto-Advance - Rushed)
```
- Auto-opens overlay after 2 seconds
- Auto-advances after detecting action
- User feels rushed
- No control over pacing
- Generic styling
```

### ✅ After (User-Paced - Thoughtful)
```
- User clicks NEXT to proceed
- User controls every step
- No rushing
- Full agency
- LEGOS grid styling throughout
```

---

## Key Improvements

### 1. ✅ No Auto-Advance
**Before**:
```javascript
// Automatically advances after detecting action
if(overlay && overlay.classList.contains('active')){
  setTimeout(nextStep,1000); // Auto-advance!
}
```

**After**:
```javascript
// User must click NEXT button
// No auto-advance watchers
// User controls the pace
```

### 2. ✅ LEGOS Grid Symbols Throughout
**Before**:
```
"Type what happens next using LEGOS:

• L — Location (where things happen)
• E — Entity (who or what)
• G — Goal (what they want)"
```

**After**:
```
Type what happens next using LEGOS:

┌─────────────────────────────┐
│ L ▣ Location                │
│   Where things happen       │
│                             │
│ E ○ Entity                  │
│   Who or what               │
│                             │
│ G ▲ Goal                    │
│   What they want            │
└─────────────────────────────┘
```

### 3. ✅ Grid-Style Instruction Cards
**Before**:
```css
.instruction-card {
  background: var(--panel);
  border: 2px solid var(--accent);
  /* Generic styling */
}
```

**After**:
```css
.instruction-card {
  background: var(--panel);
  border: 2px solid var(--accent);
  font-family: 'Courier New', monospace;
  /* Grid-style monospace */
}

.instruction-step::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 2px;
  animation: pulse 2s ease-in-out infinite;
  /* Pulsing grid cell indicator */
}

.instruction-title {
  text-transform: uppercase;
  border-bottom: 1px solid var(--border);
  /* Grid-style headers */
}
```

---

## Tutorial Content with LEGOS Symbols

### Step 1: ◎ Welcome to HYPERCLAY
```
This is HYPERCLAY — where stories are malleable.

┌─────────────────────────────┐
│ LEGOS GRID SYSTEM           │
│                             │
│ L ▣ Location                │
│ E ○ Entity                  │
│ G ▲ Goal                    │
│ O ◆ Obstacle                │
│ S ⟡ Shift                   │
│ U ◉ Solution                │
└─────────────────────────────┘

But first, you need an API key.

1. Visit platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (sk-proj-...)
4. Click the ◎ button above

Your key stays local.
Click NEXT when ready.
```

**Features**:
- ✅ Shows LEGOS symbols immediately
- ✅ Grid-style box drawing
- ✅ User clicks NEXT (no auto-advance)

---

### Step 2: ◎ Store Your Key
```
Paste your OpenAI API key here.

┌─────────────────────────────┐
│ Your key powers:            │
│                             │
│ ▣ Scene Assembly            │
│ ○ Entity Placement          │
│ ⋔ Tetrad Generation         │
│ 💡 Perspective Analysis     │
└─────────────────────────────┘

Stored locally in your browser.
Never sent to our servers.

Paste your key and click SAVE.
Then click NEXT.
```

**Features**:
- ✅ Uses LEGOS symbols to show what key powers
- ✅ Grid-style box
- ✅ Clear instruction: "Then click NEXT"

---

### Step 3: ▣ Send Your First Message
```
Type what happens next using LEGOS:

┌─────────────────────────────┐
│ L ▣ Location                │
│   Where things happen       │
│                             │
│ E ○ Entity                  │
│   Who or what               │
│                             │
│ G ▲ Goal                    │
│   What they want            │
│                             │
│ O ◆ Obstacle                │
│   What blocks them          │
│                             │
│ S ⟡ Shift                   │
│   Transformations           │
│                             │
│ U ◉ Solution                │
│   Resolutions               │
└─────────────────────────────┘

Example:
"A wizard enters the tavern"

Type a message and click SEND.
Then click NEXT.
```

**Features**:
- ✅ Full LEGOS breakdown with symbols
- ✅ Grid-style box with spacing
- ✅ Clear example
- ✅ User clicks NEXT when ready

---

### Step 4: ○ The Grid Awakens
```
Entities now inhabit the 9×9 grid!

┌─────────────────────────────┐
│ Each cell holds:            │
│                             │
│ ▣ Locations                 │
│ ○ Entities                  │
│ ▲ Goals                     │
│ ◆ Obstacles                 │
│ ⟡ Shifts                    │
│ ◉ Solutions                 │
└─────────────────────────────┘

Click any entity to see actions:

• SEND TO CHAT
• SPAWN POV CHANNEL
• RUN ELEMENT PERSPECTIVE
• TETRAD INTERVENTION

Click a grid cell, then NEXT.
```

**Features**:
- ✅ Shows all LEGOS symbols
- ✅ Explains what grid cells hold
- ✅ User explores at their own pace

---

### Step 5: ＋ Multiply Narratives
```
The ＋ button creates channels.

┌─────────────────────────────┐
│ Each channel is:            │
│                             │
│ ▣ Independent thread        │
│ ○ Different scenario        │
│ ▲ Parallel timeline         │
│ ◆ Alternative perspective   │
└─────────────────────────────┘

Channels can:
• Fork from messages
• Spawn from perspectives
• Start fresh

Click ＋ to add a channel.
The grid multiplies.
```

**Features**:
- ✅ Uses LEGOS symbols to explain channels
- ✅ Grid-style box
- ✅ Poetic ending

---

## Grid-Style Visual Elements

### Box Drawing Characters
```
┌─────────────────────────────┐
│ Content here                │
│                             │
│ ▣ Item 1                    │
│ ○ Item 2                    │
│ ▲ Item 3                    │
└─────────────────────────────┘
```

### LEGOS Symbols
```
L ▣ Location
E ○ Entity
G ▲ Goal
O ◆ Obstacle
S ⟡ Shift
U ◉ Solution
```

### Pulsing Grid Cell Indicator
```css
.instruction-step::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 2px;
  animation: pulse 2s ease-in-out infinite;
}
```

**Effect**: Small pulsing square before "STEP 1/5" text, like a grid cell

---

## User Experience

### Before (Auto-Advance)
```
User: *starts tutorial*
Tutorial: "Welcome..."
Tutorial: *auto-opens overlay after 2s*
User: "Wait, I'm still reading!"
Tutorial: *detects action*
Tutorial: *auto-advances after 1s*
User: "Stop rushing me!"
```

### After (User-Paced)
```
User: *starts tutorial*
Tutorial: "Welcome to HYPERCLAY..."
Tutorial: Shows LEGOS grid symbols
User: *reads at own pace*
User: *clicks NEXT when ready*
Tutorial: "Store Your Key..."
User: *pastes key*
User: *clicks SAVE*
User: *clicks NEXT when ready*
Tutorial: "Send Your First Message..."
User: *takes time to understand LEGOS*
User: *sends message*
User: *clicks NEXT when ready*
```

**Result**: User feels in control, not rushed

---

## Benefits

### ✅ User Controls Pace
- No auto-advance
- Click NEXT to proceed
- Take as long as needed

### ✅ LEGOS Familiarization
- Symbols shown immediately
- Grid-style boxes throughout
- Consistent visual language

### ✅ Grid Aesthetic
- Monospace font
- Box drawing characters
- Pulsing grid cell indicator
- Matches main app vibe

### ✅ Clear Instructions
- "Click NEXT when ready"
- "Then click NEXT"
- No ambiguity

### ✅ No Redundancy
- Removed auto-advance watchers
- Removed timing logic
- Simplified code

---

## Technical Changes

### Removed
```javascript
// ❌ Auto-advance watchers
function setupActionWatcher(waitFor,iframeDoc){
  // Removed 50+ lines of auto-advance logic
}

// ❌ Auto-open delays
setTimeout(()=>{ keyBtn.click(); },2000);

// ❌ waitFor conditions
{waitFor:'keyOverlay'}
{waitFor:'apiKeySaved'}
{waitFor:'firstMessage'}
```

### Added
```css
/* ✅ Grid-style instruction cards */
.instruction-card {
  font-family: 'Courier New', monospace;
}

.instruction-step::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--accent);
  animation: pulse 2s ease-in-out infinite;
}

.instruction-title {
  text-transform: uppercase;
  border-bottom: 1px solid var(--border);
}

.instruction-text {
  white-space: pre-line;
  font-family: 'Courier New', monospace;
}
```

---

## Summary

**Removed**: Auto-advance, timing logic, watchers (50+ lines)
**Added**: LEGOS grid symbols, box drawing, grid-style CSS
**Result**: User-paced tutorial that familiarizes with LEGOS immediately

**Philosophy**: User controls the pace. Tutorial uses grid aesthetic throughout.

**Test**: Open `thousand-tet-tut.html` → Click QUICKSTART → Proceed at your own pace ✅
