const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let max = -1;
let coord = [0, 0];

for (let i = 0; i < 9; i++) {
  const row = input[i].split(' ').map(Number);
  const rowMax = Math.max(...row);
  if (max < rowMax) {
    max = rowMax;
    coord = [i + 1, row.indexOf(max) + 1];
  }
}

console.log(max);
console.log(coord.join(' '));
