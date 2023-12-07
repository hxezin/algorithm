const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const v = Number(input[2]);

const result = numbers.filter((num) => num === v).length;

console.log(result);
