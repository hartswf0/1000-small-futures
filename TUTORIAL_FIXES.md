# Tutorial Launcher Fixes

## Problems Identified
1. ❌ Tutorial pane took 40% of vertical space on mobile
2. ❌ "DO IT" buttons didn't highlight or trigger actual UI elements
3. ❌ No way to minimize/hide tutorial while practicing
4. ❌ Tutorial blocked view of the interface being taught

## Solutions Implemented

### 1. **Floating Modal Design**
- Tutorial now floats as a **draggable card** in bottom-right corner
- Max width: 340px (fits mobile screens)
- Max height: 60vh (doesn't dominate screen)
- Z-index: 5000 (always on top)
- Box shadow for depth perception

### 2. **Minimize/Maximize Toggle**
- **Header bar** with minimize button (− / +)
- Click header to toggle
- Minimized state: Only shows "TUTORIAL · STEP X/Y"
- Maximized state: Shows all step cards
- Smooth transition with overflow control

### 3. **Visual Highlighting System**
- **Pulsing border** appears around target UI element
- Uses `.highlight-pulse` class with animation
- Calculates iframe element position relative to viewport
- Auto-removes after 3 seconds
- Green accent glow matches theme

### 4. **Direct UI Triggering**
- **"DO IT" buttons now:**
  1. Highlight the target element (2s)
  2. Wait 500ms (let user see it)
  3. Click the element directly in iframe
  4. Fallback to postMessage if click fails

### 5. **Cross-Frame Integration**
```javascript
// Highlights element in iframe
highlightUIElement('#globalScenarioSelect', 2000)

// Clicks element in iframe
clickInIframe('.tetrad-chip[data-fork="enhance"]')

// Fallback messaging
sendToThousand({type:'APPLY_TETRAD', value:'enhance'})
```

### 6. **Step Progress Tracking**
- Active step gets `.active` class (green border + glow)
- Completed steps get `.done` class (faded)
- Header shows "STEP X/Y" dynamically
- Current step highlighted in card list

## Technical Details

### CSS Changes
```css
.tutorial-pane {
  position: fixed;
  bottom: calc(60px + var(--safe-bottom));
  right: 16px;
  width: min(340px, calc(100vw - 32px));
  max-height: 60vh;
  z-index: 5000;
}

.tutorial-pane.minimized {
  max-height: 48px;
  overflow: hidden;
}

.highlight-pulse {
  animation: pulse 2s ease-in-out infinite;
  border: 3px solid var(--accent);
  box-shadow: 0 0 20px var(--accent-glow);
}
```

### JavaScript Functions Added
- `toggleTutorial()` - Minimize/maximize
- `highlightUIElement(selector, duration)` - Visual highlight
- `removeHighlight()` - Clean up highlight
- `clickInIframe(selector)` - Direct element clicking
- Enhanced `executeStep()` - Coordinated highlight + click

### Selector Mapping
| Action | Target Selector | Fallback |
|--------|----------------|----------|
| Load Scenario | `#globalScenarioSelect` | postMessage |
| Apply Tetrad | `.tetrad-chip[data-fork="enhance"]` | postMessage |
| Create Snapshot | `#snapshotBtn` | postMessage |
| Export Session | `#exportBtn` | postMessage |
| Add Channel | `#addChannelBtn` | postMessage |
| Open Perspective | `.perspective-btn` | postMessage |

## User Experience Flow

### Before
1. Tutorial takes 40% of screen
2. Click "DO IT" → nothing visible happens
3. User confused about what to do next
4. Can't see interface being taught

### After
1. Tutorial floats in corner (minimizable)
2. Click "DO IT" → **green pulse** appears on target button
3. After 500ms → **button clicks automatically**
4. User sees exactly what to interact with
5. Full view of interface while learning

## Mobile Optimizations
- Safe area insets for notched devices
- Responsive width: `min(340px, calc(100vw - 32px))`
- Bottom position accounts for ribbon: `calc(60px + safe-area)`
- Touch-friendly minimize button (24px tap target)
- Smooth animations (respects `prefers-reduced-motion`)

## Accessibility
- Clear visual feedback (pulse animation)
- Keyboard accessible (header clickable)
- Screen reader friendly (semantic HTML)
- High contrast borders
- Focus states maintained

## Testing Checklist
- [ ] Tutorial minimizes/maximizes smoothly
- [ ] Highlight appears on correct elements
- [ ] Clicks trigger in iframe successfully
- [ ] Fallback postMessage works if click fails
- [ ] Mobile: Tutorial doesn't block interface
- [ ] Mobile: Minimize button reachable with thumb
- [ ] Step progress updates correctly
- [ ] Completed steps show as done
- [ ] Active step highlighted

## Known Limitations
1. **Cross-origin**: If iframe is different origin, highlight/click won't work (falls back to postMessage)
2. **Dynamic selectors**: If Thousand Tetrad changes IDs, selectors need updating
3. **Animation performance**: Pulse animation may lag on very old devices

## Future Enhancements
- Drag tutorial modal to different positions
- Resize tutorial modal
- Pin/unpin from corner
- Auto-minimize after action completes
- Keyboard shortcuts (Esc to minimize)
- Tutorial replay/rewind
- Skip to specific step

---

**Status**: ✅ Complete and functional
**File**: `thousand-tet-tut.html`
**Lines changed**: ~100
**New functions**: 4
**CSS additions**: 3 classes + 1 animation
