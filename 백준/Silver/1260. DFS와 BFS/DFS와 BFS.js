const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, V] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" "));

let graph = Array.from({ length: N + 1 }, () => []);

for (let el of input) {
  graph[el[0]].push(el[1]);
  graph[el[1]].push(el[0]);
}

graph.forEach((el) => el.sort((a, b) => a - b));

const visited = Array(N + 1).fill(0);
const resultDfs = [];

const dfs = (curNode) => {
  if (visited[curNode]) return;
  visited[curNode] = 1;
  resultDfs.push(curNode);

  for (let nextNode of graph[curNode]) {
    if (visited[nextNode] === 0) {
      dfs(nextNode);
    }
  }
};

dfs(V);

const resultBfs = [];
const queue = [];
queue.push(V);

visited.fill(0);

while (queue.length) {
  let curNode = queue.shift();

  if (visited[curNode] === 1) continue;

  visited[curNode] = 1;
  resultBfs.push(curNode);

  for (let nextNode of graph[curNode]) {
    if (visited[nextNode] === 0) {
      queue.push(nextNode);
    }
  }
}

console.log(`${resultDfs.join(" ")}\n${resultBfs.join(" ")}`);
