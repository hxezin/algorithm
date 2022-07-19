function solution(N, stages) {
    let failRate = [];
    let failure = Array(N+1).fill(0);
    let user = stages.length;
    
    for(let i = 0; i < stages.length; i++){
        failure[stages[i]]++;
    }

    for(let i = 1; i <= N + 1; i++){
        failRate.push([i, failure[i] / user])
        user -= failure[i]
    }
    
    failRate.pop()
    failRate.sort((a, b) => b[1] - a[1])
    return failRate.map(rate => rate[0])
}