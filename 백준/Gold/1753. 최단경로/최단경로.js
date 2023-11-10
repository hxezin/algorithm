const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [V, E] = input[0].split(' ').map(Number);
const start = Number(input[1]);
const edges = input.slice(2).map((edge) => edge.split(' ').map(Number));

const graph = Array.from({ length: V + 1 }, () => ({}));

const distances = Array(V + 1).fill(Infinity);
const visited = Array(V + 1).fill(false);

const minDistanceVertex = (distances, visited) => {
  let minDistance = Infinity;
  let minVertex = null;

  for (let i = 1; i <= V; i++) {
    if (!visited[i] && distances[i] < minDistance) {
      minDistance = distances[i];
      minVertex = i;
    }
  }

  return minVertex;
};

edges.forEach((edge) => {
  const [v1, v2, weight] = edge;
  graph[v1][v2] = graph[v1][v2] ? Math.min(graph[v1][v2], weight) : weight;
});

distances[start] = 0;

while (true) {
  const currentVertex = minDistanceVertex(distances, visited);
  if (!currentVertex) break;

  visited[currentVertex] = true;

  for (let neighbor in graph[currentVertex]) {
    const newDistance =
      distances[currentVertex] + graph[currentVertex][neighbor];
    if (!visited[neighbor] && newDistance < distances[neighbor]) {
      distances[neighbor] = newDistance;
    }
  }
}

const result = distances
  .slice(1)
  .map((dist) => {
    if (dist === Infinity) return 'INF';
    return dist;
  })
  .join('\n');

console.log(result);
