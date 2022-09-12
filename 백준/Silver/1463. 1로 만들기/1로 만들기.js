const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const memo = Array(Number(input) + 1).fill(0);

for (let i = 2; i <= input; i++) {
  memo[i] = memo[i - 1] + 1;

  if (i % 3 === 0) {
    memo[i] = Math.min(memo[i], memo[i / 3] + 1);
  }

  if (i % 2 === 0) {
    memo[i] = Math.min(memo[i], memo[i / 2] + 1);
  }
}

console.log(memo[input]);
