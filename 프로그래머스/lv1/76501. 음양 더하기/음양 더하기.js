function solution(absolutes, signs) {
    let result = 0;
    
    absolutes.forEach((el, index) => {
       result += signs[index] ? el : -el 
    })
    
    return result
}