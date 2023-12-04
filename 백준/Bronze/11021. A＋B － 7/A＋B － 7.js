const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const tests = input.slice(1).map((test) => test.split(' ').map(Number));

const result = tests.map((test, idx) => {
  const sum = test.reduce((acc, cur) => acc + cur, 0);
  return `Case #${idx + 1}: ${sum}`;
});

console.log(result.join('\n'));
