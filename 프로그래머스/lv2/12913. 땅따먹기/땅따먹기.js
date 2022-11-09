function solution(land) {
    for(let i = 0; i < land.length; i++){
        for(let j = 0; j < 4; j++){
            if(i === 0){
                continue;
            }
            land[i][j] += Math.max(...land[i-1].filter((el, idx) => idx !== j))
        }
    }
    
    return Math.max(...land.pop())
}