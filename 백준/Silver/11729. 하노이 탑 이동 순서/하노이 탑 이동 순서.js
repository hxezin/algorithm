let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = parseInt(input);
let count = 0;
let result = [];

function hanoi(num, from, to) {
  if (num === 0) return;
  else {
    hanoi(num - 1, from, 6 - from - to);

    result.push([from, to]);
    count++;

    hanoi(num - 1, 6 - from - to, to);
  }

  return count;
}

hanoi(n, 1, 3);
console.log(count);
console.log(result.map((el) => el.join(" ")).join("\n"));
