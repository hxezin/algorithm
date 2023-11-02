const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const V = Number(input[0]);
const edges = input.slice(1).map((edge) => edge.split(' ').map(Number));

const graph = Array.from({ length: V + 1 }, () => []);
const visited = Array(V + 1).fill(false);
let maxDistance = -Infinity;
let farthestVertex = 0;

edges.forEach((edge) => {
  const v1 = edge.shift();
  for (let i = 0; i < edge.length - 1; i += 2) {
    const [v2, w] = edge.slice(i, i + 2);
    graph[v1].push([v2, w]);
    graph[v2].push([v1, w]);
  }
});

function dfs(current, distance) {
  if (visited[current]) return;
  visited[current] = true;

  if (distance > maxDistance) {
    maxDistance = distance;
    farthestVertex = current;
  }

  graph[current].forEach((vertex) => {
    const [next, dist] = vertex;
    if (!visited[next]) dfs(next, distance + dist);
  });
}

dfs(1, 0);

visited.fill(false);
maxDistance = -Infinity;

dfs(farthestVertex, 0);
console.log(maxDistance);
