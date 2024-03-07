const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0])
const edges = input.slice(1).map((edge) => edge.split(' ').map(Number))

const nodes = Array.from({ length: n + 1 }, () => [])
const visited = Array(n + 1).fill(false)

edges.forEach((edge) => {
  const [parent, child, weight] = edge
  nodes[parent].push({ node: child, weight })
  nodes[child].push({ node: parent, weight })
})

const distance = Array(n + 1).fill(0)

function dfs(current) {
  const childrenNodes = nodes[current]
  visited[current] = true

  childrenNodes.forEach((children) => {
    const { node: child, weight } = children

    if (!visited[child]) {
      distance[child] = distance[current] + weight
      dfs(child)
    }
  })
}

dfs(1)

let maxDistanceIndex = 1
for (let i = 2; i <= n; i++) {
  if (distance[i] > distance[maxDistanceIndex]) maxDistanceIndex = i
}

visited.fill(false)
distance.fill(0)

dfs(maxDistanceIndex)

console.log(Math.max(...distance))
