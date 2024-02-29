const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let N = parseInt(input);
console.log((1 + 2 ** N) ** 2);
