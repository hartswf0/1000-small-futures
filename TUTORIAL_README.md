# LEGOS Tutorial System

## Pure LEGOS Interface

**No overlays. No modals. Just LEGOS teaching LEGOS.**

Tutorial uses only:
- Chat messages (system)
- Grid patterns (letters)
- User input (type 'next')

## Concept: Spell LEGOS on the Grid

Tutorial **draws letters on the actual grid** to teach features. Each letter demonstrates a LEGOS element:

```
L = Location   (grid basics)
E = Entity     (characters/objects)
G = Goal       (objectives)
O = Obstacle   (challenges)
S = Shift      (transformations)
U = Solution   (resolutions)
```

## How It Works

### 1. Visual Teaching
- Letter **L** drawn on grid in Location cells
- User clicks cells to learn about grid interaction
- Each letter is a tutorial step

### 2. Progressive Learning
```
Step 1: L pattern → Learn grid basics
Step 2: E pattern → Learn about entities
Step 3: G pattern → Learn about goals
Step 4: O pattern → Learn obstacles
Step 5: S pattern → Learn shifts
Step 6: U pattern → Learn solutions
Step 7: FULL → See complete LEGOS
Step 8: Commands → Special features
```

### 3. Interactive Flow
- Tutorial message in chat
- Letter drawn on grid
- User explores by clicking
- Next button advances
- Progress bar shows completion

## Files

### `tutorial-system.js`
Main tutorial controller:
- Draws letter patterns on grid
- Shows messages in chat
- Progress tracking
- Navigation controls

### `tutorial-scenes.js`
Scene data for each letter:
- Grid patterns (coordinates)
- Entity definitions
- Tutorial messages
- Button highlights

### `thousands-tutorial.html`
Simple launcher that redirects to:
```
thousand-medical.html?tutorial=start
```

## Launch Tutorial

### Option 1: Direct Link
```bash
open thousands-tutorial.html
```

### Option 2: URL Parameter
```bash
open thousand-medical.html?tutorial=start
```

### Option 3: Always Show
Tutorial auto-shows unless completed (stored in localStorage)

## Chat Interaction

User controls tutorial by typing:
- `next` or `n` - Next step
- `back` or `b` - Previous step  
- `skip` or `exit` - End tutorial

No buttons. No clicks. Just type.

## Tutorial Flow Example

### Welcome
```
Chat: "LEGOS TUTORIAL

Learn by doing
Watch the grid

Type 'next' to continue
Type 'skip' to exit"
```

### Step 1: L for Location
```
Grid shows:
L
L
L
L
L
L L L L

Chat: "[1/8] LOCATION

The grid is your narrative canvas
Each cell holds a story element

→ Type 'next' to continue"

User types: next
```

### Step 2: E for Entity
```
Grid shows:
E E E E
E
E E E
E
E E E E

Chat says:
"ENTITY
Entities are characters, objects, ideas
Type in chat: A wise owl"
```

### And so on through G, O, S, U...

## Features

✓ **Uses real interface** - Actual grid, actual chat  
✓ **Visual learning** - See letters form patterns  
✓ **Interactive** - Click, type, explore  
✓ **Progressive** - One concept at a time  
✓ **Exact branding** - Same colors, fonts, animations  
✓ **Skippable** - Can exit anytime  
✓ **Persistent** - Won't show again after completion  

## Button Highlighting (Future)

Tutorial can highlight UI elements:
```javascript
highlightButton('.send-btn')
highlightButton('.channel-btn')
highlightButton('.grid-cell')
```

Adds pulsing glow to show which button to click.

## Customization

### Add New Step
Edit `tutorial-system.js`:

```javascript
{ letter: 'X', title: 'MY FEATURE' }
```

Add pattern to `sceneData`:
```javascript
X: {
  pattern: [[1,1],[2,2],[3,3]],
  message: "MY FEATURE\n\nDescription here"
}
```

### Change Letter Patterns
Modify coordinates in `pattern` array:
```javascript
pattern: [[x,y], [x,y], ...]
// (0,0) is top-left
// (8,8) is bottom-right
```

### Adjust Messages
Edit `message` property in scene data.

## Reset Tutorial

Users can replay by clearing storage:
```javascript
localStorage.removeItem('legos_tutorial_complete');
```

Or adding `?tutorial=start` to URL.

## Integration

Already integrated into `thousand-medical.html`:
```html
<script src="tutorial-system.js"></script>
```

Tutorial checks URL params and localStorage on load.

## Future Enhancements

- [ ] Button pulse highlights
- [ ] Animated letter drawing
- [ ] Sound effects for each letter
- [ ] Interactive challenges ("Now you try...")
- [ ] Achievement system
- [ ] Branching tutorials for advanced features
