let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

function solution(defense, percent) {
  let ignore = defense - (defense * percent) / 100;

  if (ignore >= 100) return 0;
  return 1;
}

console.log(solution(a, b));