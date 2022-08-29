function solution(N, stages) {
    let user = stages.length;
    
    // 스테이지별 실패한 사람 수
    const failure = Array(N+1).fill(0);
    for(let i = 0; i < user; i++){
        failure[stages[i]]++;
    }
    
    // 실패율
    let failureRate = [];
    for(let i = 1; i < N + 1; i++){
        failureRate.push([i, failure[i] / user])
        user -= failure[i]
    }
    
    failureRate.sort((a, b) => b[1] - a[1])
    return failureRate.map(stage => stage[0])
}