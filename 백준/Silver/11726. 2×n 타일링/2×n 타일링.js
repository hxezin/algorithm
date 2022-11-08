const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = input;
const dp = [];
dp.push(0, 1, 2);

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[n]);
