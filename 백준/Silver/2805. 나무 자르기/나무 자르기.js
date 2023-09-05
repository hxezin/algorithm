const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ');
const treeHeights = input[1].split(' ');

let left = 0;
let right = Math.max(...treeHeights);
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let totalCut = 0;

  for (const height of treeHeights) {
    if (height > mid) {
      totalCut += height - mid;
    }
  }

  if (totalCut >= M) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
