const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = [];

for (let i = 0; i < input.length - 1; i++) {
  let reverse = input[i].split("").reverse().join("");
  result.push(input[i] === reverse ? "yes" : "no");
}

console.log(result.join("\n"));