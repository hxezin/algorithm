let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = input[0];
let score = input[1].split(" ").map(Number);

let M = Math.max(...score);
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += (score[i] / M) * 100;
}

console.log(sum / N);
