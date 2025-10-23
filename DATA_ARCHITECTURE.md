# LEGOS Data Architecture & Memory Management

## 🎯 Design Goals

1. **Collect rich telemetry** without overwhelming devices
2. **Ring buffer** as intelligent circular memory (like oti.json)
3. **Graceful degradation** for mobile/low-memory scenarios
4. **Separate concerns** - scenarios vs runtime data vs telemetry
5. **Temporal indexing** - "chat across time" with efficient lookup
6. **Fail gracefully** - never crash, always degrade smoothly

---

## 📊 Data Model Hierarchy

```
┌─────────────────────────────────────┐
│ Session Container (Root)            │
├─────────────────────────────────────┤
│ • Metadata (export info)            │
│ • Channels (narrative threads)      │
│ • Ring Buffer (recent entries)      │
│ • Telemetry Index (lookup)          │
│ • Scenario Definitions (separate)   │
└─────────────────────────────────────┘
         ↓         ↓         ↓
    Channels   Ring Buffer  Telemetry
```

---

## 🔄 Ring Buffer Design (Circular Memory)

### Concept: oti.json Pattern
**oti.json** = Ontology Temporal Index
- Circular buffer that overwrites oldest entries
- Maintains temporal integrity
- Constant memory footprint
- Fast lookup by time/id

### Ring Buffer Structure
```javascript
{
  capacity: 48,              // Max entries (configurable)
  pointer: 0,                // Current write position
  entries: [],               // Circular array
  index: {                   // Fast lookup
    byId: Map<string, entry>,
    byChannel: Map<channelId, entry[]>,
    byType: Map<type, entry[]>,
    byTime: SortedArray<timestamp>
  },
  telemetry: {               // Aggregated stats
    totalWrites: 0,
    overwriteCount: 0,
    memoryUsage: 0
  }
}
```

### Memory Limits by Device
```javascript
const MEMORY_PROFILES = {
  desktop: {
    ringCapacity: 96,
    telemetryDepth: 1000,
    gridHistory: 50
  },
  tablet: {
    ringCapacity: 48,
    telemetryDepth: 500,
    gridHistory: 25
  },
  mobile: {
    ringCapacity: 24,
    telemetryDepth: 200,
    gridHistory: 10
  },
  lowMemory: {
    ringCapacity: 12,
    telemetryDepth: 50,
    gridHistory: 5
  }
};
```

---

## 📡 Enhanced Telemetry Collection

### What to Collect (Without Strain)

#### 1. **Generation Metadata** (Lightweight)
```javascript
{
  generationId: "gen-UUID",
  type: "scene" | "perspective" | "tetrad",
  timestamp: ISO8601,
  duration: milliseconds,    // How long generation took
  tokenCount: number,        // API tokens used
  modelUsed: string,         // Which model
  success: boolean,
  retryCount: number
}
```

#### 2. **Perspective Telemetry** (Medium Weight)
```javascript
{
  perspectiveId: "persp-UUID",
  entityId: string,
  gridPosition: [x, y],
  generatedAt: timestamp,
  viewpoint: {
    role: string,            // Entity's role
    beliefs: object,         // Belief state
    goals: string[],         // Entity goals
    context: string          // Situational context
  },
  analysis: {
    depthLevel: number,      // How deep the analysis
    recursionCount: number,  // Nested perspectives
    connections: string[]    // Related entities
  }
}
```

#### 3. **Grid State Snapshots** (Heavy - Sampled)
```javascript
{
  snapshotId: "snap-UUID",
  timestamp: timestamp,
  gridState: {
    cells: object,           // Full 9x9 state
    entityCount: number,
    occupancyRate: number
  },
  // Only store every Nth state or on significant changes
  significanceScore: number  // Determines if we keep it
}
```

#### 4. **Tetrad Data** (Separate File)
```javascript
{
  tetradId: "tetrad-UUID",
  scenarioId: string,
  generatedAt: timestamp,
  options: {
    enhance: {...},
    reverse: {...},
    retrieve: {...},
    obsolesce: {...}
  },
  // Don't duplicate in ring, reference by ID
  stored: "tetrad-data-UUID.json"
}
```

---

## 💾 Memory Management Strategy

### 1. **Tiered Storage**
```
Hot Storage (RAM)
├─ Ring Buffer (48 entries)
├─ Current Session (active channels)
└─ Telemetry Index (last 200 events)

Warm Storage (IndexedDB)
├─ Recent Sessions (last 10)
├─ Telemetry Archive (compressed)
└─ Grid Snapshots (sampled)

Cold Storage (Export Files)
├─ Full Session Exports
├─ Tetrad Definitions
└─ Historical Archives
```

### 2. **Graceful Degradation Ladder**
```javascript
function getMemoryProfile() {
  const memory = performance.memory?.usedJSHeapSize || 0;
  const deviceMemory = navigator.deviceMemory || 4; // GB
  
  if (deviceMemory >= 8 && memory < 100_000_000) {
    return 'desktop';
  } else if (deviceMemory >= 4 && memory < 50_000_000) {
    return 'tablet';
  } else if (memory < 30_000_000) {
    return 'mobile';
  } else {
    return 'lowMemory';
  }
}

function degradeGracefully(profile) {
  switch(profile) {
    case 'lowMemory':
      // Reduce ring to 12 entries
      // Stop grid snapshots
      // Compress telemetry
      // Disable rich previews
      break;
    case 'mobile':
      // Reduce ring to 24 entries
      // Sample grid every 5 states
      // Limit perspective depth
      break;
    // ... etc
  }
}
```

### 3. **Circular Buffer Write Strategy**
```javascript
class RingBuffer {
  constructor(capacity) {
    this.capacity = capacity;
    this.entries = new Array(capacity);
    this.pointer = 0;
    this.size = 0;
  }
  
  write(entry) {
    // Overwrite oldest
    const oldEntry = this.entries[this.pointer];
    if (oldEntry) {
      this.index.remove(oldEntry);
      this.telemetry.overwriteCount++;
    }
    
    this.entries[this.pointer] = entry;
    this.index.add(entry);
    
    this.pointer = (this.pointer + 1) % this.capacity;
    this.size = Math.min(this.size + 1, this.capacity);
    
    // Memory check
    if (this.checkMemoryPressure()) {
      this.compactOldEntries();
    }
  }
  
  checkMemoryPressure() {
    // Check if we're using too much memory
    const usage = performance.memory?.usedJSHeapSize || 0;
    const limit = this.memoryProfile.limit;
    return usage > limit * 0.8; // 80% threshold
  }
  
  compactOldEntries() {
    // Remove detailed data from old entries
    // Keep only essential fields
    const keepFields = ['id', 'type', 'timestamp', 'headline'];
    this.entries.forEach((entry, i) => {
      if (i !== this.pointer) {
        Object.keys(entry).forEach(key => {
          if (!keepFields.includes(key)) {
            delete entry[key];
          }
        });
      }
    });
  }
}
```

---

## 📋 Separate Data Concerns

### 1. **Scenario Definitions** (Static - Separate File)
```javascript
// scenarios-library.json
{
  "version": "1.0",
  "scenarios": {
    "blank": {
      "id": "blank",
      "name": "Custom Tetrad",
      "systemInstruction": "...",
      "context": [...],
      // No runtime data here
    },
    // ... 57 scenarios
  },
  "categories": {
    "media_theory": ["blank", "microdrama", ...],
    // ... 12 categories
  }
}
```

**Why separate?**
- Scenarios are ~100KB of static data
- Don't need in every export
- Can be cached/referenced
- Updates don't require session re-export

### 2. **Runtime Session Data**
```javascript
// legos-session-UUID.json
{
  "sessionId": "sess-UUID",
  "exportedAt": timestamp,
  "scenariosUsed": ["blank", "mouseofsilver"], // Reference IDs
  "channels": [...],
  "ringBuffer": {...},
  "telemetryRef": "telemetry-UUID.json", // Separate file
  "memoryProfile": "desktop"
}
```

### 3. **Telemetry Archive** (Optional Export)
```javascript
// telemetry-UUID.json (optional, large file)
{
  "sessionId": "sess-UUID",
  "collectedAt": timestamp,
  "generations": [...],      // All generation events
  "perspectives": [...],     // All perspective data
  "gridSnapshots": [...],    // Sampled states
  "statistics": {
    "totalGenerations": 0,
    "avgDuration": 0,
    "tokenUsage": 0
  }
}
```

---

## 🔍 Temporal Indexing ("Chat Across Time")

### Index Structure
```javascript
const TemporalIndex = {
  // By timestamp (sorted)
  timeline: SortedArray<{
    timestamp: Date,
    entryId: string,
    type: string,
    channelId: string
  }>,
  
  // By channel (grouped)
  byChannel: Map<channelId, {
    entries: entryId[],
    firstSeen: timestamp,
    lastSeen: timestamp
  }>,
  
  // By entity (grouped)
  byEntity: Map<entityId, {
    perspectives: entryId[],
    appearances: [{x, y, timestamp}],
    narrative: string[]
  }>,
  
  // By grid position (spatial)
  byPosition: Map<"x,y", {
    events: [{entryId, timestamp, type}],
    history: string[]  // What happened here
  }>,
  
  // Full-text search index
  searchIndex: InvertedIndex<string, entryId[]>
};
```

### Query Examples
```javascript
// Find all perspectives of entity "Clancy"
const clancyPerspectives = index.byEntity.get("clancy");

// Find all events at grid position (4, 4)
const cell44Events = index.byPosition.get("4,4");

// Find all scenes in channel between times
const sceneRange = index.timeline.range(startTime, endTime)
  .filter(e => e.type === 'SCENE' && e.channelId === channelId);

// Full-text search across all entries
const searchResults = index.searchIndex.query("death acceptance");
```

### Building the Index
```javascript
function buildTemporalIndex(ringBuffer) {
  const index = new TemporalIndex();
  
  ringBuffer.entries.forEach(entry => {
    // Add to timeline
    index.timeline.insert({
      timestamp: new Date(entry.timestamp),
      entryId: entry.id,
      type: entry.type,
      channelId: entry.channelId
    });
    
    // Group by channel
    if (!index.byChannel.has(entry.channelId)) {
      index.byChannel.set(entry.channelId, {
        entries: [],
        firstSeen: entry.timestamp,
        lastSeen: entry.timestamp
      });
    }
    index.byChannel.get(entry.channelId).entries.push(entry.id);
    
    // If perspective, index by entity
    if (entry.type.includes('PERSPECTIV')) {
      const entityId = extractEntityId(entry);
      if (!index.byEntity.has(entityId)) {
        index.byEntity.set(entityId, {
          perspectives: [],
          appearances: [],
          narrative: []
        });
      }
      index.byEntity.get(entityId).perspectives.push(entry.id);
    }
    
    // Index by grid position (if available)
    if (entry.symbol && entry.symbol.includes(' ')) {
      const [x, y] = entry.symbol.split(' ');
      const key = `${x},${y}`;
      if (!index.byPosition.has(key)) {
        index.byPosition.set(key, { events: [], history: [] });
      }
      index.byPosition.get(key).events.push({
        entryId: entry.id,
        timestamp: entry.timestamp,
        type: entry.type
      });
    }
    
    // Full-text index
    const text = `${entry.headline} ${entry.summary}`.toLowerCase();
    text.split(/\W+/).forEach(word => {
      if (word.length > 3) {  // Skip short words
        if (!index.searchIndex.has(word)) {
          index.searchIndex.set(word, []);
        }
        index.searchIndex.get(word).push(entry.id);
      }
    });
  });
  
  return index;
}
```

---

## 📤 Enhanced Export Format

### Full Export (Desktop - Large File OK)
```javascript
{
  "version": "2.0",
  "exportType": "full",
  "sessionId": "sess-UUID",
  "exportedAt": timestamp,
  "memoryProfile": "desktop",
  
  "metadata": {
    "duration": seconds,
    "totalGenerations": 0,
    "channelCount": 0,
    "entryCount": 0
  },
  
  "scenarios": {
    // Inline scenario definitions for offline use
    "used": ["blank", "mouseofsilver"],
    "definitions": {...}  // Optional, can reference library
  },
  
  "channels": [...],      // Full channel state
  "ringBuffer": {...},    // All entries
  
  "telemetry": {
    "generations": [...],
    "perspectives": [...],
    "gridSnapshots": [...]
  },
  
  "index": {
    // Pre-built temporal index for fast queries
    "timeline": [...],
    "byChannel": {...},
    "byEntity": {...}
  }
}
```

### Compact Export (Mobile - Small File)
```javascript
{
  "version": "2.0",
  "exportType": "compact",
  "sessionId": "sess-UUID",
  "exportedAt": timestamp,
  "memoryProfile": "mobile",
  
  "metadata": {...},
  
  "scenarios": {
    "used": ["blank"],  // Just IDs, fetch from library
  },
  
  "channels": [
    // Minimal channel data
    {
      "id": "...",
      "name": "...",
      "scenario": "blank",
      "messages": [
        // Last 10 messages only
      ]
    }
  ],
  
  "ringBuffer": {
    "capacity": 24,
    "entries": [
      // Essential fields only
      {
        "id": "...",
        "type": "...",
        "headline": "...",
        "timestamp": "...",
        // No full summary, no grid data
      }
    ]
  },
  
  // No telemetry in compact export
  // No pre-built index (build on load if needed)
}
```

---

## 📱 Mobile-Friendly Timeline Grid

### Design Pattern
```
┌─────────────────────────────────┐
│ Timeline Scrubber               │
│ ═══●═══════════════════════════ │
│    ↑ Current position           │
├─────────────────────────────────┤
│ Grid View (9×9)                 │
│ ┌─┬─┬─┬─┬─┬─┬─┬─┬─┐            │
│ │ │ │E│ │ │ │ │ │ │            │
│ │ │ │ │O│ │ │ │ │ │            │
│ │L│ │ │ │ │G│ │ │ │            │
│ └─┴─┴─┴─┴─┴─┴─┴─┴─┘            │
├─────────────────────────────────┤
│ Chat Messages (scrollable)      │
│ • Scene: Embrace of...          │
│ • Perspective: Citizen 25       │
│ • Scene: Amazon Workers...      │
├─────────────────────────────────┤
│ ◀ Prev  [12/48]  Next ▶        │
└─────────────────────────────────┘
```

### Features
1. **Timeline scrubber** - Drag to navigate time
2. **Grid state** - Shows composition at selected time
3. **Chat view** - Messages in temporal order
4. **Stepper controls** - Navigate shot-by-shot
5. **Touch-optimized** - Swipe gestures
6. **Auto-collapse** - Old messages compact

---

## 🔧 Implementation Strategy

### Phase 1: Ring Buffer Enhancement
- [ ] Implement circular buffer with capacity limits
- [ ] Add memory profiling and auto-adjustment
- [ ] Create graceful degradation system
- [ ] Test on various devices

### Phase 2: Separate Scenario Data
- [ ] Extract scenarios to separate file
- [ ] Create scenario library loader
- [ ] Update exports to reference scenarios
- [ ] Maintain backwards compatibility

### Phase 3: Telemetry Collection
- [ ] Add generation metadata tracking
- [ ] Implement perspective telemetry
- [ ] Create grid snapshot sampler
- [ ] Build memory-aware collection

### Phase 4: Temporal Indexing
- [ ] Build temporal index structure
- [ ] Implement query system
- [ ] Create "chat across time" API
- [ ] Add search functionality

### Phase 5: Mobile Timeline Viewer
- [ ] Design mobile grid interface
- [ ] Implement timeline scrubber
- [ ] Add swipe navigation
- [ ] Optimize for touch

---

## ⚠️ Memory Safety Guidelines

### Never Do
❌ Unbounded arrays
❌ Deep cloning large objects
❌ Keeping all history in RAM
❌ Synchronous heavy operations
❌ Blocking main thread

### Always Do
✅ Set capacity limits
✅ Use circular buffers
✅ Sample/compress old data
✅ Check memory pressure
✅ Degrade gracefully
✅ Offload to IndexedDB
✅ Use Web Workers for heavy tasks

---

## 📊 Memory Budget Example

### Desktop (8GB RAM, 100MB heap)
```
Ring Buffer:      48 entries × 10KB  = 480KB
Telemetry:        1000 events × 2KB  = 2MB
Grid Snapshots:   50 states × 20KB   = 1MB
Channels:         10 channels × 50KB = 500KB
Index:            Lookup tables      = 500KB
Total:                                ≈4.5MB
```

### Mobile (2GB RAM, 30MB heap)
```
Ring Buffer:      24 entries × 5KB   = 120KB
Telemetry:        200 events × 1KB   = 200KB
Grid Snapshots:   10 states × 20KB   = 200KB
Channels:         5 channels × 30KB  = 150KB
Index:            Minimal            = 100KB
Total:                                ≈770KB
```

---

## 🎯 Success Metrics

- **Memory usage** < 80% of profile limit
- **Export time** < 2 seconds for full, < 500ms for compact
- **Load time** < 1 second for session
- **Search latency** < 100ms for indexed queries
- **No crashes** on any supported device
- **Graceful degradation** automatic and transparent

---

**Status**: ✅ Architecture Documented  
**Next**: Implement ring buffer with memory management  
**Version**: 2.0 (Telemetry & Temporal Indexing)
