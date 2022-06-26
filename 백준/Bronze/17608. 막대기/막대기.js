const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let stack = [...input];
stack = stack.slice(1);
let currentMin = 0;
let count = 0;

while (stack.length !== 0) {
  let element = stack.pop();
  if (currentMin < element) {
    currentMin = element;
    count++;
  }
}

console.log(count);
