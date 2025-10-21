
# Create lore_glossary.json - Key terms and definitions
lore_glossary = {
    "terms": [
        {
            "term": "1000 Lives Demo",
            "definition": "Failed Wavyverse neural app that analyzed Life logs to highlight forgotten subplots and simulate alternative life paths; hosted on tortoise brain; presented NYE 2074; catastrophically trapped Chalice Wong's psyche for 10 years.",
            "canon": True,
            "sources": ["lifeafterbob.wiki/view/1000_Lives_Demo"],
            "evidence": "The demo purported to analyze a person's Life logs, highlight the forgotten subplots of one's life, and conjure a vivid simulation of a life lived on a subplot's path."
        },
        {
            "term": "1000 Plots",
            "definition": "Ethical refactoring of 1000 Lives Demo by Chalice Wong (2084); requires volunteer-provided life logs for personalized subplot exploration.",
            "canon": True,
            "sources": ["lifeafterbob.wiki/view/1000_Lives_Demo"],
            "evidence": "In 2084, its codebase was refactored by Chalice Wong into a new venture called 1000 Plots."
        },
        {
            "term": "Subplot",
            "definition": "Forgotten or unchosen alternative life path within one's biographical possibility space; extractable from Life logs.",
            "canon": True,
            "sources": ["lifeafterbob.wiki/view/1000_Lives_Demo"],
            "evidence": "highlight the forgotten subplots of one's life"
        },
        {
            "term": "Life Logs",
            "definition": "Comprehensive records of an individual's experiences, decisions, and life events; analyzable by neural applications.",
            "canon": True,
            "sources": ["lifeafterbob.wiki/view/1000_Lives_Demo"],
            "evidence": "analyze a person's Life logs"
        },
        {
            "term": "Prime Path",
            "definition": "Primary existential trajectory; main life 'script' that one is living or pursuing.",
            "canon": True,
            "sources": ["lifeafterbob.wiki"],
            "evidence": "Referenced in context of Life Path concepts"
        },
        {
            "term": "Permadroned Years",
            "definition": "Ten-year period (2074-2084) when Chalice Wong's psyche was trapped in Wavyverse due to 1000 Lives Demo security failure.",
            "canon": True,
            "sources": ["lifeafterbob.wiki/view/1000_Lives_Demo"],
            "evidence": "trapped the psyche of Chalice Wong for ten years ('The Permadroned Years')"
        },
        {
            "term": "Wavyverse",
            "definition": "Neural-mental medium where internet extends into nervous system; consciousness interpenetrates as confluxes.",
            "canon": True,
            "sources": ["lifeafterbob.wiki"],
            "evidence": "multiple energy waves moving at different timescales, mediated through nervous system"
        },
        {
            "term": "BOB (Bag of Beliefs)",
            "definition": "AI entities that co-inhabit human nervous systems; three types: Task (tactical), Affirmation (emotional), Destiny (existential guidance).",
            "canon": True,
            "sources": ["iancheng.com/BOB", "lifeafterbob.wiki"],
            "evidence": "AI 'spirits' that augment and support a person's Life Path"
        },
        {
            "term": "Congress of Demons",
            "definition": "Competing motivational subagents within agent architecture; each demon embodies a basic drive and competes for body control.",
            "canon": True,
            "sources": ["iancheng.com/BOB"],
            "evidence": "congress of motivating 'demons' and a neuro-symbolic inductive engine"
        },
        {
            "term": "Inference Engine",
            "definition": "Neuro-symbolic AI system that constructs rule-based beliefs from sensory experiences; learns predicates about objects.",
            "canon": True,
            "sources": ["iancheng.com/BOB"],
            "evidence": "neuro-symbolic inductive engine capable of learning rule-based beliefs from sensory experiences"
        },
        {
            "term": "Affordance",
            "definition": "Objective properties of objects (edible/toxic, threatening/safe) that must be discovered through agent interaction; not pre-labeled.",
            "canon": True,
            "sources": ["pilarcorrias.com/exhibitions/350-ian-cheng-thousand-lives/"],
            "evidence": "Objects in the environment have no prescribed meaning, and Thousand's AI model must learn what is of relevance to its needs"
        },
        {
            "term": "Surprise",
            "definition": "Prediction error; mismatch between agent expectation and outcome; triggers belief updates and emotion signals.",
            "canon": True,
            "sources": ["iancheng.com/minimumviablesentience"],
            "evidence": "capacity to be upset and then deal with it"
        },
        {
            "term": "Worldwatching",
            "definition": "Interactive mode allowing viewers to pause simulation, inspect objects/characters via phone, and access wiki entries revealing internal states.",
            "canon": True,
            "sources": ["pilarcorrias.com/exhibitions/350-ian-cheng-thousand-lives/"],
            "evidence": "Life After BOB features a unique Worldwatching mode"
        },
        {
            "term": "Minimal Viable Sentience",
            "definition": "Threshold for aliveness: capacity to experience surprise (expectation violation) and metabolize it through belief updates.",
            "canon": True,
            "sources": ["iancheng.com/minimumviablesentience"],
            "evidence": "capacity to be upset and then deal with it"
        },
        {
            "term": "Worlding",
            "definition": "The unnatural art of designing systems that grow, change, and take on a life of their own; creating infinite games rather than finite ones.",
            "canon": True,
            "sources": ["Emissary's Guide to Worlding"],
            "evidence": "the unnatural art of creating an infinite game"
        }
    ]
}

with open('lore_glossary.json', 'w') as f:
    json.dump(lore_glossary, f, indent=2)

print("lore_glossary.json created")
print(f"Total terms defined: {len(lore_glossary['terms'])}")
print("\nSample entries:")
for term in lore_glossary['terms'][:3]:
    print(f"- {term['term']}: {term['definition'][:80]}...")
