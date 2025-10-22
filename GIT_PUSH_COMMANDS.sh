#!/bin/bash
# Git push commands for 1000 Small Futures Tetrad System Update

echo "🚀 Preparing to push 1000 Small Futures - Tetrad System Complete"
echo ""

# Check git status
echo "📊 Checking git status..."
git status

echo ""
echo "📦 Files to be added:"
echo "  - thousand-tetrad.html (PRIMARY - 57 scenarios)"
echo "  - CARTRIDGE_BROWSER.html (scenario browser UI)"
echo "  - SCENARIO_LIBRARY.md (complete documentation)"
echo "  - PUSH_NOTES.md (changelog)"
echo "  - README_UPDATE.md (updated project structure)"
echo "  - GIT_PUSH_COMMANDS.sh (this file)"
echo "  - index.html (UPDATED - now 12 engines)"
echo ""

read -p "Continue with git add? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Aborted."
    exit 1
fi

# Add all new/modified files
echo "➕ Adding files to staging..."
git add thousand-tetrad.html
git add CARTRIDGE_BROWSER.html
git add SCENARIO_LIBRARY.md
git add PUSH_NOTES.md
git add README_UPDATE.md
git add GIT_PUSH_COMMANDS.sh
git add index.html

echo ""
echo "✅ Files staged successfully"
echo ""

# Show what will be committed
echo "📋 Files staged for commit:"
git status --short

echo ""
read -p "Continue with commit? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Aborted. Files remain staged."
    exit 1
fi

# Commit with comprehensive message
echo "💾 Committing changes..."
git commit -m "feat: Add comprehensive tetrad analysis system with 57 scenarios

Major expansion of LEGOS framework with McLuhan-style tetrad analysis:

NEW FILES:
- thousand-tetrad.html: 57 scenarios across 12 categories
- SCENARIO_LIBRARY.md: Complete documentation with recursive patterns
- CARTRIDGE_BROWSER.html: Visual grid interface for scenario exploration
- PUSH_NOTES.md: Comprehensive changelog
- README_UPDATE.md: Updated project structure docs

UPDATED:
- index.html: Navigation expanded to 12 engines (was 6)

CATEGORIES (57 scenarios total):
- Media Theory (7): microdrama, social_media, AI assistants
- Medical Training (6): migraine, cocaine intox, organophosphate
- Digital Humanities (8): print scholar, telegraph, attention crisis
- 1000 Lives Universe (6): Chalice, Z, Thousand, BOB, Plots
- Tech Ethics (2): Maya Chen, Dev Kumar power dynamics
- Black Metal/Afrotectopia (4): florilegia, companion180, darkvoyage
- Ekphrastic Poetry (2): Stevens jar, Achilles shield
- Cultural Theory (3): Barthes, Benjamin, Sankofa
- Novel Systems (5): chess, psychogeo, fermentation, ritual space
- Mythic+Technical (5): tower defense, Babel, Sisyphus, labyrinth, Orpheus
- Animated Series (4): Midnight Gospel, Avatar
- Famous Persuasion (5): HAL 9000, Dobby, Odysseus, Her, Twelve Angry Men

UI FEATURES:
- Mobile-first modals (380px × 85vh)
- 4-arrow steering system (→ ↗ ↔ ⋔)
- Channel-colored buttons
- Sound feedback + animations
- Tetrad mode toggle with slash commands
- Ledger tracking (each tetrad gets timeline dot)

RECURSIVE PATTERNS:
Each scenario includes unique exploration loops for deep analysis.
Chess: Position → Pattern → Moves → Evaluation → New position
Orpheus: Ascent → Doubt → Temptation → Choice → Mythic consequence
Fermentation: Inoculation → Growth → Monitoring → Harvest → New batch

TECHNICAL:
- ~4,000+ lines of code added
- McLuhan Four Laws integration
- Perspective analysis with entity selection
- Nested analysis (tetrad FROM perspective)
- LocalStorage persistence
- Sound feedback with Tone.js

Status: ✅ Production ready"

echo ""
echo "✅ Commit created successfully"
echo ""

# Show commit details
echo "📄 Commit details:"
git log -1 --stat

echo ""
read -p "Push to remote? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Aborted. Commit created but not pushed."
    echo "To push manually later: git push origin main"
    exit 1
fi

# Push to remote
echo "🚀 Pushing to remote repository..."
git push origin main

echo ""
echo "✅ Push complete!"
echo ""
echo "🎉 1000 Small Futures - Tetrad System is now live!"
echo ""
echo "Summary:"
echo "  📦 Files added/updated: 7"
echo "  🎭 Total scenarios: 57"
echo "  📚 Categories: 12"
echo "  🎨 Engines: 12"
echo "  ⋔  Tetrad mode: Active"
echo ""
echo "View your changes at: [YOUR_REPO_URL]"
echo ""
