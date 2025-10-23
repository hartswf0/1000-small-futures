// Tutorial Overlay System for Thousand Small Futures
// Add to thousand-medical.html with: <script src="tutorial-overlay.js"></script>

(function() {
  'use strict';

  // Check if tutorial should start
  const urlParams = new URLSearchParams(window.location.search);
  const startTutorial = urlParams.get('tutorial') === 'start' || 
                        localStorage.getItem('thousand_tutorial_shown') !== 'true';

  if (!startTutorial) return;

  // Tutorial state
  let currentStep = 0;
  const totalSteps = 10;

  // Tutorial steps
  const steps = [
    {
      title: "Welcome",
      description: "This is LEGOS Medical Training\nA narrative simulation system",
      target: "body",
      position: "center"
    },
    {
      title: "The Grid",
      description: "Your 9×9 narrative canvas\nEach cell holds story elements",
      target: ".channel-grid",
      position: "right"
    },
    {
      title: "Chat Interface",
      description: "Type naturally or use commands\nCommands start with /",
      target: ".channel-chat",
      position: "left"
    },
    {
      title: "Create Your First Scene",
      description: "Type:\n\nA knight meets a dragon in a mountain cave",
      target: ".chat-input",
      position: "top",
      waitForInput: true,
      pattern: /knight|dragon|cave/i
    },
    {
      title: "LEGOS Entities",
      description: "Your words became living entities\nEach has unique perspective",
      target: ".channel-grid",
      position: "right"
    },
    {
      title: "Explore Perspectives",
      description: "Click any entity\nto see its perspective",
      target: ".grid-cell",
      position: "right",
      waitForClick: ".grid-cell"
    },
    {
      title: "Entity Details",
      description: "Each entity sees the world uniquely\nRelations connect them",
      target: ".cell-overlay",
      position: "left"
    },
    {
      title: "Branch The Story",
      description: "Add new element:\n\nA wizard appears with a magical sword",
      target: ".chat-input",
      position: "top",
      waitForInput: true,
      pattern: /wizard|sword|magical/i
    },
    {
      title: "Special Commands",
      description: "/cultural spawn - activate dynamics\n/perspective - deep analysis\n/tetrad - pattern breakdown",
      target: ".chat-input",
      position: "top"
    },
    {
      title: "You're Ready",
      description: "Explore all features\nCreate living narratives",
      target: "body",
      position: "center"
    }
  ];

  // Create tutorial UI
  function createTutorialUI() {
    // Tutorial overlay
    const overlay = document.createElement('div');
    overlay.id = 'tutorialOverlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(4, 20, 12, 0.88);
      backdrop-filter: blur(8px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    // Welcome screen
    const welcome = document.createElement('div');
    welcome.style.cssText = `
      background: #052010;
      border: 2px solid #1b6e3e;
      border-radius: 8px;
      padding: 48px 32px;
      max-width: 520px;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
      font-family: 'Courier New', monospace;
    `;
    
    welcome.innerHTML = `
      <div style="font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #56ff9f; letter-spacing: 0.02em;">
        THOUSAND SMALL FUTURES
      </div>
      <div style="font-size: 14px; color: #5ea275; margin-bottom: 32px; line-height: 1.6;">
        Narrative simulation system<br>
        Interactive tutorial: 5 minutes
      </div>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button id="tutorialStart" style="padding: 12px 24px; border: 1px solid #56ff9f; border-radius: 4px; background: #56ff9f; color: #03180c; font-family: 'Courier New', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;">
          BEGIN TUTORIAL
        </button>
        <button id="tutorialSkip" style="padding: 12px 24px; border: 1px solid #0c3a23; border-radius: 4px; background: #03140d; color: #5ea275; font-family: 'Courier New', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;">
          SKIP
        </button>
      </div>
    `;

    overlay.appendChild(welcome);
    document.body.appendChild(overlay);

    // Progress bar
    const progress = document.createElement('div');
    progress.id = 'tutorialProgress';
    progress.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #03140d;
      z-index: 10003;
      display: none;
    `;
    progress.innerHTML = '<div id="progressFill" style="height: 100%; background: #56ff9f; width: 0%; transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);"></div>';
    document.body.appendChild(progress);

    // Spotlight
    const spotlight = document.createElement('div');
    spotlight.id = 'tutorialSpotlight';
    spotlight.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      border: 2px solid #56ff9f;
      border-radius: 4px;
      box-shadow: 0 0 0 9999px rgba(4, 20, 12, 0.88), 0 0 24px rgba(86, 255, 159, 0.32);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      display: none;
    `;
    document.body.appendChild(spotlight);

    // Step container
    const stepContainer = document.createElement('div');
    stepContainer.id = 'tutorialStep';
    stepContainer.style.cssText = `
      position: fixed;
      background: #052010;
      border: 2px solid #1b6e3e;
      border-radius: 6px;
      padding: 20px;
      max-width: 380px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
      z-index: 10001;
      opacity: 0;
      transform: scale(0.95);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: none;
      font-family: 'Courier New', monospace;
    `;
    document.body.appendChild(stepContainer);

    // Event listeners
    document.getElementById('tutorialStart').addEventListener('click', startTutorial);
    document.getElementById('tutorialSkip').addEventListener('click', skipTutorial);

    // Show overlay
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 100);
  }

  function startTutorial() {
    document.getElementById('tutorialOverlay').querySelector('div').style.display = 'none';
    document.getElementById('tutorialProgress').style.display = 'block';
    showStep(0);
  }

  function skipTutorial() {
    document.getElementById('tutorialOverlay').remove();
    document.getElementById('tutorialProgress').remove();
    document.getElementById('tutorialSpotlight').remove();
    document.getElementById('tutorialStep').remove();
    localStorage.setItem('thousand_tutorial_shown', 'true');
  }

  function showStep(index) {
    currentStep = index;
    updateProgress();

    if (index >= steps.length) {
      completeTutorial();
      return;
    }

    const step = steps[index];
    const stepEl = document.getElementById('tutorialStep');
    
    stepEl.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div style="background: #56ff9f; color: #03180c; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px;">
          ${index + 1}
        </div>
        <div id="stepSkip" style="color: #5ea275; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;">
          SKIP
        </div>
      </div>
      <div style="font-size: 16px; font-weight: 600; margin-bottom: 10px; color: #aef3c1;">
        ${step.title}
      </div>
      <div style="color: #5ea275; line-height: 1.5; margin-bottom: 16px; font-size: 12px;">
        ${step.description.replace(/\n/g, '<br>')}
      </div>
      ${!step.waitForInput && !step.waitForClick ? `
        <div style="display: flex; gap: 8px;">
          ${index > 0 ? '<button id="stepBack" style="padding: 12px 24px; border: 1px solid #0c3a23; border-radius: 4px; background: #03140d; color: #5ea275; font-family: \'Courier New\', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;">BACK</button>' : ''}
          <button id="stepNext" style="flex: 1; padding: 12px 24px; border: 1px solid #56ff9f; border-radius: 4px; background: #56ff9f; color: #03180c; font-family: \'Courier New\', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;">NEXT</button>
        </div>
      ` : ''}
    `;

    // Position step
    positionStep(stepEl, step);
    
    // Show step
    stepEl.style.display = 'block';
    setTimeout(() => {
      stepEl.style.opacity = '1';
      stepEl.style.transform = 'scale(1)';
    }, 50);

    // Highlight target
    if (step.target !== 'body') {
      highlightElement(step.target);
    }

    // Event listeners
    document.getElementById('stepSkip')?.addEventListener('click', skipTutorial);
    document.getElementById('stepNext')?.addEventListener('click', () => showStep(index + 1));
    document.getElementById('stepBack')?.addEventListener('click', () => showStep(index - 1));
  }

  function positionStep(el, step) {
    if (step.position === 'center') {
      el.style.top = '50%';
      el.style.left = '50%';
      el.style.transform = 'translate(-50%, -50%)';
      return;
    }

    const target = document.querySelector(step.target);
    if (!target) {
      el.style.top = '50%';
      el.style.left = '50%';
      el.style.transform = 'translate(-50%, -50%)';
      return;
    }

    const rect = target.getBoundingClientRect();
    
    switch (step.position) {
      case 'right':
        el.style.left = `${rect.right + 24}px`;
        el.style.top = `${rect.top + rect.height / 2}px`;
        el.style.transform = 'translateY(-50%)';
        break;
      case 'left':
        el.style.right = `${window.innerWidth - rect.left + 24}px`;
        el.style.top = `${rect.top + rect.height / 2}px`;
        el.style.transform = 'translateY(-50%)';
        break;
      case 'top':
        el.style.left = `${rect.left + rect.width / 2}px`;
        el.style.bottom = `${window.innerHeight - rect.top + 24}px`;
        el.style.transform = 'translateX(-50%)';
        break;
    }
  }

  function highlightElement(selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    const spotlight = document.getElementById('tutorialSpotlight');
    const rect = element.getBoundingClientRect();
    
    spotlight.style.left = `${rect.left - 8}px`;
    spotlight.style.top = `${rect.top - 8}px`;
    spotlight.style.width = `${rect.width + 16}px`;
    spotlight.style.height = `${rect.height + 16}px`;
    spotlight.style.display = 'block';
    spotlight.style.opacity = '1';
  }

  function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
  }

  function completeTutorial() {
    const stepEl = document.getElementById('tutorialStep');
    stepEl.innerHTML = `
      <div style="text-align: center; padding: 28px 12px;">
        <div style="font-size: 64px; margin-bottom: 20px;">✦</div>
        <div style="font-size: 32px; font-weight: 700; margin-bottom: 12px; color: #56ff9f;">
          TUTORIAL COMPLETE
        </div>
        <div style="color: #5ea275; margin-bottom: 32px; font-size: 14px;">
          You're ready to create
        </div>
        <button id="tutorialFinish" style="padding: 12px 24px; border: 1px solid #56ff9f; border-radius: 4px; background: #56ff9f; color: #03180c; font-family: 'Courier New', monospace; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;">
          START CREATING
        </button>
      </div>
    `;

    document.getElementById('tutorialFinish').addEventListener('click', skipTutorial);
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTutorialUI);
  } else {
    createTutorialUI();
  }

})();
