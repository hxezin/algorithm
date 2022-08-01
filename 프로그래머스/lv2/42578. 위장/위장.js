function solution(clothes) {
    let wear = {}
    
    clothes.forEach(el =>{
        wear[el[1]] = (wear[el[1]] || 1) + 1;
    })
    
    return Object.values(wear).reduce((acc, cur) => acc *= cur,1) - 1
}