# Medical Training Scenarios Guide

## Overview
`thousand-medical.html` is a medical simulation training engine based on the LEGOS multi-channel framework. It enables realistic, interactive medical training scenarios with time-sensitive decision-making and consequence-based learning.

## Current Scenarios

### 1. Upper GI Bleed (`gi_bleed`)
**Target:** Medical students, residents  
**Setting:** Emergency Department  
**Patient:** 54yo male with hematemesis  
**Source:** Harvard Medical School Gilbert Program

**Key Features:**
- Time-sensitive interventions (10-minute critical window)
- Dynamic vital signs based on treatment decisions
- Critical actions checklist tracking
- Realistic patient dialogue (lay terminology)
- Consultant simulation (GI, nursing staff)
- Lab values: Hgb 9, HCT 27%, BUN 40
- Multiple outcome pathways

**Critical Actions Tracked:**
- Telemetry monitoring
- Patient history & physical exam
- NPO status
- IV access & aggressive fluid resuscitation
- Lab workup (CBC, chemistries, coagulation, lactate)
- GI consult for endoscopy
- IV proton pump inhibitor administration

**Outcomes:**
- ✅ Fluids 1-2L in 10min → Stabilizes (HR 110, BP 145/90)
- ❌ No fluids by 10min → Shock (HR 150, BP 70/40)

### 2. Acute Migraine (`migraine`)
**Target:** Medical students, residents  
**Setting:** Emergency Department  
**Patient:** 29yo architect with severe headache  
**Source:** Harvard Medical School Gilbert Program

**Key Features:**
- Distinguishing migraine from stroke/SAH/meningitis
- Complete neurologic examination (normal findings)
- Red flag assessment
- Trigger identification (alcohol, smoking)
- Medication response demonstration
- Patient anxiety management

**Critical Actions Tracked:**
- Vital signs
- Detailed history (onset, triggers, family history)
- Complete neurologic exam (all normal - key teaching point)
- Analgesia administration

**Patient Presentation:**
- Throbbing left-sided headache behind eye (8/10)
- Photophobia, phonophobia, nausea
- Blurry vision left side, lip numbness
- Gradual onset over 5 hours
- Prior night: red wine, beer, cigarettes (unusual)
- Family history: mother has migraines
- Anxiety about stroke (father had one)

**Outcomes:**
- NSAID/triptan/antiemetic → Pain improves to 5/10 in 30min
- CT head if ordered: Normal (teaching point about imaging indications)
- Discharge with trigger education and abortive medication plan

### 3. Cocaine Intoxication (`cocaine_intox`)
**Target:** Medical students, residents  
**Setting:** Emergency Department  
**Patient:** 27yo struggling actor with chest pain post-cocaine use  
**Source:** Harvard Medical School Gilbert Program

**Key Features:**
- Sympathomimetic toxidrome recognition
- **CRITICAL TEACHING:** Beta-blocker contraindication
- Time-sensitive ECG/CXR (within 10 minutes)
- Agitated/aggressive patient management
- Substance use history taking

**Critical Actions Tracked:**
- Telemetry monitoring
- O2, IV access
- ECG and portable CXR (<10 minutes)
- Labs: CBC, chemistry, troponin, tox screen, coagulation
- Aspirin administration
- Nitroglycerin and/or morphine
- **BENZODIAZEPINE** (first-line for sympathomimetic toxidrome)
- Admit or transfer to observation unit

**Patient Presentation:**
- Substernal chest pain at dance club
- Onset within minutes of snorting cocaine
- Marked diaphoresis, anxiety, shortness of breath
- History: Previous cocaine-induced seizures, daily EtOH (~3/day), ½ PPD smoker
- Previous IV heroin use
- Reluctant to admit drug use initially

**Physical Exam:**
- Anxious, pressured speech, diaphoretic, aggressive
- Dilated pupils, possible nasal septal necrosis
- Tachycardic (HR 120), hypertensive (BP 180/90)
- Temperature 38.0°C

**Vital Sign Progression:**
```
BASELINE: HR 120, BP 180/90, T 38°C, RR 22

❌ IF BETA-BLOCKER given:
   → HR 140, BP 198/100, RR 24
   → Patient: "Doc, I feel worse, my chest is tighter!"
   → TEACHING POINT: Unopposed alpha-stimulation

✅ IF BENZODIAZEPINE given:
   → HR 100, BP 144/80, T 37.8°C
   → Patient calms: "I'm feeling a bit better"

✅ Ca-channel blocker + nitro + morphine + benzo:
   → Further normalization of vitals
```

**Lab Results:**
- CBC: Normal (WBC 10,700)
- Chemistry: Normal
- Troponin: 0.02 ng/mL (borderline)
- **Tox screen: COCAINE POSITIVE, ETOH POSITIVE**
- ECG: Nonspecific ST-T wave changes
- CXR: Normal

**Educational Objectives:**
- Recognize sympathomimetic toxidrome (tachy, HTN, hyperthermia, agitation, mydriasis)
- **Beta-blocker contraindication** (unopposed alpha → paradoxical HTN)
- First-line benzodiazepines for adrenergic state
- Cocaine + ethanol → cocaethylene (increased vasospasm)
- Differential: ACS, cardiomyopathy, dissection, pneumothorax
- Complications: MI, rhabdomyolysis, hyperkalemia

### 4. Organophosphate Poisoning (`organophosphate`)
**Target:** Medical students, residents  
**Setting:** Emergency Department  
**Patient:** 26yo landscaper with acute pesticide exposure  
**Source:** Harvard Medical School Gilbert Program

**Key Features:**
- **CLINICAL DIAGNOSIS** - Do not wait for lab confirmation
- Cholinergic crisis recognition (SLUDGE, BBB, DUMBBELS)
- Aggressive atropine dosing
- Airway management priority
- HAZMAT decontamination

**Critical Actions Tracked:**
- Telemetry monitoring
- History (occupational exposure)
- Physical examination (pinpoint pupils, fasciculations)
- Supplemental O2
- IV access
- **Secure airway** (respiratory failure risk)
- **Administer ATROPINE** (large, repeated doses)
- Pralidoxime/2-PAM (nicotinic effects)
- Decontamination

**Patient Presentation:**
- Landscaper spraying pesticides, found confused and vomiting
- Nausea, vomiting, abdominal cramping
- Shortness of breath, confusion, anxiety
- Heavy salivation, "crying," diaphoresis
- Diarrhea

**Vital Signs:**
```
HR 46 (BRADYCARDIC)
BP 100/64 (relatively low)
T 37.0°C
O2 90% (HYPOXIC)
RR 32 (TACHYPNEIC - paradoxical with bradycardia)
```

**Physical Exam - Cholinergic Syndrome:**
- **Pinpoint pupils (miosis)** - KEY FINDING
- Excessive salivation
- "Crying" (lacrimation)
- Vomiting
- Diaphoresis
- Wheezing/rhonchi (bronchorrhea, bronchospasm)
- Sinus bradycardia
- Diffuse abdominal tenderness
- Hyperactive bowel sounds
- **Muscle fasciculations** (nicotinic effect)

**Mnemonics:**
- **SLUDGE:** Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis
- **BBB:** Bradycardia, Bronchorrhea, Bronchospasm
- **DUMBBELS:** Defecation/Diaphoresis, Urination, Miosis, Bronchorrhea, Bradycardia, Emesis, Lacrimation, Salivation

**Treatment Response:**
```
IF ATROPINE given:
  → HR improves to 60, BP 120/74
  → Patient: "I can breathe a little better"
  → Repeat until secretions dry

IF 2-PAM (Pralidoxime) given:
  → Muscle fasciculations stop
```

**Lab Results:**
- Labs PENDING throughout case (intentional)
- ECG: Sinus bradycardia
- CXR: Normal

**Educational Objectives:**
- Recognize cholinergic crisis (clinical diagnosis)
- ACh accumulation → muscarinic + nicotinic receptor overstimulation
- Aggressive atropine titration (until respiratory secretions decrease)
- Pralidoxime for nicotinic effects (muscle fasciculations, weakness)
- Airway protection paramount (secretions + bronchospasm)
- HAZMAT decontamination procedures
- Pesticide poisoning = leading cause of poisoning fatalities globally
- **Do not wait for confirmatory labs - treat based on presentation**

### 5. COPD Exacerbation (`copd`)
**Target:** Medical students, residents  
**Setting:** Emergency Department  
**Patient:** 63yo business owner with acute COPD exacerbation  
**Source:** Harvard Medical School Gilbert Program

**Key Features:**
- Progressive respiratory failure without treatment
- **NEBULIZERS required** - inhalers insufficient (patient too dyspneic)
- Chronic CO2 retention with metabolic compensation
- Time-sensitive oxygen and bronchodilator administration
- Admission decision-making

**Critical Actions Tracked:**
- Vital signs
- Patient history (smoking, previous exacerbations)
- Physical examination (barrel chest, wheezing, clubbing)
- **Supplemental O2**
- IV access
- Labs: CBC, BMP, troponin, ABG
- Chest X-ray
- **Nebulized β-agonist (albuterol)**
- **Nebulized antimuscarinic (ipratropium)**
- Corticosteroids (prednisone)
- Consider antibiotics

**Patient Presentation:**
- Shortness of breath x2-3 days, worsening this morning
- Productive cough with yellowish phlegm x4 months
- Heavy tobacco use: 2 PPD x34 years (claims "quit 3 days ago")
- Previous COPD hospitalization, no intubations
- Speaking in short sentences, visibly dyspneic

**Vital Signs Progression:**
```
BASELINE: HR 92, BP 120/80, T 37°C, O2 88%, RR 24

IF NO treatment by 10min:
  → HR 102, BP 120/80, O2 85%, RR 27
  → Patient exhausted, worsening

IF INHALER used (not nebulizer):
  → NO IMPROVEMENT (too dyspneic for adequate inspiratory effort)

IF O2 + SINGLE nebulizer treatment:
  → HR 106, BP 120/80, O2 91% on O2, RR 20
  → Partial improvement, wheezing decreased

IF O2 + CONTINUOUS nebs + steroids:
  → HR 88, BP 120/80, O2 95% on 2L, RR 16
  → Wheezing resolved, "Breathing better now"
```

**Physical Exam:**
- Barrel-chested (emphysematous changes)
- Ruddy face
- Diffuse bilateral wheezing
- Poor air movement
- Mild digital clubbing
- Speaking 2-3 words at a time

**Lab Results:**
- **ABG:** pH 7.32, pCO2 50 (HIGH), pO2 80, HCO3 26, SaO2 91%
  - Respiratory acidosis with metabolic compensation (chronic CO2 retainer)
- CBC: WBC 8,500 with left shift (bands 8%)
- BMP: Normal
- CXR: Hyperinflated lungs, no infiltrates/opacities
- ECG: Sinus tachycardia

**Educational Objectives:**
- COPD vs asthma differentiation (irreversible vs reversible airflow obstruction)
- Chronic bronchitis vs emphysema
- Chronic CO2 retention and metabolic compensation
- Exacerbation triggers (infection, environmental)
- **Critical importance of nebulized delivery** in acute exacerbation
- β-agonist (albuterol) + antimuscarinic (ipratropium) synergy
- Role of corticosteroids in exacerbations
- Antibiotic indications (purulent sputum, increased volume)
- Admission criteria and disposition
- Non-invasive ventilation considerations
- Risk of respiratory failure without treatment

### 6. Aortic Stenosis with AFib (`aortic_stenosis`)
**Target:** Medical students, residents  
**Setting:** Emergency Department → Inpatient floor  
**Patient:** 68yo plumber with exertional chest pain, then AFib complication  
**Source:** Harvard Medical School Gilbert Program

**Key Features:**
- **TWO-PART CASE:** Angina (Part I) → Atrial Fibrillation (Part II)
- **CRITICAL ERROR:** Nitroglycerin contraindicated in AS
- Hemodynamic instability from loss of atrial kick
- Immediate cardioversion required
- Classic valve disease presentation

**PART I: Angina**

**Critical Actions Tracked:**
- Telemetry monitoring
- Patient history (rheumatic fever!)
- Physical examination (systolic ejection murmur + S4)
- Supplemental O2
- Immediate ECG and CXR
- **IV fluids** (NOT nitrates)
- Labs: cardiac biomarkers
- Admit for stress test and echo

**Patient Presentation:**
- Chest pain/SOB during exertion (carrying pipes)
- "Feels like I'm suffocating"
- Dull chest pressure, never experienced before
- History: Rheumatic fever as child
- "Doc years ago said I might need work on my heart"

**Vital Signs - Part I:**
```
BASELINE: HR 92, BP 170/100, T 37°C, O2 94%, RR 18

❌ IF NITROGLYCERIN given (CRITICAL ERROR):
  → HR 92, BP 120/90, O2 93%, RR 20
  → Patient WORSENS: "Doc, I feel worse! More lightheaded, chest pain worse!"
  → Teaching: Drops preload/afterload → reduced coronary perfusion

✅ IF IV FLUIDS given:
  → HR 90, BP 150/100, O2 96%, RR 16
  → Patient IMPROVES: "Breathing a bit easier now"
  → Teaching: Increases coronary perfusion
```

**Physical Exam - Part I:**
- Anxious, diaphoretic
- **Systolic ejection murmur** (classic AS)
- **S4 heart sound** (stiff ventricle)
- Scattered rales

**Lab/Imaging - Part I:**
- Cardiac markers: Normal (troponin 0.0)
- **ECG: Left ventricular hypertrophy (LVH)**
- CXR: Normal or mild CHF

**PART II: Atrial Fibrillation with RVR**

**Critical Actions Tracked:**
- Obtain additional history
- Repeat physical exam and immediate ECG
- **Immediate cardioversion** (electrical or chemical)
- Initiate anticoagulation therapy
- Consider rate/rhythm control agents

**Patient Presentation - Part II:**
- Patient admitted, now having second episode
- Chest pain + dyspnea + lightheadedness
- Monitor shows AFib with RVR

**Vital Signs - Part II:**
```
AFib with RVR: HR 156 (irregularly irregular), BP 80/40 (SHOCK), O2 95%, RR 20

✅ IF CARDIOVERSION (electrical OR chemical):
  → HR 102, BP 140/100, sinus rhythm restored
  → Patient stabilizes
```

**Physical Exam - Part II:**
- **Irregularly irregular tachycardia** (pathognomonic for AFib)
- Slightly elevated JVD
- Scattered rales
- Hemodynamically unstable (hypotensive)

**ECG - Part II:**
- Atrial fibrillation with rapid ventricular response

**Educational Objectives:**
- Aortic stenosis pathophysiology (pressure overload → LVH)
- Classic AS triad: Syncope, Angina, Heart failure/DOE
- **Nitrate contraindication in AS** (reduced preload/afterload worsens perfusion)
- Role of IV fluids in AS (increase coronary perfusion)
- LVH creates stiff ventricle requiring atrial contribution
- **Loss of atrial kick in AFib → hemodynamic collapse in AS**
- AFib with RVR: Urgent vs emergent cardioversion
- Electrical vs chemical cardioversion options
- Anticoagulation in new-onset AFib
- Echo for definitive AS diagnosis and severity assessment
- Stress testing considerations in valve disease
- Mortality dramatically increases once AS becomes symptomatic

### 7. Blank Simulation (`blank`)
**Purpose:** Flexible framework for creating custom medical scenarios  
**Use:** Build your own realistic clinical cases

**Updated Features:**
- Medical-focused system instructions
- Clinical authenticity emphasis
- Realistic vital signs and lab value tracking
- Lay vs. medical terminology distinction
- Time-sensitive decision frameworks

### 8. Medical Training General (`medical_general`)
**Purpose:** General medical education framework  
**Use:** Broader educational scenarios and debriefing

## Adding New Medical Scenarios

### Step 1: Define the Scenario Object
In `thousand-medical.html`, locate the `scenarios` object (around line 1980-2112) and add a new entry:

```javascript
your_scenario_id: {
  id: 'your_scenario_id',
  name: 'Scenario Display Name',
  role: 'Learner Role (e.g., Emergency Medicine Resident)',
  goal: 'Primary learning objective',
  obstacle: 'Key challenges/complications',
  intro: 'Brief clinical presentation with vitals and key findings',
  context: [
    'Critical actions or decision points',
    'Time constraints',
    'Patient background',
    'Key physical findings',
    'Learning objectives'
  ],
  initialPrompt: 'Opening scenario text that starts the simulation',
  systemInstruction: 'Detailed AI instructions for scenario orchestration'
}
```

### Step 2: System Instruction Guidelines

Your `systemInstruction` should include:

1. **Role clarity:** Define who the AI plays (patient, nurse, consultant, etc.)
2. **Dialogue style:** "Patient uses lay terminology" / "Consultant uses medical terms"
3. **State tracking:** Define variables that change (vital signs, lab values, etc.)
4. **Decision consequences:** Map interventions to outcomes
5. **Time sensitivity:** Specify critical time windows
6. **Critical actions:** List checklist items to track
7. **Educational intent:** "This is EDUCATIONAL - provide learning through realistic consequences"

**Example Structure:**
```javascript
systemInstruction: 'You are simulating [SCENARIO TYPE]. Play the PATIENT using lay terminology. Track VITAL SIGNS that change based on: [INTERVENTION] → [OUTCOME]. Track CRITICAL ACTIONS checklist: [list]. Simulate [other roles]. Provide [specific outputs when requested]. Patient can [worsen/improve] if [conditions]. This is EDUCATIONAL - provide learning through realistic consequences.'
```

### Step 3: Clinical Realism Elements

#### Vital Signs Tracking
Define baseline and progression states:
```javascript
// Example from gi_bleed:
'If 1-2L fluids given within 10min → HR 110, BP 145/90'
'If NO fluids by 10min → HR 150, BP 70/40 (decompensation)'
```

#### Patient Dialogue
- **Patient:** "My stomach hurts and burns" (lay terms)
- **Nurse:** "54 year old male, vomiting blood" (clinical handoff)
- **Consultant:** "Recommend endoscopy, IV PPI, NG lavage" (medical terminology)

#### Lab Values
Provide realistic reference ranges and abnormal values:
```
Hemoglobin: 9 g/dL (LOW, ref 13.5-16.5)
BUN: 40 mg/dL (ELEVATED, ref 7-20)
```

### Step 4: Scenario-Specific Features

Consider adding:
- **Images/Imaging:** ECG, X-ray, CT descriptions
- **Physical exam findings:** What learner discovers on examination
- **Consultant responses:** Pre-scripted recommendations
- **Complication pathways:** What happens if mismanaged
- **Debriefing points:** Key learning objectives to discuss

### Step 5: Testing Your Scenario

1. Add to default channels for testing (line ~2548):
```javascript
const testCase = createChannel({ scenario: 'your_scenario_id', name: 'TEST CASE' });
```

2. Test critical decision pathways:
   - Optimal management path
   - Delayed treatment path
   - Incorrect intervention path

3. Verify educational value:
   - Are consequences realistic?
   - Are learning points clear?
   - Does it support debriefing?

## Example: Adding a New Scenario (Acute MI)

```javascript
acute_mi: {
  id: 'acute_mi',
  name: 'Acute MI (STEMI)',
  role: 'Emergency Medicine Resident',
  goal: 'Recognize STEMI and initiate reperfusion therapy',
  obstacle: 'Time-critical decision (<90min door-to-balloon)',
  intro: 'ED: 62yo male, crushing chest pain radiating to left arm, 2hrs duration. Diaphoretic, anxious. Vitals: HR 95, BP 160/95, O2 94% RA, RR 18.',
  context: [
    'CRITICAL ACTIONS: O2, IV, monitor, aspirin, ECG <10min, cardiology consult, cath lab activation',
    'Time pressure: Door-to-balloon <90min for primary PCI',
    'Red flags: Chest pain >20min, radiation, diaphoresis, N/V',
    'Differential: ACS, PE, aortic dissection, anxiety',
    'Decision points: STEMI vs NSTEMI, PCI vs lytics, contraindications'
  ],
  initialPrompt: 'EMS brings patient to ED. Paramedic report: "62 year old male, 10/10 crushing chest pain for 2 hours, given aspirin en route, no relief with nitro." What do you do first?',
  systemInstruction: 'You simulate acute STEMI scenario. Play PATIENT: "My chest feels like an elephant sitting on it, my arm is tingling." Track ECG evolution. If ECG obtained <10min AND interpreted correctly → provide ST elevations II, III, aVF (inferior STEMI). Track time to aspirin, cath lab activation. If aspirin + cath lab within 30min → patient stabilizes. If delayed >60min → cardiogenic shock (BP 80/50, HR 115). Simulate cardiology: "Inferior STEMI, activate cath lab, load with ticagrelor." This is EDUCATIONAL.'
}
```

## Scenario Categories to Develop

### Emergency Medicine
- Acute MI (STEMI/NSTEMI)
- Pulmonary embolism
- Septic shock
- Anaphylaxis
- Stroke (ischemic/hemorrhagic)
- Trauma (ATLS protocol)

### Internal Medicine
- DKA/HHS
- Acute renal failure
- Heart failure exacerbation
- COPD exacerbation
- Pneumonia with complications

### Surgery
- Acute abdomen
- Appendicitis
- Bowel obstruction
- Post-op complications

### Obstetrics
- Pre-eclampsia/eclampsia
- Postpartum hemorrhage
- Shoulder dystocia

### Pediatrics
- Pediatric sepsis
- Croup vs epiglottitis
- Meningitis
- DKA in children

## Educational Framework

### Learning Objectives
Each scenario should support:
1. **Knowledge:** Pathophysiology, differential diagnosis
2. **Skills:** History, physical, procedures, interpretation
3. **Clinical reasoning:** Prioritization, time management
4. **Communication:** Patient dialogue, consultant interaction, team leadership

### Assessment
Track learner performance on:
- Critical actions completed (checklist)
- Time to key interventions
- Correct diagnosis
- Appropriate management
- Communication quality

### Debriefing
Post-scenario discussion should cover:
- What went well / areas for improvement
- Critical decision points and rationale
- Alternative management strategies
- Learning points and key takeaways

## Technical Notes

### File Structure
- **Lines 1-1900:** CSS styling and UI framework
- **Lines 1980-2112:** Scenario definitions (ADD NEW SCENARIOS HERE)
- **Lines 2400-2600:** Channel class and initialization
- **Lines 2700-4000:** State management and persistence
- **Lines 4000-6000:** AI integration and message handling
- **Lines 6000-6927:** UI rendering and interaction handlers

### AI Model Integration
Scenarios use OpenAI API with:
- **Model:** GPT-4 (recommended for medical accuracy)
- **Temperature:** 0.7 (balance realism and consistency)
- **System prompts:** Define role, tracking requirements, educational goals

### State Persistence
Scenarios automatically save:
- Channel state (messages, decisions)
- Ring memory (timeline of events)
- Vital sign progression
- Critical action completion

## Best Practices

1. **Authenticity:** Use real medical terminology, realistic values, actual protocols
2. **Progressive disclosure:** Reveal information as learner requests it
3. **Consequence-based:** Actions should have realistic outcomes
4. **Time-appropriate:** Match complexity to learner level
5. **Debriefable:** Design for post-scenario discussion
6. **Fail-safe:** Allow learning through mistakes without trivializing consequences

## Future Enhancements

Potential additions:
- [ ] Visual vital signs dashboard
- [ ] Critical actions checklist UI overlay
- [ ] Timer display for time-sensitive scenarios
- [ ] Automated scoring/assessment
- [ ] Multi-learner collaboration mode
- [ ] Standardized patient video integration
- [ ] Procedure simulation modules
- [ ] Debriefing framework integration

## Resources

### Medical Simulation References
- Gilbert Program in Medical Simulation (Harvard Medical School)
- Society for Simulation in Healthcare
- ACGME Clinical Learning Environment Review (CLER)

### Clinical Guidelines
- ACLS/ATLS protocols
- Clinical practice guidelines (AHA, ACC, ACS)
- Uptodate, DynaMed clinical decision support

---

**Version:** 1.0  
**Last Updated:** October 2025  
**Framework:** LEGOS Multi-Channel Engine (Medical Training Fork)
