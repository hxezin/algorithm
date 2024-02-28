const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const T = input[0];

const coinValues = [25, 10, 5, 1];

for (let i = 1; i <= T; i++) {
  let C = input[i];

  const numberOfCoins = coinValues.map((coin) => {
    const count = Math.floor(C / coin);
    C %= coin;
    return count;
  });

  console.log(numberOfCoins.join(' '));
}
