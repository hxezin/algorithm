const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n1, n2] = input;
const result = [];

for (let i = 2; i >= 0; i--) {
  result.push(Number(n1) * Number(n2[i]));
}

result.push(Number(n1) * Number(n2));

console.log(result.join('\n'));
