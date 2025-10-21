
import json
import csv
from io import StringIO

# Create entities.json - Core entities from Life After BOB universe
entities = [
    {
        "id": "artifact:1000-lives-demo",
        "label": "1000 Lives Demo",
        "type": ["Artifact", "Software", "Event"],
        "summary": "Failed Wavyverse neural app by Z that stored subplot data in tortoise brain; presented NYE 2074 at ZIM Emergency Summit; trapped Chalice's psyche for 10 years.",
        "canon_quotes": [
            {
                "q": "The demo purported to analyze a person's Life logs, highlight the forgotten subplots of one's life, and conjure a vivid simulation of a life lived on a subplot's path.",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            },
            {
                "q": "Zoroaster (Z) infamously stored his subplot data in the brain of a tortoise for his 1000 Lives Demo.",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            }
        ],
        "aliases": ["1000 Lives", "Thousand Lives Demo"],
        "first_seen": "2074-12-31",
        "last_updated": "2074-12-31",
        "sources": ["https://lifeafterbob.wiki/view/1000_Lives_Demo"],
        "LEGOS": {
            "perspective": {"text": "experiential therapy system", "canon": False, "inference_note": "inferred from therapeutic framing"},
            "belief": {"text": "subplots can provide therapeutic insight through simulation", "canon": True, "evidence": {"quote": "Z claimed 1000 Lives would function as an 'experiential therapy'", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}},
            "desire": {"text": "expose users to plurality of unlived life paths", "canon": True, "evidence": {"quote": "exposing the user to the plurality of interesting paths available at every stage of their life", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}},
            "intent": {"text": "refactored into 1000 Plots (2084)", "canon": True, "evidence": {"quote": "its codebase was refactored by Chalice Wong into a new venture called 1000 Plots", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}}
        }
    },
    {
        "id": "object:turtle-host",
        "label": "1000 Lives Turtle Host",
        "type": ["Object", "Biological", "Storage"],
        "summary": "Tortoise whose brain hosted Z's subplot data for 1000 Lives Demo; biological neural storage medium.",
        "canon_quotes": [
            {
                "q": "The 1000 Lives Demo was originally hosted in the brain of a tortoise.",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            }
        ],
        "aliases": ["Turtle Host", "Tortoise Host", "1000 Lives Tortoise"],
        "first_seen": "2074-12-31",
        "sources": ["https://lifeafterbob.wiki/view/1000_Lives_Demo"],
        "LEGOS": {
            "perspective": {"text": "passive biological substrate", "canon": False, "inference_note": "tortoise consciousness unclear"},
            "belief": {"text": "unknown - neural patterns encoded", "canon": False, "inference_note": "substrate-neutral consciousness storage"},
            "desire": {"text": "unknown - agency unclear", "canon": False, "inference_note": "used as technology component"},
            "intent": {"text": "biological storage for Z's subplot data", "canon": True, "evidence": {"quote": "stored his subplot data in the brain of a tortoise", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}}
        }
    },
    {
        "id": "person:chalice-wong",
        "label": "Chalice Wong",
        "type": ["Person", "Protagonist", "Researcher"],
        "summary": "Subject of The Chalice Study; first human with BOB from birth; permadroned 2074-2084; refactored 1000 Lives into 1000 Plots at age 20.",
        "canon_quotes": [
            {
                "q": "The 1000 Lives candidates selected for the demo were Chalice Wong of The Chalice Study",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            },
            {
                "q": "In 2084, its codebase was refactored by Chalice Wong into a new venture called 1000 Plots.",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            }
        ],
        "aliases": ["Chalice"],
        "first_seen": "2064",
        "last_updated": "2084",
        "sources": ["https://lifeafterbob.wiki/view/1000_Lives_Demo", "https://lifeafterbob.wiki/view/Chalice_Wong"],
        "LEGOS": {
            "perspective": {"text": "confused child at demo (age 10), emerging adult refactorer (age 20)", "canon": True, "evidence": {"quote": "Chalice wonders: what is left for her classic human self to do?", "source_url": "lifeafterbob.wiki"}},
            "belief": {"text": "BOB may live her life better than she can; technology can be ethically rebuilt", "canon": True, "evidence": {"quote": "BOB threatens to do the job of living Chalice's life better than she can", "source_url": "lifeafterbob.wiki"}},
            "desire": {"text": "assert human agency, transform trauma into ethical technology", "canon": False, "inference_note": "implied by 1000 Plots refactoring"},
            "intent": {"text": "refactor 1000 Lives Demo into ethical 1000 Plots", "canon": True, "evidence": {"quote": "refactored by Chalice Wong into a new venture called 1000 Plots", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}}
        }
    },
    {
        "id": "person:zoroaster-z",
        "label": "Zoroaster (Z)",
        "type": ["Person", "Founder", "CEO"],
        "summary": "ZIM founder; created 1000 Lives Demo; ousted after NYE 2074 catastrophic failure; attempted spiritual direction for company.",
        "canon_quotes": [
            {
                "q": "1000 Lives Demo is a failed Wavyverse neural app developed by Zoroaster Immeasurables (ZIM) founder Zoroaster (Z).",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            },
            {
                "q": "The 1000 Lives Demo marked the final attempt by Z to steer ZIM in a spiritual direction.",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            }
        ],
        "aliases": ["Z", "Zoroaster"],
        "sources": ["https://lifeafterbob.wiki/view/1000_Lives_Demo", "https://lifeafterbob.wiki/view/Zoroaster_(Z)"],
        "LEGOS": {
            "perspective": {"text": "visionary spiritual technologist", "canon": False, "inference_note": "inferred from spiritual direction attempts"},
            "belief": {"text": "consciousness is substrate-independent; spiritual exploration > commercial success", "canon": True, "evidence": {"quote": "stored his subplot data in the brain of a tortoise", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}},
            "desire": {"text": "steer ZIM toward spiritual purpose beyond profit", "canon": True, "evidence": {"quote": "final attempt by Z to steer ZIM in a spiritual direction", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}},
            "intent": {"text": "validate spiritual technology through 1000 Lives Demo", "canon": False, "inference_note": "demonstrated at emergency summit"}
        }
    },
    {
        "id": "artifact:1000-plots",
        "label": "1000 Plots",
        "type": ["Artifact", "Software", "Successor"],
        "summary": "Ethical refactoring of 1000 Lives Demo by Chalice Wong (2084); requires volunteer-provided life logs; personalized subplot exploration.",
        "canon_quotes": [
            {
                "q": "In 2084, its codebase was refactored by Chalice Wong into a new venture called 1000 Plots.",
                "source": "lifeafterbob.wiki/view/1000_Lives_Demo"
            }
        ],
        "aliases": ["1000Plots"],
        "first_seen": "2084",
        "sources": ["https://lifeafterbob.wiki/view/1000_Lives_Demo", "https://lifeafterbob.wiki/view/1000_Plots"],
        "LEGOS": {
            "perspective": {"text": "ethical simulation platform", "canon": False, "inference_note": "addresses failures of original"},
            "belief": {"text": "personalized subplot exploration can be therapeutic with proper consent", "canon": False, "inference_note": "volunteer model implies ethical reframing"},
            "desire": {"text": "provide subplot therapy without violations of original demo", "canon": False, "inference_note": "corrects non-universality flaw"},
            "intent": {"text": "offer volunteer-based personalized life path simulations", "canon": True, "evidence": {"quote": "refactored by Chalice Wong", "source_url": "lifeafterbob.wiki/view/1000_Lives_Demo"}}
        }
    },
    {
        "id": "character:thousand-turtle",
        "label": "Thousand (Turtle)",
        "type": ["Character", "Agent", "Simulation"],
        "summary": "AI turtle in Thousand Lives simulation; navigates Chalice's apartment; learns affordances through trial/error; dies/reincarnates with 80% belief retention.",
        "canon_quotes": [
            {
                "q": "Thousand Lives is a simulation that dramatises the daily life of Chalice's pet turtle, Thousand.",
                "source": "pilarcorrias.com/exhibitions/350-ian-cheng-thousand-lives"
            },
            {
                "q": "Thousand is driven by an inferential AI model that attempts to reconcile Thousand's internal urges with the affordances (and threats) of Chalice's apartment environment.",
                "source": "pilarcorrias.com/exhibitions/350-ian-cheng-thousand-lives"
            }
        ],
        "aliases": ["Thousand", "The Turtle"],
        "first_seen": "2023",
        "sources": ["https://www.pilarcorrias.com/exhibitions/350-ian-cheng-thousand-lives/"],
        "LEGOS": {
            "perspective": {"text": "embodied learning agent with urgent internal turtle needs", "canon": True, "evidence": {"quote": "reconcile Thousand's internal urges with external affordances", "source_url": "pilarcorrias.com"}},
            "belief": {"text": "objects have meanings that must be learned through experience", "canon": True, "evidence": {"quote": "must learn what is of relevance to its needs", "source_url": "pilarcorrias.com"}},
            "desire": {"text": "satisfy urgent needs: food, safety, rest, curiosity", "canon": True, "evidence": {"quote": "urgent inner turtle needs", "source_url": "pilarcorrias.com"}},
            "intent": {"text": "minimize surprise through accurate belief construction", "canon": False, "inference_note": "inferred from minimal viable sentience framework"}
        }
    }
]

print("entities.json created with", len(entities), "entries")
print(json.dumps(entities[0], indent=2)[:500] + "...")
