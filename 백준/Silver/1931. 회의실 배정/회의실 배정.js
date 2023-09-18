const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const meetings = input
  .slice(1)
  .map((meeting) => meeting.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let count = 0;
let currentTime = 0;

for (let i = 0; i < N; i++) {
  const [startTime, endTime] = meetings[i];
  if (startTime >= currentTime) {
    count++;
    currentTime = endTime;
  }
}

console.log(count);
