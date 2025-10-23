# Hybrid Cultural-Scenario Cellular Automata 🔄⚡

## Breakthrough: Elements Become Agents

The cultural engine now **wraps existing scenario elements** with cultural dynamics instead of replacing them. Rivers, Sailors, Artifacts, and other narrative elements become agents in the cultural simulation.

## Mapping: Scenario → Cultural Type

### Authority/Enforcement
```
Obstacle → Cop (◆ blue)
Shift → Cop (◆ blue)
```
**Properties:** Low hardship (0.1), low risk aversion (0.3), high utility (0.8)

**Examples:**
- "Raging River" → Cop (natural force of order)
- "Storm Front" → Cop (enforcing boundaries)
- "Military Checkpoint" → Cop (direct authority)

### Contested Resources
```
Goal → Rebel (▲ red)
```
**Properties:** High hardship (0.8), moderate risk aversion (0.4), initial fear (0.7)

**Examples:**
- "Ancient Artifact" → Rebel (contested treasure)
- "Food Supply" → Rebel (resource conflict)
- "Sacred Site" → Rebel (symbolic resistance)

### General Population
```
Entity → Citizen (○ cyan/green)
Location → Citizen (○ cyan/green)
Solution → Citizen (○ cyan/green)
```
**Properties:** Variable hardship (0.3-0.8), variable risk aversion (0.4-0.8)

**Examples:**
- "Sailor in Distress" → Citizen (vulnerable individual)
- "Village Elder" → Citizen (community member)
- "Medical Supply Cache" → Citizen (neutral resource)

## Visual Grammar: Hybrid Display

### With Scenario Element (Wrapped)
```
    ▲        ← Cultural symbol (rebel)
  Artifact   ← Original label (8px)
```

### Pure Cultural Agent (Empty cells)
```
    ○        ← Just the symbol
```

## Cellular Automata Rules

### Rivers as Cops
A "Raging River" (Obstacle) becomes a cop agent:
- **Arrests adjacent rebels** (85% chance)
- **Low hardship** - natural forces don't feel grievance
- **Enforces boundaries** - river blocks passage
- **Cultural dynamics:** If legitimacy drops, river's authority weakens

### Artifacts as Rebels
An "Ancient Artifact" (Goal) becomes a rebel agent:
- **High hardship** - represents contested resource
- **Fear dynamics** - can be "suppressed" by adjacent cops
- **Can transition to citizen** if crackdown pressure exceeds stay pressure
- **Cultural dynamics:** Symbol of resistance, responds to legitimacy

### Sailors as Citizens
A "Sailor in Distress" (Entity) becomes a citizen agent:
- **Variable hardship** - individual circumstances
- **Can become rebel** if `grievance > risk`
- **Responds to legitimacy** - government trust affects behavior
- **Cultural dynamics:** Individual agency within cultural forces

## Cross-Layer Effects on Elements

### Structural Layer (Symbolic Coherence)
Affects how scenario elements relate to each other:
- **High coherence** → Elements maintain stable relationships
- **Rebellion disruption** → Element relationships destabilize
- **Boundary enforcement** → Elements pulled toward narrative center

**Example:** A "River" (cop) maintains its authority role when symbolic coherence is high. During rebellion, its symbolic meaning shifts.

### Reflexive Layer (Mutual Observation)
Elements observe each other and adjust:
- **Observation radius** → How far elements "see"
- **During crackdowns** → Observation expands (2-cell radius)
- **Mutual adjustment** → Elements influence each other's risk perception

**Example:** A "Sailor" (citizen) near a "River" (cop) has amplified risk perception. A "Sailor" near an "Artifact" (rebel) gains solidarity.

## Emergent Narratives

### Scenario: Captain Cook
```
Ancient Artifact (5,7) → Rebel
Raging River (5,5) → Cop
Sailor in Distress (4,5) → Citizen
```

**Dynamics:**
1. Artifact rebels against colonial extraction
2. River enforces natural boundaries
3. Sailor caught between forces
4. If legitimacy drops, Sailor may join Artifact rebellion
5. River can "arrest" Artifact (suppress symbolic resistance)

### Scenario: Medical Crisis
```
Medical Supply Cache → Citizen
Military Checkpoint → Cop
Contaminated Zone → Rebel (contested space)
```

**Dynamics:**
1. Supply cache is neutral population
2. Checkpoint enforces quarantine
3. Contaminated zone represents dangerous resistance
4. Citizens can rebel if medical hardship exceeds fear of checkpoint

### Scenario: Environmental Collapse
```
Polluted River → Rebel (nature fights back)
Government Response → Cop
Affected Community → Citizen
```

**Dynamics:**
1. River becomes activist force
2. Government attempts suppression
3. Community decides whether to join river's rebellion
4. Legitimacy determines if community supports government or nature

## Implementation Details

### Agent Initialization (Two-Pass)
```javascript
// Pass 1: Wrap existing elements
for each grid cell:
  if cell has scenario element:
    culturalType = mapElementType(element.type)
    agent = createAgent(culturalType, element)
    agent.scenarioElement = element  // Preserve original

// Pass 2: Fill empty cells
emptyCount = 81 - existingCount
targetTotal = 81 * density
toAdd = targetTotal - existingCount
// Add citizens and cops to reach target density
```

### Agent Properties
```javascript
{
  type: 'citizen' | 'cop' | 'rebel',
  scenarioElement: { type, label, name } | null,
  beliefs: { utility, symbolic, reflexive },
  traits: { hardship, riskAversion, social },
  energy: 0-1,
  fear: 0-1,
  perceivedRisk: 0-1,
  memory: []
}
```

### Rendering (Overlay)
```javascript
if (agent.scenarioElement) {
  overlay.innerHTML = `
    <div style="...">
      <div>${culturalSymbol}</div>
      <div>${elementLabel}</div>
    </div>
  `;
} else {
  overlay.textContent = culturalSymbol;
}
```

### Inspection Data
```javascript
cell.setAttribute('data-scenario-element', JSON.stringify({
  type: element.type,
  label: element.label
}));

cell.setAttribute('data-cultural-agent', JSON.stringify({
  type: agent.type,
  beliefs: agent.beliefs,
  traits: agent.traits,
  wrapsElement: true
}));
```

## Console Output
```
[CULTURAL] Initialized 45 agents (12 wrapping scenario elements, 33 new)
```

Shows:
- Total agents spawned
- How many wrap existing elements
- How many are pure cultural agents in empty cells

## Testing Scenarios

### Test 1: Element Rebellion
```
/pragmatic Colonial expedition encounters sacred artifacts
```

**Expected:**
- Artifacts (Goals) become rebels
- Obstacles (natural forces) become cops
- Entities (people) become citizens
- Watch artifacts "fight back" against colonial forces

### Test 2: Environmental Authority
```
/pragmatic River pollution crisis sparks protests
```

**Expected:**
- Rivers become cops OR rebels (depending on type)
- Pollution zones become contested spaces
- Communities decide whether to rebel

### Test 3: Medical Enforcement
```
/pragmatic Quarantine zone enforced by military
```

**Expected:**
- Medical supplies become citizens
- Checkpoints become cops
- Contaminated areas become rebels
- Civilian population responds to legitimacy

## Victory Conditions

✅ Scenario elements wrapped with cultural properties  
✅ Element-to-agent type mapping operational  
✅ Visual display shows BOTH symbol AND label  
✅ Empty cells filled with additional agents  
✅ Scenario element data preserved for inspection  
✅ Cellular automata rules apply to narrative elements  
✅ Cross-layer effects modulate element behavior  
✅ Emergent narratives from hybrid system  

**Scenario elements are now living cultural agents that respond to rebellion, legitimacy, and observation dynamics.**
