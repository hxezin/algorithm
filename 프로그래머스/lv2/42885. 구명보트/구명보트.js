function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b)
    let left = 0;
    let right = people.length - 1;
    
    while(left < right){
        const weight = people[left] + people[right]
         
        if(weight > limit){
            right--;
        }else{
            left++;
            right--;
        }
        
        count++;
    }
    
    if(left === right){
        count++;
    }
    
    return count;
}