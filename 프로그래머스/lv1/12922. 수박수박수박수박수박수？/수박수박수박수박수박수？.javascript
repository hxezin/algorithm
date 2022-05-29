function solution(n) {
//     let result = "";
//     for(let i = 1; i <= n; i++){
//         i % 2 === 1 ? result += "수" : result +="박"
//     }
    
//     return result;
    
    return "수박".repeat(n).slice(0, n);
}