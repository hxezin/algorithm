function solution(s){
    s = s.toUpperCase();
    result = [0, 0]
    
    for(let letter of s){
        if(letter === "P"){
            result[0]++;
        }else if(letter === "Y"){
            result[1]++;
        }
    }
    
    return result[0] === result[1] ? true : false;
}