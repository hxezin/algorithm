let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input.map((el) => parseInt(el));

for (let num of arr) {
  let start = 1;
  let end = 50;
  let mid = Math.floor((start + end) / 2);

  let result = "";

  if (num === 0) {
    return;
  }

  while (start <= end) {
    if (mid < num) {
      start = mid + 1;
    } else if (mid > num) {
      end = mid - 1;
    }
    result += mid + " ";

    if (mid === num) {
      break;
    }

    mid = Math.floor((start + end) / 2);
  }

  console.log(result);
}
