const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = input.map((el) => {
  return el
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b);
});

console.log(result.slice(0, result.length - 1).join("\n"));
