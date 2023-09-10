const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(filePath).toString().trim();

let sugar5 = Math.floor(N / 5);
let remainWeight = N - sugar5 * 5;
let answer;

while (remainWeight % 3 !== 0 && sugar5 > 0) {
  sugar5--;
  remainWeight += 5;
}

if (remainWeight % 3 === 0) {
  answer = sugar5 + remainWeight / 3;
} else {
  answer = -1;
}

console.log(answer);
