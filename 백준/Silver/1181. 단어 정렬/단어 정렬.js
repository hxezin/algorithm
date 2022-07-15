let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, ...arr] = input;
arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  } else {
    return a.length - b.length;
  }
});

console.log(arr.join("\n"));
