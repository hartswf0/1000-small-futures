/**
 * LEGOS Temporal Index - "Chat Across Time"
 * Fast lookup and querying of ring buffer entries by various criteria
 */

class TemporalIndex {
  constructor(ringBuffer) {
    this.ringBuffer = ringBuffer;
    this.indices = {
      timeline: [],           // Sorted by timestamp
      byChannel: new Map(),   // Grouped by channel
      byEntity: new Map(),    // Grouped by entity
      byPosition: new Map(),  // Grouped by grid position
      searchIndex: new Map()  // Full-text search
    };
    
    this.rebuildAll();
  }
  
  rebuildAll() {
    console.log('[TemporalIndex] Rebuilding all indices...');
    
    // Clear existing
    this.indices.timeline = [];
    this.indices.byChannel.clear();
    this.indices.byEntity.clear();
    this.indices.byPosition.clear();
    this.indices.searchIndex.clear();
    
    // Rebuild from ring buffer
    const entries = this.ringBuffer.getAll();
    entries.forEach(entry => this.indexEntry(entry));
    
    // Sort timeline
    this.indices.timeline.sort((a, b) => a.timestamp - b.timestamp);
    
    console.log(`[TemporalIndex] Indexed ${entries.length} entries`);
  }
  
  indexEntry(entry) {
    const timestamp = new Date(entry.timestamp);
    
    // Timeline index
    this.indices.timeline.push({
      timestamp,
      entryId: entry.id,
      type: entry.type,
      channelId: entry.channelId,
      headline: entry.headline
    });
    
    // Channel index
    if (!this.indices.byChannel.has(entry.channelId)) {
      this.indices.byChannel.set(entry.channelId, {
        entries: [],
        firstSeen: timestamp,
        lastSeen: timestamp,
        count: 0
      });
    }
    const channelData = this.indices.byChannel.get(entry.channelId);
    channelData.entries.push(entry.id);
    channelData.lastSeen = timestamp;
    channelData.count++;
    
    // Entity index (for perspectives)
    if (entry.type && entry.type.toLowerCase().includes('persp')) {
      const entityId = this.extractEntityId(entry);
      if (entityId) {
        if (!this.indices.byEntity.has(entityId)) {
          this.indices.byEntity.set(entityId, {
            perspectives: [],
            appearances: [],
            narrative: []
          });
        }
        const entityData = this.indices.byEntity.get(entityId);
        entityData.perspectives.push(entry.id);
        
        // Track grid appearances
        if (entry.symbol) {
          const position = this.parsePosition(entry.symbol);
          if (position) {
            entityData.appearances.push({
              ...position,
              timestamp
            });
          }
        }
      }
    }
    
    // Position index
    if (entry.symbol) {
      const position = this.parsePosition(entry.symbol);
      if (position) {
        const key = `${position.x},${position.y}`;
        if (!this.indices.byPosition.has(key)) {
          this.indices.byPosition.set(key, {
            events: [],
            history: []
          });
        }
        const posData = this.indices.byPosition.get(key);
        posData.events.push({
          entryId: entry.id,
          timestamp,
          type: entry.type
        });
        if (entry.headline) {
          posData.history.push(entry.headline);
        }
      }
    }
    
    // Full-text search index
    if (entry.headline || entry.summary) {
      const text = `${entry.headline || ''} ${entry.summary || ''}`.toLowerCase();
      const words = text.split(/\W+/).filter(w => w.length > 3);
      
      words.forEach(word => {
        if (!this.indices.searchIndex.has(word)) {
          this.indices.searchIndex.set(word, []);
        }
        const wordEntries = this.indices.searchIndex.get(word);
        if (!wordEntries.includes(entry.id)) {
          wordEntries.push(entry.id);
        }
      });
    }
  }
  
  extractEntityId(entry) {
    // Try to extract entity ID from headline or symbol
    if (entry.headline) {
      // Pattern: "Perspective: EntityName" or "Perspective: Entity 23"
      const match = entry.headline.match(/Perspective:\s*(.+?)(?:\s+\d+)?$/i);
      if (match) {
        return match[1].trim().toLowerCase().replace(/\s+/g, '_');
      }
    }
    return null;
  }
  
  parsePosition(symbol) {
    // Parse grid position from symbol (e.g., "4 5" or "L 4 5" or "E 2 3")
    if (!symbol) return null;
    
    const parts = symbol.trim().split(/\s+/);
    if (parts.length >= 2) {
      const x = parseInt(parts[parts.length - 2]);
      const y = parseInt(parts[parts.length - 1]);
      if (!isNaN(x) && !isNaN(y)) {
        return { x, y };
      }
    }
    return null;
  }
  
  // Query Methods
  
  getTimeline() {
    return this.indices.timeline;
  }
  
  getByChannel(channelId) {
    const data = this.indices.byChannel.get(channelId);
    if (!data) return null;
    
    return {
      ...data,
      entries: data.entries.map(id => this.ringBuffer.get(id)).filter(e => e)
    };
  }
  
  getByEntity(entityId) {
    const data = this.indices.byEntity.get(entityId);
    if (!data) return null;
    
    return {
      ...data,
      perspectives: data.perspectives.map(id => this.ringBuffer.get(id)).filter(e => e)
    };
  }
  
  getByPosition(x, y) {
    const key = `${x},${y}`;
    const data = this.indices.byPosition.get(key);
    if (!data) return null;
    
    return {
      ...data,
      events: data.events.map(e => ({
        ...e,
        entry: this.ringBuffer.get(e.entryId)
      }))
    };
  }
  
  getTimeRange(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    return this.indices.timeline
      .filter(t => t.timestamp >= start && t.timestamp <= end)
      .map(t => this.ringBuffer.get(t.entryId))
      .filter(e => e);
  }
  
  search(query) {
    if (!query || query.length < 3) return [];
    
    const searchTerms = query.toLowerCase().split(/\W+/).filter(w => w.length > 3);
    if (searchTerms.length === 0) return [];
    
    // Find entries matching ANY search term
    const matchingIds = new Set();
    searchTerms.forEach(term => {
      // Exact match
      if (this.indices.searchIndex.has(term)) {
        this.indices.searchIndex.get(term).forEach(id => matchingIds.add(id));
      }
      
      // Prefix match
      this.indices.searchIndex.forEach((ids, word) => {
        if (word.startsWith(term)) {
          ids.forEach(id => matchingIds.add(id));
        }
      });
    });
    
    // Return matching entries
    return Array.from(matchingIds)
      .map(id => this.ringBuffer.get(id))
      .filter(e => e)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }
  
  // Advanced Queries
  
  getChatHistory(channelId, limit = 50) {
    const channelData = this.indices.byChannel.get(channelId);
    if (!channelData) return [];
    
    return channelData.entries
      .map(id => this.ringBuffer.get(id))
      .filter(e => e)
      .slice(-limit);
  }
  
  getEntityJourney(entityId) {
    const entityData = this.indices.byEntity.get(entityId);
    if (!entityData) return null;
    
    // Sort appearances chronologically
    const journey = entityData.appearances.sort((a, b) => a.timestamp - b.timestamp);
    
    // Calculate path metrics
    let totalDistance = 0;
    for (let i = 1; i < journey.length; i++) {
      const dx = journey[i].x - journey[i-1].x;
      const dy = journey[i].y - journey[i-1].y;
      totalDistance += Math.sqrt(dx*dx + dy*dy);
    }
    
    return {
      entityId,
      perspectives: entityData.perspectives.length,
      appearances: journey,
      totalDistance,
      timespan: journey.length > 0 ? {
        start: journey[0].timestamp,
        end: journey[journey.length - 1].timestamp
      } : null
    };
  }
  
  getLocationHistory(x, y) {
    const posData = this.indices.byPosition.get(`${x},${y}`);
    if (!posData) return null;
    
    return {
      position: { x, y },
      eventCount: posData.events.length,
      events: posData.events.sort((a, b) => a.timestamp - b.timestamp),
      narrative: posData.history
    };
  }
  
  getNarrativeSequence(channelId, startTime, endTime) {
    const timelineEntries = this.getTimeRange(startTime, endTime);
    return timelineEntries
      .filter(e => e.channelId === channelId)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
      .map(e => ({
        timestamp: e.timestamp,
        type: e.type,
        headline: e.headline,
        position: this.parsePosition(e.symbol),
        entry: e
      }));
  }
  
  getStats() {
    return {
      totalEntries: this.indices.timeline.length,
      channelCount: this.indices.byChannel.size,
      entityCount: this.indices.byEntity.size,
      locationsTracked: this.indices.byPosition.size,
      uniqueWords: this.indices.searchIndex.size,
      timespan: this.indices.timeline.length > 0 ? {
        start: this.indices.timeline[0].timestamp,
        end: this.indices.timeline[this.indices.timeline.length - 1].timestamp
      } : null
    };
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TemporalIndex };
}
