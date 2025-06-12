function solution(priorities, location) {
    const queue = priorities.map((p, i) => ({idx: i, priority: p}));
    let answer = 0;
    
    while(queue.length){
        const current = queue.shift();
        const hasHigher = queue.some(i => i.priority > current.priority);
        
        if(hasHigher){
            queue.push(current)
        }else{
            answer++;
            if(current.idx === location){
                return answer;
            }
        }
    }
}