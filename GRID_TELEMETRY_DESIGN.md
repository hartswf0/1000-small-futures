# Grid Telemetry Design

## Current Issues
1. **Dropdown too wide** on mobile
2. **No visual log** of grid entities
3. **Can't click** to insert entity names into chat

## Solutions

### 1. Dropdown Width Fixed ✅
```css
max-width: min(280px, calc(100vw - 120px));
overflow: hidden;
text-overflow: ellipsis;
```
- Desktop: 280px max
- Mobile: Fits screen (leaves 120px for buttons)
- Ellipsis if too long

---

### 2. Grid Telemetry Section (New)

#### Visual Design
```
┌─────────────────────────────┐
│ GRID TELEMETRY              │
├─────────────────────────────┤
│ ▣ WIZARD    ○ TAVERN        │
│ ◆ DRAGON    ▲ ESCAPE        │
│ ⟡ SPELL     ◉ VICTORY       │
└─────────────────────────────┘
```

#### Features
- **Squares** for each entity (not emojis)
- **Symbols** match LEGOS types (▣○▲◆⟡◉)
- **Names** truncated to fit
- **Clickable** → inserts name + description into chat
- **Color-coded** by type
- **Grid-aligned** aesthetic

---

### 3. Click Behavior

#### When Clicked
```javascript
// User clicks ▣ WIZARD
→ Inserts into chat: "WIZARD: A powerful sorcerer seeking ancient knowledge"
→ Auto-focuses chat input
→ User can edit/send
```

#### Format
```
[SYMBOL] [NAME]: [DESCRIPTION]
```

Examples:
```
▣ WIZARD: A powerful sorcerer seeking ancient knowledge
○ DRAGON: Ancient beast guarding treasure hoard
◆ CURSE: Dark magic blocking the path
```

---

### 4. Layout

#### Position
Below grid, above chat input:
```
┌─────────────────────────────┐
│ 9×9 GRID                    │
│ [cells with entities]       │
├─────────────────────────────┤
│ GRID TELEMETRY              │ ← New section
│ ▣ WIZARD  ○ DRAGON          │
├─────────────────────────────┤
│ [Chat Input]                │
└─────────────────────────────┘
```

#### Styling
```css
.grid-telemetry {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  background: var(--panel);
  border-top: 1px solid var(--border);
  font-size: 9px;
}

.telemetry-chip {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}

.telemetry-chip:hover {
  border-color: var(--accent);
  background: var(--panel);
  transform: scale(1.05);
}

.telemetry-symbol {
  font-size: 10px;
  font-weight: 700;
}

.telemetry-name {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

---

### 5. Mobile Responsive

#### Desktop
```
▣ WIZARD  ○ DRAGON  ◆ CURSE  ▲ ESCAPE  ⟡ SPELL  ◉ VICTORY
```

#### Mobile (wraps)
```
▣ WIZARD  ○ DRAGON
◆ CURSE   ▲ ESCAPE
⟡ SPELL   ◉ VICTORY
```

**Features**:
- Flex-wrap for small screens
- 6px gap between chips
- Touch-friendly (4px padding)
- Scrollable if too many

---

### 6. Data Source

#### From Grid
```javascript
// Collect all entities from grid
const entities = [];
channel.grid.forEach((row, y) => {
  row.forEach((cell, x) => {
    if (cell && cell.label) {
      entities.push({
        symbol: cell.symbol,
        type: cell.type,
        name: cell.label,
        description: cell.entity?.description || '',
        color: blockPalette.find(p => p.type === cell.type)?.color
      });
    }
  });
});
```

#### Render
```javascript
entities.forEach(entity => {
  const chip = document.createElement('div');
  chip.className = 'telemetry-chip';
  chip.onclick = () => insertEntityIntoChat(entity);
  
  const symbol = document.createElement('span');
  symbol.className = 'telemetry-symbol';
  symbol.textContent = entity.symbol;
  symbol.style.color = entity.color;
  
  const name = document.createElement('span');
  name.className = 'telemetry-name';
  name.textContent = entity.name.toUpperCase();
  
  chip.appendChild(symbol);
  chip.appendChild(name);
  telemetryEl.appendChild(chip);
});
```

---

### 7. Insert Function

```javascript
function insertEntityIntoChat(entity) {
  const input = channel.dom.inputEl;
  const text = `${entity.symbol} ${entity.name.toUpperCase()}: ${entity.description}`;
  input.value = text;
  input.focus();
  // Optionally auto-send
  // channel.dom.sendBtn.click();
}
```

---

## Summary

### Fixed
- ✅ Dropdown width (280px max, mobile-friendly)

### Added
- ✅ Grid telemetry section (below grid)
- ✅ Clickable entity chips (squares with names)
- ✅ Insert into chat (name + description)
- ✅ LEGOS symbols (▣○▲◆⟡◉)
- ✅ Color-coded by type
- ✅ Mobile responsive (wraps)

### Result
**Better UX**: Visual log of entities, quick insertion into chat, grid-aligned design ✅
