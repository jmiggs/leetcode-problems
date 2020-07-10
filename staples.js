// LRU CACHE

// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
// class LRUCache {
//   constructor(maxSize) {
//     this.maxSize = maxSize || 1;
// 		this.cache = {};
// 		this.list = new DoubleList();
// 		this.currentSize = 0;
		
//   }

//   insertKeyValuePair(key, value) {
//     // Write your code here.
		
// 		if (!(key in this.cache)) {
// 			// first check if at capacity
// 			if (this.currentSize === this.maxSize) {
// 				// 1. grab the last node; the tail
// 				// 2. remove it from the list
// 				// 3. remove from cache
// 				let nodeToDelete = this.list.tail.key
// 				this.list.removeTail();
// 				delete this.cache[nodeToDelete]
// 			} else {
// 				this.currentSize++
// 			}
			
// 			this.cache[key] = new Node(key, value)
// 		} else {
// 			this.cache[key].val = value
// 		}
		
// 		this.list.setHead(this.cache[key])

//   }

//   getValueFromKey(key) {
//     // Write your code here.
// 		if ((key in this.cache)) {
// 			this.list.setHead(this.cache[key])
// 			return this.cache[key].val
// 		} else {
// 			return null;
// 		}
//   }

//   getMostRecentKey() {
//     // Write your code here.
// 		return this.list.head.key
//   }
// }
	
// class DoubleList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 	}
	
// 	setHead(node) {
// 		if (this.head === node) {
// 			return
// 		} else if (this.head && this.head === this.tail) {

// 			this.head.prev = node
// 			node.next = this.head
// 			this.head = node
// 		} else if (this.head === null) {
	
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			if (this.tail === node) this.removeTail();

// 			node.removeBindings();
// 			this.head.prev = node
// 			node.next = this.head
// 			this.head = node
// 		}
			
// 	}
	
// 	removeTail() {
// 		if (this.tail === null) return;
// 		if (this.tail === this.head) {
// 			this.head = null;
// 			this.tail = null;
// 			return;
// 		}
		
// 		this.tail = this.tail.prev
// 		this.tail.next - null;
// 	}
// }

// class Node {
// 	constructor(key, val) {
// 		this.key = key
// 		this.val = val
// 		this.prev = null;
// 		this.next = null
// 	}
	
// 	removeBindings() {
// 		if (this.prev) {
// 			this.prev.next = this.next
// 		}
// 		if (this.next) {
// 			this.next.prev = this.prev
// 		}
		
// 		this.next = null;
// 		this.prev = null;
// 	}
	
// }




var sortList = function(head) {
  // use merge sort
  if (!head || !head.next) {
    return head
  }

  let slow = head;
  let fast = head;

  let left = new ListNode(0);
  let currLeft = left;

  while (fast && fast.next) {
    currLeft.next = new ListNode(slow.val)
    currLeft = currLeft.next;

    fast = fast.next.next;
    slow = slow.next;
  }

  let right = new ListNode(0)
  let currRight = right;

  while (slow) {
    currRight.next = new ListNode(slow.val);
    currRight = currRight.next;
    slow = slow.next;
  }

  let leftSorted = sortList(left.next);
  let rightSorted = sortList(right.next);
  
  return merge(leftSorted, rightSorted)
};

function merge(l1, l2) {

  let temp = new ListNode(0);
  let current = temp;
  
  while (l1 && l2) {
      if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }
  
  
  if (l1) {
      current.next = l1;
      l1 = l1.next;
  }
  
  if (l2) {
      current.next = l2;
      l2 = l2.next
  }
  
  return temp.next
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let head = new ListNode(4)
let a = new ListNode(2)
let b = new ListNode(1)
let c = new ListNode(3)

head.next = a;
a.next = b;
b.next = c;

console.log(sortList(head))
