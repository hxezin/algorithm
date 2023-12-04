const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const tests = input.slice(1).map((test) => test.split(' ').map(Number));

const result = tests.map(([a, b], idx) => {
  return `Case #${idx + 1}: ${a} + ${b} = ${a + b}`;
});

console.log(result.join('\n'));
