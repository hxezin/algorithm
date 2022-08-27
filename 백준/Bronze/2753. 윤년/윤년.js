const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let result = 0;
if (input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0)) {
  result = 1;
}

console.log(result);
