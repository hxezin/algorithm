/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = Array.from({length: n}, () => [])
    
    edges.forEach(el => {
        graph[el[0]].push(el[1])
        graph[el[1]].push(el[0])
    })
    
    const visited = Array(n).fill(0)
    
    const temp = []
    const queue = [];
    queue.push(source)
    
    while(queue.length){
        let curNode = queue.pop();
        
        if(curNode === destination) return true;
        if(visited[curNode] === 1) continue;
        
        visited[curNode] = 1;
        temp.push(curNode)
        
        graph[curNode].forEach(nextNode => {
            queue.push(nextNode)
        })
    }
    
    return false
};