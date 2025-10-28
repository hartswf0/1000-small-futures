# LEGOS Scenario Generator Prompt

## Copy-Paste This Prompt to Generate Any Scenario

```
You are a LEGOS scenario architect. Generate a complete scenario object for the topic: [TOPIC]

LEGOS is a neurosymbolic narrative engine with:
- 9×9 grid (spatial structure for entities)
- Scene graphs (knowledge graphs with relations)
- Tetrad analysis (McLuhan's 4 laws: enhance/obsolesce/retrieve/reverse)
- Perspective switching (viewpoints from different entities)
- Ring buffer (temporal memory)

Your task: Create a complete scenario following this exact structure.

---

OUTPUT FORMAT (JavaScript object):

```javascript
your_scenario_id: {
  id: 'your_scenario_id',  // lowercase, underscores, descriptive
  name: 'Scenario Display Name',
  role: 'Who the user plays as',
  goal: 'What you are trying to accomplish',
  obstacle: 'What makes this difficult (include power dynamics 0.0-1.0 if relevant)',
  intro: 'One to two sentence description capturing core tension and mechanics.',
  context: [
    'Core Mechanic: How this scenario works spatially/temporally',
    'Key Stakeholders: Who the entities/agents are and their roles',
    'Power Dynamics: Relative power levels (X: 0.25 vs Y: 0.80) if applicable',
    'Historical/Theoretical Grounding: Reference real thinkers, movements, or events',
    'Strategic Dimensions: What kinds of decisions/actions are available',
    'Failure Modes: What happens when things go wrong',
    'Success Patterns: What good outcomes look like',
    'Recursive Pattern: How scenarios evolve and deepen over time'
  ],
  initialPrompt: 'Concrete opening scene with specific details, stakes, numbers, and a clear decision point. Make it vivid and immediate.',
  systemInstruction: 'You orchestrate [scenario name] following [key principles/framework]. Track grid as [spatial metaphor]: [what cells represent], [what positions mean], [what movement signifies]. Generate [key dynamics]: [force 1 with characteristics], [force 2 with characteristics], [metrics to track]. Map [strategic options]: [action 1 with effects], [action 2 with effects], [action 3 with effects]. Track [progression mechanics]. Reference [real theorists, historical examples, or movements]. Create recursive: [Trigger] → [Analysis] → [Decision] → [Outcome] → [New State] → [Escalation]. Connect to [related LEGOS scenarios if applicable]. Use Location ([spatial meaning]), Entity ([agents/objects]), Goal ([objectives]), Obstacle ([blocks]), Shift ([transformations]), Solution ([resolutions]). Generate [specific prompts/questions to drive scenario forward].'
}
```

---

REQUIREMENTS:

1. **ID**: lowercase_with_underscores, descriptive, unique
2. **Context**: 6-10 items covering mechanics, theory, dynamics, patterns
3. **initialPrompt**: Concrete scene with numbers, stakes, decision point
4. **systemInstruction**: Must include:
   - Opening: "You orchestrate [X] following [Y]"
   - Grid mapping: What cells/positions/movement represent
   - Dynamics: Forces, tensions, metrics to generate
   - Strategic options: Available actions with effects
   - Theoretical grounding: Real references (thinkers/movements/events)
   - Recursive pattern: How scenarios deepen
   - LEGOS elements: Location/Entity/Goal/Obstacle/Shift/Solution
   - Prompt guidance: What questions AI should generate

---

GUIDELINES:

**Spatial Metaphors** (what the grid represents):
- Medical: body regions, organs, symptoms, treatment zones
- Urban: city blocks, neighborhoods, infrastructure, zones
- Abstract: conceptual space, belief dimensions, value axes
- Game: tactical terrain, resource nodes, control points
- Social: network positions, power centers, relationship proximity
- Ecological: habitats, niches, resource flows, succession stages

**Power Dynamics** (when relevant):
- Use 0.0-1.0 scale for relative power
- Example: "Community: 0.30 vs Developer: 0.85"
- Track how power shifts based on actions

**Recursive Patterns** (how scenarios evolve):
- Simple: Action → Consequence → New Challenge
- Complex: Input → Analysis → Decision → Outcome → State Change → Escalation → Deeper Pattern
- Always show progression path

**Theoretical Grounding** (reference real sources):
- Thinkers: McLuhan, Barad, Spade, hooks, Foucault, etc.
- Movements: Mutual aid, organizing, resistance, etc.
- Events: Historical examples, case studies

**Connection to LEGOS**:
- Must map to: Location, Entity, Goal, Obstacle, Shift, Solution
- These are the 6 narrative elements on the grid

---

Now generate a complete scenario for: [TOPIC]

Output ONLY the JavaScript object, properly formatted and ready to paste into thousand-tetrad.html.
```

---

## Usage Instructions

1. **Copy the entire prompt above** (from "You are a LEGOS scenario architect" to "ready to paste into thousand-tetrad.html")

2. **Replace `[TOPIC]` with your scenario idea**. Be specific:
   - Include what role the user plays
   - What tensions/conflicts exist
   - What spatial/temporal structure makes sense
   - What theoretical grounding applies

3. **Paste into your LLM** (GPT-4, Claude, etc.) and run

4. **Copy the generated JavaScript object** and add it to `thousand-tetrad.html`:
   - Find the `scenarios` object (around line 1950-4300)
   - Paste your scenario into the appropriate category
   - Save and test

---

## Example Topics

### Climate Organizing
```
Climate organizing: community fights fossil fuel infrastructure (pipeline, refinery, or compressor station) using direct action, legal challenges, and public pressure while facing corporate power and state repression
```

### Neurodivergent Workplace
```
Neurodivergent employee navigating corporate workplace: sensory overload, masking exhaustion, accommodation requests, and disclosure decisions while balancing job security and authenticity
```

### Oral History Project
```
Community oral history project: interview elders, archive stories, navigate consent and cultural protocols, resist extractive research while building collective memory and intergenerational connection
```

### Food Sovereignty
```
Urban food sovereignty: community garden fights land grab, navigates city permits, builds seed library, resists monoculture while reclaiming ancestral food practices and collective land stewardship
```

---

## What Makes a Good Topic?

**✓ Good topics have:**
- **Tension**: Conflicting forces, power imbalances, difficult choices
- **Agency**: Meaningful decisions the user can make
- **Stakes**: Real consequences, things that matter
- **Depth**: Can evolve, deepen, branch over time
- **Spatial logic**: Can map to grid positions meaningfully
- **Theory**: Grounded in real thinkers, movements, or practices

**✗ Avoid topics that:**
- Are purely abstract with no concrete actions
- Have no tension or conflict
- Can't map to spatial/temporal structure
- Lack theoretical grounding or real-world connection
- Have only one "correct" answer

---

## Power Dynamics Scale

When including power imbalances, use 0.0-1.0 scale:

- **0.0-0.2**: Minimal power (precarious workers, marginalized communities)
- **0.3-0.5**: Moderate power (organized groups, mid-level employees)
- **0.6-0.8**: High power (management, institutions, local government)
- **0.9-1.0**: Dominant power (corporations, state, capital)

---

## See Also

- **[scenario-generator.html](scenario-generator.html)** — Interactive version with copy button
- **[SCENARIO_LIBRARY.md](SCENARIO_LIBRARY.md)** — Complete list of 57 existing scenarios
- **[thousand-tetrad.html](thousand-tetrad.html)** — The LEGOS engine itself
