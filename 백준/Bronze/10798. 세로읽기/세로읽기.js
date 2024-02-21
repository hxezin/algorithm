const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for (let i = 0; i < 5; i++) {
  const word = input[i].split('');
  let idx = 0;
  while (idx < word.length) {
    result[idx] = (result[idx] || '') + word[idx];
    idx++;
  }
}

console.log(result.join(''));
