const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [S, i] = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(S[i - 1]);
