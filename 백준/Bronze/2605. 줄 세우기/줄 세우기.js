const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const students = parseInt(input[0]);
const num = input[1].split(" ").map(Number);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  unshift(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(data);
    }

    if (index === 0) {
      return !!this.unshift(data);
    }

    let newNode = new Node(data);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr.join(" ");
  }
}

function solution(students, num) {
  let order = new SinglyLinkedList();

  for (let i = 0; i < students; i++) {
    let index = i - num[i];
    order.insert(index, i + 1);
  }

  return order.print();
}

console.log(solution(students, num));
