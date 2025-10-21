
# Create world_room.csv - Environment zones and objects
world_room_data = [
    ["id", "label", "category", "affordance_tags", "valence", "canon", "quote", "source_url", "notes"],
    ["zone:chalice-apartment", "Chalice's Apartment", "Zone", "navigation,exploration,survival", "0.0", "true", "Chalice's messy apartment", "pilarcorrias.com/exhibitions/350-ian-cheng-thousand-lives/", "Cluttered domestic interior, post-Permadroned Years"],
    ["obj:grapes", "Grapes", "Object", "nourishing,food,green", "0.8", "true", "grapes green", "pilarcorrias.com", "Positive affordance - satisfies hunger"],
    ["obj:food-pellets", "Food Pellets", "Object", "nourishing,food", "0.7", "true", "food pellets", "pilarcorrias.com", "Nutritional resource"],
    ["obj:spiky-urchin", "Spiky Urchin", "Object", "threatening,painful,hazard", "-0.9", "true", "spiky urchins", "pilarcorrias.com", "Negative affordance - causes pain"],
    ["obj:toxic-substance", "Toxic Substance", "Object", "toxic,hazard,deadly", "-1.0", "true", "toxic substances", "pilarcorrias.com", "Lethal if consumed"],
    ["obj:wine-bottle", "Wine Bottle", "Object", "obstacle,container,neutral", "0.0", "true", "wine bottles", "pilarcorrias.com", "Neutral obstacle in environment"],
    ["obj:jar", "Jar", "Object", "container,neutral", "0.0", "true", "jars", "pilarcorrias.com", "Container object"],
    ["obj:bumpy-fruit", "Bumpy Fruit", "Object", "ambiguous,unknown", "0.0", "true", "bumpy fruits", "pilarcorrias.com", "Ambiguous - could be food or poison"],
    ["zone:zim-summit", "ZIM Emergency Summit", "Zone", "presentation,demonstration,corporate", "0.0", "true", "presented at the ZIM Emergency Summit", "lifeafterbob.wiki/view/1000_Lives_Demo", "NYE 2074 venue"],
    ["obj:turtle-host-enclosure", "Turtle Host Enclosure", "Object", "containment,biological-storage", "0.0", "true", "hosted in the brain of a tortoise", "lifeafterbob.wiki/view/1000_Lives_Demo", "Containment for biological neural storage"],
    ["zone:wavyverse", "Wavyverse", "Zone", "neural-mental,simulation,consciousness", "0.0", "true", "Wavyverse neural-mental medium", "lifeafterbob.wiki", "Non-physical distributed consciousness space"],
    ["haz:security-bug", "Security Bug", "Hazard", "hazard,malfunction,entrapment", "-0.9", "true", "buggy security features injured", "lifeafterbob.wiki/view/1000_Lives_Demo", "Caused Permadroned Years"],
    ["obj:monitor-screen", "Monitor Screen", "Object", "telemetry,display,interface", "0.0", "true", "computer screen displaying Thousand's internal states", "sources", "Shows emotion, goals, metabolism"],
    ["affordance:sunlight", "Sunlight", "Affordance", "lighting,temporal,shadow-casting", "0.3", "true", "sun casting shadows", "sources", "Day-night cycles"],
    ["affordance:chalice-appearance", "Chalice Appearance", "Affordance", "disruption,force-of-nature,unpredictable", "-0.3", "true", "sporadic appearances of Chalice", "pilarcorrias.com", "Environmental disruption event"]
]

# Write CSV
csv_output = StringIO()
writer = csv.writer(csv_output)
for row in world_room_data:
    writer.writerow(row)

csv_content = csv_output.getvalue()

with open('world_room.csv', 'w', newline='') as f:
    f.write(csv_content)

print("world_room.csv created")
print(f"Total entries: {len(world_room_data) - 1} (excluding header)")
print("\nSample entries:")
print(csv_content.split('\n')[0])  # header
print(csv_content.split('\n')[1])  # first data row
print(csv_content.split('\n')[2])  # second data row
