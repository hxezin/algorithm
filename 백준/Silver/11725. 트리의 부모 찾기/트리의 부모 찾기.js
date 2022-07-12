const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, ...node] = input;
N = Number(N);
node = node.map((el) => el.split(" "));

let graph = Array.from({ length: N + 1 }, () => []);

for (let el of node) {
  graph[el[0]].push(el[1]);
  graph[el[1]].push(el[0]);
}

let parents = Array(N + 1).fill(-1);
parents[1] = 0;

let queue = [];
queue.push(1);

const dfs = (graph, parents, curNode) => {
  for (let nextNode of graph[curNode]) {
    if (parents[nextNode] === -1) {
      parents[nextNode] = curNode;
      dfs(graph, parents, nextNode);
    }
  }
};

dfs(graph, parents, 1);
console.log(parents.slice(2).join("\n"));
