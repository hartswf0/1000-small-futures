/**
 * CONTEXTUAL GUIDED TOUR - COMPLETE COVERAGE
 * NO ACTION UNTUTORED - Every interactive element gets a tutorial
 */

const ContextualTour = {
  shown: {},
  currentTooltip: null,
  clickListeners: [],
  
  init() {
    console.log('[CONTEXTUAL TOUR] Initializing complete coverage...');
    this.shown = JSON.parse(localStorage.getItem('contextual.shown') || '{}');
    
    // Show chat input tooltip after 3 seconds
    setTimeout(() => {
      if (!this.shown.chatInput) {
        this.showChatInputTooltip();
      }
    }, 3000);
    
    // Watch for ALL menus and overlays
    this.watchForMenus();
    
    // Watch for clickable elements
    this.watchForClickables();
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
            
            // HELP MENU
            if (node.id === 'infoMenu' && node.classList.contains('visible')) {
              if (!this.shown.infoMenu) {
                setTimeout(() => this.showInfoMenuTooltip(node), 300);
              }
            }
            
            // EXCHANGE MENU
            if (node.id === 'exchangeMenu' && node.classList.contains('visible')) {
              if (!this.shown.exchangeMenu) {
                setTimeout(() => this.showExchangeMenuTooltip(node), 300);
              }
            }
            
            // MESSAGE FORK MENU (when clicking message)
            if (node.classList?.contains('message-fork-menu')) {
              if (!this.shown.messageForkMenu) {
                setTimeout(() => this.showMessageForkMenuTooltip(node), 300);
              }
            }
            
            // TETRAD CHIPS
            if (node.classList?.contains('tetrad-chip') && !this.shown.tetradChips) {
              setTimeout(() => this.showTetradChipsTooltip(node), 300);
            }
            
            // GRID CELLS (first time one appears)
            if (node.classList?.contains('grid-cell') && node.textContent.trim() && !this.shown.gridCells) {
              setTimeout(() => this.showGridCellsTooltip(node), 300);
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
  
  watchForClickables() {
    // Watch for first message click
    document.addEventListener('click', (e) => {
      // Message click
      if (e.target.closest('.message-item') && !this.shown.messageClick) {
        const msg = e.target.closest('.message-item');
        if (!msg.classList.contains('system-message')) {
          this.shown.messageClick = true;
          localStorage.setItem('contextual.shown', JSON.stringify(this.shown));
          setTimeout(() => this.showMessageClickTooltip(msg), 100);
        }
      }
      
      // Send button click
      if (e.target.closest('.send-btn') && !this.shown.sendButton) {
        this.shown.sendButton = true;
        localStorage.setItem('contextual.shown', JSON.stringify(this.shown));
      }
      
      // Grid cell click (first time)
      if (e.target.closest('.grid-cell') && !this.shown.gridCellClick) {
        const cell = e.target.closest('.grid-cell');
        if (cell.textContent.trim()) {
          this.shown.gridCellClick = true;
          localStorage.setItem('contextual.shown', JSON.stringify(this.shown));
        }
      }
    });
  },
  
  // ========== TOOLTIP DEFINITIONS ==========
  
  showChatInputTooltip() {
    const input = document.querySelector('.message-input');
    if (!input) return;
    
    this.showTooltip({
      key: 'chatInput',
      title: '💬 Send a Message',
      text: 'Type what happens next. Use LEGOS:\n• Location - Where things happen\n• Entity - Who/What\n• Goal - What they want\n• Obstacle - What blocks them\n• Shift - Transformations\n• Solution - Resolutions\n\nThe AI will update the grid.\n\nTry sending your first message!',
      target: input,
      position: 'top'
    });
  },
  
  showGridCellsTooltip(cell) {
    this.showTooltip({
      key: 'gridCells',
      title: '🎯 Grid Cells Populated!',
      text: 'Entities now appear on the grid based on your narrative.\n\n✨ CLICK ANY CELL to see actions:\n• SEND TO CHAT\n• SPAWN POV CHANNEL\n• RUN ELEMENT PERSPECTIVE\n• TETRAD INTERVENTION\n\nTry clicking this cell now!',
      target: cell,
      position: 'right'
    });
  },
  
  showCellMenuTooltip(menu) {
    this.showTooltip({
      key: 'cellMenu',
      title: '🎯 Grid Cell Menu',
      text: 'This entity has 4 powerful actions:\n\n📤 SEND TO CHAT\nAdd this entity to your next message\n\n🌀 SPAWN POV CHANNEL\nCreate new channel from this entity\'s perspective\n\n💡 RUN ELEMENT PERSPECTIVE (Green)\nDeep analysis: emotional state, plot impact, next action, local awareness, relationships\n\n⋔ TETRAD INTERVENTION (Red)\nApply McLuhan\'s Four Laws:\n• Enhance - What it amplifies\n• Reverse - What it flips into\n• Retrieve - What it brings back\n• Obsolesce - What it replaces\n\nTry clicking RUN ELEMENT PERSPECTIVE!',
      target: menu,
      position: 'left'
    });
  },
  
  showPerspectiveTooltip(overlay) {
    this.showTooltip({
      key: 'perspectiveOverlay',
      title: '💡 ELEMENT PERSPECTIVE - Deep Analysis',
      text: 'This screen shows comprehensive entity analysis:\n\n📊 SECTIONS:\n• EMOTIONAL STATE - Current feelings and mood\n• PLOT IMPACT - Significance to the narrative\n• NEXT ACTION - Predicted next move\n• LOCAL AWARENESS - What they perceive nearby\n• RELATIONAL PROBABILITIES - Connections to other entities (% resonance)\n\n🎯 BUTTONS (bottom):\n• ⋔ GENERATE TETRAD FROM PERSPECTIVE (Red)\n  Creates tetrad from this entity\'s viewpoint\n• SEND TO CHAT (Green)\n  Adds analysis to your message\n• FORK POV CHANNEL (Gray)\n  New channel from this perspective\n\n💡 TIP: Click GENERATE TETRAD to see McLuhan\'s Four Laws from this entity\'s perspective!\n\n? button is always accessible in top-right corner for hints.',
      target: overlay,
      position: 'top'
    });
  },
  
  showMessageClickTooltip(message) {
    this.showTooltip({
      key: 'messageClick',
      title: '💬 Message Actions',
      text: 'Click any message to see options:\n\n• 🔀 FORK - Create alternative branch\n• 📋 COPY - Copy message text\n• 🗑️ DELETE - Remove message\n• ⋔ TETRAD - Apply Four Laws\n• 👁️ PERSPECTIVE - Entity viewpoint\n\nMessages are interactive!\nClick this message to try it.',
      target: message,
      position: 'right'
    });
  },
  
  showMessageForkMenuTooltip(menu) {
    this.showTooltip({
      key: 'messageForkMenu',
      title: '🔀 Fork Message',
      text: 'Create alternative narrative branches:\n\n• FORK: PERSPECTIVE - From entity\'s viewpoint\n• FORK: SNAPSHOT - Save this moment\n• NEW BLANK CHANNEL - Start fresh\n• COPY MESSAGE - Copy to clipboard\n• DELETE MESSAGE - Remove\n\nExplore different story paths!\nTry forking this message.',
      target: menu,
      position: 'left'
    });
  },
  
  showTetradChipsTooltip(chip) {
    this.showTooltip({
      key: 'tetradChips',
      title: '⋔ TETRAD OPTIONS - McLuhan\'s Four Laws',
      text: 'This screen shows tetrad analysis with steering controls:\n\n📊 THE FOUR LAWS:\n• ▲ ENHANCE - What it amplifies/intensifies\n• ► REVERSE - What it flips into when pushed to extremes\n• ◆ RETRIEVE - What it brings back from the past\n• ▼ OBSOLESCE - What it replaces/makes obsolete\n\n🎯 STEERING ARROWS (on each chip):\nEach law has 4 red circular buttons:\n• Top: Continue this direction\n• Top-right: Escalate/intensify\n• Middle-right: Alternative interpretation\n• Bottom-right: Deep dive/explore further\n\n💡 HOW TO USE:\n1. Read each of the 4 laws\n2. Click any steering arrow to explore that direction\n3. AI generates new narrative based on your choice\n4. Build complex transformations by chaining choices\n\n✨ TIP: Try clicking different arrows on the same law to see how the narrative branches!\n\n? button is always accessible in top-right corner.',
      target: chip.parentElement || chip,
      position: 'top'
    });
  },
  
  showKeyOverlayTooltip(overlay) {
    this.showTooltip({
      key: 'keyOverlay',
      title: '◎ API Key Storage',
      text: 'Store your OpenAI API key:\n\n1. Get key from platform.openai.com/api-keys\n2. Copy the key (starts with sk-proj-...)\n3. Paste it here\n4. Click SAVE\n\nYour key is stored locally in your browser, never sent to our servers.\n\nRequired for AI features!',
      target: overlay,
      position: 'center'
    });
  },
  
  showInfoMenuTooltip(menu) {
    this.showTooltip({
      key: 'infoMenu',
      title: '? Help Menu',
      text: 'Options:\n\n• ▶ START TOUR - Guided walkthrough\n• 💡 SHOW HINTS - See tutorials for current screen\n• HELP OVERVIEW - Quick tips\n• TOGGLE THEME - Change colors\n• FULLSCREEN MODE - Expand view\n• RESET ALL CHATS - Clear everything\n\nStuck? Click SHOW HINTS to see what you can do!',
      target: menu,
      position: 'bottom'
    });
  },
  
  // Show hints for current screen
  showHints() {
    const hints = [];
    
    // Check what's visible and suggest actions (NO EMOJIS)
    if (document.querySelector('.grid-cell[data-entity]')) {
      hints.push('▣ Click any grid cell to see entity actions');
    }
    
    if (document.querySelector('.message-item:not(.system-message)')) {
      hints.push('▣ Click any message to fork, copy, or delete it');
    }
    
    if (document.querySelector('.tetrad-chip')) {
      hints.push('⋔ Click tetrad chips to explore McLuhan\'s Four Laws');
    }
    
    if (document.querySelector('.message-input')) {
      hints.push('▣ Use LEGOS: Location, Entity, Goal, Obstacle, Shift, Solution');
    }
    
    if (!this.shown.cellMenu && document.querySelector('.grid-cell[data-entity]')) {
      hints.push('○ Try clicking a grid cell to see the menu tutorial');
    }
    
    if (!this.shown.perspectiveOverlay) {
      hints.push('○ Try RUN ELEMENT PERSPECTIVE for deep analysis');
    }
    
    if (!this.shown.messageForkMenu) {
      hints.push('○ Try clicking a message to see forking options');
    }
    
    // Show hints overlay
    this.showHintsOverlay(hints);
  },
  
  showHintsOverlay(hints) {
    // Remove existing hints
    const existing = document.getElementById('hintsOverlay');
    if (existing) existing.remove();
    
    const overlay = document.createElement('div');
    overlay.id = 'hintsOverlay';
    overlay.style.cssText = `
      position: fixed;
      top: 16px;
      right: 16px;
      background: rgba(5, 32, 16, 0.98);
      border: 2px solid #56ff9f;
      border-radius: 8px;
      padding: 16px;
      max-width: min(320px, calc(100vw - 32px));
      max-height: calc(100vh - 32px);
      overflow-y: auto;
      z-index: 10004;
      box-shadow: 0 8px 32px rgba(0,0,0,0.9);
      font-family: 'Courier New', monospace;
    `;
    
    overlay.innerHTML = `
      <div style="font-size: 9px; font-weight: 700; color: #56ff9f; margin-bottom: 12px; letter-spacing: 0.15em; text-transform: uppercase; border-bottom: 1px solid #0c3a23; padding-bottom: 8px;">
        HINTS FOR THIS SCREEN
      </div>
      <div style="font-size: 10px; line-height: 1.6; color: #aef3c1; margin-bottom: 16px;">
        ${hints.length > 0 ? hints.join('<br><br>') : 'You\'ve discovered everything on this screen! Try sending a message or exploring the grid.'}
      </div>
      <button onclick="document.getElementById('hintsOverlay').remove()" style="
        width: 100%;
        padding: 10px;
        background: #56ff9f;
        border: none;
        color: #03180c;
        font-family: 'Courier New', monospace;
        font-size: 9px;
        font-weight: 700;
        cursor: pointer;
        border-radius: 4px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      ">GOT IT</button>
    `;
    
    document.body.appendChild(overlay);
  },
  
  showExchangeMenuTooltip(menu) {
    this.showTooltip({
      key: 'exchangeMenu',
      title: '⇆ Import / Export',
      text: 'Save or load your work:\n\n• EXPORT SESSION - Download as JSON\n  (includes all channels, messages, grid state)\n• IMPORT SESSION - Load saved session\n\nBackup your work or share scenarios!\nTry exporting now.',
      target: menu,
      position: 'top'
    });
  },
  
  showChannelHeaderMenuTooltip(menu) {
    this.showTooltip({
      key: 'channelHeaderMenu',
      title: '📋 Channel Options',
      text: 'Manage this channel:\n\n• ⋔ TETRAD MODE - Auto-generate tetrad\n• RESET CHAT - Clear messages\n• COLLAPSE - Minimize channel\n• RENAME - Change name\n• DELETE - Remove channel\n\nOrganize your narratives!',
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

console.log('[CONTEXTUAL TOUR] Script loaded - NO ACTION UNTUTORED');
