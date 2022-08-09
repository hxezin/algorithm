const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let triangle = input.map((el) =>
  el
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
);

const result = [];
triangle.forEach((el) => {
  if (el[0] ** 2 + el[1] ** 2 === el[2] ** 2) {
    result.push("right");
  } else {
    result.push("wrong");
  }
});

console.log(result.slice(0, result.length - 1).join("\n"));
