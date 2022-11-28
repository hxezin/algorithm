function solution(p) {
    let count = 0;
    let check = true;
    let result = "";
    
    if(p.length === 0){
        return result;
    }
    
    for(let i = 0; i < p.length; i++){
        if(p[i] === "("){
            count++;
        }else if(p[i] === ")"){
            count--;
        }
        
        if(count < 0){
            check = false;
        }
        
        if(count === 0){
            if(check){
                result += p.slice(0, i + 1);
                result += solution(p.slice(i + 1));
                
                return result;
            }else{
                result += `(${solution(p.slice(i + 1))})`
                
                for(let j = 1; j < i; j++){
                    if(p[j] === "("){
                        result += ")"
                    }else if(p[j] === ")"){
                        result += "("
                    }
                }
                
                return result;
            }
            
        }
    }
}