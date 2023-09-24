function solution(babbling) {
    let count= 0;
    const validWords = ['aya', 'ye', 'woo', 'ma']
    
    babbling.forEach((words) => {
        let stack = [];
        let current = '';
        let possible = true;
        
        for(let i = 0; i < words.length; i++){
            current += words[i];
            
            if(validWords.includes(current)){
                const pre = stack.pop();              
                if(pre === undefined || pre !== current){
                    stack.push(current);
                    current = '';   
                }else{
                    possible = false;
                    break;
                }
            }
            
            if(i === words.length - 1 && current.length !== 0){
                possible = false;
                break;
            }
        }

        if(possible) count++;
    })
    
    return count;
}