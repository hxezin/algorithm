function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    
    while(days.length > 0) {
        let deploy = 1;
        let curDay = days.shift();
        
        while(days[0] <= curDay) {
            days.shift();
            deploy++;
        }
        
        answer.push(deploy);
    }
    
    return answer;
}


