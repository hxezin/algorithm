const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, E] = input[0].split(' ').map(Number);
const edges = input.slice(1, E + 1).map((edge) => edge.split(' ').map(Number));
const [v1, v2] = input[E + 1].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

edges.forEach((edge) => {
  const [start, end, distance] = edge;
  graph[start][end] = distance;
  graph[end][start] = distance;
});

function dijkstra(graph, start) {
  const distances = Array(N + 1).fill(Infinity);
  const visited = Array(N + 1).fill(false);

  distances[start] = 0;

  for (let i = 0; i < N; i++) {
    const currentVertex = minDistanceVertex(distances, visited);
    visited[currentVertex] = true;

    for (const neighbor in graph[currentVertex]) {
      const newDistance =
        distances[currentVertex] + graph[currentVertex][neighbor];
      if (!visited[neighbor] && newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
      }
    }
  }

  return distances;
}

function minDistanceVertex(distances, visited) {
  let minDistance = Infinity;
  let minVertex = null;

  for (let vertex = 1; vertex <= N; vertex++) {
    if (!visited[vertex] && distances[vertex] <= minDistance) {
      minDistance = distances[vertex];
      minVertex = vertex;
    }
  }

  return minVertex;
}

const distancesFromStart = dijkstra(graph, 1);
const distancesFromV1 = dijkstra(graph, v1);
const distancesFromV2 = dijkstra(graph, v2);

const path1 = distancesFromStart[v1] + distancesFromV1[v2] + distancesFromV2[N];
const path2 = distancesFromStart[v2] + distancesFromV2[v1] + distancesFromV1[N];

const shortestPath = Math.min(path1, path2);

console.log(shortestPath < Infinity ? shortestPath : -1);
