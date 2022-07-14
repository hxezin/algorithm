let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let result = 0;
for (let i = 0; i < input.length; i++) {
  result += Math.pow(input[i], 2);
}

console.log(result % 10);