let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = [];

for (let i = 0; i < input; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  result.push(str);
}

console.log(result.join("\n"));
