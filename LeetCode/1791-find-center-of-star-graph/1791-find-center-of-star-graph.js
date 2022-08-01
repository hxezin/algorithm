/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    
    const graph = Array(100001).fill(0)
    
    edges.forEach(el => {
        graph[el[0]]++;
        graph[el[1]]++;
    })

    return graph.indexOf(Math.max(...graph))
};