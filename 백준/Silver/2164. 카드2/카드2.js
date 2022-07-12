const input = require("fs").readFileSync("/dev/stdin").toString();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  shift() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  getFirst() {
    return this.first.value;
  }
  getSize() {
    return this.size;
  }
}

let queue = new Queue();

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

while (queue.getSize() !== 1) {
  queue.shift();
  queue.push(queue.shift());
}

console.log(queue.getFirst());
