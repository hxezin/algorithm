const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
let coord = input.map((el) => {
  return el.split(" ");
});

coord.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

const result = [];

coord.forEach((el) => {
  result.push(el.join(" "));
});

console.log(result.join("\n"));
