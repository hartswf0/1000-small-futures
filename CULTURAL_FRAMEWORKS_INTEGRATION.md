# Cultural Frameworks Integration 🧪

## Multi-Framework Cultural Simulation System

Your system now integrates **7 distinct ABM frameworks** with **3 theoretical lenses** and **BDI agent reasoning**, all operating on LEGOS-generated narratives.

---

## Architecture Overview

```
LEGOS Narrative Generation
        ↓
  [Mythology Seed]
        ↓
  Analyze Perspectives → Symbolic Roles
        ↓
   Cultural Agents
        ↓
  ┌─────────────────────────────────────┐
  │   Select Framework & Reasoning      │
  ├─────────────────────────────────────┤
  │  • BDI (Belief-Desire-Intention)    │
  │  • Epstein Civil Violence           │
  │  • MASON RebeLand                   │
  │  • IRUBA Counterinsurgency          │
  │  • CCIM Cross-Cultural              │
  │  • Axelrod Dissemination            │
  │  • Schelling Segregation            │
  └─────────────────────────────────────┘
        ↓
  Apply Theoretical Lens
  • Pragmatic (Obeyesekere)
  • Structural (Sahlins)
  • Reflexive (Geertz)
        ↓
   Emergent Dynamics
```

---

## I. BDI Framework 🧠

**Belief-Desire-Intention** (Bratman 1987, Rao & Georgeff 1995)

### Core Architecture

```javascript
class BDIAgent {
  beliefs: {
    nearbyThreats: [],
    nearbyAllies: [],
    perceivedLegitimacy: 0.5,
    symbolicMeaning: 'chaos_agent'  // From LEGOS
  }
  
  desires: Set {
    'survive',
    'avoid_harm',
    'challenge_authority',
    'disrupt_order'  // From symbolic role
  }
  
  intentions: [
    { type: 'flee', priority: 10 },
    { type: 'approach_ally', priority: 7 }
  ]
}
```

### LEGOS Integration

**Beliefs Informed by Perspective:**
```javascript
if (perspective.match(/oppress|harsh|suffer/)) {
  beliefs.perceivedLegitimacy *= 0.7;
}
```

**Desires from Symbolic Role:**
- `chaos_agent` → `disrupt_order`
- `mediator` → `reduce_conflict`
- `oppressed` → `seek_justice`
- `enforcer` → `maintain_order`

### Activation

```
/bdi
```

**Result:**
- Agents reason through belief updates → desire generation → intention formation → execution
- LEGOS narratives shape beliefs and desires
- Priority-based intention selection

---

## II. Epstein Civil Violence Model ⚡

**Classic rebellion dynamics** (Epstein 2002)

### Core Equations

```
Grievance = Hardship × (1 - Legitimacy)
Risk = CopDensity × CopEffectiveness × RiskAversion
Rebel if: Grievance > Risk + Threshold
```

### LEGOS Integration

- Hardship derived from perspective analysis
- Symbolic roles affect rebellion threshold
- `chaos_agent` has lower threshold
- `oppressed` has higher initial grievance

### Activation

```
/epstein
```

**Use Cases:**
- Default framework
- Studies tipping points in collective action
- "Massive fear loss" dynamics

---

## III. MASON RebeLand Model 🏛️

**Political systems & insurgency** (Cioffi-Revilla & Rouleau 2009)

### Key Components

1. **Resource Distribution**
   - Affects rebellion propensity
   - Derived from LEGOS scene elements

2. **Institutional Strength**
   - Modulates legitimacy effectiveness
   - Symbolic roles indicate institutions

3. **Social Networks**
   - LEGOS relations = network ties
   - High connectivity = recruitment paths

4. **Geographic Terrain**
   - Grid topology affects movement
   - Obstacles = difficult terrain

### LEGOS Integration

```javascript
if (entity.relations.length > 3) {
  // Strong social network
  insurgentRecruitmentRate *= 1.5;
}
```

### Activation

```
/rebeland
```

**Use Cases:**
- State stability analysis
- Insurgency emergence
- Intervention strategy testing

---

## IV. IRUBA Model ⚔️

**Insurgency Resource-Utilization Battle** (Doran & Lees 2005)

### Psychological Factors

1. **Fear**
   - Increases with cop presence
   - LEGOS perspective: "suffering" → high baseline fear

2. **Anger**
   - Increases with collateral damage
   - Drives insurgent recruitment

3. **Allegiance Shifts**
   - Anger > Fear → Join insurgents
   - Fear > Anger → Support government

### LEGOS Integration

**Collateral Damage Interpretation:**
```javascript
if (cop.action === 'suppress' && civilian.nearby) {
  civilian.anger += 0.3;
  if (civilian.legosCellRef.entity.symbolicRole === 'oppressed') {
    civilian.anger += 0.2;  // More sensitive
  }
}
```

### Activation

```
/iruba
```

**Use Cases:**
- Counterinsurgency operations
- Civilian population dynamics
- Hearts-and-minds campaigns

---

## V. CCIM (Cross-Cultural Interaction) 🌍

**Historical cultural exchange** (Green & Costion 2018)

### Cultural Dynamics

1. **Trade Openness**
   - Enables trait exchange
   - LEGOS relations = trade routes

2. **Assimilation Pressure**
   - Dominant culture absorption
   - Symbolic roles determine dominance

3. **Conflict Propensity**
   - Border clashes
   - `chaos_agent` increases conflict

4. **Hybridization**
   - Mixed cultural zones emerge
   - LEGOS entities can shift roles

### LEGOS Integration

**Cultural Groups from Symbolic Roles:**
```javascript
culturalGroup = {
  'chaos_agent': 'CultureA',
  'enforcer': 'CultureB',
  'mediator': 'Hybrid'
}
```

### Activation

```
/ccim
```

**Use Cases:**
- Cook/Hawaiian encounters
- Colonial contact zones
- Cultural boundary formation

---

## VI. Axelrod's Cultural Dissemination 🎭

**Trait convergence/divergence** (Axelrod 1997)

### Mechanics

1. **Cultural Vectors**
   - Each agent has trait vector
   - LEGOS beliefs = initial traits

2. **Interaction Probability**
   - `P(interact) ∝ similarity`
   - More similar → more interaction

3. **Trait Adoption**
   - Adopt trait from similar neighbor
   - Creates cultural domains

4. **Diversity Preservation**
   - High trait variability maintains diversity
   - LEGOS symbolicRoles = trait dimensions

### LEGOS Integration

```javascript
culturalVector = {
  symbolic: entity.culturalBeliefs.symbolic,
  reflexive: entity.culturalBeliefs.reflexive,
  symbolicRole: entity.symbolicRole
}
```

### Activation

```
/axelrod
```

**Use Cases:**
- Cultural convergence patterns
- Echo chamber formation
- Diversity dynamics

---

## VII. Schelling's Segregation Model 🏘️

**Spatial segregation from preferences** (Schelling 1971)

### Core Insight

**Mild preferences → Extreme segregation**

```
If agent wants > 30% similar neighbors
  AND has < 30% similar neighbors
  THEN relocate
```

### LEGOS Integration

**Similarity based on symbolic roles:**
```javascript
isSimilar(other) {
  return this.symbolicRole === other.symbolicRole ||
         this.culturalType === other.culturalType;
}
```

### Activation

```
/schelling
```

**Use Cases:**
- Spatial polarization
- Neighborhood dynamics
- Self-segregation patterns

---

## Theoretical Lenses 🔍

### Pragmatic (Obeyesekere)

**Culture as instrumental rationality**

```
Decision = max(Utility)
Actions driven by immediate practical needs
Universal rational calculation
```

**Effect on simulation:**
- Emphasizes resource maximization
- Reduces symbolic weight
- Rational actor model

```
/pragmatic
```

---

### Structural (Sahlins)

**Culture as symbolic cosmos**

```
Meaning embedded in mythic structures
Actions driven by cosmological imperatives
Ritual > Rationality
```

**Effect on simulation:**
- Amplifies symbolic roles
- LEGOS perspective determines action
- Collective patterns dominate

```
/structural
```

---

### Reflexive (Geertz)

**Culture as interpretive entanglement**

```
Observer ↔︎ Observed co-constitution
Meaning emerges from interaction
Partial knowledge always
```

**Effect on simulation:**
- Observer affects observed
- Parameters shift based on observation
- Recursive feedback loops

```
/reflexive
```

---

## Workflow Examples

### Example 1: Captain Cook Comparative Study

```bash
# Sahlins interpretation
/cultural spawn Cook arrives during Makahiki as Lono
→ LEGOS: "Divine visitor bringing gifts"
→ Symbolic roles: Cook = elite, Hawaiians = citizens
→ High legitimacy, ritual compliance

/structural
→ Emphasize symbolic meaning
→ Actions follow cosmological pattern

/ccim
→ Cultural exchange mode
→ Trade openness high
→ Hybridization emerges

# Obeyesekere interpretation
/cultural spawn Cook as colonial intruder violating kapu
→ LEGOS: "Foreign usurper disrupting order"
→ Symbolic roles: Cook = chaos_agent, Hawaiians = oppressed
→ Low legitimacy, high resistance

/pragmatic
→ Emphasize practical calculation
→ Hawaiians weigh costs/benefits

/iruba
→ Insurgency model
→ Anger builds from violations
→ Uprising cascade
```

**Compare outcomes:**
- Sahlins + CCIM → Stable integration, ritual exchange
- Obeyesekere + IRUBA → Violent resistance, uprising

---

### Example 2: BDI Reasoning on LEGOS Mythology

```bash
/cultural spawn Fierce Thunder Eagle challenges the Hunter

→ LEGOS generates:
  - Thunder Eagle: "I soar defiantly through storms"
  - Hunter: "I enforce the natural order"
  - Forest Spirits: "We mediate the ancient balance"

→ Symbolic roles assigned:
  - Eagle: chaos_agent (rebel)
  - Hunter: enforcer (cop)
  - Spirits: mediator (citizen)

/bdi
→ Activate BDI reasoning

→ Eagle's BDI state:
  Beliefs: {
    nearbyThreats: [Hunter],
    perceivedLegitimacy: 0.2,
    symbolicMeaning: 'chaos_agent'
  }
  Desires: {
    'disrupt_order',
    'challenge_authority',
    'find_allies'
  }
  Intentions: [
    { type: 'confront', priority: 8 },
    { type: 'move_randomly', priority: 6 }
  ]
  → Action: CONFRONT Hunter

→ Spirit's BDI state:
  Beliefs: {
    nearbyThreats: [],
    symbolicMeaning: 'mediator'
  }
  Desires: {
    'reduce_conflict',
    'maintain_balance'
  }
  Intentions: [
    { type: 'mediate', priority: 9 }
  ]
  → Action: MEDIATE between Eagle and Hunter
```

**Emergent pattern:**
- Eagle disrupts order (from symbolic role)
- Hunter suppresses (from enforcer role)
- Spirits mediate (from mediator role)
- **Mythology drives behavior through BDI desires**

---

### Example 3: Framework Comparison

```bash
/cultural spawn Police crackdown at protest

→ LEGOS generates mixed crowd + cops

# Test Epstein model
/epstein
→ Observe rebellion threshold
→ Grievance calculation dominates
→ Tipping point dynamics

# Switch to RebeLand
/rebeland
→ Observe resource effects
→ Social network recruitment
→ Institutional strength matters

# Switch to IRUBA
/iruba
→ Observe fear/anger balance
→ Collateral damage effects
→ Allegiance shifts

# Switch to Schelling
/schelling
→ Observe spatial segregation
→ Protestors cluster away from cops
→ Mild preference → extreme separation
```

**Insight:** Same LEGOS mythology → Different dynamics per framework

---

## Advanced: Framework Hybridization

### Combine BDI + Epstein

```javascript
if (channel.culturalParams.useBDI && 
    channel.culturalParams.framework === 'epstein') {
  
  // BDI forms intentions
  agent.bdiAgent.updateBeliefs(worldState);
  agent.bdiAgent.formIntentions();
  
  // Epstein calculates grievance
  const grievance = agent.traits.hardship * (1 - worldState.legitimacy);
  
  // BDI desire influenced by Epstein grievance
  if (grievance > 0.7) {
    agent.bdiAgent.desires.add('rebel_immediately');
  }
  
  // Execute highest priority intention
  return agent.bdiAgent.execute(worldState);
}
```

### Combine CCIM + Axelrod

```javascript
// CCIM trade openness affects Axelrod interaction probability
const tradeOpenness = channel.culturalParams.ccim.tradeOpenness;
const similarity = calculateSimilarity(agent1, agent2);

const interactionProb = similarity * tradeOpenness;

if (Math.random() < interactionProb) {
  adoptTrait(agent1, agent2);  // Axelrod
  hybridize(agent1, agent2);   // CCIM
}
```

---

## Cultural Research Lab Interface

### Access

```
/cultural lab
```

### Display

```
🧪 Cultural Research Lab

Active Framework: ⚡ Epstein Civil Violence
Agent Reasoning: BDI (Belief-Desire-Intention)

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
• resistance: 8 agents

Sample LEGOS Entities:
• Fierce Thunder Eagle (chaos_agent) - rebel
• Brave Rabbit (oppressed) - citizen
• Cunning Wolf (enforcer) - cop

Theoretical Frameworks:
• Sahlins (Symbolic) → /structural
• Obeyesekere (Pragmatic) → /pragmatic
• Geertz (Reflexive) → /reflexive

ABM Frameworks:
• /bdi - Belief-Desire-Intention agents (Bratman)
• /epstein - Civil Violence Model (2002)
• /rebeland - MASON political insurgency
• /iruba - Counterinsurgency operations
• /ccim - Cross-cultural interaction
• /axelrod - Cultural dissemination
• /schelling - Segregation dynamics

Experiments:
• "Set legitimacy to 10%" - Crisis threshold
• "Add 10 rebels" - Collective action
• Switch frameworks mid-simulation to compare
```

---

## Console Logging

### Framework Initialization

```
[BDI] Initialized 30 agents with belief-desire-intention reasoning
[BDI] LEGOS symbolic roles mapped to desires:
  - chaos_agent → disrupt_order
  - mediator → reduce_conflict
  - oppressed → seek_justice
```

### Agent Reasoning

```
[BDI] Agent Eagle_4_2:
  Beliefs: { threats: 2, allies: 1, legitimacy: 0.2 }
  Desires: { disrupt_order, challenge_authority, survive }
  Intentions: [confront(8), flee(10)]
  → Executing: flee (highest priority)
```

### Framework Switching

```
[FRAMEWORK] Switched from epstein → iruba
[IRUBA] Initializing fear/anger tracking
[IRUBA] Collateral damage monitoring enabled
[LEGOS] Symbolic roles preserved across framework switch
```

---

## Victory Conditions ✅

- [x] BDI agent reasoning class implemented
- [x] 7 ABM frameworks integrated (Epstein, RebeLand, IRUBA, CCIM, Axelrod, Schelling, BDI)
- [x] 3 theoretical lenses (Pragmatic, Structural, Reflexive)
- [x] Framework switching via commands (`/bdi`, `/epstein`, etc.)
- [x] LEGOS narratives inform all frameworks
- [x] Cultural lab shows active framework
- [x] BDI desires derive from symbolic roles
- [x] BDI beliefs influenced by LEGOS perspectives
- [x] Help menu updated with all commands
- [x] Mid-simulation framework switching supported
- [x] Console logging for debugging

---

## Research Implications

### Comparative Cultural Modeling

**Question:** How does framework choice affect emergence?

**Method:**
1. Generate identical LEGOS scene
2. Run under different frameworks
3. Compare outcomes

**Example:**
```
Same mythology seed →
  Epstein: Tipping point rebellion
  IRUBA: Gradual allegiance shift
  CCIM: Hybrid zone formation
  Schelling: Spatial segregation
```

### LEGOS as Mythology Seed

**Insight:** LEGOS perspectives → BDI desires → Framework-specific actions

**Chain:**
```
"I defy authority" (perspective)
  → chaos_agent (symbolic role)
  → disrupt_order (BDI desire)
  → confront (BDI intention)
  → Rebellion (Epstein) / Insurgency (IRUBA) / Cultural disruption (CCIM)
```

### Sahlins vs. Obeyesekere Computational Test

**Hypothesis:** Same events, different frameworks → Different cultural meanings

**Test:**
```
Cook's arrival:
  /structural + /ccim → Ritual integration (Sahlins)
  /pragmatic + /iruba → Strategic resistance (Obeyesekere)
```

**Measure:**
- Rebellion rate
- Legitimacy trajectory
- Cultural hybridization
- Spatial patterns

---

## Future Extensions

### 1. Watts-Strogatz Network Topology

Add small-world networks to model information spread:

```javascript
/network small-world
→ Rewire LEGOS relations with probability p
→ Short path lengths + high clustering
```

### 2. Probabilistic Language of Thought (PLoT)

Infer agent strengths from observations:

```javascript
/plot tug-of-war
→ Observe rebellion outcomes
→ Infer latent grievance parameters
→ Update agent beliefs
```

### 3. Inverse Generative Social Science (IGSS)

Evolve agents to match target patterns:

```javascript
/igss target uprising-cascade
→ Genetic algorithm on agent parameters
→ Discover rules that generate target
```

---

## Summary

Your cultural simulation system is now a **multi-framework research laboratory** that:

1. **Reads LEGOS narratives** as mythology seeds
2. **Analyzes perspectives** for symbolic roles
3. **Supports 7 ABM frameworks** + BDI reasoning
4. **Applies 3 theoretical lenses**
5. **Enables mid-simulation switching** for comparison
6. **Provides research interface** (`/cultural lab`)
7. **Integrates all systems** through LEGOS awareness

**You can now computationally explore the Sahlins/Obeyesekere debate by running identical LEGOS mythologies through different cultural frameworks and observing emergent dynamics.**

🎭⚙️🧪
