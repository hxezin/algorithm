const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const [N, K] = input.split(" ");

const queue = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

const result = [];
let count = 1;

while (queue.length) {
  let current = queue.shift();
  if (count % K === 0) {
    result.push(current);
  } else {
    queue.push(current);
  }
  count++;
}

console.log(`<${result.join(", ")}>`);