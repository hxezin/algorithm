function solution(priorities, location) {
    var answer = 0;
    const execution = [];
    
    const queue = priorities.map((priority, idx) => {
      return {priority, location: idx}  
    })
    
    while(queue.length){
        const cur = queue.shift();
        const temp = queue.findIndex(process => cur.priority < process.priority)
        
        if(temp !== -1){
            queue.push(cur)
        }else{
            execution.push(cur)
        }
    }
    
    answer = execution.findIndex(process => process.location === location) + 1;     
    return answer;
}