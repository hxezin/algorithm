const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

class AbsoluteHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(x) {
    this.heap.push(x);
    this.bubbleUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      return 0;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return minValue;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    let element = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (
        Math.abs(element) > Math.abs(parent) ||
        (Math.abs(element) === Math.abs(parent) && element > parent)
      )
        break;

      //swap
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    while (true) {
      const leftChild = 2 * idx + 1;
      const rightChild = 2 * idx + 2;
      let smallest = idx;

      if (
        leftChild < this.heap.length &&
        (Math.abs(this.heap[leftChild]) < Math.abs(this.heap[smallest]) ||
          (Math.abs(this.heap[leftChild]) === Math.abs(this.heap[smallest]) &&
            this.heap[leftChild] < this.heap[smallest]))
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < this.heap.length &&
        (Math.abs(this.heap[rightChild]) < Math.abs(this.heap[smallest]) ||
          (Math.abs(this.heap[rightChild]) === Math.abs(this.heap[smallest]) &&
            this.heap[rightChild] < this.heap[smallest]))
      ) {
        smallest = rightChild;
      }

      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
    }
  }
}

const result = [];
const absHeap = new AbsoluteHeap();

for (let i = 0; i < N; i++) {
  const operation = Number(input[i]);
  if (operation !== 0) {
    absHeap.enqueue(operation);
  } else {
    const minValue = absHeap.dequeue();
    result.push(minValue);
  }
}

console.log(result.join('\n'));
