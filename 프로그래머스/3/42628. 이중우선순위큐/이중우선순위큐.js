function solution(operations) {
    const queue = [];
    
    for(const op of operations){
        const [command, value] = op.split(' ');
        const num = Number(value);
        
        if(command === 'I'){
            queue.push(num)
        }else{
            queue.sort((a, b) => a - b);
            if(num === 1){
                queue.pop()
            }else if(num === -1){
                queue.shift()
            }
        }
    }
    
    if(!queue.length) return [0,0];
    queue.sort((a, b) => a - b);
    return [queue[queue.length - 1], queue[0]]
}