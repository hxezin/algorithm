const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const [start, end] = input.shift().split("*");

const result = [];

input.forEach((file) => {
  const pattern = new RegExp(`^${start}\\w*${end}$`);
  result.push(pattern.test(file) ? "DA" : "NE");
});

console.log(result.join("\n"));
