# LEGOS Filmic Timeline Viewer - Design Philosophy

## 🎬 Cinematic Apparatus as Interface

The Session Viewer reimagines LEGOS sessions through **filmic apparatus** - the material and symbolic systems filmmakers use to encode meaning.

---

## 🎯 Core Metaphor: SESSION AS FILM

```
LEGOS Session    →    Film Edit
─────────────────────────────────
Channels         →    Tracks
Scenes           →    Shots
Perspectives     →    Angles
Snapshots        →    Keyframes
Messages         →    Script
Grid             →    Composition
Ring Memory      →    Timeline
Timestamps       →    Timecode
```

---

## 📐 Geometric Encoding

### 1. **Horizontal = Temporal Flow**
The timeline extends horizontally, left-to-right, following cinematic convention:
- **Earlier** scenes appear left
- **Later** scenes appear right
- **Playhead** moves across time
- **Duration** encoded as width

### 2. **Vertical = Parallel Tracks**
Channels stack vertically like film editor tracks:
- Each channel = one narrative strand
- Simultaneous events = aligned vertically
- **Montage** = cross-cutting between tracks
- **Layer** = depth of narrative

### 3. **Color = Channel Identity**
Each track has unique color (from channel):
- **Left border** = quick identification
- **Shot type** uses color coding
- **Selected shot** glows in channel color
- **Playhead** = red (classic film marker)

### 4. **Size = Significance**
Shot width suggests importance:
- **Longer summaries** = wider shots
- **Key moments** = emphasized size
- **Clustering** = montage sequences
- **Spacing** = rhythm and pacing

---

## 🎥 Filmic Language

### Shot Types
```
SCENE         →  Master Shot (green)
PERSPECTIVE   →  POV Shot (blue)
SNAPSHOT      →  Freeze Frame (orange)
```

### Track Structure
```
┌─────────────────────────────────────┐
│ ▌ CHANNEL NAME         12 shots     │ ← Track Header
├─────────────────────────────────────┤
│ [Shot 1] [Shot 2] [Shot 3] ...      │ ← Timeline
│   ↑         ↑         ↑              │
│  Scene    Persp    Snapshot          │
└─────────────────────────────────────┘
```

### Timecode System
```
HH:MM:SS:FF
│  │  │  └─ Frames (shots)
│  │  └──── Seconds
│  └─────── Minutes
└────────── Hours
```

Duration calculated from first to last entry timestamp.

---

## 🎞️ Draggable Apparatus

### Divider = Reframing Device
The vertical divider between timeline and details acts like:
- **Matte box** adjusting frame
- **Crop tool** controlling view
- **Split screen** ratio
- **Aspect ratio** slider

**Interaction**:
- Drag to resize panels
- Visual feedback (glow on hover)
- 300px minimum, 600px maximum
- Smooth transition with cursor change

---

## 🎬 Three View Modes

### 1. **Tracks View** (Default)
Film editor timeline:
- Horizontal shot sequence
- Multiple channel tracks
- Parallel narrative strands
- Montage visualization

### 2. **Storyboard View**
Visual grid layout:
- Shots as cards in grid
- Overview of sequence
- Spatial arrangement
- Thumbnail preview

### 3. **Script View**
Text-based sequence:
- Shot list format
- Scene descriptions
- Dialogue/messages
- Technical notes

**Toggle**: Click **▦** (bottom-left corner) or view buttons

---

## 🎨 Visual Hierarchy

### Information Density
```
Level 1: Track Headers
  ↓  Channel identity, shot count
Level 2: Shot Cards
  ↓  Shot number, title, type
Level 3: Detail Panel
  ↓  Full summary, metadata
Level 4: Grid Preview
  ↓  9×9 composition view
```

### Reading Order
1. **Scan tracks** (channel overview)
2. **Read shots** left-to-right (temporal)
3. **Select shot** (click for details)
4. **Study details** (right panel)
5. **View grid** (spatial composition)

---

## 📊 Symbolic Encoding

### Shot Card Anatomy
```
┌─────────────────────┐
│▌Shot 23             │ ← Number (sequence)
│ Embrace of Imper... │ ← Title (headline)
│ [SCENE]             │ ← Type badge
│ 11:27:45            │ ← Timestamp
└─────────────────────┘
│
└─ Left border = channel color
```

### Color Semiotics
- **Green** (#56ff9f) = Main scenes, primary action
- **Blue** (#7d8bff) = Perspectives, POV shifts
- **Orange** (#ffa53d) = Snapshots, frozen moments
- **Red** (#ff3d4e) = Playhead, current position

### Spatial Grammar
- **Clustering** = related shots, montage sequence
- **Gaps** = temporal ellipsis, time jump
- **Alignment** = simultaneity, parallel action
- **Stacking** = multi-track narrative

---

## 🎞️ Cinematic Principles Applied

### 1. **Montage Theory** (Eisenstein)
Shots juxtaposed create meaning beyond individual frames:
- Track stacking = vertical montage
- Shot sequence = horizontal montage
- Selection reveals = intellectual montage

### 2. **Mise-en-scène** (Bazin)
Everything in frame contributes to meaning:
- Grid preview = spatial composition
- Shot cards = framing choices
- Color coding = visual motifs
- Layout = staging decisions

### 3. **Continuity Editing**
Smooth temporal flow:
- Left-to-right chronology
- Shot numbers = sequence
- Timestamps = actual duration
- Tracks = parallel continuity

### 4. **Apparatus Theory** (Baudry)
The viewing mechanism shapes perception:
- Timeline = mechanical film strip
- Playhead = projector gate
- Tracks = multi-layer optical printing
- Divider = aperture/matte

---

## 🎯 Four Corner Buttons (Unified Interface)

| Button | Position | Function | Filmic Metaphor |
|--------|----------|----------|-----------------|
| **◎** | Top-Left | Load session | Load reel |
| **?** | Top-Right | Help | Director's notes |
| **▦** | Bottom-Left | View mode | Viewing format |
| **◐** | Bottom-Right | Theme | Lighting/grade |

**Consistent across**:
- thousand-tetrad.html
- thousands-tutorial.html
- session-viewer-filmic.html

---

## 📐 Layout Structure

### Fixed Elements
```
┌─────────────────────────────────────┐
│ ◎    HEADER: Film Title          ? │
├─────────────────────────────────────┤
│                                     │
│  Timeline Tracks    │  Shot Details │
│  (scrollable)       │  (draggable)  │
│                     ⋮               │
│                                     │
├─────────────────────────────────────┤
│ ▦  FOOTER: Stats/Timecode        ◐ │
└─────────────────────────────────────┘
```

### Responsive Behavior
**Desktop** (> 900px):
- Timeline + Details side-by-side
- Draggable divider active
- Full shot cards

**Mobile** (< 900px):
- Timeline only (details hidden)
- Full width timeline
- Tap shots for modal details

---

## 🎬 Narrative Sequencing

### Reading a Session
1. **Overview**: Scan track headers (who)
2. **Sequence**: Read shots left-to-right (when)
3. **Focus**: Click shot for details (what)
4. **Composition**: View grid (where)
5. **Context**: Read messages (how)

### Finding Patterns
- **Recurring motifs**: Same shot types clustering
- **Parallel action**: Aligned shots across tracks
- **Turning points**: Shot type changes
- **Climax**: Snapshot placement
- **Resolution**: Final shots in sequence

---

## 🎨 Aesthetic Choices

### CRT Green Theme (Default)
```
Film stock: Classic terminal aesthetic
Lighting: Low-key, high contrast
Grade: Monochrome with accent
Texture: Digital grain, code feel
```

### Thousand Red Theme (Toggle ◐)
```
Film stock: Warm, organic
Lighting: Theatrical, dramatic
Grade: Red-shifted, emotional
Texture: Film grain, analog feel
```

---

## 🎞️ Filmic Affordances

### Interaction = Editing
- **Click shot** = Mark in/out
- **Drag divider** = Reframe
- **Scroll timeline** = Scrub
- **Select detail** = Inspect footage

### Visual Feedback
- **Hover glow** = Highlight reel
- **Selected state** = Current frame
- **Color coding** = Shot logging
- **Playhead** = Playback position

---

## 📊 Data as Montage

### Ring Memory = Assembled Sequence
Each entry is a "shot" in the final cut:
- **Order** = editorial decision
- **Selection** = what made the cut
- **Rhythm** = pacing of entries
- **Juxtaposition** = meaning through adjacency

### Channels = Multiple Cameras
Different perspectives on same timeline:
- **Coverage** = multiple angles
- **Multi-cam** = parallel recording
- **B-roll** = secondary channels
- **Master shot** = primary channel

---

## 🎯 Design Goals Achieved

✅ **Filmic visual language** - Track/shot/timeline metaphors
✅ **Geometric encoding** - Horizontal time, vertical layers, color identity
✅ **Draggable dividers** - Reframing apparatus
✅ **Unified interface** - Four corners, header, footer
✅ **Narrative sequencing** - Left-to-right temporal flow
✅ **Symbolic apparatus** - Cinematic conventions encode meaning

---

## 🎬 Usage Workflow

### 1. Load Film
```
Click ◎ → Load JSON → Session loads as timeline
```

### 2. Navigate Sequence
```
Scan tracks → Select shot → View details
```

### 3. Adjust Frame
```
Drag divider → Resize panels → Optimize layout
```

### 4. Change View
```
Click ▦ → Cycle modes → Tracks/Storyboard/Script
```

### 5. Analyze Composition
```
Click shot → See grid preview → Study spatial arrangement
```

---

## 🎨 Filmic Principles Summary

| Principle | Implementation |
|-----------|----------------|
| **Temporal flow** | Horizontal timeline |
| **Parallel action** | Vertical tracks |
| **Shot identity** | Color-coded borders |
| **Sequence** | Numbered shots |
| **Duration** | Timecode calculation |
| **Composition** | Grid preview |
| **Montage** | Shot adjacency |
| **Apparatus** | Draggable divider |
| **Continuity** | Chronological order |
| **POV** | Perspective shots |

---

## 🎞️ Technical Implementation

### CSS Grid = Film Strip
```css
.track-timeline {
  display: flex;
  gap: 8px;
  overflow-x: auto;
}
```
Horizontal scrolling mimics film strip movement.

### Color Variables = Film Stock
```css
--accent: #56ff9f;  /* Scene shots */
--playhead: #ff3d4e; /* Current frame */
```

### Draggable = Mechanical Apparatus
```javascript
divider.addEventListener('mousedown', ...)
```
Physical interaction with viewing apparatus.

---

## 🎬 Future Enhancements

### Potential Additions
- **Playback** = Auto-advance through shots
- **Markers** = Annotations on timeline
- **Regions** = Group shot sequences
- **Waveform** = Message density visualization
- **Thumbnails** = Grid preview in shot card
- **Export** = Cut list, EDL format
- **Trimming** = Filter shot range
- **Zooming** = Timeline magnification

---

## ✅ Unified Design System

All LEGOS interfaces now share:
- ✅ Four corner buttons (◎ ? ⇆/▦ ◐)
- ✅ Fixed header with title
- ✅ Fixed footer with stats
- ✅ CRT green + Thousand red themes
- ✅ Same color variables
- ✅ Same typography (Courier New)
- ✅ Same interaction patterns
- ✅ Mobile responsive

**Plus filmic viewer adds**:
- ✨ Cinematic timeline visualization
- ✨ Track-based layout
- ✨ Draggable panel divider
- ✨ Geometric/symbolic encoding
- ✨ Film editor aesthetics

---

**The session is now a film. You are the editor.** 🎬

---

**Status**: ✅ Production Ready  
**Files**: session-viewer-filmic.html, session-viewer-filmic.js  
**Philosophy**: Apparatus theory + film grammar + LEGOS framework  
**Created**: 2025-10-23  
**Version**: 1.0 (Filmic Timeline)
