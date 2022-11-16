function solution(brown, yellow) {
    const area = brown + yellow;
    
    for(let width = brown; width >= 3; width--){
        if(area % width !== 0){
            continue;
        }
        
        const height = area / width;
        if(yellow === (width - 2) * (height - 2)){
            return [width, height]
        }
    }
}