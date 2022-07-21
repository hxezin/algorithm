const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let temp = input.split(" ");
let result;

if (temp.sort((a, b) => a - b).join(" ") === input) {
  result = "ascending";
} else if (temp.sort((a, b) => b - a).join(" ") === input) {
  result = "descending";
} else {
  result = "mixed";
}

console.log(result);