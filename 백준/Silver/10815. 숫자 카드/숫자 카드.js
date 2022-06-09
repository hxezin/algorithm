let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = [+input[0], +input[2]];
let card1 = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let card2 = input[3].split(" ").map(Number);

function binarySearch(num) {
  let start = 0;
  let end = card1.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (card1[mid] !== num && start <= end) {
    if (card1[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  return card1[mid] === num ? 1 : 0;
}

let result = card2.map((el) => binarySearch(el)).join(" ");

console.log(result);
