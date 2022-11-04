function solution(N, road, K) {
    let graph = {}
    
    for(let i = 1; i <= N; i++){
        graph[i] = [];
    }
    
    road.forEach(el => {
        const [a, b, c] = el;
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    })
    
    const deliveryTime = Array(N+1).fill(Infinity);
    const queue = [];
    queue.push([1, 0]);
    
    while(queue.length){
        const [curTown, totalTime] = queue.shift();
        if(deliveryTime[curTown] <= totalTime){
            continue;
        }
        deliveryTime[curTown] = Math.min(deliveryTime[curTown], totalTime);
        
        graph[curTown].forEach(el => {
            const [nextTown, nextTime] = el;
            queue.push([nextTown, totalTime + nextTime]);
        })
    }
    
    return deliveryTime.filter(time => time > 0 && time <= K).length + 1;
}