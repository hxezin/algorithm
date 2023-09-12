const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, X] = input[0].split(' ');
const numbers = input[1].split(' ').map(Number);

const answer = numbers.filter((num) => num < X).join(' ');
console.log(answer);
