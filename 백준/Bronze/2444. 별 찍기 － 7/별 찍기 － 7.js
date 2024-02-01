const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

for (let i = 1; i <= 2 * N - 1; i++) {
  let stars = '';

  if (i <= N) {
    const spaces = ' '.repeat(N - i);
    const starCount = 2 * i - 1;
    stars = spaces + '*'.repeat(starCount);
  } else {
    const spaces = ' '.repeat(i - N);
    const starCount = 2 * (2 * N - i) - 1;
    stars = spaces + '*'.repeat(starCount);
  }

  console.log(stars);
}
