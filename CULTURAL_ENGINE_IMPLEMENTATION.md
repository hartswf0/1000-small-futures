# Cultural Dynamics Engine: Implementation Guide

## From Medical to Cultural: Architecture Translation

### Core Insight
**Medical simulations track physiological state changes over time.**  
**Cultural simulations track interpretive state changes over time.**

Both are **probabilistic state machines with feedback loops**, but differ in:
- **Causality:** Mechanistic vs Symbolic
- **Temporality:** Linear vs Cyclical
- **Observation:** External vs Participatory

---

## Phase 1: Architecture Port (Minimal Viable Product)

### Step 1: Copy and Adapt Structure

```bash
# Start with medical engine as template
cp thousand-medical.html thousand-cultural.html
```

### Step 2: Replace Core Terminology

| Medical Term | Cultural Term | Purpose |
|--------------|---------------|---------|
| `Patient` | `Cultural_System` | Subject of observation |
| `Vital_Signs` | `Layer_States` | Observable parameters |
| `Diagnosis` | `Interpretation` | Pattern recognition |
| `Treatment` | `Intervention` | System modification |
| `Complication` | `Symbolic_Crisis` | State instability |
| `Stabilization` | `Coherence_Restoration` | Equilibrium |

### Step 3: Three-Layer State Structure

```javascript
// Replace medical vital signs with three-layer states
const culturalState = {
  // LAYER 1: PRAGMATIC (Obeyesekere/Windows)
  pragmatic: {
    agents: Map<AgentId, AgentState>,
    goals: Array<Goal>,
    beliefs: Map<Proposition, Probability>, // P(belief|evidence)
    utilities: Map<Action, Float>,
    constraints: Set<Constraint>,
    actionHistory: Array<{action, outcome, timestamp}>
  },
  
  // LAYER 2: STRUCTURAL (Sahlins/MacOS)
  structural: {
    mythicSchema: Map<Symbol, {category, probability, associations}>,
    symbolicMappings: Map<Event, SymbolicCategory>,
    coherenceMetric: Float, // 0-1
    cosmologicalBalance: Float, // 0-1
    ritualStates: Map<RitualId, {active, efficacy, tension}>,
    anomalyThreshold: Float // When to trigger ritual inversion
  },
  
  // LAYER 3: REFLEXIVE (Geertz/Linux)
  reflexive: {
    observerModel: InterpretiveFrame,
    actorModel: InterpretiveFrame,
    contextFrame: String,
    interpretiveGap: Float, // Distance between frames
    mutualRecognition: Float, // 0-1
    metaCoherence: Float, // Cross-layer alignment
    epistemologicalStance: String
  },
  
  // META
  turn: 0,
  timestamp: Date.now(),
  criticalityLevel: Float // 0-1, composite risk metric
};
```

### Step 4: Update Functions (Bayesian Updates)

```javascript
// LAYER 1: Pragmatic Update
function updatePragmaticLayer(state, observation, action) {
  // Bayesian belief update: P(belief|observation, prior)
  const newBeliefs = bayesianUpdate(
    state.pragmatic.beliefs,
    observation,
    state.pragmatic.constraints
  );
  
  // Utility recalculation based on outcomes
  const newUtilities = recalculateUtilities(
    action,
    observation.outcome,
    state.pragmatic.goals
  );
  
  // Action history for learning
  state.pragmatic.actionHistory.push({
    action: action,
    outcome: observation.outcome,
    timestamp: Date.now()
  });
  
  return {
    ...state.pragmatic,
    beliefs: newBeliefs,
    utilities: newUtilities
  };
}

// LAYER 2: Structural Update
function updateStructuralLayer(state, empiricalEvent) {
  // Symbolic encoding: P(symbol|event, schema)
  const symbolicCategory = encodeEventSymbolically(
    empiricalEvent,
    state.structural.mythicSchema
  );
  
  // Coherence check: Does this fit the pattern?
  const mythicFit = calculateMythicCoherence(
    symbolicCategory,
    state.structural.cosmologicalBalance
  );
  
  // If coherence drops below threshold, trigger ritual response
  let ritualTriggered = false;
  if (mythicFit < state.structural.anomalyThreshold) {
    ritualTriggered = true;
    state.structural.ritualStates.set('inversion', {
      active: true,
      efficacy: 0.0,
      tension: 1.0 - mythicFit
    });
  }
  
  return {
    ...state.structural,
    symbolicMappings: state.structural.symbolicMappings.set(
      empiricalEvent.id,
      symbolicCategory
    ),
    coherenceMetric: mythicFit,
    ritualInversion: ritualTriggered
  };
}

// LAYER 3: Reflexive Update
function updateReflexiveLayer(state, interpretation) {
  // Recursive mutual inference: Both observer and actor update models
  const {newObserverModel, newActorModel} = mutualInference(
    state.reflexive.observerModel,
    state.reflexive.actorModel,
    interpretation,
    state.reflexive.contextFrame
  );
  
  // Calculate interpretive distance
  const gap = calculateInterpretiveGap(
    newObserverModel,
    newActorModel
  );
  
  // Meta-coherence: Do all three layers tell consistent story?
  const metaCoherence = calculateMetaCoherence(
    state.pragmatic,
    state.structural,
    {observerModel: newObserverModel, actorModel: newActorModel}
  );
  
  return {
    ...state.reflexive,
    observerModel: newObserverModel,
    actorModel: newActorModel,
    interpretiveGap: gap,
    metaCoherence: metaCoherence
  };
}

// MASTER UPDATE: All layers simultaneously
function updateCulturalSystem(state, userInput) {
  // Parse input as action/observation/interpretation
  const {action, observation, interpretation} = parseUserInput(userInput);
  
  // Update all three layers
  const newPragmatic = updatePragmaticLayer(state, observation, action);
  const newStructural = updateStructuralLayer(state, observation);
  const newReflexive = updateReflexiveLayer(state, interpretation);
  
  // Calculate cross-layer feedback
  const feedback = calculateCrossLayerFeedback(
    newPragmatic,
    newStructural,
    newReflexive
  );
  
  // Apply feedback (each layer influences others)
  return applyFeedback({
    pragmatic: newPragmatic,
    structural: newStructural,
    reflexive: newReflexive
  }, feedback);
}
```

---

## Phase 2: Visualization (Bret Victor Principles)

### Principle 1: Surface the Invisible

**Medical:** Shows vital signs as numbers  
**Cultural:** Shows probability distributions and interpretive distances

```javascript
// Visual components for three-layer display
const LayerVisualizations = {
  pragmatic: {
    type: 'utility_bars',
    shows: 'Goal progress, belief strengths, action utilities',
    update: 'real-time',
    interaction: 'click to see calculation details'
  },
  
  structural: {
    type: 'coherence_meter',
    shows: 'Symbolic fit, mythic resonance, ritual tension',
    update: 'event-triggered',
    interaction: 'hover to see symbolic mappings'
  },
  
  reflexive: {
    type: 'interpretive_gap_viz',
    shows: 'Distance between frames, mutual recognition',
    update: 'interpretation-triggered',
    interaction: 'toggle between observer/actor perspectives'
  }
};

// Example: Coherence Meter
function renderCoherenceMeter(structuralState) {
  const canvas = document.getElementById('coherence-canvas');
  const ctx = canvas.getContext('2d');
  
  // Draw circular meter
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;
  
  // Background circle
  ctx.strokeStyle = '#2f121a';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
  
  // Coherence arc
  const coherence = structuralState.coherenceMetric;
  const endAngle = (coherence * 2 * Math.PI) - (Math.PI / 2);
  
  ctx.strokeStyle = coherence > 0.7 ? '#7ab87a' : 
                    coherence > 0.4 ? '#f8d66a' : '#ff6d7a';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
  ctx.stroke();
  
  // Value text
  ctx.fillStyle = '#f6f2ef';
  ctx.font = 'bold 24px Courier New';
  ctx.textAlign = 'center';
  ctx.fillText(
    (coherence * 100).toFixed(0) + '%',
    centerX,
    centerY + 8
  );
  
  // Label
  ctx.font = '12px Courier New';
  ctx.fillText('SYMBOLIC COHERENCE', centerX, centerY + 60);
}
```

### Principle 2: Interactive Thinking

**Medical:** Changing medications shows immediate vital sign response  
**Cultural:** Adjusting layer weights shows different interpretive possibilities

```javascript
// Layer weight sliders (like hunger decay in Thousand Lives)
const layerWeights = {
  pragmatic: 0.33,  // How much weight to give pragmatic inference
  structural: 0.33, // How much weight to give structural constraints
  reflexive: 0.33   // How much weight to give reflexive interpretation
};

// When user adjusts sliders, recalculate everything
function onLayerWeightChange(layer, newWeight) {
  layerWeights[layer] = newWeight;
  
  // Renormalize so they sum to 1.0
  const total = Object.values(layerWeights).reduce((a,b) => a+b, 0);
  for (let key in layerWeights) {
    layerWeights[key] /= total;
  }
  
  // Recalculate cultural state with new weights
  const newState = recalculateWithWeights(
    getCurrentState(),
    layerWeights
  );
  
  // Show how interpretation changes
  renderInterpretationComparison(
    getCurrentState(),
    newState
  );
}

// Example UI
function renderLayerControls() {
  return `
    <div class="layer-controls">
      <div class="layer-slider">
        <label>PRAGMATIC WEIGHT</label>
        <input type="range" min="0" max="100" 
               value="${layerWeights.pragmatic * 100}"
               oninput="onLayerWeightChange('pragmatic', this.value/100)">
        <span>${(layerWeights.pragmatic * 100).toFixed(0)}%</span>
      </div>
      
      <div class="layer-slider">
        <label>STRUCTURAL WEIGHT</label>
        <input type="range" min="0" max="100"
               value="${layerWeights.structural * 100}"
               oninput="onLayerWeightChange('structural', this.value/100)">
        <span>${(layerWeights.structural * 100).toFixed(0)}%</span>
      </div>
      
      <div class="layer-slider">
        <label>REFLEXIVE WEIGHT</label>
        <input type="range" min="0" max="100"
               value="${layerWeights.reflexive * 100}"
               oninput="onLayerWeightChange('reflexive', this.value/100)">
        <span>${(layerWeights.reflexive * 100).toFixed(0)}%</span>
      </div>
    </div>
  `;
}
```

### Principle 3: Linked Perspectives

**Medical:** Timeline shows progression of single patient  
**Cultural:** Timeline shows how three layers evolve and interact

```javascript
// Three-layer timeline visualization
function renderTripleTimeline(history) {
  const svg = d3.select('#timeline-svg');
  const width = svg.node().clientWidth;
  const height = 200;
  
  // Three horizontal bands
  const bandHeight = height / 3;
  
  // PRAGMATIC band (top)
  svg.append('g')
     .attr('class', 'pragmatic-band')
     .attr('transform', `translate(0, 0)`);
  
  history.forEach((state, i) => {
    const x = (i / history.length) * width;
    const utility = state.pragmatic.utilities.get('current_action') || 0;
    
    svg.select('.pragmatic-band')
       .append('circle')
       .attr('cx', x)
       .attr('cy', bandHeight/2)
       .attr('r', 3)
       .attr('fill', '#4a90e2')
       .attr('opacity', utility);
  });
  
  // STRUCTURAL band (middle)
  // ... similar for structural coherence
  
  // REFLEXIVE band (bottom)
  // ... similar for interpretive gap
  
  // Show crisis points where layers diverge
  identifyCrisisPoints(history).forEach(crisis => {
    const x = (crisis.index / history.length) * width;
    
    svg.append('line')
       .attr('x1', x).attr('x2', x)
       .attr('y1', 0).attr('y2', height)
       .attr('stroke', '#ff3d4e')
       .attr('stroke-width', 2)
       .attr('stroke-dasharray', '4,4');
       
    svg.append('text')
       .attr('x', x)
       .attr('y', -5)
       .attr('text-anchor', 'middle')
       .attr('fill', '#ff3d4e')
       .attr('font-size', '10px')
       .text('CRISIS');
  });
}

// Identify crisis points: when layers become misaligned
function identifyCrisisPoints(history) {
  return history
    .map((state, index) => ({state, index}))
    .filter(({state}) => {
      // Crisis = low meta-coherence (layers tell different stories)
      return state.reflexive.metaCoherence < 0.3;
    });
}
```

---

## Phase 3: Scenario Implementation

### Captain Cook Scenario (Complete Example)

```javascript
const captainCookScenario = {
  id: 'captain_cook',
  name: 'Captain Cook in Hawaii (1779)',
  
  initialState: {
    pragmatic: {
      europeanGoals: ['provisions', 'repair', 'safety'],
      hawaiianGoals: ['cosmic_balance', 'mana', 'resources'],
      europeanBeliefs: new Map([
        ['hawaiians_friendly', 0.7],
        ['safe_harbor', 0.8],
        ['trade_possible', 0.9]
      ]),
      hawaiianBeliefs: new Map([
        ['cook_is_lono', 0.85],
        ['cycle_completes', 0.9],
        ['resources_strained', 0.6]
      ]),
      constraints: ['ship_damaged', 'provisions_low', 'season_timing']
    },
    
    structural: {
      mythicSchema: new Map([
        ['lono_symbol', {category: 'god', probability: 0.85, associations: ['white_sails', 'clockwise']}],
        ['makahiki', {category: 'sacred_season', probability: 0.9, associations: ['peace', 'fertility']}]
      ]),
      coherenceMetric: 0.7,
      cosmologicalBalance: 0.7,
      anomalyThreshold: 0.3
    },
    
    reflexive: {
      observerModel: {
        frame: 'ethnographic',
        assumptions: ['cultural_relativism', 'symbolic_systems', 'historical_context'],
        biases: ['hindsight', 'tragic_narrative']
      },
      actorModel: {
        europeanFrame: 'exploration_diplomacy',
        hawaiianFrame: 'divine_visitation'
      },
      contextFrame: 'first_contact',
      interpretiveGap: 0.6,
      mutualRecognition: 0.4
    }
  },
  
  // Event sequence
  events: [
    {
      id: 'arrival',
      description: 'Ships arrive during Makahiki season',
      pragmaticEffect: state => {
        state.hawaiianBeliefs.set('cook_is_lono', 0.85);
        return state;
      },
      structuralEffect: state => {
        state.coherenceMetric = 0.9;
        return state;
      },
      reflexiveEffect: state => {
        state.interpretiveGap = 0.5;
        return state;
      }
    },
    
    {
      id: 'departure',
      description: 'Ships depart as Makahiki ends',
      pragmaticEffect: state => {
        state.europeanBeliefs.set('successful_visit', 0.9);
        state.hawaiianBeliefs.set('cycle_complete', 0.95);
        return state;
      },
      structuralEffect: state => {
        state.coherenceMetric = 0.95;
        state.cosmologicalBalance = 0.9;
        return state;
      },
      reflexiveEffect: state => {
        state.mutualRecognition = 0.6;
        return state;
      }
    },
    
    {
      id: 'return_crisis',
      description: 'Mast breaks, Cook returns in wrong season',
      pragmaticEffect: state => {
        state.europeanBeliefs.set('need_repairs', 1.0);
        state.hawaiianBeliefs.set('cook_is_lono', 0.15); // Dramatic drop
        state.hawaiianBeliefs.set('cosmological_threat', 0.9);
        return state;
      },
      structuralEffect: state => {
        state.coherenceMetric = 0.2; // SYMBOLIC CRISIS
        state.cosmologicalBalance = 0.1;
        // Trigger ritual inversion
        state.ritualStates.set('crisis_response', {
          active: true,
          tension: 0.95
        });
        return state;
      },
      reflexiveEffect: state => {
        state.interpretiveGap = 0.9; // Mutual incomprehension
        state.mutualRecognition = 0.1;
        state.metaCoherence = 0.15; // All layers misaligned
        return state;
      }
    }
  ],
  
  // AI system instruction
  systemInstruction: `
You are simulating the Captain Cook encounter as a THREE-LAYER system.

PRAGMATIC LAYER: Europeans need repairs and provisions. Hawaiians manage resources and chiefly power. Both groups make rational decisions given their goals and beliefs.

STRUCTURAL LAYER: Makahiki season creates symbolic mapping Cook→Lono. Cosmological patterns constrain interpretations. Return in wrong season = symbolic incoherence.

REFLEXIVE LAYER: Europeans interpret through "exploration/diplomacy" frame. Hawaiians through "divine visitation" frame. Large interpretive gap but initially manageable. Return crisis collapses mutual understanding.

Show probabilities. Update all layers. Explain how violence emerges from intersection of pragmatic frustration + symbolic crisis + interpretive collapse.

Teach: Culture is oscillation between structure and practice, mediated by interpretation.
  `
};
```

---

## Phase 4: Testing & Validation

### Test 1: Layer Independence
**Question:** Can each layer operate independently?  
**Test:** Disable structural layer. Does pragmatic layer still update rationally?  
**Expected:** Yes. Pragmatic decisions should still follow utility maximization.

### Test 2: Layer Interaction
**Question:** Do layers influence each other correctly?  
**Test:** Introduce symbolic crisis. Does it affect pragmatic beliefs?  
**Expected:** Yes. Low symbolic coherence should increase uncertainty in pragmatic layer.

### Test 3: Interpretive Multiplicity
**Question:** Can system represent multiple valid interpretations?  
**Test:** Show same event through different reflexive frames.  
**Expected:** Different frames generate different "truths", none simply "wrong".

### Test 4: Crisis Emergence
**Question:** Does violence/crisis emerge organically from layer misalignment?  
**Test:** Run Cook scenario. Track when metaCoherence drops below threshold.  
**Expected:** Crisis point correlates with return in wrong season.

### Test 5: Pedagogical Value
**Question:** Does simulation teach anthropological theory?  
**Test:** User runs scenario, then explains Obeyesekere-Sahlins debate.  
**Expected:** User can articulate how pragmatic vs structural layers generate different interpretations.

---

## Phase 5: Advanced Features

### Feature 1: Time Travel
Let users "rewind" and try different interpretations.

```javascript
function rewindToTurn(turnNumber) {
  const historicalState = history[turnNumber];
  currentState = deepCopy(historicalState);
  
  // Create branch in timeline
  timeline.createBranch({
    fromTurn: turnNumber,
    label: 'Alternative Interpretation'
  });
  
  renderAll();
}
```

### Feature 2: Layer Weight Presets
Quick switches between theoretical perspectives.

```javascript
const presets = {
  obeyesekere: {pragmatic: 0.7, structural: 0.2, reflexive: 0.1},
  sahlins: {pragmatic: 0.1, structural: 0.7, reflexive: 0.2},
  geertz: {pragmatic: 0.2, structural: 0.2, reflexive: 0.6}
};

function applyPreset(name) {
  layerWeights = presets[name];
  recalculateWithWeights(getCurrentState(), layerWeights);
  renderAll();
}
```

### Feature 3: Comparative Mode
Run two scenarios side-by-side to see how same theory applies differently.

### Feature 4: Export Analysis
Generate written analysis of simulation run.

```javascript
function exportAnalysis() {
  const report = {
    scenario: currentScenario.name,
    turns: history.length,
    crisisPoints: identifyCrisisPoints(history),
    dominantLayer: calculateDominantLayer(history),
    interpretiveDrift: calculateInterpretiveDrift(history),
    coherenceTrajectory: history.map(s => s.structural.coherenceMetric),
    narrativeSummary: generateNarrative(history)
  };
  
  return formatAsMarkdown(report);
}
```

---

## Success Criteria

### Minimal Viable Product
- [ ] Three layers operational with distinct update rules
- [ ] Captain Cook scenario playable start to finish
- [ ] Basic visualization of all three layers
- [ ] User can input actions and see multi-layer response

### Full Implementation
- [ ] 4 complete scenarios (Cook, Cargo Cult, Jesuit-Huron, Pollution)
- [ ] Interactive layer weight adjustment
- [ ] Timeline visualization showing layer interactions
- [ ] Crisis points automatically identified
- [ ] Export functionality for analysis

### Theoretical Success
- [ ] Simulation generates insights not obvious from reading theory
- [ ] Users can explain Obeyesekere-Sahlins debate using simulation
- [ ] Model reveals when/how layers become misaligned
- [ ] Demonstrates how "same facts" → different meanings in different layers
- [ ] Shows interpretation as active process, not passive recording

---

## Next Steps

1. **Complete thousand-cultural.html** with basic three-layer structure
2. **Implement Captain Cook scenario** as proof of concept
3. **Build visualization components** for each layer
4. **Test with users** (anthropology students ideal)
5. **Refine based on feedback**
6. **Add remaining scenarios**
7. **Write documentation** explaining theoretical framework
8. **Publish** with academic paper on "Bayesian Ethnography"

The goal: Create an interactive medium for thinking about culture that reveals dynamics invisible in static text.
