// Problem: Design a Least Recently Used (LRU) cache with the following methods:

// get(key: number): number: Return the value if the key exists, else -1.
// put(key: number, value: number): void: Add or update the value for the key. If the cache exceeds its capacity, evict the least recently used item.

class LRUCache {
  cachedVals = new Map<number, number>();
  capacity = 5;

  get(key: number) {
    return this.cachedVals.get(key);
  }

  put(key: number, val: number) {
    if (!this.cachedVals.has(key)) {
      if (this.cachedVals.size >= this.capacity) {
        const first = this.cachedVals.keys().next().value;
        this.cachedVals.delete(first);
        first.done;
      }
    } else {
      this.cachedVals.delete(key);
    }
    this.cachedVals.set(key, val);
  }
}

const cache = new LRUCache();
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
cache.put(5, 5);
console.log("cache.cachedVals", cache.cachedVals);
cache.put(3, 3);
cache.put(2, 2);
cache.put(3, 3);
cache.put(1, 1);
console.log("cache.cachedVals", cache.cachedVals);
cache.put(6, 6);
console.log("cache.cachedVals", cache.cachedVals);
