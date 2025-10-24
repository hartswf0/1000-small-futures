/**
 * CONTEXTUAL GUIDED TOUR
 * Every popup menu triggers its own bespoke tutorial on first appearance
 */

const ContextualTour = {
  shown: {},
  currentTooltip: null,
  
  init() {
    console.log('[CONTEXTUAL TOUR] Initializing...');
    this.shown = JSON.parse(localStorage.getItem('contextual.shown') || '{}');
    
    // Show chat input tooltip after 3 seconds
    setTimeout(() => {
      if (!this.shown.chatInput) {
        this.showChatInputTooltip();
      }
    }, 3000);
    
    // Watch for ALL menus and overlays
    this.watchForMenus();
  },
  
  watchForMenus() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            
            // GRID CELL MENU
            if (node.classList?.contains('cell-menu')) {
              if (!this.shown.cellMenu) {
                setTimeout(() => this.showCellMenuTooltip(node), 300);
              }
            }
            
            // PERSPECTIVE OVERLAY
            if (node.id === 'perspectiveOverlay' || node.classList?.contains('perspective-overlay')) {
              if (!this.shown.perspectiveOverlay) {
                setTimeout(() => this.showPerspectiveTooltip(node), 300);
              }
            }
            
            // API KEY OVERLAY
            if (node.id === 'keyOverlay') {
              if (!this.shown.keyOverlay) {
                setTimeout(() => this.showKeyOverlayTooltip(node), 300);
              }
            }
            
            // HELP MENU (corner menu)
            if (node.id === 'infoMenu' && node.classList.contains('visible')) {
              if (!this.shown.infoMenu) {
                setTimeout(() => this.showInfoMenuTooltip(node), 300);
              }
            }
            
            // EXCHANGE MENU (import/export)
            if (node.id === 'exchangeMenu' && node.classList.contains('visible')) {
              if (!this.shown.exchangeMenu) {
                setTimeout(() => this.showExchangeMenuTooltip(node), 300);
              }
            }
            
            // PERSPECTIVE SELECTOR DROPDOWN
            if (node.id === 'perspectiveSelector') {
              if (!this.shown.perspectiveSelector) {
                setTimeout(() => this.showPerspectiveSelectorTooltip(node), 300);
              }
            }
            
            // TETRAD OPTIONS (chips)
            if (node.classList?.contains('tetrad-options')) {
              if (!this.shown.tetradOptions) {
                setTimeout(() => this.showTetradOptionsTooltip(node), 300);
              }
            }
            
            // SNAPSHOT MENU
            if (node.classList?.contains('snapshot-menu')) {
              if (!this.shown.snapshotMenu) {
                setTimeout(() => this.showSnapshotMenuTooltip(node), 300);
              }
            }
            
            // CHANNEL HEADER MENU
            if (node.classList?.contains('channel-header-menu')) {
              if (!this.shown.channelHeaderMenu) {
                setTimeout(() => this.showChannelHeaderMenuTooltip(node), 300);
              }
            }
          }
        });
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('[CONTEXTUAL TOUR] Watching for all menus...');
  },
  
  // ========== TOOLTIP DEFINITIONS ==========
  
  showChatInputTooltip() {
    const input = document.querySelector('.message-input');
    if (!input) return;
    
    this.showTooltip({
      key: 'chatInput',
      title: 'Send a Message',
      text: 'Type what happens next. Use LEGOS:\n• Location - Where things happen\n• Entity - Who/What\n• Goal - What they want\n• Obstacle - What blocks them\n• Shift - Transformations\n• Solution - Resolutions\n\nThe AI will update the grid.',
      target: input,
      position: 'top'
    });
  },
  
  showCellMenuTooltip(menu) {
    this.showTooltip({
      key: 'cellMenu',
      title: '🎯 Grid Cell Menu',
      text: 'This entity has 4 powerful actions:\n\n📤 SEND TO CHAT\nAdd this entity to your next message\n\n🌀 SPAWN POV CHANNEL\nCreate new channel from this entity\'s perspective\n\n💡 RUN ELEMENT PERSPECTIVE (Green)\nDeep analysis: emotional state, plot impact, next action, local awareness, relationships\n\n⋔ TETRAD INTERVENTION (Red)\nApply McLuhan\'s Four Laws:\n• Enhance - What it amplifies\n• Reverse - What it flips into\n• Retrieve - What it brings back\n• Obsolesce - What it replaces\n\nClick any button to try it!',
      target: menu,
      position: 'left'
    });
  },
  
  showPerspectiveTooltip(overlay) {
    this.showTooltip({
      key: 'perspectiveOverlay',
      title: 'Perspective Analysis',
      text: 'Deep analysis of this entity:\n\n• EMOTIONAL STATE - How they feel\n• PLOT IMPACT - Story significance\n• NEXT ACTION - What they might do\n• LOCAL AWARENESS - What they perceive\n• RELATIONAL PROBABILITIES - Connections to other entities\n\nButtons:\n• ⋔ GENERATE TETRAD FROM PERSPECTIVE - Tetrad based on their viewpoint\n• SEND TO CHAT - Add analysis to message\n• FORK POV CHANNEL - New channel exploring this perspective',
      target: overlay,
      position: 'top'
    });
  },
  
  showKeyOverlayTooltip(overlay) {
    this.showTooltip({
      key: 'keyOverlay',
      title: 'API Key Storage',
      text: 'Store your OpenAI API key:\n\n1. Get key from platform.openai.com/api-keys\n2. Copy the key (starts with sk-proj-...)\n3. Paste it here\n4. Click SAVE\n\nYour key is stored locally in your browser, never sent to our servers.',
      target: overlay,
      position: 'center'
    });
  },
  
  showInfoMenuTooltip(menu) {
    this.showTooltip({
      key: 'infoMenu',
      title: 'Help Menu',
      text: 'Options:\n\n• ▶ START TOUR - Guided walkthrough\n• HELP OVERVIEW - Quick tips\n• TOGGLE THEME - Change colors\n• FULLSCREEN MODE - Expand view\n• RESET ALL CHATS - Clear everything',
      target: menu,
      position: 'bottom'
    });
  },
  
  showExchangeMenuTooltip(menu) {
    this.showTooltip({
      key: 'exchangeMenu',
      title: 'Import / Export',
      text: 'Save or load your work:\n\n• EXPORT SESSION - Download as JSON file (includes all channels, messages, grid state)\n• IMPORT SESSION - Load previously saved session\n\nUse this to backup your work or share scenarios.',
      target: menu,
      position: 'top'
    });
  },
  
  showPerspectiveSelectorTooltip(selector) {
    this.showTooltip({
      key: 'perspectiveSelector',
      title: '👁 Select Perspective',
      text: 'Choose which entity\'s viewpoint to use for tetrad generation.\n\nThe tetrad will analyze from THEIR perspective, not neutral.\n\nDifferent perspectives = different insights.\n\nShows entities currently on the grid.',
      target: selector,
      position: 'bottom'
    });
  },
  
  showTetradOptionsTooltip(options) {
    this.showTooltip({
      key: 'tetradOptions',
      title: 'Tetrad Options',
      text: 'McLuhan\'s Four Laws of Media:\n\n• ENHANCE - What does it amplify or intensify?\n• REVERSE - What does it flip into when pushed to extremes?\n• RETRIEVE - What does it bring back from the past?\n• OBSOLESCE - What does it replace or make obsolete?\n\nClick any chip to explore that aspect.\nEach has steering arrows (→ ↗ ↔ ⋔) for deeper exploration.',
      target: options,
      position: 'top'
    });
  },
  
  showSnapshotMenuTooltip(menu) {
    this.showTooltip({
      key: 'snapshotMenu',
      title: 'Snapshot Menu',
      text: 'Time-travel through your story:\n\n• CREATE SNAPSHOT - Save current state\n• RESTORE - Go back to saved point\n• DELETE - Remove snapshot\n\nSnapshots preserve:\n• Grid state\n• Messages\n• Entity positions\n• Scene context',
      target: menu,
      position: 'right'
    });
  },
  
  showChannelHeaderMenuTooltip(menu) {
    this.showTooltip({
      key: 'channelHeaderMenu',
      title: 'Channel Options',
      text: 'Manage this channel:\n\n• ⋔ TETRAD MODE - Auto-generate tetrad for every scene\n• RESET CHAT - Clear messages (keep grid)\n• COLLAPSE - Minimize channel\n• RENAME - Change channel name\n• DELETE - Remove channel',
      target: menu,
      position: 'bottom'
    });
  },
  
  // ========== CORE TOOLTIP SYSTEM ==========
  
  showTooltip({ key, title, text, target, position }) {
    if (!target) return;
    
    console.log('[CONTEXTUAL TOUR] Showing:', key);
    
    // Remove any existing tooltip
    if (this.currentTooltip) {
      this.currentTooltip.remove();
    }
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'contextual-tooltip';
    tooltip.innerHTML = `
      <div class="contextual-tooltip-title">${title}</div>
      <div class="contextual-tooltip-text">${text}</div>
      <button class="contextual-tooltip-btn" onclick="ContextualTour.dismiss('${key}')">GOT IT</button>
    `;
    
    // Position tooltip
    const rect = target.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.zIndex = '10003';
    
    if (position === 'center') {
      tooltip.style.left = '50%';
      tooltip.style.top = '50%';
      tooltip.style.transform = 'translate(-50%, -50%)';
    } else {
      switch(position) {
        case 'top':
          tooltip.style.left = Math.max(10, rect.left) + 'px';
          tooltip.style.bottom = (window.innerHeight - rect.top + 10) + 'px';
          break;
        case 'bottom':
          tooltip.style.left = Math.max(10, rect.left) + 'px';
          tooltip.style.top = (rect.bottom + 10) + 'px';
          break;
        case 'left':
          tooltip.style.right = (window.innerWidth - rect.left + 10) + 'px';
          tooltip.style.top = Math.max(10, rect.top) + 'px';
          break;
        case 'right':
          tooltip.style.left = (rect.right + 10) + 'px';
          tooltip.style.top = Math.max(10, rect.top) + 'px';
          break;
      }
    }
    
    document.body.appendChild(tooltip);
    this.currentTooltip = tooltip;
    
    // Mark as shown
    this.shown[key] = true;
    localStorage.setItem('contextual.shown', JSON.stringify(this.shown));
  },
  
  dismiss(key) {
    console.log('[CONTEXTUAL TOUR] Dismissed:', key);
    if (this.currentTooltip) {
      this.currentTooltip.remove();
      this.currentTooltip = null;
    }
  },
  
  reset() {
    localStorage.removeItem('contextual.shown');
    this.shown = {};
    if (this.currentTooltip) {
      this.currentTooltip.remove();
      this.currentTooltip = null;
    }
    console.log('[CONTEXTUAL TOUR] Reset complete - all tooltips will show again');
  }
};

// Add styles
const style = document.createElement('style');
style.textContent = `
  .contextual-tooltip {
    background: rgba(5, 32, 16, 0.98);
    border: 2px solid #56ff9f;
    border-radius: 8px;
    padding: 18px;
    max-width: 380px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.9);
    font-family: 'Courier New', monospace;
    animation: tooltip-appear 0.3s ease-out;
  }
  
  @keyframes tooltip-appear {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .contextual-tooltip-title {
    font-size: 13px;
    font-weight: 700;
    color: #56ff9f;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
  }
  
  .contextual-tooltip-text {
    font-size: 10px;
    line-height: 1.7;
    color: #aef3c1;
    margin-bottom: 14px;
    white-space: pre-line;
  }
  
  .contextual-tooltip-btn {
    width: 100%;
    padding: 10px;
    background: #56ff9f;
    border: none;
    color: #03180c;
    font-family: inherit;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 0.1em;
    transition: all 0.2s;
  }
  
  .contextual-tooltip-btn:hover {
    background: #6affaf;
    transform: scale(1.02);
  }
`;
document.head.appendChild(style);

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ContextualTour.init());
} else {
  ContextualTour.init();
}

window.ContextualTour = ContextualTour;

console.log('[CONTEXTUAL TOUR] Script loaded - All menus will trigger bespoke tutorials');
