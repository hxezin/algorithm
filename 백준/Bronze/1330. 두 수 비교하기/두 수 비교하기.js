let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

let result = "";
if (A > B) {
  result = ">";
} else if (A < B) {
  result = "<";
} else {
  result = "==";
}

console.log(result);
