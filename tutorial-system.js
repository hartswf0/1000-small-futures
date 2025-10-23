// Tutorial System - LEGOS teaches LEGOS
// Everything happens in chat and grid, no overlays

(function() {
  'use strict';

  console.log('[TUTORIAL] Script loaded');

  // Check if tutorial should start
  const urlParams = new URLSearchParams(window.location.search);
  const shouldStartTutorial = urlParams.get('tutorial') === 'start';
  
  console.log('[TUTORIAL] URL params:', urlParams.toString());
  console.log('[TUTORIAL] Should start:', shouldStartTutorial);

  if (!shouldStartTutorial) {
    console.log('[TUTORIAL] Not starting - no tutorial parameter');
    return;
  }

  // Tutorial state
  let currentStepIndex = 0;
  const tutorialSteps = [
    { letter: 'L', title: 'LOCATION' },
    { letter: 'E', title: 'ENTITY' },
    { letter: 'G', title: 'GOAL' },
    { letter: 'O', title: 'OBSTACLE' },
    { letter: 'S', title: 'SHIFT' },
    { letter: 'U', title: 'SOLUTION' },
    { letter: 'FULL', title: 'COMPLETE' },
    { letter: 'CMD', title: 'COMMANDS' }
  ];

  // Tutorial scene data
  const sceneData = {
    L: {
      pattern: [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[2,5],[3,5],[4,5]],
      message: "LOCATION\n\nThe grid is your narrative canvas\nEach cell holds a story element\n\nClick any L cell to explore"
    },
    E: {
      pattern: [[1,1],[1,2],[1,3],[1,4],[1,5],[2,1],[2,3],[2,5],[3,1],[3,5],[4,1],[4,5]],
      message: "ENTITY\n\nEntities are characters, objects, ideas\nThey have perspectives and relations\n\nType in chat:\nA wise owl in an ancient forest"
    },
    G: {
      pattern: [[2,2],[3,2],[4,2],[5,2],[5,3],[5,4],[5,5],[4,5],[3,5],[3,4],[3,3]],
      message: "GOAL\n\nGoals drive narratives forward\nThey create tension and purpose\n\nTry:\nFind the hidden treasure"
    },
    O: {
      pattern: [[3,2],[4,2],[5,2],[6,2],[6,3],[6,4],[6,5],[5,5],[4,5],[3,5],[3,4],[3,3]],
      message: "OBSTACLE\n\nObstacles create conflict\nThey test characters\n\nTry:\nA locked iron gate"
    },
    S: {
      pattern: [[5,2],[6,2],[7,2],[5,3],[6,4],[7,4],[7,5]],
      message: "SHIFT\n\nShifts transform the story\nReversals, revelations, discoveries\n\nTry:\nThe gate opens to reveal light"
    },
    U: {
      pattern: [[5,3],[5,4],[5,5],[6,5],[7,5],[7,4],[7,3]],
      message: "SOLUTION\n\nSolutions resolve conflicts\nThey complete narrative arcs\n\nTry:\nA golden key unlocks destiny"
    },
    FULL: {
      pattern: [
        [1,1],[1,2],[1,3],[1,4],[1,5], // L
        [3,1],[3,2],[3,3],[3,4],[3,5],[4,1],[4,3],[4,5], // E
        [5,2],[6,2],[7,2],[7,3],[7,4],[7,5],[6,5], // G
      ],
      message: "LEGOS COMPLETE\n\nYou know the elements\nNow create your story\n\nType anything to begin"
    },
    CMD: {
      pattern: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]],
      message: "SPECIAL COMMANDS\n\n/cultural spawn - Living dynamics\n/perspective - Deep analysis\n/tetrad - Pattern breakdown\n\nTry: /cultural help"
    }
  };

  // Wait for app to initialize
  function waitForApp() {
    console.log('[TUTORIAL] Waiting for app...');
    return new Promise((resolve) => {
      let attempts = 0;
      const check = () => {
        attempts++;
        console.log(`[TUTORIAL] Check #${attempts} - channels:`, window.channels?.length || 0);
        
        if (window.channels && window.channels.length > 0) {
          console.log('[TUTORIAL] App ready! Channel found:', window.channels[0]);
          resolve(window.channels[0]);
        } else if (attempts > 50) {
          console.error('[TUTORIAL] Timeout waiting for app');
          resolve(null);
        } else {
          setTimeout(check, 200);
        }
      };
      check();
    });
  }

  // Start tutorial automatically - no overlay, just begin
  async function startTutorial() {
    console.log('[TUTORIAL] Starting tutorial...');
    
    const channel = await waitForApp();
    
    if (!channel) {
      console.error('[TUTORIAL] No channel found, cannot start');
      return;
    }
    
    console.log('[TUTORIAL] Channel ready, showing welcome');
    
    // Welcome message in chat
    showMessage(channel, 
      "LEGOS TUTORIAL\n\n" +
      "Learn by doing\n" +
      "Watch the grid\n\n" +
      "Type 'next' to continue\n" +
      "Type 'skip' to exit"
    );
    
    // Listen for user input
    setupInputListener(channel);
    
    // Show first step
    setTimeout(() => {
      console.log('[TUTORIAL] Showing first step');
      showStep(0, channel);
    }, 1000);
  }

  function setupInputListener(channel) {
    // Intercept chat input to handle tutorial commands
    const originalInput = channel.dom?.input;
    if (!originalInput) return;

    originalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        const value = originalInput.value.trim().toLowerCase();
        
        if (value === 'next' || value === 'n') {
          e.preventDefault();
          originalInput.value = '';
          nextStep(channel);
        } else if (value === 'back' || value === 'b') {
          e.preventDefault();
          originalInput.value = '';
          previousStep(channel);
        } else if (value === 'skip' || value === 'exit') {
          e.preventDefault();
          originalInput.value = '';
          completeTutorial(channel);
        }
      }
    });
  }

  function showStep(index, channel) {
    console.log(`[TUTORIAL] showStep(${index})`);
    currentStepIndex = index;
    
    if (index >= tutorialSteps.length) {
      completeTutorial(channel);
      return;
    }

    const step = tutorialSteps[index];
    const scene = sceneData[step.letter];
    console.log(`[TUTORIAL] Step ${index}: ${step.letter} - ${step.title}`);

    // Clear grid
    clearGrid(channel);

    // Draw letter pattern on grid
    drawPattern(channel, scene.pattern, step.letter);

    // Show message in chat
    const progress = `[${index + 1}/${tutorialSteps.length}]`;
    showMessage(channel, `${progress} ${scene.message}\n\n→ Type 'next' to continue`);
  }

  function clearGrid(channel) {
    console.log('[TUTORIAL] Clearing grid');
    if (!channel || !channel.grid) {
      console.error('[TUTORIAL] No channel or grid');
      return;
    }
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        channel.grid[y][x] = null;
      }
    }
    if (window.renderGrid) {
      console.log('[TUTORIAL] Calling renderGrid');
      window.renderGrid(channel);
    } else {
      console.error('[TUTORIAL] renderGrid not found');
    }
  }

  function drawPattern(channel, pattern, letter) {
    console.log(`[TUTORIAL] Drawing pattern for ${letter}, ${pattern.length} cells`);
    if (!channel || !channel.grid) {
      console.error('[TUTORIAL] No channel or grid for drawing');
      return;
    }
    
    const typeMap = {
      'L': 'Location',
      'E': 'Entity',
      'G': 'Goal',
      'O': 'Obstacle',
      'S': 'Shift',
      'U': 'Solution',
      'FULL': 'Entity',
      'CMD': 'Shift'
    };

    pattern.forEach(([x, y]) => {
      if (x >= 0 && x < 9 && y >= 0 && y < 9) {
        channel.grid[y][x] = {
          type: typeMap[letter] || 'Entity',
          symbol: letter === 'FULL' ? '✦' : (letter === 'CMD' ? '/' : letter),
          label: letter,
          entity: {
            name: `Tutorial ${letter}`,
            perspective: `I am part of the tutorial, teaching you about ${tutorialSteps[currentStepIndex].title}`,
            relations: []
          }
        };
        console.log(`[TUTORIAL] Drew ${letter} at ${x},${y}`);
      }
    });

    if (window.renderGrid) {
      console.log('[TUTORIAL] Calling renderGrid after drawing');
      window.renderGrid(channel);
    } else {
      console.error('[TUTORIAL] renderGrid not found after drawing');
    }
  }

  function showMessage(channel, text) {
    console.log('[TUTORIAL] Showing message:', text.substring(0, 50) + '...');
    if (!channel || !window.addMessageToChannel) {
      console.error('[TUTORIAL] Cannot show message - missing channel or addMessageToChannel');
      return;
    }
    window.addMessageToChannel(channel, 'system', text);
  }

  function nextStep(channel) {
    if (currentStepIndex < tutorialSteps.length - 1) {
      showStep(currentStepIndex + 1, channel);
    } else {
      completeTutorial(channel);
    }
  }

  function previousStep(channel) {
    if (currentStepIndex > 0) {
      showStep(currentStepIndex - 1, channel);
    }
  }

  function completeTutorial(channel) {
    clearGrid(channel);
    
    // Draw completion pattern (✦ symbol)
    const completionPattern = [[4,4]];
    channel.grid[4][4] = {
      type: 'Solution',
      symbol: '✦',
      label: 'COMPLETE',
      entity: {
        name: 'Tutorial Complete',
        perspective: 'You have learned LEGOS. Now create your stories.',
        relations: []
      }
    };
    
    if (window.renderGrid) window.renderGrid(channel);
    
    showMessage(channel, 
      "✦ TUTORIAL COMPLETE\n\n" +
      "You've learned:\n" +
      "L - Locations\n" +
      "E - Entities\n" +
      "G - Goals\n" +
      "O - Obstacles\n" +
      "S - Shifts\n" +
      "U - Solutions\n\n" +
      "Now create your own story\n" +
      "Just type naturally..."
    );
    
    localStorage.setItem('legos_tutorial_complete', 'true');
  }

  // Initialize when DOM ready
  console.log('[TUTORIAL] Setting up initialization...');
  console.log('[TUTORIAL] Document ready state:', document.readyState);
  
  if (document.readyState === 'loading') {
    console.log('[TUTORIAL] Waiting for DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', () => {
      console.log('[TUTORIAL] DOMContentLoaded fired');
      startTutorial();
    });
  } else {
    console.log('[TUTORIAL] DOM already loaded, starting immediately');
    startTutorial();
  }

})();
