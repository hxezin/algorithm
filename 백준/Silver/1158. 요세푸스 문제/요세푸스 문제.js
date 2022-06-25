const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const [N, K] = input;

let queue = [];

for (let i = 0; i < N; i++) {
  queue.push(i + 1);
}

let result = [];
let count = 1;

while (queue.length) {
  if (count % K === 0) {
    result.push(queue.shift());
  } else {
    queue.push(queue.shift());
  }
  count++;
}

console.log(`<${result.join(", ")}>`);
