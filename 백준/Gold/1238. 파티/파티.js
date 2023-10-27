const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, X] = input[0].split(' ').map(Number)
const edges = input.slice(1);

const graph = Array.from({length: N+1}, () => []);
const reverseGraph = Array.from({length: N+1}, () => []);

edges.forEach(edge => {
  const [start, end, time] = edge.split(' ').map(Number);
  graph[start].push([end, time])
  reverseGraph[end].push([start, time])
})

let maxTime = 0;
const toPartyTime = dijkstra(X, graph);
const toHomeTime = dijkstra(X, reverseGraph);

for (let i = 1; i <= N; i++) {
  if (i !== X) {
    maxTime = Math.max(maxTime, toPartyTime[i] + toHomeTime[i]);
  }
}

console.log(maxTime)

function findMinVertex(dist, visited){
  let minVertex = -1;
  for(let i = 1; i <= N; i++){
    if(!visited[i] && (minVertex === -1 || dist[i] < dist[minVertex])){
      minVertex = i;
    }
  }
  return minVertex;
}

function dijkstra(start, graph){
  const dist = Array(N+1).fill(Infinity);
  const visited = Array(N+1).fill(false);

  dist[start] = 0;

  for(let i = 1; i <= N; i++){
    const minVertex = findMinVertex(dist, visited);
    visited[minVertex] = true;

    for(const [neighbor, weight] of graph[minVertex]){
      if(!visited[neighbor] && dist[minVertex] + weight < dist[neighbor]){
        dist[neighbor] = dist[minVertex] + weight;
      }
    }
  }

  return dist
}
