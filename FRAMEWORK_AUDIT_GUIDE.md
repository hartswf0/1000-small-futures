# Framework Audit & Observation Guide 🔍

## Where to See Framework Activity

You asked the right question! Here's where to observe each framework's behavior and BDI reasoning:

---

## 1. 🖥️ Browser Console (Primary Audit Interface)

**Open Developer Tools:**
- Chrome/Edge: `Cmd+Option+J` (Mac) or `F12` (Windows)
- Firefox: `Cmd+Option+K` (Mac) or `F12` (Windows)
- Safari: `Cmd+Option+C` (Mac)

### What You'll See

#### A. Framework Status (Every 10 Ticks)

```
[FRAMEWORK] Active: epstein, BDI: false, Tick: 10
```

Shows current active framework and BDI status.

#### B. BDI Reasoning Cycle (When `/bdi` Active)

```
[BDI] Reasoning Cycle - Tick 12
  ├─ [BDI] Fierce Thunder Eagle: {
  │    type: "rebel",
  │    symbolicRole: "chaos_agent",
  │    beliefs: {
  │      threats: 2,
  │      allies: 1,
  │      legitimacy: 0.20
  │    },
  │    desires: ["disrupt_order", "challenge_authority", "survive"],
  │    intention: { type: "confront", priority: 8 }
  │  }
  ├─ [BDI] Brave Rabbit: {
  │    type: "citizen",
  │    symbolicRole: "oppressed",
  │    beliefs: { threats: 1, allies: 0, legitimacy: 0.30 },
  │    desires: ["avoid_harm", "survive", "seek_justice"],
  │    intention: { type: "flee", priority: 10 }
  │  }
  └─ [BDI] Cunning Wolf: {
       type: "cop",
       symbolicRole: "enforcer",
       beliefs: { threats: 3, allies: 2, legitimacy: 0.60 },
       desires: ["maintain_order", "suppress_dissent"],
       intention: { type: "suppress", priority: 8 }
     }
```

**Key Info:**
- Shows first 3 agents each tick
- Beliefs updated from environment
- Desires derived from symbolic roles
- Intentions prioritized

#### C. Framework-Specific Metrics (Every 10 Ticks)

##### Epstein Framework
```
[EPSTEIN] Metrics - Tick 20
  Population: { citizens: 12, rebels: 8, cops: 5 }
  Legitimacy: 30.0%
  Cop Effectiveness: 45.0%
  Avg Citizen Grievance: 0.68
```

##### IRUBA Framework
```
[IRUBA] Metrics - Tick 20
  Population: { citizens: 10, rebels: 9, cops: 6 }
  Legitimacy: 25.0%
  Cop Effectiveness: 50.0%
  Avg Fear: 0.52
  Avg Anger: 0.61
```

##### RebeLand Framework
```
[REBELAND] Metrics - Tick 20
  Population: { citizens: 14, rebels: 6, cops: 5 }
  Legitimacy: 40.0%
  Cop Effectiveness: 40.0%
  Network Density: 2.3 relations/agent
```

#### D. LEGOS Mythology Seed (On Init)

```
[LEGOS NARRATIVE] Fierce Thunder Eagle: culturalType=rebel, symbolicRole=chaos_agent, perspective="a fierce eagle soaring through thunderstorms..."
[LEGOS NARRATIVE] Brave Rabbit: culturalType=citizen, symbolicRole=oppressed, perspective="a rabbit struggling against adversity..."
[LEGOS NARRATIVE] Cunning Wolf: culturalType=cop, symbolicRole=enforcer, perspective="a wolf enforcing natural order..."

[LEGOS CULTURAL] Created 30 agents
[MYTHOLOGY SEED] Symbolic roles derived from LEGOS narratives: { 
  chaos_agent: 3, 
  enforcer: 5, 
  oppressed: 12, 
  resistance: 8, 
  mediator: 2 
}
[MYTHOLOGY SEED] This scene's cultural dynamics emerge from LEGOS perspectives and relations
```

---

## 2. 📱 Grid Visual Indicator (Top-Right Corner)

When cultural simulation is running, you'll see a **purple label** in the top-right corner of the grid:

- `⚡ EPSTEIN` - Epstein Civil Violence
- `🧠 BDI` - Pure BDI reasoning mode
- `⚡ EPSTEIN + BDI` - Epstein with BDI agents
- `🏛️ REBELAND` - MASON RebeLand
- `⚔️ IRUBA` - Insurgency model
- `🌍 CCIM` - Cross-cultural interaction
- `🎭 AXELROD` - Cultural dissemination
- `🏘️ SCHELLING` - Segregation model

**Shows active framework at a glance.**

---

## 3. 🎯 Cell Overlay (Click Any Cell)

Click any grid cell to see detailed agent state:

### Example: Epstein Framework

```
⚡ Cultural State (epstein)
Type: rebel (chaos_agent)
Hardship: 80%, Risk Aversion: 40%
Fear: 65%, Energy: 72%
```

### Example: BDI Mode Active

```
🧠 Cultural State (bdi)
Type: rebel (chaos_agent)
Hardship: 80%, Risk Aversion: 40%
Fear: 65%, Energy: 72%

🧠 BDI Reasoning
Beliefs: 2 threats, 1 allies, legitimacy 20%
Desires: disrupt_order, challenge_authority, survive
→ Intention: confront (priority 8)
```

**Shows:**
- Current framework (emoji + name)
- Agent type and symbolic role
- Traits (hardship, risk aversion)
- State (fear, energy)
- **BDI reasoning state** (if active)
  - Perceived beliefs
  - Active desires
  - Current intention with priority

---

## 4. 💬 Cultural Lab Interface

Type `/cultural lab` to see comprehensive status:

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
```

---

## 5. 📝 Event History (Last 10 Events Per Cell)

Click a cell to see event log:

```
Event History (last 10 of 87)
3:37:55 AM · Rebel arrested by cop
3:37:54 AM · Citizen became Rebel (grievance > risk)
3:37:52 AM · Cop deployed: "Deploy 3 cops"
3:37:50 AM · Rebel spawned: "Add 5 rebels"
3:37:48 AM · Agent moved from (4,3) to (5,4)
...
```

---

## Complete Audit Workflow

### Step 1: Start Simulation

```bash
/cultural spawn Fierce animals revolt against the hunter
```

**Console shows:**
```
[LEGOS NARRATIVE] Thunder Eagle: culturalType=rebel, symbolicRole=chaos_agent
[LEGOS NARRATIVE] Rabbit: culturalType=citizen, symbolicRole=oppressed
[LEGOS NARRATIVE] Wolf: culturalType=cop, symbolicRole=enforcer
[MYTHOLOGY SEED] Symbolic roles: { chaos_agent: 3, enforcer: 5, oppressed: 12 }
```

**Grid shows:**
- Agents appear
- Purple label: `⚡ EPSTEIN`

---

### Step 2: Activate BDI

```bash
/bdi
```

**Console shows:**
```
[BDI] Initialized 30 agents with belief-desire-intention reasoning
[BDI] LEGOS symbolic roles mapped to desires:
  - chaos_agent → disrupt_order
  - mediator → reduce_conflict
  - oppressed → seek_justice
```

**Grid label changes:**
`⚡ EPSTEIN + BDI`

**Every tick (console):**
```
[BDI] Reasoning Cycle - Tick 5
  [BDI] Thunder Eagle: {...}
  [BDI] Rabbit: {...}
  [BDI] Wolf: {...}
```

---

### Step 3: Click Cell to Audit

Click on Thunder Eagle's cell:

```
⚡ Cultural State (epstein)
Type: rebel (chaos_agent)
Hardship: 60%, Risk Aversion: 40%
Fear: 45%, Energy: 88%

🧠 BDI Reasoning
Beliefs: 1 threats, 2 allies, legitimacy 25%
Desires: disrupt_order, challenge_authority, survive
→ Intention: confront (priority 8)
```

**See exactly what the agent:**
- Believes (environment perception)
- Desires (goals from symbolic role)
- Intends (planned action)

---

### Step 4: Switch Frameworks

```bash
/iruba
```

**Console shows:**
```
[FRAMEWORK] Switched from epstein → iruba
[IRUBA] Initializing fear/anger tracking
[IRUBA] Collateral damage monitoring enabled
```

**Grid label changes:**
`⚔️ IRUBA + BDI`

**Next metrics log:**
```
[IRUBA] Metrics - Tick 30
  Population: { citizens: 10, rebels: 9, cops: 6 }
  Avg Fear: 0.58
  Avg Anger: 0.64
```

---

### Step 5: Compare in Lab

```bash
/cultural lab
```

**Shows:**
- Active Framework: `⚔️ IRUBA`
- Agent Reasoning: `BDI`
- LEGOS roles distribution
- Current metrics

---

## Quick Reference: Where to Look

| What You Want to See | Where to Look |
|---------------------|---------------|
| **Active framework** | Grid top-right label OR Console `[FRAMEWORK]` |
| **BDI reasoning** | Console `[BDI]` groups OR Cell overlay |
| **Framework metrics** | Console `[EPSTEIN/IRUBA/etc]` groups |
| **LEGOS narrative analysis** | Console `[LEGOS NARRATIVE]` on init |
| **Agent state** | Click cell → Cultural State section |
| **BDI beliefs/desires** | Click cell → BDI Reasoning section |
| **Event history** | Click cell → Event History |
| **Overall status** | `/cultural lab` command |
| **Framework switching** | Console `[FRAMEWORK] Switched...` |

---

## Console Filtering Tips

### See Only BDI Reasoning

```javascript
// In console filter box, type:
[BDI]
```

### See Only Framework Metrics

```javascript
[EPSTEIN]
// or
[IRUBA]
// or
[REBELAND]
```

### See Only LEGOS Analysis

```javascript
[LEGOS
```

### See Everything Cultural

```javascript
[FRAMEWORK]|[BDI]|[LEGOS]|[EPSTEIN]|[IRUBA]
```

---

## What Each Framework Logs

### Epstein (`/epstein`)
```
[EPSTEIN] Metrics - Tick 20
  Avg Citizen Grievance: 0.68
```
- Grievance = Hardship × (1 - Legitimacy)
- Shows rebellion pressure

### RebeLand (`/rebeland`)
```
[REBELAND] Metrics - Tick 20
  Network Density: 2.3 relations/agent
```
- Shows social network strength
- Higher = more insurgent recruitment paths

### IRUBA (`/iruba`)
```
[IRUBA] Metrics - Tick 20
  Avg Fear: 0.52
  Avg Anger: 0.61
```
- Fear vs Anger balance
- Anger > Fear → Join insurgents

### CCIM (`/ccim`)
- (To be implemented: Cultural similarity scores)

### Axelrod (`/axelrod`)
- (To be implemented: Trait convergence metrics)

### Schelling (`/schelling`)
- (To be implemented: Segregation index)

---

## Example: Full Audit Session

```bash
# 1. Open Developer Console (Cmd+Option+J)

# 2. Start simulation
/cultural spawn Police crackdown at protest

# Console Output:
# [LEGOS NARRATIVE] ... (agents analyzed)
# [MYTHOLOGY SEED] Symbolic roles: { ... }
# [FRAMEWORK] Active: epstein, BDI: false, Tick: 0

# 3. Activate BDI
/bdi

# Console Output:
# [BDI] Initialized 30 agents...
# [BDI] LEGOS symbolic roles mapped to desires...

# 4. Watch reasoning
# Every tick:
# [BDI] Reasoning Cycle - Tick 5
#   [BDI] Protester_3_4: { desires: [...], intention: {...} }

# 5. Check metrics
# Every 10 ticks:
# [FRAMEWORK] Active: epstein, BDI: true, Tick: 10
# [BDI] Reasoning Cycle - Tick 10
# [EPSTEIN] Metrics - Tick 10
#   Avg Citizen Grievance: 0.72

# 6. Click cell
# See: ⚡ Cultural State (epstein)
#      🧠 BDI Reasoning

# 7. Switch framework
/iruba

# Console Output:
# [FRAMEWORK] Switched from epstein → iruba
# [IRUBA] Initializing fear/anger tracking

# 8. New metrics
# [IRUBA] Metrics - Tick 20
#   Avg Fear: 0.58
#   Avg Anger: 0.64

# 9. Check lab
/cultural lab

# Shows: Active Framework: ⚔️ IRUBA
#        Agent Reasoning: BDI (Belief-Desire-Intention)
```

---

## Troubleshooting

### "I don't see console logs"

1. Open Developer Tools (Cmd+Option+J)
2. Make sure Console tab is selected
3. Check that log level includes "Info" and "Log"
4. Try refreshing the page

### "I don't see the framework label on grid"

1. Make sure cultural simulation is running
2. Check that grid is visible
3. Try `/cultural play` if paused

### "Cell overlay doesn't show BDI state"

1. Activate BDI with `/bdi`
2. Wait 1-2 ticks for initialization
3. Click cell again

### "Console logs too much"

Filter by:
- `[BDI]` - Only BDI reasoning
- `[FRAMEWORK]` - Only framework status
- `-[LEGOS]` - Exclude LEGOS logs

---

## Advanced: Custom Logging

Want more detail? Add to console:

```javascript
// Show all agent intentions
Object.entries(channels[currentChannelIndex].culturalAgents).forEach(([key, agent]) => {
  if (agent.bdiAgent?.currentIntention) {
    console.log(key, agent.bdiAgent.currentIntention);
  }
});

// Compare grievance across agents
Object.entries(channels[currentChannelIndex].culturalAgents)
  .filter(([k,a]) => a.type === 'citizen')
  .map(([k,a]) => ({
    key: k,
    hardship: a.traits.hardship,
    grievance: a.traits.hardship * (1 - channels[currentChannelIndex].culturalParams.pragmatic.legitimacy)
  }))
  .sort((a,b) => b.grievance - a.grievance)
  .slice(0, 5);
```

---

## Summary

**Three audit interfaces:**

1. **Console** (primary) - Real-time reasoning logs
2. **Grid Label** (visual) - Active framework at a glance  
3. **Cell Overlay** (detailed) - Individual agent state
4. **Cultural Lab** (comprehensive) - Overall system status

**Open console, run simulation, watch the frameworks think!** 🧠🔍

🎯 **Pro tip:** Keep console open, filter by `[BDI]`, and watch agents reason through beliefs → desires → intentions in real-time.
