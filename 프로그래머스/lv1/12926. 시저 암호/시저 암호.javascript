function solution(s, n) {
    let result = ""
    
    for(let letter of s){
        if(letter === " "){
            result += " "
            continue;
        }
        const code = letter.charCodeAt() + n;
        result += letter.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(code - 26) : String.fromCharCode(code);
    }
    
    return result;
}