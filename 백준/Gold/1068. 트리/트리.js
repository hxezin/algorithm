const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input[0])
const tree = input[1].split(' ').map(Number)
const removedNode = Number(input[2])

let leafNodes = 0

function dfs(node) {
  if (node === removedNode) return

  let isLeafNode = true
  for (let i = 0; i < N; i++) {
    if (tree[i] === node && i !== removedNode) {
      isLeafNode = false
      dfs(i)
    }
  }

  if (isLeafNode) {
    leafNodes++
  }
}

// 시작 노드를 찾아서 dfs 호출
for (let i = 0; i < N; i++) {
  if (tree[i] === -1) {
    dfs(i)
    break
  }
}

console.log(leafNodes)
