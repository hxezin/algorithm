const helper = (s) => {
    let count = 0;
    let str = [];
    
    for(let i = 0; i < s.length; i++){
        let char = s[0];
        
        s[i] === s[0] ? count++ : count--;
        
        if(count === 0){
            str.push(s.slice(0, i + 1))
            const newStr = helper(s.slice(i + 1))
            str = [...str, ...newStr]
            break;
        }
    }
    
    if(count !== 0){
            str.push(s)
    }
    
    return str
}

function solution(s) {
    const result = helper(s)
    return result.length
}