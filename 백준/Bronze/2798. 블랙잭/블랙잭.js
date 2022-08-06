const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let temp = cards[i] + cards[j] + cards[k];
      if (temp <= M && max <= temp) {
        max = temp;
      }
    }
  }
}

console.log(max);