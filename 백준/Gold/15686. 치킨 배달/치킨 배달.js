const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const city = input.slice(1).map((e) => e.split(' ').map(Number));

const chickenShops = [];
const houses = [];
let minDistance = Infinity;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 2) {
      chickenShops.push([i, j]);
    } else if (city[i][j] === 1) {
      houses.push([i, j]);
    }
  }
}

function calculateChickenDistance(selectedChickenShops) {
  let totalDistance = 0;

  for (const house of houses) {
    let minDistance = Infinity;
    for (const chickenShop of selectedChickenShops) {
      const [r1, c1] = house;
      const [r2, c2] = chickenShop;
      const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);
      minDistance = Math.min(minDistance, distance);
    }
    totalDistance += minDistance;
  }

  return totalDistance;
}

function selectChickenShops(index, selected) {
  if (selected.length === M) {
    const distance = calculateChickenDistance(selected);
    minDistance = Math.min(minDistance, distance);
    return;
  }
  if (index === chickenShops.length) {
    return;
  }

  // 현재 치킨집을 선택하는 경우
  selected.push(chickenShops[index]);
  selectChickenShops(index + 1, selected);

  // 현재 치킨집을 선택하지 않는 경우
  selected.pop();
  selectChickenShops(index + 1, selected);
}

selectChickenShops(0, []);
console.log(minDistance);
