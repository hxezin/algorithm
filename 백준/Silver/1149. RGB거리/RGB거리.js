const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const costs = input.slice(1).map((cost) => cost.split(' ').map(Number));

const dp = Array.from({ length: N }, () => [0, 0, 0]);
dp[0] = costs[0];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    dp[i][j] =
      Math.min(dp[i - 1][(j + 1) % 3], dp[i - 1][(j + 2) % 3]) + costs[i][j];
  }
}

const result = Math.min(...dp[N - 1]);
console.log(result);
