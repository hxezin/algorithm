function solution(n, arr1, arr2) {
    let arr1Binary = arr1.map(el => el.toString(2).padStart(n, "0"))
    let arr2Binary = arr2.map(el => el.toString(2).padStart(n, "0"))
    
    let result = [];
    
    for(let i = 0; i < n; i++){
        let decoding = "";
        for(let j = 0; j < n; j++){
            decoding +=  arr1Binary[i][j] | arr2Binary[i][j] === "1" ? "#" : " "
        }
        result.push(decoding)
    }
    
    return result;
}