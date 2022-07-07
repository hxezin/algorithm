let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [x, y, w, h] = input;

function solution(x, y, w, h) {
  if (x === 1 || y === 1 || x === w || y === h) {
    return 1;
  }
  return Math.min(x, y, w - x, h - y);
}

console.log(solution(x, y, w, h));
