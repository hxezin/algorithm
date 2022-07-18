const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();

let result = [];

for (let i = 0; i < T; i++) {
  let [R, S] = input[i].split(" ");
  let str = "";
  for (let j = 0; j < S.length; j++) {
    str += S[j].repeat(R);
  }
  result.push(str);
}

console.log(result.join("\n"));
