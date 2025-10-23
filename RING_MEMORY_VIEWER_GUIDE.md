# Ring Memory Timeline Viewer - User Guide

## Overview

The **Ring Memory Viewer** is a GitHub-style timeline visualization tool for exported LEGOS ring memory sessions. It provides an elegant, searchable interface to explore your narrative history with channel color-coding and type-based filtering.

---

## Features

### 🎨 Visual Design
- **CRT Green Theme** - Matches the LEGOS tetrad interface aesthetic
- **Channel Colors** - Each entry displays in its originating channel's color
- **Type Badges** - Visual distinction between SCENE, PERSPECTIVE, and SNAPSHOT entries
- **Timeline Dots** - GitHub-style commit graph with colored indicators
- **Hover Effects** - Interactive highlighting and animations on hover

### 🔍 Search & Filter
- **Real-time Search** - Filter by headline, summary, channel name, symbol, or ID
- **Type Filters** - Show only Scenes, Perspectives, Snapshots, or All
- **Chronological Organization** - Entries grouped by date with sticky headers

### 📊 Statistics Dashboard
- Total entry count with live updates
- Breakdown by type (Scenes / Perspectives / Snapshots)
- Channel count
- Export timestamp
- Ring capacity information

### 💡 Interactive Details
- **Click any entry** to expand/collapse detailed metadata
- View full timestamps, channel IDs, and symbols
- Color-coded by channel for visual narrative tracking

---

## How to Use

### Method 1: Load JSON File Directly

1. Open `ring-memory-viewer.html` in your browser
2. Click **"LOAD JSON FILE"** button (top right or center)
3. Select your exported ring memory JSON file
4. Timeline renders automatically

### Method 2: URL Parameter

Navigate to the viewer with a file parameter:
```
ring-memory-viewer.html?file=legos-ring-memory-1761206740851.json
```

This auto-loads the specified JSON file.

### Method 3: Drag & Drop (Future Enhancement)

Could add drag-and-drop support for JSON files.

---

## Understanding the Timeline

### Entry Types

| Icon | Type | Badge Color | Description |
|------|------|-------------|-------------|
| **●** | SCENE | Green | Main narrative beats |
| **◆** | PERSPECTIV | Blue | Entity/cell perspective analysis |
| **⧉** | SNAPSHOT | Orange | Saved simulation states |

### Color Coding

Each entry's **dot** and **left border** use the **channel color** it originated from:
- `#56ff9f` - Green channels
- `#ff3d4e` - Red channels
- `#7d8bff` - Blue channels
- `#ffa53d` - Orange channels
- `#ff8bf2` - Pink channels
- `#f8d66a` - Yellow channels
- `#74d3ff` - Cyan channels

This lets you visually trace narratives across different channels.

### Timeline Layout

```
┌─────────────────────────────────────────┐
│ ◎ Ring Memory Timeline                  │  ← Header with stats
│ 48 entries • Capacity: 48 • Exported... │
├─────────────────────────────────────────┤
│ [Search Box] [Filters...] [Load File]   │  ← Controls
├─────────────────────────────────────────┤
│                                          │
│ ══ Tuesday, October 22, 2025 ══         │  ← Date group (sticky)
│                                          │
│   ● ┬─ Amazon Workers Animals Revolt    │  ← Entry with dot
│     │  SCENE • AMAZON WOR • 08:11:23    │
│     │  In a surreal twist, animals...   │
│     └─ [Click to expand details]        │
│                                          │
│   ◆ ┬─ Perspective: Citizen 25          │
│     │  PERSPECTIV • AMAZON WOR • 0 7    │
│     └─ Citizen grappling with...        │
│                                          │
├─────────────────────────────────────────┤
│ 30 Scenes • 15 Perspectives • 3 Snap... │  ← Stats bar
└─────────────────────────────────────────┘
```

---

## Search Examples

### Search by Channel
```
AMAZON WOR
```
Shows all entries from the Amazon Workers channel.

### Search by Type
Use the filter buttons (SCENES, PERSPECTIVES, SNAPSHOTS) instead.

### Search by Content
```
revolution
```
Finds all entries with "revolution" in headline or summary.

### Search by Symbol
```
0 7
```
Finds entries at grid position (0, 7).

### Search by ID
```
R0024
```
Finds the specific ring memory entry by ID.

---

## Entry Details

Click any timeline entry to expand its details panel:

**Visible by default**:
- Headline (bold, colored)
- Type badge (SCENE/PERSPECTIV/SNAPSHOT)
- Channel badge (with channel color)
- Symbol (grid coordinates or identifier)
- Time (HH:MM:SS)
- Summary text

**Expandable details**:
- Full Channel ID
- Complete ISO timestamp
- Symbol breakdown

---

## Exporting Ring Memory from LEGOS

From `thousand-tetrad.html` or `thousand-multi.html`:

1. Click **⇆** (Exchange) button (bottom-left corner)
2. Select **"EXPORT SESSION"**
3. Save the JSON file
4. Load it in the Ring Memory Viewer

The export includes:
- All ring memory entries (up to 48 capacity)
- Channel metadata (names, colors, scenarios)
- Export timestamp
- Ring configuration (capacity, pointer, context mode)

---

## GitHub-Style Elements

### Commit Graph Aesthetic
- Vertical timeline line connects entries
- Circular dots mark each "commit" (entry)
- Hover effects highlight connections
- Color coding shows different "branches" (channels)

### Editor Features
- **Search bar** - Like GitHub's file search
- **Filter tabs** - Like repository tabs
- **Expandable details** - Like commit diffs
- **Stats dashboard** - Like repository insights

### Design Patterns
- Monospace fonts (Courier New)
- Dark terminal theme
- Green accent color (classic CRT)
- Minimal, functional UI
- Keyboard-friendly (future enhancement)

---

## Use Cases

### 1. **Session Review**
After a long LEGOS session, review your narrative journey:
- See which channels you explored
- Track perspective shifts
- Identify key scenes

### 2. **Narrative Analysis**
Study patterns in your storytelling:
- How often do you use perspectives?
- Which channels dominate the ring?
- Temporal clustering of scenes

### 3. **Debugging & Troubleshooting**
Inspect the ring memory structure:
- Verify entries are saving correctly
- Check timestamp sequences
- Confirm channel associations

### 4. **Archival & Documentation**
Create permanent records:
- Export sessions for later reference
- Share narrative timelines
- Document creative process

### 5. **Cross-Session Comparison**
Load different exports side-by-side (future):
- Compare narrative strategies
- Track evolution of technique
- Analyze recurring themes

---

## Technical Details

### JSON Structure Expected

```json
{
  "exported": "ISO timestamp",
  "ringMemory": {
    "capacity": 48,
    "entries": [
      {
        "id": "R0024",
        "timestamp": "ISO timestamp",
        "channelId": "ch-...",
        "channelName": "AMAZON WOR",
        "type": "SCENE | PERSPECTIV | SNAPSHOT",
        "symbol": "grid coords or identifier",
        "headline": "Entry title",
        "summary": "Entry description"
      }
    ],
    "pointer": 0,
    "mainline": null,
    "contextMode": "all",
    "contextAnchor": "R0049"
  },
  "channels": [
    {
      "id": "ch-...",
      "name": "CHANNEL NAME",
      "scenario": "blank",
      "channelColor": "#56ff9f",
      "ledgerCount": 7
    }
  ]
}
```

### Browser Compatibility
- Works in all modern browsers
- No build step required
- Pure HTML/CSS/JavaScript
- No external dependencies

### Performance
- Handles 48+ entries smoothly
- Real-time search/filter
- Efficient DOM rendering
- Minimal memory footprint

---

## Keyboard Shortcuts (Future)

Potential additions:
- **/** - Focus search box
- **Esc** - Clear search
- **↑/↓** - Navigate entries
- **Enter** - Expand/collapse entry
- **1-4** - Switch filter tabs
- **Ctrl+L** - Load new file

---

## Customization

### Color Themes

The viewer uses CSS variables for easy theming:

```css
:root {
  --bg: #03180c;          /* Background */
  --panel: #052010;        /* Panels */
  --border: #0c3a23;       /* Borders */
  --text: #aef3c1;         /* Text */
  --accent: #56ff9f;       /* Accent green */
  --danger: #ff5c7c;       /* Red */
  --warning: #ffa53d;      /* Orange */
  --info: #7d8bff;         /* Blue */
}
```

Modify these to match different interface styles.

### Layout Adjustments

- **Max width**: Change `.container { max-width: 1400px; }`
- **Timeline dot size**: Adjust `.timeline-dot { width: 40px; height: 40px; }`
- **Font size**: Modify `body { font-size: 13px; }`

---

## Future Enhancements

### Planned Features
- [ ] Drag-and-drop JSON file loading
- [ ] Multi-file comparison view
- [ ] Export filtered results to new JSON
- [ ] Keyboard navigation
- [ ] Dark/Light theme toggle
- [ ] Print-friendly view
- [ ] Share permalink with filters
- [ ] Timeline scrubber/zoom
- [ ] Entry linking visualization
- [ ] Channel relationship graph
- [ ] Statistics charts (temporal distribution, type ratios)

### Integration Ideas
- Embed viewer in main LEGOS interface
- Real-time ring memory display during session
- Click entry → jump to that point in session
- Replay narrative from selected entry

---

## Troubleshooting

### "No ring memory loaded"
- Click "LOAD JSON FILE" and select your export
- Verify JSON file is valid format
- Check browser console for errors

### "No entries match your filters"
- Clear search box
- Click "All" filter
- Verify JSON has entries array

### Entries not displaying correctly
- Check JSON structure matches expected format
- Verify all required fields present (id, timestamp, type, headline, summary)
- Inspect browser console for parsing errors

### Colors not showing
- Verify `channels` array exists in JSON
- Check `channelColor` fields are valid hex codes
- Ensure `channelId` matches between entries and channels

---

## Example Usage Session

1. **Export from LEGOS**:
   - Run a tetrad analysis session
   - Generate 10-20 scenes with perspectives
   - Take 2-3 snapshots
   - Export session JSON

2. **Open Viewer**:
   - Navigate to `ring-memory-viewer.html`
   - Click "LOAD JSON FILE"
   - Select your export

3. **Explore**:
   - Scroll through timeline
   - Notice channel color patterns
   - Click entries to see details
   - Use filters to focus on scenes

4. **Search**:
   - Type channel name to see all entries
   - Search for specific themes
   - Filter by entry type

5. **Analyze**:
   - Count perspective vs scene ratio
   - Identify narrative clusters
   - Track channel usage patterns

---

## Related Tools

- **thousand-tetrad.html** - Main tetrad analysis engine
- **thousand-multi.html** - Multi-channel orchestration
- **SCENARIO_LIBRARY.md** - 57 scenario documentation

---

## Credits & License

Part of the **1000 Small Futures** LEGOS framework.

Built with:
- Vanilla JavaScript (no frameworks)
- CSS Grid & Flexbox
- GitHub-inspired design patterns
- CRT terminal aesthetics

---

**Status**: ✅ Production Ready  
**Version**: 1.0  
**Last Updated**: 2025-10-23
