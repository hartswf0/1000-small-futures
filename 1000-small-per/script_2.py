
# Create olog.json - Category theory ontology
olog = {
    "types": [
        "Person",
        "Org",
        "Artifact",
        "Object",
        "Place",
        "Event",
        "Concept",
        "Mode",
        "Mechanic",
        "Affordance",
        "Zone",
        "Character",
        "Biological",
        "Storage",
        "Software",
        "Simulation"
    ],
    "functors": [
        {"from": "Agent", "to": "BeliefState", "name": "maintains"},
        {"from": "BeliefState", "to": "Motive", "name": "induces"},
        {"from": "Motive", "to": "Action", "name": "realizes_as"},
        {"from": "Action", "to": "PredictionError", "name": "yields"},
        {"from": "PredictionError", "to": "BeliefState", "name": "updates"},
        {"from": "Demon", "to": "Goal", "name": "pursues"},
        {"from": "Goal", "to": "ObjectOfAttention", "name": "selects"},
        {"from": "ObjectOfAttention", "to": "Expectation", "name": "generates"},
        {"from": "Expectation", "to": "Outcome", "name": "compares_with"},
        {"from": "Outcome", "to": "Emotion", "name": "triggers"},
        {"from": "Emotion", "to": "BeliefUpdate", "name": "initiates"},
        {"from": "LifeLogs", "to": "Subplots", "name": "extracts"},
        {"from": "Subplots", "to": "Simulation", "name": "renders_as"},
        {"from": "Simulation", "to": "Experience", "name": "provides"}
    ],
    "relations": [
        {"subject_type": "Person", "predicate": "created", "object_type": "Artifact"},
        {"subject_type": "Artifact", "predicate": "hosted_on", "object_type": "Object"},
        {"subject_type": "Person", "predicate": "refactored", "object_type": "Artifact"},
        {"subject_type": "Artifact", "predicate": "trapped", "object_type": "Person"},
        {"subject_type": "Artifact", "predicate": "caused", "object_type": "Event"},
        {"subject_type": "Character", "predicate": "inhabits", "object_type": "Place"},
        {"subject_type": "Character", "predicate": "owned_by", "object_type": "Person"}
    ],
    "agent_cognitive_cycle": {
        "description": "The core loop by which agents construct meaning through surprise metabolism",
        "stages": [
            "PerceiveEnvironment",
            "InferRelevance",
            "UpdateBeliefs",
            "SelectMotive",
            "PlanAct",
            "ObservePredictionError",
            "ReviseBeliefsOrMintNewMotive"
        ],
        "composition": "PerceiveEnvironment ∘ InferRelevance ∘ UpdateBeliefs ∘ SelectMotive ∘ PlanAct ∘ ObservePredictionError ∘ ReviseBeliefsOrMintNewMotive → Agent′"
    }
}

with open('olog.json', 'w') as f:
    json.dump(olog, f, indent=2)

print("olog.json created")
print("\nCategory theory structure:")
print(f"- {len(olog['types'])} types defined")
print(f"- {len(olog['functors'])} functors defined")
print(f"- {len(olog['relations'])} relation types defined")
print(f"- Agent cognitive cycle: {len(olog['agent_cognitive_cycle']['stages'])} stages")
