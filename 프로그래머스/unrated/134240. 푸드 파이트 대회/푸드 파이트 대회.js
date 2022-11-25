function solution(food) {
    let left = ""
    
    for(let i = 1; i < food.length; i++){
        const temp = Math.floor(food[i] / 2);
        left += String(i).repeat(temp)
    }
    
    return `${left}0${[...left].reverse().join("")}`
}