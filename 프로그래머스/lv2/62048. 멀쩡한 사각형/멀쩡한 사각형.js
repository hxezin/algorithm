function solution(w, h) {
    let result = 0;
    for(let i = 1; i < w; i++){
        result += Math.floor((h * i) / w);
    }
    
    return result * 2
}