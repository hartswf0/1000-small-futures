# Cultural Systems Engineering: Technical Specification
## thousand-medical.html - Complete Implementation Guide

**Version:** 2.0  
**Date:** October 22, 2025  
**Implementation:** Production Ready

---

## Executive Summary

The Cultural Engine transforms thousand-medical.html into a computational anthropology laboratory implementing:

### Core Systems
- **7 ABM Frameworks** (Epstein, RebeLand, IRUBA, CCIM, Axelrod, Schelling, BDI)
- **3 Theoretical Lenses** (Pragmatic, Structural, Reflexive)
- **LEGOS-Aware Architecture** (Narratives seed dynamics)
- **BDI Reasoning** (Belief-Desire-Intention cognition)
- **Diffractive Methodology** (Barad's agential realism)
- **Multi-Modal Audit** (Console, grid, overlay, lab)

### Key Innovation
**LEGOS entities are enhanced, not replaced.** Entity perspectives and relations seed cultural parameters, creating "mythology-driven" simulations where narrative and dynamics are entangled.

---

## System Architecture

### State Management

```javascript
channel = {
  // LEGOS grid (preserved)
  grid: [[cell, ...], ...],
  
  // Cultural engine state
  culturalParams: {
    framework: 'epstein' | 'rebeland' | 'iruba' | 'ccim' | 'axelrod' | 'schelling' | 'bdi',
    useBDI: boolean,
    comparisonMode: boolean,
    comparisonSnapshot: {...} | null,
    
    pragmatic: {
      legitimacy: 0-1,
      copEffectiveness: 0-1,
      fearDecay: 0-1,
      citizenRatio: 0-1,
      copRatio: 0-1
    },
    
    structural: {
      symbolicInertia: 0-1,
      mythicCoherence: 0-1,
      ritualPeriod: number
    },
    
    reflexive: {
      mutualAdjustment: 0-1,
      interpretiveComplexity: 0-1
    }
  },
  
  culturalAgents: {
    'x_y': {
      position: [x, y],
      type: 'citizen' | 'rebel' | 'cop',
      legosCellRef: grid[y][x],  // Link to LEGOS
      traits: { hardship, riskAversion, social },
      beliefs: { utility, symbolic, reflexive },
      fear: 0-1,
      energy: 0-1,
      bdiAgent: BDIAgent | null,
      memory: []
    }
  },
  
  culturalTick: number,
  culturalAnimating: boolean,
  culturalMode: 'pragmatic' | 'structural' | 'reflexive'
}
```

---

## Core Components

### 1. LEGOS Narrative Analyzer

**Function:** `analyzeLEGOSNarrative(entity)`

Extracts cultural meaning from LEGOS entity perspectives.

**Keyword Analysis:**

| Keywords | Cultural Type | Symbolic Role | Hardship |
|----------|--------------|---------------|----------|
| authority, enforce, control, guard | cop | enforcer | 0.2 |
| resist, rebel, fight, freedom | rebel | resistance | 0.8 |
| storm, chaos, thunder, fierce | rebel | chaos_agent | 0.6 |
| suffer, struggle, oppressed | citizen | oppressed | 0.8 |
| power, elite, noble, king | cop | elite | 0.1 |
| wise, mediate, peace, calm | citizen | mediator | 0.3 |

**Relations Impact:**
```javascript
if (entity.relations.length > 3) {
  riskAversion *= 0.8;  // Social support reduces fear
}
```

---

### 2. BDI Reasoning Engine

**Class:** `BDIAgent` (Bratman 1987, Rao & Georgeff 1995)

```javascript
class BDIAgent {
  beliefs: {
    nearbyThreats: [],
    nearbyAllies: [],
    perceivedLegitimacy: number,
    symbolicMeaning: string  // From LEGOS
  }
  
  desires: Set<string>  // Generated from type + symbolic role
  
  intentions: [
    { type: string, priority: number }
  ]
  
  currentIntention: { type, priority } | null
}
```

**LEGOS Integration:**

- **Beliefs** influenced by LEGOS perspective
- **Desires** generated from symbolic role
- **Intentions** prioritized by context

**Desire Mapping:**
```
chaos_agent → disrupt_order
mediator → reduce_conflict
oppressed → seek_justice
enforcer → maintain_order
```

---

### 3. Agent Initialization

**Function:** `initCulturalAgents(channel)`

**Two-Phase Process:**

**Phase 1: Enhance LEGOS Entities**
```javascript
// Analyze perspective
const analysis = analyzeLEGOSNarrative(cell.entity);

// ADD cultural data (don't replace)
cell.entity.culturalType = analysis.culturalType;
cell.entity.symbolicRole = analysis.symbolicRole;
cell.entity.culturalBeliefs = {...};
cell.entity.culturalTraits = {...};
```

**Phase 2: Create Agents**
```javascript
agents[key] = {
  type: analysis.culturalType,
  legosCellRef: cell,  // Link back
  traits: { hardship, riskAversion },
  beliefs: { utility, symbolic, reflexive },
  fear: 0,
  energy: 1.0
};
```

---

### 4. Tripartite Cultural Layers

#### Pragmatic (Obeyesekere)
**Philosophy:** Instrumental rationality

**Core Equation:**
```
Grievance = Hardship × (1 - Legitimacy)
Risk = CopDensity × CopEffectiveness × RiskAversion
Rebel if: Grievance > Risk + Threshold
```

#### Structural (Sahlins)
**Philosophy:** Symbolic cosmos

**Mechanics:**
```javascript
// Symbolic coherence affects legitimacy
legitimacy += (avgSymbolic - 0.5) × 0.3

// Mythic inertia resists change
transitionProbability *= (1 - symbolicInertia)
```

#### Reflexive (Geertz)
**Philosophy:** Interpretive entanglement

**Mechanics:**
```javascript
// Mutual adjustment
if (similarBeliefs(agent, neighbor)) {
  both.adjust()
  agent.energy += understandingBonus
}
```

---

## Framework Implementations

### Epstein Civil Violence ⚡

**Command:** `/epstein`

**States:** Quiet → Active → Arrested

**Transitions:**
- G > R → Rebel
- Arrested or R > G → Quiet

**Metrics:**
```
[EPSTEIN] Avg Citizen Grievance: 0.68
```

---

### MASON RebeLand 🏛️

**Command:** `/rebeland`

**Components:**
- Resource distribution
- Institutional strength
- Social networks (LEGOS relations)
- Terrain (grid topology)

**Metrics:**
```
[REBELAND] Network Density: 2.3 relations/agent
```

---

### IRUBA ⚔️

**Command:** `/iruba`

**Psychological Factors:**
```javascript
Fear ← Cop presence
Anger ← Collateral damage

If Anger > Fear → Join insurgents
If Fear > Anger → Support government
```

**Metrics:**
```
[IRUBA] Avg Fear: 0.52, Avg Anger: 0.61
```

---

### CCIM 🌍

**Command:** `/ccim`

**Dynamics:**
- Trade openness (trait exchange)
- Assimilation pressure
- Conflict propensity
- Hybridization zones

---

### Axelrod 🎭

**Command:** `/axelrod`

**Mechanics:**
```
P(interact) ∝ similarity
If interact → Adopt trait
```

---

### Schelling 🏘️

**Command:** `/schelling`

**Core:**
```
If similarNeighbors / total < threshold:
  Relocate
```

---

## Diffractive Methodology (Barad)

### Commands

**`/compare snapshot`** - Capture Configuration A

**`/compare analyze`** - Reveal interference patterns

**`/compare help`** - Methodology guide

### Functions

**`captureSimulationSnapshot(channel)`**
```javascript
return {
  tick, framework, useBDI,
  distribution: { citizens, rebels, cops },
  spatialPatterns: { segregationIndex, rebelClusters },
  roleDistribution: {...},
  legitimacy, copEffectiveness,
  avgFear, avgEnergy
}
```

**`diffractiveAnalysis(snapshot1, snapshot2)`**
```javascript
return {
  popDiff: { citizens, rebels, cops },
  spatialDiff: { segregation, rebelClusters },
  paramDiff: { legitimacy, fear, energy },
  rebellionDivergence: number,
  convergence: boolean
}
```

### Console Output
```
🔬 [DIFFRACTIVE ANALYSIS] Barad's Agential Cuts

📊 Population Interference Pattern
🗺️ Spatial Entanglement Difference
⚙️ Parameter Drift (Ongoing Becoming)
🎭 Symbolic Role Reconfigurations
💡 Diffractive Insight
📐 Material-Discursive Entanglement
```

---

## Audit & Observation Systems

### 1. Console Logging

**Framework Status (Every 10 ticks):**
```
[FRAMEWORK] Active: epstein, BDI: true, Tick: 10
```

**BDI Reasoning (Every tick if active):**
```
[BDI] Reasoning Cycle - Tick 5
  [BDI] Thunder Eagle: {
    type: "rebel",
    symbolicRole: "chaos_agent",
    beliefs: { threats: 2, allies: 1, legitimacy: 0.20 },
    desires: ["disrupt_order", "challenge_authority"],
    intention: { type: "confront", priority: 8 }
  }
```

**Framework Metrics (Every 10 ticks):**
```
[EPSTEIN] Metrics - Tick 20
  Population: { citizens: 12, rebels: 8, cops: 5 }
  Legitimacy: 30.0%
  Avg Citizen Grievance: 0.68
```

**LEGOS Analysis (On init):**
```
[LEGOS NARRATIVE] Fierce Thunder Eagle: culturalType=rebel, symbolicRole=chaos_agent
[MYTHOLOGY SEED] Symbolic roles: { chaos_agent: 3, enforcer: 5, oppressed: 12 }
```

---

### 2. Grid Visual Indicator

**Framework label (top-right corner):**
```
⚡ EPSTEIN
⚡ EPSTEIN + BDI
🧠 BDI
🏛️ REBELAND
⚔️ IRUBA
🌍 CCIM
🎭 AXELROD
🏘️ SCHELLING
```

---

### 3. Cell Overlay

**Click any cell:**
```
⚡ Cultural State (epstein)
Type: rebel (chaos_agent)
Hardship: 80%, Risk Aversion: 40%
Fear: 65%, Energy: 72%

🧠 BDI Reasoning
Beliefs: 2 threats, 1 allies, legitimacy 20%
Desires: disrupt_order, challenge_authority, survive
→ Intention: confront (priority 8)
```

---

### 4. Cultural Lab Interface

**Command:** `/cultural lab`

```
🧪 Cultural Research Lab

Active Framework: ⚡ Epstein Civil Violence
Agent Reasoning: BDI (Belief-Desire-Intention)
Comparison Mode: 🔬 Active
  → Config A: epstein @ Tick 25

Current Parameters:
• Legitimacy: 30%
• Cop Effectiveness: 45%

Agent Counts:
• Citizens: 12
• Rebels: 8
• Cops: 5

LEGOS Narrative Roles:
• chaos_agent: 3 agents
• enforcer: 5 agents
• oppressed: 12 agents

Sample LEGOS Entities:
• Fierce Thunder Eagle (chaos_agent) - rebel
• Brave Rabbit (oppressed) - citizen
```

---

## Command Reference

### Setup Commands

- `/cultural spawn [description]` - Generate LEGOS scene + start simulation
- `/cultural lab` - Open research lab interface
- `/cultural help` - Full command list

### Theoretical Lenses

- `/pragmatic` - Obeyesekere (instrumental rationality)
- `/structural` - Sahlins (symbolic cosmos)
- `/reflexive` - Geertz (interpretive entanglement)

### Framework Commands

- `/bdi` - Belief-Desire-Intention reasoning
- `/epstein` - Civil Violence Model
- `/rebeland` - MASON RebeLand
- `/iruba` - IRUBA Counterinsurgency
- `/ccim` - Cross-Cultural Interaction
- `/axelrod` - Cultural Dissemination
- `/schelling` - Segregation Model

### Control Commands

- `/cultural play` - Resume animation
- `/cultural pause` - Pause simulation
- `/cultural stop` - Stop and restore grid

### Modification Commands

- `/cultural legitimacy 0.7` - Set legitimacy (0-1)
- `/cultural spawn-rebels 5` - Add rebels
- `/cultural spawn-cops 3` - Deploy cops
- `/cultural crackdown` - Violent suppression
- `/cultural uprising` - Mass radicalization

### Comparison Commands (Barad)

- `/compare snapshot` - Capture Configuration A
- `/compare analyze` - Reveal diffractive patterns
- `/compare help` - Methodology guide

### Natural Language

- "Add 5 rebels"
- "Deploy 3 cops"
- "Set legitimacy to 30%"
- "Crackdown"
- "Uprising"
- "Pause"

---

## Research Applications

### 1. Sahlins vs. Obeyesekere Test

```bash
# Symbolic interpretation
/cultural spawn Cook as divine Lono during Makahiki
/structural
/compare snapshot

# Pragmatic interpretation
/pragmatic
/iruba
/compare analyze
```

**Question:** Do theoretical stances produce different emergences?

---

### 2. Framework Sensitivity Analysis

```bash
/cultural spawn Police crackdown
/compare snapshot

/bdi
/compare analyze  # Does reasoning change patterns?

/compare snapshot
/iruba
/compare analyze  # Does fear/anger model matter?
```

**Question:** Which properties are framework-invariant?

---

### 3. LEGOS Mythology Constraint

```bash
# Strong narrative
/cultural spawn Divine visitor bringing gifts
/compare snapshot
/iruba
/compare analyze  # Expect convergence

# Weak narrative
/cultural spawn Random marketplace encounter
/compare snapshot
/iruba
/compare analyze  # Expect divergence
```

**Question:** How much do narratives constrain emergence?

---

## Integration with Bharwani & Ologs

### Bharwani's Ethnographic Grounding

1. **Ontology architecture** from participant data
2. **LEGOS perspectives** = Participant worldviews
3. **Agent rules** validated through games
4. **Iterative feedback** ensures cultural accuracy

### Category Theory (Ologs)

**Objects:** {Agent, Belief, Action, Framework}

**Morphisms:**
- Agent --influences--> Belief
- Belief --derives_from--> Framework
- Framework --co-constitutes--> Agent

**Circular morphisms reveal entanglement.**

---

## File Structure

### Core Functions
- `analyzeLEGOSNarrative(entity)`
- `generateSceneOntology(channel)`
- `initCulturalAgents(channel)`
- `updatePragmaticLayer(channel)`
- `updateStructuralLayer(channel)`
- `updateReflexiveLayer(channel)`
- `renderCulturalGrid(channel)`

### BDI System
- `class BDIAgent`
  - `updateBeliefs(worldState)`
  - `updateDesires()`
  - `formIntentions()`
  - `execute(worldState)`

### Diffractive System
- `captureSimulationSnapshot(channel)`
- `calculateSpatialPatterns(agents)`
- `diffractiveAnalysis(snapshot1, snapshot2)`

### Utilities
- `logCellEvent(channel, x, y, text)`
- `seedCulturalParams(promptText)`

---

## Performance Considerations

**Tick Rate:** 500ms (adjustable)

**Agent Count:** ~20-40 optimal

**Console Logging:** Filtered by tick (every 10th)

**Memory:** Snapshots store ~5KB

**Grid Updates:** Smooth CSS transitions

---

## Victory Conditions ✅

- [x] 7 ABM frameworks implemented
- [x] 3 theoretical lenses
- [x] BDI reasoning engine
- [x] LEGOS narrative analysis
- [x] Diffractive methodology
- [x] Console audit system
- [x] Grid visual indicators
- [x] Cell overlay display
- [x] Cultural lab interface
- [x] Comparison mode
- [x] Command parser
- [x] Natural language support
- [x] Documentation complete

---

## Summary

The Cultural Engine transforms thousand-medical.html into a **computational anthropology laboratory** where:

1. **LEGOS narratives seed dynamics** (mythology-driven)
2. **Multiple frameworks compare** (Barad's diffractive methodology)
3. **BDI agents reason** (beliefs → desires → intentions)
4. **Observers participate** (entangled modeler/model/phenomena)

**"We are part of the nature we seek to understand." — Karen Barad**

🎭⚙️🔬
