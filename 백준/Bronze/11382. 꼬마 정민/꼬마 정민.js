const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(input.reduce((acc, cur) => acc + cur, 0));
