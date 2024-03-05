const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
const ladders = new Map()
const snakes = new Map()

input.slice(1, 1 + N).map((ladder) => {
  const [x, y] = ladder.split(' ').map(Number)
  ladders.set(x, y)
})

input.slice(1 + N).map((snake) => {
  const [u, v] = snake.split(' ').map(Number)
  snakes.set(u, v)
})

const visited = new Array(101).fill(false)
const queue = []

queue.push({ position: 1, count: 0 })
visited[1] = true

while (queue.length > 0) {
  let current = queue.shift()

  if (current.position === 100) {
    console.log(current.count)
    break
  }

  for (let dice = 1; dice <= 6; dice++) {
    let nextPosition = current.position + dice

    if (ladders.has(nextPosition)) {
      nextPosition = ladders.get(nextPosition)
    } else if (snakes.has(nextPosition)) {
      nextPosition = snakes.get(nextPosition)
    }

    if (nextPosition <= 100 && !visited[nextPosition]) {
      visited[nextPosition] = true
      queue.push({ position: nextPosition, count: current.count + 1 })
    }
  }
}
