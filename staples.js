// LRU CACHE

// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
		this.cache = {};
		this.list = new DoubleList();
		this.currentSize = 0;
		
  }

  insertKeyValuePair(key, value) {
    // Write your code here.
		
		if (!(key in this.cache)) {
			// first check if at capacity
			if (this.currentSize === this.maxSize) {
				// 1. grab the last node; the tail
				// 2. remove it from the list
				// 3. remove from cache
				let nodeToDelete = this.list.tail.key
				this.list.removeTail();
				delete this.cache[nodeToDelete]
			} else {
				this.currentSize++
			}
			
			this.cache[key] = new Node(key, value)
		} else {
			this.cache[key].val = value
		}
		
		this.list.setHead(this.cache[key])

  }

  getValueFromKey(key) {
    // Write your code here.
		if ((key in this.cache)) {
			this.list.setHead(this.cache[key])
			return this.cache[key].val
		} else {
			return null;
		}
  }

  getMostRecentKey() {
    // Write your code here.
		return this.list.head.key
  }
}
	
class DoubleList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	
	setHead(node) {
		if (this.head === node) {
			return
		} else if (this.head && this.head === this.tail) {

			this.head.prev = node
			node.next = this.head
			this.head = node
		} else if (this.head === null) {
	
			this.head = node;
			this.tail = node;
		} else {
			if (this.tail === node) this.removeTail();

			node.removeBindings();
			this.head.prev = node
			node.next = this.head
			this.head = node
		}
			
	}
	
	removeTail() {
		if (this.tail === null) return;
		if (this.tail === this.head) {
			this.head = null;
			this.tail = null;
			return;
		}
		
		this.tail = this.tail.prev
		this.tail.next - null;
	}
}

class Node {
	constructor(key, val) {
		this.key = key
		this.val = val
		this.prev = null;
		this.next = null
	}
	
	removeBindings() {
		if (this.prev) {
			this.prev.next = this.next
		}
		if (this.next) {
			this.next.prev = this.prev
		}
		
		this.next = null;
		this.prev = null;
	}
	
}

