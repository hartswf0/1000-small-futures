# LEGOS Command Index
## Complete Reference Guide

---

## Natural Language (No Commands)

### Scene Creation
```
Type naturally to create scenes:

"A knight meets a dragon in a mountain cave"
"Add a mysterious wizard with a glowing staff"
"The sword begins to pulse with ancient power"
"A dark figure watches from the shadows"
```

### Story Progression
```
Continue naturally:

"The wizard reveals a prophecy"
"They journey through the enchanted forest"
"A betrayal changes everything"
"The final confrontation begins"
```

---

## Slash Commands

### Core Analysis

#### `/perspective`
Deep analysis of selected entity
```
Usage: Click entity, then type /perspective
Output: Detailed worldview, motivations, relations
```

#### `/tetrad`
McLuhan's four questions analysis
```
Usage: /tetrad
Output:
- What does it enhance?
- What does it make obsolete?
- What does it retrieve?
- What does it reverse into?
```

---

## Cultural Simulation Commands

### Setup & Control

#### `/cultural spawn [description]`
Generate scene AND activate dynamics
```
Examples:
/cultural spawn Police crackdown at protest
/cultural spawn Oppressed village under tyrant

Result: LEGOS entities + living simulation
```

#### `/cultural play`
Resume paused simulation
```
Usage: /cultural play
Result: Animation continues
```

#### `/cultural pause`
Pause simulation
```
Usage: /cultural pause
Result: Freezes at current state
```

#### `/cultural stop`
Stop and restore static grid
```
Usage: /cultural stop
Result: Returns to normal LEGOS
```

---

### Runtime Modifications

#### `/cultural legitimacy [0-1]`
Set government legitimacy
```
Examples:
/cultural legitimacy 0.3  → Low (30%)
/cultural legitimacy 0.8  → High (80%)

Effect: Changes rebellion threshold
```

#### `/cultural spawn-rebels [count]`
Add rebel agents
```
Example: /cultural spawn-rebels 5
Result: 5 new rebels appear on grid
```

#### `/cultural spawn-cops [count]`
Deploy cop agents
```
Example: /cultural spawn-cops 3
Result: 3 new cops patrol grid
```

#### `/cultural crackdown`
Violent suppression event
```
Usage: /cultural crackdown
Effects:
- Cop effectiveness increases 50%
- Legitimacy decreases 30%
- Fear spreads
```

#### `/cultural uprising`
Mass radicalization event
```
Usage: /cultural uprising
Effects:
- Legitimacy drops 50%
- Citizens radicalize
- Rebellion intensifies
```

---

### Theoretical Lenses

#### `/pragmatic`
Obeyesekere - Instrumental rationality
```
Usage: /pragmatic
Focus: Material calculation, practical needs
Model: Utility maximization
```

#### `/structural`
Sahlins - Symbolic cosmos
```
Usage: /structural
Focus: Mythic patterns, ritual meaning
Model: Cultural categories
```

#### `/reflexive`
Geertz - Interpretive entanglement
```
Usage: /reflexive
Focus: Mutual adjustment, thick description
Model: Hermeneutic circle
```

---

### ABM Frameworks

#### `/bdi`
Belief-Desire-Intention reasoning
```
Usage: /bdi

Agent Structure:
- Beliefs: World model
- Desires: Goals
- Intentions: Committed plans

Output: Agents reason before acting
Console: Shows BDI reasoning cycles
```

#### `/epstein`
Civil violence threshold model
```
Usage: /epstein

Model: Epstein 2002
Formula: G = H × (1 - L)
         R = ρ × C × k
         Active if G > R

Dynamics: Tipping point rebellion
```

#### `/rebeland`
MASON political insurgency
```
Usage: /rebeland

Model: Cioffi-Revilla 2009
Focus: Social networks, institutions
Features:
- Network recruitment
- Resource competition
- Geographic terrain
```

#### `/iruba`
Fear/anger counterinsurgency
```
Usage: /iruba

Model: Doran & Lees 2005
Psychology:
- Fear from cops
- Anger from collateral damage
- Allegiance = f(anger, fear)

Join insurgents if: Anger > Fear
```

#### `/ccim`
Cross-cultural interaction
```
Usage: /ccim

Model: Green 2018
Processes:
- Trade openness
- Assimilation pressure
- Conflict propensity
- Hybridization zones
```

#### `/axelrod`
Cultural dissemination
```
Usage: /axelrod

Model: Axelrod 1997
Mechanism:
- Similarity drives interaction
- Trait adoption
- Convergence + polarization
```

#### `/schelling`
Segregation dynamics
```
Usage: /schelling

Model: Schelling 1971
Insight: Mild preference → Extreme segregation
Process: Relocate if <X% similar neighbors
```

---

## Comparison Commands (Barad)

### Diffractive Methodology

#### `/compare snapshot`
Capture Configuration A (agential cut)
```
Usage: /compare snapshot

Saves:
- Framework state
- Population distribution
- Spatial patterns
- Parameters
- Tick count

Purpose: Baseline for comparison
```

#### `/compare analyze`
Reveal interference patterns
```
Usage: /compare analyze

Compares:
- Configuration A (snapshot)
- Configuration B (current)

Shows:
- Population divergence
- Spatial pattern shifts
- Parameter drift
- Symbolic role changes

Output: Diffractive insight
```

#### `/compare help`
Methodology guide
```
Usage: /compare help

Shows: Barad's agential realism explained
```

---

## Lab Interface

#### `/cultural lab`
Open research dashboard
```
Usage: /cultural lab

Displays:
- Active framework
- BDI status
- Current parameters
- Agent counts
- LEGOS role distribution
- Sample entities
- Framework catalog
- Experiment suggestions
```

#### `/cultural help`
Complete cultural engine guide
```
Usage: /cultural help

Shows: All cultural commands + examples
```

---

## Natural Language Shortcuts

### Common Phrases

#### Spawn Commands
```
"Add 5 rebels"           → /cultural spawn-rebels 5
"Deploy 3 cops"          → /cultural spawn-cops 3
"Set legitimacy to 30%"  → /cultural legitimacy 0.3
```

#### Control
```
"Pause"                  → /cultural pause
"Resume" / "Continue"    → /cultural play
"Stop"                   → /cultural stop
```

#### Events
```
"Crackdown"              → /cultural crackdown
"Uprising" / "Revolt"    → /cultural uprising
```

---

## Command Combinations

### Research Workflow
```
1. /cultural spawn Oppressive regime
2. /compare snapshot
3. /bdi
4. [Wait 20 ticks]
5. /compare analyze
6. /cultural lab

Result: Comparison of standard vs BDI reasoning
```

### Framework Comparison
```
1. /cultural spawn Police crackdown
2. /epstein
3. /compare snapshot
4. /iruba
5. [Wait 20 ticks]
6. /compare analyze

Result: Epstein vs IRUBA interference patterns
```

### Cultural Contact Study
```
1. /cultural spawn Cook arrives during Makahiki
2. /structural
3. /compare snapshot
4. /pragmatic
5. /ccim
6. /compare analyze

Result: Sahlins vs Obeyesekere computational test
```

---

## Keyboard Shortcuts

### Tutorial Navigation
```
next / n      → Next step
back / b      → Previous step
skip / exit   → End tutorial
```

### Chat
```
Enter         → Send message
Shift+Enter   → New line
```

---

## Button References

### Corner Buttons (Top-Left)
```
◎ → API Key management
? → Help menu
⇆ → Import/Export
＋ → Add channel
```

### Grid Actions
```
Click cell    → View entity details
Right-click   → Context menu (future)
```

---

## Console Commands

### Debug
```
Open console: Cmd+Option+J (Mac) or F12

Watch logs:
[FRAMEWORK] - Status updates
[BDI] - Agent reasoning
[EPSTEIN/IRUBA/etc] - Framework metrics
[LEGOS NARRATIVE] - Perspective analysis
[MYTHOLOGY SEED] - Role distribution
[DIFFRACTIVE ANALYSIS] - Comparison results
```

### Reset Tutorial
```
localStorage.removeItem('legos_tutorial_complete');
```

### Clear API Key
```
localStorage.removeItem('openai_api_key');
```

---

## Output Types

### Chat Messages
- **System** (green border) - Instructions, results
- **User** (highlighted) - Your inputs
- **Entity** (perspective) - Entity viewpoints

### Grid Symbols
- Letters: Tutorial steps (L, E, G, O, S, U)
- Emoji: Entity types (🗡,🐉,👑,⚔)
- ✦: Completion/special
- Colored cells: Entity presence

### Console Logs
- `[TUTORIAL]` - Tutorial system
- `[FRAMEWORK]` - Active framework
- `[BDI]` - Agent reasoning
- `[COMPARISON]` - Diffractive analysis
- `[LEGOS]` - Narrative processing

---

## Advanced Patterns

### Ethnographic ABM
```
1. Create scene from participant narrative
2. /cultural spawn [activate]
3. /bdi [add reasoning]
4. /rebeland [add networks]
5. /compare snapshot
6. Modify parameters
7. /compare analyze
8. Validate with participants
```

### Theoretical Testing
```
1. Same historical event
2. /structural [Sahlins view]
3. /compare snapshot
4. /pragmatic [Obeyesekere view]
5. /compare analyze
6. Examine divergence
```

### Parameter Sensitivity
```
1. Baseline: /cultural spawn
2. Snapshot
3. Modify: /cultural legitimacy 0.2
4. Wait 20 ticks
5. Analyze
6. Repeat with different parameters
```

---

## Error Messages

### Common Issues
```
"API key required"
→ Click ◎ button, add key

"Start simulation first"
→ Use /cultural spawn [scene]

"No snapshot found"
→ Use /compare snapshot first

"Invalid parameter"
→ Check value range (0-1)
```

---

## Quick Reference Card

```
┌─────────────────────────────────────────┐
│ ESSENTIAL COMMANDS                      │
├─────────────────────────────────────────┤
│ Create:  Natural language               │
│ Analyze: /perspective /tetrad           │
│ Simulate: /cultural spawn               │
│ Control: /cultural play/pause/stop      │
│ Compare: /compare snapshot/analyze      │
│ Learn:   /cultural help                 │
└─────────────────────────────────────────┘
```

---

## Command Categories Summary

### Creation (0 commands)
Use natural language

### Analysis (2 commands)
- `/perspective`
- `/tetrad`

### Cultural Simulation (10 commands)
- `/cultural spawn`
- `/cultural play/pause/stop`
- `/cultural legitimacy`
- `/cultural spawn-rebels/spawn-cops`
- `/cultural crackdown/uprising`
- `/cultural lab/help`

### Frameworks (10 commands)
- Lenses: `/pragmatic` `/structural` `/reflexive`
- ABM: `/bdi` `/epstein` `/rebeland` `/iruba` `/ccim` `/axelrod` `/schelling`

### Comparison (3 commands)
- `/compare snapshot`
- `/compare analyze`
- `/compare help`

**Total: 25 slash commands + natural language**

---

## Examples by Use Case

### Quick Story
```
1. "A detective investigates"
2. "Add suspicious butler"
3. "Reveal hidden clue"
```

### Research Study
```
1. /cultural spawn [ethnographic scene]
2. /bdi
3. /cultural lab
4. /compare snapshot
5. /iruba
6. /compare analyze
```

### Teaching Demo
```
1. /cultural spawn Simple conflict
2. /epstein
3. /cultural pause
4. /cultural legitimacy 0.2
5. /cultural play
6. Observe tipping point
```

---

*For full documentation, see:*
- *TUTORIAL_USER_MANUAL.txt - Visual guide*
- *TUTORIAL_ADVANCED.md - Extended features*
- *CULTURAL_ENGINE_FINAL_REPORT.md - Technical specs*
- *BARAD_DIFFRACTIVE_METHODOLOGY.md - Comparison theory*
