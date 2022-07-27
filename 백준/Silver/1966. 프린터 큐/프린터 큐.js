const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [num, ...test] = input;
test = test.map((el) => el.split(" "));

let result = [];

for (let i = 0; i < num; i++) {
  let count = 0;
  let M = Number(test[i * 2][1]);
  let queue = test[i * 2 + 1].map(Number);

  while (queue.length > 0) {
    let temp = queue.shift();
    let max = Math.max(...queue);
    M--;

    if (temp >= max) {
      count++;
      if (M < 0) {
        result.push(count);
        break;
      }
    } else if (temp < max) {
      queue.push(temp);
      if (M < 0) {
        M = queue.length - 1;
      }
    }
  }
}

console.log(result.join("\n"));
