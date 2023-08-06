const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const buttons = M > 0 ? input[2].split(' ').map(Number) : [];

// 해당 채널로 이동 가능한지 확인
function canPress(num) {
  if (num === 0) {
    return buttons.includes(0) ? false : true;
  }

  // 채널의 각 버튼 검사
  while (num > 0) {
    if (buttons.includes(num % 10)) return false;
    num = Math.floor(num / 10);
  }

  return true;
}

// + 또는 - 버튼으로만 채널 이동
let minPress = Math.abs(N - 100);

for (let i = 0; i <= 1000000; i++) {
  if (canPress(i)) {
    const pressCount = String(i).length + Math.abs(N - i);
    minPress = Math.min(pressCount, minPress);
  }
}

console.log(minPress);
