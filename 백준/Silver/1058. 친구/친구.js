const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const friends = input.slice(1);

function solution(N, friends) {
  let max = 0;

  for (let i = 0; i < N; i++) {
    let twoFriends = 0;

    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      if (friends[i][j] === 'Y') {
        twoFriends++;
      } else {
        for (let k = 0; k < N; k++) {
          if (friends[i][k] === 'Y' && friends[j][k] === 'Y') {
            twoFriends++;
            break;
          }
        }
      }
    }

    if (twoFriends > max) max = twoFriends;
  }

  return max;
}

const answer = solution(N, friends);
console.log(answer);
