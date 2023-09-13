const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

let [A, B, V] = input.map(Number);

const days = Math.ceil((V - A) / (A - B)) + 1;
console.log(days);
