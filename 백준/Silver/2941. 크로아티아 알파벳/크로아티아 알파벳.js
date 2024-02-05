const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const croatianAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let count = 0;
let index = 0;

while (index < input.length) {
  let found = false;

  for (const alphabet of croatianAlphabets) {
    if (input.startsWith(alphabet, index)) {
      index += alphabet.length;
      found = true;
      break;
    }
  }

  if (!found) {
    index++;
  }

  count++;
}

console.log(count);
