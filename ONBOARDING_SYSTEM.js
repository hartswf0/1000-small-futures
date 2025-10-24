/**
 * SIMPLE GUIDED TOUR - Calls actual app functions directly
 * No complex state management, just a linear walkthrough
 */

const GuidedTour = {
  currentStep: 0,
  
  steps: [
    {
      title: 'Welcome to Thousand Tetrad',
      message: 'This is a 5-step tour. We\'ll walk you through the basics.',
      action: null,
      highlight: null
    },
    {
      title: 'Step 1: Store API Key',
      message: 'Click the ◎ button in the top-left corner to store your OpenAI API key.',
      action: () => document.getElementById('cornerKey').click(),
      highlight: '#cornerKey'
    },
    {
      title: 'Step 2: Select Scenario',
      message: 'Choose a scenario from the dropdown at the bottom. Try "Blank Canvas" or "Microdrama".',
      action: null,
      highlight: '#globalScenarioSelect'
    },
    {
      title: 'Step 3: Send a Message',
      message: 'Type in the chat input and press Enter or click the send button.',
      action: null,
      highlight: '.chat-input'
    },
    {
      title: 'Step 4: Apply Tetrad',
      message: 'After the AI responds, click any tetrad chip (Enhance, Reverse, Retrieve, Obsolesce).',
      action: null,
      highlight: '.tetrad-options'
    },
    {
      title: 'Tour Complete!',
      message: 'You\'re ready to explore. Click ? anytime for help.',
      action: null,
      highlight: null
    }
  ],

  init() {
    // Check if already completed
    if (localStorage.getItem('tour.completed')) return;
    
    // Add styles
    this.addStyles();
    
    // Start tour after brief delay
    setTimeout(() => this.showStep(0), 1500);
  },

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .tour-overlay {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(5, 32, 16, 0.98);
        border: 2px solid #56ff9f;
        border-radius: 8px;
        padding: 20px;
        max-width: 300px;
        z-index: 10000;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.9);
        font-family: 'Courier New', monospace;
      }
      
      .tour-step {
        font-size: 9px;
        color: #5ea275;
        letter-spacing: 0.15em;
        margin-bottom: 8px;
      }
      
      .tour-title {
        font-size: 13px;
        font-weight: 700;
        color: #56ff9f;
        margin-bottom: 12px;
      }
      
      .tour-message {
        font-size: 11px;
        line-height: 1.6;
        color: #aef3c1;
        margin-bottom: 16px;
      }
      
      .tour-actions {
        display: flex;
        gap: 8px;
      }
      
      .tour-btn {
        flex: 1;
        padding: 10px;
        background: #56ff9f;
        border: none;
        color: #03180c;
        font-family: inherit;
        font-size: 10px;
        font-weight: 700;
        cursor: pointer;
        border-radius: 4px;
      }
      
      .tour-btn.secondary {
        background: transparent;
        border: 1px solid #56ff9f;
        color: #56ff9f;
      }
      
      .tour-highlight {
        position: fixed;
        border: 3px solid #56ff9f;
        border-radius: 8px;
        pointer-events: none;
        z-index: 9999;
        animation: tour-pulse 2s ease-in-out infinite;
        box-shadow: 0 0 20px rgba(86, 255, 159, 0.5);
      }
      
      @keyframes tour-pulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.02); }
      }
    `;
    document.head.appendChild(style);
  },

  showStep(index) {
    this.currentStep = index;
    const step = this.steps[index];
    
    // Remove old overlay and highlight
    const oldOverlay = document.getElementById('tourOverlay');
    const oldHighlight = document.getElementById('tourHighlight');
    if (oldOverlay) oldOverlay.remove();
    if (oldHighlight) oldHighlight.remove();
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'tourOverlay';
    overlay.className = 'tour-overlay';
    overlay.innerHTML = `
      <div class="tour-step">STEP ${index + 1}/${this.steps.length}</div>
      <div class="tour-title">${step.title}</div>
      <div class="tour-message">${step.message}</div>
      <div class="tour-actions">
        <button class="tour-btn secondary" onclick="GuidedTour.skip()">SKIP</button>
        ${step.action ? 
          `<button class="tour-btn" onclick="GuidedTour.doAction()">DO IT</button>` :
          `<button class="tour-btn" onclick="GuidedTour.next()">NEXT</button>`
        }
      </div>
    `;
    document.body.appendChild(overlay);
    
    // Add highlight if target exists
    if (step.highlight) {
      setTimeout(() => this.highlightElement(step.highlight), 100);
    }
  },

  highlightElement(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    
    const rect = target.getBoundingClientRect();
    const highlight = document.createElement('div');
    highlight.id = 'tourHighlight';
    highlight.className = 'tour-highlight';
    highlight.style.top = rect.top + 'px';
    highlight.style.left = rect.left + 'px';
    highlight.style.width = rect.width + 'px';
    highlight.style.height = rect.height + 'px';
    document.body.appendChild(highlight);
  },

  doAction() {
    const step = this.steps[this.currentStep];
    if (step.action) {
      step.action(); // Call the actual function!
    }
    setTimeout(() => this.next(), 500);
  },

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.showStep(this.currentStep + 1);
    } else {
      this.complete();
    }
  },

  skip() {
    if (confirm('Skip the tour?')) {
      this.complete();
    }
  },

  complete() {
    const overlay = document.getElementById('tourOverlay');
    const highlight = document.getElementById('tourHighlight');
    if (overlay) overlay.remove();
    if (highlight) highlight.remove();
    localStorage.setItem('tour.completed', 'true');
  }
};

// Auto-start on first run
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => GuidedTour.init());
} else {
  GuidedTour.init();
}

window.GuidedTour = GuidedTour;
