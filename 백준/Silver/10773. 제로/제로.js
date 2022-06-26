const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let stack = [];

for (let i = 1; i <= input[0]; i++) {
  if (input[i] === 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

let result = stack.reduce((acc, cur) => acc + cur, 0);
console.log(result);