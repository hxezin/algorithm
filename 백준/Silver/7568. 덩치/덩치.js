const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const people = input.slice(1).map((el) => {
  const [weight, height] = el.split(' ').map(Number);
  return { weight, height };
});

const rankings = [];
for (let i = 0; i < N; i++) {
  let rank = 1;

  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (
        people[i].weight < people[j].weight &&
        people[i].height < people[j].height
      ) {
        rank++;
      }
    }
  }
  rankings.push(rank);
}

console.log(rankings.join(' '));
