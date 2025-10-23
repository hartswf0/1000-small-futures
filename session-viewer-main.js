let sessionData = null;
let activeTab = 'overview';

// File input
document.getElementById('fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        loadSession(data, file.name);
      } catch (err) {
        alert('Invalid JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }
});

// Corner buttons
document.getElementById('cornerLoad').addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu('loadMenu');
});

document.getElementById('cornerHelp').addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu('helpMenu');
});

document.getElementById('cornerTheme').addEventListener('click', () => {
  document.body.classList.toggle('theme-thousand');
});

// Menu actions
document.querySelectorAll('.corner-menu button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const action = e.currentTarget.getAttribute('data-action');
    handleMenuAction(action);
    closeAllMenus();
  });
});

// Close menus on outside click
document.addEventListener('click', () => closeAllMenus());
document.querySelectorAll('.corner-menu').forEach(menu => {
  menu.addEventListener('click', (e) => e.stopPropagation());
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.getAttribute('data-tab');
    switchTab(tabName);
  });
});

function toggleMenu(menuId) {
  closeAllMenus();
  document.getElementById(menuId).classList.add('visible');
}

function closeAllMenus() {
  document.querySelectorAll('.corner-menu').forEach(m => m.classList.remove('visible'));
}

function handleMenuAction(action) {
  if (action === 'load-file') {
    document.getElementById('fileInput').click();
  } else if (action === 'load-sample-ring') {
    fetch('legos-ring-memory-1761206740851.json')
      .then(res => res.json())
      .then(data => loadSession(data, 'legos-ring-memory-1761206740851.json'))
      .catch(err => alert('Sample file not found'));
  } else if (action === 'load-sample-multi') {
    fetch('legos-multi-channel-1761207137644.json')
      .then(res => res.json())
      .then(data => loadSession(data, 'legos-multi-channel-1761207137644.json'))
      .catch(err => alert('Sample file not found'));
  } else if (action === 'about') {
    alert('LEGOS Session Viewer\n\nVisualize exported LEGOS sessions with channels, ring memory, and snapshots.\n\nSupports both ring memory exports and full multi-channel state exports.');
  } else if (action === 'formats') {
    alert('Supported Formats:\n\n1. Ring Memory Export (legos-ring-memory-*.json)\n- Ring memory entries\n- Channel metadata\n\n2. Multi-Channel Export (legos-multi-channel-*.json)\n- Full channel state\n- Messages and grids\n- Ring memory\n- Snapshots');
  }
}

function loadSession(data, filename) {
  sessionData = data;
  
  // Detect format
  const isMultiChannel = data.channels && data.channels[0]?.messages;
  
  // Apply theme if present
  if (data.theme) {
    document.body.className = data.theme;
  }
  
  // Update header
  const exportDate = data.exportedAt || data.exported;
  document.getElementById('headerMeta').textContent = 
    `${filename} · ${new Date(exportDate).toLocaleString()}`;
  
  // Show tabs
  document.getElementById('tabs').style.display = 'flex';
  
  // Render all tabs
  renderOverview(data, isMultiChannel);
  renderChannels(data, isMultiChannel);
  renderRingMemory(data);
  renderSnapshots(data);
  
  // Update stats
  updateStats(data, isMultiChannel);
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  document.getElementById(`tab-${tabName}`).classList.add('active');
  
  activeTab = tabName;
}

function updateStats(data, isMultiChannel) {
  const channelCount = data.channels?.length || 0;
  const ringCount = data.ringMemory?.entries?.length || 0;
  
  let messageCount = 0;
  if (isMultiChannel) {
    data.channels.forEach(ch => {
      messageCount += ch.messages?.length || 0;
    });
  }
  
  document.getElementById('channelCount').textContent = channelCount;
  document.getElementById('messageCount').textContent = messageCount;
  document.getElementById('ringCount').textContent = ringCount;
}

function renderOverview(data, isMultiChannel) {
  const container = document.getElementById('tab-overview');
  const exportDate = data.exportedAt || data.exported;
  
  container.innerHTML = `
    <div class="section-title">Session Overview</div>
    <div class="channel-card">
      <div class="channel-header">
        <div>
          <div class="channel-title">Export Information</div>
        </div>
      </div>
      <div style="font-size: 12px; line-height: 2;">
        <div><strong>Export Date:</strong> ${new Date(exportDate).toLocaleString()}</div>
        <div><strong>Format:</strong> ${isMultiChannel ? 'Multi-Channel State' : 'Ring Memory Only'}</div>
        <div><strong>Theme:</strong> ${data.theme || 'Default'}</div>
        <div><strong>Channels:</strong> ${data.channels?.length || 0}</div>
        <div><strong>Ring Entries:</strong> ${data.ringMemory?.entries?.length || 0}</div>
        ${isMultiChannel ? `<div><strong>Total Messages:</strong> ${countMessages(data)}</div>` : ''}
        ${data.snapshots ? `<div><strong>Snapshots:</strong> ${Object.keys(data.snapshots).length}</div>` : ''}
      </div>
    </div>
    
    ${data.channels && data.channels.length > 0 ? `
    <div class="section-title">Channels Summary</div>
    ${data.channels.map(ch => `
      <div class="channel-card" style="border-left-color: ${ch.channelColor}">
        <div class="channel-header">
          <div class="channel-title" style="color: ${ch.channelColor}">${ch.name}</div>
          <div class="channel-meta">
            <span class="badge" style="border-color: ${ch.channelColor}; color: ${ch.channelColor}">${ch.scenario || 'blank'}</span>
            ${ch.messages ? `<span>${ch.messages.length} messages</span>` : ''}
          </div>
        </div>
        <div style="font-size: 11px; color: var(--text-muted);">
          ${ch.symbolicId || ch.id} · ${ch.ringBinding ? `Ring: ${ch.ringBinding}` : 'No ring binding'}
        </div>
      </div>
    `).join('')}
    ` : ''}
  `;
}

function countMessages(data) {
  let count = 0;
  data.channels?.forEach(ch => {
    count += ch.messages?.length || 0;
  });
  return count;
}

function renderChannels(data, isMultiChannel) {
  const container = document.getElementById('tab-channels');
  
  if (!data.channels || data.channels.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">◎</div><div>No channels in this export</div></div>';
    return;
  }
  
  if (!isMultiChannel) {
    container.innerHTML = `
      <div class="section-title">Channels (Metadata Only)</div>
      ${data.channels.map(ch => `
        <div class="channel-card" style="border-left-color: ${ch.channelColor}">
          <div class="channel-header">
            <div class="channel-title" style="color: ${ch.channelColor}">${ch.name}</div>
            <div class="channel-meta">
              <span class="badge" style="border-color: ${ch.channelColor}; color: ${ch.channelColor}">${ch.scenario || 'blank'}</span>
              <span>Ledger: ${ch.ledgerCount || 0}</span>
            </div>
          </div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 8px;">
            <div><strong>ID:</strong> ${ch.id}</div>
            <div><strong>Color:</strong> ${ch.channelColor}</div>
          </div>
        </div>
      `).join('')}
    `;
    return;
  }
  
  // Full channel rendering with messages and grids
  container.innerHTML = `
    <div class="section-title">Channels (Full State)</div>
    ${data.channels.map(ch => renderFullChannel(ch)).join('')}
  `;
}

function renderFullChannel(channel) {
  const hasGrid = channel.grid && channel.grid.some(row => row.some(cell => cell !== null));
  
  return `
    <div class="channel-card" style="border-left-color: ${channel.channelColor}">
      <div class="channel-header">
        <div>
          <div class="channel-title" style="color: ${channel.channelColor}">${channel.name}</div>
          <div style="font-size: 10px; color: var(--text-muted); margin-top: 4px;">
            ${channel.symbolicId || channel.id} · ${channel.scenario || 'blank'}
          </div>
        </div>
        <div class="channel-meta">
          <span class="badge" style="border-color: ${channel.channelColor}; color: ${channel.channelColor}">${channel.messages?.length || 0} messages</span>
          ${channel.ringBinding ? `<span class="badge" style="border-color: var(--accent); color: var(--accent)">Ring: ${channel.ringBinding}</span>` : ''}
        </div>
      </div>
      
      ${channel.systemInstruction ? `
      <details style="margin-bottom: 16px;">
        <summary style="cursor: pointer; font-size: 11px; font-weight: 700; color: var(--accent); margin-bottom: 8px;">System Instruction</summary>
        <div style="font-size: 11px; color: var(--text-muted); line-height: 1.5; padding: 8px; background: var(--panel-dark); border-radius: 4px; margin-top: 8px;">
          ${escapeHtml(channel.systemInstruction).substring(0, 500)}${channel.systemInstruction.length > 500 ? '...' : ''}
        </div>
      </details>
      ` : ''}
      
      <div class="section-title" style="font-size: 11px; margin-bottom: 12px;">Messages</div>
      ${channel.messages?.slice(0, 10).map(msg => `
        <div class="message role-${msg.role}">
          <div class="message-header">
            <span class="message-role">${msg.role}</span>
            <span>${new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
          <div class="message-text">${escapeHtml(msg.text).substring(0, 300)}${msg.text.length > 300 ? '...' : ''}</div>
        </div>
      `).join('')}
      ${channel.messages && channel.messages.length > 10 ? `<div style="text-align: center; color: var(--text-muted); font-size: 11px; margin-top: 12px;">... ${channel.messages.length - 10} more messages</div>` : ''}
      
      ${hasGrid ? `
      <details style="margin-top: 16px;">
        <summary style="cursor: pointer; font-size: 11px; font-weight: 700; color: var(--accent); margin-bottom: 8px;">Grid State (9×9)</summary>
        <div class="grid-container">
          ${channel.grid.flat().map(cell => `
            <div class="grid-cell ${cell ? 'occupied' : ''}" title="${cell ? `${cell.type}: ${cell.label || cell.entity?.name || 'Unknown'}` : 'Empty'}">
              ${cell ? cell.symbol : ''}
            </div>
          `).join('')}
        </div>
      </details>
      ` : ''}
    </div>
  `;
}

function renderRingMemory(data) {
  const container = document.getElementById('tab-ring');
  
  if (!data.ringMemory || !data.ringMemory.entries || data.ringMemory.entries.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">◎</div><div>No ring memory in this export</div></div>';
    return;
  }
  
  const ring = data.ringMemory;
  
  container.innerHTML = `
    <div class="section-title">Ring Memory (${ring.entries.length}/${ring.capacity})</div>
    <div style="margin-bottom: 20px; font-size: 11px; color: var(--text-muted);">
      <div><strong>Capacity:</strong> ${ring.capacity}</div>
      <div><strong>Context Mode:</strong> ${ring.contextMode || 'all'}</div>
      ${ring.contextAnchor ? `<div><strong>Anchor:</strong> ${ring.contextAnchor}</div>` : ''}
    </div>
    
    ${ring.entries.map(entry => {
      const channel = data.channels?.find(ch => ch.id === entry.channelId);
      return `
        <div class="ring-entry" style="border-left-color: ${channel?.channelColor || 'var(--accent)'}">
          <div class="ring-header">
            <div class="ring-headline" style="color: ${channel?.channelColor || 'var(--text)'}">${escapeHtml(entry.headline)}</div>
            <div class="ring-meta">
              <span class="badge" style="border-color: ${channel?.channelColor || 'var(--border)'}; color: ${channel?.channelColor || 'var(--text-muted)'}">
                ${entry.type}
              </span>
              <span>${new Date(entry.timestamp).toLocaleString()}</span>
            </div>
          </div>
          <div style="font-size: 10px; color: var(--text-muted); margin-bottom: 6px;">
            ${entry.channelName} · ${entry.symbol} · ${entry.id}
          </div>
          <div class="ring-summary">${escapeHtml(entry.summary)}</div>
        </div>
      `;
    }).join('')}
  `;
}

function renderSnapshots(data) {
  const container = document.getElementById('tab-snapshots');
  
  if (!data.snapshots || Object.keys(data.snapshots).length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">⧉</div><div>No snapshots in this export</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="section-title">Snapshots (${Object.keys(data.snapshots).length})</div>
    ${Object.entries(data.snapshots).map(([id, snapshot]) => `
      <div class="channel-card">
        <div class="channel-header">
          <div class="channel-title">${snapshot.name || id}</div>
          <div class="channel-meta">
            <span>${new Date(snapshot.timestamp).toLocaleString()}</span>
          </div>
        </div>
        <div style="font-size: 11px; color: var(--text-muted); line-height: 1.8;">
          <div><strong>ID:</strong> ${id}</div>
          <div><strong>Grid Cells:</strong> ${countGridCells(snapshot.grid)}</div>
          ${snapshot.messages ? `<div><strong>Messages:</strong> ${snapshot.messages.length}</div>` : ''}
        </div>
      </div>
    `).join('')}
  `;
}

function countGridCells(grid) {
  if (!grid) return 0;
  return grid.flat().filter(cell => cell !== null).length;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
