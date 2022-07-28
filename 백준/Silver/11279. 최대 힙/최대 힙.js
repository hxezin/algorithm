const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const x = input.map(Number);

function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);
  let idx = heap.length - 1;
  while (idx > 0) {
    let parentIdx = getParentIdx(idx);
    if (heap[idx] <= heap[parentIdx]) break;
    swap(idx, parentIdx, heap);
    idx = parentIdx;
  }
  return heap;
}

function removeRoot(heap) {
  swap(0, heap.length - 1, heap);
  let max = heap.pop();

  if (heap.length === 0) return max;

  let idx;
  let maxIdx = 0;
  while (idx !== maxIdx) {
    idx = maxIdx;
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;

    if (leftChildIdx < heap.length && heap[leftChildIdx] > heap[maxIdx]) {
      maxIdx = leftChildIdx;
    }
    if (rightChildIdx < heap.length && heap[rightChildIdx] > heap[maxIdx]) {
      maxIdx = rightChildIdx;
    }
    swap(idx, maxIdx, heap);
  }

  return max;
}

let heap = [];
let result = [];

for (let i = 0; i < N; i++) {
  if (x[i] !== 0) {
    insert(heap, x[i]);
  } else {
    result.push(heap.length === 0 ? 0 : removeRoot(heap));
  }
}

console.log(result.join("\n"));
