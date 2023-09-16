const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const n = input.slice(1).map(Number);

const dp = new Array(12).fill(0);
dp[1] = 1; //1
dp[2] = 2; //1+1, 2
dp[3] = 4; //1+1+1, 1+2, 2+1, 3

function countWays(n) {
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

const answer = [];
for (let i = 0; i < T; i++) {
  answer.push(countWays(n[i]));
}

console.log(answer.join('\n'));
