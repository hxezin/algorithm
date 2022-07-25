const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const list = input;

let temp = {};
for (let i = 0; i <= input.length - 1; i++) {
  if (!temp[list[i]]) {
    temp[[list[i]]] = 1;
  } else {
    temp[[list[i]]]++;
  }
}

let result = [];
for (let key in temp) {
  if (temp[key] > 1) {
    result.push(key);
  }
}

console.log(`${result.length}\n${result.sort().join("\n")}`);
