let input = require("fs").readFileSync("/dev/stdin").toString();

let result = [];

for (let i = 0; i < input; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  result.push(str.padStart(input, " "));
}

console.log(result.join("\n"));
