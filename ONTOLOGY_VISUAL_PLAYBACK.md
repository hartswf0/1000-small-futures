# Scene Ontology + Visual Modes + Playback Control 🎨⏯️

## Three New Features

### 1. Mode-Specific Background Painting 🎨

Cells now have **distinct visual modes** based on the active cultural layer:

#### Pragmatic Mode (Radial Gradients)
```css
radial-gradient(circle at center, ${color}44 0%, ${color}22 100%)
```
- **Effect:** Radiating from center, like decision waves
- **Symbolism:** Action emanating from pragmatic choice

#### Structural Mode (Diagonal Gradients)
```css
linear-gradient(135deg, ${color}33 0%, hsl(260, 50%, 15%) 100%)
```
- **Effect:** Diagonal sweep into deep purple
- **Symbolism:** Mythic structure pulling toward coherence

#### Reflexive Mode (Rotating Conic Gradients)
```css
conic-gradient(from ${tick * 10}deg, ${color}33, ${color}11, ${color}33)
```
- **Effect:** Rotating spinner based on tick count
- **Symbolism:** Recursive observation spinning through interpretations

### 2. Scene Ontology Generator 🧠

Analyzes the **existing scene graph** to automatically configure simulation parameters:

#### Extraction Process
```javascript
// From lastScene:
- entities → General population
- locations → Spatial context
- conflicts (Shift) → Disruption sources
- resources (Goal) → Contested items
- authorities (Obstacle) → Enforcement
- relationships → Social graph
- narrative state → Tension, progress, caution
```

#### Derived Parameters
```javascript
legitimacy = 0.7 - (conflictRatio × 0.4) - (tension × 0.3)
copEffectiveness = 0.3 + (authorityRatio × 0.4)
initialHardship = 0.3 + (caution × 0.5)
```

#### Example Output
```
[ONTOLOGY] Generated scene ontology:
{
  entities: [
    { id: 'sailor-1', name: 'Sailor in Distress', type: 'Entity', position: {x:4, y:5} }
  ],
  authorities: [
    { id: 'river-1', name: 'Raging River', type: 'Obstacle', position: {x:5, y:5} }
  ],
  resources: [
    { id: 'artifact-1', name: 'Ancient Artifact', type: 'Goal', position: {x:3, y:7} }
  ],
  conflicts: [],
  relationships: [
    { source: 'sailor-1', target: 'artifact-1', type: 'seeks' }
  ],
  narrative: { tension: 0.8, progress: 0.7, caution: 0.9 },
  derivedParams: {
    legitimacy: 0.46,  // High tension reduces legitimacy
    copEffectiveness: 0.42,  // River provides moderate authority
    initialHardship: 0.75,  // High caution = high hardship
    contestedResources: true
  }
}
```

### 3. Playback Control ⏯️

New commands for controlling simulation flow:

#### Commands
```
/cultural play   - Resume simulation
/cultural pause  - Pause (keeps all state)
/cultural stop   - Stop and restore medical grid
```

#### State Machine
```
UNINITIALIZED ──/pragmatic──> RUNNING
                /structural    ↕️ ↕️
                /reflexive    play/pause
                              
RUNNING ──/cultural stop──> UNINITIALIZED
```

## Complete Workflow

### Step 1: Build Scene (Medical Engine)
```
User: "Captain Cook encounters Hawaiian ritual during Makahiki festival"
System: Generates scene with Artifacts, Rivers, Sailors
```

### Step 2: Activate Cultural Mode
```
User: /pragmatic Colonial forces meet indigenous resistance
```

**System Response:**
```
◉ Cultural engine initialized in pragmatic mode.
Scene ontology: 3 entities, 1 authorities, 0 conflicts.
Derived legitimacy: 0.46, cop effectiveness: 0.42.
Agents spawned: 52/81 cells.
```

**What Happens:**
1. Scene graph analyzed → Ontology extracted
2. Parameters derived from narrative state
3. Elements wrapped: River→Cop, Artifact→Rebel, Sailor→Citizen
4. Empty cells filled with additional agents
5. Radial gradients painted on all cells
6. Simulation starts automatically

### Step 3: Observe Dynamics
Watch for ~20 seconds:
- **Artifact (Rebel)** contests colonial extraction
- **River (Cop)** enforces boundaries, arrests adjacent rebels
- **Sailor (Citizen)** decides whether to join rebellion
- **Colors shift** as beliefs/fear/hardship change

### Step 4: Switch Layers
```
User: /structural
```

**System Response:**
```
◎ Switched to structural layer.
```

**Visual Change:**
- Backgrounds become diagonal purple gradients
- All agents maintain state but show symbolic beliefs
- Rebellion disruptions visible as boundary distortions

### Step 5: Control Playback
```
User: /cultural pause
```
**System:** `⏸️ Cultural simulation paused. Use /cultural play to resume.`

```
User: /cultural play
```
**System:** `▶️ Cultural simulation resumed in structural mode.`

### Step 6: Reflexive Observation
```
User: /reflexive
```

**Visual Change:**
- Backgrounds become rotating conic gradients
- Observation radius visible via color spread
- If arrests occurred, radius = 2 cells (expanded surveillance)

## Visual Comparison

### Empty Grid (No Scene)
```
/pragmatic test
→ 60 pure cultural agents spawned
→ Random distribution of citizens/cops
→ Generic hardship values
```

### Grid with Scene (Captain Cook)
```
Grid has: Artifact(3,7), River(5,5), Sailor(4,5)

/pragmatic Colonial encounter
→ 3 elements wrapped → 3 cultural agents
→ 49 additional agents fill empty cells
→ Artifact becomes Rebel (hardship 0.8)
→ River becomes Cop (hardship 0.1)
→ Sailor becomes Citizen (hardship derived from caution)
→ Parameters override from scene analysis
```

## Ontology → Parameter Mapping

### High Tension Scenario
```
Scene: tension=0.9, conflicts=2, authorities=1
→ legitimacy = 0.7 - (2/5 × 0.4) - (0.9 × 0.3) = 0.27
→ LOW legitimacy → HIGHER rebellion rate
```

### Stable Authority Scenario
```
Scene: tension=0.2, conflicts=0, authorities=3
→ legitimacy = 0.7 - (0 × 0.4) - (0.2 × 0.3) = 0.64
→ HIGH legitimacy → LOWER rebellion rate
→ copEffectiveness = 0.3 + (3/8 × 0.4) = 0.45
→ Strong enforcement
```

### Contested Resources Scenario
```
Scene: resources=3 (goals), total=10
→ resourceRatio = 0.3 > 0.15
→ contestedResources = true
→ Goals become Rebels automatically
```

## Implementation Details

### Visual Rendering (Mode-Specific)
```javascript
if (mode === 'pragmatic') {
  background = `radial-gradient(circle, ${color}44 0%, ${color}22 100%)`;
} else if (mode === 'structural') {
  background = `linear-gradient(135deg, ${color}33 0%, hsl(260,50%,15%) 100%)`;
} else if (mode === 'reflexive') {
  background = `conic-gradient(from ${tick*10}deg, ${color}33, ${color}11, ${color}33)`;
}
```

### Ontology Extraction
```javascript
// Map entity types to ontology categories
const category = {
  'Entity': 'entities',
  'Location': 'locations',
  'Goal': 'resources',
  'Obstacle': 'authorities',
  'Shift': 'conflicts'
}[entity.type];
```

### Parameter Override
```javascript
// After seeding from prompt, override with ontology
const ontology = generateSceneOntology(channel);
channel.culturalParams.pragmatic.legitimacy = ontology.derivedParams.legitimacy;
channel.culturalParams.pragmatic.copEffectiveness = ontology.derivedParams.copEffectiveness;
```

### Playback State
```javascript
channel.culturalAnimating = true;  // Running
channel.culturalAnimating = false; // Paused
channel.culturalMode = null;       // Stopped
```

## Console Logging

### Ontology Generation
```
[ONTOLOGY] Generated scene ontology: { entities: [...], derivedParams: {...} }
[ONTOLOGY] Overriding parameters from scene: { legitimacy: 0.46, copEffectiveness: 0.42 }
```

### Agent Initialization
```
[CULTURAL] Initialized 52 agents (12 wrapping scenario elements, 40 new)
```

## Victory Conditions

✅ Mode-specific background painting operational  
✅ Pragmatic: Radial gradients from center  
✅ Structural: Diagonal purple gradients  
✅ Reflexive: Rotating conic gradients (tick-based)  
✅ Scene ontology generator extracts graph structure  
✅ Legitimacy derived from tension + conflicts  
✅ Cop effectiveness from authority presence  
✅ Hardship from narrative caution  
✅ Parameters automatically override from scene  
✅ Play/pause/stop commands functional  
✅ State persists across pause/resume  
✅ Visual feedback for all commands  

**The cultural engine now paints cells with mode-specific backgrounds, derives parameters from scene ontology, and supports playback control.**
