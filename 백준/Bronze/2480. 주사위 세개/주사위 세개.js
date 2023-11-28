const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [dice1, dice2, dice3] = input;

if (dice1 === dice2 && dice2 === dice3) {
  console.log(10000 + dice1 * 1000);
} else if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
  console.log(1000 + (dice1 === dice2 ? dice1 : dice3) * 100);
} else {
  console.log(Math.max(dice1, dice2, dice3) * 100);
}
