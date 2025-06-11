function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    const visited = new Set();
    const queue = [{ word: begin, count: 0}];
    
    while(queue.length){
        const { word, count } = queue.shift();
        if(word === target) return count;
        
        for(let next of words){
            if(!visited.has(next) && isOneLetterDifferent(word, next)){
                visited.add(next);
                queue.push({ word: next, count: count + 1});
            }
        }
    }
    
    return 0;
}

function isOneLetterDifferent(a, b) {
    let diff = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) diff++;
        if(diff > 1) return false;
    }
    
    return diff === 1;
}