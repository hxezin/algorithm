const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const papers = input.slice(1);

let count = 0;
const white = Array.from(new Array(100), () => new Array(100).fill(true));

papers.forEach((paper) => {
  const [x, y] = paper.split(' ').map(Number);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (white[x + j][y + i] == false) continue;
      white[x + j][y + i] = false;
      count++;
    }
  }
});

console.log(count);
