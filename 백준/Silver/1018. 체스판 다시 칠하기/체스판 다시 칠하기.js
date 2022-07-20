const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [NM, ...board] = input;
const [N, M] = NM.split(" ");

const blackFirst = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const whiteFirst = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

function check(w, h) {
  let paintCheck = [0, 0];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[h + i][w + j] !== blackFirst[i][j]) {
        paintCheck[0]++;
      } else if (board[h + i][w + j] !== whiteFirst[i][j]) {
        paintCheck[1]++;
      }
    }
  }

  return Math.min(...paintCheck);
}

let change = [];
for (let h = 0; h <= N - 8; h++) {
  for (let w = 0; w <= M - 8; w++) {
    change.push(check(w, h));
  }
}

let result = Math.min(...change);

console.log(result);
