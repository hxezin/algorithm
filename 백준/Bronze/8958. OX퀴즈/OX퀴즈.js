const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tests = input.shift();

let result = [];
for (let i = 0; i < tests; i++) {
  let count = 0;
  let sum = 0;

  for (let el of input[i]) {
    if (el === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  result.push(sum);
}

console.log(result.join("\n"));
