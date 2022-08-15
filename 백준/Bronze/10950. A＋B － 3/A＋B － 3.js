const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
const result = [];

input.forEach((el) => {
  const sum = el
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b);
  result.push(sum);
});

console.log(result.join("\n"));