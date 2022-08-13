const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const T = input.shift();

let memo = Array.from({ length: 41 }, () => [0, 0]);

const fibo = (n) => {
  if (n === 0) {
    memo[0] = [1, 0];
    return memo[0];
  }

  if (n === 1) {
    memo[1] = [0, 1];
    return memo[1];
  }

  if (memo[n][0] !== 0 || memo[n][1] !== 0) {
    return memo[n];
  }

  const n1 = fibo(n - 1, memo);
  const n2 = fibo(n - 2, memo);

  memo[n] = [n1[0] + n2[0], n1[1] + n2[1]];

  return memo[n];
};

const result = [];

input.forEach((el) => {
  result.push(fibo(el, memo).join(" "));
});

console.log(result.join("\n"));