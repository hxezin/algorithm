function solution(participant, completion) {
    let temp = {}
    let result = ""
    
    for(let i = 0; i < participant.length; i++){
        if(!temp[participant[i]]){
            temp[participant[i]] = 1;
        }else{
            temp[participant[i]]++;
        }
    }
    
    for(let key of completion){
        if(temp[key] >= 1){
            temp[key]--;
        }
    }
    
    for(let key in temp){
        if(temp[key] >= 1){
            result = key
            break;
        }
    }
    
    return result
}

