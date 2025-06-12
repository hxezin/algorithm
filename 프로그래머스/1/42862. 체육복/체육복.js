function solution(n, lost, reserve) {
    const realLost = lost.filter(i => !reserve.includes(i))
    const realReserve = reserve.filter(i => !lost.includes(i))
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    for(let x of realReserve){
        const left = realLost.indexOf(x - 1);
        const right = realLost.indexOf(x + 1);
        
        if(left !== -1){
            realLost.splice(left, 1)
        }else if(right !== -1){
            realLost.splice(right, 1)
        }
    }
    
    return n - realLost.length
}