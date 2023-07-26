function solution(s) {
    let answer = 0;
    
    for(let i = 0; i < s.length; i++){
        s = s.slice(1) + s[0];
        if(isValid(s)){
            answer++;
        }
    }
    return answer;
}

function isValid(s){
    let stack = [];

    for(let i = 0; i < s.length; i++){
        let char = s[i];

        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        } else {
            if(stack.length === 0){
                return false;
            } else {
                let last = stack[stack.length - 1];

                if((char === ')' && last === '(') || 
                   (char === ']' && last === '[') || 
                   (char === '}' && last === '{')) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }
    
    return stack.length === 0;
}