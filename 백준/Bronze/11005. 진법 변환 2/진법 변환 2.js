const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [N, B] = input.map(Number);
console.log(N.toString(B).toUpperCase());
