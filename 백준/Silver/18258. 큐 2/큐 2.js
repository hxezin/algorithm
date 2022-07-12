const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

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
  pop() {
    if (!this.first) return -1;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  getSize() {
    return this.size;
  }
  empty() {
    return this.size ? 0 : 1;
  }
  front() {
    return this.first ? this.first.value : -1;
  }
  back() {
    return this.last ? this.last.value : -1;
  }
}

let queue = new Queue();
let result = [];

for (let i = 1; i <= input[0]; i++) {
  switch (input[i]) {
    case "pop":
      result.push(queue.pop());
      break;
    case "size":
      result.push(queue.getSize());
      break;
    case "empty":
      result.push(queue.empty());
      break;
    case "front":
      result.push(queue.front());
      break;
    case "back":
      result.push(queue.back());
      break;
    default:
      queue.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
