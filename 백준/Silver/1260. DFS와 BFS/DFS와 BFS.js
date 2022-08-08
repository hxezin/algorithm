const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const nums = input.map((el) => el.split(" "));

let graph = Array.from({ length: N + 1 }, () => []);

nums.forEach((el) => {
  graph[el[0]].push(el[1]);
  graph[el[1]].push(el[0]);
});

graph.forEach((el) => el.sort((a, b) => a - b));

const visited = Array(N + 1).fill(0);
const dfsResult = [];

const dfs = (curNode) => {
  if (visited[curNode] === 1) return;
  visited[curNode] = 1;
  dfsResult.push(curNode);

  graph[curNode].forEach((nextNode) => {
    if (visited[nextNode] === 0) {
      dfs(nextNode);
    }
  });
};

dfs(V);

console.log(dfsResult.join(" "));

visited.fill(0);
const bfsResult = [];
let queue = [];
queue.push(V);

while (queue.length) {
  let curNode = queue.shift();
  if (visited[curNode] === 1) continue;
  visited[curNode] = 1;
  bfsResult.push(curNode);

  graph[curNode].forEach((nextNode) => {
    if (visited[nextNode] === 0) {
      queue.push(nextNode);
    }
  });
}
console.log(bfsResult.join(" "));
