const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const result = [];

for (let i = input; i > 0; i--) {
  result.push(i);
}

console.log(result.join("\n"));