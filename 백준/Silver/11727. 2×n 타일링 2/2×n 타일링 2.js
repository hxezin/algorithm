const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input)
const dp = [0, 1, 3];

for(let i = 3; i <= n; i++){
  dp[i] = (dp[i - 1] + dp[i - 2]*2) % 10007;
}

console.log(dp[n])