const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, B] = input[0].split(' ').map(Number);
const heights = input.slice(1).map((height) => height.split(' ').map(Number));

let minTime = Infinity;
let maxHeight = 0;

for (let targetHeight = 0; targetHeight <= 256; targetHeight++) {
  let blocks = B;
  let time = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const currentHeight = heights[i][j];
      const difference = Math.abs(currentHeight - targetHeight);

      if (currentHeight < targetHeight) {
        time += difference;
        blocks -= difference;
      } else {
        time += 2 * difference;
        blocks += difference;
      }
    }
  }

  if (blocks < 0) continue;

  if (time <= minTime) {
    minTime = time;
    maxHeight = targetHeight;
  }
}

console.log(minTime, maxHeight);
