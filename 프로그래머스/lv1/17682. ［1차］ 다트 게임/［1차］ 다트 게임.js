function solution(dartResult) {
    dartResult = dartResult.split("")
    let score = [];
    let idx = -1;
    
    for(let i = 0; i < dartResult.length; i++){
        if(!isNaN(dartResult[i])){
            if(dartResult[i-1] === "1"){
                continue;
            }
            
            idx++
            if(dartResult[i] === "1" && dartResult[i+1] === "0"){
                score[idx] = 10
            }else{
                score[idx] = +dartResult[i]
            }
        }else{
            if(dartResult[i] === "S"){
                score[idx] **= 1
            }else if(dartResult[i] === "D"){
                score[idx] **= 2
            }else if(dartResult[i] === "T"){
                score[idx] **= 3
            }
            
            if(dartResult[i] === "*"){
                if(idx === 0){
                    score[idx] = score[idx] * 2
                }else{
                    score[idx - 1] = score[idx - 1] * 2
                    score[idx] = score[idx] * 2
                }
            }else if(dartResult[i] === "#"){
                score[idx] *= -1
            }
        }
    }
    return score.reduce((acc, cur) => acc + cur)
}