const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

function getFactorial(num) {
  if (num === 0 || num === 1) {
    return 1n;
  }

  return getFactorial(num - 1) * BigInt(num);
}

const factorial = getFactorial(N);
const arrFact = String(factorial).split('');

let count = 0;
for (let i = arrFact.length - 1; i >= 0; i--) {
  if (arrFact[i] === '0') {
    count++;
  } else {
    break;
  }
}

console.log(count);
