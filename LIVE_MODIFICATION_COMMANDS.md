# Live Modification Commands 🎛️⚡

## Chat Commands During Active Simulation

You can now **modify the running simulation** via chat commands while it's playing!

## Commands

### 📊 Adjust Legitimacy
```
/cultural legitimacy 0.3
```

**Effect:** Sets government legitimacy (0-1)
- **Low (0-0.3)**: High rebellion probability
- **Medium (0.4-0.7)**: Moderate stability
- **High (0.8-1.0)**: Strong government, low rebellion

**Example:**
```
User: /cultural legitimacy 0.2
System: 📊 Legitimacy set to 20%

→ Next tick: More citizens become rebels (low legitimacy threshold)
```

### 🔥 Spawn Rebels
```
/cultural spawn-rebels 5
```

**Effect:** Adds N rebel agents to empty cells
- Creates full LEGOS entities
- High hardship (0.9), low risk aversion (0.2)
- Immediately joins movement behavior

**Example:**
```
User: /cultural spawn-rebels 3
System: 🔥 Spawned 3 rebels. Uprising intensifies!

→ Grid shows 3 new ▲ symbols
→ They immediately move toward other rebels
→ Cell logs show "Rebel spawned via command"
```

### 👮 Deploy Cops
```
/cultural spawn-cops 3
```

**Effect:** Adds N cop agents to empty cells
- Creates full LEGOS entities
- High utility (0.9), low hardship (0.1)
- Immediately starts pursuing rebels

**Example:**
```
User: /cultural spawn-cops 2
System: 👮 Deployed 2 cops. Crackdown imminent!

→ Grid shows 2 new ◆ symbols
→ They immediately move toward nearest rebels
→ Cell logs show "Cop reinforcement deployed"
```

### 🚨 Initiate Crackdown
```
/cultural crackdown
```

**Effect:** 
- Cop effectiveness +50%
- Legitimacy -30%
- Arrests become more likely
- Fear spreads faster

**Example:**
```
User: /cultural crackdown
System: 🚨 CRACKDOWN INITIATED!
        Cop effectiveness increased 50%. Legitimacy reduced 30%. Fear spreads...

→ Cops arrest adjacent rebels more frequently
→ Citizens flee in fear (higher fear spread)
→ Legitimacy drops → more rebellion potential
```

### ⚡ Trigger Uprising
```
/cultural uprising
```

**Effect:**
- All citizen hardship +30%
- Legitimacy halved
- Mass radicalization likely

**Example:**
```
User: /cultural uprising
System: ⚡ UPRISING WAVE!
        Citizen hardship +30%. Legitimacy halved. Revolution stirs...

→ Next tick: Many citizens become rebels
→ Existing rebels become bolder (lower fear)
→ Movement intensifies
```

## Interactive Scenarios

### Scenario 1: Escalation Spiral
```
User: /cultural spawn Police crackdown at protest

(Simulation starts, 10 rebels, 5 cops)

User: /cultural spawn-rebels 5
System: 🔥 Spawned 5 rebels. Uprising intensifies!

(Rebels cluster, cops pursue)

User: /cultural crackdown
System: 🚨 CRACKDOWN INITIATED!

(Cops arrest 3 rebels, fear spreads)

User: /cultural uprising
System: ⚡ UPRISING WAVE!

(6 citizens become rebels, cycle continues)
```

### Scenario 2: De-escalation
```
User: /cultural spawn Riot in the streets

(High tension, many rebels)

User: /cultural legitimacy 0.9
System: 📊 Legitimacy set to 90%

(Rebellion threshold rises, some rebels surrender)

User: /cultural spawn-cops 2
System: 👮 Deployed 2 cops. Crackdown imminent!

(Arrests + high legitimacy = stability restored)
```

### Scenario 3: Revolution
```
User: /cultural spawn Colonial occupation

(Scene generated with authority figures)

User: /cultural legitimacy 0.1
System: 📊 Legitimacy set to 10%

User: /cultural uprising
System: ⚡ UPRISING WAVE!

(Mass rebellion)

User: /cultural spawn-rebels 10
System: 🔥 Spawned 10 rebels. Uprising intensifies!

(Rebels outnumber cops, occupy grid)
```

## Command Flow

### Single Command Impact
```
Before: ○ ○ ◆ ○ ○    (5 citizens, 1 cop, legitimacy 0.5)

User: /cultural spawn-rebels 3

After:  ○ ▲ ◆ ▲ ▲    (2 citizens, 3 rebels, 1 cop)
        
Next tick:
        . ▲ ◆ ▲ ▲    (citizen flees, rebels cluster)
```

### Chained Commands
```
Tick 0: /cultural spawn-rebels 3
        → 3 rebels added

Tick 2: /cultural crackdown
        → Cop effectiveness boosted
        → 1 rebel arrested

Tick 4: /cultural uprising  
        → Hardship increased
        → 2 citizens become rebels

Tick 6: /cultural spawn-cops 2
        → 2 cops deployed
        → Pursuing new rebels
```

## Parameter Effects

### Legitimacy Scale
```
0.0-0.2  Tyranny       → Rebellion rate ~60%
0.3-0.4  Authoritarian → Rebellion rate ~40%
0.5-0.6  Unstable      → Rebellion rate ~20%
0.7-0.8  Stable        → Rebellion rate ~10%
0.9-1.0  Legitimate    → Rebellion rate ~5%
```

### Crackdown Multipliers
```
Before: copEffectiveness = 0.4
After:  copEffectiveness = 0.6 (+50%)

Before: legitimacy = 0.5
After:  legitimacy = 0.35 (-30%)
```

### Uprising Effects
```
Before: citizen.hardship = 0.5
After:  citizen.hardship = 0.8 (+0.3)

Before: legitimacy = 0.6
After:  legitimacy = 0.3 (halved)
```

## Visual Feedback

All commands show immediate feedback:

```
/cultural legitimacy 0.7
→ 📊 Legitimacy set to 70%

/cultural spawn-rebels 3
→ 🔥 Spawned 3 rebels. Uprising intensifies!
→ Grid updates with ▲ symbols
→ Cell logs updated

/cultural crackdown
→ 🚨 CRACKDOWN INITIATED!
→ Cop effectiveness increased 50%. Legitimacy reduced 30%. Fear spreads...
→ Parameters updated, next tick shows effects
```

## Console Logging

```
[MOVEMENT] 8/12 agents moved this tick
User command: /cultural spawn-rebels 3
[LEGOS CULTURAL] Created 3 rebel entities
[MOVEMENT] 12/18 agents moved this tick  (3 new rebels joining movement)
```

## Cell Event History

Click any cell after commands:
```
Recent Events:
• Rebel spawned via command - 2s ago
• Agent moved here (joining rebels) - 3s ago
• Citizen became Rebel (grievance > risk) - 5s ago
```

## Combinations

### Maximum Chaos
```
/cultural legitimacy 0.1
/cultural uprising
/cultural spawn-rebels 10
→ Grid becomes rebel-dominated
```

### State Restoration
```
/cultural legitimacy 0.9
/cultural spawn-cops 5
/cultural crackdown
→ Order restored, rebellion suppressed
```

### Stalemate
```
/cultural spawn-rebels 3
/cultural spawn-cops 3
/cultural legitimacy 0.5
→ Balanced forces, ongoing conflict
```

## Use Cases

### 1. Research
Test different intervention points:
- When does crackdown backfire (reduce legitimacy too much)?
- What legitimacy level prevents rebellion cascades?
- How many cops needed to control N rebels?

### 2. Storytelling
Create narrative arcs:
- Start with peaceful scene
- Trigger uprising via command
- Show government crackdown
- Demonstrate escalation or de-escalation

### 3. Education
Demonstrate concepts:
- Legitimacy as rebellion threshold
- Spiral of radicalization
- Effects of state violence on legitimacy

### 4. Experimentation
Explore parameter space:
- Set legitimacy to extremes
- Flood grid with one agent type
- Alternate crackdown/uprising commands

## Victory Conditions

✅ Commands work during active simulation  
✅ No need to stop/restart  
✅ Immediate visual feedback  
✅ Parameter changes take effect next tick  
✅ New agents integrate into movement system  
✅ Cell logging tracks all modifications  
✅ Help updated with live commands  
✅ Error handling for invalid values  

**You can now conduct real-time cultural experiments via chat!**
