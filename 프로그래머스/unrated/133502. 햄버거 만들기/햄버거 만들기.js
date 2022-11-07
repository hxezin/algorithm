function solution(ingredient) {
    let count = 0;
    let hamburger = [];
    
    ingredient.forEach(item => {
        hamburger.push(item)

        if(hamburger.slice(-4).join("") === "1231"){
            count++;
            hamburger.pop();
            hamburger.pop();
            hamburger.pop();
            hamburger.pop();
        }
    })
    
    return count;
}