const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let stack = input.slice(1);
let currentMax = 0;
let count = 0;

while (stack.length !== 0) {
  let element = stack.pop();
  if (currentMax < element) {
    currentMax = element;
    count++;
  }
}

console.log(count);
