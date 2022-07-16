function solution(left, right) {
    let count = {}
    for(let i = left; i <= right; i++){
        let temp = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
               temp++;
            }
        }
        count[i] = temp;
    }
    
    let result = 0;
    for(let key in count){
        key = Number(key)
        result += count[key] % 2 === 0 ? key : key * -1
    }
    
    return result
}