function solution(numbers) {
    
//     let sum = [];
    
//     for(let i = 0; i < numbers.length - 1; i++){
//         for(let j = i + 1; j < numbers.length; j++){
//             let result = numbers[i] + numbers[j];
//             if(!sum.includes(result)){
//                 sum.push(result);
//             }
//         }
//     }
    
//     return sum.sort((a, b) => a - b)
    
    let result = [];
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            result.push(numbers[i] + numbers[j])
        }
    }
    
    return [...new Set(result)].sort((a, b) => a - b)
}