const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const result = [];

input.forEach((el) => {
  result.push(el % 42);
});

console.log([...new Set(result)].length);
