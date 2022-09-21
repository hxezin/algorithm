function solution(id_list, report, k) {
    const graph = {};
    id_list.forEach(el => {
        graph[el] = new Set()
    })
    
    report.forEach(el => {
        const [a, b] = el.split(" ");
        graph[b].add(a)
    })
    
    const count = Array(id_list.length).fill(0);
    for(let key of Object.keys(graph)){
        if(graph[key].size >= k){
            graph[key].forEach(el => {
                count[id_list.indexOf(el)]++;
            })
        }
    }
    
    return count
    
}