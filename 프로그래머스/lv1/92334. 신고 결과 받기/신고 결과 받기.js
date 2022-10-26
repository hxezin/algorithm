function solution(id_list, report, k) {
    const graph = {};
    
    id_list.forEach(id => {
        graph[id] = new Set();
    })
    
    // graph = {유저 id: {해당 유저를 신고한 id}}
    report.forEach(el => {
        const [user1, user2] = el.split(" ");
        graph[user2].add(user1)
    })

    // 정지 메일 받은 횟수
    const mailCount = Array(id_list.length).fill(0)
    
    // 신고 횟수가 k 이상일 경우
    // 해당 유저를 신고한 유저에게 메일 발송
    Object.keys(graph).forEach(id => {
        if(graph[id].size >= k){
            graph[id].forEach(el => {
                mailCount[id_list.indexOf(el)]++;
            })
        }
    })
    
    return mailCount;
}