# LEGOS-Aware Cultural Simulation 🎭⚙️

## Mythology Seed Concept

The cultural simulation now **reads LEGOS narratives** to derive cultural meaning, rather than overwriting them. LEGOS entities serve as the **mythology seed** for cultural dynamics.

## How It Works

### 1. LEGOS Narrative Analysis

When cultural simulation starts, each LEGOS entity is analyzed:

```javascript
function analyzeLEGOSNarrative(entity) {
  const perspective = entity.perspective.toLowerCase();
  const name = entity.name.toLowerCase();
  
  // Analyze for cultural markers
  if (perspective.match(/authority|enforce|control/)) 
    → culturalType = 'cop'
  
  if (perspective.match(/resist|rebel|fight|freedom/))
    → culturalType = 'rebel'
  
  if (perspective.match(/storm|chaos|thunder|wild/))
    → culturalType = 'rebel', symbolicRole = 'chaos_agent'
  
  // Relations affect risk aversion
  if (entity.relations.length > 3)
    → riskAversion *= 0.8  // Social support reduces fear
}
```

### 2. Symbolic Role Mapping

Based on LEGOS perspectives, entities get symbolic roles:

| Perspective Keywords | Cultural Type | Symbolic Role | Example |
|---------------------|---------------|---------------|---------|
| authority, enforce, control, guard | cop | enforcer | Police Officer |
| resist, rebel, fight, freedom | rebel | resistance | Freedom Fighter |
| suffer, struggle, oppressed | citizen | oppressed | Downtrodden Villager |
| power, elite, ruler, king | cop | elite | Noble Lord |
| storm, chaos, thunder, fierce | rebel | chaos_agent | Fierce Thunder Eagle |
| wise, mediate, peace, calm | citizen | mediator | Wise Owl |

### 3. Example: Fierce Thunder Eagle

**LEGOS Entity:**
```json
{
  "name": "Fierce Thunder Eagle",
  "perspective": "A fierce eagle soaring through thunderstorms...",
  "relations": ["soaring: thunderstorm-02"]
}
```

**Cultural Analysis:**
```javascript
[LEGOS NARRATIVE] Fierce Thunder Eagle: 
  culturalType=rebel, 
  symbolicRole=chaos_agent, 
  perspective="a fierce eagle soaring through thunderstorms..."
```

**Result:**
- Type: Rebel (revolutionary energy)
- Symbol: ▲ (resistance marker)
- Hardship: 0.6 (moderate suffering)
- Risk Aversion: 0.4 (bold)
- Movement: Seeks other rebels (solidarity)

### 4. Preservation Not Overwriting

**Critical:** We **enhance** LEGOS entities, not replace them:

```javascript
// ✅ GOOD - Enhance existing entity
if (existingCell.entity && !existingCell.entity.culturalType) {
  existingCell.entity.culturalType = culturalType;
  existingCell.entity.symbolicRole = symbolicRole;
  existingCell.entity.culturalBeliefs = {...};
}

// ❌ BAD - Would overwrite LEGOS entity
existingCell.entity = { culturalType: 'rebel' };  // DON'T DO THIS
```

## Cultural Lab Integration

### `/cultural lab` Shows LEGOS Analysis

```
🧪 Cultural Research Lab

LEGOS Narrative Roles:
• chaos_agent: 3 agents
• enforcer: 5 agents
• oppressed: 12 agents
• resistance: 8 agents
• mediator: 2 agents

Sample LEGOS Entities:
• Fierce Thunder Eagle (chaos_agent) - rebel
• Brave Rabbit (oppressed) - citizen
• Cunning Wolf (enforcer) - cop
```

## Console Output

When cultural simulation starts:

```
[LEGOS NARRATIVE] Fierce Thunder Eagle: culturalType=rebel, symbolicRole=chaos_agent
[LEGOS NARRATIVE] Brave Rabbit: culturalType=citizen, symbolicRole=oppressed
[LEGOS NARRATIVE] Cunning Wolf: culturalType=cop, symbolicRole=enforcer

[LEGOS CULTURAL] Created 30 agents
[MYTHOLOGY SEED] Symbolic roles derived from LEGOS narratives: 
  { chaos_agent: 3, enforcer: 5, oppressed: 12, resistance: 8, mediator: 2 }
[MYTHOLOGY SEED] This scene's cultural dynamics emerge from LEGOS perspectives and relations
```

## Uprising from LEGOS Mythology

The simulation now generates uprisings **from the LEGOS narrative context**:

### Example Scene: "The Stormy Confrontation"

**LEGOS Entities:**
- Fierce Thunder Eagle (soaring through storms)
- Brave Rabbit (challenged by adversity)
- Cunning Wolf (hunting prey)
- Storm Spirit (embodying chaos)

**Cultural Interpretation:**
- Thunder Eagle → Rebel (chaos_agent)
- Storm Spirit → Rebel (chaos_agent)
- Brave Rabbit → Citizen (oppressed, high hardship)
- Cunning Wolf → Cop (enforcer)

**Emergent Dynamics:**
1. Thunder Eagle and Storm Spirit cluster (rebel solidarity)
2. Brave Rabbit becomes rebel when hardship exceeds threshold
3. Cunning Wolf pursues rebels
4. The "storm" becomes a symbolic uprising

**The mythology seeds the simulation!**

## Relations Impact Culture

LEGOS relations affect cultural parameters:

```javascript
if (entity.relations.length > 3) {
  // High connectivity = social support
  riskAversion *= 0.8;  // Less fear, more collective action
}
```

**Example:**
- Isolated entity: riskAversion = 0.6 → Unlikely to rebel
- Well-connected entity: riskAversion = 0.48 → More likely to join uprising

## Scene Ontology from LEGOS

The scene ontology analyzes ALL LEGOS entities:

```javascript
function generateSceneOntology(channel) {
  const entities = [];
  const authorities = [];
  const conflicts = [];
  
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const cell = channel.grid[y][x];
      if (cell?.entity) {
        entities.push(cell.entity);
        
        if (cell.entity.symbolicRole === 'enforcer' || 
            cell.entity.symbolicRole === 'elite') {
          authorities.push(cell.entity);
        }
        
        if (cell.entity.symbolicRole === 'resistance' || 
            cell.entity.symbolicRole === 'chaos_agent') {
          conflicts.push(cell.entity);
        }
      }
    }
  }
  
  // Derive legitimacy from authority/conflict balance
  legitimacy = 0.7 - (conflicts.length / entities.length * 0.4);
}
```

## Workflow: LEGOS → Cultural Dynamics

```
1. User creates scene:
   /cultural spawn The animals revolt against the hunter
   
2. LEGOS generates narrative:
   - Fierce Thunder Eagle (perspective: "I soar defiantly...")
   - Brave Rabbit (perspective: "I struggle against...")
   - Cunning Wolf (perspective: "I enforce the hunt...")
   
3. Cultural engine analyzes LEGOS:
   [LEGOS NARRATIVE] Thunder Eagle → rebel (chaos_agent)
   [LEGOS NARRATIVE] Rabbit → citizen (oppressed)
   [LEGOS NARRATIVE] Wolf → cop (enforcer)
   
4. Ontology derives parameters:
   Legitimacy: 0.3 (low, many conflicts)
   Cop Effectiveness: 0.4 (moderate authorities)
   
5. Simulation emerges from mythology:
   - Eagle and Rabbit cluster (rebel solidarity)
   - Wolf pursues them (enforcement)
   - Uprising emerges from animal rebellion narrative
   
6. User modifies via chat:
   "Add 5 more rebellious animals"
   → Spawns new LEGOS entities with rebellion perspectives
```

## Advantages of LEGOS-Aware Approach

### 1. Narrative Consistency
Cultural dynamics **match** the scene's narrative tone.

**Before (Type-based):**
```
Goal entity → rebel (always)
```

**After (LEGOS-aware):**
```
"Wise Owl seeking peace" → citizen (mediator)
"Fierce Eagle challenging authority" → rebel (chaos_agent)
```

### 2. Rich Cultural Semantics
Symbolic roles add depth beyond agent types.

### 3. Preserved LEGOS Narratives
Cell click shows **both** LEGOS perspective AND cultural role:

```
Entity · Fierce Thunder Eagle
Perspective: "A fierce eagle soaring through thunderstorms..."
Cultural Type: rebel
Symbolic Role: chaos_agent
Hardship: 0.6
```

### 4. Mythology → Dynamics
Scene mythology **drives** emergent patterns.

A scene about "oppressed villagers rising up" → High hardship citizens → Rebellion cascade

A scene about "wise elders mediating conflict" → High legitimacy → Stable order

## Research Implications

The LEGOS-aware system enables **comparative mythology studies**:

### Experiment 1: Captain Cook Narratives

```
Scenario A: /cultural spawn Cook seen as god Lono
→ LEGOS: "Divine visitor bringing gifts"
→ Analysis: High legitimacy, low resistance
→ Outcome: Stable integration

Scenario B: /cultural spawn Cook as colonial intruder
→ LEGOS: "Foreign usurper violating kapu"
→ Analysis: Low legitimacy, high resistance
→ Outcome: Uprising cascade
```

### Experiment 2: Storm Symbolism

```
Scenario A: Storm as chaos/disruption
→ LEGOS: "Fierce Thunder Eagle"
→ Cultural: chaos_agent, rebel type
→ Movement: Disrupts order, joins resistance

Scenario B: Storm as cleansing/renewal
→ LEGOS: "Gentle Rain Spirit"
→ Cultural: mediator, citizen type
→ Movement: Calms conflict
```

## Victory Conditions

✅ LEGOS entities analyzed for cultural meaning  
✅ Perspectives parsed for semantic markers  
✅ Symbolic roles assigned (enforcer, resistance, chaos_agent, etc.)  
✅ Relations affect risk aversion and collective action  
✅ Cultural data enhances entities without overwriting  
✅ Scene ontology derived from LEGOS distribution  
✅ Cultural lab shows LEGOS narrative roles  
✅ Console logs mythology seed analysis  
✅ Uprisings emerge from LEGOS narrative context  
✅ Preserved LEGOS perspectives visible in cell overlay  

**The cultural simulation now grows FROM the LEGOS mythology, not over it!**
