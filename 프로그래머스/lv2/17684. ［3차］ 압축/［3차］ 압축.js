function solution(msg) {
    const dict = {};
    for(let i = 0; i < 26; i++){
        const word = String.fromCharCode(65+i);
        dict[word] = i+1;
    }
    
    const result = [];
    const LZW = msg.split("").reduce((acc, cur) => {
        const curWord = acc + cur;
        
        if(!dict[curWord]){
            dict[curWord] = Object.keys(dict).length + 1;
        } else {
            return acc + cur;
        }
        
        if(dict[acc]){
            result.push(dict[acc]);
        }
        
        return cur;
    })
    
    result.push(dict[LZW])
    return result;
}