const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    //add node in linked list
    let node = new ListNode(value)
    if (this.head) { // если есть голова
      this.tail.next = node;
      this.tail = node;
    } else {

    }
  }

  dequeue() {
    const deleteHead = this.linkedList.deleteHead();
    return ;
  }
}
const a = new Queue(5)
console.log(a.getUnderlyingList())
module.exports = {
  Queue
};
