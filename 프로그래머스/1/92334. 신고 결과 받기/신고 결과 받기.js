function solution(id_list, report, k) {
    // 해당 유저를 신고한 유저 리스트
    const graph = {};
    
    for(const r of report){
        const [from ,to] = r.split(' ')
        if(!graph[to]){
            graph[to] = new Set()
        }
        graph[to].add(from)
    }
    
    const mail = Array(id_list.length).fill(0);
    for(const user in graph){
        if(graph[user].size >= k){
            graph[user].forEach(i => {
                const idx = id_list.indexOf(i)
                mail[idx] += 1;
            })
        }
    }
    

    return mail
}