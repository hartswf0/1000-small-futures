/**
 * GUIDED TOUR with FAKE CURSOR
 * Based on: Cognitive Load Theory, Training Wheels, Direct Manipulation
 * 
 * Principles:
 * - Minimize extraneous cognitive load
 * - Progressive disclosure (3-7 features max initially)
 * - Action-oriented learning (do real tasks)
 * - Guided discovery (not pure exploration)
 * - Fake cursor shows exactly where to click
 */

const GuidedTour = {
  step: 0,
  cursor: null,
  overlay: null,
  
  // SIMPLIFIED FLOW - Focus on core actions only
  steps: [
    {
      title: 'Welcome to Thousand Tetrad',
      text: 'This 60-second tour shows you the 4 core actions. Watch the cursor, then try it yourself.',
      target: null,
      action: 'next'
    },
    {
      title: 'Your API Key',
      text: 'Paste your OpenAI key here. Get one at platform.openai.com/api-keys',
      target: '#cornerKey',
      demoClick: true,
      action: 'wait-for-key',
      help: 'Copy: sk-proj-... and paste it in the overlay'
    },
    {
      title: 'Pick a Scenario',
      text: 'Choose "Microdrama" from the dropdown',
      target: '#globalScenarioSelect',
      demoClick: true,
      demoValue: 'microdrama',
      action: 'demo-select'
    },
    {
      title: 'Send a Message',
      text: 'Type anything and press Enter',
      target: '.chat-input',
      demoClick: true,
      demoType: 'A character faces a moral dilemma',
      action: 'demo-send'
    },
    {
      title: 'Apply Tetrad Analysis',
      text: 'After AI responds, click any tetrad chip',
      target: '.tetrad-chip',
      demoClick: true,
      action: 'demo-tetrad'
    },
    {
      title: 'Grid Cell Menu',
      text: 'Right-click any grid cell to place entities',
      target: '.grid-cell',
      demoClick: true,
      demoRightClick: true,
      action: 'demo-grid'
    },
    {
      title: 'You\'re Ready!',
      text: 'Those are the core actions. Explore the rest yourself. Click ? for help anytime.',
      target: null,
      action: 'complete'
    }
  ],

  init() {
    console.log('[GUIDED TOUR] Initializing...');
    console.log('[GUIDED TOUR] Tour done flag:', localStorage.getItem('tour.done'));
    
    if (localStorage.getItem('tour.done')) {
      console.log('[GUIDED TOUR] Tour already completed. Click ? → START TOUR to restart.');
      return;
    }
    
    console.log('[GUIDED TOUR] Adding styles and cursor...');
    this.addStyles();
    this.createCursor();
    
    // Wait for page to settle
    console.log('[GUIDED TOUR] Will start in 2 seconds...');
    setTimeout(() => {
      console.log('[GUIDED TOUR] Starting now!');
      this.show(0);
    }, 2000);
  },

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Minimal overlay - doesn't block interface */
      .tour-card {
        position: fixed;
        top: 80px;
        right: 20px;
        width: 280px;
        background: rgba(5, 32, 16, 0.98);
        border: 2px solid #56ff9f;
        border-radius: 8px;
        padding: 16px;
        z-index: 10000;
        box-shadow: 0 8px 32px rgba(0,0,0,0.9);
        font-family: 'Courier New', monospace;
      }
      
      .tour-step { font-size: 9px; color: #5ea275; letter-spacing: 0.15em; margin-bottom: 6px; }
      .tour-title { font-size: 12px; font-weight: 700; color: #56ff9f; margin-bottom: 8px; }
      .tour-text { font-size: 10px; line-height: 1.5; color: #aef3c1; margin-bottom: 8px; }
      .tour-help { font-size: 9px; color: #5ea275; font-style: italic; margin-bottom: 12px; }
      
      .tour-actions { display: flex; gap: 6px; }
      .tour-btn {
        flex: 1;
        padding: 8px;
        background: #56ff9f;
        border: none;
        color: #03180c;
        font-family: inherit;
        font-size: 9px;
        font-weight: 700;
        cursor: pointer;
        border-radius: 4px;
        letter-spacing: 0.05em;
      }
      .tour-btn.secondary { background: transparent; border: 1px solid #56ff9f; color: #56ff9f; }
      
      /* Spotlight - subtle, doesn't block */
      .tour-spotlight {
        position: fixed;
        border: 3px solid #56ff9f;
        border-radius: 8px;
        pointer-events: none;
        z-index: 9999;
        animation: pulse 2s ease-in-out infinite;
        box-shadow: 0 0 20px rgba(86,255,159,0.6);
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.03); }
      }
      
      /* Fake cursor - shows where to click */
      .tour-cursor {
        position: fixed;
        width: 24px;
        height: 24px;
        pointer-events: none;
        z-index: 10001;
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .tour-cursor::before {
        content: '→';
        font-size: 24px;
        color: #56ff9f;
        text-shadow: 0 0 10px rgba(86,255,159,0.8);
      }
      
      .tour-cursor.clicking::before {
        content: '✓';
        animation: click-pulse 0.3s ease-out;
      }
      
      @keyframes click-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.5); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  },

  createCursor() {
    this.cursor = document.createElement('div');
    this.cursor.className = 'tour-cursor';
    document.body.appendChild(this.cursor);
  },

  show(index) {
    this.step = index;
    const step = this.steps[index];
    
    // Remove old UI
    this.cleanup();
    
    // Create card
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.id = 'tourCard';
    card.innerHTML = `
      <div class="tour-step">STEP ${index + 1}/${this.steps.length}</div>
      <div class="tour-title">${step.title}</div>
      <div class="tour-text">${step.text}</div>
      ${step.help ? `<div class="tour-help">${step.help}</div>` : ''}
      <div class="tour-actions">
        <button class="tour-btn secondary" onclick="GuidedTour.skip()">SKIP</button>
        ${step.action === 'next' ? '<button class="tour-btn" onclick="GuidedTour.next()">START</button>' : ''}
        ${step.action.startsWith('demo-') ? '<button class="tour-btn" onclick="GuidedTour.demo()">SHOW ME</button>' : ''}
        ${step.action.startsWith('demo-') ? '<button class="tour-btn secondary" onclick="GuidedTour.next()">NEXT →</button>' : ''}
        ${step.action === 'wait-for-key' ? '<button class="tour-btn" onclick="GuidedTour.next()">NEXT →</button>' : ''}
        ${step.action === 'complete' ? '<button class="tour-btn" onclick="GuidedTour.complete()">DONE</button>' : ''}
      </div>
    `;
    document.body.appendChild(card);
    
    // Highlight target
    if (step.target) {
      setTimeout(() => this.highlight(step.target), 100);
    }
  },

  highlight(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    
    const rect = target.getBoundingClientRect();
    const spot = document.createElement('div');
    spot.className = 'tour-spotlight';
    spot.id = 'tourSpot';
    spot.style.top = rect.top + 'px';
    spot.style.left = rect.left + 'px';
    spot.style.width = rect.width + 'px';
    spot.style.height = rect.height + 'px';
    document.body.appendChild(spot);
  },

  // DEMO MODE - Fake cursor shows action
  async demo() {
    const step = this.steps[this.step];
    const target = document.querySelector(step.target);
    if (!target) {
      alert('Element not ready yet. Try clicking manually.');
      return;
    }
    
    // Move cursor to target
    const rect = target.getBoundingClientRect();
    this.cursor.style.opacity = '1';
    this.cursor.style.left = (rect.left - 30) + 'px';
    this.cursor.style.top = (rect.top + rect.height/2 - 12) + 'px';
    
    // Wait for user to see cursor
    await this.wait(1000);
    
    // Animate click
    this.cursor.classList.add('clicking');
    await this.wait(300);
    this.cursor.classList.remove('clicking');
    
    // Perform action
    if (step.demoClick) {
      if (step.demoRightClick) {
        // Right-click simulation
        target.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
      } else {
        target.click();
      }
    }
    
    if (step.demoValue) {
      target.value = step.demoValue;
      target.dispatchEvent(new Event('change', { bubbles: true }));
    }
    
    if (step.demoType) {
      target.value = step.demoType;
      target.dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    // Hide cursor
    await this.wait(500);
    this.cursor.style.opacity = '0';
    
    // Don't auto-advance - let user click NEXT when ready
  },

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  next() {
    if (this.step < this.steps.length - 1) {
      this.show(this.step + 1);
    } else {
      this.complete();
    }
  },

  skip() {
    if (confirm('Skip tour? You can restart anytime by clearing localStorage.')) {
      this.complete();
    }
  },

  complete() {
    this.cleanup();
    localStorage.setItem('tour.done', 'true');
  },

  cleanup() {
    const card = document.getElementById('tourCard');
    const spot = document.getElementById('tourSpot');
    if (card) card.remove();
    if (spot) spot.remove();
    if (this.cursor) this.cursor.style.opacity = '0';
  }
};

// Auto-start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => GuidedTour.init());
} else {
  GuidedTour.init();
}

window.GuidedTour = GuidedTour;
