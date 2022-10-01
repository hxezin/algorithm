function solution(s) {
    const numString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = ""
    let temp = ""
    
    for(let i = 0; i < s.length; i++){
        const str = s[i].match(/[a-z]/g);
        if(str === null){
            result += s[i]
        }else{
            temp += s[i]
            if(numString.includes(temp)){
                result += numString.indexOf(temp)
                temp = ""   
            }
        }
    }
    
    return Number(result)
}