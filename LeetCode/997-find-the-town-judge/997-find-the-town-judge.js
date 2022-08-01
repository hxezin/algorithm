/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    
    if(n === 1) return 1;

    const graph = Array(n + 1).fill(0)
    
    trust.forEach(el => {
        graph[el[1]]++;
    })

    const max = Math.max(...graph)
    const maxIdx = graph.indexOf(max)
    
    if(max === n - 1 && trust.filter(el => el[0] === maxIdx).length === 0 ){
        return maxIdx;
    }
    
    return -1
};