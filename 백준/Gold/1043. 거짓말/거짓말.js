const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const truth = input.shift().split(" ").map(Number).slice(1);
const parties = input.map((el) => el.split(" ").map(Number).slice(1));
const graph = Array.from({ length: N + 1 }, () => new Set());

const helper = (party) => {
  for (let i = 0; i < party.length - 1; i++) {
    for (let j = i + 1; j < party.length; j++) {
      graph[party[i]].add(party[j]);
      graph[party[j]].add(party[i]);
    }
  }
};

for (let party of parties) {
  if (party.length < 2) continue;
  helper(party);
}

const dfs = (visited, cur) => {
  let result = false;
  if (truth.includes(cur)) return true;
  visited[cur] = true;

  for (let next of graph[cur]) {
    if (visited[next]) continue;
    result = dfs(visited, next);
    if (result === true) return result;
  }

  return result;
};

let count = 0;
for (let party of parties) {
  let lie = true;
  for (let person of party) {
    const visited = Array(N + 1).fill(false);
    if (dfs(visited, person)) {
      lie = false;
      break;
    }
  }
  if (lie) {
    count++;
  }
}

console.log(count);
