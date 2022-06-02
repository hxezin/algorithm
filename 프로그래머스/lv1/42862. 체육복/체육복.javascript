function solution(n, lost, reserve) {
    let realLost = [];
    
    lost.sort();
    reserve.sort();

    for(let x of lost){
        if(reserve.indexOf(x) === -1){
            realLost.push(x);
        }else{
            reserve.splice(reserve.indexOf(x), 1)
        }
    } 
    
    for(let x of reserve){
        if(realLost.includes(x - 1)){
            realLost.splice(realLost.indexOf(x - 1), 1)
        }else if(realLost.includes(x + 1)){
            realLost.splice(realLost.indexOf(x + 1), 1)
        }
    }
    
    return n - realLost.length
}