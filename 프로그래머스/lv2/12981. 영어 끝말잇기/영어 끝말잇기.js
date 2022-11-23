function solution(n, words) {
    let start = words[0][words[0].length - 1]
    const speak = [];
    
    for(let i = 0; i < words.length; i++){     
        const first = words[i][0]
        const last = words[i][words[i].length - 1]
        
        if(i !== 0 && start !== first || speak.includes(words[i])){
            return [i % n + 1, Math.floor(i / n) + 1]
        }
    
        start = last
        speak.push(words[i])
    }
    
    return [0, 0]
}