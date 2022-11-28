function solution(p) {
    let count = 0;
    let check = true;
    let result = "";
    
    if(p.length === 0) return ""
    
    for(let i = 0; i < p.length; i++){
        p[i] === "(" ? count++ : count--;
        
        if(count < 0) check = false;
        
        if(count === 0){
            if(check){
                result += p.slice(0, i + 1);
                result += solution(p.slice(i + 1));
                
                return result;
            }else{
                result += "("
                result += solution(p.slice(i + 1))
                result += ")"
                result += p.slice(1, i).split("").map(el => el === "(" ? ")" : "(").join("")

                return result;
            }
            
        }
    }
}