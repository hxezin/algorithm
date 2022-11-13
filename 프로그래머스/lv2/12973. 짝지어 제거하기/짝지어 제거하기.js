function solution(s){
    const stack = [];
    stack.push(s[0])
    
    for(let i = 1; i < s.length; i++){
        const letter = stack[stack.length - 1];
        
        if(s[i] === letter){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
        
    }
    
    return stack.length > 0 ? 0 : 1
}