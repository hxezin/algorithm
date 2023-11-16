const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const coloredPaper = input.slice(1).map((item) => item.split(' ').map(Number));

let white = 0;
let blue = 0;

function solution(size, x, y) {
  const halfSize = parseInt(size / 2);
  let blueCount = 0;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (coloredPaper[i][j]) blueCount++;
    }
  }

  if (blueCount === size ** 2) {
    blue++;
  } else if (!blueCount) {
    white++;
  } else {
    solution(size / 2, x, y);
    solution(size / 2, x, y + size / 2);
    solution(size / 2, x + size / 2, y);
    solution(size / 2, x + size / 2, y + size / 2);
  }
}

solution(N, 0, 0);
console.log(white);
console.log(blue);
