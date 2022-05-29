function solution(x) {
    let arr = String(x).split("");
    let sum = 0
    
    for(let el of arr){
        sum += parseInt(el);
    }
    
    return x % sum === 0 ? true : false
}