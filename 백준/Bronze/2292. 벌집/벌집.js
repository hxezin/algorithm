const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let N = fs.readFileSync(filePath).toString().trim();

let count = 1;
let range = 1;
let temp = 1;

while (true) {
  if (range >= N) break;
  temp = 6 * count++;
  range += temp;
}

console.log(count);
