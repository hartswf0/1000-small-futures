// Tutorial Scenes - Spell LEGOS on the grid to teach features
// Each letter is a tutorial step showing a different affordance

export const tutorialScenes = {
  
  // Step 1: L - Location (basic grid interaction)
  L: {
    title: "LOCATION",
    instruction: "Click the L to explore",
    grid: [
      ['L', '', '', '', '', '', '', '', ''],
      ['L', '', '', '', '', '', '', '', ''],
      ['L', '', '', '', '', '', '', '', ''],
      ['L', '', '', '', '', '', '', '', ''],
      ['L', '', '', '', '', '', '', '', ''],
      ['L', 'L', 'L', 'L', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    entities: [
      { x: 0, y: 0, type: 'Location', symbol: 'L', name: 'The Grid', 
        perspective: 'I am your narrative canvas. Each cell can hold a story element.' },
      { x: 0, y: 1, type: 'Location', symbol: 'L', name: 'Click Me',
        perspective: 'Click any cell to see its perspective and relations.' },
      { x: 0, y: 2, type: 'Location', symbol: 'L', name: 'The Beginning',
        perspective: 'This is where your stories start.' }
    ],
    highlightButton: null,
    chatPrompt: "Welcome! The grid is your canvas. Click any cell with an L."
  },

  // Step 2: E - Entity (entity creation)
  E: {
    title: "ENTITY",
    instruction: "Entities are characters, objects, ideas",
    grid: [
      ['E', 'E', 'E', 'E', '', '', '', '', ''],
      ['E', '', '', '', '', '', '', '', ''],
      ['E', 'E', 'E', '', '', '', '', '', ''],
      ['E', '', '', '', '', '', '', '', ''],
      ['E', 'E', 'E', 'E', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    entities: [
      { x: 0, y: 0, type: 'Entity', symbol: 'E', name: 'The Hero',
        perspective: 'I am a brave knight seeking adventure.' },
      { x: 1, y: 0, type: 'Entity', symbol: 'E', name: 'The Dragon',
        perspective: 'I guard ancient treasures in mountain caves.' },
      { x: 2, y: 0, type: 'Entity', symbol: 'E', name: 'The Wizard',
        perspective: 'I wield mysterious powers of transformation.' },
      { x: 3, y: 0, type: 'Entity', symbol: 'E', name: 'The Sword',
        perspective: 'I am a legendary blade with a storied past.' }
    ],
    highlightButton: null,
    chatPrompt: "Type a character or object in chat:\n\nA wise owl perched on an ancient oak"
  },

  // Step 3: G - Goal (narrative objectives)
  G: {
    title: "GOAL",
    instruction: "Goals drive the narrative forward",
    grid: [
      ['', 'G', 'G', 'G', '', '', '', '', ''],
      ['G', '', '', '', 'G', '', '', '', ''],
      ['G', '', '', '', '', '', '', '', ''],
      ['G', '', 'G', 'G', '', '', '', '', ''],
      ['G', '', '', '', 'G', '', '', '', ''],
      ['', 'G', 'G', 'G', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    entities: [
      { x: 1, y: 0, type: 'Goal', symbol: 'G', name: 'Find Treasure',
        perspective: 'I am the quest that drives heroes forward.' },
      { x: 2, y: 0, type: 'Goal', symbol: 'G', name: 'Save Kingdom',
        perspective: 'I am the noble cause worth fighting for.' },
      { x: 3, y: 0, type: 'Goal', symbol: 'G', name: 'Defeat Dragon',
        perspective: 'I am the challenge that tests courage.' }
    ],
    highlightButton: null,
    chatPrompt: "Goals create tension. Try:\n\nThe hero must rescue the princess before sunset"
  },

  // Step 4: O - Obstacle (challenges)
  O: {
    title: "OBSTACLE",
    instruction: "Obstacles create conflict",
    grid: [
      ['', '', 'O', 'O', 'O', '', '', '', ''],
      ['', 'O', '', '', '', 'O', '', '', ''],
      ['', 'O', '', '', '', 'O', '', '', ''],
      ['', 'O', '', '', '', 'O', '', '', ''],
      ['', 'O', '', '', '', 'O', '', '', ''],
      ['', '', 'O', 'O', 'O', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    entities: [
      { x: 2, y: 0, type: 'Obstacle', symbol: 'O', name: 'Dark Forest',
        perspective: 'I am the treacherous path that tests resolve.' },
      { x: 3, y: 0, type: 'Obstacle', symbol: 'O', name: 'Locked Gate',
        perspective: 'I stand between the hero and their goal.' },
      { x: 4, y: 0, type: 'Obstacle', symbol: 'O', name: 'Ancient Curse',
        perspective: 'I am the magic that binds and constrains.' }
    ],
    highlightButton: null,
    chatPrompt: "Obstacles add challenge:\n\nA raging river blocks the path"
  },

  // Step 5: S - Shift (transformations)
  S: {
    title: "SHIFT",
    instruction: "Shifts transform the story",
    grid: [
      ['', '', '', 'S', 'S', 'S', 'S', '', ''],
      ['', '', '', 'S', '', '', '', '', ''],
      ['', '', '', 'S', 'S', 'S', '', '', ''],
      ['', '', '', '', '', '', 'S', '', ''],
      ['', '', '', 'S', 'S', 'S', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    entities: [
      { x: 3, y: 0, type: 'Shift', symbol: 'S', name: 'Revelation',
        perspective: 'I am the moment everything changes.' },
      { x: 4, y: 0, type: 'Shift', symbol: 'S', name: 'Betrayal',
        perspective: 'I twist expectations and reverse fortunes.' },
      { x: 5, y: 0, type: 'Shift', symbol: 'S', name: 'Discovery',
        perspective: 'I reveal hidden truths that reshape understanding.' }
    ],
    highlightButton: null,
    chatPrompt: "Shifts pivot the narrative:\n\nThe wizard reveals he was the king all along"
  },

  // Step 6: U - Solution (resolution)
  U: {
    title: "SOLUTION",
    instruction: "Solutions resolve conflicts",
    grid: [
      ['', '', '', '', 'U', '', '', 'U', ''],
      ['', '', '', '', 'U', '', '', 'U', ''],
      ['', '', '', '', 'U', '', '', 'U', ''],
      ['', '', '', '', 'U', '', '', 'U', ''],
      ['', '', '', '', 'U', '', '', 'U', ''],
      ['', '', '', '', '', 'U', 'U', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    entities: [
      { x: 4, y: 0, type: 'Solution', symbol: 'U', name: 'Magic Key',
        perspective: 'I unlock what was sealed, freeing the trapped.' },
      { x: 7, y: 0, type: 'Solution', symbol: 'U', name: 'Wise Counsel',
        perspective: 'I am the insight that resolves confusion.' },
      { x: 5, y: 5, type: 'Solution', symbol: 'U', name: 'True Love',
        perspective: 'I break curses and restore harmony.' }
    ],
    highlightButton: null,
    chatPrompt: "Solutions complete arcs:\n\nThe sword glows, revealing the path home"
  },

  // Step 7: Full LEGOS (all together)
  FULL: {
    title: "LEGOS COMPLETE",
    instruction: "Now create your own story",
    grid: [
      ['L', '', 'E', '', 'G', '', 'O', '', 'S'],
      ['L', '', 'E', '', 'G', '', 'O', '', 'S'],
      ['L', '', 'E', '', 'G', '', 'O', '', ''],
      ['L', '', 'E', '', 'G', '', 'O', '', 'S'],
      ['L', '', 'E', '', 'G', '', 'O', '', 'S'],
      ['L', '', 'E', '', 'G', '', 'O', '', 'S'],
      ['', '', '', '', '', '', '', '', 'U']
    ],
    entities: [
      { x: 0, y: 0, type: 'Location', symbol: 'L', name: 'Your Canvas' },
      { x: 2, y: 0, type: 'Entity', symbol: 'E', name: 'Your Characters' },
      { x: 4, y: 0, type: 'Goal', symbol: 'G', name: 'Your Quest' },
      { x: 6, y: 0, type: 'Obstacle', symbol: 'O', name: 'Your Challenges' },
      { x: 8, y: 0, type: 'Shift', symbol: 'S', name: 'Your Twists' },
      { x: 8, y: 6, type: 'Solution', symbol: 'U', name: 'Your Resolutions' }
    ],
    highlightButton: null,
    chatPrompt: "Ready! Type your first scene:\n\nA detective investigates a mysterious disappearance"
  },

  // Step 8: Special Commands
  COMMANDS: {
    title: "SPECIAL COMMANDS",
    instruction: "Power features with /commands",
    grid: [
      ['/', 'c', 'u', 'l', 't', 'u', 'r', 'a', 'l'],
      ['', '', '', '', '', '', '', '', ''],
      ['/', 'p', 'e', 'r', 's', 'p', 'e', 'c', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['/', 't', 'e', 't', 'r', 'a', 'd', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['/', 'c', 'o', 'm', 'p', 'a', 'r', 'e', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '']
    ],
    entities: [
      { x: 0, y: 0, type: 'Shift', symbol: '/', name: '/cultural',
        perspective: 'I activate cultural dynamics - agents rebel, cluster, evolve.' },
      { x: 0, y: 2, type: 'Shift', symbol: '/', name: '/perspective',
        perspective: 'I analyze entity viewpoints and generate deep insights.' },
      { x: 0, y: 4, type: 'Shift', symbol: '/', name: '/tetrad',
        perspective: 'I reveal McLuhan patterns - what enhances, obsoletes, retrieves, reverses.' },
      { x: 0, y: 6, type: 'Shift', symbol: '/', name: '/compare',
        perspective: 'I enable Barad diffractive analysis - compare frameworks.' }
    ],
    highlightButton: null,
    chatPrompt: "Try a command:\n\n/cultural spawn\n\nBrings entities to life!"
  }
};

// Tutorial progression controller
export class TutorialController {
  constructor() {
    this.currentStep = 0;
    this.steps = ['L', 'E', 'G', 'O', 'S', 'U', 'FULL', 'COMMANDS'];
    this.completed = false;
  }

  getCurrentScene() {
    const stepKey = this.steps[this.currentStep];
    return tutorialScenes[stepKey];
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      return this.getCurrentScene();
    } else {
      this.completed = true;
      return null;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      return this.getCurrentScene();
    }
    return this.getCurrentScene();
  }

  getProgress() {
    return {
      current: this.currentStep + 1,
      total: this.steps.length,
      percent: ((this.currentStep + 1) / this.steps.length) * 100
    };
  }
}
