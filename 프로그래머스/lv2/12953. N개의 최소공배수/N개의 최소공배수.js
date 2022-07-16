function solution(arr) {
    let max = Math.max(...arr)
    let multiple = max;
    
    for(let i = 2; ; i++){
        let count = 0;
        for(let number of arr){
            if(multiple % number !== 0){
                break;
            }
            if(multiple % number === 0){
                count++
            }
        }
        if(count === arr.length){
            return multiple;
        }
        multiple = max * i
    }
}