const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = Array.from({ length: 15 }, () => '');

input.forEach((word) => {
  word.split('').forEach((char, idx) => {
    result[idx] += char;
  });
});

console.log(result.join(''));
