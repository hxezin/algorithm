const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const coords = input.slice(1).sort((a, b) => {
  const [x1, y1] = a.split(' ').map(Number);
  const [x2, y2] = b.split(' ').map(Number);

  if (y1 !== y2) {
    return y1 - y2;
  } else {
    return x1 - x2;
  }
});

console.log(coords.join('\n'));
