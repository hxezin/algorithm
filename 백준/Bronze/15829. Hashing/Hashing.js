const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const L = Number(input[0]);
const str = input[1];

const r = 31;
const M = 1234567891;

let hash = 0;
let rPower = 1;

for (let i = 0; i < L; i++) {
  const charCode = str.charCodeAt(i) - 96;
  hash = (hash + charCode * rPower) % M;
  rPower = (rPower * r) % M;
}

console.log(hash);
