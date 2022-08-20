const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

input.forEach((el) => {
  const [u, v] = el.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
});

const visited = Array(N + 1).fill(false);

const dfs = (curNode) => {
  if (visited[curNode]) return;
  visited[curNode] = true;

  graph[curNode].forEach((nextNode) => {
    if (visited[nextNode] === false) {
      dfs(nextNode);
    }
  });
};

let count = 0;

for (let i = 1; i <= N; i++) {
  if (visited[i] === false) {
    dfs(i);
    count++;
  }
}

console.log(count);