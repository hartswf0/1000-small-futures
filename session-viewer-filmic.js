let sessionData = null;
let selectedShot = null;
let viewMode = 'tracks';

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
  const menu = document.getElementById('loadMenu');
  menu.classList.toggle('visible');
});

document.getElementById('cornerHelp').addEventListener('click', (e) => {
  e.stopPropagation();
  const menu = document.getElementById('helpMenu');
  menu.classList.toggle('visible');
});

document.getElementById('cornerTheme').addEventListener('click', () => {
  document.body.classList.toggle('theme-thousand');
});

document.getElementById('cornerView').addEventListener('click', () => {
  const modes = ['tracks', 'storyboard', 'script'];
  const currentIndex = modes.indexOf(viewMode);
  viewMode = modes[(currentIndex + 1) % modes.length];
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewMode);
  });
  if (sessionData) renderTimeline(sessionData);
});

// Menu actions
document.querySelectorAll('.corner-menu button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const action = e.currentTarget.getAttribute('data-action');
    if (action === 'load-file') {
      document.getElementById('fileInput').click();
    } else if (action === 'load-sample-ring') {
      fetch('legos-ring-memory-1761206740851.json')
        .then(res => res.json())
        .then(data => loadSession(data, 'legos-ring-memory-1761206740851.json'))
        .catch(err => alert('Sample not found'));
    } else if (action === 'load-sample-multi') {
      fetch('legos-multi-channel-1761207137644.json')
        .then(res => res.json())
        .then(data => loadSession(data, 'legos-multi-channel-1761207137644.json'))
        .catch(err => alert('Sample not found'));
    } else if (action === 'about') {
      alert('LEGOS Filmic Viewer\n\nChannels = Tracks\nScenes = Shots\nDrag divider to resize');
    } else if (action === 'shortcuts') {
      alert('Shortcuts:\n◎ Load\n? Help\n▦ View\n◐ Theme');
    }
    document.querySelectorAll('.corner-menu').forEach(m => m.classList.remove('visible'));
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.corner-menu').forEach(m => m.classList.remove('visible'));
});

// Draggable divider
const divider = document.getElementById('divider');
const detailPanel = document.getElementById('detailPanel');
let isDragging = false;

divider.addEventListener('mousedown', (e) => {
  isDragging = true;
  const startX = e.clientX;
  const startWidth = detailPanel.offsetWidth;
  
  const onMove = (e) => {
    const delta = startX - e.clientX;
    detailPanel.style.width = Math.max(300, Math.min(600, startWidth + delta)) + 'px';
  };
  
  const onUp = () => {
    isDragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    divider.classList.remove('dragging');
  };
  
  divider.classList.add('dragging');
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
});

function loadSession(data, filename) {
  sessionData = data;
  if (data.theme) document.body.className = data.theme;
  
  const exportDate = data.exportedAt || data.exported;
  document.getElementById('headerMeta').textContent = 
    filename + ' · ' + new Date(exportDate).toLocaleString();
  
  renderTimeline(data);
  updateStats(data);
}

function renderTimeline(data) {
  const container = document.getElementById('timelineTracks');
  if (!data.ringMemory?.entries && !data.channels) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">◎</div><div>No data</div></div>';
    return;
  }
  
  container.innerHTML = '';
  
  // Group entries by channel
  const channelShots = {};
  
  if (data.ringMemory?.entries) {
    data.ringMemory.entries.forEach((entry, idx) => {
      if (!channelShots[entry.channelId]) {
        const channel = data.channels?.find(ch => ch.id === entry.channelId) || 
                       { id: entry.channelId, name: entry.channelName, channelColor: '#56ff9f' };
        channelShots[entry.channelId] = {
          channel: channel,
          shots: []
        };
      }
      channelShots[entry.channelId].shots.push({
        ...entry,
        shotNumber: idx + 1
      });
    });
  }
  
  // Render tracks
  Object.values(channelShots).forEach(trackData => {
    const track = createTrack(trackData.channel, trackData.shots);
    container.appendChild(track);
  });
}

function createTrack(channel, shots) {
  const track = document.createElement('div');
  track.className = 'track';
  
  const header = document.createElement('div');
  header.className = 'track-header';
  header.innerHTML = `
    <div class="track-color" style="background: ${channel.channelColor}"></div>
    <div class="track-name" style="color: ${channel.channelColor}">${channel.name}</div>
    <div class="track-meta">
      <span>${shots.length} shots</span>
      <span>${channel.scenario || 'blank'}</span>
    </div>
  `;
  
  const timeline = document.createElement('div');
  timeline.className = 'track-timeline';
  
  shots.forEach(shot => {
    const shotEl = createShot(shot, channel);
    timeline.appendChild(shotEl);
  });
  
  track.appendChild(header);
  track.appendChild(timeline);
  return track;
}

function createShot(shot, channel) {
  const el = document.createElement('div');
  const type = shot.type.toLowerCase().includes('scene') ? 'scene' :
               shot.type.toLowerCase().includes('persp') ? 'perspective' : 'snapshot';
  
  el.className = `shot type-${type}`;
  el.style.color = channel.channelColor;
  
  el.innerHTML = `
    <div class="shot-number">Shot ${shot.shotNumber}</div>
    <div class="shot-title">${escapeHtml(shot.headline)}</div>
    <div class="shot-type">${shot.type}</div>
    <div class="shot-timestamp">${new Date(shot.timestamp).toLocaleTimeString()}</div>
  `;
  
  el.addEventListener('click', () => {
    document.querySelectorAll('.shot').forEach(s => s.classList.remove('selected'));
    el.classList.add('selected');
    showShotDetails(shot, channel);
  });
  
  return el;
}

function showShotDetails(shot, channel) {
  const panel = document.getElementById('detailPanel');
  panel.querySelector('.detail-title').textContent = shot.headline;
  panel.querySelector('.detail-meta').innerHTML = `
    <span style="color: ${channel.channelColor}">${channel.name}</span>
    <span>•</span>
    <span>${shot.type}</span>
    <span>•</span>
    <span>${new Date(shot.timestamp).toLocaleString()}</span>
  `;
  
  const body = document.getElementById('detailBody');
  body.innerHTML = `
    <div class="detail-section">
      <div class="section-label">Summary</div>
      <div class="section-content">${escapeHtml(shot.summary)}</div>
    </div>
    <div class="detail-section">
      <div class="section-label">Symbol / Coordinates</div>
      <div class="section-content">${shot.symbol}</div>
    </div>
    <div class="detail-section">
      <div class="section-label">Entry ID</div>
      <div class="section-content">${shot.id}</div>
    </div>
    <div class="detail-section">
      <div class="section-label">Channel ID</div>
      <div class="section-content">${shot.channelId}</div>
    </div>
  `;
}

function updateStats(data) {
  const trackCount = new Set((data.ringMemory?.entries || []).map(e => e.channelId)).size;
  const shotCount = data.ringMemory?.entries?.length || 0;
  
  document.getElementById('trackCount').textContent = trackCount;
  document.getElementById('shotCount').textContent = shotCount;
  
  if (shotCount > 0 && data.ringMemory.entries[0]) {
    const startTime = new Date(data.ringMemory.entries[0].timestamp);
    const endTime = new Date(data.ringMemory.entries[shotCount - 1].timestamp);
    const duration = endTime - startTime;
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    document.getElementById('timecode').textContent = 
      [hours, minutes, seconds, 0].map(n => String(n).padStart(2, '0')).join(':');
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
