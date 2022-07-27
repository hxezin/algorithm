const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const nums = input[1].split(" ");
let max = Math.max(...nums);

let isPrime = Array(max + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= max; i++) {
  if (!isPrime[i]) {
    continue;
  }

  for (let j = i * i; j <= max; j += i) {
    isPrime[j] = false;
  }
}

let count = 0;

for (let i = 0; i < N; i++) {
  if (isPrime[nums[i]]) {
    count++;
  }
}

console.log(count);
