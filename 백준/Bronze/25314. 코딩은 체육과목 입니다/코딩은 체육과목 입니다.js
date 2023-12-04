const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

console.log('long '.repeat(N / 4) + 'int');
