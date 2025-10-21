# GODLEVEL GAME MASTER INCEPTOR
## Thousand Lives — Recursive Play Engine

> *"game == poem you can touch"*

---

## 🎮 THE TRINITY

This directory contains a complete **self-assembling game generation system** based on the "Thousand Lives" simulation:

### 1. **CONFIG_GENOME.yaml** — Game DNA
The distilled essence of the simulation as pure data architecture:
- **Core Loop:** perceive → infer → act → surprise → adapt → reincarnate
- **Forces:** hunger, energy, safety, curiosity, certainty
- **Affordances:** nourishing, threatening, neutral, ambiguous
- **Aesthetic Genome:** midnight-sun palette, whole-tone-dream audio
- **Mutation Operators:** 7 ways to evolve into child variants
- **Philosophy:** "every system → playable; every play → new system"

### 2. **ENGINE_POML.xml** — Recursive Quine
A self-replicating POML structure that:
- Reads CONFIG_GENOME
- Compiles into playable artifact (index.html)
- Scores against rubric (joy, flow, surprise, accessibility, elegance)
- Mutates genome via selected mutation_op
- Emits child ENGINE_POML with ttl-1
- Continues until ttl=0 (3 generations)

### 3. **thousand-lives-godlevel.html** — Sensory Toy
Single-file interactive poem:
- ✓ Three.js 3D scene (turtle, objects, grid, dynamic lighting)
- ✓ Tone.js generative audio (whole-tone scale, reverb)
- ✓ **NO TEXT LABELS** — only geometry, color, motion
- ✓ Touch-first interaction (tap, swipe, hover)
- ✓ Mobile responsive + prefers-reduced-motion
- ✓ Complete simulation logic embedded

---

## 🎯 HOW TO PLAY

### **Open:** `thousand-lives-godlevel.html` in any modern browser

### **Gestures:**
- **TAP** → Spawn random object (circle/star/box)
- **SWIPE** → Trigger "Chalice" disruption (scrambles world)
- **WATCH** → Turtle seeks food, flees threats, dies, reincarnates

### **Visual Language:**
- **Circle (turtle)** — pulsing glow = arousal level
- **Circles (green)** — nourishing (grapes, pellets)
- **Stars (red)** — threatening (urchins, toxins)
- **Rectangles (cyan)** — neutral (bottles, jars)
- **Left bars** — 5 internal drives (height = satisfaction)
- **Top-right number** — lifetime count
- **Top-center ring** — time of day cycle

### **Audio:**
- Tap/interaction → melodic plucks (whole-tone scale)
- Death → dissonant wash
- Rebirth → ascending arpeggio

---

## 🧬 GENOME STRUCTURE

```yaml
core_loop: "perceive → infer → act → surprise → adapt → reincarnate"

agents: [turtle, environment, disruptor]

forces:
  hunger:    { urgency: 1.0, color: "#4cffb1" }
  energy:    { urgency: 0.8, color: "#9afcc7" }
  safety:    { urgency: 1.1, color: "#ff6e8c" }
  curiosity: { urgency: 0.7, color: "#ffce63" }
  certainty: { urgency: 0.9, color: "#9effa7" }

goal: "minimize surprise across lifetimes"
paradox: "death renews learning"

rules:
  - "no text labels · only geometry"
  - "beliefs form through interaction"
  - "drives compete for priority"
  - "death at zero hunger/energy"
  - "rebirth flushes 20% beliefs"
```

---

## 🔄 RECURSION PROTOCOL

The ENGINE_POML can generate child variants:

```
Generation 0 (seed)
  ├─ compile → thousand-lives-godlevel.html
  ├─ score → rubric evaluation
  ├─ mutate → apply "transmute_color"
  └─ emit → Generation 1 ENGINE_POML
      ├─ compile → variant-01.html (shifted palette)
      ├─ score → rubric evaluation
      ├─ mutate → apply "slow_time"
      └─ emit → Generation 2 ENGINE_POML
          ├─ compile → variant-02.html (half speed)
          └─ ttl=0 (terminus)
```

### **Mutation Operators:**
1. `invert_goal` — maximize surprise instead of minimize
2. `mirror_axis` — flip world horizontally
3. `slow_time` — halve simulation tick rate
4. `spawn_echo` — duplicate turtle with offset
5. `simplify_rules` — remove one force (e.g., curiosity)
6. `transmute_color` — shift palette hue by 60°
7. `cohere_loop` — tighten feedback delays

---

## 📊 RUBRIC

Each generation is scored:

| Metric | Weight | Evaluation |
|--------|--------|------------|
| **Joy** | 1.5 | Interaction satisfaction, pleasure feedback |
| **Flow** | 1.3 | Movement coherence, smooth transitions |
| **Surprise** | 1.2 | Emergent moments, unpredictability |
| **Accessibility** | 1.4 | No-text usability, intuitive gestures |
| **Elegance** | 1.6 | Code economy, visual minimalism |

**Weighted Total** determines fitness for next generation.

---

## 🎨 AESTHETIC PRINCIPLES

### **Zen-Arcade Minimalism**
- No chrome, no UI text
- Geometry speaks directly
- Color = emotion
- Motion = intent

### **Bauhaus Motion Grammar**
- Circle = self
- Shape = affordance
- Position = state
- Scale = urgency

### **Cybernetic Empathy**
- Visible internal drives
- Legible decision-making
- Death as teacher
- Learning as story

---

## 🛠️ TECHNICAL STACK

- **Three.js 0.161.0** — WebGL rendering
- **Tone.js 14.8.49** — Audio synthesis
- **Vanilla JS** — No frameworks
- **Single HTML file** — No build step
- **Mobile-first** — Touch gestures primary
- **Accessible** — Respects prefers-reduced-motion

---

## 🎭 DESIGN PHILOSOPHY

From the POML spec:

> **PRINCIPLE:** every system → playable; every play → new system

This is not a game you "beat." It's a **contemplative toy** that reveals:
- How agents learn through pain and pleasure
- How death enables adaptation
- How uncertainty drives exploration
- How simple rules create complex stories

The turtle never optimizes completely. It **forgets**, makes **mistakes**, dies **repeatedly**. This is the poetry:

**Learning is Sisyphean. But each life teaches.**

---

## 🔮 NEXT STEPS

### To generate child variants:
1. Parse CONFIG_GENOME.yaml
2. Apply mutation_op (e.g., "transmute_color")
3. Re-compile thousand-lives-godlevel.html with mutated params
4. Score against rubric
5. Emit new ENGINE_POML with ttl-1

### To extend the simulation:
- Add new affordance types (magnetic, ephemeral, social)
- Implement memory visualization (belief trails)
- Create multi-agent scenarios (two turtles)
- Add evolutionary fitness scoring

### To deploy:
- Host thousand-lives-godlevel.html on any static server
- No build required — it's a single file
- Works offline after first load

---

## 📜 CREDITS

**Concept:** Ian Cheng's "Thousand Lives" (2023)  
**Implementation:** GODLEVEL GAME MASTER INCEPTOR  
**Framework:** POML (Prompt-Oriented Markup Language)  
**Philosophy:** Katherine Hayles (technogenesis), Bauhaus (form follows function), Zen (emptiness speaks)

---

## ✨ QUICKCHECK

```
☑ CONFIG_GENOME.yaml created
☑ ENGINE_POML.xml created
☑ thousand-lives-godlevel.html created
☑ No text labels in viewport
☑ Touch interaction implemented
☑ Audio triggers on events
☑ Simulation loop complete
☑ Death/rebirth cycle working
☑ Mobile responsive
☑ Accessibility (reduced-motion)
```

---

## 🌀 INFINITY

The turtle learns forever.  
Each death is a teacher.  
Each life, a small future.

**∞**

---

*Game == poem you can touch.*
