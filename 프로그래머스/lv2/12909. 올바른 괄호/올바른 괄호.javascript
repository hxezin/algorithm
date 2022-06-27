function solution(s){
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(i === 0){
            stack.push(s[i])
            continue;
        }
        
        if(stack[stack.length-1] === "(" && s[i] === ")"){
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    
    return stack.length === 0 ? true : false;
}