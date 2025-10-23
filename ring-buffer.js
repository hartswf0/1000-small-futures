/**
 * LEGOS Ring Buffer - Circular Memory with Graceful Degradation
 * Intelligent circular buffer that respects memory constraints
 * and fails gracefully on low-memory devices
 */

class RingBuffer {
  constructor(options = {}) {
    // Detect device capabilities
    this.memoryProfile = this.detectMemoryProfile();
    
    // Apply profile-based limits
    const profile = MEMORY_PROFILES[this.memoryProfile];
    this.capacity = options.capacity || profile.ringCapacity;
    this.telemetryDepth = profile.telemetryDepth;
    this.gridHistoryDepth = profile.gridHistory;
    
    // Core buffer
    this.entries = new Array(this.capacity);
    this.pointer = 0;
    this.size = 0;
    
    // Fast lookup indices
    this.index = {
      byId: new Map(),
      byChannel: new Map(),
      byType: new Map(),
      byTime: []
    };
    
    // Telemetry
    this.telemetry = {
      totalWrites: 0,
      overwriteCount: 0,
      compactionCount: 0,
      memoryChecks: 0,
      lastMemoryUsage: 0
    };
    
    // Memory pressure monitoring
    this.memoryPressureThreshold = 0.8;
    this.checkInterval = 100; // Check every 100 writes
    
    console.log(`[RingBuffer] Initialized with profile: ${this.memoryProfile}, capacity: ${this.capacity}`);
  }
  
  detectMemoryProfile() {
    // Check available memory
    const deviceMemory = navigator.deviceMemory || 4;
    const connection = navigator.connection?.effectiveType || '4g';
    
    // Check current heap usage if available
    let heapUsed = 0;
    if (performance.memory) {
      heapUsed = performance.memory.usedJSHeapSize;
    }
    
    // Determine profile
    if (deviceMemory >= 8 && heapUsed < 100_000_000) {
      return 'desktop';
    } else if (deviceMemory >= 4 && heapUsed < 50_000_000) {
      return 'tablet';
    } else if (deviceMemory >= 2 && heapUsed < 30_000_000) {
      return 'mobile';
    } else {
      return 'lowMemory';
    }
  }
  
  write(entry) {
    // Validate entry
    if (!entry || !entry.id || !entry.timestamp) {
      console.warn('[RingBuffer] Invalid entry, skipping');
      return false;
    }
    
    // Check if already exists (prevent duplicates)
    if (this.index.byId.has(entry.id)) {
      console.warn('[RingBuffer] Duplicate entry:', entry.id);
      return false;
    }
    
    // Get the entry we're about to overwrite
    const oldEntry = this.entries[this.pointer];
    if (oldEntry) {
      this.removeFromIndex(oldEntry);
      this.telemetry.overwriteCount++;
    }
    
    // Write new entry
    this.entries[this.pointer] = entry;
    this.addToIndex(entry);
    
    // Advance pointer
    this.pointer = (this.pointer + 1) % this.capacity;
    this.size = Math.min(this.size + 1, this.capacity);
    this.telemetry.totalWrites++;
    
    // Periodic memory check
    if (this.telemetry.totalWrites % this.checkInterval === 0) {
      this.checkMemoryPressure();
    }
    
    return true;
  }
  
  addToIndex(entry) {
    // By ID
    this.index.byId.set(entry.id, entry);
    
    // By channel
    if (!this.index.byChannel.has(entry.channelId)) {
      this.index.byChannel.set(entry.channelId, []);
    }
    this.index.byChannel.get(entry.channelId).push(entry);
    
    // By type
    if (!this.index.byType.has(entry.type)) {
      this.index.byType.set(entry.type, []);
    }
    this.index.byType.get(entry.type).push(entry);
    
    // By time (keep sorted)
    this.index.byTime.push({
      timestamp: new Date(entry.timestamp),
      id: entry.id
    });
    this.index.byTime.sort((a, b) => a.timestamp - b.timestamp);
  }
  
  removeFromIndex(entry) {
    // By ID
    this.index.byId.delete(entry.id);
    
    // By channel
    const channelEntries = this.index.byChannel.get(entry.channelId);
    if (channelEntries) {
      const idx = channelEntries.findIndex(e => e.id === entry.id);
      if (idx >= 0) channelEntries.splice(idx, 1);
    }
    
    // By type
    const typeEntries = this.index.byType.get(entry.type);
    if (typeEntries) {
      const idx = typeEntries.findIndex(e => e.id === entry.id);
      if (idx >= 0) typeEntries.splice(idx, 1);
    }
    
    // By time
    const timeIdx = this.index.byTime.findIndex(t => t.id === entry.id);
    if (timeIdx >= 0) this.index.byTime.splice(timeIdx, 1);
  }
  
  checkMemoryPressure() {
    this.telemetry.memoryChecks++;
    
    if (!performance.memory) {
      return; // Can't check, skip
    }
    
    const heapUsed = performance.memory.usedJSHeapSize;
    const heapLimit = performance.memory.jsHeapSizeLimit;
    const usage = heapUsed / heapLimit;
    
    this.telemetry.lastMemoryUsage = usage;
    
    if (usage > this.memoryPressureThreshold) {
      console.warn(`[RingBuffer] Memory pressure detected: ${(usage * 100).toFixed(1)}%`);
      this.compactOldEntries();
      
      // If still under pressure, reduce capacity
      if (usage > 0.9) {
        this.reduceCapacity();
      }
    }
  }
  
  compactOldEntries() {
    console.log('[RingBuffer] Compacting old entries...');
    
    // Keep only essential fields for old entries
    const keepFields = ['id', 'type', 'timestamp', 'channelId', 'headline', 'symbol'];
    
    let compacted = 0;
    this.entries.forEach((entry, i) => {
      if (!entry) return;
      
      // Don't compact recent entries (last 25%)
      const recentThreshold = Math.floor(this.capacity * 0.25);
      const distance = (this.pointer - i + this.capacity) % this.capacity;
      
      if (distance > recentThreshold) {
        Object.keys(entry).forEach(key => {
          if (!keepFields.includes(key)) {
            delete entry[key];
            compacted++;
          }
        });
      }
    });
    
    this.telemetry.compactionCount++;
    console.log(`[RingBuffer] Compacted ${compacted} fields from old entries`);
  }
  
  reduceCapacity() {
    console.warn('[RingBuffer] Reducing capacity due to memory pressure');
    
    const newCapacity = Math.max(12, Math.floor(this.capacity * 0.75));
    
    // Keep most recent entries
    const toKeep = this.getAll().slice(-newCapacity);
    
    // Reset buffer
    this.entries = new Array(newCapacity);
    this.pointer = 0;
    this.size = 0;
    this.capacity = newCapacity;
    
    // Clear indices
    this.index.byId.clear();
    this.index.byChannel.clear();
    this.index.byType.clear();
    this.index.byTime = [];
    
    // Re-add kept entries
    toKeep.forEach(entry => this.write(entry));
    
    console.log(`[RingBuffer] Capacity reduced to ${newCapacity}`);
  }
  
  get(id) {
    return this.index.byId.get(id);
  }
  
  getAll() {
    return this.entries.filter(e => e !== undefined && e !== null);
  }
  
  getByChannel(channelId) {
    return this.index.byChannel.get(channelId) || [];
  }
  
  getByType(type) {
    return this.index.byType.get(type) || [];
  }
  
  getByTimeRange(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    return this.index.byTime
      .filter(t => t.timestamp >= start && t.timestamp <= end)
      .map(t => this.index.byId.get(t.id))
      .filter(e => e !== undefined);
  }
  
  getRecent(count = 10) {
    const all = this.getAll();
    return all.slice(-count);
  }
  
  toJSON() {
    return {
      capacity: this.capacity,
      size: this.size,
      pointer: this.pointer,
      memoryProfile: this.memoryProfile,
      entries: this.getAll(),
      telemetry: this.telemetry
    };
  }
  
  fromJSON(data) {
    this.capacity = data.capacity;
    this.size = data.size || 0;
    this.pointer = data.pointer || 0;
    
    // Clear current state
    this.entries = new Array(this.capacity);
    this.index.byId.clear();
    this.index.byChannel.clear();
    this.index.byType.clear();
    this.index.byTime = [];
    
    // Re-add all entries
    if (data.entries && Array.isArray(data.entries)) {
      data.entries.forEach((entry, i) => {
        if (entry) {
          this.entries[i] = entry;
          this.addToIndex(entry);
        }
      });
    }
    
    console.log(`[RingBuffer] Loaded ${this.size} entries from JSON`);
  }
  
  getStats() {
    return {
      capacity: this.capacity,
      size: this.size,
      utilizationPercent: (this.size / this.capacity * 100).toFixed(1),
      memoryProfile: this.memoryProfile,
      channelCount: this.index.byChannel.size,
      typeCount: this.index.byType.size,
      ...this.telemetry
    };
  }
}

// Memory profiles for different devices
const MEMORY_PROFILES = {
  desktop: {
    ringCapacity: 96,
    telemetryDepth: 1000,
    gridHistory: 50
  },
  tablet: {
    ringCapacity: 48,
    telemetryDepth: 500,
    gridHistory: 25
  },
  mobile: {
    ringCapacity: 24,
    telemetryDepth: 200,
    gridHistory: 10
  },
  lowMemory: {
    ringCapacity: 12,
    telemetryDepth: 50,
    gridHistory: 5
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RingBuffer, MEMORY_PROFILES };
}
