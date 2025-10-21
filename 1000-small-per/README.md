# 1000 Lives Simulation Knowledge Base

**Logline:** Inspired by Ian Cheng's *Life After BOB*, this collaborative knowledge base encodes the series' canonical lore (with sources) to power emergent "1000 Lives"–style AI simulations.

## Overview

Life After BOB imagines a future world in which human minds are co-inhabited by AI entities. This repository extracts every canonical detail from the Life After BOB universe (characters, objects, events, and rules) into a structured knowledge base that can drive live simulations.

## File Structure

```
/kb/
├── entities.json          # Core entities: people, artifacts, concepts
├── morphisms.json         # Relationships between entities (triples)
├── olog.json             # Category theory ontology schema
├── world_room.csv        # Environment zones, objects, affordances
├── mechanics.json        # Agent behaviors and simulation rules
├── lore_glossary.json    # Term definitions with sources
├── ambiguities.md        # Unresolved questions & research leads
├── design_fill.md        # Non-canonical speculative extensions
└── README.md             # This file
```

## Files Generated

### 📄 entities.json
Structured records for every entity from the Life After BOB universe:
- **1000 Lives Demo** - Failed neural app that trapped Chalice
- **1000 Lives Turtle Host** - Tortoise hosting Z's subplot data
- **Chalice Wong** - Protagonist who refactored demo into 1000 Plots
- **Zoroaster (Z)** - ZIM founder, creator of failed demo
- **1000 Plots** - Ethical refactoring by Chalice (2084)
- **Thousand (Turtle)** - AI turtle agent in apartment simulation

Each entry includes LEGOS (Perspective, Belief, Desire, Intent) with canon tagging.

### 📄 morphisms.json
Typed relationships between entities:
- Z **created** 1000 Lives Demo
- Demo **hosted_on** Turtle Host
- Demo **trapped** Chalice Wong for 10 years
- Chalice **refactored** Demo into 1000 Plots
- Thousand **inhabits** Chalice's Apartment

10 canonical relationships documented with evidence.

### 📄 olog.json
Category theory structure:
- 16 entity types (Person, Artifact, Object, etc.)
- 14 functors (Agent → BeliefState → Motive → Action → PredictionError)
- 7 relation types
- Agent cognitive cycle: 7-stage loop

### 📊 world_room.csv
Environment database with 15 entries:
- Zones: Chalice's Apartment, ZIM Summit, Wavyverse
- Objects: Grapes (+0.8 valence), Spiky Urchin (-0.9), Wine Bottle (0.0)
- Hazards: Security Bug (-0.9), environmental disruptions
- Affordances: Sunlight cycles, Chalice appearances

### ⚙️ mechanics.json
Simulation rules and agent architecture:
- **7-step agent loop**: Perceive → Infer → Update → Select → Plan → Observe → Revise
- **5 core demons**: Eater, Flee, Explore, Sleep, Alert
- **Emotion system**: Valence (-1 to +1) × Arousal (0 to 1)
- **5 world rules**: No prescribed meanings, 20% belief retention, slow story, etc.
- **Aesthetic palette**: Red (drama), Glowing (feedback), Black/White (ambiguity)

### 📖 lore_glossary.json
15 key terms defined with canonical evidence:
- 1000 Lives Demo, 1000 Plots, Subplot, Life Logs, Prime Path
- Permadroned Years, Wavyverse, BOB, Congress of Demons
- Inference Engine, Affordance, Surprise, Worldwatching
- Minimal Viable Sentience, Worlding

### ❓ ambiguities.md
17 unresolved questions organized by category:
- **1000 Lives Demo**: Turtle fate, security bug mechanism, Chalice's subjective experience
- **Thousand Lives**: Angel demon dynamics, reincarnation selection, death frequency
- **World Model**: Unity implementation, Richard Evans integration, procedural body growth
- **Aesthetics**: Red lighting triggers, glowing effect implementation
- **Narrative**: Z's 2084 appearance, Chyna Horchow identity ontology

### 💭 design_fill.md
Non-canonical speculative extensions (clearly marked):
- Fan theories (Turtle Host = Thousand?)
- POV narratives (Chalice's Wavyverse prison, Thousand's thoughts)
- Gameplay designs (1000 Plots interactive mechanics)
- Demon expansions (Social, Creative, Metacognitive)
- Aesthetic evolution (5-act color progression)
- Technical pseudocode (Hybrid neural-symbolic architecture)
- Narrative possibilities (Z's post-ousting fate)

## Use Cases

### 1. Recreate the 1000 Lives Demo
All characters, events, and rules needed to rebuild the NYE 2074 catastrophe are encoded canonically.

### 2. Inverse-Inception & AI Worldbuilding
Feed structured lore into generative systems for new story continua faithful to Life After BOB universe.

### 3. Adaptive, Lore-Aware Agents
Drive AI characters with this KB so they behave consistently with world rules and reference canonical events.

### 4. Simulation Development
Use `world_room.csv` for environment staging, `mechanics.json` for agent loops, `entities.json` for character instantiation.

## Canonical Tagging

Every field explicitly tagged:
- **canon: true** = Direct quote and source from wiki as evidence
- **canon: false** = Inference or speculation with `inference_note` explaining reasoning

This transparency allows filtering pure canon facts from derived interpretations.

## Key Principles

From the world model specification:

1. **Objects as Affordance Bundles** - No prescribed meanings; agents learn through interaction
2. **Surprise as Epistemic Primitive** - Learning triggered by expectation violations
3. **Embodied Cognition** - Thinking through physical action, not abstract symbols
4. **Congressional Self** - Identity from competing subagents, not unified planner
5. **Belief as Trap and Tool** - Early beliefs enable prediction but constrain perception
6. **Minimal Viable Sentience** - "Capacity to be upset and then deal with it"
7. **Infinite Game Imperative** - World continues generating drama without creator

## Technical Stack

- **Unity** - Real-time 3D simulation engine
- **Richard Evans' Neuro-Symbolic AI** - Rule learning from sensory experience
- **Congress of Demons** - Competing motivational subagents
- **Inference Engine** - Belief formation with surprise-driven updates
- **Death/Reincarnation** - 80% belief retention across lifetimes

## Aesthetic System

**Red** - Dramatic lighting, emotional intensity, urgency  
**Glowing** - Feedback loops, importance markers, surprise signals  
**Black/White** - Neutral foundation, high contrast, ambiguity  

Colors surface moments of drama while maintaining open interpretation space.

## Sources

Primary canonical sources:
- [Life After BOB Wiki](https://lifeafterbob.wiki/view/Main_Page)
- [1000 Lives Demo Wiki Page](https://lifeafterbob.wiki/view/1000_Lives_Demo)
- [Pilar Corrias: Thousand Lives](https://www.pilarcorrias.com/exhibitions/350-ian-cheng-thousand-lives/)
- [Ian Cheng: BOB](https://iancheng.com/BOB)
- [Ian Cheng: Minimum Viable Sentience](https://iancheng.com/minimumviablesentience)
- Emissary's Guide to Worlding (2018)

## Contributing

Community collaboration encouraged:

1. **Unique IDs**: Assign unique `id` to each new record
2. **Canon Markup**: Clearly mark `canon: true` (with quote) or `canon: false` (with inference note)
3. **Pull Requests**: Fork repo, submit changes via PR with wiki references
4. **Maintain Schema**: Follow existing file formats and naming conventions

## Next Steps: Inverse Inception Build

Once `/kb/` is populated, feed into simulation engine:
- Room layout from `world_room.csv`
- Agent HUD & loop from `mechanics.json`
- Subplot seeds from `entities.json` & `morphisms.json`
- Lore browser from `lore_glossary.json`

## License

Knowledge base structure and format: MIT License  
Canonical content: © Ian Cheng, used for educational/research purposes  
Speculative content (design_fill.md): Creative Commons BY-SA 4.0

---

**The system metabolizes surprise: agents act, get upset by unexpected outcomes, and grow from those upsets.**

The minimal criterion for "sentience" in this model is exactly that capacity to experience surprise and update beliefs.
