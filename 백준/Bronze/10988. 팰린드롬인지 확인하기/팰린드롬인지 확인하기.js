const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let reverse = input.split('').reverse().join('');
console.log(input === reverse ? 1 : 0);
